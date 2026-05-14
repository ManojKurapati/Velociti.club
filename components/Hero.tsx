"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { VideoModal } from "./VideoModal";
import { GooeyText } from "./ui/gooey-text-morphing";

const MORPHING_WORDS = [
  "Automate",
  "Scale",
  "Transform",
  "Accelerate",
  "Optimize",
];

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          autoPlay 
          loop 
          muted 
          playsInline 
          src="/showreel.mp4" 
        />
        {/* Core glowing orb fallback/overlay */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        {/* Velocity Grid Overlay */}
        <div className="absolute inset-0 grid-bg opacity-30 animate-scroll pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-6 sm:mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          Enterprise-Grade Infrastructure
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 sm:mb-8 max-w-6xl"
        >
          <h1 className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[1.1]">
            Enterprise AI Systems That
          </h1>
          <div className="relative h-[2.75rem] sm:h-[3.5rem] md:h-[5rem] lg:h-[8rem] mt-1 sm:mt-1 md:mt-2 lg:mt-2">
            <GooeyText
              texts={MORPHING_WORDS}
              morphTime={1.5}
              cooldownTime={0.5}
              className="h-full"
              textClassName="font-display font-medium tracking-tighter text-neon-cyan"
            />
          </div>
          <p className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[1.1] mt-1 sm:mt-1 md:mt-2 lg:mt-2">
            Real Operations.
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl text-cool-gray-400 max-w-3xl mb-10 sm:mb-16 font-light leading-relaxed px-2 sm:px-0"
        >
          We deploy secure AI agents across sales, support, operations, and workflows using your existing systems and data.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-neon-cyan transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Book an AI Workflow Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/#case-studies" className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-base sm:text-lg hover:bg-white/10 transition-colors backdrop-blur-md">
            View Case Studies
          </Link>
        </motion.div>
        
      </div>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
