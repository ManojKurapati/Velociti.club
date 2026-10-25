# thinkvelociti.com launch checklist

Everything still needed before and after launch: placeholders, open questions and manual steps. Every `[placeholder]` renders on the site as a yellow marker, so you can also find them by browsing.

---

## 1. Manual steps

### Hosting and DNS (GitHub Pages, static export)
- [ ] GitHub repo → Settings → Pages → Custom domain: `thinkvelociti.com` (the `CNAME` file already says this). Tick **Enforce HTTPS** once the certificate is issued.
- [ ] DNS for `thinkvelociti.com`: apex `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and `AAAA` `2606:50c0:8000::153` … `8003::153`); `www` `CNAME` → `<github-user>.github.io`. GitHub Pages then redirects `www` → apex.
- [ ] Remove today's **302** from thinkvelociti.com → velociti.club, wherever it lives (registrar forwarding or DNS provider page rule).
- [ ] Verify the domain under GitHub → Settings → Pages → Verified domains, so the domain can't be taken over.
- [ ] Repository → Settings → Secrets and variables → Actions → **Variables**: `NEXT_PUBLIC_MIXPANEL_TOKEN`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_LEAD_ENDPOINT`, `NEXT_PUBLIC_TRUST_FORM_ENDPOINT` (see `.env.example`). The deploy workflow passes them to the build. **Without the Mixpanel token, analytics stays off.** The token is no longer hard-coded, per AGENTS.md.
- [ ] Merge to `main` to deploy (workflow: `.github/workflows/deploy.yml`).

### velociti.club → thinkvelociti.com (301)
- [ ] Put velociti.club behind a redirect host. Recommended: Cloudflare, proxied DNS, importing `redirects/cloudflare-bulk-redirects.csv` as a Bulk Redirect list. See `redirects/README.md` for the alternatives.
- [ ] Test: `curl -I https://velociti.club/case-studies` should return `301` to `https://thinkvelociti.com/customers`; `curl -I https://www.velociti.club/anything?x=1` should return `301` to `https://thinkvelociti.com/anything?x=1`.
- [ ] Keep velociti.club registered and redirecting for at least 12 months (ideally permanently).

### Google Search Console
- [ ] Add and verify the **Domain property** for `thinkvelociti.com` (DNS TXT).
- [ ] Keep the `velociti.club` property verified.
- [ ] Once the 301s are live: on the velociti.club property, Settings → **Change of Address** → thinkvelociti.com.
- [ ] Submit `https://thinkvelociti.com/sitemap.xml`.
- [ ] Update Bing Webmaster Tools the same way (Site Move tool).
- [ ] GA4: add `thinkvelociti.com` to the data stream / referral exclusions; Mixpanel: no change needed (same token).

### Email (thinkvelociti.com)
- [ ] Create the mailboxes or aliases: hello@, press@, security@, careers@.
- [ ] **SPF**: one TXT record on the apex, e.g. `v=spf1 include:<your mail provider> include:<Resend/forms provider> ~all`.
- [ ] **DKIM**: publish your mail provider's DKIM keys, and Resend's if you use it for form notifications.
- [ ] **DMARC**: `_dmarc` TXT `v=DMARC1; p=none; rua=mailto:dmarc@thinkvelociti.com`. Move to `quarantine` and then `reject` after two to four clean weeks.
- [ ] Optional: publish `security.txt` at `/.well-known/security.txt` pointing to security@thinkvelociti.com.
- [ ] Keep velociti.club mail flowing (forwarding) until contacts have moved over.

### Third-party profiles
- [ ] **Calendly**: update the event's location/description links and confirmation emails to thinkvelociti.com. Add `thinkvelociti.com` as an allowed embed domain if your plan restricts embeds. Consider a branded event URL.
- [ ] **LinkedIn** (company/velociti-club): change the website to https://thinkvelociti.com. Consider renaming the vanity URL, then update `content/site.ts`.
- [ ] **Instagram** (velociti.club): update the bio link. If the handle changes, update `content/site.ts`.
- [ ] WhatsApp Business profile website, email signatures, decks, PDF one-pagers, Google Business Profile, Crunchbase and other directories.

