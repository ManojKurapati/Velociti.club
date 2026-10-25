import type { Industry } from "./types";

export const pharma: Industry = {
  slug: "pharma",
  name: "Pharma",
  orgType: "organisation",
  tileUseCases: ["Regulatory review", "Batch-record QA", "Pharmacovigilance"],
  meta: {
    title: "AI agents for pharma and life sciences",
    description: "Agents for regulatory document review, batch-record QA and pharmacovigilance intake, with a qualified person approving every decision.",
  },
  hero: {
    title: "Review faster. Release with confidence.",
    lead: "Agents that review regulatory documents, check batch records and triage safety reports — with a qualified person approving every decision and a validated audit trail behind it.",
  },
  imageAlt: "Glass laboratory tubes in monochrome",
  artChips: ["BATCH 0193 · 2 DEVIATIONS FLAGGED", "CASE INTAKE · TRIAGED"],
  stats: [
    { value: "[metric]", label: "Faster regulatory review" },
    { value: "[metric]", label: "Batch records checked automatically" },
    { value: "[metric]", label: "Kickoff to production" },
  ],
  useCases: [
    { title: "Regulatory document review", body: "Submissions checked against guidance and templates, with gaps and inconsistencies flagged for the author." },
    { title: "Batch-record QA", body: "Every batch record read line by line, deviations highlighted for QA before release." },
    { title: "Pharmacovigilance intake", body: "Adverse-event reports extracted from email, calls and forms, coded and triaged for the safety team." },
    { title: "Scientific knowledge copilot", body: "Permission-aware search across SOPs, study reports and literature, with citations." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Validation-ready", body: "Documented, testable systems built with GxP expectations in mind." },
    { title: "Qualified person in the loop", body: "Agents prepare; QA and safety teams decide." },
    { title: "Works with your QMS", body: "Connects to document management, LIMS and safety databases." },
    { title: "Private or airgapped", body: "Sensitive data never leaves your environment." },
  ],
};
