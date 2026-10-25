/**
 * Customer case studies. Add a new object to `caseStudies` to publish a new
 * case at /customers/<slug>. Anything unconfirmed stays in [brackets] and
 * renders as a visible placeholder.
 */

export type CaseStat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  /** Matches an industry slug in /content/industries for filters and links. */
  industrySlug: string;
  weeks: number;
  client: string;
  systems: string[];
  solution: string;
  headline: CaseStat;
  stats: CaseStat[];
  summary: string;
  challenge: string[];
  built: string[];
  timeline: { phase: string; weeks: string; detail: string }[];
  quote?: { text: string; name: string; role: string; approval?: string };
};

export const customersPage = {
  meta: {
    title: "Customers",
    description: "AI in production, not in pilot. Case studies from healthcare, finance, oil & gas and automotive teams running Velociti agents.",
  },
  eyebrow: "Customers",
  title: "AI in production. Not in pilot.",
  lead: "Results from agents running every day inside regulated operations — measured against the numbers our clients already report on.",
  filters: [
    { label: "All", value: "all" },
    { label: "Healthcare", value: "healthcare" },
    { label: "Finance", value: "finance" },
    { label: "Oil & Gas", value: "oil-gas" },
    { label: "Automotive", value: "automotive" },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinical-claim-pre-verification",
    title: "How a regional healthcare network reached 99.2% accuracy on claim pre-verification",
    industry: "Healthcare",
    industrySlug: "healthcare",
    weeks: 14,
    client: "Regional Healthcare Network",
    systems: ["Epic", "SharePoint", "AWS S3", "Private cloud"],
    solution: "Operations Automation",
    headline: { value: "99.2%", label: "Claim pre-verification accuracy" },
    stats: [
      { value: "99.2%", label: "Pre-verification accuracy" },
      { value: "35%", label: "Faster claim processing" },
      { value: "HIPAA", label: "Compliant architecture" },
    ],
    summary: "Clinical claim reasoning agents that pre-verify claims inside Epic, with a clinician approving every exception.",
    challenge: [
      "[client-approved copy] — the claims backlog, manual verification steps and denial rate before Velociti.",
    ],
    built: [
      "Claim reasoning agents that read the encounter, payer rules and supporting documents, then pre-verify each claim before submission.",
      "A clinician approval queue for every exception, with the agent's reasoning and source citations attached.",
      "A HIPAA-ready deployment on private cloud with immutable audit logs across Epic, SharePoint and S3.",
    ],
    timeline: [
      { phase: "Make you AI-ready", weeks: "Weeks 1–3", detail: "[client-approved copy]" },
      { phase: "Engineer your data", weeks: "Weeks 4–10", detail: "[client-approved copy]" },
      { phase: "Move you to AI-native", weeks: "Weeks 11–14", detail: "[client-approved copy]" },
    ],
    quote: {
      text: "Velociti deployed secure clinical claim reasoning agents that reduced manual verification overhead by 35%.",
      name: "Sarah Jenkins",
      role: "Director of Clinical Operations, Regional Healthcare Network",
      approval: "[Confirm written approval to publish name and quote]",
    },
  },
  {
    slug: "auto-loan-underwriting",
    title: "42% more auto-loans underwritten with full audit coverage",
    industry: "Finance",
    industrySlug: "finance",
    weeks: 8,
    client: "[Client name or descriptor]",
    systems: ["Salesforce", "Equifax API", "Internal SQL", "SharePoint"],
    solution: "Operations Automation",
    headline: { value: "+42%", label: "Underwriting throughput" },
    stats: [
      { value: "+42%", label: "Underwriting throughput" },
      { value: "−31%", label: "Review time" },
      { value: "100%", label: "Audit log coverage" },
    ],
    summary: "Underwriting agents that assemble the file, check bureau data and draft a decision for an underwriter to approve.",
    challenge: ["[client-approved copy]"],
    built: [
      "Agents that pull applicant data from Salesforce, call the Equifax API and assemble a complete underwriting file.",
      "Policy checks against internal SQL data, with a drafted recommendation routed to an underwriter for approval.",
      "An immutable audit trail on every decision, covering 100% of files.",
    ],
    timeline: [
      { phase: "Make you AI-ready", weeks: "Weeks 1–2", detail: "[client-approved copy]" },
      { phase: "Engineer your data", weeks: "Weeks 3–6", detail: "[client-approved copy]" },
      { phase: "Move you to AI-native", weeks: "Weeks 7–8", detail: "[client-approved copy]" },
    ],
  },
  {
    slug: "predictive-valve-telemetry",
    title: "18% less downtime from predictive well & valve telemetry",
    industry: "Oil & Gas",
    industrySlug: "oil-gas",
    weeks: 12,
    client: "[Client name or descriptor]",
    systems: ["SAP PM", "Honeywell Forge", "Azure Blob", "TimescaleDB"],
    solution: "Operations Automation",
    headline: { value: "−18%", label: "Unplanned downtime" },
    stats: [
      { value: "−18%", label: "Unplanned downtime" },
      { value: "−15%", label: "Maintenance OPEX" },
      { value: "94%", label: "Alert accuracy" },
    ],
    summary: "Telemetry agents that flag failing valves early and raise maintenance work orders in SAP PM.",
    challenge: ["[client-approved copy]"],
    built: [
      "Pipelines that unify Honeywell Forge telemetry in TimescaleDB with history from Azure Blob.",
      "Anomaly agents that score valve and well health, with 94% alert accuracy.",
      "Automatic draft work orders in SAP PM, approved by a maintenance planner.",
    ],
    timeline: [
      { phase: "Make you AI-ready", weeks: "Weeks 1–3", detail: "[client-approved copy]" },
      { phase: "Engineer your data", weeks: "Weeks 4–9", detail: "[client-approved copy]" },
      { phase: "Move you to AI-native", weeks: "Weeks 10–12", detail: "[client-approved copy]" },
    ],
  },
  {
    slug: "assembly-line-anomaly-detection",
    title: "24% faster QA with real-time defect vision",
    industry: "Automotive",
    industrySlug: "automotive",
    weeks: 10,
    client: "[Client name or descriptor]",
    systems: ["Siemens PLC", "Kafka", "AWS IoT Core", "PostgreSQL"],
    solution: "Operations Automation",
    headline: { value: "−24%", label: "QA cycle time" },
    stats: [
      { value: "−24%", label: "QA cycle time" },
      { value: "−12%", label: "Defects" },
      { value: "Real-time", label: "Detection latency" },
    ],
    summary: "Computer-vision agents on the assembly line that catch defects in real time and feed results back to the PLC.",
    challenge: ["[client-approved copy]"],
    built: [
      "Vision models at the line, streaming results through Kafka and AWS IoT Core.",
      "Real-time defect flags returned to Siemens PLCs, with every inspection stored in PostgreSQL.",
      "A QA review queue for borderline cases, so inspectors handle exceptions only.",
    ],
    timeline: [
      { phase: "Make you AI-ready", weeks: "Weeks 1–3", detail: "[client-approved copy]" },
      { phase: "Engineer your data", weeks: "Weeks 4–7", detail: "[client-approved copy]" },
      { phase: "Move you to AI-native", weeks: "Weeks 8–10", detail: "[client-approved copy]" },
    ],
  },
];

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
