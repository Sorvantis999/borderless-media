import type { Metadata } from 'next';
import Link from 'next/link';
import { POSTS, ALL_TAGS } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Sovereign risk reports, jurisdictional briefs, and governance indicators from Borderless Media.',
};

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Research Archive</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '1rem' }}>
            Findings, briefs, and indicator reports.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '520px', fontSize: '0.95rem' }}>
            All published research. Organized by jurisdiction, domain, and date. Research reflects analytical findings, not recommendations.
          </p>
        </div>
      </section>

      {/* Method posture strip */}
      <section style={{ background: 'var(--bg-dark-2)', borderBottom: '1px solid var(--bg-dark-border)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { label: 'Primary sourcing', desc: 'Legislative records, regulatory filings, central bank publications.' },
              { label: 'Uncertainty notation', desc: 'Confidence levels stated where data is contested or incomplete.' },
              { label: 'Update cadence', desc: 'BSI scores reviewed quarterly; briefs published as conditions warrant.' },
              { label: 'Independence', desc: 'No program affiliations, referral arrangements, or commission structures.' },
            ].map((item) => (
              <div key={item.label} style={{ borderLeft: '2px solid var(--bg-dark-border)', paddingLeft: '1rem' }}>
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.3rem',
                }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--light)', lineHeight: 1.45 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Sidebar */}
            <aside>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
                display: 'block',
                marginBottom: '0.875rem',
                borderBottom: '1px solid var(--rule)',
                paddingBottom: '0.5rem',
              }}>
                Topics
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="/research" style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.82rem',
                  color: 'var(--ink)',
                  padding: '0.35rem 0',
                  borderBottom: '1px solid var(--rule)',
                  fontWeight: 500,
                }}>
                  All Research ({POSTS.length})
                </Link>
                {ALL_TAGS.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.82rem',
                    color: 'var(--mid)',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid var(--rule)',
                    cursor: 'pointer',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  display: 'block',
                  marginBottom: '0.875rem',
                  borderBottom: '1px solid var(--rule)',
                  paddingBottom: '0.5rem',
                }}>
                  Format
                </span>
                {['Country Profile', 'Sector Brief', 'Methodology Note', 'Quarterly Update', 'Indicator Report'].map(format => (
                  <span key={format} style={{
                    display: 'block',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.82rem',
                    color: 'var(--mid)',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid var(--rule)',
                    cursor: 'pointer',
                  }}>
                    {format}
                  </span>
                ))}
              </div>
            </aside>

            {/* Posts list */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--rule)',
                paddingBottom: '0.75rem',
              }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--mid)', letterSpacing: '0.06em' }}>
                  {POSTS.length} DOCUMENTS
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--mid)', letterSpacing: '0.06em' }}>
                  SORTED BY DATE ↓
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {POSTS.map((post, i) => (
                  <Link key={post.slug} href={`/posts/${post.slug}`} style={{ display: 'block' }}>
                    <article style={{
                      padding: '1.75rem 0',
                      borderBottom: '1px solid var(--rule)',
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '2rem',
                      alignItems: 'start',
                    }}>
                      <div>
                        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                          {post.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                        <h3 style={{
                          fontFamily: 'var(--serif)',
                          fontSize: '1.15rem',
                          marginBottom: '0.5rem',
                          lineHeight: 1.3,
                        }}>
                          {post.title}
                        </h3>
                        <p style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.55 }}>
                          {post.summary}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--light)', marginBottom: '0.25rem' }}>
                          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--light)' }}>
                          {post.readingTime}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
