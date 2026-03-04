import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Indicators',
  description: 'The Borderless Sovereignty Index: a 10-layer sovereign risk framework for jurisdictional evaluation.',
};

const BSI_LAYERS = [
  { num: '01', name: 'Institutional Coherence', desc: 'Alignment between formal institutions and operational reality.' },
  { num: '02', name: 'Legal Clarity', desc: 'Predictability of legal outcomes, property rights, and contract enforcement.' },
  { num: '03', name: 'Capital Mobility', desc: 'Restrictions on capital movement, repatriation, and cross-border transfer.' },
  { num: '04', name: 'Fiscal Sovereignty', desc: 'Government capacity to pursue independent fiscal policy; IMF/creditor constraints.' },
  { num: '05', name: 'Executive Branch Containment', desc: 'Constitutional and practical limits on executive action and judicial independence.' },
  { num: '06', name: 'Migration Infrastructure', desc: 'Permit program durability, administrative integrity, and residency access rights.' },
  { num: '07', name: 'Tax Architecture', desc: 'Territorial vs. worldwide tax regime, treaty network, and enforcement trajectory.' },
  { num: '08', name: 'Civil Society Viability', desc: 'Press freedom, civil society operating environment, and civic compression indicators.' },
  { num: '09', name: 'Geopolitical Alignment Risk', desc: 'Exposure to alliance disruptions, sanctions regimes, and military risk.' },
  { num: '10', name: 'Economic Resilience', desc: 'External balance, reserve adequacy, and structural economic capacity.' },
];

const COUNTRIES = [
  { country: 'Switzerland', tier: 'I', score: 87, change: +1, region: 'Europe', highlights: ['Strong institutional coherence', 'Deep capital mobility', 'Treaty network stability'] },
  { country: 'Singapore', tier: 'I', score: 85, change: 0, region: 'Asia-Pacific', highlights: ['Legal clarity', 'Capital mobility', 'Tax architecture'] },
  { country: 'New Zealand', tier: 'I', score: 83, change: -1, region: 'Oceania', highlights: ['Civil society', 'Institutional coherence', 'Geopolitical positioning'] },
  { country: 'Portugal', tier: 'II', score: 72, change: -2, region: 'Europe', highlights: ['Migration infrastructure', 'Tax architecture', 'Legal system'] },
  { country: 'Uruguay', tier: 'II', score: 71, change: +2, region: 'Latin America', highlights: ['Regional outlier', 'Capital mobility', 'Institutional stability'] },
  { country: 'Chile', tier: 'II', score: 69, change: 0, region: 'Latin America', highlights: ['Strongest Andean score', 'Capital mobility', 'Geopolitical neutrality'] },
  { country: 'Panama', tier: 'II', score: 66, change: -1, region: 'Latin America', highlights: ['Banking infrastructure', 'Territorial tax', 'Migration program'] },
  { country: 'Hungary', tier: 'III', score: 55, change: -1, region: 'Europe', highlights: ['EU access', 'Executive expansion risk', 'Judicial independence declining'] },
  { country: 'Colombia', tier: 'III', score: 51, change: -4, region: 'Latin America', highlights: ['Fiscal deterioration', 'Capital control risk rising', 'Institutional pressure'] },
  { country: 'Turkey', tier: 'III', score: 44, change: -3, region: 'Eurasia', highlights: ['Citizenship program active', 'Central bank independence low', 'Currency risk'] },
  { country: 'Argentina', tier: 'IV', score: 28, change: -7, region: 'Latin America', highlights: ['Capital controls active', 'Fiscal instability', 'Restructuring environment'] },
  { country: 'Venezuela', tier: 'IV', score: 14, change: 0, region: 'Latin America', highlights: ['Comprehensive controls', 'Institutional collapse', 'No-go zone'] },
];

const TIER_COLORS: Record<string, string> = {
  I: '#B5943A',
  II: 'var(--mid)',
  III: '#A63D2F',
  IV: 'var(--accent)',
};

