import { useState } from 'react';
import { Code, Zap, Palette, Smartphone, Database, Lightbulb } from 'lucide-react';

type ThemeType = 'dark' | 'light';

interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
  accentDark: string;
  accentLight: string;
}

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
    accentDim:    GD + '0.1)',
    statBg:       '#18181b',
    statBorder:   'rgba(255,255,255,0.07)',
    statNum:      '#4ade80',
    tagBg:        GD + '0.1)',
    tagText:      '#4ade80',
    tagBorder:    GD + '0.2)',
    avatarBg:     GD + '0.12)',
    avatarBorder: GD + '0.25)',
    avatarText:   '#4ade80',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.6)',
    toggleBg:     '#1c1c1f',
    toggleBorder: 'rgba(255,255,255,0.08)',
    toggleText:   '#a1a1aa',
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
    accentDim:    GD + '0.08)',
    statBg:       '#f0fdf4',
    statBorder:   GD + '0.15)',
    statNum:      GH,
    tagBg:        GD + '0.08)',
    tagText:      '#15803d',
    tagBorder:    GD + '0.18)',
    avatarBg:     '#dcfce7',
    avatarBorder: GD + '0.3)',
    avatarText:   '#15803d',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.08)',
    toggleBg:     '#f3f4f6',
    toggleBorder: 'rgba(0,0,0,0.1)',
    toggleText:   '#374151',
  },
};

const stats = [
  { number: '50+', label: 'Projects' },
  { number: '30+', label: 'Clients' },
  { number: '1+',  label: 'Years Exp.' },
];

const skills: Skill[] = [
  { icon: Code,       title: 'Frontend Development', description: 'React, Next.js, Vue.js with modern state management and UI frameworks',       accentDark: G,        accentLight: GH },
  { icon: Smartphone, title: 'Mobile Development',   description: 'Flutter for cross-platform mobile applications with native performance',       accentDark: '#60a5fa', accentLight: '#2563eb' },
  { icon: Database,   title: 'Backend & APIs',        description: 'RESTful APIs, database design, and server-side logic with Node.js',            accentDark: '#f472b6', accentLight: '#db2777' },
  { icon: Palette,    title: 'UI/UX Design',          description: 'Beautiful, responsive interfaces using Tailwind CSS and design principles',     accentDark: '#fb923c', accentLight: '#ea580c' },
  { icon: Zap,        title: 'Performance',           description: 'Optimized applications with focus on speed and user experience',               accentDark: '#facc15', accentLight: '#ca8a04' },
  { icon: Lightbulb,  title: 'Problem Solving',       description: 'Creative solutions to complex technical challenges',                           accentDark: '#a78bfa', accentLight: '#7c3aed' },
];

