import { useState } from 'react';
import { Calendar, Award, Briefcase, ArrowRight, Code, Layers } from 'lucide-react';
import GitHubContributions from './contributions';

type ThemeType = 'dark' | 'light';

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// green-500 = #22c55e  |  green-600 = #16a34a
const G  = '#22c55e';
const GH = '#16a34a';
const GD = 'rgba(34,197,94,';

const tokens = {
  dark: {
    bg:           '#09090b',
    surface:      '#111113',
    surfaceHov:   '#141417',
    border:       'rgba(255,255,255,0.07)',
    borderHov:    GD + '0.4)',
    title:        '#f4f4f5',
    body:         '#a1a1aa',
    muted:        '#52525b',
    accent:       G,
    accentHov:    GH,
    accentDim:    GD + '0.1)',
    pillBg:       GD + '0.12)',
    pillText:     '#4ade80',
    pillBorder:   GD + '0.22)',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.6)',
    toggleBg:     '#1c1c1f',
    toggleBorder: 'rgba(255,255,255,0.08)',
    toggleText:   '#a1a1aa',
    divider:      'rgba(255,255,255,0.06)',
    dot1:         G,
    dot2:         '#60a5fa',
  },
  light: {
    bg:           '#f9fafb',
    surface:      '#ffffff',
    surfaceHov:   '#f0fdf4',
    border:       'rgba(0,0,0,0.08)',
    borderHov:    GD + '0.4)',
    title:        '#111827',
    body:         '#6b7280',
    muted:        '#9ca3af',
    accent:       GH,
    accentHov:    '#15803d',
    accentDim:    GD + '0.08)',
    pillBg:       GD + '0.1)',
    pillText:     '#15803d',
    pillBorder:   GD + '0.2)',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.08)',
    toggleBg:     '#f3f4f6',
    toggleBorder: 'rgba(0,0,0,0.1)',
    toggleText:   '#374151',
    divider:      'rgba(0,0,0,0.07)',
    dot1:         GH,
    dot2:         '#2563eb',
  },
};

const experiences = [
  { title: 'Leazi Web App',       subtitle: 'House rental management software',    year: '2025', gradient: 'linear-gradient(135deg,#f97316,#ef4444)', description: 'Developed a comprehensive property management system for rental businesses.' },
  { title: 'Simpo Studio Label',  subtitle: 'Music studio and audio platform',      year: '2025', gradient: 'linear-gradient(135deg,#22c55e,#14b8a6)', description: 'Built a complete music production and distribution platform.' },
  { title: 'MasterKraft Web App', subtitle: 'School management system',             year: '2024', gradient: 'linear-gradient(135deg,#a855f7,#ec4899)', description: 'Created an integrated educational management solution.' },
  { title: 'Gura Online',         subtitle: 'E-commerce platform (Mobile & Web)',   year: '2023', gradient: 'linear-gradient(135deg,#22c55e,#06b6d4)', description: 'Developed a full-featured shopping platform for digital products.' },
];

const frontendSkills = ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'State Management'];
const otherSkills    = ['Flutter', 'Node.js', 'MongoDB', 'API Integration', 'UI/UX Design', 'Git & Version Control'];

const WorkExperience = () => {
  const [theme, setTheme]     = useState<ThemeType>('dark');
  const [hovCard, setHovCard] = useState<number | null>(null);
  const t      = tokens[theme];
  const isDark = theme === 'dark';

  return (
    <section id="experience" style={{ backgroundColor: t.bg, padding: '80px 24px', transition: 'background-color 0.3s ease', fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.35} }
        @media(max-width:768px){ .we-2col{grid-template-columns:1fr!important} .we-cur{flex-direction:column!important} }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>Career</p>
          <h2 style={{ fontSize: 'clamp(34px,5vw,54px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: t.title, transition: 'color 0.3s ease' }}>
            Work <span style={{ color: t.accent }}>Experience</span>
          </h2>
          <div style={{ width: 40, height: 3, backgroundColor: t.accent, borderRadius: 2, margin: '18px 0' }} />
          <p style={{ fontSize: 15, lineHeight: 1.7, color: t.body, maxWidth: 460, fontWeight: 400 }}>My professional journey and the key projects I've contributed to along the way.</p>
        </div>

        {/* Current Role */}
        <div style={{ marginBottom: 48, padding: '28px 32px', backgroundColor: t.accentDim, border: '1px solid ' + t.pillBorder, borderRadius: 16 }}>
          <div className="we-cur" style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0, backgroundColor: t.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={24} color={isDark ? '#09090b' : '#fff'} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: t.title, marginBottom: 4 }}>Software Engineer</h3>
                  <p style={{ fontSize: 15, color: t.accent, fontWeight: 600 }}>Qonics Inc</p>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 99, backgroundColor: t.pillBg, border: '1px solid ' + t.pillBorder, color: t.pillText, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: t.accent, display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  Present
                </span>
              </div>
              <p style={{ fontSize: 14, color: t.body, lineHeight: 1.7, fontWeight: 400 }}>Leading frontend development and contributing to full-stack solutions across multiple product lines.</p>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em', color: t.title, marginBottom: 20 }}>Key Projects</h3>
          <div className="we-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {experiences.map((exp, i) => {
              const isH = hovCard === i;
              return (
                <div key={i} onMouseEnter={() => setHovCard(i)} onMouseLeave={() => setHovCard(null)}
                  style={{ padding: '22px 24px', backgroundColor: isH ? t.surfaceHov : t.surface, border: '1px solid ' + (isH ? t.borderHov : t.border), borderRadius: 14, cursor: 'pointer', transition: 'all 0.25s ease', transform: isH ? 'translateY(-3px)' : 'translateY(0)', boxShadow: isH ? t.cardShadow : 'none', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: exp.gradient, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.25s ease', transform: isH ? 'scale(1.1)' : 'scale(1)' }}>
                    <Briefcase size={18} color="#fff" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em', color: isH ? t.accent : t.title, marginBottom: 3, transition: 'color 0.2s ease' }}>{exp.title}</h4>
                    <p style={{ fontSize: 12, color: t.muted, marginBottom: 6, fontWeight: 500 }}>{exp.subtitle}</p>
                    <p style={{ fontSize: 12, color: t.body, marginBottom: 12, lineHeight: 1.6 }}>{exp.description}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: t.accent }}>
                        <Calendar size={11} /> {exp.year}
                      </span>
                      <ArrowRight size={14} color={isH ? t.accent : t.muted} style={{ transition: 'all 0.2s ease', transform: isH ? 'translateX(3px)' : 'translateX(0)' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Expertise */}
        <div style={{ padding: '32px 36px', backgroundColor: t.surface, border: '1px solid ' + t.border, borderRadius: 16 }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em', color: t.title, marginBottom: 28 }}>Technical Expertise</h3>
          <div className="we-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Code size={15} color={t.dot1} />
                <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: t.title }}>Frontend</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {frontendSkills.map((s) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: t.dot1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: t.body, fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderLeft: '1px solid ' + t.divider, paddingLeft: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Layers size={15} color={t.dot2} />
                <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: t.title }}>Other</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {otherSkills.map((s) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: t.dot2, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: t.body, fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <GitHubContributions  />

      </div>
    </section>
  );
};

export default WorkExperience;