import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import avatarImage from '@/assets/me.jpg';

type ThemeType = 'dark' | 'light';

// ── Icons ──────────────────────────────────────
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

// green-500 = #22c55e | green-600 = #16a34a
const G  = '#22c55e';
const GH = '#16a34a';
const GD = 'rgba(34,197,94,';

const tokens = {
  dark: {
    bg:           '#09090b',
    surface:      '#111113',
    border:       'rgba(255,255,255,0.07)',
    borderHov:    GD + '0.35)',
    title:        '#f4f4f5',
    titleMuted:   '#a1a1aa',
    body:         '#71717a',
    accent:       G,
    accentHov:    GH,
    accentDim:    GD + '0.1)',
    pillBorder:   GD + '0.2)',
    pillText:     '#a1a1aa',
    badgeDot:     G,
    socialBg:     '#18181b',
    socialBorder: 'rgba(255,255,255,0.08)',
    socialHov:    GD + '0.12)',
    scrollBorder: 'rgba(255,255,255,0.2)',
    scrollDot:    'rgba(255,255,255,0.4)',
    imgBorder:    'rgba(255,255,255,0.08)',
    imgBorderHov: GD + '0.4)',
    toggleBg:     '#1c1c1f',
    toggleBorder: 'rgba(255,255,255,0.08)',
    toggleText:   '#a1a1aa',
    ctaSecBorder: 'rgba(255,255,255,0.15)',
    ctaSecText:   '#d4d4d8',
    ctaSecHov:    'rgba(255,255,255,0.06)',
  },
  light: {
    bg:           '#f9fafb',
    surface:      '#ffffff',
    border:       'rgba(0,0,0,0.08)',
    borderHov:    GD + '0.4)',
    title:        '#111827',
    titleMuted:   '#374151',
    body:         '#6b7280',
    accent:       GH,
    accentHov:    '#15803d',
    accentDim:    GD + '0.08)',
    pillBorder:   GD + '0.2)',
    pillText:     '#374151',
    badgeDot:     GH,
    socialBg:     '#f3f4f6',
    socialBorder: 'rgba(0,0,0,0.08)',
    socialHov:    GD + '0.1)',
    scrollBorder: 'rgba(0,0,0,0.2)',
    scrollDot:    'rgba(0,0,0,0.3)',
    imgBorder:    'rgba(0,0,0,0.08)',
    imgBorderHov: GD + '0.4)',
    toggleBg:     '#f3f4f6',
    toggleBorder: 'rgba(0,0,0,0.1)',
    toggleText:   '#374151',
    ctaSecBorder: 'rgba(0,0,0,0.15)',
    ctaSecText:   '#374151',
    ctaSecHov:    'rgba(0,0,0,0.04)',
  },
};

