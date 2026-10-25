# Editing thinkvelociti.com

All copy lives in `/content`. Layout components read from it, so you can change words without touching design code. After any change, run `npm run build` (or `npm run dev` to preview at http://localhost:3000).

Anything in `[square brackets]` renders on the page as a yellow placeholder marker. Replace the brackets with real copy to remove the marker.

## Where things live

| What | File |
|---|---|
| Nav, footer, announcement bar, closing CTA band, emails, social links | `content/site.ts` |
| Home page (hero, stats, operating layer, cards, security band) | `content/home.ts` |
| Solutions page and the four run-log panels | `content/solutions.ts` |
| Engineers page, engagement steps, deployment table, airgapped | `content/engineers.ts` |
| Industries (one file each) | `content/industries/<slug>.ts` |
| Case studies | `content/customers.ts` |
| Trust Center, including the compliance statuses | `content/trust.ts` |
| About, leadership, values | `content/about.ts` |
| Careers roles and benefits | `content/careers.ts` |
| Press coverage, releases, boilerplate | `content/press.ts` |
| Contact page and form options | `content/contact.ts` |
| Legal pages | `content/legal.ts` |
| Insights posts | `content/insights/*.mdx` |
| Old-URL redirects | `redirects/redirects.json` |

## Change the announcement bar

Edit `announcement` in `content/site.ts`. **Change the `id` as well** so visitors who dismissed the old message see the new one.

## Add a case study

1. Copy one object in `caseStudies` in `content/customers.ts`.
2. Give it a unique `slug` (this becomes `/customers/<slug>`) and set `industrySlug` to an existing industry slug.
3. Fill in `headline` (the big cobalt stat), the three `stats`, `systems`, `challenge`, `built`, `timeline` and an optional `quote`. Only publish a named quote with written approval.
4. Optional: to show it on its industry page, set `caseSlug` in that industry's file.
5. To add a new filter pill on /customers, add it to `customersPage.filters`.

The page, its OG image, its sitemap entry and its Article JSON-LD are generated automatically.

## Add an industry

1. Copy `content/industries/healthcare.ts` to `content/industries/<slug>.ts` and update every field. `artChips` are the status chips drawn on the illustration.
2. Import it in `content/industries/index.ts` and add it to the `industries` array. The order there sets the order everywhere.
3. Add a line illustration: write a component in `components/art/IndustryArt.tsx` and add it to the `map` at the bottom. Until you do, it falls back to the Healthcare art.
4. Add a footer link in `content/site.ts` (`footer.columns`, Industries).
5. Add the photos (see below).

## Add or replace photos

1. Download the original from Unsplash (or your shoot) and save it as `public/images/industries/<slug>-hero.jpg` (the 21:9 hero and 4:5 Home tile) or `<slug>-alt.jpg` (the case-study header).
2. Run `npm run grade-images`. This applies the house grade (≈70% saturation, slightly cool, blacks lifted to #0B0D12) and writes AVIF and WebP at 800, 1600 and 2400 px.
3. Rebuild. Pages switch from the line illustration to the graded photo automatically.
4. Add the photographer to `public/images/CREDITS.md`.

Team, founder and Engineers photos must come from a real Velociti photo shoot.

## Publish an insight

1. Create `content/insights/<slug>.mdx`:

   ```mdx
   ---
   title: "Your title"
   excerpt: "One or two sentences for cards, RSS and search."
   category: "Perspectives"   # Product | In production | Customer stories | Perspectives | News
   date: "2026-11-01"
   author: "Velociti"
   art: "pilot"               # thumbnail illustration: pilot | airgap | spreadsheet | skyline
   draft: false
   ---

   Your post in Markdown. Use ## for section headings.
   ```

2. While `draft: true`, the post is still listed but carries a yellow "Draft" marker.
3. The post page, RSS item (`/insights/rss.xml`), OG image and sitemap entry are generated on build. The newest three posts appear on Home.

## Compliance statuses

In `content/trust.ts`, each item's `status` defaults to `[status]`. Never claim a certification until the report or certificate exists. Use wording such as "Aligned with", "Ready architecture" or "In progress".

## Logos on Home

`home.trustedBy.logos` in `content/home.ts`. Set `approved: false` to hide a logo the client hasn't approved. The logos are text wordmarks until SVGs are supplied.

## The film

Re-encode with `npm run encode-video` (needs ffmpeg). Captions are in `public/video/velociti.en.vtt`.

## Forms

The site is a static export on GitHub Pages, so forms POST JSON to endpoints set at build time (see `.env.example` and the repository's Actions variables):

- `NEXT_PUBLIC_LEAD_ENDPOINT`: the /contact audit form and the careers open application.
- `NEXT_PUBLIC_TRUST_FORM_ENDPOINT`: Trust Center document requests and vulnerability reports.

Until they are set, the forms show a visible placeholder and a mailto fallback.

## Site chat ("Ask Velociti")

The chat button (bottom right) answers questions from this website only. It's deterministic: no AI model, no external service.

- **What it knows** is rebuilt on every build from the same content files the pages use (solutions, industries, case studies, engineers, trust, about, careers, published insights). It's served as `/chat-index.json`. Change a page and the chat's answer changes with it.
- **Hand-written answers** (pricing, timeline, contact, location, data use, booking) live in `content/chat.ts` (`chatFaq`). Add an entry with a title, page URL, keywords and an answer, using only facts that appear on the site.
- **Greeting, suggestions and the fallback message** are also in `content/chat.ts`.
- **Matching** is in `lib/chat/engine.ts`. If visitors use words the site doesn't, add them to `SYNONYMS` there, or add sector words to `INDUSTRY_TERMS` in `lib/chat/build-index.ts`.

**Adding an LLM later:** keep this search as the retrieval step and send the top matches to the model as context. Because the site is static, the API key must sit behind a small server-side function (for example a Cloudflare Worker or Vercel function) that the chat calls. Never put the key in a `NEXT_PUBLIC_` variable.
