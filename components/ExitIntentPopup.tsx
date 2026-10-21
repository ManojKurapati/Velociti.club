"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasTriggered) {
        setShow(true);
        setHasTriggered(true);
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasTriggered]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-obsidian border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setShow(false)}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-cool-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-3xl font-display font-medium text-white tracking-tight mb-3">
          Before you go
        </h3>
        <p className="text-cool-gray-400 mb-8">
          Get our 2026 playbook on how enterprises are putting AI agents into production, sent to your inbox.
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
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40"
            />
            <button type="submit" className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-cool-gray-200 transition-colors">
              Email me the playbook
            </button>
          </form>
        <p className="text-center text-xs text-cool-gray-600 mt-4">One email. No spam.</p>
      </div>
    </div>
  );
}
