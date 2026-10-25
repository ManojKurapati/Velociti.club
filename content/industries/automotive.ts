import type { Industry } from "./types";

export const automotive: Industry = {
  slug: "automotive",
  name: "Automotive",
  orgType: "plant",
  tileUseCases: ["Defect vision", "Supplier documents", "Line reporting"],
  meta: {
    title: "AI agents for automotive manufacturing",
    description: "Real-time computer vision on the assembly line and agents that process supplier documents, connected to your PLCs and MES.",
  },
  hero: {
    title: "Catch the defect at the station, not the dealer.",
    lead: "Computer-vision agents that inspect every unit on the line in real time and feed results back to your PLCs — plus agents that clear the supplier paperwork behind them.",
  },
  imageAlt: "Robotic arms assembling a car chassis on a factory line",
  artChips: ["STATION 14 · SCAN PASS", "WELD SEAM · 0.3MM OFFSET"],
  stats: [
    { value: "−24%", label: "QA cycle time" },
    { value: "−12%", label: "Defects" },
    { value: "Real-time", label: "Detection latency" },
  ],
  useCases: [
    { title: "Assembly-line computer vision", body: "Vision models at each station flag defects in real time and write results back to the line." },
    { title: "Supplier documents", body: "Certificates, PPAP packs and delivery notes read, checked and filed automatically." },
    { title: "Quality reporting", body: "Shift-level quality reports built from inspection data without a spreadsheet in sight." },
    { title: "Maintenance knowledge", body: "Technicians ask in plain language and get answers from manuals and past fixes, with citations." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Line-speed latency", body: "Inference close to the station, built for takt time." },
    { title: "Inspector in the loop", body: "Borderline calls go to a person, not a guess." },
    { title: "Works with your OT", body: "Siemens PLC, Kafka, AWS IoT Core and PostgreSQL." },
    { title: "On-prem by design", body: "Models run inside the plant network." },
  ],
  caseSlug: "assembly-line-anomaly-detection",
};