const socials = [
  { icon: Github,   href: 'https://github.com/Franklin-pro',                            label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/franklin-ndanyuzwe-00113431a/',   label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:franklinprogrammer@gmail.com',                         label: 'Email' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const HeroSection = () => {
  const [theme, setTheme]     = useState<ThemeType>('dark');
  const [hovPrimary, setHovP] = useState(false);
  const [hovSec, setHovSec]   = useState(false);
  const [hovSoc, setHovSoc]   = useState<number | null>(null);
  const [imgHov, setImgHov]   = useState(false);
  const t      = tokens[theme];
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: t.bg,
        transition: 'background-color 0.3s ease',
        fontFamily: "'Montserrat', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes pulse    { 0%,100%{opacity:1}50%{opacity:0.4} }
        @keyframes floatY   { 0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)} }
        @keyframes bounce   { 0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,-8px)} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)} }
        @keyframes scaleIn  { from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)} }
        @keyframes rotateSlow { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }

        .hero-text  { animation: fadeUp  0.7s ease both; }
        .hero-badge { animation: fadeUp  0.5s ease both; }
        .hero-img   { animation: scaleIn 0.8s 0.2s ease both; }
        .hero-h1-1  { animation: fadeUp  0.6s 0.1s ease both; }
        .hero-h1-2  { animation: fadeUp  0.6s 0.22s ease both; }
        .hero-h1-3  { animation: fadeUp  0.6s 0.34s ease both; }
        .hero-body  { animation: fadeUp  0.6s 0.44s ease both; }
        .hero-cta   { animation: fadeUp  0.6s 0.54s ease both; }
        .hero-soc   { animation: fadeUp  0.6s 0.64s ease both; }

        @media(max-width:900px){
          .hero-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .hero-grid .hero-align { justify-content: center !important; }
          .hero-img-wrap { justify-content: center !important; margin-top: 40px; }
        }
      `}</style>

      {/* ── Soft background orbs ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '8%',  left: '-10%', width: 480, height: 480, borderRadius: '50%', background: GD + '0.07)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '-8%', width: 400, height: 400, borderRadius: '50%', background: GD + '0.05)', filter: 'blur(80px)' }} />
        {/* Subtle grid pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: isDark ? 'radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)' : 'radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* ── Main content ── */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px 80px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1100, width: '100%', margin: '0 auto' }}>
          <div
            className="hero-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
          >

            {/* ── Left: Text ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

              {/* Available badge */}
              <div className="hero-badge" style={{ display: 'inline-flex' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 99, backgroundColor: t.accentDim, border: '1px solid ' + t.pillBorder }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: t.badgeDot, display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: t.pillText, letterSpacing: '0.04em' }}>
                    Available for freelance projects
                  </span>
                </div>
              </div>

              {/* Heading */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h1 className="hero-h1-1" style={{ fontSize: 'clamp(38px,5.5vw,68px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.03em', color: t.title, margin: 0 }}>
                  Creative
                </h1>
                <h1 className="hero-h1-2" style={{ fontSize: 'clamp(38px,5.5vw,68px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.03em', color: t.accent, margin: 0 }}>
                  Developer
                </h1>
                <h1 className="hero-h1-3" style={{ fontSize: 'clamp(22px,3vw,38px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: t.titleMuted, margin: 0 }}>
                  & Designer
                </h1>
              </div>

              {/* Body */}
              <p className="hero-body" style={{ fontSize: 15, lineHeight: 1.8, color: t.body, maxWidth: 460, fontWeight: 400, margin: 0 }}>
                I design and build beautiful, functional digital experiences that drive results.
                Specialized in creating modern web applications with cutting-edge technologies.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta hero-align" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={() => scrollTo('projects')}
                  onMouseEnter={() => setHovP(true)}
                  onMouseLeave={() => setHovP(false)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px', borderRadius: 5, border: 'none',
                    backgroundColor: hovPrimary ? t.accentHov : t.accent,
                    color: '#ffffff', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    transform: hovPrimary ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: hovPrimary ? '0 8px 28px ' + GD + '0.35)' : '0 2px 8px ' + GD + '0.15)',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  View My Work
                  <ArrowRight
                    size={15}
                    style={{ transition: 'transform 0.2s ease', transform: hovPrimary ? 'translateX(3px)' : 'translateX(0)' }}
                  />
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  onMouseEnter={() => setHovSec(true)}
                  onMouseLeave={() => setHovSec(false)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px', borderRadius: 5,
                    border: '1px solid ' + (hovSec ? t.borderHov : t.ctaSecBorder),
                    backgroundColor: hovSec ? t.accentDim : 'transparent',
                    color: hovSec ? t.accent : t.ctaSecText,
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.04em',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    transform: hovSec ? 'translateY(-2px)' : 'translateY(0)',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Get In Touch
                </button>
              </div>

              {/* Socials */}
              <div className="hero-soc hero-align" style={{ display: 'flex', gap: 10, paddingTop: 4 }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    onMouseEnter={() => setHovSoc(i)}
                    onMouseLeave={() => setHovSoc(null)}
                    style={{
                      width: 44, height: 44, borderRadius: 12, textDecoration: 'none',
                      backgroundColor: hovSoc === i ? t.socialHov : t.socialBg,
                      border: '1px solid ' + (hovSoc === i ? GD + '0.28)' : t.socialBorder),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: hovSoc === i ? t.accent : t.body,
                      transition: 'all 0.2s ease',
                      transform: hovSoc === i ? 'translateY(-3px)' : 'translateY(0)',
                      boxShadow: hovSoc === i ? '0 4px 16px ' + GD + '0.2)' : 'none',
                    }}
                  >
                    <s.icon size={17} />
                  </a>
                ))}

                {/* Quick stats */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginLeft: 16, paddingLeft: 16, borderLeft: '1px solid ' + t.border }}>
                  {[{ n: '8+', l: 'Projects' }, { n: '2+', l: 'Yrs Exp' }].map((stat) => (
                    <div key={stat.l}>
                      <p style={{ fontSize: 16, fontWeight: 900, color: t.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.n}</p>
                      <p style={{ fontSize: 10, fontWeight: 600, color: t.body, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{stat.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Avatar ── */}
            <div className="hero-img hero-img-wrap" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div
                style={{ position: 'relative', display: 'inline-block', cursor: 'default' }}
                onMouseEnter={() => setImgHov(true)}
                onMouseLeave={() => setImgHov(false)}
              >
                {/* Rotating ring */}
                <div style={{
                  position: 'absolute', inset: -16, borderRadius: '50%',
                  border: '1.5px dashed ' + GD + (imgHov ? '0.5)' : '0.2)'),
                  animation: 'rotateSlow 18s linear infinite',
                  transition: 'border-color 0.3s ease',
                  pointerEvents: 'none',
                }} />

                {/* Glow */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: GD + (imgHov ? '0.25)' : '0.12)'),
                  filter: 'blur(40px)',
                  transition: 'background 0.4s ease',
                  pointerEvents: 'none',
                }} />

                {/* Photo frame */}
                <div style={{
                  position: 'relative',
                  width: 340, height: 380,
                  borderRadius: 28,
                  overflow: 'hidden',
                  border: '2px solid ' + (imgHov ? t.imgBorderHov : t.imgBorder),
                  transition: 'all 0.4s ease',
                  transform: imgHov ? 'scale(1.03)' : 'scale(1)',
                  boxShadow: imgHov ? '0 24px 64px ' + GD + '0.25)' : '0 8px 32px rgba(0,0,0,0.3)',
                }}>
                  {/* Color overlay */}
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
                    background: 'linear-gradient(160deg,' + GD + '0.1) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
                    transition: 'opacity 0.3s ease',
                    opacity: imgHov ? 0.6 : 1,
                  }} />
                  <img
                    src={avatarImage}
                    alt="Franklin Ndanyuzwe"
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.5s ease',
                      transform: imgHov ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Floating name card */}
                <div style={{
                  position: 'absolute', bottom: -18, left: -18,
                  padding: '12px 18px', borderRadius: 14,
                  backgroundColor: isDark ? '#111113' : '#ffffff',
                  border: '1px solid ' + t.border,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                  animation: 'floatY 4s ease-in-out infinite',
                  minWidth: 160,
                }}>
                  <p style={{ fontSize: 13, fontWeight: 800, color: t.title, letterSpacing: '-0.01em', marginBottom: 2 }}>Franklin N.</p>
                  <p style={{ fontSize: 11, fontWeight: 600, color: t.accent, letterSpacing: '0.04em' }}>Software Engineer</p>
                </div>

                {/* Floating tech pill */}
                <div style={{
                  position: 'absolute', top: -16, right: -16,
                  padding: '8px 14px', borderRadius: 99,
                  backgroundColor: isDark ? '#111113' : '#ffffff',
                  border: '1px solid ' + GD + '0.25)',
                  boxShadow: '0 4px 16px ' + GD + '0.15)',
                  animation: 'floatY 4s 1s ease-in-out infinite',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: G, animation: 'pulse 2s infinite', display: 'inline-block' }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: t.accent, letterSpacing: '0.05em' }}>Available for work</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', animation: 'bounce 2s ease-in-out infinite', zIndex: 10 }}>
        <div style={{ width: 24, height: 38, borderRadius: 12, border: '2px solid ' + t.scrollBorder, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, backgroundColor: t.scrollDot, animation: 'pulse 2s infinite' }} />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;