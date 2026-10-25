# thinkvelociti.com

Marketing site for Velociti, built with Next.js (App Router, static export), TypeScript and Tailwind CSS v4, and deployed to GitHub Pages.

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # static export to ./out
npm run lint
npm run grade-images   # grade + export photos placed under public/images
npm run encode-video   # re-encode the Home film (needs ffmpeg)
npm run build-redirects  # regenerate velociti.club redirect configs from redirects/redirects.json
```

- **Editing copy:** see [`CONTENT.md`](CONTENT.md). All copy lives in `/content`.
- **Launch tasks, placeholders and open questions:** [`docs/LAUNCH-CHECKLIST.md`](docs/LAUNCH-CHECKLIST.md).
- **Domain move and redirects:** [`redirects/README.md`](redirects/README.md).
- **Analytics rules:** [`AGENTS.md`](AGENTS.md). Mixpanel only, gated by cookie consent.
- **Environment variables:** [`.env.example`](.env.example).

## Structure

```
app/            routes (one folder per page), sitemap, robots, RSS, OG image route
components/
  site/         shell and shared UI (Nav, Footer, CTABand, StatBand, forms…)
  home/         Home-only sections (HeroThink, ScrollVideo, diagram, tiles)
  art/          brand line illustrations + graded-photo picker
content/        typed copy and MDX posts
lib/            analytics, SEO/JSON-LD, OG rendering, insights loader, forms
redirects/      velociti.club → thinkvelociti.com redirect map
scripts/        image grading, video encoding, redirect generation
```
