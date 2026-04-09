"use client";

import { useState } from "react";
import { Mic, Database, Zap, Stethoscope, Briefcase, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Industry = "all" | "healthcare" | "finance" | "logistics";

const pillars = [
  {
    id: "voice",
    title: "Voice Agents",
    icon: Mic,
    color: "from-neon-cyan to-blue-500",
    useCases: {
      all: "Automate outbound sales, inbound routing, and Level 1 customer support.",
      healthcare: "HIPAA-compliant patient scheduling and triage routing.",
      finance: "PCI-compliant debt collection and secure account verification.",
      logistics: "Automated driver dispatch and real-time delivery tracking."
    }
  },
  {
    id: "rag",
    title: "RAG Systems",
    icon: Database,
    color: "from-neon-violet to-purple-600",
    useCases: {
      all: "Enterprise search across internal wikis, docs, and structured databases.",
      healthcare: "Diagnostic assistance reasoning over vast medical histories and research.",
      finance: "Real-time compliance checks against complex regulatory texts.",
      logistics: "Supply chain anomaly detection via historical contract analysis."
    }
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    icon: Zap,
    color: "from-white to-gray-500",
    useCases: {
      all: "Autonomous agents executing multi-step repetitive software processes.",
      healthcare: "Automated medical billing and insurance claim generation.",
      finance: "End-to-end autonomous loan origination and risk scoring.",
      logistics: "Dynamic autonomous route optimization under changing conditions."
    }
  }
];

export function EnterprisePillars() {
  const [filter, setFilter] = useState<Industry>("all");

  return (
    <section className="py-24 bg-obsidian border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-4">Core Architecture</h2>
            <p className="text-cool-gray-400">Deploy modular, scalable autonomous systems in weeks, not years.</p>
          </div>
          
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10 overflow-x-auto max-w-full hide-scrollbar">
            <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${filter === "all" ? 'bg-white text-black' : 'text-cool-gray-400 hover:text-white'}`}>All Frameworks</button>
            <button onClick={() => setFilter("healthcare")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${filter === "healthcare" ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50' : 'text-cool-gray-400 hover:text-white'}`}>
              <Stethoscope className="w-4 h-4" /> Healthcare
            </button>
            <button onClick={() => setFilter("finance")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${filter === "finance" ? 'bg-neon-violet/20 text-neon-violet border border-neon-violet/50' : 'text-cool-gray-400 hover:text-white'}`}>
              <Briefcase className="w-4 h-4" /> Finance
            </button>
            <button onClick={() => setFilter("logistics")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${filter === "logistics" ? 'bg-white/20 text-white border border-white/50' : 'text-cool-gray-400 hover:text-white'}`}>
              <Truck className="w-4 h-4" /> Logistics
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <motion.div 
              key={pillar.id}
              layout
              className="bg-black border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${pillar.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-medium text-white mb-4">{pillar.title}</h3>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={filter}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-cool-gray-400 min-h-[80px]"
                >
                  {pillar.useCases[filter]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
