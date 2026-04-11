"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          The next era of enterprise
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[1.05] mb-8 max-w-6xl"
        >
          The Autonomous Loop<span className="text-neon-cyan align-super text-3xl lg:text-5xl">&trade;</span>
          <br className="hidden md:block" />
          Intelligence, Autonomy, <span className="italic font-light text-cool-gray-400">Execution.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-cool-gray-400 max-w-3xl mb-16 font-light leading-relaxed"
        >
          We deploy enterprise-grade autonomous systems that drive market leadership.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="https://calendly.com/manojkurapati96/30min" target="_blank" rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-cyan transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            Start Your Velocity Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-md">
            <Play className="w-5 h-5" />
            Watch Showreel
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}
