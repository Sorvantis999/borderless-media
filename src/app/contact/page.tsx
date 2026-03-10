'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [type, setType] = useState('media');
  const [submitted, setSubmitted] = useState(false);

  const INQUIRY_TYPES = [
    { id: 'media', label: 'Research inquiry', desc: 'Questions about published research, methodology, or data.' },
    { id: 'pitch', label: 'Pitch / submit analysis', desc: 'Researchers, former officials, and practitioners with direct knowledge. We read everything.' },
    { id: 'institutional', label: 'Institutional / licensing', desc: 'Data licensing, research partnership, or institutional access.' },
    { id: 'press', label: 'Press / editorial', desc: 'Media requests, citation permissions, editorial contact.' },
    { id: 'concierge', label: 'Advisory inquiry', desc: 'Client-specific needs — will be referred to Borderless Concierge.' },
  ];

  if (submitted) {
    return (
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container-narrow" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
          <span className="eyebrow" style={{ display: 'block', textAlign: 'center' }}>Received</span>
          <h2 style={{ marginBottom: '1rem' }}>Your inquiry has been submitted.</h2>
          <p style={{ color: 'var(--mid)' }}>
            We review inquiries on a rolling basis. Response times vary by inquiry type. Advisory inquiries are referred to Borderless Concierge and handled on their timeline.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Contact</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '560px', marginBottom: '1rem' }}>
            Research, institutional, and press inquiries.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '480px', fontSize: '0.95rem' }}>
            Direct inquiries to the appropriate channel. Advisory and client-specific needs are handled by Borderless Concierge, not here.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>
            {/* Left: guidance */}
            <div>
              <span className="eyebrow">Before You Write</span>
              <h3 style={{ marginBottom: '1.25rem' }}>Match your inquiry to the right publication.</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  {
                    q: 'I want to understand a specific country\'s risk profile for my situation.',
                    a: 'That is an advisory question. Borderless Concierge handles individualized assessment.',
                    isMedia: false,
                  },
                  {
                    q: 'I have a question about your methodology or a published finding.',
                    a: 'Use the Research Inquiry channel here.',
                    isMedia: true,
                  },
                  {
                    q: 'I want to cite or license Borderless Media research.',
                    a: 'Use the Institutional / Licensing channel.',
                    isMedia: true,
                  },
                  {
                    q: 'I\'m a journalist writing about sovereign mobility.',
                    a: 'Use the Press channel.',
                    isMedia: true,
                  },
                ].map((item) => (
                  <div key={item.q} style={{
                    borderBottom: '1px solid var(--rule)',
                    padding: '1rem 0',
                  }}>
                    <p style={{ fontSize: '0.82rem', color: 'var(--ink)', marginBottom: '0.3rem', fontStyle: 'italic' }}>
                      "{item.q}"
                    </p>
                    <p style={{
                      fontSize: '0.78rem',
                      color: item.isMedia ? 'var(--mid)' : 'var(--accent-muted)',
                      paddingLeft: '0.875rem',
                      borderLeft: `2px solid ${item.isMedia ? 'var(--rule)' : 'var(--accent)'}`,
                    }}>
                      → {item.a}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.25rem', border: '1px solid var(--rule)', background: 'var(--paper-dark)' }}>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>
                  For advisory inquiries
                </span>
                <p style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.55 }}>
                  Borderless Concierge handles all client-specific questions. You can reach them directly at borderlessconcierge.com, or submit an inquiry here and it will be forwarded accordingly.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <span className="eyebrow">Inquiry Type</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                {INQUIRY_TYPES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.875rem',
                      padding: '1rem 1.25rem',
                      border: `1px solid ${type === t.id ? 'var(--ink)' : 'var(--rule)'}`,
                      background: type === t.id ? 'var(--paper-dark)' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s',
                    }}
                  >
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: `2px solid ${type === t.id ? 'var(--ink)' : 'var(--rule)'}`,
                      background: type === t.id ? 'var(--ink)' : 'transparent',
                      flexShrink: 0,
                      marginTop: '3px',
                      transition: 'all 0.15s',
                    }} />
                    <div>
                      <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', display: 'block', color: 'var(--ink)' }}>
                        {t.label}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--mid)' }}>{t.desc}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Form fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { id: 'org', label: 'Organization (if applicable)', type: 'text', placeholder: 'Institution, publication, or firm' },
                ].map(field => (
                  <div key={field.id}>
                    <label style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--mid)',
                      display: 'block',
                      marginBottom: '0.4rem',
                    }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: '1px solid var(--rule)',
                        background: 'var(--paper)',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.88rem',
                        color: 'var(--ink)',
                        outline: 'none',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--mid)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}>
                    Inquiry
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your inquiry."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      border: '1px solid var(--rule)',
                      background: 'var(--paper)',
                      fontFamily: 'var(--sans)',
                      fontSize: '0.88rem',
                      color: 'var(--ink)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="btn"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
