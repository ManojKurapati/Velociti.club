import Link from "next/link";
import type { Industry } from "@/content/industries";
import { IndustryImage } from "@/components/art/IndustryImage";
import { Arrow } from "./Button";

export function IndustryRows({ items }: { items: Industry[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((ind, i) => (
        <li key={ind.slug}>
          <Link href={`/industries/${ind.slug}`} className="group grid items-center gap-6 py-8 md:grid-cols-[64px_1fr_1.1fr_280px] md:gap-8">
            <span className="t-mono text-cobalt">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className="block text-[32px] font-semibold leading-none tracking-[-0.03em] text-ink lg:text-[40px]">{ind.name}</span>
              <span className="mt-3 block text-[15px]">{ind.tileUseCases.join(" · ")}</span>
            </span>
            <span className="text-[16px] leading-relaxed">{ind.hero.title}</span>
            <span className="relative block aspect-[21/9] overflow-hidden rounded-[14px] bg-[#0F1520]">
              <span className="absolute inset-0 block transition-transform duration-500 group-hover:scale-[1.04]">
                <IndustryImage slug={ind.slug} alt={ind.imageAlt} sizes="280px" />
              </span>
              <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
                <Arrow />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
