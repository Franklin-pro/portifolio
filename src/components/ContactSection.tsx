import { useState } from 'react';
import { GithubIcon, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react';
import logo from '../assets/my-logo.png';

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
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
    surfaceAlt:   '#18181b',
    border:       'rgba(255,255,255,0.07)',
    borderHov:    GD + '0.35)',
    title:        '#f4f4f5',
    body:         '#a1a1aa',
    muted:        '#52525b',
    accent:       G,
    accentHov:    GH,
    accentDim:    GD + '0.1)',
    accentDimHov: GD + '0.16)',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.55)',
    toggleBg:     '#1c1c1f',
    toggleBorder: 'rgba(255,255,255,0.08)',
    toggleText:   '#a1a1aa',
    iconBg:       'rgba(255,255,255,0.05)',
    divider:      'rgba(255,255,255,0.07)',
    socialBg:     '#18181b',
    socialBorder: 'rgba(255,255,255,0.08)',
    footerText:   '#52525b',
  },
  light: {
    bg:           '#f9fafb',
    surface:      '#ffffff',
    surfaceAlt:   '#f0fdf4',
    border:       'rgba(0,0,0,0.08)',
    borderHov:    GD + '0.4)',
    title:        '#111827',
    body:         '#6b7280',
    muted:        '#9ca3af',
    accent:       GH,
    accentHov:    '#15803d',
    accentDim:    GD + '0.08)',
    accentDimHov: GD + '0.14)',
    cardShadow:   '0 8px 40px rgba(0,0,0,0.08)',
    toggleBg:     '#f3f4f6',
    toggleBorder: 'rgba(0,0,0,0.1)',
    toggleText:   '#374151',
    iconBg:       GD + '0.08)',
    divider:      'rgba(0,0,0,0.07)',
    socialBg:     '#f3f4f6',
    socialBorder: 'rgba(0,0,0,0.08)',
    footerText:   '#9ca3af',
  },
};

const contactItems = [
  { icon: Mail,    label: 'Email',    href: 'mailto:franklinprogrammer@gmail.com', display: 'franklinprogrammer@gmail.com' },
  { icon: Phone,   label: 'Phone',    href: 'tel:+250790019543',                   display: '+250 790 019 543' },
  { icon: MapPin,  label: 'Location', href: 'https://www.google.com/maps/place/Franklin+developer/@-1.9825347,30.0910355,1129m/data=!3m2!1e3!4b1!4m6!3m5!1s0x19dca72eef097c9b:0x68f8ed50e4465099!8m2!3d-1.9825401!4d30.0936104!16s%2Fg%2F11ltsr__hs?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D', display: 'Gatenga, Kigali, Rwanda' },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/Franklin-pro',                            label: 'GitHub' },
  { icon: Linkedin,   href: 'https://www.linkedin.com/in/franklin-ndanyuzwe-00113431a/',   label: 'LinkedIn' },
  { icon: Twitter,    href: 'https://x.com/franklinpro21?t=fwSGTCyG_GqylUjbSrFzeg&s=09', label: 'Twitter' },
];

