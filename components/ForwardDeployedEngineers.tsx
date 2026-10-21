"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const spaghetti = [
  "A legacy ERP from 2009 nobody wants to touch",
  "The same customer stored in five different formats",
  "Custom APIs no one remembers writing",
  "That one spreadsheet secretly running everything",
];

const phases = [
  {
    step: "01",
    title: "Make You AI-Ready",
    description:
      "We embed with your team, map every system, data source, and workflow, and pinpoint where AI pays off first, so you start from reality instead of a slide deck.",
  },
  {
    step: "02",
    title: "Engineer Your Data",
    description:
      "We build the pipelines that clean, unify, and govern your data across ERPs, CRMs, databases, and documents, giving AI a foundation it can actually trust.",
  },
  {
    step: "03",
    title: "Go AI-Native",
    description:
      "We wire secure AI agents into your CRM, billing, databases, and documents, then ship production code, dashboards, and new features built for your business.",
  },
];

const roles = [
  { who: "Software engineers", what: "build the product." },
  { who: "Consultants", what: "explain it." },
  { who: "Forward Deployed Engineers", what: "show up and make it work for your problem.", highlight: true },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function ForwardDeployedEngineers() {
  return (
    <section id="forward-deployed-engineers" className="py-32 md:py-40 bg-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeUp} className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-neon-cyan shrink-0" />
            <span className="text-neon-cyan text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em]">
              Forward Deployed Engineering
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-[1.05] mb-8">
            We don&apos;t hand you a login.
            <br />
            <span className="text-neon-cyan">We send engineers.</span>
          </h2>
          <p className="text-cool-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            Velociti&apos;s Forward Deployed Engineers (FDEs) embed with your team for weeks to months, untangle your real-world systems, and ship production AI that runs on your data, inside your stack.
          </p>
        </motion.div>

        {/* What an FDE is / the mess they handle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-28 md:mb-36">
          <motion.div {...fadeUp} className="lg:col-span-6">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-white mb-8">
              What is a Forward Deployed Engineer?
            </h3>
            <div className="space-y-6 text-cool-gray-400 font-light text-base md:text-lg leading-relaxed">
              <p>
                A senior engineer who parachutes into your environment and makes AI actually work there. Part software engineer, part solutions architect, part product manager, part consultant.
              </p>
              <p className="text-white text-xl md:text-2xl font-display font-normal leading-snug border-l border-neon-cyan pl-6 py-1">
                The difference is simple: FDEs build. Not slide decks. Production systems.
              </p>
              <p>
                They wire up systems, write production code, debug integrations, build dashboards, and create the features your business needs. Because companies no longer want a basic chatbot. They want AI agents plugged safely into their CRM, databases, billing, and documents, and someone has to integrate all of it on-site.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-6 lg:pt-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-cool-gray-500 mb-6">
              Built for the spaghetti
            </div>
            <ol className="border-t border-white/10">
              {spaghetti.map((item, index) => (
                <li key={item} className="flex items-baseline gap-6 py-5 border-b border-white/10">
                  <span className="font-mono text-xs text-cool-gray-500 w-6 shrink-0">0{index + 1}</span>
                  <span className="text-base md:text-lg text-cool-gray-300 font-light">{item}</span>
                </li>
              ))}
              <li className="flex items-baseline gap-6 py-5 border-b border-neon-cyan/40">
                <ArrowRight className="w-4 h-4 text-neon-cyan shrink-0 translate-y-0.5" />
                <span className="text-base md:text-lg text-white">Untangled, integrated, and running on AI.</span>
              </li>
            </ol>
          </motion.div>
        </div>

        {/* Engagement phases */}
        <motion.div {...fadeUp} className="mb-28 md:mb-36">
          <div className="text-[11px] uppercase tracking-[0.25em] text-cool-gray-500 mb-10">
            How an engagement works
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className={`pt-10 pb-4 md:pb-0 md:pr-10 ${index > 0 ? "md:pl-10 md:border-l border-white/10" : ""}`}
              >
                <div className="font-display text-5xl md:text-6xl font-light text-neon-cyan mb-8 tracking-tight">
                  {phase.step}
                </div>
                <h4 className="text-xl md:text-2xl font-display font-medium text-white mb-4">{phase.title}</h4>
                <p className="text-cool-gray-400 text-base font-light leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* In short + CTA */}
        <motion.div {...fadeUp}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 mb-16">
            {roles.map(({ who, what, highlight }, index) => (
              <div
                key={who}
                className={`py-8 md:pr-10 ${index > 0 ? "border-t md:border-t-0 md:pl-10 md:border-l border-white/10" : ""}`}
              >
                <p className={`text-xl md:text-2xl font-display leading-snug ${highlight ? "text-white" : "text-cool-gray-500"}`}>
                  <span className={highlight ? "text-neon-cyan" : "text-cool-gray-300"}>{who}</span> {what}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-white text-2xl md:text-4xl font-display font-medium tracking-tight max-w-2xl leading-tight">
              Embed a Velociti FDE with your team and go from messy systems to AI-native operations.
            </p>
            <Link
              href="https://calendly.com/manojkurapati96/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-base sm:text-lg hover:bg-neon-cyan transition-colors duration-300"
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
