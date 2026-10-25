"use client";

import { useRef } from "react";
import type { CaseStudy } from "@/content/customers";
import { CaseCard } from "@/components/site/CaseCard";

export function CaseCarousel({ cases }: { cases: CaseStudy[] }) {
  const rowRef = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : row.clientWidth * 0.8;
    row.scrollBy({ left: dir * step, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  return (
    <div>
      <div className="mb-6 hidden justify-end gap-2 md:flex">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scrollBy(dir)}
            aria-label={dir === -1 ? "Previous case studies" : "Next case studies"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-ink"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" className={dir === -1 ? "rotate-180" : ""}>
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
      <ul ref={rowRef} className="scroll-row -mx-6 px-6 pb-2 [scroll-padding-inline:24px]" aria-label="Case studies">
        {cases.map((c) => (
          <li key={c.slug} className="w-[86%] shrink-0 sm:w-[46%] lg:w-[calc((100%-32px)/3)]">
            <CaseCard c={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}
