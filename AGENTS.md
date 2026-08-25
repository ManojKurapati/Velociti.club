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

**Client-Side File:** [`components/CookieBanner.tsx`](file:///Users/klm/Velociti.club/components/CookieBanner.tsx)
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
| `mixpanel.identify(email)` | On club application submission | [`components/ClubApplicationForm.tsx`](file:///Users/klm/Velociti.club/components/ClubApplicationForm.tsx) |
| `mixpanel.people.set(properties)` | Setting profile details (name, organization, etc.) | [`components/ClubApplicationForm.tsx`](file:///Users/klm/Velociti.club/components/ClubApplicationForm.tsx) |

**Rules:**
- Call `mixpanel.identify()` with a stable identifier. Since there is no database login session on this static-export web frontend, we use the user's validated `workEmail` upon form submission.
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
| `club_application_submitted` | User submits the Velociti application | `org_type`, `platform` | [`components/ClubApplicationForm.tsx`](file:///Users/klm/Velociti.club/components/ClubApplicationForm.tsx) |

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
