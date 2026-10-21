"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GooeyText } from "./ui/gooey-text-morphing";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";

const MORPHING_WORDS = [
  "Think Different",
  "Think Big",
  "Think Velociti",
];

const ASSURANCES = [
  "HIPAA-ready architectures",
  "Human-in-the-loop approvals",
  "Airgapped deployments available",
];

export function Hero() {
  return (
    <section className="pt-16">
      <div className="mx-auto max-w-7xl border-x border-line">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="px-6 pt-24 pb-16 md:px-10 md:pt-36 md:pb-20"
        >
          <h1 className="sr-only">Think Different. Think Big. Think Velociti.</h1>
          <div aria-hidden="true" className="relative h-[2.75rem] sm:h-[3.75rem] md:h-[5rem] lg:h-[7.25rem]">
            <GooeyText
              texts={MORPHING_WORDS}
              morphTime={1.5}
              cooldownTime={1.25}
              className="h-full"
              textClassName="font-display font-semibold whitespace-nowrap text-left text-white tracking-[-0.045em] text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          <div className="grid gap-px border-t border-line bg-line lg:grid-cols-12">
            <div className="bg-canvas px-6 py-8 md:px-10 md:py-10 lg:col-span-7">
              <p className="max-w-xl text-lg leading-relaxed text-cool-gray-400 md:text-xl">
                We embed engineers with your team to deploy secure AI agents across sales, support, and operations, built on the systems and data you already run.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-canvas px-6 py-8 sm:flex-row sm:items-center md:px-10 md:py-10 lg:col-span-5 lg:justify-end">
              <Link
                href="https://calendly.com/manojkurapati96/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Book a workflow audit
              </Link>
              <Link href="/#case-studies" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                See case studies
              </Link>
            </div>
          </div>
          <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-3">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center bg-canvas px-6 py-4 md:px-10">
                <Badge secure>{item}</Badge>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
