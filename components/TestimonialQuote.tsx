"use client";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricLabel: string;
}

export function TestimonialQuote({ quote, author, role, metric, metricLabel }: TestimonialProps) {
  return (
    <section className="py-24 md:py-32 border-t border-white/5">
      <figure className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <blockquote className="lg:col-span-8">
          <p className="text-2xl md:text-4xl font-display font-normal text-white leading-snug">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
        <div className="lg:col-span-4 lg:pl-10 lg:border-l border-white/10">
          <div className="text-6xl md:text-7xl font-display font-medium text-white tabular-nums mb-2">{metric}</div>
          <div className="text-base text-cool-gray-400 mb-8">{metricLabel.charAt(0).toUpperCase() + metricLabel.slice(1).toLowerCase()}</div>
          <figcaption>
            <div className="font-medium text-white">{author}</div>
            <div className="text-cool-gray-400 text-sm">{role}</div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
