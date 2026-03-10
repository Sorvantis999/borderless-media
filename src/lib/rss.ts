export type FeedItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string | null;
  publication: 'TLM' | 'BL';
};

async function parseFeed(url: string, publication: 'TLM' | 'BL'): Promise<FeedItem[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // hourly
      headers: { 'User-Agent': 'Borderless Media / RSS reader' },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const items: FeedItem[] = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let m: RegExpExecArray | null;

    while ((m = itemRe.exec(xml)) !== null) {
      const block = m[1];

      const title = block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1]
        ?? block.match(/<title>([\s\S]*?)<\/title>/)?.[1]
        ?? '';

      const link = block.match(/<link>([\s\S]*?)<\/link>/)?.[1]
        ?? block.match(/<link\s+href="([^"]+)"/)?.[1]
        ?? '';

      const description = block.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
        ?? block.match(/<description>([\s\S]*?)<\/description>/)?.[1]
        ?? '';

      const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? '';

      // Try media:content first, then enclosure, then og:image in description
      const image = block.match(/<media:content[^>]+url="([^"]+)"/)?.[1]
        ?? block.match(/<enclosure[^>]+url="([^"]+)"/)?.[1]
        ?? block.match(/src="(https:\/\/substackcdn\.com[^"]+)"/)?.[1]
        ?? null;

      if (title && link) {
        items.push({
          title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&#8212;/g, '—'),
          link: link.trim(),
          description: description
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&#x27;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&#8212;/g, '—')
            .trim(),
          pubDate,
          image,
          publication,
        });
      }
    }

    return items;
  } catch {
    return [];
  }
}

export async function getTLMFeed(limit = 4): Promise<FeedItem[]> {
  const items = await parseFeed('https://longmemo.substack.com/feed', 'TLM');
  return items.slice(0, limit);
}

export async function getBLFeed(limit = 4): Promise<FeedItem[]> {
  const items = await parseFeed('https://borderlessliving.substack.com/feed', 'BL');
  return items.slice(0, limit);
}

export async function getCombinedFeed(limitEach = 3): Promise<FeedItem[]> {
  const [tlm, bl] = await Promise.all([getTLMFeed(limitEach), getBLFeed(limitEach)]);
  // Interleave: TLM, BL, TLM, BL...
  const result: FeedItem[] = [];
  const max = Math.max(tlm.length, bl.length);
  for (let i = 0; i < max; i++) {
    if (tlm[i]) result.push(tlm[i]);
    if (bl[i]) result.push(bl[i]);
  }
  return result;
}
