import type { Industry } from "./types";

export const government: Industry = {
  slug: "government",
  name: "Government",
  orgType: "agency",
  tileUseCases: ["Citizen services", "Case processing", "Policy knowledge"],
  meta: {
    title: "AI agents for government",
    description: "Sovereign AI agents for citizen services, case processing and policy knowledge, with an official approving every decision and a full audit trail.",
  },
  hero: {
    title: "Faster services. Full accountability.",
    lead: "Agents that answer citizens in any language, process applications and cases end to end, and give officials cited answers from policy — deployed sovereign, with an official approving every decision.",
  },
  imageAlt: "A government building with columns",
  artChips: ["APPLICATION 55102 · DOCUMENTS VERIFIED", "POLICY ANSWER · 4 SOURCES CITED"],
  stats: [
    { value: "60%", label: "Routine citizen queries resolved automatically" },
    { value: "50%", label: "Faster case processing" },
    { value: "100%", label: "Decisions logged for audit" },
  ],
  useCases: [
    { title: "Citizen services", body: "Multilingual voice, chat and WhatsApp agents that answer questions, check status and book appointments around the clock." },
    { title: "Application & case processing", body: "Documents checked, eligibility assessed and cases prepared for an official to decide." },
    { title: "Policy & regulation copilot", body: "Officials ask in plain language and get answers from laws, policies and circulars, with every source cited." },
    { title: "Procurement & document review", body: "Tenders, contracts and submissions checked against requirements, with gaps flagged for the reviewer." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Sovereign deployment", body: "In-country, private cloud or fully airgapped." },
    { title: "Official in the loop", body: "Agents prepare the work; people make the decisions." },
    { title: "Full audit trail", body: "Every query, document and decision is logged and traceable." },
    { title: "Works with legacy systems", body: "Connects to existing case management, registries and document stores." },
  ],
};
