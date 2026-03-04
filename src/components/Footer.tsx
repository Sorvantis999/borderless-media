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
      <div style={{ borderBottom: '1px solid var(--bg-dark-border)', padding: '3rem 0' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light" style={{ marginBottom: '1.75rem' }}>The Borderless Ecosystem</span>
          <div className="grid-4">
            {ECOSYSTEM.map((item) => (
              <div key={item.name} style={{ opacity: item.current ? 1 : 0.7 }}>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: item.current ? 'var(--gold)' : 'var(--light)',
                  marginBottom: '0.35rem',
                }}>
                  {item.role}
                </div>
                <Link href={item.href} style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1rem',
                  display: 'block',
                  marginBottom: '0.4rem',
                  color: 'var(--paper-on-dark)',
                }}>
                  {item.name}
                </Link>
                <p style={{ fontSize: '0.78rem', color: 'var(--light)', lineHeight: 1.5 }}>
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
          <p style={{ fontSize: '0.75rem', color: 'var(--light)' }}>
            © {new Date().getFullYear()} Borderless Media LLC. Analysis is not advice.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: '/method', label: 'Method' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontSize: '0.75rem',
                color: 'var(--light)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontFamily: 'var(--mono)',
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
