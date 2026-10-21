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
    <div className="fixed bottom-[5.5rem] right-6 z-40 animate-in fade-in slide-in-from-bottom-4">
      <MagneticButton 
        onClick={scrollToTop}
        className="w-10 h-10 rounded-md bg-surface border border-line text-cool-gray-400 flex items-center justify-center hover:text-white hover:bg-raised transition-colors"
      >
        <span className="sr-only">Back to top</span>
        <ArrowUp size={16} className="stroke-2" />
      </MagneticButton>
    </div>
  );
}
