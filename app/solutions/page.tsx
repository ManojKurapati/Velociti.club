import { solutions, solutionsPage } from "@/content/solutions";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { PillSwitcher } from "@/components/site/PillSwitcher";
import { Section, SectionHeader } from "@/components/site/Section";
import { UseCaseList } from "@/components/site/UseCaseList";
import { RunLogPanel } from "@/components/site/RunLogPanel";
import { CTABand } from "@/components/site/CTABand";
import { copy } from "@/components/site/Copy";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({ ...solutionsPage.meta, path: "/solutions" });

export default function SolutionsPage() {
  const { hero, foundations, cta, illustrativeLabel } = solutionsPage;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
        <PillSwitcher className="mt-10" label="Solutions" items={solutions.map((s) => ({ label: s.name, href: `#${s.id}` }))} />
      </PageHero>

      {solutions.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 0 ? "white" : "light"} labelledBy={`${s.id}-title`}>
          <div className={cn("grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16")}>
            <div className={cn(i % 2 === 1 && "lg:order-2")}>
              <p className="eyebrow">
                {String(i + 1).padStart(2, "0")} · {s.name}
              </p>
              <h2 id={`${s.id}-title`} className="t-h2 mt-5">
                {s.headline}
              </h2>
              <p className="t-lead mt-6">{s.lead}</p>
              <UseCaseList items={s.useCases} className="mt-10" />
              <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[32px] font-semibold tracking-[-0.03em] text-cobalt">{copy(s.proof.value)}</span>
                <span className="text-[16px]">{s.proof.label}</span>
              </p>
            </div>
            <div className={cn("lg:sticky lg:top-28", i % 2 === 1 && "lg:order-1")}>
              <RunLogPanel {...s.panel} label={illustrativeLabel} />
            </div>
          </div>
        </Section>
      ))}

      <Section tone="night" labelledBy="foundations-title">
        <SectionHeader eyebrow={foundations.eyebrow} title={foundations.title} id="foundations-title" className="mb-12" />
        <ul className="grid gap-px overflow-hidden rounded-[20px] border border-night-line bg-night-line sm:grid-cols-2 lg:grid-cols-4">
          {foundations.items.map((f, i) => (
            <li key={f.title} className="bg-night p-7 lg:p-8">
              <span className="t-mono text-cobalt-on-night">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[19px] font-semibold">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand title={cta.title} button={cta.button} />
    </>
  );
}
