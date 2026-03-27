import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Method — Sourcing, Uncertainty Handling & Editorial Posture',
  description:
    'How Borderless Media conducts geopolitical research: primary source discipline, uncertainty notation, update cadence, and the hard boundary between analysis and advice.',
  openGraph: {
    title: 'Research Method — Sourcing, Uncertainty Handling & Editorial Posture',
    description:
      'Primary-sourced. Independent from programs and referrals. How Borderless Media researches and what it publishes.',
    url: 'https://borderlessmediallc.com/method',
  },
  alternates: {
    canonical: 'https://borderlessmediallc.com/method',
  },
};

export default function MethodPage() {
  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Method</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '1rem' }}>
            How we research and what we publish.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '520px', fontSize: '0.95rem' }}>
            Research posture, sourcing discipline, and the limits of what Borderless Media does and does not do.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}>
            {/* Sidebar nav */}
            <aside style={{ position: 'sticky', top: 'calc(var(--nav-h) + 2rem)' }}>
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
                Sections
              </span>
              {[
                'Research Principles',
                'Sourcing Discipline',
                'Uncertainty Handling',
                'Update Cadence',
                'Model Posture',
                'Advisory Boundary',
              ].map(s => (
                <div key={s} style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.82rem',
                  color: 'var(--mid)',
                  padding: '0.35rem 0',
                  borderBottom: '1px solid var(--rule)',
                }}>
                  {s}
                </div>
              ))}
            </aside>

            {/* Content */}
            <article className="article-body">
              <h2 style={{ marginBottom: '1rem' }}>Research Principles</h2>
              <p>Borderless Media operates as an independent research desk. Publications reflect analytical findings derived from primary and secondary source review. Editorial decisions are made independently of commercial relationships, program affiliations, and reader preferences.</p>
              <p>The publication covers geopolitical intelligence relevant to sovereign decision-making: jurisdictional analysis, sovereign risk indicators, migration policy, governance trajectories, and capital mobility. Coverage depth is determined by research availability, not popularity or reader demand.</p>

              <hr className="rule" />

              <h2 style={{ marginBottom: '1rem' }}>Sourcing Discipline</h2>
              <p>Primary sources are prioritized wherever available. These include: legislative records, regulatory bulletins, central bank publications, IMF and World Bank consultation documents, judicial records where accessible, and diplomatic filings in the public record.</p>
              <p>Secondary sources — including news reporting, practitioner commentary, and academic literature — are used to contextualize primary data and identify areas requiring additional investigation. Secondary sources are not treated as conclusions.</p>
              <p>Where observed practitioner experience conflicts with official records, both are noted. Official records are not assumed to reflect operational reality. The gap between formal documentation and operational reality is itself a measurement target in the Borderless Sovereignty Index.</p>

              <hr className="rule" />

              <h2 style={{ marginBottom: '1rem' }}>Uncertainty Handling</h2>
              <p>Uncertainty is stated rather than suppressed. Research outputs distinguish between findings with strong evidentiary bases and assessments that reflect analytical judgment under data constraints. The following notation convention is used:</p>

              <div style={{
                border: '1px solid var(--rule)',
                marginBottom: '1.5rem',
              }}>
                {[
                  { label: 'Documented', desc: 'Directly supported by primary source records. No material uncertainty.' },
                  { label: 'Assessed', desc: 'Supported by convergent secondary evidence and practitioner observation. Low-to-moderate uncertainty.' },
                  { label: 'Estimated', desc: 'Derived from inference or indirect evidence. Uncertainty is material and stated.' },
                  { label: 'Contested', desc: 'Conflicting sources present. Both positions noted; provisional assessment provided where possible.' },
                ].map((item, i, arr) => (
                  <div key={item.label} style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--rule)' : 'none',
                    alignItems: 'baseline',
                  }}>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--mid)',
                    }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--ink)' }}>{item.desc}</span>
                  </div>
                ))}
              </div>

              <hr className="rule" />

              <h2 style={{ marginBottom: '1rem' }}>Update Cadence</h2>
              <p>The Borderless Sovereignty Index is reviewed quarterly. Score revisions are published when new data warrants update. Country profiles are annotated with revision dates.</p>
              <p>Research briefs and sector analyses are published as conditions warrant — they do not follow a fixed calendar. Reactive publishing in response to breaking conditions is undertaken when material new information is available, not as a platform for commentary without evidentiary basis.</p>

              <hr className="rule" />

              <h2 style={{ marginBottom: '1rem' }}>Model Posture</h2>
              <p>The Borderless Sovereignty Index is a composite scoring model. It is not a predictive model for specific events, and it does not forecast outcomes. It is a structural risk assessment: a reading of current conditions, not a projection of trajectories.</p>
              <p>Directional change indicators (quarter-on-quarter score movements) reflect observed condition changes, not forecasts. A declining score indicates deteriorating structural conditions; it does not predict a specific failure event or timeline.</p>
              <p>Proprietary layer weighting methodology is not published. The index architecture (ten layers, quarterly review, primary source priority) is described in full. Readers who require access to weighting methodology for professional purposes may submit an inquiry through the <Link href="/contact" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule)' }}>contact page</Link>.</p>

              <hr className="rule" />

              <h2 style={{ marginBottom: '1rem' }}>Advisory Boundary</h2>

              <div className="callout">
                <div className="callout-title">Institutional Statement</div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.65 }}>
                  Borderless Media publishes findings. It does not provide individualized advice here. Research outputs are not recommendations, and they do not account for the individual circumstances — legal, financial, personal, or professional — that determine whether a given finding is relevant to any particular person.
                </p>
              </div>

              <p>This distinction is not a legal disclaimer. It reflects the actual structure of sound decision-making. Intelligence improves the information layer. It does not replace judgment. For client-specific assessment and advisory engagement, see <Link href="/publications" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule)' }}>Borderless Concierge</Link>.</p>
              <p>Researchers, policy professionals, and institutional readers who wish to engage with the underlying methodology or commission research are encouraged to reach out via the contact page.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
