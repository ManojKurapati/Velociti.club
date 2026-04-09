"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useScrollReveal } from "@/hooks/useScrollAnimation";

export function CtaSection() {
  const container = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  useScrollReveal(container);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate network request perfectly suited for Formspree/Resend integration later
    setTimeout(() => {
      console.log("Form Submitted Successfully:", { email });
      setStatus("success");
      setEmail("");
      
      // Auto reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={container} className="py-40 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan/5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-neon-cyan/20 blur-[150px] rounded-full z-[-1] opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight gs-reveal opacity-0">
          Ready to <span className="text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">AI-fy</span> Your Enterprise?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light gs-reveal opacity-0">
          Join the organizations already operating at AI velocity. Schedule a strategy session with our architects.
        </p>
        
        <div className="gs-reveal opacity-0">
          {status === "success" ? (
            <div className="glass-card p-6 rounded-full flex items-center justify-center gap-3 max-w-md mx-auto border-neon-cyan/50 text-neon-cyan animate-in fade-in zoom-in duration-300">
              <CheckCircle2 size={24} />
              <span className="font-medium">Request received. We will be in touch shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-2 rounded-full flex flex-col sm:flex-row max-w-lg mx-auto relative hover:-translate-y-1 transition-transform duration-300">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none px-6 py-4 flex-1 text-white placeholder-gray-500 w-full rounded-full disabled:opacity-50"
                required
                disabled={status === "loading"}
                aria-label="Email address"
              />
              <MagneticButton 
                type="submit" 
                className="bg-white text-black font-semibold rounded-full px-8 py-3 mt-2 sm:mt-0 sm:ml-2 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>Processing <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </MagneticButton>
            </form>
          )}
        </div>
        <p className="mt-6 text-sm text-gray-500 gs-reveal opacity-0">No commitment required. Strictly confidential.</p>
      </div>
    </section>
  );
}
