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
      <div className="relative w-full max-w-lg bg-surface border border-line rounded-lg p-6 sm:p-8 shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setShow(false)}
          aria-label="Close"
          className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-raised transition-colors text-cool-gray-400 hover:text-white"
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
              className="w-full h-10 bg-canvas border border-line rounded-md px-3 text-sm text-white placeholder:text-cool-gray-500 focus:outline-none focus:border-line-strong focus:ring-2 focus:ring-cool-gray-700"
            />
            <button type="submit" className="w-full h-10 bg-white text-black text-sm font-medium rounded-md hover:bg-cool-gray-200 transition-colors">
              Email me the playbook
            </button>
          </form>
        <p className="text-center text-xs text-cool-gray-600 mt-4">One email. No spam.</p>
      </div>
    </div>
  );
}
