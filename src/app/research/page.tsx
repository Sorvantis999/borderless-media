import type { Metadata } from 'next';
import { getTLMFeed, getBLFeed, type FeedItem } from '@/lib/rss';

export const metadata: Metadata = {
  title: 'Research Archive — Geopolitical Analysis & Sovereign Risk Intelligence',
  description:
    'Archive of geopolitical analysis, sovereign risk assessments, jurisdictional intelligence, and migration policy research from The Long Memo and Borderless Living.',
  openGraph: {
    title: 'Research Archive — Geopolitical Analysis & Sovereign Risk Intelligence',
    description:
      'Geopolitical analysis, sovereign risk, jurisdictional intelligence, and migration policy research. Independent. Unsponsored. Primary-sourced.',
    url: 'https://borderlessmediallc.com/research',
  },
  alternates: {
    canonical: 'https://borderlessmediallc.com/research',
  },
};

export const revalidate = 3600; // ISR: rebuild this page hourly

const FEATURED = [
  {
    publication: 'TLM' as const,
    title: 'The Strait of Hormuz Just Gave Your Savings a Deadline',
    description: "You're Not Energy Independent. Your Savings Are Proof.",
    url: 'https://www.thelongmemo.com/p/the-strait-of-hormuz-just-gave-your',
    image: 'https://substackcdn.com/image/fetch/$s_!XMrI!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b9bbbb9-3f84-48d2-be75-14b8acd3d375_1280x721.jpeg',
  },
  {
    publication: 'TLM' as const,
    title: '"I\'ll Leave If It Gets Bad": The Dangerous Lie That Keeps You Trapped',
    description: 'My government colleagues are quietly seeking asylum. The warning signs they see that most Americans are missing.',
    url: 'https://www.thelongmemo.com/p/ill-leave-if-it-gets-bad-the-dangerous',
    image: 'https://substackcdn.com/image/fetch/$s_!C7_q!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c7a2e1e-403f-4a05-886d-89da6159a749_5728x3819.jpeg',
  },
  {
    publication: 'BL' as const,
    title: "Why You Won't Lose Your Citizenship—but May Lose Your Passport",
    description: 'False Alarm, Real Risk: What the Dual Citizenship Panic Missed.',
    url: 'https://www.borderlessliving.com/p/why-you-wont-lose-your-citizenshipbut',
    image: 'https://substackcdn.com/image/fetch/$s_!PiJv!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F86fdc171-e16c-4cef-a4b3-171fe676ccde_6720x4480.jpeg',
  },
  {
    publication: 'BL' as const,
    title: 'Building the Future: How to Move Your Family, Overcome Fear, and Create the Next Chapter Together',
    description: 'A Tactical and Emotional Guide to Leaving Safely, Planning Wisely, and Living Freely — Before the World Forces Your Hand.',
    url: 'https://www.borderlessliving.com/p/building-the-future-how-to-move-your',
    image: 'https://substackcdn.com/image/fetch/$s_!HIAg!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46fc5a36-ac68-4ac7-b3f8-7dd748907184_5867x3587.jpeg',
  },
];

function FeedCard({ item }: { item: FeedItem }) {
  const isTLM = item.publication === 'TLM';
  const pubColor = isTLM ? 'var(--slate)' : 'var(--terra)';
  const pubName = isTLM ? 'The Long Memo' : 'Borderless Living';

  const dateStr = item.pubDate
    ? new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
      <article style={{
        padding: '1.25rem 0',
        borderBottom: '1px solid var(--rule)',
        display: 'grid',
        gridTemplateColumns: item.image ? '72px 1fr' : '1fr',
        gap: '1rem',
        alignItems: 'start',
      }}>
        {item.image && (
          <div style={{ width: '72px', height: '54px', overflow: 'hidden', background: 'var(--rule)', flexShrink: 0 }}>
            <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        )}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: pubColor, fontWeight: 600 }}>
              {pubName}
            </span>
            {dateStr && (
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--light)', letterSpacing: '0.04em' }}>
                · {dateStr}
              </span>
            )}
          </div>
          <h4 style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', lineHeight: 1.3, marginBottom: '0.3rem', color: 'var(--ink)' }}>
            {item.title}
          </h4>
          {item.description && (
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--mid)', lineHeight: 1.45 }}>
              {item.description.slice(0, 140)}{item.description.length > 140 ? '…' : ''}
            </p>
          )}
        </div>
      </article>
    </a>
  );
}

