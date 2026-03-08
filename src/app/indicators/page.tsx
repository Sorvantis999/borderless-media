import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Indicators',
  description: 'The Borderless Sovereignty Index: a 10-layer sovereign risk framework for jurisdictional evaluation.',
};

// BSI layer architecture — qualitative descriptions map to v5.1 factors
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

// v5.1 canonical data — derived from bsi_editorial view (Supabase: akiskinwedtktkmmcdta)
// composite = v51_score_100 / 10. Tier from scoring bands. Last sync: March 2026.
const COUNTRIES = [
  {
    country: 'New Zealand', tier: 'I', score: 9.7, rank: 4, region: 'Oceania',
    highlights: ['Top-tier institutional coherence', 'Strong capital mobility', 'High relocation viability'],
  },
  {
    country: 'Switzerland', tier: 'I', score: 9.2, rank: 9, region: 'Europe',
    highlights: ['Lump-sum tax architecture', 'Deep capital infrastructure', 'Treaty network stability'],
  },
  {
    country: 'Uruguay', tier: 'I', score: 8.8, rank: 25, region: 'Latin America',
    highlights: ['Regional institutional outlier', '11-year tax holiday', 'Strong capital safety'],
  },
  {
    country: 'Singapore', tier: 'I', score: 8.6, rank: 31, region: 'Asia-Pacific',
    highlights: ['Perfect institutional score', 'Territorial tax', 'Legal clarity apex'],
  },
  {
    country: 'Hungary', tier: 'I', score: 8.4, rank: 37, region: 'Europe',
    highlights: ['EU access', 'CBI programme active', 'F9 medium risk — monitor'],
  },
  {
    country: 'Portugal', tier: 'I', score: 8.0, rank: 60, region: 'Europe',
    highlights: ['Strong institutional Layer A', 'EU 5-year naturalization', 'F6 tax norm at floor'],
  },
  {
    country: 'Chile', tier: 'I', score: 7.7, rank: 73, region: 'Latin America',
    highlights: ['Strongest Andean score', 'Strong macro fundamentals', 'Capital safety LOW'],
  },
  {
    country: 'Panama', tier: 'II', score: 7.1, rank: 102, region: 'Latin America',
    highlights: ['Banking infrastructure depth', 'Territorial taxation', 'Capital mobility leader'],
  },
  {
    country: 'Argentina', tier: 'III', score: 6.0, rank: 129, region: 'Latin America',
    highlights: ['Macro F5 near floor', 'Structural reform in progress', 'Capital control history'],
  },
  {
    country: 'Colombia', tier: 'III', score: 5.7, rank: 135, region: 'Latin America',
    highlights: ['Fiscal deterioration', 'Low capital viability', 'Institutional pressure active'],
  },
  {
    country: 'Turkey', tier: 'III', score: 4.7, rank: 170, region: 'Eurasia',
    highlights: ['CBI programme active', 'Macro F5 severely depressed', 'Lira risk structural'],
  },
  {
    country: 'Venezuela', tier: 'IV', score: 3.7, rank: 197, region: 'Latin America',
    highlights: ['Institutional collapse', 'No capital mobility', 'No-go zone'],
  },
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
            <span className="eyebrow" style={{ margin: 0 }}>Current Scores — v5.1 Index · 217 Countries</span>
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
                      color: 'var(--light)',
                    }}>
                      #{item.rank}
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
                    width: `${item.score * 10}%`,
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
              BSI scores are research outputs representing structural conditions at a given point in time. They are not recommendations regarding residency, citizenship acquisition, or capital allocation. Individual suitability assessment requires advisory engagement. Full methodology is described in the <Link href="/method" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule)' }}>Method</Link> section. Index covers 217 jurisdictions; selected countries shown.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
