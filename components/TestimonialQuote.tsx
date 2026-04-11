"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricLabel: string;
}

export function TestimonialQuote({ quote, author, role, metric, metricLabel }: TestimonialProps) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="absolute -top-10 -left-10 text-neon-violet/10">
          <Quote size={120} />
        </div>
        
        <div className="flex-1 relative z-10">
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6">
            "{quote}"
          </p>
          <div>
            <h4 className="font-semibold text-white text-lg">{author}</h4>
            <p className="text-cool-gray-400 text-sm">{role}</p>
          </div>
        </div>

        <div className="md:w-px h-px md:h-32 w-full bg-gradient-to-b from-transparent via-white/20 to-transparent flex-shrink-0" />

        <div className="flex flex-col items-center md:items-start flex-shrink-0 min-w-[200px]">
          <span className="text-5xl md:text-6xl font-display font-medium text-neon-cyan tracking-tighter">
            {metric}
          </span>
          <span className="text-sm text-cool-gray-400 uppercase tracking-widest mt-2">{metricLabel}</span>
        </div>
      </motion.div>
    </div>
  );
}
