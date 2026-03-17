import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import guraImage from '../assets/e-commerce.png';
import simpoImage from '../assets/simpo.png';
import leaziImage from '../assets/Leazi.jpeg';
import cinemarwa from '../assets/cinemarwa.png';
import pharmacoreImage from '../assets/pharmacore.png';

type StatusType = 'live' | 'pending' | 'fixing bugs';
type ThemeType  = 'dark' | 'light';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  status: StatusType;
  tags: string[];
  link: string;
  github: string;
  num: string;
  accentBg: string;
  accentHover: string;
  catBgDark: string;
  catTextDark: string;
  catBgLight: string;
  catTextLight: string;
}

// ── Icons ──────────────────────────────────────
const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);
const StarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="#22c55e">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
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

// ── Status ──────────────────────────────────────
const statusMap: Record<StatusType, { color: string; label: string }> = {
  'live':        { color: '#22c55e', label: 'Live' },
  'pending':     { color: '#f59e0b', label: 'Pending' },
  'fixing bugs': { color: '#f97316', label: 'In Progress' },
};

// ── Theme tokens — green-500 (#22c55e) as primary ──
const G = '#22c55e';          // green-500
const GH = '#16a34a';         // green-600  (hover)
const GD = 'rgba(34,197,94,'; // green alpha prefix

const tokens = {
  dark: {
    bg:           '#09090b',
    card:         '#111113',
    cardHover:    '#141417',
    border:       'rgba(255,255,255,0.07)',
    borderHover:  GD + '0.4)',
    title:        '#f4f4f5',
    body:         '#a1a1aa',
    muted:        '#52525b',
    accent:       G,
    accentHover:  GH,
    accentDim:    GD + '0.1)',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.6)',
    toggleBg:     '#1c1c1f',
    toggleBorder: 'rgba(255,255,255,0.08)',
    toggleText:   '#a1a1aa',
    secBtnBorder: 'rgba(255,255,255,0.1)',
    secBtnText:   '#d4d4d8',
    secBtnHover:  'rgba(255,255,255,0.06)',
    tagBg:        'rgba(255,255,255,0.05)',
    tagBorder:    'rgba(255,255,255,0.07)',
    imageBg:      '#1c1c1f',
  },
  light: {
    bg:           '#f9fafb',
    card:         '#ffffff',
    cardHover:    '#f0fdf4',
    border:       'rgba(0,0,0,0.08)',
    borderHover:  GD + '0.4)',
    title:        '#111827',
    body:         '#6b7280',
    muted:        '#9ca3af',
    accent:       GH,
    accentHover:  '#15803d',
    accentDim:    GD + '0.08)',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.1)',
    toggleBg:     '#f3f4f6',
    toggleBorder: 'rgba(0,0,0,0.1)',
    toggleText:   '#374151',
    secBtnBorder: 'rgba(0,0,0,0.12)',
    secBtnText:   '#374151',
    secBtnHover:  'rgba(0,0,0,0.04)',
    tagBg:        'rgba(0,0,0,0.04)',
    tagBorder:    'rgba(0,0,0,0.06)',
    imageBg:      '#e5e7eb',
  },
};

