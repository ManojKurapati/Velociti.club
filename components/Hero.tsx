"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GooeyText } from "./ui/gooey-text-morphing";

const MORPHING_WORDS = [
  "Think Different",
  "Think Big",
  "Think Velociti",
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="sr-only">Think Different. Think Big. Think Velociti.</h1>
          <div aria-hidden="true" className="relative h-[3rem] sm:h-[4rem] md:h-[5.5rem] lg:h-[9.5rem] -ml-1">
            <GooeyText
              texts={MORPHING_WORDS}
              morphTime={1.5}
              cooldownTime={1.25}
              className="h-full"
              textClassName="font-display font-semibold whitespace-nowrap text-left text-brass text-[2.3rem] sm:text-5xl md:text-7xl lg:text-9xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-t border-white/10 pt-8 sm:pt-10"
        >
          <p className="lg:col-span-7 text-lg sm:text-xl md:text-2xl text-cool-gray-300 font-light leading-relaxed max-w-2xl">
            We embed engineers with your team to deploy secure AI agents across sales, support, and operations, built on the systems and data you already run.
          </p>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="https://calendly.com/manojkurapati96/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black px-7 py-3.5 rounded-full font-medium text-base hover:bg-cool-gray-200 transition-colors"
            >
              Book a workflow audit
            </Link>
            <Link
              href="/#case-studies"
              className="inline-flex items-center justify-center text-white px-7 py-3.5 rounded-full font-medium text-base border border-white/15 hover:border-white/40 transition-colors"
            >
              See case studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
