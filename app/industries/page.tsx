import { industries, industriesPage } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { IndustryRows } from "@/components/site/IndustryRows";
import { CTABand } from "@/components/site/CTABand";
import { home } from "@/content/home";
import { TextLink } from "@/components/site/Button";

export const metadata = pageMetadata({ ...industriesPage.meta, path: "/industries" });

export default function IndustriesPage() {
  const nl = home.industries.notListed;
  return (
    <>
      <PageHero eyebrow={industriesPage.eyebrow} title={industriesPage.title} lead={industriesPage.lead} />
      <Section className="pt-0 lg:pt-0">
        <IndustryRows items={industries} />
        <div className="mt-12 flex flex-col gap-3 rounded-[20px] bg-cobalt p-8 text-white sm:flex-row sm:items-center sm:justify-between lg:p-10">
          <p className="text-[24px] font-semibold tracking-[-0.02em]">
            {nl.title} <span className="font-normal text-white/90">{nl.body}</span>
          </p>
          <TextLink href={nl.href} className="text-white hover:text-white" track="Not listed? Talk to us (industries index)">
            Talk to us
          </TextLink>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
