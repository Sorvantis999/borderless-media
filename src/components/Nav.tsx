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
      background: 'var(--bg-dark)',
      borderBottom: '1px solid var(--bg-dark-border)',
      height: 'var(--nav-h)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        {/* Wordmark */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.15rem',
            color: 'var(--paper-on-dark)',
            letterSpacing: '0.02em',
            lineHeight: 1,
          }}>
            Borderless Media
          </span>
          <span style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.58rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--light)',
            lineHeight: 1,
          }}>
            Geopolitical Intelligence
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.8rem',
                letterSpacing: '0.04em',
                color: pathname === href ? 'var(--paper-on-dark)' : 'var(--light)',
                textTransform: 'uppercase',
                borderBottom: pathname === href ? '1px solid var(--gold)' : '1px solid transparent',
                paddingBottom: '1px',
                transition: 'color 0.15s',
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-dark" style={{ fontSize: '0.72rem', padding: '0.5em 1.2em' }}>
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
            color: 'var(--paper-on-dark)',
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
          background: 'var(--bg-dark-2)',
          borderTop: '1px solid var(--bg-dark-border)',
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
                fontSize: '0.9rem',
                color: 'var(--paper-on-dark)',
                padding: '0.6rem 0',
                borderBottom: '1px solid var(--bg-dark-border)',
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
