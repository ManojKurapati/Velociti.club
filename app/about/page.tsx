import { aboutPage } from "@/content/about";
import { pageMetadata } from "@/lib/seo";
import { Section, SectionHeader } from "@/components/site/Section";
import { StatBand } from "@/components/site/StatBand";
import { CTABand } from "@/components/site/CTABand";
import { copy, hasCopy } from "@/components/site/Copy";
import { SceneArt } from "@/components/art/SceneArt";
import { PhotoOr } from "@/components/art/IndustryImage";

export const metadata = pageMetadata({ ...aboutPage.meta, path: "/about" });

export default function AboutPage() {
  const { hero, stats, image, leadership, values } = aboutPage;
  return (
    <>
      <section className="pb-14 pt-16 lg:pb-20 lg:pt-24">
        <div className="container-site">
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <h1 className="t-h1">
            {hero.titleStrong} <span className="text-muted-display">{hero.titleMuted}</span>
          </h1>
          <p className="t-lead mt-8 max-w-[760px]">{hero.lead}</p>
        </div>
      </section>

      <div className="container-site">
        <StatBand stats={stats} />
        <div className="relative mt-6 aspect-[21/9] w-full overflow-hidden rounded-[24px] bg-[#0F1520] max-sm:aspect-auto max-sm:h-[220px]">
          <PhotoOr
            base="/images/about-dubai"
            alt={image.alt}
            className="absolute inset-0"
            sizes="(min-width:1248px) 1200px, 100vw"
            fallback={<SceneArt name={image.name} className="absolute inset-0 h-full w-full" label={image.alt} />}
          />
        </div>
      </div>

      <Section labelledBy="leadership-title">
        <SectionHeader eyebrow={leadership.eyebrow} title={leadership.title} id="leadership-title" className="mb-12" />
        <ul className="grid gap-4 md:grid-cols-2">
          {leadership.people.map((p) => (
            <li key={p.name} className="card overflow-hidden">
              {hasCopy(p.photo) && (
                <div className="flex aspect-[4/3] items-center justify-center border-b border-dashed border-line bg-paper p-6 text-center">
                  <p className="text-[14px]">{copy(p.photo)}</p>
                </div>
              )}
              <div className="p-7 lg:p-8">
                <h3 className="text-[24px] font-semibold tracking-[-0.02em]">{p.name}</h3>
                <p className="t-mono mt-2 text-cobalt">{p.role}</p>
                <p className="mt-5 text-[16px] leading-relaxed">{p.bio}</p>
                {"highlights" in p && p.highlights && (
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name}'s expertise`}>
                    {p.highlights.map((h) => (
                      <li key={h} className="rounded-full border border-line px-3 py-1.5 text-[13px] leading-none text-ink">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
        {hasCopy(leadership.more) && <p className="mt-6 text-[15px]">{copy(leadership.more)}</p>}
      </Section>

      <Section tone="night" labelledBy="values-title">
        <SectionHeader eyebrow={values.eyebrow} title={values.title} id="values-title" className="mb-12" />
        <ol className="divide-y divide-night-line border-y border-night-line">
          {values.items.map((v, i) => (
            <li key={v.title} className="grid gap-2 py-7 md:grid-cols-[80px_1fr_1fr] md:items-baseline md:gap-8">
              <span className="t-mono text-cobalt-on-night">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[28px] font-semibold tracking-[-0.025em] lg:text-[36px]">{v.title}</h3>
              <p className="text-[17px]">{v.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CTABand />
    </>
  );
}
