"use client";

import { useEffect, useState } from "react";
import { Zap, X } from "lucide-react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setShow(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-obsidian border border-white/10 rounded-3xl p-8 shadow-2xl shadow-neon-cyan/20 animate-in zoom-in-95 duration-500">
        <button 
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-cool-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="w-12 h-12 bg-neon-cyan/10 rounded-2xl flex items-center justify-center mb-6">
          <Zap className="w-6 h-6 text-neon-cyan" />
        </div>
        
        <h3 className="text-3xl font-display font-medium text-white tracking-tight mb-3">
          Before you go...
        </h3>
        <p className="text-cool-gray-400 mb-8">
          The autonomous enterprise is arriving faster than you think. Download our exclusive 2026 Playbook and see exactly how competitors are deploying AI agents.
        </p>
        
          <form 
            className="flex flex-col gap-3" 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              formData.append("Form", "Exit Intent");
              try {
                await fetch("https://script.google.com/macros/s/AKfycbwSDNTxl5vXT52KCx5Jh6xFRcYkvrAK9nZbCE6VoZ5Y2S_TapBvXTd9bkgmuAd0pSAcNA/exec", {
                  method: "POST",
                  body: formData,
                  mode: "no-cors"
                });
                setShow(false);
              } catch (err) {
                console.error(err);
                setShow(false);
              }
            }}
          >
            <input 
              name="email"
              type="email" 
              required
              placeholder="Work email address" 
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50"
            />
            <button type="submit" className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
              Send me the Playbook
            </button>
          </form>
        <p className="text-center text-xs text-cool-gray-600 mt-4">We respect your inbox. No spam ever.</p>
      </div>
    </div>
  );
}
