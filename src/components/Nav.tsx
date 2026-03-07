'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/research', label: 'Research' },
  { href: '/indicators', label: 'Indicators' },
  { href: '/method', label: 'Method' },
  { href: '/publications', label: 'Publications' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--cream)',
      borderBottom: '1px solid var(--rule)',
      height: 'var(--nav-h)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        {/* Wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
          <span style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.2rem',
            color: 'var(--slate)',
            letterSpacing: '0.01em',
            lineHeight: 1,
          }}>
            Borderless Media
          </span>
          <span style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'var(--terra)',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginBottom: '2px',
          }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.78rem',
                  fontWeight: '400',
                  letterSpacing: '0.05em',
                  color: active ? 'var(--slate)' : 'var(--mid)',
                  textTransform: 'uppercase',
                  borderBottom: active ? '2px solid var(--terra)' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.15s',
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-slate btn" style={{ fontSize: '0.72rem', padding: '0.5em 1.2em' }}>
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--slate)',
            fontSize: '1.4rem',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--cream-dark)',
          borderTop: '1px solid var(--rule)',
          padding: '1.5rem 2rem',
        }}>
          {[...NAV_LINKS, { href: '/contact', label: 'Contact' }].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--sans)',
                fontSize: '0.88rem',
                color: 'var(--ink)',
                padding: '0.65rem 0',
                borderBottom: '1px solid var(--rule)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