### Forms (static site)
- [ ] Choose the lead endpoint `[HubSpot/Zoho]`: a HubSpot/Zoho form webhook, Formspree, or a small serverless function that forwards to **Resend** (email) and the CRM. Set `NEXT_PUBLIC_LEAD_ENDPOINT`. The endpoint must accept a JSON POST with CORS from thinkvelociti.com.
- [ ] Same for `NEXT_PUBLIC_TRUST_FORM_ENDPOINT` (Trust Center document requests and vulnerability reports).
- [ ] Send a test submission of each form, check that the CRM record appears, and check that `lead_submitted` / `meeting_booked` show up in Mixpanel Live View (AGENTS.md step 6).

### Photos and video
- [ ] Download the Unsplash photos listed in `public/images/CREDITS.md` (the build sandbox could not reach unsplash.com), save them under the listed names, and run `npm run grade-images`. Pages switch from line illustrations to graded photos automatically.
- [ ] Book the Velociti photo shoot: founder, team and Engineers photos.
- [ ] Video: the source `Velociti.mp4` is 1280×720 and 10 s, so 720p is the top rendition (no 1080p was produced). Supply a 1080p master and run `SRC=master.mov npm run encode-video` to add one. The film also carries a sparkle watermark in the bottom-right corner (it looks like an AI-video-tool mark). Confirm the licence, or get a clean export.

---

## 2. Open questions

1. **Hosting.** You chose to stay on GitHub Pages. This means there's no `/api/lead` (forms post to an external endpoint) and no host-level redirects on thinkvelociti.com. It's a small change to move to Vercel later: remove `output: "export"` and add an API route.
2. **Analytics.** The brief said "Plausible or GA4 [choose]". AGENTS.md makes **Mixpanel** the source of truth, so Mixpanel carries all events. GA4 (already on the old site) receives the same events. Both load only after cookie consent. Confirm or drop GA4.
3. **Muted display colour.** The brief's `#A3A5AC` measures 2.3:1 on paper, which fails WCAG AA even for large text (3:1). The site uses `#8A8C93` (3.1:1). Change `--muted-display` in `app/globals.css` if you prefer the original.
4. **Hero size on phones.** The brief's minimum of 60px makes "Think Different." overflow a 390px screen, so the hero clamp minimum is 44px.
5. **Hero timing on phones.** On phones the subhead is the largest text block, so it is the LCP element. It shows immediately and only the CTAs and chips are staged. Desktop follows the brief's 3.4 s sequence exactly.
6. **Motion.** The scroll-linked film uses about 40 lines of native code instead of Motion (framer-motion) to keep Home under the 150 KB JS budget. The hero uses CSS keyframes started by a pre-paint script, as the brief's SSR requirement suggests.
7. **Seed copy I drafted.** "What we built" bullets on each case study, use-case descriptions and pillars for the six non-healthcare industries, industry hero lines for those six, solution use-case descriptions, Trust safeguards wording, the illustrative run-log panel contents, the press boilerplate, careers role summaries and the placeholder captions. Please review them for accuracy.
8. **HIPAA on the healthcare case.** The seed table says "HIPAA compliant"; the stat tile reads "HIPAA / Compliant architecture". Confirm this is accurate, or change it to "HIPAA-ready".
9. **Logos.** All six "Trusted by" names are shown as text wordmarks. Confirm each client has approved this.
10. **Old routes.** `/the-club` and `/curious` (the club application) now redirect to `/about` and `/contact`. The club programme has no page on the new site. Confirm that's intended.
11. **Old routes mapping.** `/enterprise` and `/ai-fy` → `/solutions`; `/knowledge` and `/blog` → `/insights`; `/startups` → `/contact`. Edit `redirects/redirects.json` if you want different targets.

---

## 3. Every placeholder, by file

