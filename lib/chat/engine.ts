/**
 * Deterministic retrieval for the site chat: no model, no network beyond the
 * prebuilt index. A query is normalised, expanded with synonyms, then scored
 * against each entry's keywords, title and text with IDF weighting.
 *
 * When an LLM is added later, keep this as the retrieval step and pass the
 * top entries to the model as context (through a server-side proxy, so the
 * API key never ships to the browser).
 */
import type { ChatEntry } from "./types";

const STOP = new Set(
  "a an the and or of to in on for with at by from is are was be been do does did can could would should will i you we us our your my me it its this that these those what which who whom how why when where there here about tell please any some have has had get give show me know want need".split(" "),
);

// Visitor wording → the terms used on the site.
const SYNONYMS: Record<string, string[]> = {
  cost: ["pricing"], price: ["pricing"], prices: ["pricing"], fee: ["pricing"], expensive: ["pricing"], budget: ["pricing"], charge: ["pricing"],
  long: ["timeline"], duration: ["timeline"], quickly: ["timeline", "fast"], weeks: ["timeline"],
  onprem: ["airgapped", "premise"], "on-prem": ["airgapped", "premise"], "on-premise": ["airgapped", "premise"], offline: ["airgapped"], airgap: ["airgapped"], sovereign: ["airgapped"],
  secure: ["security"], safe: ["security"], privacy: ["security", "data"], soc2: ["soc", "compliance"], hipaa: ["compliance"], gdpr: ["compliance"], certified: ["compliance"],
  job: ["careers"], jobs: ["careers"], hiring: ["careers"], vacancy: ["careers"], vacancies: ["careers"], openings: ["careers"], join: ["careers"],
  phone: ["contact"], mail: ["email", "contact"], email: ["contact"], whatsapp: ["contact"], reach: ["contact"],
  demo: ["audit", "book"], meeting: ["audit", "book"], consultation: ["audit", "book"], calendly: ["audit", "book"], appointment: ["audit", "book"],
  hospital: ["healthcare"], hospitals: ["healthcare"], clinic: ["healthcare"], medical: ["healthcare"], health: ["healthcare"], patient: ["healthcare"], patients: ["healthcare"],
  bank: ["banking"], banks: ["banking"], fintech: ["banking"], loan: ["lending"], loans: ["lending"], insurer: ["insurance"],
  accounting: ["finance"], ledger: ["finance"], reconciliation: ["finance"], invoice: ["finance"], invoices: ["finance"], cfo: ["finance"],
  oil: ["oil-gas"], gas: ["oil-gas"], energy: ["oil-gas"], rig: ["oil-gas"], petroleum: ["oil-gas"],
  mine: ["mining"], mines: ["mining"], minerals: ["mining"],
  gov: ["government"], public: ["government"], ministry: ["government"], municipality: ["government"], citizen: ["government"], citizens: ["government"],
  car: ["automotive"], cars: ["automotive"], factory: ["automotive"], manufacturing: ["automotive"], vehicle: ["automotive"],
  pharmaceutical: ["pharma"], drug: ["pharma"], drugs: ["pharma"], biotech: ["pharma"], lab: ["pharma"], life: ["pharma"],
  hotel: ["hospitality"], hotels: ["hospitality"], guest: ["hospitality"], guests: ["hospitality"], resort: ["hospitality"], travel: ["hospitality"],
  university: ["education"], universities: ["education"], school: ["education"], schools: ["education"], student: ["education"], students: ["education"], college: ["education"],
  chatbot: ["support"], helpdesk: ["support"], ticket: ["support"], tickets: ["support"], service: ["support"], voice: ["support"],
  sdr: ["sales"], leads: ["sales"], lead: ["sales"], outbound: ["sales"], pipeline: ["sales"], crm: ["sales"],
  campaign: ["marketing"], campaigns: ["marketing"], content: ["marketing"], brand: ["marketing"], seo: ["marketing"],
  rag: ["knowledge"], search: ["knowledge"], documents: ["knowledge"], copilot: ["knowledge"], copilots: ["knowledge"],
  founder: ["about"], ceo: ["about"], company: ["about"], dubai: ["location", "about"],
  fde: ["engineers"], palantir: ["engineers", "forward"], prototype: ["engineers"], prototypes: ["engineers"], consultants: ["engineers"],
  clients: ["customers"], examples: ["customers"], results: ["customers"],
  llm: ["model"], llms: ["model"], gpt: ["model"], openai: ["model"],
};

function stem(w: string) {
  if (w.length > 5 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith("ed")) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/on[\s-]?prem(ise|ises)?/g, "onprem")
    .replace(/[^a-z0-9&+\-\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w));
}

function expand(tokens: string[]): string[] {
  const out = new Set<string>();
  for (const t of tokens) {
    out.add(stem(t));
    for (const s of SYNONYMS[t] ?? SYNONYMS[stem(t)] ?? []) out.add(stem(s));
  }
  return [...out];
}

type Prepared = { entry: ChatEntry; kw: Set<string>; title: Set<string>; text: Map<string, number> };

export type ChatAnswer =
  | { matched: true; entry: ChatEntry; related: ChatEntry[] }
  | { matched: false; related: ChatEntry[] };

export function createEngine(entries: ChatEntry[]) {
  const prepared: Prepared[] = entries.map((entry) => {
    const text = new Map<string, number>();
    for (const t of tokenize(`${entry.text} ${entry.answer}`).map(stem)) text.set(t, (text.get(t) ?? 0) + 1);
    return {
      entry,
      kw: new Set(entry.keywords.flatMap((k) => tokenize(k)).map(stem)),
      title: new Set(tokenize(entry.title).map(stem)),
      text,
    };
  });

  // Inverse document frequency over all fields, so common words count for less.
  const df = new Map<string, number>();
  for (const p of prepared) for (const t of new Set([...p.kw, ...p.title, ...p.text.keys()])) df.set(t, (df.get(t) ?? 0) + 1);
  const idf = (t: string) => Math.log(1 + prepared.length / (1 + (df.get(t) ?? 0)));

  return function answer(question: string): ChatAnswer {
    const terms = expand(tokenize(question));
    if (!terms.length) {
      // Questions made only of common words ("what do you do?", "who are you?") are about the company.
      const overview = /\b(you|your|velociti)\b/i.test(question) && prepared.find((p) => p.entry.id === "faq-what");
      return overview ? { matched: true, entry: overview.entry, related: [] } : { matched: false, related: [] };
    }
    const scored = prepared
      .map((p) => {
        let score = 0;
        let strong = 0;
        for (const t of terms) {
          const w = idf(t);
          if (p.kw.has(t)) {
            score += 3 * w;
            strong++;
          }
          if (p.title.has(t)) {
            score += 2 * w;
            strong++;
          }
          const tf = p.text.get(t);
          if (tf) score += w * (1 + Math.log(tf)) * 0.6;
        }
        return { entry: p.entry, score: score * (p.entry.weight ?? 1), strong };
      })
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score);

    const top = scored[0];
    if (!top || top.strong === 0 || top.score < 2.2) return { matched: false, related: scored.slice(0, 3).map((s) => s.entry) };
    const related = scored
      .slice(1)
      .filter((s) => s.score >= top.score * 0.45 && s.entry.url !== top.entry.url)
      .slice(0, 2)
      .map((s) => s.entry);
    return { matched: true, entry: top.entry, related };
  };
}
