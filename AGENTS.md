# Analytics Tracking — Mixpanel

This project uses **Mixpanel** for all product analytics. Mixpanel is the single source of truth for event tracking, user identification, and behavioral data. Do not introduce any other analytics tools, SDKs, or tracking libraries without explicit instruction from a user.

---

## Before You Add or Modify Any Tracking

⛔ **Do not write Mixpanel tracking code without reading this file first.**

Wrong assumptions about platform, identity, or consent will produce broken Mixpanel data that requires manual cleanup or data deletion requests.

### Mandatory checklist before writing any Mixpanel code

- [x] Confirm you are using the correct Mixpanel SDK for this project's platform (see Tech Stack below)
- [x] Check if this project routes data through a CDP — if yes, send Mixpanel events through the CDP, not the Mixpanel SDK directly (No CDP is currently used)
- [x] Check if consent gating is required — if this project serves EU or California users, no Mixpanel events may fire before user consent
- [x] Review the existing Mixpanel tracking plan below before adding new events

---

## Tech Stack

| Detail | Value |
|---|---|
| **Platform** | Next.js (React) web application |
| **Mixpanel SDK** | client-side: `mixpanel-browser`, server-side: `mixpanel` |
| **SDK version** | `mixpanel-browser` latest, `mixpanel` (node) latest |
| **Tracking method** | both client-side and server-side |
| **CDP (if any)** | none |
| **Consent required** | yes (gates client-side tracking using `opt_out_tracking_by_default: true`) |
| **Mixpanel project token location** | `.env.local` / `.env.example` → `NEXT_PUBLIC_MIXPANEL_TOKEN` |

---

## Mixpanel Initialization

Mixpanel is initialized in:

