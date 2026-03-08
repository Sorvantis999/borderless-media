import Link from 'next/link';
import EcosystemArchitecture from '@/components/EcosystemArchitecture';
import { POSTS } from '@/lib/posts';

// Pexels image URLs
const HERO_IMAGE = 'https://images.pexels.com/photos/8828679/pexels-photo-8828679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600';
const GLOBE_IMAGE = 'https://images.pexels.com/photos/1098526/pexels-photo-1098526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900';
const PASSPORTS_IMAGE = 'https://images.pexels.com/photos/29402986/pexels-photo-29402986.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800';

export default function HomePage() {
  const featured = POSTS.slice(0, 3);

  return (
    <>
      {/* HERO — full-bleed photo with slate overlay */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'flex-end' }}>
        {/* Background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }} />
        {/* Gradient overlay: slate-blue, strong at bottom */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,37,53,0.45) 0%, rgba(26,37,53,0.72) 55%, rgba(26,37,53,0.95) 100%)',
        }} />

        {/* Thin terracotta top bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--terra)',
        }} />

        {/* Hero content */}
        <div className="container" style={{ position: 'relative', paddingBottom: '5rem', paddingTop: '8rem', width: '100%' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="eyebrow" style={{ color: 'var(--terra-muted)', marginBottom: '1.25rem' }}>
              Borderless Media
            </span>
            <h1 style={{
              color: 'var(--paper-on-dark)',
              marginBottom: '1.5rem',
              fontStyle: 'italic',
              lineHeight: 1.08,
            }}>
              Intelligence for<br />sovereign decisions.
            </h1>
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(237,232,220,0.78)',
              maxWidth: '520px',
              marginBottom: '2.5rem',
              lineHeight: 1.75,
              fontFamily: 'var(--body)',
            }}>
              Geopolitical research, sovereign risk indicators, and jurisdictional analysis for internationally mobile individuals and institutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/research" className="btn-terra btn">View Research</Link>
              <Link href="/indicators" className="btn-light btn">
                Indicators →
              </Link>
            </div>
          </div>
        </div>

        {/* Photo credit */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1.5rem',
          fontFamily: 'var(--sans)',
          fontSize: '0.6rem',
          color: 'rgba(237,232,220,0.3)',
          letterSpacing: '0.05em',
        }}>
          Photo: Lara Jameson / Pexels
        </div>
      </section>

      {/* What we are / aren't — cream background, terracotta left rule */}
      <section style={{
        background: 'var(--cream)',
        borderBottom: '1px solid var(--rule)',
        padding: '0',
      }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
          }}>
            {[
              {
                label: 'We publish',
                items: ['Sovereign risk indicators', 'Jurisdictional analysis', 'Migration policy monitoring', 'Governance failure research'],
                accent: 'var(--slate)',
              },
              {
                label: 'We do not publish',
                items: ['Individualized advice', 'Program referrals', 'Tactical recommendations', 'Client-specific assessments'],
                accent: 'var(--mid)',
              },
              {
                label: 'The distinction',
                items: ['Analysis is not judgment.', 'Findings are not instructions.', 'Intelligence enables decisions.', 'Decisions require counsel.'],
                accent: 'var(--terra)',
                italic: true,
              },
            ].map((col, i) => (
              <div key={col.label} style={{
                padding: '2.5rem 2rem',
                borderLeft: i === 0 ? 'none' : '1px solid var(--rule)',
                borderTop: `3px solid ${col.accent}`,
              }}>
                <span style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.62rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: col.accent,
                  display: 'block',
                  marginBottom: '1rem',
                }}>
                  {col.label}
                </span>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {col.items.map(item => (
                    <li key={item} style={{
                      fontSize: '0.85rem',
                      color: col.italic ? 'var(--ink)' : 'var(--mid)',
                      padding: '0.4rem 0',
                      borderBottom: '1px solid var(--rule)',
                      fontStyle: col.italic ? 'italic' : 'normal',
                      fontFamily: col.italic ? 'var(--body)' : 'var(--sans)',
                      lineHeight: 1.5,
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

      {/* Featured research — white cards on cream */}
      <section className="section" style={{ background: 'var(--cream-dark)' }}>
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
              fontFamily: 'var(--sans)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--slate)',
            }}>
              All research →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem' }}>
            {featured.map((post, i) => (
              <Link href={`/posts/${post.slug}`} key={post.slug} style={{ display: 'block' }}>
                <article className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--serif)',
                    fontSize: i === 0 ? '1.3rem' : '1.05rem',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                    color: 'var(--ink)',
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.6, marginBottom: '1.5rem', fontFamily: 'var(--sans)' }}>
                    {post.summary}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--rule)',
                  }}>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', color: 'var(--light)', letterSpacing: '0.04em' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', color: 'var(--terra)', letterSpacing: '0.04em' }}>
                      {post.readingTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we publish — image + grid */}
      <section className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>
            {/* Image column */}
            <div>
              <div style={{
                position: 'relative',
                marginBottom: '2rem',
              }}>
                <img
                  src={PASSPORTS_IMAGE}
                  alt="European passports on a world map"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Slate overlay strip */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'var(--slate)',
                  padding: '0.75rem 1rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.62rem',
                    color: 'rgba(237,232,220,0.6)',
                    letterSpacing: '0.05em',
                  }}>
                    Photo: Marta Branco / Pexels
                  </span>
                </div>
              </div>
              <span className="eyebrow">What We Publish</span>
              <h2 style={{ marginBottom: '1.25rem' }}>The information layer.</h2>
              <p style={{ color: 'var(--mid)', marginBottom: '1rem', fontSize: '0.92rem' }}>
                The information available to internationally mobile individuals is systematically inadequate — fragmented, commercially compromised, or designed for audiences with different risk profiles.
              </p>
              <p style={{ color: 'var(--mid)', marginBottom: '2rem', fontSize: '0.92rem' }}>
                We publish what we find. We do not publish what to do about it.
              </p>
              <Link href="/about" className="btn">About the publication</Link>
            </div>

            {/* Grid column */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule)' }}>
                {[
                  {
                    label: 'Sovereign Risk Research',
                    desc: 'Multi-layer country assessments using the Borderless Sovereignty Index framework.',
                    icon: '◈',
                  },
                  {
                    label: 'Jurisdictional Analysis',
                    desc: 'Residency permits, citizenship programs, and tax treaty structures examined for structural integrity.',
                    icon: '◉',
                  },
                  {
                    label: 'Migration Policy Monitoring',
                    desc: 'Policy changes tracked across active programs, with legislative history and reversion risk assessment.',
                    icon: '◎',
                  },
                  {
                    label: 'Governance Indicators',
                    desc: 'Quantitative and observational indicators for institutional coherence, decoherence, and failure trajectories.',
                    icon: '◍',
                  },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: 'white',
                    padding: '1.75rem 1.5rem',
                  }}>
                    <div style={{
                      fontSize: '1.1rem',
                      color: 'var(--terra)',
                      marginBottom: '0.75rem',
                      lineHeight: 1,
                    }}>
                      {item.icon}
                    </div>
                    <h4 style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1rem',
                      marginBottom: '0.5rem',
                      color: 'var(--slate)',
                    }}>
                      {item.label}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--mid)', lineHeight: 1.55, fontFamily: 'var(--sans)' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem — slate-blue dark section with globe image */}
      <section className="dark-section section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-slate">Ecosystem</span>
              <h2 style={{ color: 'var(--paper-on-dark)', marginBottom: '1.25rem' }}>
                Intelligence is one layer of four.
              </h2>
              <p style={{ color: 'rgba(237,232,220,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontFamily: 'var(--body)', fontSize: '0.95rem' }}>
                Understanding where intelligence ends and judgment begins is not a legal disclaimer. It is the architecture of a sound decision process. Borderless Media occupies the first layer.
              </p>
              <Link href="/publications" className="btn-light btn">View Publications</Link>
            </div>
            <div>
              <div style={{ position: 'relative' }}>
                <img
                  src={GLOBE_IMAGE}
                  alt="Vintage globe showing Asia"
                  style={{
                    width: '100%',
                    height: '340px',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: 0.7,
                    filter: 'saturate(0.6)',
                  }}
                />
                {/* Overlay with ecosystem architecture */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(26,37,53,0.85) 0%, rgba(26,37,53,0.4) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2rem',
                }}>
                  <EcosystemArchitecture dark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indicators teaser — cream with terracotta numbers */}
      <section className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Indicators</span>
              <h2 style={{ marginBottom: '1rem' }}>The Borderless Sovereignty Index</h2>
              <p style={{ color: 'var(--mid)', marginBottom: '2rem', fontSize: '0.92rem' }}>
                A 10-layer country evaluation framework measuring institutional integrity, capital mobility, legal clarity, and sovereign risk. Updated periodically against primary source data.
              </p>
              <Link href="/indicators" className="btn-slate btn">View Indicators</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {/* v5.1 canonical data from bsi_editorial view — March 2026 */}
              {[
                { country: 'New Zealand', tier: 'Tier I', score: 9.7, rank: 4 },
                { country: 'Switzerland', tier: 'Tier I', score: 9.2, rank: 9 },
                { country: 'Uruguay', tier: 'Tier I', score: 8.8, rank: 25 },
                { country: 'Portugal', tier: 'Tier I', score: 8.0, rank: 60 },
                { country: 'Panama', tier: 'Tier II', score: 7.1, rank: 102 },
                { country: 'Argentina', tier: 'Tier III', score: 6.0, rank: 129 },
              ].map((item) => {
                const tierColor = item.tier === 'Tier I' ? 'var(--slate)'
                  : item.tier === 'Tier II' ? 'var(--slate-mid)'
                  : item.tier === 'Tier III' ? 'var(--terra-muted)'
                  : 'var(--terra)';

                return (
                  <div key={item.country} className="card" style={{ padding: '1.25rem' }}>
                    <div style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.58rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: tierColor,
                      marginBottom: '0.4rem',
                    }}>
                      {item.tier}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '0.6rem', color: 'var(--ink)' }}>
                      {item.country}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{
                        fontFamily: 'var(--serif)',
                        fontStyle: 'italic',
                        fontSize: '1.6rem',
                        color: tierColor,
                        lineHeight: 1,
                      }}>
                        {item.score}
                      </span>
                      <span style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.62rem',
                        color: 'var(--light)',
                      }}>
                        #{item.rank}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
