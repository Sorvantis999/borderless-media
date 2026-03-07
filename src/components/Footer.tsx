import Link from 'next/link';

const ECOSYSTEM = [
  {
    name: 'Borderless Media',
    role: 'Intelligence',
    desc: 'Geopolitical research, sovereign risk indicators, jurisdictional analysis.',
    href: '/',
    current: true,
  },
  {
    name: 'Borderless Living',
    role: 'Strategy',
    desc: 'Relocation frameworks and residency planning for mobile individuals.',
    href: 'https://borderlessliving.com',
    current: false,
  },
  {
    name: 'The Long Memo',
    role: 'Political Analysis',
    desc: 'Institutional decay, governance failure, and geopolitical drift.',
    href: 'https://thelongmemo.com',
    current: false,
  },
  {
    name: 'Borderless Concierge',
    role: 'Advisory',
    desc: 'Private counsel for clients making sovereign decisions.',
    href: 'https://borderlessconcierge.com',
    current: false,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'var(--paper-on-dark)' }}>
      {/* Ecosystem strip */}
      <div style={{ borderBottom: '1px solid var(--bg-dark-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <span className="eyebrow eyebrow-slate" style={{ marginBottom: 0 }}>The Borderless Ecosystem</span>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--terra)', opacity: 0.6 }} />
          </div>
          <div className="grid-4">
            {ECOSYSTEM.map((item) => (
              <div key={item.name} style={{ opacity: item.current ? 1 : 0.65 }}>
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.6rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: item.current ? 'var(--terra-muted)' : 'var(--light)',
                  marginBottom: '0.35rem',
                }}>
                  {item.role}
                </div>
                <Link href={item.href} style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.05rem',
                  display: 'block',
                  marginBottom: '0.4rem',
                  color: 'var(--paper-on-dark)',
                }}>
                  {item.name}
                </Link>
                <p style={{ fontSize: '0.78rem', color: 'var(--light)', lineHeight: 1.55, fontFamily: 'var(--sans)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: '1.5rem 0' }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{ fontSize: '0.73rem', color: 'var(--light)', fontFamily: 'var(--sans)' }}>
            © {new Date().getFullYear()} Borderless Media LLC. Analysis is not advice.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: '/method', label: 'Method' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontSize: '0.72rem',
                color: 'var(--light)',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                fontFamily: 'var(--sans)',
              }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