export default function IndicatorsPage() {
  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Sovereign Risk Indicators</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '640px', marginBottom: '1rem' }}>
            The Borderless Sovereignty Index.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '560px', fontSize: '0.95rem' }}>
            A 10-layer country evaluation framework measuring institutional integrity, capital mobility, legal clarity, and sovereign risk. Scores represent research findings, not individualized recommendations.
          </p>
        </div>
      </section>

      {/* What indicators do / do not mean */}
      <section style={{ background: 'var(--bg-dark-2)', padding: '2.5rem 0', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.75rem',
              }}>
                What indicators mean
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--light)', lineHeight: 1.65 }}>
                BSI scores represent the current analytical assessment of a jurisdiction's structural conditions across ten measurement layers. A higher score indicates lower sovereign risk across the composite. Tier classification provides relative comparability. Scores are research outputs — they synthesize publicly observable structural data into a comparative format.
              </p>
            </div>
            <div>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--accent-muted)', display: 'block', marginBottom: '0.75rem',
              }}>
                What indicators do not mean
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--light)', lineHeight: 1.65 }}>
                A high BSI score does not indicate that a jurisdiction is appropriate for any individual. Residency, citizenship, and capital allocation decisions depend on personal circumstances, tax position, risk tolerance, family structure, and professional requirements that are outside the scope of this index. Indicators inform; they do not recommend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BSI Layers */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <span className="eyebrow">Index Architecture</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Ten measurement layers.</h2>
              <p style={{ color: 'var(--mid)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                Each layer is scored independently before composite aggregation. Layer weights reflect observed impact on sovereign risk outcomes in historical case analysis. Proprietary weighting methodology is not published; the layer structure is.
              </p>
            </div>
            <div>
              {BSI_LAYERS.map((layer, i) => (
                <div key={layer.num} style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: i < BSI_LAYERS.length - 1 ? '1px solid var(--rule)' : 'none',
                  alignItems: 'baseline',
                }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.65rem',
                    color: 'var(--light)',
                    letterSpacing: '0.05em',
                  }}>
                    {layer.num}
                  </span>
                  <div>
                    <span style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '0.95rem',
                      display: 'block',
                      marginBottom: '0.2rem',
                    }}>
                      {layer.name}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--mid)' }}>{layer.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country scores */}
      <section style={{ background: 'var(--paper-dark)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--rule)',
            paddingBottom: '0.75rem',
          }}>
            <span className="eyebrow" style={{ margin: 0 }}>Current Scores — {new Date().getFullYear()} Index</span>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--mid)',
            }}>
              Quarterly review cycle
            </span>
          </div>

          {/* Tier legend */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {['I', 'II', 'III', 'IV'].map(tier => (
              <div key={tier} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{
                  width: '10px', height: '10px',
                  background: TIER_COLORS[tier],
                  display: 'block',
                  borderRadius: '50%',
                }} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--mid)', letterSpacing: '0.06em' }}>
                  Tier {tier}
                  {tier === 'I' ? ' — Low Risk' : tier === 'II' ? ' — Moderate' : tier === 'III' ? ' — Elevated' : ' — High Risk'}
                </span>
              </div>
            ))}
          </div>

          <div className="grid-3">
            {COUNTRIES.map(item => (
              <div key={item.country} className="card" style={{ background: 'var(--paper)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: TIER_COLORS[item.tier],
                    }}>
                      Tier {item.tier} · {item.region}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '1.15rem',
                      marginTop: '0.2rem',
                    }}>
                      {item.country}
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '1.8rem',
                      lineHeight: 1,
                      display: 'block',
                    }}>
                      {item.score}
                    </span>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.7rem',
                      color: item.change > 0 ? '#2D7A4F' : item.change < 0 ? 'var(--accent)' : 'var(--light)',
                    }}>
                      {item.change > 0 ? '+' : ''}{item.change !== 0 ? item.change : '—'}
                    </span>
                  </div>
                </div>

                {/* Score bar */}
                <div style={{
                  height: '3px',
                  background: 'var(--rule)',
                  marginBottom: '1rem',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${item.score}%`,
                    background: TIER_COLORS[item.tier],
                    transition: 'width 0.3s',
                  }} />
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.highlights.map(h => (
                    <li key={h} style={{
                      fontSize: '0.75rem',
                      color: 'var(--mid)',
                      padding: '0.2rem 0',
                      paddingLeft: '0.875rem',
                      position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: TIER_COLORS[item.tier],
                      }}>·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            border: '1px solid var(--rule)',
            background: 'var(--paper)',
          }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--mid)', lineHeight: 1.6 }}>
              <strong style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Note: </strong>
              BSI scores are research outputs representing structural conditions at a given point in time. They are not recommendations regarding residency, citizenship acquisition, or capital allocation. Individual suitability assessment requires advisory engagement. Full methodology is described in the <Link href="/method" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule)' }}>Method</Link> section.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
