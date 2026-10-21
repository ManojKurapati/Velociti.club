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
    <div className="fixed bottom-24 right-6 z-40 animate-in fade-in slide-in-from-bottom-4">
      <MagneticButton 
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-black border border-white/15 text-white flex items-center justify-center hover:border-white/40 transition-colors"
      >
        <span className="sr-only">Back to top</span>
        <ArrowUp size={20} className="stroke-2" />
      </MagneticButton>
    </div>
  );
}
