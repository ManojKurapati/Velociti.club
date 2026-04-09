"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Abstract neural loop render representation via CSS */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full blur-[2px] opacity-30 animate-[spin_40s_linear_infinite]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-cyan/20 rounded-full blur-[1px] opacity-40 animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-neon-violet/30 rounded-full blur-[4px] opacity-50 animate-[spin_20s_linear_infinite]" />
        
        {/* Core glowing orb */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-[80px] opacity-20" />
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
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white tracking-tighter leading-[1.1] mb-6 max-w-5xl"
        >
          The Autonomous Loop<span className="text-neon-cyan align-super text-2xl lg:text-4xl">&trade;</span>
          <br className="hidden md:block" />
          Intelligence, Autonomy, <span className="italic font-light text-cool-gray-400">Execution.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-cool-gray-400 max-w-2xl mb-12 font-medium leading-relaxed"
        >
          We don&apos;t build AI. We deploy enterprise-grade autonomous systems that win funding and market leadership.
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
