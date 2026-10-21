interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricLabel: string;
}

export function TestimonialQuote({ quote, author, role, metric, metricLabel }: TestimonialProps) {
  return (
    <section className="border-t border-line">
      <figure className="mx-auto grid max-w-7xl gap-px border-x border-line bg-line lg:grid-cols-12">
        <blockquote className="bg-canvas px-6 py-16 md:px-10 md:py-20 lg:col-span-8">
          <p className="font-display text-2xl font-medium leading-snug text-white md:text-[2rem] md:leading-[1.3]">
            &ldquo;{quote}&rdquo;
          </p>
          <figcaption className="mt-8 text-sm">
            <span className="font-medium text-white">{author}</span>
            <span className="text-cool-gray-500"> · {role}</span>
          </figcaption>
        </blockquote>
        <div className="flex flex-col justify-end bg-surface px-6 py-10 md:px-10 lg:col-span-4">
          <div className="font-display text-6xl font-semibold tabular-nums tracking-[-0.04em] text-white md:text-7xl">{metric}</div>
          <div className="mt-2 text-sm text-cool-gray-400">
            {metricLabel.charAt(0).toUpperCase() + metricLabel.slice(1).toLowerCase()}
          </div>
        </div>
      </figure>
    </section>
  );
}
