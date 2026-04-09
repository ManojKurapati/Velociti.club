"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export function GlobalCtaBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-neon-violet to-neon-cyan text-white text-sm font-medium py-2 px-4 relative z-[60] flex justify-center items-center gap-4">
      <span>Get your free 2026 Enterprise AI Readiness Diagnostic.</span>
      <Link href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline underline-offset-4 decoration-white/50">
        Start now <ArrowRight className="w-3 h-3" />
      </Link>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-black/20 p-1 rounded-md transition-colors"
      >
        <X className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
