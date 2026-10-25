import { engineersPage } from "@/content/engineers";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { DeploymentTable } from "@/components/site/DeploymentTable";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/site/Button";
import { copy, hasCopy } from "@/components/site/Copy";
import { ServerRackArt } from "@/components/art/SceneArt";
import { PhotoOr } from "@/components/art/IndustryImage";

export const metadata = pageMetadata({ ...engineersPage.meta, path: "/engineers" });

export default function EngineersPage() {
  const { hero, familiar, pod, engagement, deployment, airgapped } = engineersPage;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} primary={hero.cta} />

      <Section className="pt-0 lg:pt-0" labelledBy="familiar-title">
        <div className="card grid gap-10 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-14">
          <div>
            <p className="eyebrow">{familiar.eyebrow}</p>
            <h2 id="familiar-title" className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] lg:text-[44px]">
              {familiar.title}
            </h2>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {familiar.items.map((it) => (
              <li key={it} className="flex items-start gap-4 py-5 text-[18px] text-ink">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white" labelledBy="pod-title">
        <SectionHeader eyebrow={pod.eyebrow} title={pod.title} id="pod-title" className="mb-12" />
        <div className={hasCopy(pod.photoPlaceholder) ? "grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]" : "grid gap-4 lg:grid-cols-2"}>
          {pod.roles.map((r) => (
            <article key={r.name} className="card flex flex-col p-8 lg:p-10">
              <p className="t-mono text-cobalt">{r.name}</p>
              <h3 className="mt-8 text-[40px] font-semibold leading-none tracking-[-0.035em]">{r.tagline}</h3>
              <p className="mt-5 text-[17px] leading-relaxed">{r.body}</p>
            </article>
          ))}
          {hasCopy(pod.photoPlaceholder) && (
            <div className="flex min-h-[260px] items-center justify-center rounded-[20px] border border-dashed border-line bg-paper p-8 text-center">
              <p className="text-[15px]">{copy(pod.photoPlaceholder)}</p>
            </div>
          )}
        </div>
      </Section>

      <Section tone="night" labelledBy="engagement-title">
        <SectionHeader eyebrow={engagement.eyebrow} title={engagement.title} id="engagement-title" />
        {hasCopy(engagement.note) && <p className="mt-4 text-[14px]">{copy(engagement.note)}</p>}
        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {engagement.steps.map((s) => (
            <li key={s.n} className="card-night flex flex-col p-8">
              <div className="flex items-center justify-between">
                <span className="t-stat text-[56px] text-white">{s.n}</span>
                <span className="t-mono rounded-full border border-night-line px-3 py-1 text-cobalt-on-night">{s.owner}</span>
              </div>
              <h3 className="mt-10 text-[24px] font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="t-mono mt-2 text-night-body">{s.when}</p>
              <p className="mt-4 text-[16px] leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="mt-8 h-1.5 overflow-hidden rounded-full bg-night-2">
          <div className="h-full w-full bg-[linear-gradient(to_right,var(--cobalt)_0_33%,var(--cobalt-on-night)_33%_66%,#ffffff_66%)]" />
        </div>
      </Section>

      <Section labelledBy="deployment-title">
        <SectionHeader eyebrow={deployment.eyebrow} title={deployment.title} id="deployment-title" className="mb-12" />
        <DeploymentTable columns={deployment.columns} rows={deployment.rows} />
      </Section>

      <Section id="airgapped" className="pt-0 lg:pt-0" labelledBy="airgapped-title">
        <div className="night grid overflow-hidden rounded-[20px] bg-night text-night-body lg:grid-cols-2">
          <div className="p-8 lg:p-14">
            <p className="eyebrow">{airgapped.eyebrow}</p>
            <h2 id="airgapped-title" className="t-h2 mt-5 text-white">
              {airgapped.title}
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed">{airgapped.body}</p>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {airgapped.sectors.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[15px] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cobalt-on-night" />
                  {s}
                </li>
              ))}
            </ul>
            <Button href={airgapped.cta.href} variant="white" className="mt-10" arrow track="Talk to an airgap engineer">
              {airgapped.cta.label}
            </Button>
          </div>
          <div className="relative min-h-[280px] border-t border-night-line lg:border-l lg:border-t-0">
            <PhotoOr
              base="/images/trust-servers"
              alt="Server racks inside a private data centre"
              className="absolute inset-0"
              sizes="(min-width:1024px) 600px, 100vw"
              night
              fallback={<ServerRackArt className="absolute inset-0 h-full w-full" />}
            />
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
