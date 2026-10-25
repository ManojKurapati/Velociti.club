"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CaseStudy } from "@/content/customers";
import { cn } from "@/lib/utils";
import { CaseCard } from "./CaseCard";

type Filter = { label: string; value: string };

/** Filterable case grid. Filter state lives in ?industry= so it can be shared. */
export function CustomerGrid({ cases, filters }: { cases: CaseStudy[]; filters: Filter[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = filters.some((f) => f.value === params.get("industry")) ? params.get("industry")! : "all";
  const shown = active === "all" ? cases : cases.filter((c) => c.industrySlug === active);

  const select = (value: string) => {
    const q = value === "all" ? "" : `?industry=${value}`;
    router.replace(`${pathname}${q}`, { scroll: false });
  };

  return <GridView cases={shown} filters={filters} active={active} onSelect={select} />;
}

export function GridView({ cases, filters, active, onSelect }: { cases: CaseStudy[]; filters: Filter[]; active: string; onSelect?: (v: string) => void }) {
  return (
    <div>
      <div role="group" aria-label="Filter by industry" className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none]">
        <div className="flex w-max gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={active === f.value}
              onClick={() => onSelect?.(f.value)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-5 text-[15px] font-medium transition-colors",
                active === f.value ? "border-ink bg-ink text-white" : "border-line bg-surface text-ink hover:border-ink",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {cases.length} case {cases.length === 1 ? "study" : "studies"} shown
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {cases.map((c) => (
          <li key={c.slug}>
            <CaseCard c={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}