// ── Projects ──────────────────────────────────────
const projects: Project[] = [
  {
    id: 1, title: 'Gura Online', category: 'E-Commerce',
    catBgDark: GD+'0.15)', catTextDark: '#4ade80',
    catBgLight: '#dcfce7',  catTextLight: '#166534',
    accentBg: '#15803d', accentHover: '#166534',
    description: 'A fully responsive e-commerce platform for digital products and services. Features seamless shopping, integrated payment processing, inventory management, and advanced filtering.',
    image: guraImage, status: 'fixing bugs',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: 'https://gura-online.netlify.app/', github: '#', num: '01',
  },
  {
    id: 2, title: 'PHARMACORE', category: 'Web Services',
    catBgDark: 'rgba(20,184,166,0.15)', catTextDark: '#2dd4bf',
    catBgLight: '#ccfbf1',              catTextLight: '#115e59',
    accentBg: '#0f766e', accentHover: '#115e59',
    description: 'A comprehensive pharmaceutical management system that streamlines inventory control, prescription management, expiring medication tracking, and expense management for healthcare providers.',
    image: pharmacoreImage, status: 'pending',
    tags: ['Web Services', 'Pharmacy Mgmt', 'Inventory', 'Healthcare'],
    link: 'https://imbuga-protocol.netlify.app/', github: '#', num: '02',
  },
  {
    id: 3, title: 'SimpoPlanet', category: 'Music Platform',
    catBgDark: 'rgba(168,85,247,0.15)', catTextDark: '#c084fc',
    catBgLight: '#f3e8ff',              catTextLight: '#6b21a8',
    accentBg: '#7c3aed', accentHover: '#6d28d9',
    description: 'A comprehensive music studio and audio services platform for artists and producers. Features waveform visualization, music promotion, collaboration tools, and built-in e-commerce.',
    image: simpoImage, status: 'live',
    tags: ['React', 'WebAudio', 'E-Commerce', 'Audio'],
    link: 'https://simpostudio.netlify.app/', github: '#', num: '03',
  },
  {
    id: 4, title: 'Leazi Management', category: 'Property Tech',
    catBgDark: 'rgba(251,191,36,0.15)', catTextDark: '#fbbf24',
    catBgLight: '#fef3c7',              catTextLight: '#78350f',
    accentBg: '#b45309', accentHover: '#92400e',
    description: 'Leazi transforms how you manage properties, putting powerful tools and insights at your fingertips. Built with Qonics Inc to streamline property operations at scale.',
    image: leaziImage, status: 'live',
    tags: ['React', 'PropTech', 'Dashboard'],
    link: 'https://leazi.io/', github: '#', num: '04',
  },
  {
    id: 5, title: 'CINEMA-RW', category: 'Movie Platform',
    catBgDark: 'rgba(239,68,68,0.15)', catTextDark: '#f87171',
    catBgLight: '#fee2e2',             catTextLight: '#7f1d1d',
    accentBg: '#b91c1c', accentHover: '#991b1b',
    description: "A comprehensive movie platform for watching and earning through subscriptions and purchases. Rwanda's go-to destination for local and international cinema content.",
    image: cinemarwa, status: 'pending',
    tags: ['React', 'Movie Mgmt', 'Subscriptions'],
    link: 'https://cinema.rw/', github: 'https://github.com/Franklin-pro/Cinemarwa-FN', num: '05',
  },
];

function getCardRadius(index: number, total: number): string {
  if (index === 0 && total === 1) return '16px';
  if (index === 0) return '16px 16px 0 0';
  if (index === total - 1) return '0 0 16px 16px';
  return '0';
}

