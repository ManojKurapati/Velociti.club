import type { Industry } from "./types";

export const healthcare: Industry = {
  slug: "healthcare",
  name: "Healthcare",
  orgType: "health system",
  tileUseCases: ["Claims", "Clinical scribing", "Patient access"],
  meta: {
    title: "AI agents for healthcare",
    description: "HIPAA-ready AI agents that pre-verify claims, draft clinical notes and answer patients — inside your EHR, with a clinician approving every decision that matters.",
  },
  hero: {
    title: "Less paperwork. More patient time.",
    lead: "HIPAA-ready AI agents that pre-verify claims, draft clinical notes and answer patients — inside your EHR, with a clinician approving every decision that matters.",
  },
  imageAlt: "Surgeons working under an operating light",
  artChips: ["CLAIM 4821 · PRE-VERIFIED", "NOTE DRAFTED · AWAITING SIGN-OFF"],
  stats: [
    { value: "99.2%", label: "Claim pre-verification accuracy" },
    { value: "35%", label: "Faster claim processing" },
    { value: "14 wks", label: "Kickoff to production" },
  ],
  useCases: [
    { title: "Claim pre-verification", body: "Agents check every claim against payer rules and the clinical record before it is submitted, and route exceptions to a person." },
    { title: "Clinical voice scribing", body: "Ambient notes drafted from the consultation, structured for your EHR and signed off by the clinician." },
    { title: "Prior authorisation", body: "Requests assembled from the chart, submitted to the payer and tracked until a decision comes back." },
    { title: "Patient access", body: "Multilingual voice and WhatsApp agents that book, reschedule and answer questions around the clock." },
  ],
  quote: {
    text: "Velociti deployed secure clinical claim reasoning agents that reduced manual verification overhead by 35%.",
    name: "Sarah Jenkins",
    role: "Director of Clinical Operations, Regional Healthcare Network",
    approval: "[Confirm written approval to publish name and quote]",
  },
  pillars: [
    { title: "HIPAA-ready architecture", body: "PHI stays encrypted, access-controlled and logged end to end." },
    { title: "Clinician in the loop", body: "Agents prepare the work; a clinician approves every decision that matters." },
    { title: "Works with your EHR", body: "Built on Epic, SharePoint, S3 and the systems your teams already use." },
    { title: "Private or airgapped", body: "Deploy in your private cloud or fully offline inside your perimeter." },
  ],
  caseSlug: "clinical-claim-pre-verification",
};