function FeaturedCard({ article }: { article: typeof FEATURED[0] }) {
  const isTLM = article.publication === 'TLM';
  const pubColor = isTLM ? 'var(--slate)' : 'var(--terra)';
  const pubName = isTLM ? 'The Long Memo' : 'Borderless Living';

  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
      <article className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ position: 'relative', height: '180px', overflow: 'hidden', background: 'var(--rule)' }}>
          <img src={article.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
            <span style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.52rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: 'white',
              background: pubColor,
              padding: '0.2rem 0.5rem',
              fontWeight: 600,
            }}>
              {pubName}
            </span>
          </div>
        </div>
        <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', lineHeight: 1.3, marginBottom: '0.6rem', color: 'var(--ink)', flex: 1 }}>
            {article.title}
          </h3>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: 'var(--mid)', lineHeight: 1.5, marginBottom: '1rem' }}>
            {article.description}
          </p>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', color: pubColor, letterSpacing: '0.06em', textTransform: 'uppercase' as const, fontWeight: 500 }}>
            Read →
          </span>
        </div>
      </article>
    </a>
  );
}

export default async function ResearchPage() {
  const [tlmFeed, blFeed] = await Promise.all([getTLMFeed(5), getBLFeed(5)]);

  return (
    <>
      {/* Header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Reading Room</span>
          <h1 style={{ color: 'var(--paper-on-dark)', maxWidth: '600px', marginBottom: '1rem' }}>
            The best of both publications.
          </h1>
          <p style={{ color: 'var(--light)', maxWidth: '560px', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Featured pieces from The Long Memo and Borderless Living — plus the latest from each feed. Analysis, not advice. Intelligence, not instructions.
          </p>
        </div>
      </section>

      {/* Publication posture */}
      <section style={{ background: 'var(--bg-dark-2)', borderBottom: '1px solid var(--bg-dark-border)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {[
              { pub: 'The Long Memo', label: 'Free · thelongmemo.com', desc: 'Institutional and geopolitical analysis for the internationally mobile. Tens of thousands of subscribers.', href: 'https://www.thelongmemo.com', color: 'var(--gold)' },
              { pub: 'Borderless Living', label: 'Paid · borderlessliving.com', desc: 'Practical sovereign strategy, relocation intelligence, and jurisdictional analysis. Paid subscribers only.', href: 'https://www.borderlessliving.com', color: 'var(--terra-muted)' },
            ].map((item) => (
              <a key={item.pub} href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', borderLeft: `2px solid ${item.color}`, paddingLeft: '1rem' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: item.color, marginBottom: '0.2rem' }}>{item.pub}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--light)', marginBottom: '0.5rem' }}>{item.label}</div>
                <p style={{ fontSize: '0.78rem', color: 'var(--light)', lineHeight: 1.45 }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured — editorial picks */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--rule)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span className="eyebrow" style={{ margin: 0 }}>Featured Pieces</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--light)', letterSpacing: '0.08em' }}>EDITORIAL SELECTION</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {FEATURED.map((article) => (
              <FeaturedCard key={article.url} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Live feeds — side by side */}
      <section className="section" style={{ background: 'var(--paper)', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--rule)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span className="eyebrow" style={{ margin: 0 }}>Recent Writing</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--light)', letterSpacing: '0.08em' }}>UPDATED HOURLY</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            {/* TLM Feed */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--slate)', fontWeight: 600 }}>
                  The Long Memo
                </span>
                <a href="https://www.thelongmemo.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', color: 'var(--slate)', letterSpacing: '0.05em', textDecoration: 'none' }}>
                  Subscribe →
                </a>
              </div>
              {tlmFeed.length > 0 ? (
                tlmFeed.map((item) => <FeedCard key={item.link} item={item} />)
              ) : (
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--light)', fontStyle: 'italic' }}>Feed unavailable — visit thelongmemo.com</p>
              )}
            </div>

            {/* BL Feed */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--terra)', fontWeight: 600 }}>
                  Borderless Living
                </span>
                <a href="https://www.borderlessliving.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', color: 'var(--terra)', letterSpacing: '0.05em', textDecoration: 'none' }}>
                  Subscribe →
                </a>
              </div>
              {blFeed.length > 0 ? (
                blFeed.map((item) => <FeedCard key={item.link} item={item} />)
              ) : (
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--light)', fontStyle: 'italic' }}>Feed unavailable — visit borderlessliving.com</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pitch section */}
      <section className="dark-section section">
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' as const }}>
            <span className="eyebrow eyebrow-slate">Contribute</span>
            <h2 style={{ color: 'var(--paper-on-dark)', marginBottom: '1.25rem' }}>
              Have analysis worth publishing?
            </h2>
            <p style={{ color: 'rgba(237,232,220,0.65)', lineHeight: 1.75, marginBottom: '0.75rem', fontFamily: 'var(--body)', fontSize: '0.95rem' }}>
              We consider unsolicited submissions from researchers, former officials, and practitioners with direct, first-hand knowledge of the topics we cover.
            </p>
            <p style={{ color: 'rgba(237,232,220,0.5)', lineHeight: 1.7, marginBottom: '2.5rem', fontFamily: 'var(--body)', fontSize: '0.85rem' }}>
              Strong sourcing is required. Promotional content, affiliate content, and program referrals will not be considered. If what you have is genuinely good, we will read it.
            </p>
            <a href="/contact" className="btn-light btn" style={{ display: 'inline-block' }}>
              Pitch Your Analysis →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
