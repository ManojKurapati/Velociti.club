/** /engineers copy: Forward Deployed Engineers, engagement model, deployment options. */

export const engineersPage = {
  meta: {
    title: "Forward Deployed Engineers",
    description: "Velociti engineers sit with your team, write production code against your real systems, and hand you full ownership — in the cloud, your VPC or fully airgapped.",
  },
  hero: {
    eyebrow: "Forward Deployed Engineers",
    title: "Deployment is where enterprise AI is won.",
    lead: "Models are a commodity. Getting them to work inside a 15-year-old ERP is not. Our engineers sit with your team, write production code against your real systems, and hand you full ownership.",
    cta: { label: "Book a call with an FDE", href: "/contact" },
  },
  familiar: {
    eyebrow: "Sound familiar?",
    title: "Your AI problem is really a systems problem.",
    items: [
      "An ERP nobody wants to touch.",
      "The same customer stored in five different formats.",
      "Custom APIs everyone forgot existed.",
      "A spreadsheet quietly running a critical process.",
    ],
  },
  pod: {
    eyebrow: "The pod",
    title: "Two roles. One outcome.",
    roles: [
      {
        name: "Forward Deployed Engineer",
        tagline: "Makes it work.",
        body: "Software engineer, architect and product owner in one. Builds the agents, integrations, pipelines and dashboards in your codebase.",
      },
      {
        name: "AI Strategist",
        tagline: "Makes it matter.",
        body: "Picks the use cases, defines the metrics and the business case, and drives adoption across your teams.",
      },
    ],
    photoPlaceholder: "[Engineers photo — from a real Velociti photo shoot]",
  },
  engagement: {
    eyebrow: "Engagement",
    title: "From Velociti-led to fully yours, by design.",
    note: "[Confirm the timelines]",
    steps: [
      { n: "01", title: "Make you AI-ready", when: "Weeks 1–3", owner: "Velociti-led", body: "Map systems, data and workflows, and ship one use case." },
      { n: "02", title: "Engineer your data", when: "Weeks 4–10", owner: "Co-owned", body: "Pipelines that clean, unify and govern data across ERP, CRM, databases and documents." },
      { n: "03", title: "Move you to AI-native", when: "Week 10+", owner: "Client-owned", body: "Secure agents connected to CRM, billing and documents, with code, runbooks and evals handed over." },
    ],
  },
  deployment: {
    eyebrow: "Deployment options",
    title: "Run it where your data already lives.",
    columns: ["Model", "Where it runs", "Isolation", "Best for"],
    rows: [
      { model: "Managed cloud", where: "Velociti-managed cloud", isolation: "Logical tenant isolation", bestFor: "Fast starts and non-sensitive workloads", highlight: false },
      { model: "Single-tenant", where: "Dedicated Velociti environment", isolation: "Dedicated infrastructure per client", bestFor: "Regulated teams that want us to run it", highlight: false },
      { model: "Your VPC", where: "Your AWS, Azure or GCP account", isolation: "Inside your network and IAM", bestFor: "Enterprises with a cloud landing zone", highlight: false },
      { model: "On-prem / airgapped", where: "Your data centre, no internet", isolation: "Physically isolated, zero egress", bestFor: "Defence, healthcare, banking, critical infrastructure", highlight: true },
    ],
  },
  airgapped: {
    eyebrow: "Airgapped AI",
    title: "Frontier AI. Zero internet.",
    body: "Models, vector databases and agent logic are packaged as containers inside your perimeter, tuned for NVIDIA H100s or private VPC clusters. You own every byte.",
    sectors: ["Defence & Intelligence", "Healthcare & MedTech", "Banking & Sovereign Wealth", "Critical Infrastructure"],
    cta: { label: "Talk to an airgap engineer", href: "/contact" },
  },
};
