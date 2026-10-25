import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/customers";
import { engineersPage } from "@/content/engineers";
import { trustPage } from "@/content/trust";
import { aboutPage } from "@/content/about";
import { careersPage } from "@/content/careers";
import { chatFaq } from "@/content/chat";
import { getAllPosts } from "@/lib/insights";
import { stripPlaceholders } from "@/components/site/Copy";
import type { ChatEntry } from "./types";

const clean = (s: string) => stripPlaceholders(s);

// Sector vocabulary visitors use that the industry pages don't spell out.
const INDUSTRY_TERMS: Record<string, string[]> = {
  healthcare: ["hospital", "clinic", "ehr", "epic", "claims", "patients", "provider", "payer"],
  finance: ["banking", "lending", "underwriting", "kyc", "aml", "insurance", "credit", "wealth"],
  "oil-gas": ["energy", "upstream", "offshore", "rig", "wells", "valves", "refinery"],
  mining: ["mine", "mines", "haul", "minerals", "ore", "pit", "quarry"],
  automotive: ["manufacturing", "factory", "plant", "assembly", "quality", "oem", "suppliers"],
  pharma: ["pharmaceutical", "biotech", "gxp", "regulatory", "pharmacovigilance", "batch", "laboratory"],
  government: ["public", "sector", "ministry", "agency", "citizen", "municipality", "federal"],
  hospitality: ["hotel", "hotels", "resort", "guest", "pms", "travel", "booking"],
  education: ["university", "school", "college", "students", "admissions", "campus"],
};
const list = (items: string[]) => items.map(clean).filter(Boolean).join(" · ");

