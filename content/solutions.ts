/** /solutions copy. Each solution renders as an anchored section. */

export type RunLogLine = { t: string; level: "info" | "act" | "wait" | "ok"; text: string };

export type Solution = {
  id: "operations" | "support" | "sales" | "knowledge";
  name: string;
  headline: string;
  lead: string;
  useCases: { title: string; body: string }[];
  proof: { value: string; label: string };
  panel: { title: string; agent: string; lines: RunLogLine[] };
};

export const solutionsPage = {
  meta: {
    title: "Solutions",
    description: "Four production-grade agent systems — operations, support, sales and knowledge — engineered on the ERPs, CRMs, databases and documents you already run.",
  },
  hero: {
    eyebrow: "Solutions",
    title: "Deploy agents where the work happens.",
    lead: "Four production-grade agent systems, engineered on top of the ERPs, CRMs, databases and documents you already run. Every one ships with approvals, audit logs and evals.",
  },
  illustrativeLabel: "Illustrative",
  foundations: {
    eyebrow: "Foundations",
    title: "Every agent ships with the same foundations",
    items: [
      { title: "Every channel", body: "Voice, chat, email, WhatsApp and the tools your teams already work in." },
      { title: "Handles real complexity", body: "Multi-step work across systems, with branching, retries and exceptions." },
      { title: "Fully integrated", body: "Reads from and writes to your ERP, CRM, databases and documents." },
      { title: "Tested before it ships", body: "Evals on real cases before release, and monitoring after." },
    ],
  },
  cta: {
    title: "Not sure which to start with? Book a free workflow audit",
    button: { label: "Book a free workflow audit", href: "/contact" },
  },
};

export const solutions: Solution[] = [
  {
    id: "operations",
    name: "Operations Automation",
    headline: "Close the books without the spreadsheet marathon.",
    lead: "Agents reconcile ledgers, build reports and move work across your ERP — and stop for a human whenever a number matters.",
    useCases: [
      { title: "Ledger & reconciliation", body: "Transactions matched across systems daily, with every break explained and routed to its owner." },
      { title: "Reporting on autopilot", body: "Management packs and KPI reports assembled from source data before anyone asks." },
      { title: "Process orchestration", body: "Approvals, hand-offs and follow-ups moved through your ERP without the email chain." },
    ],
    proof: { value: "Up to 95%", label: "less manual ledger & reporting work" },
    panel: {
      title: "month-end-close.run",
      agent: "ops-agent · ERP",
      lines: [
        { t: "06:00:02", level: "info", text: "Pulled 18,402 ledger lines from ERP (3 entities)" },
        { t: "06:00:41", level: "act", text: "Matched 18,377 lines against bank feeds" },
        { t: "06:00:44", level: "info", text: "25 breaks found · 22 explained automatically" },
        { t: "06:00:45", level: "wait", text: "3 breaks over threshold → approval requested (Finance Controller)" },
        { t: "06:12:10", level: "ok", text: "Approved · journals posted · audit log #A-20931" },
        { t: "06:12:30", level: "ok", text: "Management pack generated and sent" },
      ],
    },
  },
  {
    id: "support",
    name: "Customer Support",
    headline: "Resolve L1 and L2 in every language your customers speak.",
    lead: "Voice and text agents that read your systems, take action, and follow up after the ticket closes.",
    useCases: [
      { title: "Voice, chat, email, WhatsApp", body: "One agent across every channel, answering in the customer's language." },
      { title: "Acts, not just answers", body: "Refunds, bookings, changes and lookups done in your systems, within policy." },
      { title: "Proactive follow-up", body: "Checks back after resolution and flags at-risk customers to your team." },
    ],
    proof: { value: "[metric]", label: "of L1 and L2 tickets resolved without a handoff" },
    panel: {
      title: "ticket-88213.run",
      agent: "support-agent · WhatsApp",
      lines: [
        { t: "21:14:03", level: "info", text: "Inbound WhatsApp · language detected: Arabic" },
        { t: "21:14:05", level: "act", text: "Looked up order #55120 in CRM · status: delayed" },
        { t: "21:14:07", level: "act", text: "Offered reschedule · customer accepted new slot" },
        { t: "21:14:09", level: "wait", text: "Goodwill credit above policy limit → approval requested" },
        { t: "21:16:40", level: "ok", text: "Approved by on-call lead · credit applied" },
        { t: "21:16:41", level: "ok", text: "Ticket closed · follow-up scheduled in 48h" },
      ],
    },
  },
  {
    id: "sales",
    name: "Sales Automation",
    headline: "Autonomous SDRs that fill the calendar, not the inbox.",
    lead: "Research, personalise, qualify and book — with your reps stepping in only for the conversations that close.",
    useCases: [
      { title: "Outbound research & outreach", body: "Accounts researched, contacts found and messages written for each buyer." },
      { title: "Inbound qualification", body: "Every inbound lead answered in minutes, qualified and booked with the right rep." },
      { title: "CRM hygiene", body: "Activities logged, fields filled and duplicates merged without rep admin." },
    ],
    proof: { value: "[metric]", label: "more qualified meetings per rep" },
    panel: {
      title: "inbound-lead.run",
      agent: "sdr-agent · CRM",
      lines: [
        { t: "10:02:11", level: "info", text: "New inbound form · company size 1,000–10,000" },
        { t: "10:02:14", level: "act", text: "Enriched account · matched ICP tier A" },
        { t: "10:02:20", level: "act", text: "Replied with tailored follow-up · 2 questions" },
        { t: "10:09:52", level: "info", text: "Lead answered · budget and timeline confirmed" },
        { t: "10:09:55", level: "ok", text: "Meeting booked with account executive · Thu 14:00" },
        { t: "10:09:56", level: "ok", text: "CRM updated · opportunity created" },
      ],
    },
  },
  {
    id: "knowledge",
    name: "Enterprise Knowledge",
    headline: "One governed answer engine for everything you know.",
    lead: "A permission-aware RAG layer across Slack, Notion, Jira, SharePoint and PDFs — with citations on every answer.",
    useCases: [
      { title: "Internal search & copilots", body: "Plain-language answers across every tool, cited back to the source." },
      { title: "Compliance checks", body: "Drafts and decisions checked against your policies before they go out." },
      { title: "Respects permissions", body: "People only see answers from documents they are allowed to open." },
    ],
    proof: { value: "[metric]", label: "less time spent searching for information" },
    panel: {
      title: "ask-velociti.run",
      agent: "knowledge-agent · RAG",
      lines: [
        { t: "15:40:01", level: "info", text: "Query: “What is our data retention policy for EU clients?”" },
        { t: "15:40:01", level: "act", text: "Checked permissions · 4 sources visible to this user" },
        { t: "15:40:02", level: "act", text: "Retrieved SharePoint policy v3.2, Notion DPA page, Jira LEGAL-118" },
        { t: "15:40:03", level: "ok", text: "Answer drafted with 3 citations" },
        { t: "15:40:03", level: "info", text: "Eval: grounded · no unsupported claims" },
      ],
    },
  },
];
