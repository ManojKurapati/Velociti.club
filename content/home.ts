/** Home page copy. Section order matches the page. */

export const home = {
  meta: {
    title: "Velociti — AI-native enterprise engineering",
    description:
      "Our forward-deployed engineers map how your business really runs, prototype AI agents in weeks, and harden them into production systems across finance, sales, marketing and operations.",
  },
  hero: {
    eyebrow: "AI-native enterprise engineering",
    lines: ["Think Big.", "Think Different.", "Think Velociti."],
    subhead:
      "Our forward-deployed engineers map how your business really runs, prototype AI agents in weeks, and harden them into production systems across finance, sales, marketing and operations.",
    primary: { label: "Book an AI workflow audit", href: "/contact" },
    secondary: { label: "Explore solutions", href: "/solutions" },
    chips: ["Compliance-ready architecture", "Human-in-the-loop approvals", "Airgapped deployments"],
  },
  video: {
    eyebrow: "See Velociti at work",
    title: "See Velociti at work",
    playLabel: "Play the Velociti film with sound",
  },
  trustedBy: {
    line: "Trusted by teams in healthcare, energy, biomed and technology",
    // Only list logos the client has approved. `approved: false` hides the logo.
    logos: [
      { name: "Alera Health", approved: true },
      { name: "OQpin", approved: true },
      { name: "L&M Energy", approved: true },
      { name: "Emersn", approved: true },
      { name: "JCS Info Solutions", approved: true },
      { name: "Bezvada Biomed", approved: true },
    ],
  },
  stats: [
    { value: 99.2, decimals: 1, suffix: "%", label: "Claim pre-verification accuracy" },
    { value: 42, suffix: "%", label: "Underwriting throughput gain" },
    { value: 18, suffix: "%", label: "Less unplanned downtime" },
    { display: "8–14", suffix: " wks", label: "Kickoff to production" },
  ],
  cases: {
    eyebrow: "In production",
    title: "Solving the problems that move the business.",
    link: { label: "All customer stories", href: "/customers" },
  },
  operatingLayer: {
    eyebrow: "The operating layer",
    title: "From IT-dependent to AI-native.",
    body: "We don't bolt a chatbot onto your stack. We engineer one governed layer between the systems you run today and the agents that will run your work tomorrow.",
    layers: [
      { name: "Agents", items: ["Finance", "Sales", "Marketing", "Operations"], accent: true },
      { name: "Guardrails & approvals", items: ["Human-in-the-loop", "Evals"] },
      { name: "Knowledge & context", items: ["RAG", "Permissions"] },
      { name: "Engineered data", items: ["Pipelines", "Governance"] },
      { name: "Your systems", items: ["ERP", "CRM", "Epic", "SAP", "SharePoint"] },
    ],
    footnote: "Audit logs and observability across every layer.",
  },
  build: {
    eyebrow: "What we build",
    title: "Agents for every critical function. One governed foundation.",
    cards: [
      { title: "Finance", proof: "Close · Reconciliation · FP&A", href: "/solutions#finance" },
      { title: "Sales", proof: "Outbound · Inbound · CRM hygiene", href: "/solutions#sales" },
      { title: "Marketing", proof: "Content · Campaigns · Reporting", href: "/solutions#marketing" },
      { title: "Operations", proof: "Approvals · Hand-offs · Exceptions", href: "/solutions#operations" },
      { title: "Customer Support", proof: "Voice · Chat · WhatsApp", href: "/solutions#support" },
      { title: "Enterprise Knowledge", proof: "Permission-aware RAG copilots", href: "/solutions#knowledge" },
    ],
  },
  twoUp: [
    {
      eyebrow: "We build it",
      title: "Forward Deployed Engineers",
      body: "Engineers who sit with your team, write production code against your real systems, and hand you full ownership.",
      cta: { label: "Meet the engineers", href: "/engineers" },
      tone: "night" as const,
    },
    {
      eyebrow: "We decide what's worth building",
      title: "The AI Workflow Audit",
      body: "Thirty minutes with an engineer. You leave with a ranked map of where AI pays off first in your operations.",
      cta: { label: "Book a workflow audit", href: "/contact" },
      tone: "light" as const,
    },
  ],
  industries: {
    eyebrow: "Industries",
    title: "Industry agnostic. Operationally specific.",
    notListed: {
      title: "Not listed?",
      body: "Any regulated, process-heavy operation.",
      cta: "Talk to us →",
      href: "/contact",
    },
  },
  security: {
    eyebrow: "Security",
    title: "Built for regulated, mission-critical work.",
    cells: [
      { title: "Enterprise encryption", body: "AES-256 at rest and TLS 1.3 in transit, with keys you control." },
      { title: "Audit logs & observability", body: "Every prompt, tool call and approval is logged and traceable." },
      { title: "Human-in-the-loop", body: "Agents stop for a person whenever a decision matters." },
      { title: "Hallucination mitigation", body: "Grounded answers, citations and evals before anything ships." },
      { title: "Compliance readiness", body: "Architectures built to align with GDPR, UAE PDPL and SOC 2, plus sector rules such as HIPAA and banking regulations." },
      { title: "Private & airgapped", body: "Run in your VPC or fully offline inside your perimeter." },
    ],
    cta: { label: "Visit the Trust Center", href: "/trust" },
  },
  insights: {
    eyebrow: "Insights",
    title: "Field notes from production.",
    link: { label: "All insights", href: "/insights" },
  },
};
