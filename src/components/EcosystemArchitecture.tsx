import Link from 'next/link';

const LAYERS = [
  {
    layer: '01',
    label: 'Intelligence',
    name: 'Borderless Media',
    desc: 'Research, risk indicators, jurisdictional data, findings.',
    href: '/',
    active: true,
    note: 'You are here',
  },
  {
    layer: '02',
    label: 'Strategy',
    name: 'Borderless Living',
    desc: 'Translates intelligence into relocation frameworks and planning.',
    href: 'https://borderlessliving.com',
    active: false,
    note: 'Analysis → Strategy',
  },
  {
    layer: '03',
    label: 'Political Analysis',
    name: 'The Long Memo',
    desc: 'Institutional decay, governance trajectories, geopolitical drift.',
    href: 'https://thelongmemo.com',
    active: false,
    note: 'Independent editorial',
  },
  {
    layer: '04',
    label: 'Advisory',
    name: 'Borderless Concierge',
    desc: 'Private counsel. Client-specific decisions. Judgment, not findings.',
    href: 'https://borderlessconcierge.com',
    active: false,
    note: 'Strategy → Judgment',
  },
];

export default function EcosystemArchitecture({ dark = false }: { dark?: boolean }) {
  const bg = dark ? 'var(--bg-dark-2)' : 'var(--paper-dark)';
  const border = dark ? 'var(--bg-dark-border)' : 'var(--rule)';
  const textMain = dark ? 'var(--paper-on-dark)' : 'var(--ink)';
  const textMuted = dark ? 'var(--light)' : 'var(--mid)';

  return (
    <div style={{ background: bg, border: `1px solid ${border}` }}>
      {/* Header */}
      <div style={{
        padding: '1.25rem 1.75rem',
        borderBottom: `1px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: textMuted,
        }}>
          Ecosystem Architecture
        </span>
        <span style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.6rem',
          color: textMuted,
          letterSpacing: '0.06em',
        }}>
          4 LAYERS
        </span>
      </div>

      {/* Layers */}
      {LAYERS.map((item, i) => (
        <Link key={item.layer} href={item.href} style={{ display: 'block' }}>
          <div style={{
            padding: '1.25rem 1.75rem',
            borderBottom: i < LAYERS.length - 1 ? `1px solid ${border}` : 'none',
            display: 'grid',
            gridTemplateColumns: '2.5rem 1fr auto',
            gap: '1rem',
            alignItems: 'center',
            background: item.active ? (dark ? 'rgba(181,148,58,0.06)' : 'rgba(181,148,58,0.05)') : 'transparent',
            transition: 'background 0.15s',
          }}>
            {/* Layer number */}
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              color: item.active ? 'var(--gold)' : textMuted,
              letterSpacing: '0.05em',
            }}>
              {item.layer}
            </span>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.2rem' }}>
                <span style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '0.95rem',
                  color: textMain,
                  fontWeight: item.active ? 500 : 400,
                }}>
                  {item.name}
                </span>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: item.active ? 'var(--gold)' : textMuted,
                  border: `1px solid ${item.active ? 'var(--gold)' : border}`,
                  padding: '0.1em 0.4em',
                }}>
                  {item.label}
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: textMuted, lineHeight: 1.4 }}>
                {item.desc}
              </p>
            </div>

            {/* Note */}
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.58rem',
              color: textMuted,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              {item.note}
            </span>
          </div>
        </Link>
      ))}

      {/* Footer note */}
      <div style={{
        padding: '0.875rem 1.75rem',
        borderTop: `1px solid ${border}`,
        background: dark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.03)',
      }}>
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.62rem',
          color: textMuted,
          letterSpacing: '0.04em',
        }}>
          Intelligence informs strategy. Strategy informs planning. Judgment is rendered by Concierge, not here.
        </p>
      </div>
    </div>
  );
}
