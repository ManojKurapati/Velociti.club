import type { Industry } from "./types";

export const finance: Industry = {
  slug: "finance",
  name: "Finance",
  orgType: "institution",
  tileUseCases: ["Underwriting", "KYC / AML", "Reconciliation"],
  meta: {
    title: "AI agents for financial services",
    description: "Underwriting, KYC/AML and reconciliation agents that work inside your core systems, with an audit trail on every decision.",
  },
  hero: {
    title: "Faster decisions. Every one on the record.",
    lead: "Agents that assemble underwriting files, screen customers and reconcile ledgers inside your core systems — with an underwriter or analyst approving each decision and a full audit trail behind it.",
  },
  imageAlt: "A stepped glass office tower",
  artChips: ["FILE 2290 · READY FOR REVIEW", "AUDIT LOG · 100% COVERAGE"],
  stats: [
    { value: "+42%", label: "Underwriting throughput" },
    { value: "−31%", label: "Review time" },
    { value: "100%", label: "Audit log coverage" },
  ],
  useCases: [
    { title: "Auto-loan underwriting", body: "Agents pull applicant data, call bureau APIs and draft a recommendation for an underwriter to approve." },
    { title: "KYC / AML screening", body: "Document checks, sanctions screening and adverse-media review, escalated to compliance when something looks wrong." },
    { title: "Reconciliation", body: "Ledgers matched across systems every day, with breaks explained and routed to the right owner." },
    { title: "Regulatory reporting", body: "Report packs assembled from source data with every figure traced back to where it came from." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Audit by default", body: "Every prompt, data pull and decision is logged immutably." },
    { title: "Analyst in the loop", body: "Agents recommend. Your people approve." },
    { title: "Works with your core", body: "Salesforce, bureau APIs, internal SQL and SharePoint." },
    { title: "Sovereign deployment", body: "Single-tenant, your VPC or fully airgapped." },
  ],
  caseSlug: "auto-loan-underwriting",
};