const AboutSection = () => {
  const [theme, setTheme]       = useState<ThemeType>('dark');
  const [hovSkill, setHovSkill] = useState<number | null>(null);
  const [hovStat, setHovStat]   = useState<number | null>(null);
  const t      = tokens[theme];
  const isDark = theme === 'dark';

  return (
    <section id="about" style={{ backgroundColor: t.bg, padding: '80px 24px', transition: 'background-color 0.3s ease', fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @media(max-width:768px){ .ab-2col{grid-template-columns:1fr!important} .ab-3col{grid-template-columns:1fr 1fr!important} .ab-stats{grid-template-columns:1fr 1fr!important} }
        @media(max-width:480px){ .ab-3col{grid-template-columns:1fr!important} }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>Introduction</p>
          <h2 style={{ fontSize: 'clamp(34px,5vw,54px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: t.title, transition: 'color 0.3s ease' }}>
            About <span style={{ color: t.accent }}>Me</span>
          </h2>
          <div style={{ width: 40, height: 3, backgroundColor: t.accent, borderRadius: 2, margin: '18px 0' }} />
          <p style={{ fontSize: 15, lineHeight: 1.7, color: t.body, maxWidth: 460, fontWeight: 400 }}>A passionate software engineer dedicated to creating innovative digital solutions.</p>
        </div>

        {/* Bio + Stats */}
        <div className="ab-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 64 }}>

          {/* Left — Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', flexShrink: 0, backgroundColor: t.avatarBg, border: '2px solid ' + t.avatarBorder, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: t.avatarText, letterSpacing: '-0.02em' }}>
                FN
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: t.title, marginBottom: 4 }}>Franklin Ndanyuzwe</h3>
                <p style={{ fontSize: 13, color: t.accent, fontWeight: 600, letterSpacing: '0.02em' }}>Software Engineer · Qonics Inc</p>
              </div>
            </div>

            <p style={{ fontSize: 14, lineHeight: 1.8, color: t.body, fontWeight: 400, marginBottom: 28 }}>
              I'm a passionate software developer with expertise in React, Next.js, Vue.js, and Flutter.
              With over a year of experience, I specialize in building full-stack applications,
              focusing on frontend development, mobile app development, API integration,
              and state management using modern frameworks.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['React', 'Flutter', 'Node.js', 'TypeScript', 'UI/UX'].map((tag) => (
                <span key={tag} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', padding: '5px 12px', borderRadius: 99, backgroundColor: t.tagBg, color: t.tagText, border: '1px solid ' + t.tagBorder }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — Stats + compact skills */}
          <div>
            <div className="ab-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 20 }}>
              {stats.map((stat, i) => (
                <div key={stat.label} onMouseEnter={() => setHovStat(i)} onMouseLeave={() => setHovStat(null)}
                  style={{ padding: '18px 14px', textAlign: 'center', backgroundColor: hovStat === i ? t.accentDim : t.statBg, border: '1px solid ' + (hovStat === i ? t.borderHov : t.statBorder), borderRadius: 12, cursor: 'default', transition: 'all 0.25s ease' }}>
                  <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.03em', color: t.statNum, marginBottom: 4 }}>{stat.number}</div>
                  <div style={{ fontSize: 11, color: t.muted, fontWeight: 600, letterSpacing: '0.05em' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {skills.slice(0, 3).map((skill) => {
                const accent = isDark ? skill.accentDark : skill.accentLight;
                return (
                  <div key={skill.title} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', backgroundColor: t.surface, border: '1px solid ' + t.border, borderRadius: 10, transition: 'all 0.2s ease' }}>
                    <skill.icon size={16} color={accent} style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 700, color: t.title, marginBottom: 1 }}>{skill.title}</p>
                      <p style={{ fontSize: 11, color: t.muted, lineHeight: 1.4 }}>{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Skills Grid */}
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em', color: t.title, marginBottom: 20 }}>Core Skills</h3>
          <div className="ab-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
            {skills.map((skill, i) => {
              const accent = isDark ? skill.accentDark : skill.accentLight;
              const isH    = hovSkill === i;
              return (
                <div key={skill.title} onMouseEnter={() => setHovSkill(i)} onMouseLeave={() => setHovSkill(null)}
                  style={{ padding: '22px 20px', backgroundColor: isH ? t.surfaceHov : t.surface, border: '1px solid ' + (isH ? accent + '55' : t.border), borderRadius: 14, cursor: 'default', transition: 'all 0.25s ease', transform: isH ? 'translateY(-3px)' : 'translateY(0)', boxShadow: isH ? t.cardShadow : 'none' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, backgroundColor: accent + '18', border: '1px solid ' + accent + '30', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'transform 0.25s ease', transform: isH ? 'scale(1.1)' : 'scale(1)' }}>
                    <skill.icon size={18} color={accent} />
                  </div>
                  <h4 style={{ fontSize: 13, fontWeight: 800, letterSpacing: '-0.01em', color: isH ? accent : t.title, marginBottom: 7, transition: 'color 0.2s ease' }}>{skill.title}</h4>
                  <p style={{ fontSize: 12, color: t.body, lineHeight: 1.65, fontWeight: 400 }}>{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;