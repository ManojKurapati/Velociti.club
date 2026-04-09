"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Loader2 } from "lucide-react";

export function JourneySection() {
  const containerWrapper = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const panels = gsap.utils.toArray('.journey-panel');
      const track = trackRef.current;
      if (!track) return;

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerWrapper.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.2, max: 0.8 },
            delay: 0.1,
            ease: "power1.inOut"
          },
          end: () => "+=" + scrollWidth,
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Desktop Horizontal Scroll */}
      <section id="journey" ref={containerWrapper} className="relative z-10 bg-black overflow-hidden h-screen hidden lg:block border-y border-white/5">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={trackRef} className="flex h-full w-[400vw]">
            
            {/* Intro Panel */}
            <div className="journey-panel w-screen h-full flex items-center justify-center px-6 relative shrink-0">
              <div className="max-w-4xl mx-auto text-left w-full pl-20 relative z-10">
                <h2 className="font-display text-7xl font-bold mb-6 text-white/20 leading-tight">
                  The <br/>
                  <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Transformation</span> <br/>
                  Journey
                </h2>
                <p className="text-2xl text-gray-400 font-light max-w-lg">
                  Four phases to fundamentally upgrade how your enterprise operates. Scroll to explore <span className="text-neon-cyan ml-2 animate-pulse inline-block">→</span>
                </p>
              </div>
              <div className="absolute right-0 top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>
            </div>

            {/* Phase 1 */}
            <div className="journey-panel w-screen h-full flex items-center justify-center px-6 relative shrink-0">
              <div className="max-w-5xl mx-auto flex items-center justify-center gap-16 w-full">
                <div className="w-1/2 text-right">
                  <span className="text-neon-cyan font-bold tracking-widest text-sm uppercase block mb-2">Phase 01</span>
                  <h3 className="font-display text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">Strategy & Assessment</h3>
                  <p className="text-gray-400 text-lg">We map your operational nervous system. Identifying high-friction processes, data silos, and exact insertion points where AI will deliver immediate alpha.</p>
                </div>
                <div className="w-1/2">
                  <div className="glass-card p-10 rounded-3xl h-80 flex flex-col justify-between border-neon-cyan/20">
                    <div className="text-3xl font-display font-light text-white/50">&quot;Where do we start?&quot;</div>
                    <div className="space-y-4">
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-neon-cyan shadow-[0_0_10px_#00f0ff]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 uppercase tracking-wider font-bold">
                        <span>Current: Manual</span>
                        <span className="text-neon-cyan">Target: Autonomous</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="journey-panel w-screen h-full flex items-center justify-center px-6 relative shrink-0">
              <div className="max-w-5xl mx-auto flex items-center justify-center gap-16 w-full flex-row-reverse">
                <div className="w-1/2 text-left">
                  <span className="text-neon-pink font-bold tracking-widest text-sm uppercase block mb-2">Phase 02</span>
                  <h3 className="font-display text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,0,170,0.3)]">Secure Integration</h3>
                  <p className="text-gray-400 text-lg">Deploying custom-trained agents into your secure environment. Integrating securely with legacy APIs, cloud infrastructure, and internal databases.</p>
                </div>
                <div className="w-1/2">
                  <div className="glass-card p-10 rounded-3xl h-80 flex items-center justify-center relative overflow-hidden border-neon-pink/20">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-pink/10 via-transparent to-transparent opacity-50"></div>
                    <div className="w-32 h-32 border border-neon-pink/50 rounded-full flex items-center justify-center relative">
                      <div className="absolute w-full h-full border-t-2 border-neon-pink rounded-full animate-spin"></div>
                      <Loader2 className="w-10 h-10 text-neon-pink animate-[spin_3s_linear_infinite]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 & 4 */}
            <div className="journey-panel w-screen h-full flex items-center justify-center px-6 relative shrink-0">
               <div className="max-w-5xl mx-auto flex items-center justify-center gap-16 w-full">
                <div className="w-1/2 text-right">
                  <span className="text-neon-purple font-bold tracking-widest text-sm uppercase block mb-2">Phase 03 & 04</span>
                  <h3 className="font-display text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]">Autonomous Transformation</h3>
                  <p className="text-gray-400 text-lg">Agents take over repetitive tasks. Workflows run 24/7. Continuous optimization algorithms monitor outputs to make your enterprise faster and smarter every single day.</p>
                </div>
                <div className="w-1/2">
                  <div className="glass-card p-10 rounded-3xl h-80 relative overflow-hidden group border-neon-purple/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="flex flex-col h-full justify-between relative z-10">
                      <div className="font-display text-2xl font-bold">Enterprise Velocity: <span className="text-neon-cyan">Maximized</span></div>
                      <div className="flex items-end gap-2 h-32 w-full">
                        <div className="w-1/5 bg-white/10 rounded-t-sm h-1/4 transition-all duration-1000 group-hover:h-2/4"></div>
                        <div className="w-1/5 bg-white/20 rounded-t-sm h-2/4 transition-all duration-1000 group-hover:h-3/4"></div>
                        <div className="w-1/5 bg-neon-purple/40 rounded-t-sm h-3/4 transition-all duration-1000 group-hover:h-4/5"></div>
                        <div className="w-1/5 bg-neon-cyan/60 rounded-t-sm h-4/5 transition-all duration-1000 group-hover:h-[90%]"></div>
                        <div className="w-1/5 bg-neon-cyan rounded-t-sm h-full shadow-[0_0_20px_#00f0ff] relative group-hover:h-[110%] transition-all duration-1000">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-neon-cyan">10x</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile Vertical Scale timeline */}
      <section className="py-20 lg:hidden px-6 bg-black z-10 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">The Transformation Journey</h2>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-cyan bg-black text-neon-cyan shadow-[0_0_15px_#00f0ff] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
              <h3 className="font-display font-bold text-xl mb-2 text-white">Strategy & Assessment</h3>
              <p className="text-gray-400 text-sm">Mapping your operational nervous system to identify exact AI insertion points.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-pink bg-black text-neon-pink shadow-[0_0_15px_#ff00aa] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
              <h3 className="font-display font-bold text-xl mb-2 text-white">Integration & Deployment</h3>
              <p className="text-gray-400 text-sm">Securely deploying custom-trained agents into your existing infrastructure.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neon-purple bg-black text-neon-purple shadow-[0_0_15px_#8a2be2] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
              <h3 className="font-display font-bold text-xl mb-2 text-white">Autonomous Operations</h3>
              <p className="text-gray-400 text-sm">Agents take over repetitive tasks. Workflows run 24/7 with oversight.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
