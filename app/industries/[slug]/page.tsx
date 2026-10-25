import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/content/industries";
import { getCase } from "@/content/customers";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { PillSwitcher } from "@/components/site/PillSwitcher";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section, SectionHeader } from "@/components/site/Section";
import { StatBand, toStat } from "@/components/site/StatBand";
import { QuoteBand } from "@/components/site/QuoteBand";
import { CaseCard } from "@/components/site/CaseCard";
import { CTABand } from "@/components/site/CTABand";
import { IndustryImage } from "@/components/art/IndustryImage";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const ind = getIndustry((await params).slug);
  if (!ind) return {};
  return pageMetadata({ ...ind.meta, path: `/industries/${ind.slug}` });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const ind = getIndustry((await params).slug);
  if (!ind) notFound();
  const featured = ind.caseSlug ? getCase(ind.caseSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow={ind.name}
        title={ind.hero.title}
        lead={ind.hero.lead}
        primary={{ label: "Book an AI workflow audit", href: "/contact" }}
        secondary={featured ? { label: "Read the case study", href: `/customers/${featured.slug}` } : { label: "Explore solutions", href: "/solutions" }}
        above={
          <div className="space-y-6">
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: ind.name, path: `/industries/${ind.slug}` }]} />
            <PillSwitcher label="Switch industry" active={ind.slug} items={industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}`, value: i.slug }))} />
          </div>
        }
      />

      <div className="container-site">
        <div className="relative h-[240px] w-full overflow-hidden rounded-[24px] bg-[#0F1520] sm:h-auto sm:aspect-[21/9]">
          <IndustryImage slug={ind.slug} alt={ind.imageAlt} chips={ind.artChips} priority sizes="(min-width:1248px) 1200px, 100vw" />
        </div>
      </div>

      <Section labelledBy="ind-stats" className="lg:pb-0 pb-0">
        <h2 id="ind-stats" className="sr-only">
          {ind.name} results
        </h2>
        <StatBand stats={ind.stats.map((s) => toStat(s.value, s.label))} />
      </Section>

      <Section labelledBy="ind-usecases">
        <SectionHeader eyebrow="Use cases" title={`Where agents take work off ${ind.name.toLowerCase()} teams.`} id="ind-usecases" className="mb-12" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {ind.useCases.map((u, i) => (
            <li key={u.title} className="card p-8">
              <span className="t-mono text-cobalt">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.02em]">{u.title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed">{u.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <QuoteBand quote={ind.quote} />

      <Section tone="white" labelledBy="ind-why">
        <SectionHeader eyebrow="Why Velociti" title={`Why ${ind.name} teams choose Velociti`} id="ind-why" className="mb-12" />
        <ul className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ind.pillars.map((p) => (
            <li key={p.title} className="bg-surface p-7">
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-cobalt" />
              <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.015em]">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
        {featured && (
          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <SectionHeader eyebrow="In production" title="See it running." />
            <CaseCard c={featured} />
          </div>
        )}
      </Section>

      <CTABand title={`Where does AI pay off in your ${ind.orgType}?`} />
    </>
  );
}
