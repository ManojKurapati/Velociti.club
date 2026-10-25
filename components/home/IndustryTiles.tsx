import Link from "next/link";
import { industries } from "@/content/industries";
import { home } from "@/content/home";
import { IndustryImage } from "@/components/art/IndustryImage";

export function IndustryTiles() {
  const nl = home.industries.notListed;
  return (
    <ul className="scroll-row -mx-6 px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 lg:grid-cols-4">
      {industries.map((ind) => (
        <li key={ind.slug} className="w-[72%] shrink-0 sm:w-[44%] md:w-auto">
          <Link
            href={`/industries/${ind.slug}`}
            className="group relative block aspect-[4/5] overflow-hidden rounded-[20px] bg-[#0F1520] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
              <IndustryImage slug={ind.slug} alt={ind.imageAlt} sizes="(min-width:1024px) 300px, (min-width:768px) 50vw, 72vw" />
            </div>
            <div className="absolute inset-0 bg-[#0B0D12]/25" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(to_top,rgba(11,13,18,0.92),rgba(11,13,18,0.55)_45%,transparent)]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="text-[28px] font-semibold leading-none tracking-[-0.03em] text-white">{ind.name}</h3>
              <p className="mt-3 text-[14px] leading-snug text-white/85">{ind.tileUseCases.join(" · ")}</p>
            </div>
          </Link>
        </li>
      ))}
      <li className="w-[72%] shrink-0 sm:w-[44%] md:w-auto">
        <Link
          href={nl.href}
          className="group flex aspect-[4/5] flex-col justify-between rounded-[20px] bg-cobalt p-6 text-white transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-cobalt-hover"
          data-track="Not listed? Talk to us (industries)"
        >
          <span className="t-mono text-white">Every sector</span>
          <span>
            <span className="block text-[28px] font-semibold leading-none tracking-[-0.03em]">{nl.title}</span>
            <span className="mt-3 block text-[15px] leading-snug text-white/90">{nl.body}</span>
            <span className="mt-6 block text-[15px] font-medium">{nl.cta}</span>
          </span>
        </Link>
      </li>
    </ul>
  );
}
