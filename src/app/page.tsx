import Link from 'next/link';
import EcosystemArchitecture from '@/components/EcosystemArchitecture';

const HERO_IMAGE = 'https://images.pexels.com/photos/8828679/pexels-photo-8828679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600';
const GLOBE_IMAGE = 'https://images.pexels.com/photos/1098526/pexels-photo-1098526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900';
const PASSPORTS_IMAGE = '/passports-editorial.jpeg';

const FEATURED = [
  {
    publication: 'TLM',
    pubLabel: 'The Long Memo',
    title: 'The Strait of Hormuz Just Gave Your Savings a Deadline',
    description: "You're Not Energy Independent. Your Savings Are Proof.",
    url: 'https://www.thelongmemo.com/p/the-strait-of-hormuz-just-gave-your',
    image: 'https://substackcdn.com/image/fetch/$s_!XMrI!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b9bbbb9-3f84-48d2-be75-14b8acd3d375_1280x721.jpeg',
  },
  {
    publication: 'TLM',
    pubLabel: 'The Long Memo',
    title: '"I\'ll Leave If It Gets Bad": The Dangerous Lie That Keeps You Trapped',
    description: 'My government colleagues are quietly seeking asylum. The warning signs they see that most Americans are missing.',
    url: 'https://www.thelongmemo.com/p/ill-leave-if-it-gets-bad-the-dangerous',
    image: 'https://substackcdn.com/image/fetch/$s_!C7_q!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c7a2e1e-403f-4a05-886d-89da6159a749_5728x3819.jpeg',
  },
  {
    publication: 'BL',
    pubLabel: 'Borderless Living',
    title: "Why You Won't Lose Your Citizenship—but May Lose Your Passport",
    description: 'False Alarm, Real Risk: What the Dual Citizenship Panic Missed.',
    url: 'https://www.borderlessliving.com/p/why-you-wont-lose-your-citizenshipbut',
    image: 'https://substackcdn.com/image/fetch/$s_!PiJv!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F86fdc171-e16c-4cef-a4b3-171fe676ccde_6720x4480.jpeg',
  },
  {
    publication: 'BL',
    pubLabel: 'Borderless Living',
    title: 'Building the Future: How to Move Your Family, Overcome Fear, and Create the Next Chapter Together',
    description: 'A Tactical and Emotional Guide to Leaving Safely, Planning Wisely, and Living Freely — Before the World Forces Your Hand.',
    url: 'https://www.borderlessliving.com/p/building-the-future-how-to-move-your',
    image: 'https://substackcdn.com/image/fetch/$s_!HIAg!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46fc5a36-ac68-4ac7-b3f8-7dd748907184_5867x3587.jpeg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,37,53,0.45) 0%, rgba(26,37,53,0.72) 55%, rgba(26,37,53,0.95) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--terra)' }} />
        <div className="container" style={{ position: 'relative', paddingBottom: '5rem', paddingTop: '8rem', width: '100%' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="eyebrow" style={{ color: 'var(--terra-muted)', marginBottom: '1.25rem' }}>Borderless Media</span>
            <h1 style={{ color: 'var(--paper-on-dark)', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: 1.08 }}>
              Intelligence for<br />sovereign decisions.
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(237,232,220,0.78)', maxWidth: '540px', marginBottom: '2.5rem', lineHeight: 1.75, fontFamily: 'var(--body)' }}>
              Two publications. One purpose: give you the analysis you need to make decisions about where you live, how you protect your assets, and what your government is actually doing.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/publications" className="btn-terra btn">Our Publications</Link>
              <Link href="/research" className="btn-light btn">Read the Archive →</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '1rem', right: '1.5rem', fontFamily: 'var(--sans)', fontSize: '0.6rem', color: 'rgba(237,232,220,0.3)', letterSpacing: '0.05em' }}>
          Photo: Lara Jameson / Pexels
        </div>
      </section>

      {/* What we are / aren't */}
      <section style={{ background: 'var(--cream)', borderBottom: '1px solid var(--rule)', padding: '0' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {[
              { label: 'We publish', items: ['Geopolitical analysis', 'Jurisdictional intelligence', 'Migration policy monitoring', 'Governance & institutional research'], accent: 'var(--slate)' },
              { label: 'We do not publish', items: ['Individualized advice', 'Program referrals', 'Tactical recommendations', 'Client-specific assessments'], accent: 'var(--mid)' },
              { label: 'The distinction', items: ['Analysis is not judgment.', 'Findings are not instructions.', 'Intelligence enables decisions.', 'Decisions require counsel.'], accent: 'var(--terra)', italic: true },
            ].map((col, i) => (
              <div key={col.label} style={{ padding: '2.5rem 2rem', borderLeft: i === 0 ? 'none' : '1px solid var(--rule)', borderTop: `3px solid ${col.accent}` }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: col.accent, display: 'block', marginBottom: '1rem' }}>
                  {col.label}
                </span>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {col.items.map(item => (
                    <li key={item} style={{ fontSize: '0.85rem', color: col.italic ? 'var(--ink)' : 'var(--mid)', padding: '0.4rem 0', borderBottom: '1px solid var(--rule)', fontStyle: col.italic ? 'italic' : 'normal', fontFamily: col.italic ? 'var(--body)' : 'var(--sans)', lineHeight: 1.5 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured reading — 2 TLM + 2 BL */}
      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2.5rem', borderBottom: '1px solid var(--rule)', paddingBottom: '1rem' }}>
            <span className="eyebrow" style={{ margin: 0 }}>Featured Reading</span>
            <Link href="/research" style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: 'var(--slate)' }}>
              Full archive →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {(['TLM', 'BL'] as const).map((pub) => {
              const articles = FEATURED.filter(f => f.publication === pub);
              const isPub = pub === 'TLM';
              return (
                <div key={pub}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: `2px solid ${isPub ? 'var(--slate)' : 'var(--terra)'}` }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: isPub ? 'var(--slate)' : 'var(--terra)', fontWeight: 600 }}>
                      {isPub ? 'The Long Memo' : 'Borderless Living'}
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem', color: 'var(--light)', letterSpacing: '0.06em' }}>
                      {isPub ? '— Free · Geopolitical Analysis' : '— Paid · Relocation & Sovereign Strategy'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {articles.map((article) => (
                      <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
                        <article className="card" style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0.875rem', padding: '1rem', alignItems: 'start' }}>
                          <div style={{ width: '80px', height: '60px', overflow: 'hidden', flexShrink: 0, background: 'var(--rule)' }}>
                            <img src={article.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                          </div>
                          <div>
                            <h4 style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', lineHeight: 1.3, marginBottom: '0.35rem', color: 'var(--ink)' }}>
                              {article.title}
                            </h4>
                            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.72rem', color: 'var(--mid)', lineHeight: 1.45 }}>
                              {article.description}
                            </p>
                          </div>
                        </article>
                      </a>
                    ))}
                    <a href={isPub ? 'https://www.thelongmemo.com' : 'https://www.borderlessliving.com'} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', color: isPub ? 'var(--slate)' : 'var(--terra)', letterSpacing: '0.06em', textTransform: 'uppercase' as const, fontWeight: 500, textDecoration: 'none' }}>
                      {isPub ? 'Subscribe to TLM →' : 'Subscribe to BL →'}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we publish — chess image + grid */}
      <section className="section" style={{ background: 'var(--cream)', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div style={{ position: 'relative', marginBottom: '2rem' }}>
                <img src={PASSPORTS_IMAGE} alt="Passports from multiple countries" style={{ width: '100%', height: '320px', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              </div>
              <span className="eyebrow">What We Publish</span>
              <h2 style={{ marginBottom: '1.25rem' }}>The information layer.</h2>
              <p style={{ color: 'var(--mid)', marginBottom: '1rem', fontSize: '0.92rem' }}>
                The information available to internationally mobile individuals is systematically inadequate — fragmented, commercially compromised, or designed for audiences with different risk profiles.
              </p>
              <p style={{ color: 'var(--mid)', marginBottom: '2rem', fontSize: '0.92rem' }}>
                We make risk legible for those who need to act.
              </p>
              <Link href="/about" className="btn">About Borderless</Link>
            </div>

            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule)' }}>
                {[
                  { label: 'The Long Memo', desc: "Free institutional and geopolitical analysis written for people who need to understand what governments are actually doing — not what they say they're doing.", icon: '◈', href: 'https://www.thelongmemo.com' },
                  { label: 'Borderless Living', desc: 'Paid advisory publication covering international relocation, sovereign strategy, jurisdictional intelligence, and the practical mechanics of building a life across borders.', icon: '◉', href: 'https://www.borderlessliving.com' },
                  { label: 'Editorial Method', desc: 'Primary-sourced. Independent from programs, referrals, and commission structures. Findings state confidence levels where data is contested or incomplete.', icon: '◎', href: '/method' },
                  { label: 'Pitch Your Analysis', desc: 'We consider unsolicited submissions from researchers, former officials, and practitioners with direct knowledge. Strong sourcing required. We read everything.', icon: '◍', href: '/contact' },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'white', padding: '1.75rem 1.5rem', height: '100%' }}>
                      <div style={{ fontSize: '1.1rem', color: 'var(--terra)', marginBottom: '0.75rem', lineHeight: 1 }}>{item.icon}</div>
                      <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--slate)' }}>{item.label}</h4>
                      <p style={{ fontSize: '0.78rem', color: 'var(--mid)', lineHeight: 1.55, fontFamily: 'var(--sans)' }}>{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="dark-section section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow eyebrow-slate">Ecosystem</span>
              <h2 style={{ color: 'var(--paper-on-dark)', marginBottom: '1.25rem' }}>Intelligence is one layer of four.</h2>
              <p style={{ color: 'rgba(237,232,220,0.65)', lineHeight: 1.75, marginBottom: '2rem', fontFamily: 'var(--body)', fontSize: '0.95rem' }}>
                Understanding where intelligence ends and judgment begins is not a legal disclaimer. It is the architecture of a sound decision process. Borderless Media occupies the first layer.
              </p>
              <Link href="/publications" className="btn-light btn">View Publications</Link>
            </div>
            <div>
              <div style={{ position: 'relative' }}>
                <img src={GLOBE_IMAGE} alt="Vintage globe showing Asia" style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block', opacity: 0.7, filter: 'saturate(0.6)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,37,53,0.85) 0%, rgba(26,37,53,0.4) 100%)', display: 'flex', alignItems: 'center', padding: '2rem' }}>
                  <EcosystemArchitecture dark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
