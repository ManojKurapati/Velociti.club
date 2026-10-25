import type { Industry } from "./types";

export const hospitality: Industry = {
  slug: "hospitality",
  name: "Hospitality",
  orgType: "property group",
  tileUseCases: ["Guest support", "Revenue reporting", "Booking operations"],
  meta: {
    title: "AI agents for hospitality",
    description: "Multilingual guest support, revenue reporting and booking operations agents connected to your PMS and channel manager.",
  },
  hero: {
    title: "Every guest answered. In their language.",
    lead: "Voice, chat and WhatsApp agents that answer guests in any language and act in your PMS — plus agents that build revenue reports and keep bookings moving overnight.",
  },
  imageAlt: "A luxury hotel lobby with a glass ceiling",
  artChips: ["GUEST 7712 · LATE CHECKOUT CONFIRMED", "RevPAR REPORT · READY 06:00"],
  stats: [
    { value: "65%", label: "Guest queries resolved without a handoff" },
    { value: "30+", label: "Languages supported" },
    { value: "20+", label: "Hours of reporting removed per week" },
  ],
  useCases: [
    { title: "Multilingual guest support", body: "Voice, chat and WhatsApp agents that answer, upsell and act in your PMS, day and night." },
    { title: "Revenue reporting", body: "Daily pickup, pace and RevPAR reports assembled before the morning meeting." },
    { title: "Booking operations", body: "Modifications, group blocks and channel discrepancies handled and logged automatically." },
    { title: "Staff knowledge", body: "Standards, SOPs and property details answered instantly for every team." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "On-brand by design", body: "Agents follow your tone, policies and escalation rules." },
    { title: "Staff in the loop", body: "Refunds, comps and exceptions go to a person." },
    { title: "Works with your PMS", body: "Connects to your PMS, CRS, channel manager and CRM." },
    { title: "Guest data protected", body: "PII redaction and access controls throughout." },
  ],
};
