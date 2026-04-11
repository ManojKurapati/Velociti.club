"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export function GlobalCtaBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || !hasScrolled) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-3xl bg-gradient-to-r from-neon-violet to-neon-cyan text-white text-sm font-medium py-3 px-6 rounded-full shadow-[0_10px_30px_rgba(0,240,255,0.3)] flex justify-center items-center gap-2 md:gap-4 animate-in slide-in-from-bottom-8">
      <span className="hidden sm:inline">Get your free 2026 Enterprise AI Readiness Diagnostic.</span>
      <span className="sm:hidden">Get your free AI Diagnostic.</span>
      <Link href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-white text-black px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors ml-2 font-bold whitespace-nowrap">
        Start now <ArrowRight className="w-3 h-3" />
      </Link>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-black transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
