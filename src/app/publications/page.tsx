import type { Metadata } from 'next';
import Link from 'next/link';
import EcosystemArchitecture from '@/components/EcosystemArchitecture';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'The four publications of the Borderless ecosystem: Media, Living, The Long Memo, and Concierge.',
};

const PUBLICATIONS = [
  {
    layer: '01',
    name: 'Borderless Media',
    role: 'Intelligence',
    href: '/',
    isThis: true,
    what: 'Geopolitical research, sovereign risk indicators, jurisdictional analysis, and governance data. Borderless Media is the analytical foundation of the ecosystem — the publication that produces findings others translate into strategy and judgment.',
    whatItIsnt: 'Borderless Media does not provide individualized advice, referrals, or program recommendations. It is not a newsletter with a commercial agenda. It is not affiliated with any immigration program, legal service, or financial product.',
    readersOf: ['Researchers and analysts', 'Internationally mobile professionals', 'Family office and institutional readers', 'Strategy-layer readers building on the intelligence'],
    linksTo: 'Borderless Living (strategy), Borderless Concierge (for advisory needs)',
  },
  {
    layer: '02',
    name: 'Borderless Living',
    role: 'Strategy',
    href: 'https://borderlessliving.com',
    isThis: false,
    what: 'Translates geopolitical and jurisdictional intelligence into relocation strategy, residency planning, and sovereign mobility frameworks. Borderless Living is where intelligence becomes actionable context for people actively planning international moves.',
    whatItIsnt: 'Borderless Living does not render legal or tax advice, and does not substitute for individual advisory engagement. It provides planning context, not personalized recommendations.',
    readersOf: ['Individuals planning international residency', 'Families evaluating relocation options', 'Readers of The Long Memo seeking practical implications'],
    linksTo: 'Borderless Media (analytical foundation), Borderless Concierge (for execution)',
  },
  {
    layer: '03',
    name: 'The Long Memo',
    role: 'Political Analysis',
    href: 'https://thelongmemo.com',
    isThis: false,
    what: 'Analyzes institutional decay, governance failure, and geopolitical shifts — particularly within the United States — with attention to how systemic changes affect the risk calculus for internationally mobile Americans. Written with an intelligence analyst\'s posture, not a pundit\'s.',
    whatItIsnt: 'The Long Memo is not a partisan political publication. It does not advocate for parties, policies, or electoral outcomes. It reads institutions the way an intelligence analyst reads them: structurally, historically, and without sentimentality.',
    readersOf: ['Readers tracking U.S. institutional trajectories', 'Investors and professionals attuned to political risk', 'Internationally mobile Americans monitoring domestic conditions'],
    linksTo: 'Borderless Living (strategic implications), Borderless Media (geopolitical intelligence)',
  },
  {
    layer: '04',
    name: 'Borderless Concierge',
    role: 'Advisory',
    href: 'https://borderlessconcierge.com',
    isThis: false,
    what: 'Private advisory services for clients making sovereign decisions: residency acquisition, citizenship planning, international asset positioning, and sovereign mobility strategy. Borderless Concierge is where intelligence and strategy become judgment — individualized, accountable, and client-specific.',
    whatItIsnt: 'Borderless Concierge does not publish general research. It does not aggregate or distribute findings. Its work product belongs to clients. Advisory engagement is separate from every other Borderless publication.',
    readersOf: ['Individuals requiring personalized sovereign strategy', 'Family offices and institutions', 'Clients of Borderless Living ready to move to execution'],
    linksTo: 'Borderless Media and Borderless Living (analytical foundation)',
  },
];

export default function PublicationsPage() {
  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">The Borderless Ecosystem</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '1rem' }}>
            Four publications.<br />One architecture.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '520px', fontSize: '0.95rem' }}>
            Intelligence, strategy, political analysis, and judgment — each in a distinct publication, with a distinct function. The architecture is intentional. Each layer depends on the others.
          </p>
        </div>
      </section>

      {/* Architecture visual */}
      <section style={{ background: 'var(--paper-dark)', padding: '4rem 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Ecosystem Architecture</span>
              <h2 style={{ marginBottom: '1rem' }}>The separation of function.</h2>
              <p style={{ color: 'var(--mid)', lineHeight: 1.65, marginBottom: '1rem' }}>
                Intelligence improves the information layer. Strategy translates it into planning context. Political analysis tracks the conditions that make strategy necessary. Judgment converts all three into client-specific decisions.
              </p>
              <p style={{ color: 'var(--mid)', lineHeight: 1.65 }}>
                These are not redundant. The distinctions are structural, not cosmetic. Understanding what each publication does — and does not do — is prerequisite to using them well.
              </p>
            </div>
            <EcosystemArchitecture />
          </div>
        </div>
      </section>

      {/* Individual publication deep dives */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {PUBLICATIONS.map((pub, i) => (
              <div key={pub.name} style={{
                borderBottom: '1px solid var(--rule)',
                padding: '3.5rem 0',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '3rem 1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
                  {/* Layer number */}
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '0.7rem',
                    color: pub.isThis ? 'var(--gold)' : 'var(--light)',
                    letterSpacing: '0.05em',
                    paddingTop: '0.3rem',
                  }}>
                    {pub.layer}
                  </span>

                  {/* Left: identity */}
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <h2 style={{ fontSize: '1.6rem' }}>{pub.name}</h2>
                      {pub.isThis && (
                        <span style={{
                          fontFamily: 'var(--mono)',
                          fontSize: '0.58rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--gold)',
                          border: '1px solid var(--gold)',
                          padding: '0.15em 0.5em',
                        }}>
                          This publication
                        </span>
                      )}
                    </div>
                    <span style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--mid)',
                      display: 'block',
                      marginBottom: '1.25rem',
                    }}>
                      {pub.role}
                    </span>
                    <p style={{ color: 'var(--ink)', lineHeight: 1.65, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                      {pub.what}
                    </p>
                    {!pub.isThis && (
                      <Link href={pub.href} className="btn" style={{ fontSize: '0.72rem' }}>
                        Visit {pub.name} →
                      </Link>
                    )}
                  </div>

                  {/* Right: what it isn't + readers */}
                  <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <span style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-muted)',
                        display: 'block',
                        marginBottom: '0.5rem',
                      }}>
                        What it is not
                      </span>
                      <p style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.6 }}>{pub.whatItIsnt}</p>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <span style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--mid)',
                        display: 'block',
                        marginBottom: '0.5rem',
                      }}>
                        Readers
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {pub.readersOf.map(r => (
                          <li key={r} style={{
                            fontSize: '0.78rem',
                            color: 'var(--mid)',
                            padding: '0.2rem 0',
                            paddingLeft: '0.875rem',
                            position: 'relative',
                          }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--rule)' }}>·</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{
                      borderTop: '1px solid var(--rule)',
                      paddingTop: '0.75rem',
                    }}>
                      <span style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--mid)',
                        display: 'block',
                        marginBottom: '0.25rem',
                      }}>
                        Connected to
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--mid)' }}>{pub.linksTo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