/** Builds the chat knowledge base from the same content files the pages use. */
export function buildChatIndex(): ChatEntry[] {
  const entries: ChatEntry[] = [];

  for (const f of chatFaq) entries.push({ ...f, text: f.answer, weight: 1.15 });

  entries.push({
    id: "solutions",
    title: "Solutions",
    url: "/solutions",
    keywords: ["solutions", "products", "agents", "build", "automate", "automation", "functions"],
    answer: `We build production-grade agent systems for ${solutions.map((s) => s.name.toLowerCase()).join(", ")}. Every one ships with approvals, audit logs and evals.`,
    text: solutions.map((s) => `${s.name} ${s.headline}`).join(" "),
  });

  for (const s of solutions) {
    entries.push({
      id: `solution-${s.id}`,
      title: s.name,
      url: `/solutions#${s.id}`,
      keywords: [s.id, ...s.name.toLowerCase().split(/\s+/)],
      answer: `${s.headline} ${s.lead} Use cases: ${list(s.useCases.map((u) => u.title))}.${clean(s.proof.value) ? ` Typical result: ${clean(s.proof.value)} ${s.proof.label}.` : ""}`,
      text: [s.headline, s.lead, ...s.useCases.map((u) => `${u.title} ${u.body}`)].join(" "),
    });
  }

  entries.push({
    id: "industries",
    title: "Industries",
    url: "/industries",
    keywords: ["industries", "industry", "sectors", "sector", "verticals"],
    answer: `We work across ${industries.map((i) => i.name).join(", ")} — and any regulated, process-heavy operation.`,
    text: industries.map((i) => `${i.name} ${i.tileUseCases.join(" ")}`).join(" "),
  });

  for (const ind of industries) {
    const stats = ind.stats.filter((st) => clean(st.value)).map((st) => `${st.value} ${st.label.toLowerCase()}`);
    entries.push({
      id: `industry-${ind.slug}`,
      title: `${ind.name} industry`,
      url: `/industries/${ind.slug}`,
      keywords: [ind.slug, ...ind.name.toLowerCase().split(/[\s&]+/).filter(Boolean), ...(INDUSTRY_TERMS[ind.slug] ?? [])],
      answer: `${ind.hero.title} ${ind.hero.lead} Use cases: ${list(ind.useCases.map((u) => u.title))}.${stats.length ? ` Results: ${stats.join(" · ")}.` : ""}`,
      text: [ind.hero.lead, ...ind.useCases.map((u) => `${u.title} ${u.body}`), ...ind.pillars.map((p) => `${p.title} ${p.body}`)].join(" "),
    });
  }

  entries.push({
    id: "customers",
    title: "Customer stories",
    url: "/customers",
    keywords: ["customers", "case", "studies", "study", "clients", "results", "examples", "proof", "references"],
    answer: `Case studies in production: ${caseStudies.map((c) => `${c.industry}: ${c.headline.value} ${c.headline.label.toLowerCase()} (${c.weeks} weeks)`).join(" · ")}.`,
    text: caseStudies.map((c) => c.title).join(" "),
  });
  for (const c of caseStudies) {
    entries.push({
      id: `case-${c.slug}`,
      title: c.title,
      url: `/customers/${c.slug}`,
      keywords: [c.industrySlug, ...c.industry.toLowerCase().split(/[\s&]+/).filter(Boolean), "case", "study"],
      answer: `${c.title}. ${c.summary} Results: ${c.stats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(" · ")}. Systems: ${c.systems.join(", ")}. ${c.weeks} weeks to production.`,
      text: [c.summary, ...c.built.map(clean), c.systems.join(" ")].join(" "),
    });
  }

  const e = engineersPage;
  entries.push({
    id: "engineers",
    title: "Forward Deployed Engineers",
    url: "/engineers",
    keywords: ["engineers", "engineer", "fde", "forward", "deployed", "embed", "embedded", "team", "pod", "palantir", "how", "work", "approach"],
    answer: `${e.hero.lead} Each pod pairs a ${e.pod.roles[0].name} ("${e.pod.roles[0].tagline}") with an ${e.pod.roles[1].name} ("${e.pod.roles[1].tagline}").`,
    text: [e.hero.title, e.familiar.title, ...e.familiar.items, ...e.pod.roles.map((r) => r.body)].join(" "),
  });
  entries.push({
    id: "engagement",
    title: "How an engagement works",
    url: "/engineers",
    keywords: ["engagement", "process", "phases", "steps", "handover", "ownership", "own"],
    answer: `${e.engagement.title} ${e.engagement.steps.map((s) => `${s.n} ${s.title} (${s.when}, ${s.owner.toLowerCase()}): ${s.body}`).join(" ")}`,
    text: e.engagement.steps.map((s) => s.body).join(" "),
  });
  entries.push({
    id: "deployment",
    title: "Deployment options",
    url: "/engineers",
    keywords: ["deployment", "deploy", "cloud", "vpc", "aws", "azure", "gcp", "hosting", "host", "tenant"],
    answer: `You can run Velociti agents in: ${e.deployment.rows.map((r) => `${r.model} (${r.where})`).join(" · ")}.`,
    text: e.deployment.rows.map((r) => `${r.isolation} ${r.bestFor}`).join(" "),
  });
  entries.push({
    id: "airgapped",
    title: "Airgapped AI",
    url: "/engineers#airgapped",
    keywords: ["airgapped", "airgap", "offline", "onprem", "premise", "premises", "internet", "sovereign", "defence", "defense", "h100", "nvidia"],
    answer: `${e.airgapped.title} ${e.airgapped.body} Sectors: ${e.airgapped.sectors.join(" · ")}.`,
    text: e.airgapped.body,
  });

  const t = trustPage;
  entries.push({
    id: "trust",
    title: "Trust Center",
    url: "/trust",
    keywords: ["trust", "security", "secure", "safety", "safe", "governance", "audit", "logs", "human", "loop", "approvals"],
    answer: `${t.hero.lead} Our principles: ${t.principles.items.map((p) => p.title).join(" · ")}.`,
    text: [...t.principles.items.map((p) => p.body), ...t.safeguards.cells.map((c) => `${c.title} ${c.body}`)].join(" "),
  });
  entries.push({
    id: "safeguards",
    title: "Security safeguards",
    url: "/trust#safeguards",
    keywords: ["encryption", "encrypt", "injection", "pii", "redaction", "hallucination", "hallucinations", "safeguards", "controls"],
    answer: `Every agent ships with: ${t.safeguards.cells.map((c) => `${c.title} — ${c.body}`).join(" ")}`,
    text: t.safeguards.cells.map((c) => c.body).join(" "),
  });
  entries.push({
    id: "compliance",
    title: "Compliance",
    url: "/trust#compliance",
    keywords: ["compliance", "compliant", "certified", "certification", "soc", "soc2", "hipaa", "gdpr", "pdpl", "iso", "27001", "pen", "regulation", "regulated"],
    answer: `Our architectures are built to align with ${t.compliance.items.map((c) => c.name).join(", ")}. ${t.compliance.note} See the Trust Center for current status, or request security documents there.`,
    text: t.compliance.items.map((c) => c.detail).join(" "),
  });

  const a = aboutPage;
  entries.push({
    id: "about",
    title: "About Velociti",
    url: "/about",
    keywords: ["about", "founder", "founders", "ceo", "leadership", "team", "board", "manoj", "lavine", "history", "values"],
    answer: `${a.hero.lead} Leadership: ${a.leadership.people.map((p) => `${p.name}, ${p.role}`).join("; ")}. Values: ${a.values.items.map((v) => v.title).join(" ")}`,
    text: [...a.leadership.people.map((p) => p.bio), ...a.values.items.map((v) => v.body)].join(" "),
  });

  const c = careersPage;
  entries.push({
    id: "careers",
    title: "Careers",
    url: "/careers",
    keywords: ["careers", "career", "jobs", "job", "hiring", "hire", "vacancy", "vacancies", "roles", "role", "apply", "join", "openings"],
    answer: `Open roles: ${c.roles.map((r) => `${r.title} (${r.location})`).join(" · ")}. Don't see your role? Send an open application.`,
    text: c.roles.map((r) => `${r.title} ${r.summary}`).join(" "),
  });
  entries.push({
    id: "careers-ai",
    title: "AI in our hiring process",
    url: "/careers#ai-guidelines",
    keywords: ["ai", "interview", "interviews", "candidate", "candidates", "guidelines", "chatgpt", "allowed", "use", "recording", "transcription"],
    answer: `You can use AI the way you would on the job — for example ${c.aiGuidelines.acceptable.items.slice(0, 2).map((s) => s.charAt(0).toLowerCase() + s.slice(1).replace(/\.$/, "")).join("; ")}. Not acceptable: ${c.aiGuidelines.notAcceptable.items[0].charAt(0).toLowerCase() + c.aiGuidelines.notAcceptable.items[0].slice(1)} ${c.aiGuidelines.closing}`,
    text: [c.aiGuidelines.intro, ...c.aiGuidelines.acceptable.items, ...c.aiGuidelines.notAcceptable.items].join(" "),
  });

  for (const p of getAllPosts()) {
    entries.push({
      id: `post-${p.slug}`,
      title: p.title,
      url: `/insights/${p.slug}`,
      keywords: ["insights", "blog", "article", p.category.toLowerCase()],
      answer: `${p.title}: ${p.excerpt}`,
      text: p.excerpt,
    });
  }

  return entries.map((x) => ({ ...x, answer: clean(x.answer) }));
}
