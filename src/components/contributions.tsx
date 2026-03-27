import { useState, useEffect, useRef, CSSProperties } from "react";

const COLORS_LIGHT = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const COLORS_DARK  = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// Dynamically generate years from 2023 up to the current year — updates every year automatically
const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from(
  { length: CURRENT_YEAR - 2023 + 1 },
  (_, i) => String(CURRENT_YEAR - i)  // most recent first
);

interface Contribution { date: string; count: number; level: number; }
interface ApiResponse  { contributions: Contribution[]; total: Record<string, number>; }
interface TooltipState { visible: boolean; text: string; x: number; y: number; }

interface TokenSet {
  bg: string; surface: string; surfaceHov: string; border: string; borderHov: string;
  title: string; body: string; muted: string; accent: string; accentHov: string;
  accentDim: string; pillBg: string; pillText: string; pillBorder: string;
  cardShadow: string; toggleBg: string; toggleBorder: string; toggleText: string;
  divider: string; dot1: string; dot2: string;
}

function getLevel(n: number): number {
  return n === 0 ? 0 : n <= 2 ? 1 : n <= 5 ? 2 : n <= 9 ? 3 : 4;
}

interface Props {
  username?: string;
  theme?: "dark" | "light";
  tokens?: TokenSet;
  style?: CSSProperties;
}

