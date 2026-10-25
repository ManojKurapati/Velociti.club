import { getAllPosts } from "@/lib/insights";
import { site } from "@/content/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = getAllPosts()
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${site.url}/insights/${p.slug}</link>
      <guid isPermaLink="true">${site.url}/insights/${p.slug}</guid>
      <pubDate>${new Date(p.date + "T00:00:00Z").toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.excerpt)}</description>
    </item>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Velociti Insights</title>
    <link>${site.url}/insights</link>
    <atom:link href="${site.url}/insights/rss.xml" rel="self" type="application/rss+xml" />
    <description>Field notes from production: enterprise AI agents, built and governed.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