const ContactSection = () => {
  const [theme, setTheme]     = useState<ThemeType>('dark');
  const [hovItem, setHovItem] = useState<number | null>(null);
  const [hovSoc, setHovSoc]   = useState<number | null>(null);
  const [hovWa, setHovWa]     = useState(false);
  const t      = tokens[theme];
  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      style={{ backgroundColor: t.bg, padding: '80px 24px 60px', transition: 'background-color 0.3s ease', fontFamily: "'Montserrat', sans-serif" }}
    >
      <style>{`
        @keyframes pulse  { 0%,100%{opacity:1}50%{opacity:0.4} }
        @keyframes floatY { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
        @media(max-width:600px){ .ct-bios{flex-direction:column!important} .ct-items{grid-template-columns:1fr!important} }
      `}</style>

      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* ── Header ── */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: t.accent, marginBottom: 14 }}>
            Contact
          </p>
          <h2 style={{ fontSize: 'clamp(34px,5vw,54px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: t.title, marginBottom: 18 }}>
            Let's <span style={{ color: t.accent }}>Connect</span>
          </h2>
          <div style={{ width: 40, height: 3, backgroundColor: t.accent, borderRadius: 2, margin: '0 auto 28px' }} />

          {/* Two bio blurbs */}
          <div className="ct-bios" style={{ display: 'flex', gap: 14, textAlign: 'left' }}>
            {[
              "I'm a Web and Mobile Developer based in Kigali, Rwanda — dedicated to building beautiful and efficient applications with a focus on clean code and exceptional user experience.",
              "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Have a project in mind? Let's make it happen.",
            ].map((text, i) => (
              <div key={i} style={{ flex: 1, padding: '16px 18px', backgroundColor: t.accentDim, border: '1px solid ' + GD + '0.15)', borderRadius: 10 }}>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: t.body, fontWeight: 400 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Single contact card ── */}
        <div style={{ backgroundColor: t.surface, border: '1px solid ' + t.border, borderRadius: 24, padding: '40px 40px', transition: 'all 0.3s ease' }}>

          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}>
            <div style={{ width: 38, height: 38, borderRadius: 5, backgroundColor: t.accentDim, border: '1px solid ' + GD + '0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageCircle size={18} color={t.accent} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em', color: t.title }}>Get in touch</h3>
          </div>

          {/* Contact items — 3 columns on wide, 1 on mobile */}
          <div
            className="ct-items"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 32 }}
          >
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.label === 'Location' ? '_blank' : undefined}
                rel="noreferrer"
                onMouseEnter={() => setHovItem(i)}
                onMouseLeave={() => setHovItem(null)}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 12,
                  padding: '20px 18px', borderRadius: 5, textDecoration: 'none',
                  backgroundColor: hovItem === i ? t.accentDimHov : t.surfaceAlt,
                  border: '1px solid ' + (hovItem === i ? GD + '0.28)' : t.border),
                  transition: 'all 0.22s ease',
                  transform: hovItem === i ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hovItem === i ? t.cardShadow : 'none',
                }}
              >
                {/* Icon */}
                <div style={{ width: 40, height: 40, borderRadius: 5, backgroundColor: hovItem === i ? GD + '0.18)' : t.iconBg, border: '1px solid ' + (hovItem === i ? GD + '0.22)' : t.border), display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}>
                  <item.icon size={17} color={hovItem === i ? t.accent : t.body} />
                </div>
                {/* Label + value */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: t.muted, marginBottom: 4 }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: hovItem === i ? t.accent : t.title, lineHeight: 1.4, transition: 'color 0.2s ease', wordBreak: 'break-all' }}>
                    {item.display}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/250783446449?text=Hi%20Franklin%20Programmer!%20I'm%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovWa(true)}
            onMouseLeave={() => setHovWa(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              padding: '15px 28px', borderRadius: 5, textDecoration: 'none',
              backgroundColor: hovWa ? GH : G,
              color: '#ffffff', fontSize: 14, fontWeight: 700, letterSpacing: '0.04em',
              transition: 'all 0.2s ease',
              transform: hovWa ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: hovWa ? '0 8px 28px ' + GD + '0.35)' : '0 2px 8px ' + GD + '0.15)',
              marginBottom: 32,
            }}
          >
            <WhatsAppIcon />
            Message on WhatsApp
          </a>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: t.divider, marginBottom: 28 }} />

          {/* Follow me + socials */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: t.muted }}>
              Follow me
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
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
                    width: 46, height: 46, borderRadius: 5, textDecoration: 'none',
                    backgroundColor: hovSoc === i ? GD + '0.12)' : t.socialBg,
                    border: '1px solid ' + (hovSoc === i ? GD + '0.28)' : t.socialBorder),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    transform: hovSoc === i ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: hovSoc === i ? '0 4px 16px ' + GD + '0.2)' : 'none',
                    color: hovSoc === i ? t.accent : t.body,
                  }}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div style={{ marginTop: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          {/* Available pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 99, backgroundColor: t.accentDim, border: '1px solid ' + GD + '0.2)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: G, display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: t.accent, letterSpacing: '0.05em' }}>
              Available for new projects
            </span>
          </div>

          {/* Logo */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{ position: 'absolute', inset: '-20px', backgroundColor: GD + '0.12)', borderRadius: '50%', filter: 'blur(36px)', pointerEvents: 'none' }} />
            <img
              src={logo}
              alt="Franklin Programmer Logo"
              style={{ height: 150, width: 'auto', objectFit: 'contain', position: 'relative', animation: 'floatY 4s ease-in-out infinite' }}
            />
          </div>

          <p style={{ fontSize: 13, color: t.footerText, fontWeight: 500, letterSpacing: '0.04em' }}>
            Franklin Programmer © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;