"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Lock } from "lucide-react";

export function ResultsSection() {
  const container = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate text content
      gsap.from('.stat-reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.stat-reveal',
          start: "top 80%",
        }
      });

      // Animate counters
      const targets = [10, 65, 90];
      const obj = { val0: 0, val1: 0, val2: 0 };

      gsap.to(obj, {
        val0: targets[0],
        val1: targets[1],
        val2: targets[2],
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".count-card-container",
          start: "top 80%",
          once: true
        },
        onUpdate: () => {
          setCounts([Math.round(obj.val0), Math.round(obj.val1), Math.round(obj.val2)]);
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={container} className="py-32 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="stat-reveal">
            <span className="text-neon-cyan font-bold tracking-widest text-sm uppercase block mb-4">The Impact</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">Results That <br/>Matter.</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              When you move from manual processing to autonomous execution, the numbers speak for themselves. This is the ROI of operating at AI velocity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 count-card-container">
            <div className="glass-card p-6 rounded-2xl border-t-2 border-t-neon-cyan/50 hover:bg-white/[0.02] transition-colors count-card">
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{counts[0]}x</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Faster Deployment</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl border-t-2 border-t-neon-pink/50 hover:bg-white/[0.02] transition-colors count-card">
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{counts[1]}%</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Cost Reduction</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-t-2 border-t-neon-purple/50 hover:bg-white/[0.02] transition-colors count-card">
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{counts[2]}%</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">Process Automation</div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-t-2 border-t-white/30 hover:bg-white/[0.02] transition-colors count-card flex flex-col justify-center">
              <div className="font-display text-2xl font-bold text-white mb-2">Enterprise</div>
              <div className="text-sm font-medium text-neon-cyan uppercase tracking-wider flex items-center gap-2">
                <Lock size={16} /> Grade Security
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
