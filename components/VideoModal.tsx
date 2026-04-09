"use client";

import { useEffect } from "react";
import { X, Play } from "lucide-react";
import gsap from "gsap";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(".modal-backdrop", { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(".modal-content", { scale: 0.8, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.2)" });
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="modal-backdrop absolute inset-0 bg-black/80 backdrop-blur-md interactive" 
        onClick={onClose}
      />
      <div className="modal-content relative w-full max-w-5xl aspect-video bg-black border border-white/10 rounded-2xl overflow-hidden glass shadow-[0_0_50px_rgba(0,240,255,0.15)] z-10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors interactive border border-white/10"
        >
          <X size={20} />
        </button>
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#030305] relative overflow-hidden">
          {/* Subtle neural background for the modal placeholder */}
          <div className="absolute inset-0 grid-bg opacity-30"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="w-20 h-20 rounded-full border border-neon-cyan/50 flex items-center justify-center animate-pulse text-neon-cyan bg-neon-cyan/5 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </span>
            <div className="text-center">
              <h3 className="font-display text-2xl text-white font-bold mb-2">Platform Demonstration</h3>
              <p className="text-gray-500 font-sans max-w-sm">
                [Video Embed Placeholder]
                <br /> Configure with YouTube or Vimeo iframe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
