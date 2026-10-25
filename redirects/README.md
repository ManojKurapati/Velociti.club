# velociti.club → thinkvelociti.com redirect map

`redirects.json` is the single source of truth. Regenerate the host-specific files with:

```bash
npm run build-redirects
```

| File | Use it when velociti.club is served by… |
|---|---|
| `cloudflare-bulk-redirects.csv` | **Cloudflare (recommended).** Rules → Redirect Rules → Bulk Redirects → create a list, import the CSV, then enable a Bulk Redirect Rule that uses the list. |
| `_redirects` | A tiny Netlify or Cloudflare Pages site deployed only for velociti.club. |
| `vercel.json` | A tiny redirect-only Vercel project bound to velociti.club. |
| `nginx.conf` | Your own server. |

## Why a separate redirect host?

The main site is a static export on GitHub Pages, and GitHub Pages cannot send 301s. A Pages repo also binds to one custom domain (`CNAME` = `thinkvelociti.com`). So velociti.club needs its own redirect layer. The simplest is to keep velociti.club's DNS on Cloudflare (proxied) with the bulk redirect list.

## What the rules do

- Every `velociti.club/*` and `www.velociti.club/*` path gets a **301** to the same path on `https://thinkvelociti.com`, keeping the query string.
- Old routes that no longer exist map to their new homes, e.g. `/case-studies` → `/customers` and `/blog` → `/insights` (see `paths` in `redirects.json`).
- Old one-page anchors (`/#solutions`, `/#case-studies`, `/#security`, `/#industries`, `/#forward-deployed-engineers`, `/#contact`) cannot be redirected by a server, because browsers never send the `#fragment`. The 301 carries the fragment to `thinkvelociti.com/#…`, and `components/home/LegacyAnchorRedirect.tsx` forwards the visitor to the matching page.
- The old routes also exist as small static pages on thinkvelociti.com (`app/[legacy]/page.tsx`). They redirect with a meta refresh and point their canonical at the new URL, for links that already use the new domain.

## Canonical host

`thinkvelociti.com` (apex) is canonical. GitHub Pages automatically redirects `www.thinkvelociti.com` → `thinkvelociti.com` once both DNS records exist (see the launch checklist). The `nginx.conf` includes the same rule for self-hosting.
