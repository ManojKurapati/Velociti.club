"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Database,
  Workflow,
  Code2,
  Presentation,
  Wrench,
  Server,
  FileSpreadsheet,
  Braces,
  Shuffle,
} from "lucide-react";

const spaghetti = [
  { icon: Server, label: "A legacy ERP from 2009 nobody wants to touch" },
  { icon: Shuffle, label: "The same customer stored in five different formats" },
  { icon: Braces, label: "Custom APIs no one remembers writing" },
  { icon: FileSpreadsheet, label: "That one spreadsheet secretly running everything" },
];

const phases = [
  {
    icon: Compass,
    step: "01",
    title: "Make You AI-Ready",
    description:
      "We embed with your team, map every system, data source, and workflow, and pinpoint where AI pays off first, so you start from reality instead of a slide deck.",
    color: "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5",
  },
  {
    icon: Database,
    step: "02",
    title: "Engineer Your Data",
    description:
      "We build the pipelines that clean, unify, and govern your data across ERPs, CRMs, databases, and documents, giving AI a foundation it can actually trust.",
    color: "text-neon-violet border-neon-violet/20 bg-neon-violet/5",
  },
  {
    icon: Workflow,
    step: "03",
    title: "Go AI-Native",
    description:
      "We wire secure AI agents into your CRM, billing, databases, and documents, then ship production code, dashboards, and new features built for your business.",
    color: "text-white border-white/10 bg-white/5",
  },
];

const roles = [
  { icon: Code2, who: "Software engineers", what: "build the product." },
  { icon: Presentation, who: "Consultants", what: "explain it." },
  { icon: Wrench, who: "Forward Deployed Engineers", what: "show up and make it work for your problem.", highlight: true },
];

export function ForwardDeployedEngineers() {
  return (
    <section id="forward-deployed-engineers" className="py-32 bg-obsidian relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-violet/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            Prime Service · Forward Deployed Engineering
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight"
          >
            We Don&apos;t Hand You a Login. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
              We Send Engineers.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cool-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light"
          >
            Velociti&apos;s Forward Deployed Engineers (FDEs) embed with your team for weeks to months, untangle your real-world systems, and ship production AI that runs on your data, inside your stack.
          </motion.p>
        </div>

        {/* The problem vs. the FDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
              What is a Forward Deployed Engineer?
            </h3>
            <div className="space-y-6 text-cool-gray-400 font-light text-base md:text-lg leading-relaxed">
              <p>
                An FDE is a senior engineer who parachutes into your environment and makes AI actually work there. Part software engineer, part solutions architect, part product manager, part consultant.
              </p>
              <p className="border-l-2 border-neon-cyan/50 pl-4 py-1 bg-neon-cyan/5 text-white/95 rounded-r-lg font-medium">
                The difference: FDEs build. They wire up systems, write production code, debug integrations, build dashboards, and create the features your business needs.
              </p>
              <p>
                Companies no longer want a basic chatbot. They want AI agents plugged safely into their CRM, databases, billing, and documents. Someone has to integrate all of that on-site. That&apos;s us.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.08)]"
          >
            <div className="text-[10px] font-mono text-cool-gray-500 uppercase tracking-widest mb-5">
              Built for the spaghetti
            </div>
            <ul className="space-y-3">
              {spaghetti.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <Icon className="w-4 h-4 text-cool-gray-300" />
                  </div>
                  <span className="text-sm text-cool-gray-300">{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3 p-3 rounded-xl border border-neon-cyan/30 bg-neon-cyan/5">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse shrink-0" />
              <span className="text-sm font-medium text-white">Untangled, integrated, and running on AI</span>
            </div>
          </motion.div>
        </div>

        {/* Engagement phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-2xl border ${phase.color}`}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-mono text-cool-gray-500">{phase.step}</span>
              </div>
              <h4 className="text-xl font-display font-medium text-white mb-3">{phase.title}</h4>
              <p className="text-cool-gray-400 text-sm leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        {/* In short */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {roles.map(({ icon: Icon, who, what, highlight }) => (
              <div
                key={who}
                className={`p-5 rounded-2xl border flex items-start gap-4 ${
                  highlight ? "border-neon-cyan/40 bg-neon-cyan/5" : "border-white/5 bg-black/30"
                }`}
              >
                <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${highlight ? "text-neon-cyan" : "text-cool-gray-500"}`} />
                <p className={`text-base leading-snug ${highlight ? "text-white font-medium" : "text-cool-gray-400"}`}>
                  <span className={highlight ? "text-neon-cyan" : "text-white"}>{who}</span> {what}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-white text-xl md:text-2xl font-display font-medium max-w-2xl">
              Embed a Velociti FDE with your team and go from messy systems to AI-native operations.
            </p>
            <Link
              href="https://calendly.com/manojkurapati96/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-neon-cyan transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Talk to an FDE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
