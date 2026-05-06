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
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        <rect x="40" y="75" width="80" height="50" rx="12" fill="url(#grad1)" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="80" y="100" fontSize="13" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">ERP Data</text>

        <rect x="160" y="75" width="80" height="50" rx="12" fill="url(#grad2)" stroke="#00f0ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="200" y="100" fontSize="13" fontWeight="600" fill="#00f0ff" textAnchor="middle" dominantBaseline="middle">AI Engine</text>

        <rect x="280" y="75" width="80" height="50" rx="12" fill="url(#grad1)" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="320" y="100" fontSize="13" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Action</text>

        <path d="M120,100 L155,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="155,97 160,100 155,103" fill="currentColor" fillOpacity="0.5" />
        
        <path d="M240,100 L275,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="275,97 280,100 275,103" fill="currentColor" fillOpacity="0.5" />
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
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="gradViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b026ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#b026ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <circle cx="80" cy="100" r="30" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="80" y="100" fontSize="12" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">User</text>

        <rect x="140" y="60" width="100" height="80" rx="16" fill="url(#gradViolet)" stroke="#b026ff" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="190" y="90" fontSize="14" fontWeight="600" fill="#b026ff" textAnchor="middle" dominantBaseline="middle">Voice Agent</text>
        <text x="190" y="110" fontSize="10" fill="#b026ff" fillOpacity="0.7" textAnchor="middle" dominantBaseline="middle">Low Latency</text>

        <rect x="280" y="50" width="80" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="320" y="70" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Zendesk</text>

        <rect x="280" y="110" width="80" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="320" y="130" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Internal KB</text>

        <path d="M110,100 L135,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="135,97 140,100 135,103" fill="currentColor" fillOpacity="0.5" />
        
        <path d="M240,85 L275,70" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="274,67 280,68 276,72" fill="currentColor" fillOpacity="0.5" />

        <path d="M240,115 L275,130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="276,128 280,132 274,133" fill="currentColor" fillOpacity="0.5" />
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
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="gradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect x="40" y="55" width="70" height="30" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="70" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Inbound</text>
        
        <rect x="40" y="115" width="70" height="30" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="130" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Outbound</text>

        <rect x="150" y="70" width="100" height="60" rx="12" fill="url(#gradEmerald)" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.6" />
        <text x="200" y="92" fontSize="13" fontWeight="600" fill="#34d399" textAnchor="middle" dominantBaseline="middle">AI SDR</text>
        <text x="200" y="110" fontSize="10" fill="#34d399" fillOpacity="0.8" textAnchor="middle" dominantBaseline="middle">Qualify & Book</text>

        <rect x="290" y="75" width="80" height="50" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="330" y="100" fontSize="12" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Salesforce</text>

        <path d="M110,70 L145,85" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="144,82 150,87 146,88" fill="currentColor" fillOpacity="0.5" />
        
        <path d="M110,130 L145,115" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="146,112 150,113 144,118" fill="currentColor" fillOpacity="0.5" />

        <path d="M250,100 L285,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="285,97 290,100 285,103" fill="currentColor" fillOpacity="0.5" />
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
      <svg viewBox="0 0 400 200" className="w-full h-full text-cool-gray-300 font-sans">
        <defs>
          <linearGradient id="gradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect x="40" y="50" width="70" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="64" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Notion</text>

        <rect x="40" y="86" width="70" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="100" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">S3 / Docs</text>

        <rect x="40" y="122" width="70" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="75" y="136" fontSize="11" fontWeight="500" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Jira</text>

        <rect x="150" y="60" width="100" height="80" rx="16" fill="url(#gradWhite)" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="200" y="90" fontSize="13" fontWeight="600" fill="#ffffff" textAnchor="middle" dominantBaseline="middle">Vector DB</text>
        <text x="200" y="110" fontSize="10" fill="#ffffff" fillOpacity="0.6" textAnchor="middle" dominantBaseline="middle">& RAG System</text>

        <rect x="290" y="75" width="80" height="50" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
        <text x="330" y="100" fontSize="11" fontWeight="600" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Internal Copilot</text>

        <path d="M110,64 L145,85" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <path d="M110,100 L145,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <path d="M110,136 L145,115" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        
        <path d="M250,100 L285,100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
        <polygon points="285,97 290,100 285,103" fill="currentColor" fillOpacity="0.5" />
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
