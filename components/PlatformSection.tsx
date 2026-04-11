"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link2, Cpu, ShieldCheck } from "lucide-react";

export function PlatformSection() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.platform-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.platform-header',
          start: "top 80%",
        }
      });

      gsap.from('.platform-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="platform" ref={container} className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 platform-header">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            The <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Intelligent</span> Orchestration
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We don't just provide API keys. We build neural pathways across your legacy systems, turning static workflows into autonomous, learning engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl card-hover interactive floating platform-card">
            <div className="w-14 h-14 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center mb-6 text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow">
              <Link2 size={24} />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Rapid Integration</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Securely connect AI agents to your existing ERP, CRM, and custom databases in days, not quarters. No ripping and replacing required.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-3xl card-hover interactive floating-delayed platform-card">
            <div className="w-14 h-14 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center mb-6 text-neon-pink hover:shadow-[0_0_20px_rgba(255,0,170,0.5)] transition-shadow">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Autonomous Execution</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deploy specialized AI agents that execute complex, multi-step processes autonomously. They reason, take action, and report back.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl card-hover interactive floating platform-card">
            <div className="w-14 h-14 rounded-full bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center mb-6 text-neon-purple hover:shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-shadow">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">Enterprise Governance</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bank-grade security, detailed audit logs, and human-in-the-loop approvals. Full control and visibility over every AI decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
