"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4">
      <MagneticButton 
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-black border-2 border-neon-cyan text-neon-cyan flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-black"
      >
        <span className="sr-only">Back to top</span>
        <ArrowUp size={20} className="stroke-[3]" />
      </MagneticButton>
    </div>
  );
}
