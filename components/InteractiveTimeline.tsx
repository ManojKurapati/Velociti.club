"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    phase: "01",
    title: "Diagnostic & Strategy",
    description: "Deep-dive analysis of your legacy workflows. Identifying the highest leverage points for AI automation.",
    caseStudy: "Identified $2.4M in potential savings for a Series D logistics firm within 48 hours."
  },
  {
    phase: "02",
    title: "Autonomous Architecture",
    description: "Designing the neural backbone. Connecting secure LLMs to your private data lakes via RAG.",
    caseStudy: "Architected a HIPAA-compliant voice routing system for a 500+ staff medical network."
  },
  {
    phase: "03",
    title: "Deployment & Scaling",
    description: "Rolling out the agents. Transitioning from human-in-the-loop to full autonomous execution.",
    caseStudy: "Deployed 15 concurrent sales agents handling 10k+ outbound calls daily, 24/7."
  }
];

export function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-obsidian relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 hover:scale-105 transition-transform duration-500">
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">
            The Integration Path
          </h2>
          <p className="text-cool-gray-400 max-w-2xl mx-auto">
            From legacy gridlock to autonomous execution in 90 days.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-neon-cyan to-neon-violet -translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          {timelineData.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-24 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-neon-cyan shadow-[0_0_15px_rgba(0,240,255,1)] z-10" />

              {/* Content */}
              <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                <div className="text-neon-cyan font-bold tracking-widest text-sm mb-2">{item.phase}</div>
                <h3 className="text-2xl font-display text-white font-medium mb-4">{item.title}</h3>
                <p className="text-cool-gray-400 mb-6">{item.description}</p>
                
                {/* Hover Card / Mini Case Study */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group cursor-pointer w-full max-w-md backdrop-blur-md">
                  <div className="text-xs text-neon-violet uppercase tracking-wider mb-2 font-semibold">Proof of Concept</div>
                  <p className="text-sm text-cool-gray-300 group-hover:text-white transition-colors">{item.caseStudy}</p>
                </div>
              </div>

              {/* Empty placeholder for grid layout on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