**Client-Side File:** [`components/CookieBanner.tsx`](file:///Users/klm/Velociti.club/components/CookieBanner.tsx) — downloads `mixpanel-browser` only after the visitor accepts cookies (dynamic import; returning visitors who accepted get it at idle), initialises it with the config below, and registers the instance with [`lib/analytics.ts`](file:///Users/klm/Velociti.club/lib/analytics.ts). Feature code calls `track()` / `identify()` from `lib/analytics.ts`; calls made before Mixpanel loads are queued.
**Server-Side File:** [`lib/mixpanel-server.ts`](file:///Users/klm/Velociti.club/lib/mixpanel-server.ts)

```typescript
// Client-side initialization under CookieBanner:
mixpanel.init(MIXPANEL_TOKEN, {
  debug,
  opt_out_tracking_by_default: true,
  persistence: "localStorage",
});

// Server-side initialization under mixpanel-server:
export const mixpanelServer = Mixpanel.init(MIXPANEL_TOKEN);
```

**Do not:**
- Initialize Mixpanel in multiple places
- Create separate Mixpanel instances per component or module
- Import Mixpanel directly in feature files without respect to client/server environment context.

---

## Mixpanel Identity

Mixpanel identity is managed through:

| Action | When to call | Code location |
|---|---|---|
| `mixpanel.identify(email)` (via `identify()` in `lib/analytics.ts`) | After the workflow-audit lead form is accepted by the lead endpoint | [`components/site/ContactForm.tsx`](file:///Users/klm/Velociti.club/components/site/ContactForm.tsx) |
| `mixpanel.people.set(properties)` (via `identify()`) | Setting profile details (name, job title, company) | [`components/site/ContactForm.tsx`](file:///Users/klm/Velociti.club/components/site/ContactForm.tsx) |

**Rules:**
- Call `mixpanel.identify()` with a stable identifier. Since there is no database login session on this static-export web frontend, we use the user's validated work email from the /contact audit form.
- Call `mixpanel.identify()` **after** the application fetch succeeds (after post logic, not on button click).

---

## Mixpanel Tracking Plan

These are the Mixpanel events currently tracked in this project. **All new Mixpanel events must follow the same conventions.**

### Naming conventions

- Mixpanel event names: `snake_case`, past tense verb + noun (e.g., `calendly_link_clicked`, `club_application_submitted`)
- Mixpanel property names: `snake_case` (e.g., `org_type`, `platform`)
- No abbreviations in Mixpanel event or property names — use full words
- Boolean Mixpanel properties: use `is_` prefix (e.g., `is_first_time`)

### Current Mixpanel events

| Mixpanel Event | Trigger | Key Properties | File |
|---|---|---|---|
| `consent_granted` | User clicks Accept on cookie banner | `consent_type`, `platform` | [`components/CookieBanner.tsx`](file:///Users/klm/Velociti.club/components/CookieBanner.tsx) |
| `calendly_link_clicked` | User clicks any Calendly booking link | `url`, `text`, `location` | [`components/CookieBanner.tsx`](file:///Users/klm/Velociti.club/components/CookieBanner.tsx) |
| `cta_clicked` | User clicks any link carrying `data-track` (buttons, nav CTA, CTA bands) | `cta_text`, `destination`, `location` | [`components/CookieBanner.tsx`](file:///Users/klm/Velociti.club/components/CookieBanner.tsx) (delegated listener) |
| `video_played` | User opens the Home film lightbox with sound | `video_name`, `location`, `is_lightbox` | [`components/home/ScrollVideo.tsx`](file:///Users/klm/Velociti.club/components/home/ScrollVideo.tsx) |
| `lead_submitted` | Workflow-audit form accepted by the lead endpoint (after `identify`) | `industry`, `company_size`, `country`, `automation_interests`, `is_free_email` | [`components/site/ContactForm.tsx`](file:///Users/klm/Velociti.club/components/site/ContactForm.tsx) |
| `meeting_booked` | Calendly embed posts `calendly.event_scheduled` | `meeting_type`, `location` | [`components/site/CalendlyEmbed.tsx`](file:///Users/klm/Velociti.club/components/site/CalendlyEmbed.tsx) |
| `chat_opened` | Visitor opens the site chat ("Ask Velociti") | `location` | [`components/site/ChatLauncher.tsx`](file:///Users/klm/Velociti.club/components/site/ChatLauncher.tsx) |
| `chat_question_answered` | The chat responds to a question (the question text is never sent) | `is_answered`, `matched_topic` | [`components/site/ChatPanel.tsx`](file:///Users/klm/Velociti.club/components/site/ChatPanel.tsx) |
| `form_submitted` | Trust Center document request, vulnerability report or careers open application accepted | `form_type`, `location` | [`components/site/SimpleForm.tsx`](file:///Users/klm/Velociti.club/components/site/SimpleForm.tsx) |

`club_application_submitted` was retired with the old `/curious` page (the club application form no longer exists).

Google Analytics 4 is loaded only after cookie consent and receives the same events via `gtag` from `lib/analytics.ts`.

---

## How to Add a New Mixpanel Event

1. **Check the tracking plan above** — if the Mixpanel event already exists, use it. Do not create duplicate Mixpanel events.
2. **Name the Mixpanel event** using the conventions above: `snake_case`, past tense, descriptive.
3. **Define Mixpanel properties** — only include properties available at the moment the event fires. Do not fetch additional data just for Mixpanel tracking.
4. **Place the Mixpanel tracking call** at the right moment:
   - Track Mixpanel events **after** the action succeeds (after API response), not on button click or form submit.
   - Track Mixpanel events **after** `mixpanel.identify()` if the event is tied to a logged-in/form action.
5. **Update this file** — add the new Mixpanel event to the tracking plan table above.
6. **Verify in Mixpanel Live View** — confirm the event appears in Mixpanel with correct properties before considering it done.

### Mixpanel event template

```typescript
import mixpanel from "mixpanel-browser";

// Track [description of what happened] in Mixpanel
mixpanel.track('[event_name]', {
  property_name: value,
  property_name: value,
});
```

---

## What Not to Do

- **Do not introduce other analytics tools.** This project uses Mixpanel (and Google Analytics). All new tracking goes through Mixpanel.
- **Do not track PII as Mixpanel event properties** — no emails, full names, phone numbers, IP addresses, or payment details in Mixpanel event properties.
- **Instead:** Use `mixpanel.people.set()` to assign profile attributes (name, email) which can be updated or deleted on request.
- **Do not fire Mixpanel events inside loops** — each Mixpanel event call is a network request.
- **Do not hardcode the Mixpanel project token** — read it from environment config.
- **Do not call `mixpanel.identify()` before user action is complete.**
