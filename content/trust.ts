/**
 * Trust Center copy. Compliance statuses default to "[status]".
 * Never claim a certification here: use "Aligned with", "Ready architecture"
 * or "In progress" until the certificate or report is confirmed.
 */

export type ComplianceItem = { name: string; status: string; detail: string };

export const trustPage = {
  meta: {
    title: "Trust Center",
    description: "How Velociti builds, deploys and governs every AI agent: principles, safeguards, compliance status, security documents and vulnerability reporting.",
  },
  hero: {
    eyebrow: "Trust Center",
    title: "Trust is the product.",
    lead: "AI-native enterprises run on systems people can audit, explain and switch off. Here is exactly how we build, deploy and govern every Velociti agent.",
  },
  principles: {
    eyebrow: "Principles",
    title: "Five commitments behind every deployment.",
    items: [
      { title: "Capability without new risk", body: "Agents get the access a task needs and nothing more, inside the controls you already run." },
      { title: "Humans approve what matters", body: "Money, health, legal and customer-facing decisions stop for a person before they happen." },
      { title: "Every action is logged and traceable", body: "Each prompt, retrieval, tool call and approval is recorded and can be replayed." },
      { title: "Your data never trains public models", body: "Your data stays yours. It is never used to train third-party or public models." },
      { title: "Engineers on-site to fix fast", body: "The people who built the system are close enough to fix it the same day." },
    ],
  },
  safeguards: {
    eyebrow: "Safeguards",
    title: "Controls built into every agent.",
    cells: [
      { title: "Encryption", body: "AES-256 at rest, TLS 1.3 in transit." },
      { title: "Prompt-injection defence", body: "Untrusted content is isolated from instructions, and tool use is constrained by policy." },
      { title: "PII redaction", body: "Personal data is detected and masked before it reaches a model or a log." },
      { title: "Approval gates", body: "Configurable thresholds route sensitive actions to the right approver." },
      { title: "Hallucination mitigation", body: "Grounded retrieval, citations and evals on real cases before anything ships." },
      { title: "Immutable audit trail", body: "Append-only logs of every agent decision, exportable to your SIEM." },
    ],
  },
  compliance: {
    eyebrow: "Compliance",
    title: "Where we stand, stated plainly.",
    note: "Statuses are reviewed with each release. We do not claim a certification until the report or certificate exists.",
    items: [
      { name: "SOC 2", status: "[status]", detail: "Security, availability and confidentiality controls." },
      { name: "HIPAA", status: "[status]", detail: "Safeguards for protected health information." },
      { name: "GDPR", status: "[status]", detail: "EU personal data processing and data-subject rights." },
      { name: "UAE PDPL", status: "[status]", detail: "UAE Federal Decree-Law No. 45 of 2021 on personal data." },
      { name: "ISO 27001", status: "[status]", detail: "Information security management system." },
      { name: "Pen test", status: "[status]", detail: "Independent penetration testing of the platform." },
    ] as ComplianceItem[],
  },
  documents: {
    eyebrow: "Security documents",
    title: "Request security documents",
    body: "Architecture overviews, data-flow diagrams, policies and questionnaires, shared under NDA.",
    portal: { label: "Visit the trust portal", href: "[trust.thinkvelociti.com]" },
    types: ["Security overview", "Data-flow diagram", "Policies", "Completed questionnaire", "Pen test summary"],
  },
  report: {
    eyebrow: "Responsible disclosure",
    title: "Submit a report",
    body: "Found a vulnerability or a safety issue with one of our agents? Tell us. We acknowledge every report and keep you updated until it is resolved.",
  },
  image: { name: "servers", alt: "Server racks inside a closed perimeter" },
};
