import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCase } from "@/content/customers";
import { articleJsonLd, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { Section } from "@/components/site/Section";
import { StatBand, toStat } from "@/components/site/StatBand";
import { CaseCard } from "@/components/site/CaseCard";
import { CTABand } from "@/components/site/CTABand";
import { copy } from "@/components/site/Copy";
import { IndustryImage } from "@/components/art/IndustryImage";
import { getIndustry } from "@/content/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) return {};
  return pageMetadata({ title: c.title, description: c.summary, path: `/customers/${c.slug}`, type: "article" });
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) notFound();
  const path = `/customers/${c.slug}`;
  const related = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 3);
  const ind = getIndustry(c.industrySlug);

  const meta = [
    { k: "Industry", v: <Link href={`/industries/${c.industrySlug}`} className="link">{c.industry}</Link> },
    { k: "Client", v: copy(c.client) },
    { k: "Timeline", v: `${c.weeks} weeks to production` },
    { k: "Systems connected", v: c.systems.join(", ") },
    { k: "Solution", v: c.solution },
  ];

  return (
    <>
      <JsonLd data={articleJsonLd({ title: c.title, description: c.summary, path })} />
      <section className="pb-12 pt-16 lg:pb-16 lg:pt-24">
        <div className="container-site">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Customers", path: "/customers" }, { name: c.industry, path }]} />
          <p className="eyebrow mt-10">
            {c.industry} · {c.weeks} weeks
          </p>
          <h1 className="mt-6 max-w-[1000px] text-[clamp(38px,5.4vw,76px)] font-semibold leading-[1.02] tracking-[-0.04em]">{c.title}</h1>
        </div>
      </section>

      <div className="container-site">
        <div className="relative aspect-[16/9] max-h-[560px] w-full overflow-hidden rounded-[24px] bg-[#0F1520]">
          <IndustryImage slug={c.industrySlug} variant="alt" alt={ind?.imageAlt ?? c.industry} chips={ind?.artChips} priority />
        </div>
        <StatBand className="mt-6" stats={c.stats.map((s) => toStat(s.value, s.label))} />
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <dl className="card divide-y divide-line">
              {meta.map((m) => (
                <div key={m.k} className="px-6 py-4">
                  <dt className="t-mono text-cobalt">{m.k}</dt>
                  <dd className="mt-1.5 text-[15px] text-ink">{m.v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="max-w-[720px] space-y-16">
            <section aria-labelledby="challenge">
              <h2 id="challenge" className="text-[32px] font-semibold tracking-[-0.03em]">The challenge</h2>
              {c.challenge.map((p, i) => (
                <p key={i} className="mt-5 text-[18px] leading-relaxed">{copy(p)}</p>
              ))}
            </section>

            <section aria-labelledby="built">
              <h2 id="built" className="text-[32px] font-semibold tracking-[-0.03em]">What we built</h2>
              <ul className="mt-6 space-y-4">
                {c.built.map((p) => (
                  <li key={p} className="flex gap-4 text-[18px] leading-relaxed">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                    <span>{copy(p)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="timeline">
              <h2 id="timeline" className="text-[32px] font-semibold tracking-[-0.03em]">From kickoff to production in {c.weeks} weeks</h2>
              <ol className="mt-8 border-l border-line">
                {c.timeline.map((t, i) => (
                  <li key={t.phase} className="relative pb-8 pl-8 last:pb-0">
                    <span aria-hidden="true" className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cobalt" />
                    <p className="t-mono text-cobalt">
                      {String(i + 1).padStart(2, "0")} · {copy(t.weeks)}
                    </p>
                    <h3 className="mt-2 text-[20px] font-semibold">{t.phase}</h3>
                    <p className="mt-1 text-[16px]">{copy(t.detail)}</p>
                  </li>
                ))}
              </ol>
            </section>

            {c.quote && (
              <figure className="border-l-2 border-cobalt pl-8">
                <blockquote className="text-[26px] font-medium leading-[1.3] tracking-[-0.02em] text-ink lg:text-[32px]">“{copy(c.quote.text)}”</blockquote>
                <figcaption className="mt-6 text-[15px]">
                  <span className="font-semibold text-ink">{c.quote.name}</span> · {c.quote.role}
                  {c.quote.approval && <span className="mt-2 block text-[13px]">{copy(c.quote.approval)}</span>}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="related">
        <h2 id="related" className="t-h2 mb-10">Related cases</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <CaseCard c={r} showSystems={false} />
            </li>
          ))}
        </ul>
      </Section>

      <CTABand />
    </>
  );
}
