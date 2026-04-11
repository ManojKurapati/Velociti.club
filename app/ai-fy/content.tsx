"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/MagneticButton";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { PhoneCall, Lock, Settings, LayoutGrid, HeartPulse, ShoppingBag, Landmark, Home, Scale, Search, PenTool, BookOpen, Truck, Landmark as Finance, UserPlus, Zap } from "lucide-react";

export function AiFyContent() {
  const container = useRef<HTMLDivElement>(null);
  
  useScrollReveal(container);

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <div ref={container}>
        {/* Sub-hero section */}
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex items-center justify-center overflow-hidden">
          <div className="grid-bg absolute inset-0"></div>
          {/* subtle mesh background using pseudo elements or just absolute divs */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-neon-cyan/10 blur-[120px] rounded-full z-[-1] opacity-50 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 w-full text-white">
            <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter mb-6 leading-[1.05] gs-reveal opacity-0">
              <span className="gradient-text drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">AI-fy</span> Your Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto gs-reveal opacity-0">
              Seamlessly integrate Voice Agents, Secure RAG, and Intelligent Workflow Automation to turn legacy operations into autonomous, intelligent systems.
            </p>
          </div>
        </section>

        {/* Pillars Area */}
        <section className="py-20 relative z-10 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            
            {/* 1. Voice Agents */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3 gs-reveal opacity-0 sticky top-32">
                  <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mb-6 text-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    <PhoneCall size={28} />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)] text-white">Voice Agents</h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Deploy 24/7 autonomous, context-aware voice assistants capable of natural conversations across phone and web. 
                  </p>
                </div>
                
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                  {[{
                    title: "Healthcare", desc: "Patient triage, automated scheduling, and post-discharge checking.", icon: HeartPulse 
                  }, {
                    title: "Retail Support", desc: "Order tracking, returns processing, and tier-1 customer inquiries.", icon: ShoppingBag
                  }, {
                    title: "Finance", desc: "Secure onboarding walkthroughs and immediate account troubleshooting.", icon: Landmark
                  }, {
                    title: "Real Estate", desc: "Lead qualification and dynamic property viewing scheduling.", icon: Home
                  }].map((useCase, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border-neon-cyan/20 card-hover interactive gs-reveal opacity-0" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="flex items-center gap-3 mb-4">
                        <useCase.icon size={20} className="text-neon-cyan" />
                        <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Secure RAG */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                <div className="lg:w-1/3 gs-reveal opacity-0 sticky top-32 lg:pl-12">
                  <div className="w-16 h-16 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mb-6 text-neon-pink shadow-[0_0_20px_rgba(255,0,170,0.3)]">
                    <Lock size={28} />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,0,170,0.3)] text-white">Secure RAG</h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Chat with your proprietary data securely. Unlock institutional knowledge locked away in scattered documents.
                  </p>
                </div>
                
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                  {[{
                    title: "Legal", desc: "Rapid contract analysis, clause extraction, and due diligence checks.", icon: Scale 
                  }, {
                    title: "Healthcare", desc: "Synthesizing extensive medical histories and querying clinical trials.", icon: Search
                  }, {
                    title: "Engineering", desc: "Extracting schematics and troubleshooting steps from vast technical manuals.", icon: PenTool
                  }, {
                    title: "Academia", desc: "Synthesizing research data points across global literature databases.", icon: BookOpen
                  }].map((useCase, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border-neon-pink/20 card-hover interactive gs-reveal opacity-0" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="flex items-center gap-3 mb-4">
                        <useCase.icon size={20} className="text-neon-pink" />
                        <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Workflow Automation */}
            <div className="relative">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3 gs-reveal opacity-0 sticky top-32">
                  <div className="w-16 h-16 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center mb-6 text-neon-purple shadow-[0_0_20px_rgba(138,43,226,0.3)]">
                    <Settings size={28} />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-4 drop-shadow-[0_0_15px_rgba(138,43,226,0.3)] text-white">Intelligent Workflow</h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    AI agents orchestrating multi-step processes securely across your existing fragmented tools and APIs.
                  </p>
                </div>
                
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                  {[{
                    title: "Logistics", desc: "Inventory reconciliation, dynamic routing, and automated vendor checking.", icon: Truck 
                  }, {
                    title: "Finance", desc: "Automated invoice processing and reconciliation logic.", icon: Finance
                  }, {
                    title: "HR", desc: "End-to-end automated candidate onboarding flows.", icon: UserPlus
                  }, {
                    title: "Marketing", desc: "Programmatic scaling of personalized omni-channel campaigns.", icon: Zap
                  }].map((useCase, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border-neon-purple/20 card-hover interactive gs-reveal opacity-0" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="flex items-center gap-3 mb-4">
                        <useCase.icon size={20} className="text-neon-purple" />
                        <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
