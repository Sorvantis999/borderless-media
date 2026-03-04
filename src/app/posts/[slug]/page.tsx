import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, POSTS } from '@/lib/posts';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title,
    description: post.summary,
  };
}

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }));
}

function renderBody(body: string) {
  const lines = body.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{line.slice(3)}</h2>);
    } else if (line.trim() !== '') {
      elements.push(<p key={i}>{line}</p>);
    }
    i++;
  }
  return elements;
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS
    .filter(p => p.slug !== post.slug && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      {/* Article header */}
      <section className="dark-section" style={{ padding: '4rem 0 3.5rem', borderBottom: '1px solid var(--bg-dark-border)' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.2em 0.6em',
                border: '1px solid var(--bg-dark-border)',
                color: 'var(--light)',
              }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{ color: 'var(--paper-on-dark)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            {post.title}
          </h1>

          <p style={{ color: 'var(--light)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '580px', fontStyle: 'italic' }}>
            {post.summary}
          </p>

          <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--bg-dark-border)', paddingTop: '1.25rem' }}>
            {[
              { label: 'Published', value: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
              { label: 'Reading time', value: post.readingTime },
              { label: 'Publication', value: 'Borderless Media' },
            ].map(item => (
              <div key={item.label}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--light)', display: 'block' }}>
                  {item.label}
                </span>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--paper-on-dark)' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ background: 'var(--paper)', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'start' }}>
          {/* Main content */}
          <article className="article-body">
            {renderBody(post.body)}
          </article>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: 'calc(var(--nav-h) + 2rem)' }}>
            {/* Analysis vs Judgment callout */}
            <div style={{
              border: '1px solid var(--rule)',
              padding: '1.25rem',
              marginBottom: '1.5rem',
              background: 'var(--paper-dark)',
            }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
                display: 'block',
                marginBottom: '0.5rem',
              }}>
                A note on scope
              </span>
              <p style={{ fontSize: '0.78rem', color: 'var(--mid)', lineHeight: 1.55 }}>
                This analysis reflects structural research findings. It does not constitute advice regarding any individual circumstance, and should not be used as a basis for specific decisions without advisory engagement.
              </p>
              <Link href="/publications" style={{
                display: 'block',
                marginTop: '0.875rem',
                fontFamily: 'var(--mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
                borderBottom: '1px solid var(--rule)',
                paddingBottom: '1px',
              }}>
                About advisory services →
              </Link>
            </div>

            {/* Tags */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
                display: 'block',
                marginBottom: '0.6rem',
              }}>
                Topics
              </span>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Method link */}
            <Link href="/method" style={{
              display: 'block',
              padding: '1rem',
              border: '1px solid var(--rule)',
              fontSize: '0.78rem',
              color: 'var(--mid)',
              lineHeight: 1.5,
            }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem', color: 'var(--mid)' }}>
                Methodology
              </span>
              How Borderless Media sources, scores, and publishes its research →
            </Link>
          </aside>
        </div>
      </section>

      {/* Related research */}
      {related.length > 0 && (
        <section style={{ background: 'var(--paper-dark)', padding: '4rem 0', borderTop: '1px solid var(--rule)' }}>
          <div className="container">
            <span className="eyebrow">Related Research</span>
            <div className="grid-3">
              {related.map(r => (
                <Link href={`/posts/${r.slug}`} key={r.slug} style={{ display: 'block' }}>
                  <article className="card" style={{ background: 'var(--paper)' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      {r.tags.slice(0, 2).map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                      {r.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--light)' }}>
                      {new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} · {r.readingTime}
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div style={{ background: 'var(--paper)', padding: '2rem 0', borderTop: '1px solid var(--rule)' }}>
        <div className="container">
          <Link href="/research" style={{
            fontFamily: 'var(--mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--mid)',
          }}>
            ← Research Archive
          </Link>
        </div>
      </div>
    </>
  );
}
