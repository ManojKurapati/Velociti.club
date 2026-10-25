import type { Industry } from "./types";

export const mining: Industry = {
  slug: "mining",
  name: "Mining",
  orgType: "operation",
  tileUseCases: ["Fleet & equipment health", "Safety reporting", "Mine planning"],
  meta: {
    title: "AI agents for mining",
    description: "Agents that predict equipment failures, draft safety and shift reports and keep mine planning in step with the site, connected to your fleet, plant and maintenance systems.",
  },
  hero: {
    title: "Fewer stoppages. Safer shifts.",
    lead: "Agents that watch fleet and plant telemetry, predict equipment failures, draft safety and shift reports, and keep mine planning in step with what is happening on site — with a supervisor approving every action.",
  },
  imageAlt: "An open-pit mine with haul trucks",
  artChips: ["HAUL TRUCK 214 · BEARING TEMP RISING", "SHIFT REPORT · READY 06:00"],
  stats: [
    { value: "−20%", label: "Unplanned equipment downtime" },
    { value: "30%", label: "Less time on shift and safety reporting" },
    { value: "12 wks", label: "Kickoff to production" },
  ],
  useCases: [
    { title: "Predictive equipment maintenance", body: "Haul trucks, crushers and conveyors scored for early signs of failure, with work orders drafted for a planner to approve." },
    { title: "Safety & incident reporting", body: "Shift logs, inspections and incident notes turned into complete reports, with hazards flagged to the right supervisor." },
    { title: "Mine planning support", body: "Production, grade and equipment data pulled together so planners see what changed overnight before the morning meeting." },
    { title: "Spares & procurement", body: "Critical spares tracked against maintenance plans, with reorders raised before a part stops the fleet." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Built for remote sites", body: "Runs at the edge or offline when connectivity is limited." },
    { title: "Supervisor in the loop", body: "No work order or safety action goes out without a person signing off." },
    { title: "Works with your systems", body: "Fleet management, historians, SAP PM and the documents your teams already use." },
    { title: "Private or airgapped", body: "Operational data stays inside your network." },
  ],
};
