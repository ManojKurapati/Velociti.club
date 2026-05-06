"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "logistics",
    client: "Global Logistics Provider",
    industry: "Logistics & Supply Chain",
    problem: "Manual dispatching and seasonal L1 customer query spikes led to extreme bottlenecking and SLA violations.",
    process: "Deployed autonomous voice agents for tier-1 support and RAG-based SOP retrieval for internal dispatchers.",
    systems: ["Salesforce", "Twilio", "Internal ERP", "PostgreSQL"],
    results: [
      { metric: "8.4M", label: "Calls Automated" },
      { metric: "65%", label: "Reduction in L1 Cost" },
      { metric: "8 Mo", label: "Accelerated Deployment" }
    ],
    timeline: "11 Weeks",
    color: "from-blue-500/20 to-blue-900/20"
  },
  {
    id: "healthcare",
    client: "National Health Network",
    industry: "Healthcare & Insurance",
    problem: "Claim processing required intensive manual verification against changing compliance texts, leading to high error rates.",
    process: "Built an internal RAG Copilot to reason over insurance guidelines and automatically pre-verify claims.",
    systems: ["Epic", "SharePoint", "AWS S3"],
    results: [
      { metric: "99.2%", label: "Accuracy Rate" },
      { metric: "4.5x", label: "Faster Processing" },
      { metric: "HIPAA", label: "Fully Compliant" }
    ],
    timeline: "14 Weeks",
    color: "from-emerald-500/20 to-emerald-900/20"
  }
];

export function EnterpriseCaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-black relative border-t border-white/5">
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
              className="bg-obsidian rounded-3xl border border-white/10 hover:border-white/30 transition-all group overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-medium text-white">{study.client}</h3>
                  </div>
                  <div className="bg-white/5 rounded-full px-3 py-1 text-sm text-gray-300 border border-white/10">
                    {study.timeline}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Operational Problem</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Deployment Process</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{study.process}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Systems Integrated</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.systems.map((sys, idx) => (
                        <span key={idx} className="bg-black border border-white/10 text-gray-400 text-xs px-2 py-1 rounded">
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-r ${study.color} border-t border-white/5 p-8`}>
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx}>
                      <div className="text-2xl md:text-3xl font-display font-bold text-white mb-1">{result.metric}</div>
                      <div className="text-xs text-gray-300">{result.label}</div>
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
