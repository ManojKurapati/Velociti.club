"use client";

import { CheckCircle2 } from "lucide-react";

export function SplitLayout() {
  return (
    <section className="min-h-screen bg-black flex flex-col lg:flex-row border-y border-white/5 relative z-10" id="startups">
      <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-24 xl:p-32 flex justify-center flex-col border-b lg:border-b-0 lg:border-r border-white/5 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <h3 className="text-sm font-bold uppercase tracking-widest text-neon-cyan mb-6">For Startups</h3>
        <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">Scale rapidly. Raise your Series A on automation metrics.</h2>
        
        <p className="text-cool-gray-400 mb-12 max-w-lg leading-relaxed">
          We architect AI infrastructure that replaces the need for massive early-team bloat. Achieve an enterprise-grade technical moat to secure elite venture funding. 
        </p>

        <ul className="space-y-6 max-w-lg">
          <li className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-neon-cyan shrink-0" />
            <div>
              <strong className="text-white block mb-1">Pre-built modular infrastructure</strong>
              <span className="text-cool-gray-500 text-sm">Skip formatting LLM logic entirely with our proven RAG pipelines.</span>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-neon-cyan shrink-0" />
            <div>
              <strong className="text-white block mb-1">Investor-Ready Codebase</strong>
              <span className="text-cool-gray-500 text-sm">We provide architecture docs ready for heavy technical due diligence.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex w-full lg:w-1/2 p-8 sm:p-12 lg:p-24 xl:p-32 justify-center flex-col relative group">
        <div className="absolute inset-0 bg-gradient-to-bl from-neon-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <h3 className="text-sm font-bold uppercase tracking-widest text-neon-violet mb-6">For Enterprises</h3>
        <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">Crush legacy blockers. Deploy autonomous systems instantly.</h2>
        
        <p className="text-cool-gray-400 mb-12 max-w-lg leading-relaxed">
          Sidestep 18-month internal development lifecycles. We inject scalable, compliant AI agents deep into your operational stack.
        </p>

        <ul className="space-y-6 max-w-lg">
          <li className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-neon-violet shrink-0" />
            <div>
              <strong className="text-white block mb-1">Compliance native architecture</strong>
              <span className="text-cool-gray-500 text-sm">Built from day one for strict SOC2, HIPAA, and custom infosec.</span>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <CheckCircle2 className="w-6 h-6 text-neon-violet shrink-0" />
            <div>
              <strong className="text-white block mb-1">Guaranteed measurable cost reduction</strong>
              <span className="text-cool-gray-500 text-sm">Replacing vast manual execution networks with deterministic logic.</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
