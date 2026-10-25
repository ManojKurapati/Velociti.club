import Link from "next/link";
import type { CaseStudy } from "@/content/customers";
import { cn } from "@/lib/utils";
import { Arrow } from "./Button";

export function CaseCard({ c, className, showSystems = true }: { c: CaseStudy; className?: string; showSystems?: boolean }) {
  return (
    <Link
      href={`/customers/${c.slug}`}
      className={cn("card group flex h-full flex-col p-7 transition-colors hover:border-ink/40 lg:p-8", className)}
    >
      <div className="t-mono flex items-center justify-between gap-3 text-body">
        <span className="text-cobalt">{c.industry}</span>
        <span>{c.weeks} wks</span>
      </div>
      <p className="t-stat mt-10 text-cobalt">{c.headline.value}</p>
      <p className="mt-2 text-[15px]">{c.headline.label}</p>
      <h3 className="mt-8 text-[20px] font-semibold leading-snug tracking-[-0.015em] text-ink">{c.title}</h3>
      {showSystems && (
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Systems connected">
          {c.systems.map((s) => (
            <li key={s} className="rounded-full border border-line px-2.5 py-1 text-[13px] leading-none">
              {s}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[15px] font-medium text-cobalt">
        Read the case study <Arrow className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
