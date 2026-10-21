import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-px border-x border-line bg-line lg:grid-cols-12">
        <div className="bg-canvas px-6 py-20 md:px-10 md:py-28 lg:col-span-8">
          <h2 className="font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            Find out where AI pays off in your operations
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cool-gray-400 md:text-lg">
            In a 30-minute workflow audit, we map your bottlenecks and show you which ones an AI agent can take over first. No commitment, and everything you share stays confidential.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 bg-surface px-6 py-10 md:px-10 lg:col-span-4">
          <Link
            href="https://calendly.com/manojkurapati96/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "w-full" })}
          >
            Book a workflow audit
          </Link>
          <p className="text-center text-xs text-cool-gray-500">30 minutes · Free · No commitment</p>
        </div>
      </div>
    </section>
  );
}