export default function GitHubContributions({
  username = "franklin-pro",
  theme: themeProp,
  tokens: tokensProp,
  style: styleProp,
}: Props) {
  const [year, setYear]       = useState(String(CURRENT_YEAR));
  const [data, setData]       = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, text: "", x: 0, y: 0 });
  const [copied, setCopied]   = useState(false);
  const cache   = useRef<Record<string, ApiResponse>>({});
  const wrapRef = useRef<HTMLDivElement>(null);

  const isDark = themeProp !== undefined
    ? themeProp === "dark"
    : typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const COLORS = isDark ? COLORS_DARK : COLORS_LIGHT;

  // Resolve all colors from parent tokens or fall back to sensible defaults per theme
  const accent        = tokensProp?.accent  ?? (isDark ? "#22c55e" : "#16a34a");
  const surface       = tokensProp?.surface ?? (isDark ? "#111113" : "#ffffff");
  const border        = tokensProp?.border  ?? (isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)");
  const titleColor    = tokensProp?.title   ?? (isDark ? "#f4f4f5" : "#111827");
  const mutedColor    = tokensProp?.muted   ?? (isDark ? "#52525b" : "#9ca3af");
  const bodyColor     = tokensProp?.body    ?? (isDark ? "#a1a1aa" : "#6b7280");
  const statBg        = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)";
  const codeBg        = isDark ? "#0d0d0f" : "#f8f8f8";
  const codeHeaderBg  = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const tooltipBg     = isDark ? "#1c1c1f" : "#ffffff";
  const tooltipBorder = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";
  const tooltipColor  = isDark ? "#f4f4f5" : "#111827";

  useEffect(() => {
    async function load() {
      if (cache.current[year]) { setData(cache.current[year]); setLoading(false); return; }
      setLoading(true); setError(false);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
        );
        if (!res.ok) throw new Error();
        const json: ApiResponse = await res.json();
        cache.current[year] = json;
        setData(json);
      } catch { setError(true); }
      finally { setLoading(false); }
    }
    load();
  }, [year, username]);

  const contributions: Contribution[] = data?.contributions ?? [];
  const total = data?.total?.[year] ?? contributions.reduce((s, d) => s + d.count, 0);

  const streak = (() => {
    let mx = 0, cur = 0;
    for (const d of contributions) { if (d.count > 0) { cur++; mx = Math.max(mx, cur); } else cur = 0; }
    return mx;
  })();

  const activeDays = contributions.filter(d => d.count > 0).length;
  const best = contributions.reduce(
    (a, b) => (a.count >= b.count ? a : b),
    { count: 0, date: "", level: 0 } as Contribution
  );

  const buildWeeks = (): (Contribution | null)[][] => {
    if (!contributions.length) return [];
    const first = new Date(contributions[0].date);
    const startDow = first.getDay();
    const weeks: (Contribution | null)[][] = [];
    let week: (Contribution | null)[] = new Array(startDow).fill(null);
    for (const d of contributions) {
      week.push(d);
      if (week.length === 7) { weeks.push(week); week = []; }
    }
    if (week.length) { while (week.length < 7) week.push(null); weeks.push(week); }
    return weeks;
  };

  const weeks = buildWeeks();
  const cellSize = 12, gap = 3, step = cellSize + gap;
  const paddingLeft = 30, paddingTop = 22;
  const svgW = paddingLeft + weeks.length * step;
  const svgH = paddingTop + 7 * step;

  const handleMouseMove = (e: React.MouseEvent, day: Contribution) => {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setTooltip({
      visible: true,
      text: `${day.count} contribution${day.count !== 1 ? "s" : ""} · ${day.date}`,
      x: e.clientX - bounds.left + 10,
      y: e.clientY - bounds.top - 34,
    });
  };

  const apiUrl = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`;
  const codeSnippet =
    `const response = await fetch(\n  "${apiUrl}"\n);\n\nconst data = await response.json();\n\n` +
    `// data.contributions → [{ date, count, level }]\n// data.total["${year}"] → total count\n\n` +
    `console.log(data.total["${year}"]);`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const styles: Record<string, CSSProperties> = {
    section:     { fontFamily: "'Montserrat', sans-serif", padding: "32px 0 0", backgroundColor: "transparent", ...styleProp },
    card:        { backgroundColor: surface, border: `1px solid ${border}`, borderRadius: 16, padding: "28px 32px" },
    topBar:      { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 },
    usernameRow: { display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: titleColor },
    avatar:      { width: 28, height: 28, borderRadius: "50%", background: statBg, border: `0.5px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" },
    yearTabs:    { display: "flex", gap: 4, flexWrap: "wrap" },
    statsRow:    { display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" },
    statBox:     { background: statBg, borderRadius: 8, padding: "9px 14px", flex: 1, minWidth: 110 },
    statLabel:   { fontSize: 10, color: mutedColor, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 },
    statValue:   { fontSize: 18, fontWeight: 700, color: titleColor },
    graphWrap:   { overflowX: "auto", position: "relative" },
    graphInner:  { position: "relative", display: "inline-block", minWidth: 680 },
    legendRow:   { display: "flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 11, color: mutedColor },
    codeSection: { marginTop: 20, borderRadius: 10, border: `0.5px solid ${border}`, overflow: "hidden" },
    codeHeader:  { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 14px", background: codeHeaderBg, borderBottom: `0.5px solid ${border}` },
    codeTitle:   { fontSize: 11, color: mutedColor, letterSpacing: "0.06em", textTransform: "uppercase" },
    copyBtn:     { fontSize: 11, padding: "3px 10px", borderRadius: 6, border: `0.5px solid ${border}`, background: "transparent", color: bodyColor, cursor: "pointer", fontFamily: "monospace" },
    codeBody:    { background: codeBg, padding: "14px 16px", fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre" },
  };

  const yearBtnStyle = (y: string): CSSProperties => ({
    padding: "5px 13px", borderRadius: 99, fontSize: 12, fontWeight: 500,
    border: y === year ? `1px solid ${accent}` : `0.5px solid ${border}`,
    background: y === year ? accent : "transparent",
    color: y === year ? (isDark ? "#09090b" : "#fff") : bodyColor,
    cursor: "pointer", transition: "all 0.15s",
  });

  return (
    <section style={styles.section}>
      <div style={styles.card}>

        {/* Top bar */}
        <div style={styles.topBar}>
          <div style={styles.usernameRow}>
            <div style={styles.avatar}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={mutedColor} strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            {username}
          </div>
          <div style={styles.yearTabs}>
            {YEARS.map(y => (
              <button key={y} style={yearBtnStyle(y)} onClick={() => setYear(y)}>{y}</button>
            ))}
          </div>
        </div>

        {/* Stats */}
        {loading ? (
          <div style={{ ...styles.statBox, color: mutedColor, fontSize: 13, marginBottom: 20 }}>Loading…</div>
        ) : error ? (
          <div style={{ color: mutedColor, fontSize: 13, marginBottom: 20 }}>Could not load data.</div>
        ) : (
          <div style={styles.statsRow}>
            {[
              { l: "Total",          v: total.toLocaleString() },
              { l: "Active days",    v: String(activeDays) },
              { l: "Longest streak", v: `${streak} days` },
              { l: "Best day",       v: best.count + (best.date ? ` · ${best.date.slice(5)}` : "") },
            ].map(s => (
              <div key={s.l} style={styles.statBox}>
                <div style={styles.statLabel}>{s.l}</div>
                <div style={styles.statValue}>{s.v}</div>
              </div>
            ))}
          </div>
        )}

        {/* Graph */}
        {!loading && !error && (
          <div style={styles.graphWrap}>
            <div style={styles.graphInner} ref={wrapRef}>
              <svg width={svgW} height={svgH} style={{ display: "block" }}>
                {[1, 3, 5].map(d => (
                  <text key={d} x={paddingLeft - 4} y={paddingTop + d * step + cellSize - 2}
                    textAnchor="end" style={{ fontSize: 10, fill: mutedColor, fontFamily: "monospace" }}>
                    {DAYS[d]}
                  </text>
                ))}
                {(() => {
                  const labels: React.ReactNode[] = [];
                  let lastMonth = -1;
                  weeks.forEach((wk, wi) => {
                    const fr = wk.find(d => d !== null);
                    if (fr) {
                      const m = new Date(fr.date).getMonth();
                      if (m !== lastMonth) {
                        lastMonth = m;
                        labels.push(
                          <text key={wi} x={paddingLeft + wi * step} y={paddingTop - 6}
                            style={{ fontSize: 11, fill: mutedColor, fontFamily: "monospace" }}>
                            {MONTHS[m]}
                          </text>
                        );
                      }
                    }
                  });
                  return labels;
                })()}
                {weeks.map((wk, wi) =>
                  wk.map((day, di) => {
                    if (!day) return null;
                    return (
                      <rect key={`${wi}-${di}`}
                        x={paddingLeft + wi * step} y={paddingTop + di * step}
                        width={cellSize} height={cellSize} rx={2}
                        fill={COLORS[getLevel(day.count)]}
                        style={{ cursor: "default" }}
                        onMouseMove={e => handleMouseMove(e, day)}
                        onMouseLeave={() => setTooltip(t => ({ ...t, visible: false }))}
                      />
                    );
                  })
                )}
              </svg>
              {tooltip.visible && (
                <div style={{
                  position: "absolute", left: tooltip.x, top: tooltip.y,
                  background: tooltipBg, border: `0.5px solid ${tooltipBorder}`,
                  borderRadius: 6, padding: "5px 10px", fontSize: 11,
                  color: tooltipColor, pointerEvents: "none", whiteSpace: "nowrap",
                  fontFamily: "monospace", zIndex: 20,
                }}>
                  {tooltip.text}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Legend */}
        {!loading && !error && (
          <div style={styles.legendRow}>
            <span>Less</span>
            {COLORS.map((c, i) => (
              <div key={i} style={{ width: 12, height: 12, borderRadius: 2, background: c }} />
            ))}
            <span>More</span>
          </div>
        )}
      </div>
    </section>
  );
}