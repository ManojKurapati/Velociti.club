"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "healthcare",
    project: "Clinical Claim Pre-Verification",
    industry: "Healthcare & Insurance",
    problem: "Claim processing required intensive manual verification against changing compliance texts, leading to delays and errors.",
    process: "Built a secure HIPAA-compliant RAG Copilot to reason over insurance guidelines and automatically pre-verify claims.",
    systems: ["Epic", "SharePoint", "AWS S3", "Private Cloud"],
    results: [
      { metric: "99.2%", label: "Accuracy Rate" },
      { metric: "35%", label: "Processing Speedup" },
      { metric: "HIPAA", label: "Fully Compliant" }
    ],
    timeline: "14 Weeks",
    color: "from-emerald-500/20 to-emerald-900/20"
  },
  {
    id: "finance",
    project: "Auto-Loan Underwriting Pipeline",
    industry: "Financial Services",
    problem: "Underwriters spent significant hours manually aggregating and cross-referencing multi-source credit histories and applicant income documents.",
    process: "Deployed a secure underwriting RAG agent that parses financial PDFs and credit files to pre-evaluate credit risk.",
    systems: ["Salesforce", "Equifax API", "Internal SQL", "SharePoint"],
    results: [
      { metric: "42%", label: "Throughput Gain" },
      { metric: "31%", label: "Review Time Saved" },
      { metric: "100%", label: "Audit Log Coverage" }
    ],
    timeline: "8 Weeks",
    color: "from-purple-500/20 to-purple-900/20"
  },
  {
    id: "oil-gas",
    project: "Predictive Well & Valve Telemetry",
    industry: "Oil & Gas",
    problem: "Unplanned valve failures on active pipelines resulted in major production downtime and expensive emergency logistics.",
    process: "Integrated an agentic data pipeline monitoring pressure and temperature sensors to forecast anomaly thresholds.",
    systems: ["SAP PM", "Honeywell Forge", "Azure Blob", "TimescaleDB"],
    results: [
      { metric: "18%", label: "Downtime Reduction" },
      { metric: "15%", label: "OPEX Maintenance Saved" },
      { metric: "94%", label: "Alert Accuracy" }
    ],
    timeline: "12 Weeks",
    color: "from-blue-500/20 to-blue-900/20"
  },
  {
    id: "automobile",
    project: "Assembly Line Anomaly Detection",
    industry: "Automobile & Manufacturing",
    problem: "Manual parts verification across automated assembly stations led to latent defect propagation and delayed batch shipments.",
    process: "Deployed real-time computer vision models coupled with workflow orchestrations to flag micro-defects and alert engineers.",
    systems: ["Siemens PLC", "Kafka", "AWS IoT Core", "PostgreSQL"],
    results: [
      { metric: "24%", label: "QA Cycle Reduction" },
      { metric: "12%", label: "Defect Reduction" },
      { metric: "Real-time", label: "Latency Profile" }
    ],
    timeline: "10 Weeks",
    color: "from-orange-500/20 to-orange-900/20"
  }
];

export function EnterpriseCaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-black relative border-t border-cool-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">Enterprise Deployments</h2>
            <p className="text-cool-gray-400 max-w-xl text-lg">
              We measure impact strictly in operational efficiency, cost reduction, and deployment velocity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-obsidian rounded-3xl border border-cool-gray-800 hover:border-cool-gray-700 transition-all group overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-xs font-semibold text-cool-gray-500 uppercase tracking-wider mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-medium text-white">{study.project}</h3>
                  </div>
                  <div className="bg-cool-gray-900/50 rounded-full px-3 py-1 text-sm text-cool-gray-300 border border-cool-gray-700/30">
                    {study.timeline}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-cool-gray-400 mb-1">Operational Problem</h4>
                    <p className="text-cool-gray-300 text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cool-gray-400 mb-1">Deployment Process</h4>
                    <p className="text-cool-gray-300 text-sm leading-relaxed">{study.process}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-cool-gray-400 mb-2">Systems Integrated</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.systems.map((sys, idx) => (
                        <span key={idx} className="bg-cool-gray-900 border border-cool-gray-700/30 text-cool-gray-400 text-xs px-2 py-1 rounded">
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-r ${study.color} border-t border-cool-gray-800/50 p-8`}>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx}>
                      <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{result.metric}</div>
                      <div className="text-xs text-cool-gray-300">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