| File | Placeholder(s) |
|---|---|
| `content/site.ts` | `[Dubai office address]` |
| `content/home.ts` | `[Confirm each client has approved logo use]` |
| `content/solutions.ts` | `[metric]` ×3 (Support, Sales, Knowledge proof points) |
| `content/engineers.ts` | `[Confirm the timelines]`, `[Engineers photo — from a real Velociti photo shoot]` |
| `content/industries/healthcare.ts` | `[Confirm written approval to publish name and quote]` (Sarah Jenkins) |
| `content/industries/finance.ts` | `[Client quote]`, `[Name]`, `[Role, Organisation]`, quote-approval note |
| `content/industries/oil-gas.ts` | `[Client quote]`, `[Name]`, `[Role, Organisation]`, quote-approval note |
| `content/industries/automotive.ts` | `[Client quote]`, `[Name]`, `[Role, Organisation]`, quote-approval note |
| `content/industries/pharma.ts` | `[metric]` ×3, `[Client quote]`, `[Name]`, `[Role, Organisation]`, quote-approval note |
| `content/industries/hospitality.ts` | `[metric]` ×3, `[Client quote]`, `[Name]`, `[Role, Organisation]`, quote-approval note |
| `content/industries/education.ts` | `[metric]` ×3, `[Client quote]`, `[Name]`, `[Role, Organisation]`, quote-approval note |
| `content/customers.ts` | `[client-approved copy]` ×16 (challenge and timeline detail), `[weeks]` ×12 (phase ranges), `[Client name or descriptor]` ×3, quote-approval note |
| `content/trust.ts` | `[status]` ×6 (SOC 2, HIPAA, GDPR, UAE PDPL, ISO 27001, Pen test), `[trust.thinkvelociti.com]` |
| `content/about.ts` | `[#]` production deployments, `[Founder photo — …]`, `[Photo — …]`, `[More team]` |
| `content/careers.ts` | `[Benefit]` ×6 with `[Placeholder — …]` descriptions, `[Confirm role locations]` |
| `content/press.ts` | `[Coverage headline]`, `[Outlet]`, `[Feature]`/`[Interview]`, `[Date]`, `[Release title]`, `[Release summary]`, `[Founder photos …]`; coverage and release links are `#` |
| `content/legal.ts` | `[Date]` ×3, `[Registered address]`, `[Legal bases under GDPR and UAE PDPL]`, `[List processors — …]`, `[Retention periods]`, `[Counsel-approved terms]` ×3, `[Governing law and jurisdiction]`, `[Counsel review for GDPR and UAE PDPL]` |
| `app/legal/[page]/page.tsx` | `[Placeholder text — replace with counsel-approved copy before launch]` banner |
| `content/insights/*.mdx` | All three posts are `draft: true` stubs with `[Draft stub …]` and `[Expand …]` markers |
| `components/site/ContactForm.tsx` | `[Set NEXT_PUBLIC_LEAD_ENDPOINT]` (shown only until the env var is set) |
| `components/site/SimpleForm.tsx` | `[Set NEXT_PUBLIC_TRUST_FORM_ENDPOINT]` (shown only until the env var is set) |
| `public/images/CREDITS.md` | `[photographer name + profile URL]` ×17, server-rack photo to choose |
| `public/video/velociti.en.vtt` | Placeholder captions describing the visuals (`[Music]`) |
| `public/press/velociti-media-kit.zip` | Founder photos folder is a README placeholder |

---

## 4. Verification results (at handover)

- `npm run build`: passes (70 static routes). `npm run lint` and `tsc --noEmit`: clean.
- Lighthouse, mobile (default throttled "slow 4G" profile), Perf / A11y / Best practices / SEO:
  - Home: 93–97 / 100 / 100 / 100. LCP 2.6–3.1 s simulated (element: hero subhead). CLS 0. TBT ~50 ms.
  - Customers: 95–98 / 100 / 100 / 100.
  - Contact: 96–99 / 100 / 100 / 100.
- Lighthouse, desktop: Home 99 (LCP 1.0 s, element "Think Different."), Customers 100, Contact 100.
- Home JS: about 144 KB gzipped for modern browsers (the 39 KB `noModule` polyfill chunk only loads in legacy browsers). Mixpanel and GA4 are not downloaded until consent.
- axe-core (WCAG 2.2 AA + best practices) on 16 routes at 1440 and 390: no violations (after fixing CTA-band contrast, announcement landmark, a duplicate nav label and heading order).
- Nav click-through at 1440 (5 primary links, 4 Company links, CTA) and at 390 (full-screen menu, 10 links, all tap targets ≥ 48px): all pass. 30 internal links return 200. No horizontal scroll on any route at 390.
- Contact flow: validation, free-webmail warning, honeypot, and JSON POST work; step 2 Calendly iframe is prefilled with name and email.
- Reduced motion: hero renders its final state with no animation; the film doesn't scale or autoplay.
