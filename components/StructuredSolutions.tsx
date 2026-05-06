"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "ops",
    title: "AI Operations Automation",
    description: "Automate complex internal workflows, reporting, and process optimization to drastically reduce operational overhead.",
    benefits: ["Workflow automation", "Intelligent reporting", "Internal operations", "Process optimization"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-auto text-cool-gray-400">
        <rect x="50" y="80" width="60" height="40" rx="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <rect x="170" y="80" width="60" height="40" rx="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <rect x="290" y="80" width="60" height="40" rx="8" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" />
        <path d="M110,100 L160,100 M230,100 L280,100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="135" cy="100" r="4" fill="currentColor" />
        <circle cx="255" cy="100" r="4" fill="currentColor" />
        <text x="80" y="145" fontSize="12" fill="currentColor" textAnchor="middle">Input Data</text>
        <text x="200" y="145" fontSize="12" fill="currentColor" textAnchor="middle">AI Processing</text>
        <text x="320" y="145" fontSize="12" fill="currentColor" textAnchor="middle">Action / Output</text>
      </svg>
    ),
    color: "from-neon-cyan/20 to-blue-500/20",
    borderColor: "border-neon-cyan/30"
  },
  {
    id: "support",
    title: "AI Customer Support Systems",
    description: "Deploy intelligent voice and text agents that handle L1/L2 support seamlessly in multiple languages.",
    benefits: ["Voice agents", "Ticket automation", "Multilingual support", "Knowledge systems"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-auto text-cool-gray-400">
        <circle cx="100" cy="100" r="30" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <path d="M130,100 L180,100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="190" y="70" width="120" height="60" rx="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M310,90 L340,70 M310,110 L340,130" stroke="currentColor" strokeWidth="2" />
        <circle cx="350" cy="65" r="15" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
        <circle cx="350" cy="135" r="15" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
        <text x="100" y="150" fontSize="12" fill="currentColor" textAnchor="middle">Customer</text>
        <text x="250" y="150" fontSize="12" fill="currentColor" textAnchor="middle">AI Agent (Voice/Text)</text>
      </svg>
    ),
    color: "from-neon-violet/20 to-purple-600/20",
    borderColor: "border-neon-violet/30"
  },
  {
    id: "sales",
    title: "AI Sales Automation",
    description: "Scale outbound efforts and accelerate inbound lead qualification with autonomous sales development representatives.",
    benefits: ["Lead qualification", "SDR automation", "CRM enrichment", "Outbound workflows"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-auto text-cool-gray-400">
        <polygon points="100,50 160,100 100,150" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <path d="M160,100 L220,100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <rect x="230" y="75" width="50" height="50" rx="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M280,100 L340,100" stroke="currentColor" strokeWidth="2" />
        <circle cx="350" cy="100" r="20" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" />
        <text x="110" y="110" fontSize="12" fill="currentColor" textAnchor="middle">Leads</text>
        <text x="255" y="145" fontSize="12" fill="currentColor" textAnchor="middle">AI Qualify</text>
        <text x="350" y="145" fontSize="12" fill="currentColor" textAnchor="middle">CRM</text>
      </svg>
    ),
    color: "from-emerald-400/20 to-green-600/20",
    borderColor: "border-emerald-400/30"
  },
  {
    id: "knowledge",
    title: "Enterprise Knowledge AI",
    description: "Connect your enterprise data silos into a single, intelligent RAG system for instant internal retrieval and compliance checking.",
    benefits: ["Internal copilots", "SOP retrieval", "Enterprise search", "RAG systems"],
    diagram: (
      <svg viewBox="0 0 400 200" className="w-full h-auto text-cool-gray-400">
        <rect x="80" y="50" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <rect x="80" y="90" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <rect x="80" y="130" width="40" height="30" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
        <path d="M120,65 L180,100 M120,105 L180,100 M120,145 L180,100" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
        <circle cx="200" cy="100" r="30" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" />
        <path d="M230,100 L280,100" stroke="currentColor" strokeWidth="2" />
        <rect x="290" y="80" width="60" height="40" rx="8" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="2" />
        <text x="100" y="40" fontSize="12" fill="currentColor" textAnchor="middle">Data Silos</text>
        <text x="200" y="150" fontSize="12" fill="currentColor" textAnchor="middle">Vector DB</text>
        <text x="320" y="140" fontSize="12" fill="currentColor" textAnchor="middle">Copilot</text>
      </svg>
    ),
    color: "from-white/10 to-gray-500/10",
    borderColor: "border-white/20"
  }
];

export function StructuredSolutions() {
  return (
    <section id="solutions" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Structured Solutions</h2>
          <p className="text-cool-gray-400 max-w-2xl text-lg">
            We deploy purpose-built AI architectures that integrate securely with your existing tech stack, designed specifically for measurable operational impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-obsidian border ${solution.borderColor} rounded-3xl overflow-hidden group hover:border-white/40 transition-all duration-300`}
            >
              <div className={`h-48 w-full bg-gradient-to-br ${solution.color} flex items-center justify-center p-6 border-b border-white/5`}>
                {solution.diagram}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-medium text-white mb-3">{solution.title}</h3>
                <p className="text-cool-gray-400 mb-6 min-h-[48px]">{solution.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/#contact`} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors">
                  Explore Implementation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
