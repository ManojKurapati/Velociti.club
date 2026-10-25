import type { Industry } from "./types";

export const oilGas: Industry = {
  slug: "oil-gas",
  name: "Oil & Gas",
  orgType: "operation",
  tileUseCases: ["Valve telemetry", "Maintenance planning", "Field reporting"],
  meta: {
    title: "AI agents for oil & gas",
    description: "Telemetry and maintenance agents that predict failures, plan work in SAP PM and cut unplanned downtime.",
  },
  hero: {
    title: "Fix it before it fails.",
    lead: "Agents that watch well and valve telemetry, predict failures and raise maintenance work in SAP PM — with a planner approving every order before a crew rolls out.",
  },
  imageAlt: "An offshore oil rig at night",
  artChips: ["VALVE V-117 · PRESSURE DRIFT", "WORK ORDER DRAFTED · SAP PM"],
  stats: [
    { value: "−18%", label: "Unplanned downtime" },
    { value: "−15%", label: "Maintenance OPEX" },
    { value: "94%", label: "Alert accuracy" },
  ],
  useCases: [
    { title: "Valve & well telemetry", body: "Sensor streams unified and scored for early signs of failure, with alerts your engineers trust." },
    { title: "Maintenance planning on SAP PM", body: "Draft work orders, parts and crew schedules created in SAP PM for a planner to approve." },
    { title: "Field reporting", body: "Shift and incident reports drafted from logs, photos and voice notes." },
    { title: "HSE document search", body: "One governed answer engine across procedures, permits and standards, with citations." },
  ],
  quote: { text: "[Client quote]", name: "[Name]", role: "[Role, Organisation]", approval: "[Confirm written approval to publish name and quote]" },
  pillars: [
    { title: "Built for OT data", body: "Historians, telemetry platforms and time-series stores." },
    { title: "Planner in the loop", body: "No work order is released without a person signing off." },
    { title: "Works with SAP PM", body: "Plus Honeywell Forge, Azure Blob and TimescaleDB." },
    { title: "Runs at the edge", body: "On-prem and airgapped options for remote and offshore sites." },
  ],
  caseSlug: "predictive-valve-telemetry",
};
