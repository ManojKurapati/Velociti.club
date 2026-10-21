"use client";

import { Section, SectionHeader } from "./ui/section";
import { Badge } from "./ui/badge";

const caseStudies = [
  {
    id: "healthcare",
    project: "Clinical Claim Pre-Verification",
    industry: "Healthcare & Insurance",
    problem: "Claim processing required intensive manual verification against changing compliance texts, leading to delays and errors.",
    process: "Built a secure HIPAA-compliant RAG Copilot to reason over insurance guidelines and automatically pre-verify claims.",
    systems: ["Epic", "SharePoint", "AWS S3", "Private Cloud"],
    results: [
      { metric: "99.2%", label: "Accuracy rate" },
      { metric: "35%", label: "Processing speedup" },
      { metric: "HIPAA", label: "Fully compliant" }
    ],
    timeline: "14 weeks"
  },
  {
    id: "finance",
    project: "Auto-Loan Underwriting Pipeline",
    industry: "Financial Services",
    problem: "Underwriters spent significant hours manually aggregating and cross-referencing multi-source credit histories and applicant income documents.",
    process: "Deployed a secure underwriting RAG agent that parses financial PDFs and credit files to pre-evaluate credit risk.",
    systems: ["Salesforce", "Equifax API", "Internal SQL", "SharePoint"],
    results: [
      { metric: "42%", label: "Throughput gain" },
      { metric: "31%", label: "Review time saved" },
      { metric: "100%", label: "Audit log coverage" }
    ],
    timeline: "8 weeks"
  },
  {
    id: "oil-gas",
    project: "Predictive Well & Valve Telemetry",
    industry: "Oil & Gas",
    problem: "Unplanned valve failures on active pipelines resulted in major production downtime and expensive emergency logistics.",
    process: "Integrated an agentic data pipeline monitoring pressure and temperature sensors to forecast anomaly thresholds.",
    systems: ["SAP PM", "Honeywell Forge", "Azure Blob", "TimescaleDB"],
    results: [
      { metric: "18%", label: "Downtime reduction" },
      { metric: "15%", label: "OPEX maintenance saved" },
      { metric: "94%", label: "Alert accuracy" }
    ],
    timeline: "12 weeks"
  },
  {
    id: "automobile",
    project: "Assembly Line Anomaly Detection",
    industry: "Automobile & Manufacturing",
    problem: "Manual parts verification across automated assembly stations led to latent defect propagation and delayed batch shipments.",
    process: "Deployed real-time computer vision models coupled with workflow orchestrations to flag micro-defects and alert engineers.",
    systems: ["Siemens PLC", "Kafka", "AWS IoT Core", "PostgreSQL"],
    results: [
      { metric: "24%", label: "QA cycle reduction" },
      { metric: "12%", label: "Defect reduction" },
      { metric: "Real-time", label: "Latency profile" }
    ],
    timeline: "10 weeks"
  }
];

export function EnterpriseCaseStudies() {
  return (
    <Section id="case-studies">
      <SectionHeader
        title="Results from recent deployments"
        description="We measure every engagement the same way: hours saved, costs cut, and time to production."
      />
      <div className="grid gap-px border-t border-line bg-line lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article key={study.id} className="flex flex-col bg-canvas">
            <div className="flex-grow p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cool-gray-500">{study.industry}</p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-white md:text-2xl">{study.project}</h3>
                </div>
                <Badge>{study.timeline}</Badge>
              </div>

              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm font-medium text-white">The problem</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-cool-gray-400">{study.problem}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-white">What we deployed</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-cool-gray-400">{study.process}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-white">Systems connected</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {study.systems.map((sys) => (
                      <Badge key={sys}>{sys}</Badge>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid grid-cols-3 divide-x divide-line border-t border-line bg-surface">
              {study.results.map((result) => (
                <div key={result.label} className="px-6 py-5 md:px-8">
                  <div className="font-display text-2xl font-semibold tabular-nums text-white md:text-3xl">{result.metric}</div>
                  <div className="mt-1 text-xs text-cool-gray-500">{result.label}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
