/**
 * Copy and curated answers for the site chat ("Ask Velociti").
 * The chat is deterministic: it only answers from this website's content.
 * Everything else on the site is indexed automatically (lib/chat/build-index.ts);
 * add an FAQ entry here for questions that need a hand-written answer.
 */

export const chatCopy = {
  title: "Ask Velociti",
  subtitle: "Answers come from this website",
  launcherLabel: "Ask Velociti a question",
  greeting: "Hi — ask me about our solutions, industries, how we work, security or careers. I answer from what's on this site.",
  placeholder: "Ask a question…",
  suggestions: ["What does Velociti do?", "How long does a deployment take?", "Can you run fully on-prem?", "Book a workflow audit"],
  fallback:
    "I couldn't find that on our site. Try asking about our solutions, industries, security or how engagements work — or book a free 30-minute workflow audit and ask an engineer directly.",
  readMore: "Open page",
  related: "Related",
};

export type ChatFaq = { id: string; title: string; url: string; keywords: string[]; answer: string };

/** Hand-written answers, written only from facts stated elsewhere on the site. */
export const chatFaq: ChatFaq[] = [
  {
    id: "faq-what",
    title: "What Velociti does",
    url: "/",
    keywords: ["what", "do", "velociti", "about", "service", "offer", "overview", "who"],
    answer:
      "Velociti is an AI-native enterprise engineering company. Our forward-deployed engineers map how your business really runs, prototype AI agents in weeks, and harden them into production systems across finance, sales, marketing and operations — on the systems and data you already run.",
  },
  {
    id: "faq-audit",
    title: "Book a workflow audit",
    url: "/contact",
    keywords: ["audit", "book", "meeting", "demo", "call", "consultation", "calendly", "schedule", "start", "begin"],
    answer:
      "The AI workflow audit is 30 minutes, free and with no commitment. You pick a time with an engineer (not a salesperson) and leave with a map of where AI pays off first in your operations.",
  },
  {
    id: "faq-pricing",
    title: "Pricing",
    url: "/contact",
    keywords: ["pricing", "price", "cost", "fee", "budget", "expensive", "charge", "quote"],
    answer:
      "The workflow audit is free. Engagement pricing isn't listed on the site — it's scoped with you after the audit, based on the workflows and systems involved.",
  },
  {
    id: "faq-timeline",
    title: "How long it takes",
    url: "/engineers",
    keywords: ["timeline", "long", "time", "weeks", "fast", "quick", "duration", "production"],
    answer:
      "Typically 8–14 weeks from kickoff to production. Engagements run in three phases: make you AI-ready (weeks 1–3), engineer your data (weeks 4–10) and move you to AI-native (week 10+), when code, runbooks and evals are handed over.",
  },
  {
    id: "faq-contact",
    title: "Contact",
    url: "/contact",
    keywords: ["contact", "email", "phone", "whatsapp", "reach", "talk", "address", "office"],
    answer: "Email info@velociti.club or message us on WhatsApp at +971 58 546 9969. You can also book a free 30-minute workflow audit on the contact page.",
  },
  {
    id: "faq-location",
    title: "Where we are",
    url: "/about",
    keywords: ["where", "location", "located", "dubai", "uae", "headquarters", "based"],
    answer: "Velociti is headquartered in Dubai.",
  },
  {
    id: "faq-data",
    title: "Your data",
    url: "/trust",
    keywords: ["data", "train", "training", "privacy", "own", "ownership", "model"],
    answer:
      "Your data never trains public models. Agents run in your environment of choice — managed cloud, single-tenant, your VPC or fully airgapped — and every action is logged and traceable. You own the code, runbooks and evals at handover.",
  },
];
