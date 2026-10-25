import Link from "next/link";
import { home } from "@/content/home";
import { caseStudies } from "@/content/customers";
import { getAllPosts } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { HeroThink } from "@/components/home/HeroThink";
import { ScrollVideo } from "@/components/home/ScrollVideo";
import { TrustedBy } from "@/components/home/TrustedBy";
import { CaseCarousel } from "@/components/home/CaseCarousel";
import { OperatingLayerDiagram } from "@/components/home/OperatingLayerDiagram";
import { IndustryTiles } from "@/components/home/IndustryTiles";
import { LegacyAnchorRedirect } from "@/components/home/LegacyAnchorRedirect";
import { Section, SectionHeader } from "@/components/site/Section";
import { StatBand } from "@/components/site/StatBand";
import { SafeguardGrid } from "@/components/site/SafeguardGrid";
import { PostCard } from "@/components/site/PostCard";
import { CTABand } from "@/components/site/CTABand";
import { Arrow, Button, TextLink } from "@/components/site/Button";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({ ...home.meta, path: "/" });

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <LegacyAnchorRedirect />
      <HeroThink />
      <ScrollVideo title={home.video.title} playLabel={home.video.playLabel} />
      <TrustedBy />

      <Section labelledBy="stats-title" className="pb-0 lg:pb-0">
        <h2 id="stats-title" className="sr-only">
          Results in production
        </h2>
        <StatBand stats={home.stats} />
      </Section>

      <Section labelledBy="cases-title">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={home.cases.eyebrow} title={home.cases.title} id="cases-title" />
          <TextLink href={home.cases.link.href} className="shrink-0">
            {home.cases.link.label}
          </TextLink>
        </div>
        <CaseCarousel cases={caseStudies} />
      </Section>

      <Section tone="night" labelledBy="layer-title">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeader eyebrow={home.operatingLayer.eyebrow} title={home.operatingLayer.title} id="layer-title" />
            <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed">{home.operatingLayer.body}</p>
            <Button href="/engineers" variant="ghost-night" className="mt-9" arrow track="See how we deploy (operating layer)">
              See how we deploy
            </Button>
          </div>
          <OperatingLayerDiagram layers={home.operatingLayer.layers} footnote={home.operatingLayer.footnote} />
        </div>
      </Section>

      <Section labelledBy="build-title">
        <SectionHeader eyebrow={home.build.eyebrow} title={home.build.title} id="build-title" className="mb-12" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.build.cards.map((c, i) => (
            <li key={c.href}>
              <Link href={c.href} className="card group flex h-full min-h-[200px] flex-col p-7 lg:min-h-[240px] transition-colors hover:border-ink/40">
                <span className="t-mono text-cobalt">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-auto pt-10 text-[22px] font-semibold leading-tight tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-2 text-[15px]">{c.proof}</p>
                <Arrow className="mt-6 text-cobalt transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="pt-0 lg:pt-0" labelledBy="twoup-0">
        <div className="grid gap-4 lg:grid-cols-2">
          {home.twoUp.map((c, i) => (
            <div key={c.title} className={cn("flex flex-col p-8 lg:p-12", c.tone === "night" ? "night card-night bg-night text-night-body" : "card")}>
              <p className="eyebrow">{c.eyebrow}</p>
              <h2 id={`twoup-${i}`} className={cn("mt-6 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] lg:text-[44px]", c.tone === "night" && "text-white")}>
                {c.title}
              </h2>
              <p className="mt-4 max-w-[460px] text-[17px] leading-relaxed">{c.body}</p>
              <div className="mt-auto pt-10">
                <Button href={c.cta.href} variant={c.tone === "night" ? "white" : "primary"} arrow track={`${c.cta.label} (two-up)`}>
                  {c.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="industries-title">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={home.industries.eyebrow} title={home.industries.title} id="industries-title" />
          <TextLink href="/industries" className="shrink-0">
            All industries
          </TextLink>
        </div>
        <IndustryTiles />
      </Section>

      <Section tone="night" labelledBy="security-title">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={home.security.eyebrow} title={home.security.title} id="security-title" />
          <Button href={home.security.cta.href} variant="white" className="shrink-0" arrow track="Visit the Trust Center (home)">
            {home.security.cta.label}
          </Button>
        </div>
        <SafeguardGrid cells={home.security.cells} />
      </Section>

      {posts.length > 0 && (
      <Section labelledBy="insights-title">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={home.insights.eyebrow} title={home.insights.title} id="insights-title" />
          <TextLink href={home.insights.link.href} className="shrink-0">
            {home.insights.link.label}
          </TextLink>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </Section>
      )}

      <CTABand />
    </>
  );
}
