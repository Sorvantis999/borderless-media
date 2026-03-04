import Link from 'next/link';
import EcosystemArchitecture from '@/components/EcosystemArchitecture';
import { POSTS } from '@/lib/posts';

export default function HomePage() {
  const featured = POSTS.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="dark-section" style={{
        padding: '6rem 0 5rem',
        borderBottom: '1px solid var(--bg-dark-border)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="eyebrow eyebrow-light">Borderless Media</span>
            <h1 style={{
              color: 'var(--paper-on-dark)',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
            }}>
              Intelligence for sovereign<br />decision-making.
            </h1>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--light)',
              maxWidth: '560px',
              marginBottom: '2.5rem',
              lineHeight: 1.7,
            }}>
              Borderless Media publishes geopolitical research, sovereign risk indicators, and jurisdictional analysis. We improve the information layer. We do not render judgment. That happens elsewhere.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/research" className="btn btn-dark">View Research</Link>
              <Link href="/indicators" className="btn btn-dark" style={{ borderColor: 'var(--bg-dark-border)', color: 'var(--light)' }}>
                Indicators →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we are / what we aren't */}
      <section style={{
        background: 'var(--bg-dark-2)',
        borderBottom: '1px solid var(--bg-dark-border)',
        padding: '3rem 0',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            borderLeft: '1px solid var(--bg-dark-border)',
          }}>
            {[
              {
                label: 'We publish',
                items: ['Sovereign risk indicators', 'Jurisdictional analysis', 'Migration policy monitoring', 'Governance failure research'],
              },
              {
                label: 'We do not publish',
                items: ['Individualized advice', 'Program referrals', 'Tactical recommendations', 'Client-specific assessments'],
              },
              {
                label: 'The distinction',
                items: ['Analysis is not judgment.', 'Findings are not instructions.', 'Intelligence enables decisions.', 'Decisions require counsel.'],
                isDistinction: true,
              },
            ].map((col) => (
              <div key={col.label} style={{
                padding: '2rem 2rem',
                borderRight: '1px solid var(--bg-dark-border)',
              }}>
                <span style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: col.isDistinction ? 'var(--gold)' : 'var(--light)',
                  display: 'block',
                  marginBottom: '0.875rem',
                }}>
                  {col.label}
                </span>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {col.items.map(item => (
                    <li key={item} style={{
                      fontSize: '0.83rem',
                      color: col.isDistinction ? 'var(--paper-on-dark)' : 'var(--light)',
                      padding: '0.3rem 0',
                      borderBottom: '1px solid var(--bg-dark-border)',
                      fontStyle: col.isDistinction ? 'italic' : 'normal',
                      fontFamily: col.isDistinction ? 'var(--serif)' : 'var(--sans)',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured research */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--rule)',
            paddingBottom: '1rem',
          }}>
            <span className="eyebrow" style={{ margin: 0 }}>Recent Research</span>
            <Link href="/research" style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--mid)',
            }}>
              All research →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
            {featured.map((post, i) => (
              <Link href={`/posts/${post.slug}`} key={post.slug} style={{ display: 'block' }}>
                <article className="card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--serif)',
                    fontSize: i === 0 ? '1.25rem' : '1rem',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {post.summary}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                  }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--light)' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--light)' }}>
                      {post.readingTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Borderless Media publishes */}
      <section style={{ background: 'var(--paper-dark)', borderTop: '1px solid var(--rule)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <span className="eyebrow">What We Publish</span>
              <h2 style={{ marginBottom: '1.25rem' }}>The information layer.</h2>
              <p style={{ color: 'var(--mid)', marginBottom: '1rem' }}>
                Borderless Media exists because the information available to internationally mobile individuals and institutions is systematically inadequate — fragmented, commercially compromised, or designed for audiences with different risk profiles.
              </p>
              <p style={{ color: 'var(--mid)', marginBottom: '2rem' }}>
                We publish what we find. We do not publish what to do about it.
              </p>
              <Link href="/about" className="btn">About the publication</Link>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule)' }}>
                {[
                  { label: 'Sovereign Risk Research', desc: 'Multi-layer country assessments using the Borderless Sovereignty Index framework.' },
                  { label: 'Jurisdictional Analysis', desc: 'Residency permits, citizenship programs, and tax treaty structures examined for structural integrity.' },
                  { label: 'Migration Policy Monitoring', desc: 'Policy changes tracked across active programs, with legislative history and reversion risk assessment.' },
                  { label: 'Governance Indicators', desc: 'Quantitative and observational indicators for institutional coherence, decoherence, and failure trajectories.' },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: 'var(--paper)',
                    padding: '1.5rem',
                  }}>
                    <h4 style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.95rem',
                      marginBottom: '0.5rem',
                    }}>
                      {item.label}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--mid)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="dark-section section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="eyebrow eyebrow-light">Ecosystem</span>
              <h2 style={{ color: 'var(--paper-on-dark)', marginBottom: '1.25rem' }}>
                Intelligence is one layer of four.
              </h2>
              <p style={{ color: 'var(--light)', lineHeight: 1.7 }}>
                Understanding where intelligence ends and judgment begins is not a legal disclaimer. It is the architecture of a sound decision process. Borderless Media occupies the first layer. The others are built on it.
              </p>
            </div>
            <EcosystemArchitecture dark />
          </div>
        </div>
      </section>

      {/* Indicators teaser */}
      <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <span className="eyebrow">Indicators</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>The Borderless Sovereignty Index</h2>
              <p style={{ color: 'var(--mid)', marginBottom: '2rem' }}>
                A 10-layer country evaluation framework measuring institutional integrity, capital mobility, legal clarity, and sovereign risk. Updated periodically against primary source data.
              </p>
              <Link href="/indicators" className="btn">View Indicators</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {[
                { country: 'Switzerland', tier: 'Tier I', score: 87, change: '+1' },
                { country: 'Portugal', tier: 'Tier II', score: 72, change: '-2' },
                { country: 'Chile', tier: 'Tier II', score: 69, change: '0' },
                { country: 'Colombia', tier: 'Tier III', score: 51, change: '-4' },
                { country: 'Argentina', tier: 'Tier IV', score: 28, change: '-7' },
                { country: 'Hungary', tier: 'Tier III', score: 55, change: '-1' },
              ].map((item) => (
                <div key={item.country} className="card" style={{ padding: '1.25rem' }}>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: item.tier === 'Tier I' ? 'var(--gold)' :
                           item.tier === 'Tier II' ? 'var(--mid)' :
                           item.tier === 'Tier III' ? '#A63D2F' : 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}>
                    {item.tier}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                    {item.country}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '1.4rem', fontWeight: 500 }}>
                      {item.score}
                    </span>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.7rem',
                      color: item.change.startsWith('-') ? 'var(--accent)' :
                             item.change === '0' ? 'var(--light)' : '#2D7A4F',
                    }}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
