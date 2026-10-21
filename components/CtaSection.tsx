"use client";

import Link from "next/link";

export function CtaSection() {
  return (
    <section id="contact" className="py-28 md:py-40 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-8">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-medium text-white mb-8">
            Find out where AI pays off in your operations
          </h2>
          <p className="text-lg md:text-xl text-cool-gray-400 max-w-2xl font-light leading-relaxed">
            In a 30-minute workflow audit, we map your bottlenecks and show you which ones an AI agent can take over first. No commitment, and everything you share stays confidential.
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            href="https://calendly.com/manojkurapati96/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-cool-gray-200 transition-colors"
          >
            Book a workflow audit
          </Link>
        </div>
      </div>
    </section>
  );
}
