'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/research', label: 'Research' },
  { href: '/method', label: 'Method' },
  { href: '/publications', label: 'Publications' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/borderless-media-nav.svg"
            alt="Borderless Media"
            width={310}
            height={28}
            style={{ display: 'block', height: '28px', width: 'auto' }}
          />
        </Link>

        {/* Desktop nav */}
        {!mobile && (
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
            <Link href="/contact" style={{
              display: 'inline-block',
              fontFamily: 'var(--sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.5em 1.2em',
              border: '1.5px solid var(--slate)',
              color: 'var(--slate)',
              transition: 'background 0.2s, color 0.2s',
            }}>
              Contact
            </Link>
          </nav>
        )}

        {/* Mobile toggle */}
        {mobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
            }}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L16 16M16 2L2 16" stroke="var(--slate)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H22M0 8H22M0 15H22" stroke="var(--slate)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {open && mobile && (
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
    </header>
  );
}
