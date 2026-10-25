import { Suspense } from "react";
import { getAllPosts, insightCategories } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { InsightsGrid, InsightsView } from "@/components/site/InsightsGrid";
import { CTABand } from "@/components/site/CTABand";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Field notes from production: how enterprise AI agents get built, deployed and governed.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero eyebrow="Insights" title="Field notes from production." lead="How enterprise agents actually get built, deployed and governed — from the engineers doing it.">
        <p className="mt-6 text-[15px]">
          <a href="/insights/rss.xml" className="link">
            Subscribe via RSS
          </a>
        </p>
      </PageHero>
      <Section className="pt-0 lg:pt-0">
        <Suspense fallback={<InsightsView posts={posts} categories={insightCategories} active="All" />}>
          <InsightsGrid posts={posts} categories={insightCategories} />
        </Suspense>
      </Section>
      <CTABand />
    </>
  );
}
