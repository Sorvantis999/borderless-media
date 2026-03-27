import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Borderless Media — Independent Geopolitical Intelligence',
  description:
    'Borderless Media is an independent geopolitical research publication. No program affiliations. No referral commissions. Primary-sourced analysis for internationally mobile individuals.',
  openGraph: {
    title: 'About Borderless Media — Independent Geopolitical Intelligence',
    description:
      'No program affiliations. No referral commissions. Primary-sourced geopolitical analysis for internationally mobile individuals and institutions.',
    url: 'https://borderlessmediallc.com/about',
  },
  alternates: {
    canonical: 'https://borderlessmediallc.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">About</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '1rem' }}>
            What Borderless Media is.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '520px', fontSize: '0.95rem' }}>
            Mission, editorial independence, and a clear statement of what this publication does and does not do.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container-narrow">
          <div className="article-body">
            <span className="eyebrow">Mission</span>
            <h2 style={{ marginBottom: '1rem' }}>Improving the information layer.</h2>
            <p>
              Borderless Media exists because the information environment available to internationally mobile individuals — Americans and others navigating the choice of where to live, hold assets, and establish presence — is systematically poor. It is fragmented across jurisdictions, commercially compromised by program referral incentives, and written for audiences with different risk tolerances than the people making sovereign decisions.
            </p>
            <p>
              The publication's function is straightforward: produce rigorous, independent geopolitical intelligence and publish it. Not to sell programs. Not to guide clients. Not to monetize the decision-making process. To improve the quality of information available before any of that begins.
            </p>
            <p>
              We cover sovereign risk conditions, jurisdictional structure, governance trajectories, capital mobility environments, and migration policy — the structural layer beneath the tactical choices that matter to internationally mobile individuals.
            </p>

            <hr className="rule" />

            <span className="eyebrow">Editorial Posture</span>
            <h2 style={{ marginBottom: '1rem' }}>Institutional, not editorial.</h2>
            <p>
              Borderless Media's analytical posture is institutional rather than editorial. The publication does not advocate for positions, does not have opinions on political developments except as data, and does not treat its readers as audiences requiring persuasion. Research findings are published because they are findings, not because they confirm a thesis or advance an argument.
            </p>
            <p>
              The closest comparable postures are institutional research desks: the Economist Intelligence Unit, Stratfor's analytical products, the research arms of major financial institutions. These are not perfect comparisons, but they describe the orientation: analytical rigor, primary source discipline, and separation between what is found and what to do about it.
            </p>
            <p>
              The Long Memo is the editorial voice of the broader Borderless ecosystem. Borderless Media is the research desk. They are related but they are not the same thing.
            </p>

            <hr className="rule" />

            <span className="eyebrow">Independence Statement</span>
            <h2 style={{ marginBottom: '1rem' }}>No programs. No referrals. No commissions.</h2>

            <div className="callout">
              <div className="callout-title">Independence Commitment</div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.65 }}>
                Borderless Media has no affiliation with any immigration program, citizenship-by-investment scheme, residency program operator, legal service provider, or financial product distributor. The publication does not receive referral fees, program commissions, or placement compensation of any kind. Research coverage decisions are made on analytical merit.
              </p>
            </div>

            <p>
              This matters for an obvious reason: most information in this space is commercially compromised. The ecosystem of residency and citizenship information is primarily funded by program referral commissions. Publications that appear independent are often operating as de facto marketing platforms for programs that pay for placement.
            </p>
            <p>
              Borderless Media's operating model does not depend on program affiliation. It depends on the quality and credibility of the research itself. That creates a different incentive structure — and a different type of information.
            </p>

            <hr className="rule" />

            <span className="eyebrow">Scope Limits</span>
            <h2 style={{ marginBottom: '1rem' }}>What we do not do.</h2>
            <p>
              Borderless Media does not provide legal advice, tax advice, or individualized recommendations. Research findings are published as analytical outputs. They are not instructions.
            </p>
            <p>
              This is not a legal disclaimer inserted by counsel. It reflects how we actually understand the relationship between intelligence and judgment. Information improves decisions. It does not make them. The decision-making role — understanding a client's specific circumstances, legal position, risk tolerance, and objectives — belongs to advisors. Ours is <Link href="/publications" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule)' }}>Borderless Concierge</Link>.
            </p>
            <p>
              Researchers, institutions, and professionals who wish to engage with the methodology, commission research, or discuss data licensing should reach out through the <Link href="/contact" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule)' }}>contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