// ── Component ──────────────────────────────────────
const ProjectsSection = () => {
  const navigate = useNavigate();
  const [theme, setTheme]         = useState<ThemeType>('dark');
  const [hoveredCard, setHovered] = useState<number | null>(null);
  const [ctaHov, setCtaHov]       = useState(false);
  const t      = tokens[theme];
  const isDark = theme === 'dark';

  return (
    <section id="projects" style={{ backgroundColor: t.bg, padding: '80px 24px', transition: 'background-color 0.3s ease', fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        @media (max-width: 768px) {
          .ps-inner { grid-template-columns: 1fr !important; }
          .ps-img   { min-height: 220px !important; }
          .ps-body  { padding: 28px 22px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>Portfolio</p>
          <h2 style={{ fontSize: 'clamp(34px,5vw,54px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: t.title, transition: 'color 0.3s ease' }}>
            Featured <span style={{ color: t.accent }}>Projects</span>
          </h2>
          <div style={{ width: 40, height: 3, backgroundColor: t.accent, borderRadius: 2, margin: '18px 0' }} />
          <p style={{ fontSize: 15, lineHeight: 1.7, color: t.body, maxWidth: 460, fontWeight: 400 }}>
            A curated selection of products I've designed and built — from e-commerce to media platforms.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {projects.map((project, index) => {
            const isDisabled = project.status === 'pending' || project.status === 'fixing bugs';
            const st   = statusMap[project.status];
            const isRev = index % 2 === 1;
            const isHov = hoveredCard === index;
            const catBg   = isDark ? project.catBgDark  : project.catBgLight;
            const catText = isDark ? project.catTextDark : project.catTextLight;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{ backgroundColor: isHov ? t.cardHover : t.card, border: '1px solid ' + (isHov ? t.borderHover : t.border), borderRadius: getCardRadius(index, projects.length), overflow: 'hidden', transition: 'all 0.3s ease', transform: isHov ? 'translateY(-2px)' : 'translateY(0)', boxShadow: isHov ? t.cardShadow : 'none', position: 'relative', zIndex: isHov ? 2 : 1 }}
              >
                <div className="ps-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 360 }}>

                  {/* Content */}
                  <div className="ps-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, padding: '48px 44px', order: isRev ? 2 : 1 }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 99, backgroundColor: catBg, color: catText }}>{project.category}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: t.muted }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: st.color, display: 'inline-block', flexShrink: 0 }} />
                        {st.label}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: isHov ? t.accent : t.title, transition: 'color 0.2s ease' }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: 13, lineHeight: 1.75, color: t.body, fontWeight: 400 }}>{project.description}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.06em', padding: '4px 10px', borderRadius: 6, backgroundColor: t.tagBg, color: t.body, border: '1px solid ' + t.tagBorder }}>{tag}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
                      <button
                        disabled={isDisabled}
                        onClick={() => { if (!isDisabled) window.open(project.link, '_blank'); }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 20px', borderRadius: 8, border: 'none', backgroundColor: isDisabled ? t.border : project.accentBg, color: '#ffffff', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.4 : 1, transition: 'all 0.2s ease', fontFamily: "'Montserrat', sans-serif" }}
                        onMouseEnter={(e) => { if (!isDisabled) (e.currentTarget as HTMLButtonElement).style.backgroundColor = project.accentHover; }}
                        onMouseLeave={(e) => { if (!isDisabled) (e.currentTarget as HTMLButtonElement).style.backgroundColor = project.accentBg; }}
                      >
                        <ExternalLinkIcon /> Visit Project
                      </button>
                      <a
                        href={isDisabled ? undefined : project.github}
                        target={isDisabled ? undefined : '_blank'}
                        rel="noreferrer"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { if (isDisabled) e.preventDefault(); }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 20px', borderRadius: 8, border: '1px solid ' + t.secBtnBorder, backgroundColor: 'transparent', color: t.secBtnText, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.4 : 1, textDecoration: 'none', transition: 'all 0.2s ease', fontFamily: "'Montserrat', sans-serif" }}
                        onMouseEnter={(e) => { if (!isDisabled) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = t.secBtnHover; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; }}
                      >
                        <GithubIcon /> View Code
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="ps-img" style={{ position: 'relative', overflow: 'hidden', backgroundColor: t.imageBg, minHeight: 240, order: isRev ? 1 : 2 }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease', transform: isHov ? 'scale(1.05)' : 'scale(1)' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,0,0,0.04),rgba(0,0,0,0.28))', pointerEvents: 'none' }} />
                    <span style={{ position: 'absolute', bottom: 16, left: 16, fontSize: 64, fontWeight: 900, color: 'rgba(255,255,255,0.12)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', fontFamily: "'Montserrat', sans-serif" }}>{project.num}</span>
                    <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', alignItems: 'center', gap: 5, backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', color: '#fff', fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', padding: '5px 10px', borderRadius: 6 }}>
                      <StarIcon /> Featured
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/projects')}
            onMouseEnter={() => setCtaHov(true)}
            onMouseLeave={() => setCtaHov(false)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 10, border: '1px solid ' + (ctaHov ? t.accent : t.secBtnBorder), backgroundColor: ctaHov ? t.accent : 'transparent', color: ctaHov ? '#fff' : t.title, fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: "'Montserrat', sans-serif" }}
          >
            View All Projects
            <span style={{ display: 'inline-flex', transition: 'transform 0.2s ease', transform: ctaHov ? 'translateX(4px)' : 'translateX(0)' }}>
              <ArrowIcon />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;