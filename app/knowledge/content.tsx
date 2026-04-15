"use client";

import { useRef, useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "@/components/MagneticButton";
import { Footer } from "@/components/Footer";
import { FileText, Download, ArrowRight, Loader2, CheckCircle2, Hexagon, Layers, Cpu, Shield } from "lucide-react";
import gsap from "gsap";
import { initGSAP } from "@/utils/gsapConfig";

export function KnowledgeContent() {
  const container = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  
  useScrollReveal(container);

  useEffect(() => {
    initGSAP();
    const ctx = gsap.context(() => {
      const wrapper = document.querySelector('.insights-wrapper') as HTMLElement;
      if (wrapper && window.matchMedia("(min-width: 1024px)").matches) {
        gsap.to(wrapper, {
          x: () => -(wrapper.scrollWidth - window.innerWidth + 100),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top 20%",
            end: () => `+=${wrapper.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const filters = ["All", "Voice AI", "RAG & Knowledge", "Workflow", "Insights", "Security"];
  
  const articles = [
    { title: "Building Context-Aware Voice Agents", excerpt: "How to safely scale generative voice models without hallucinations.", category: "Voice AI", time: "5 min read", icon: Hexagon },
    { title: "The RAG Security Ultimatum", excerpt: "Ensuring zero-leakage when querying highly proprietary contract stores.", category: "Security", time: "8 min read", icon: Shield },
    { title: "Scaling Workflows with Agents", excerpt: "Replacing fragile RPA pipelines with autonomous deterministic AI tasks.", category: "Workflow", time: "6 min read", icon: Layers },
    { title: "Future of Enterprise Inference", excerpt: "Cost modeling API calls vs serving open-weights internally.", category: "Insights", time: "12 min read", icon: Cpu },
  ];

  const downloads = [
    { title: "2026 Enterprise AI Readiness Checklist", type: "PDF" },
    { title: "The Compliance Guide to Secure LLMs", type: "eBook" },
    { title: "Velociti Workflows Technical Blueprint", type: "Whitepaper" }
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden relative flex flex-col pt-20">
      <div ref={container} className="flex-1">
        
        {/* Hero */}
        <section className="relative pt-20 pb-20 px-6 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[400px] bg-neon-purple/20 blur-[150px] rounded-full z-[-1] opacity-60 pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 w-full text-white">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full glass border border-neon-purple/30 text-xs font-semibold text-neon-purple mb-6 uppercase tracking-[0.2em] gs-reveal opacity-0">
               Insights & Research
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.05] gs-reveal opacity-0">
              The Velociti <span className="gradient-text block md:inline">Knowledge Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto gs-reveal opacity-0">
              Deep insights, practical guides, and real enterprise AI success stories shaping the autonomous future.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-y border-white/10 py-6 mb-20 bg-white/[0.01] gs-reveal opacity-0">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 items-center justify-center cursor-default">
            {filters.map(f => (
              <span key={f} className={`px-4 py-2 rounded-full border ${f === "All" ? "border-neon-cyan text-neon-cyan bg-neon-cyan/5" : "border-gray-800 text-gray-500 hover:text-white hover:border-gray-500"} text-sm transition-colors interactive`}>{f}</span>
            ))}
          </div>
        </section>

        {/* Featured Case Studies (Horizontal) */}
        <section ref={horizontalRef} className="py-20 relative overflow-hidden hidden lg:block">
          <div className="px-6 mb-12 max-w-7xl mx-auto">
            <h2 className="font-display text-4xl font-bold gs-reveal opacity-0">Latest Case Studies</h2>
          </div>
          <div className="insights-wrapper flex gap-8 px-6 w-max">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="glass-card w-[600px] aspect-[16/9] rounded-3xl border-neon-cyan/20 p-10 flex flex-col justify-end relative overflow-hidden group">
                 {/* Placeholder graphic abstraction */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                 <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                    <Hexagon size={200} />
                 </div>
                 
                 <div className="relative z-20">
                    <span className="text-neon-cyan font-bold tracking-widest text-xs uppercase block mb-2">Use Case {i}</span>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">Global Logistics Autonomy Transformation</h3>
                    <p className="text-gray-400 max-w-md">Reducing operational delay by 80% using highly-coupled deterministic agent networks.</p>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Masonry Featured Grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold gs-reveal opacity-0">Engineering Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border-white/5 hover:border-white/20 transition-colors card-hover interactive group gs-reveal opacity-0">
                <div className="flex justify-between items-start mb-16">
                   <article.icon className="w-10 h-10 text-gray-500 group-hover:text-neon-purple transition-colors" />
                   <span className="text-xs font-semibold uppercase tracking-wider text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded-full">{article.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">{article.title}</h3>
                <p className="text-gray-400 mb-6">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.time}</span>
                  <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                    Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5 mt-10">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold gs-reveal opacity-0">Downloadable Assets</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {downloads.map((dl, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border-neon-cyan/10 flex flex-col justify-between items-start gap-8 hover:bg-white/[0.04] transition-colors interactive gs-reveal opacity-0" style={{ transitionDelay: `${i * 100}ms` }}>
                 <div>
                    <span className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2 block">{dl.type}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{dl.title}</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-neon-cyan hover:text-black hover:border-neon-cyan transition-colors cursor-pointer card-hover">
                   <Download size={16} />
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Form */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center gs-reveal opacity-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan mx-auto flex items-center justify-center mb-8 rotate-3">
              <FileText className="text-black w-8 h-8 -rotate-3" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Stay at the frontier.</h2>
            <p className="text-gray-400 mb-10 text-lg">Join 10,000+ enterprise leaders receiving our weekly insights on AI process automation and infrastructure.</p>
            
            {status === "success" ? (
              <div className="glass-card p-6 rounded-full flex items-center justify-center gap-3 max-w-md mx-auto border-neon-cyan/50 text-neon-cyan animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={24} />
                <span className="font-medium">Subscribed successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="glass-card p-2 rounded-full flex flex-col sm:flex-row max-w-md mx-auto relative hover:-translate-y-1 transition-transform duration-300">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none outline-none px-6 py-4 flex-1 text-white placeholder-gray-500 w-full rounded-full disabled:opacity-50"
                  required
                  disabled={status === "loading"}
                />
                <MagneticButton 
                  type="submit" 
                  className="bg-white text-black font-semibold rounded-full px-6 py-3 mt-2 sm:mt-0 sm:ml-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : "Subscribe"}
                </MagneticButton>
              </form>
            )}
            <p className="mt-4 text-xs text-gray-600">Unsubscribe anytime. We respect your inbox.</p>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
