import { pressPage } from "@/content/press";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/site/Button";
import { copy, hasCopy } from "@/components/site/Copy";

export const metadata = pageMetadata({ ...pressPage.meta, path: "/press" });

export default function PressPage() {
  const { hero, mediaKit, boilerplate50, boilerplate100 } = pressPage;
  const coverage = pressPage.coverage.filter((c) => hasCopy(c.headline));
  const releases = pressPage.releases.filter((r) => hasCopy(r.title));
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
        <p className="mt-6 text-[16px]">
          Media enquiries:{" "}
          <a className="link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </PageHero>

      {coverage.length > 0 && (
      <Section className="pt-0 lg:pt-0" labelledBy="coverage-title">
        <h2 id="coverage-title" className="t-mono mb-4 text-cobalt">Coverage</h2>
        <div className="card overflow-x-auto" role="region" aria-label="Press coverage" tabIndex={0}>
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line">
                {["Headline", "Outlet", "Type", "Date"].map((h) => (
                  <th key={h} scope="col" className="t-mono px-6 py-4 font-medium text-cobalt">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coverage.map((c, i) => (
                <tr key={i} className="border-b border-line last:border-0">
                  <th scope="row" className="px-6 py-5 font-semibold text-ink">
                    <a href={c.href} className="hover:text-cobalt">{copy(c.headline)}</a>
                  </th>
                  <td className="px-6 py-5">{copy(c.outlet)}</td>
                  <td className="px-6 py-5">{copy(c.type)}</td>
                  <td className="px-6 py-5 tabular-nums">{copy(c.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      )}

      {releases.length > 0 && (
      <Section tone="white" labelledBy="releases-title">
        <h2 id="releases-title" className="t-h2 mb-10">Press releases</h2>
        <ul className="divide-y divide-line border-y border-line">
          {releases.map((r, i) => (
            <li key={i} className="grid gap-2 py-6 md:grid-cols-[160px_1fr] md:gap-8">
              <span className="t-mono pt-1 text-body">{hasCopy(r.date) ? copy(r.date) : ""}</span>
              <div>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
                  <a href={r.href} className="hover:text-cobalt">{copy(r.title)}</a>
                </h3>
                {hasCopy(r.summary) && <p className="mt-2 text-[16px]">{copy(r.summary)}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Section>
      )}

      <Section labelledBy="kit-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="kit-title" className="t-h2">{mediaKit.title}</h2>
            <p className="t-lead mt-6">{mediaKit.body}</p>
            <ul className="mt-6 space-y-2 text-[16px]">
              {mediaKit.contents.filter(hasCopy).map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                  {copy(c)}
                </li>
              ))}
            </ul>
            <Button href={mediaKit.href} className="mt-9" track="Download media kit">
              Download media kit (ZIP)
            </Button>
          </div>
          <div className="space-y-4">
            {[
              ["Boilerplate · 50 words", boilerplate50],
              ["Boilerplate · 100 words", boilerplate100],
            ].map(([label, text]) => (
              <div key={label} className="card p-7">
                <p className="t-mono text-cobalt">{label}</p>
                <p className="mt-4 text-[16px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
