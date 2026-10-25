import { Suspense } from "react";
import { caseStudies, customersPage } from "@/content/customers";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CustomerGrid, GridView } from "@/components/site/CustomerGrid";
import { CTABand } from "@/components/site/CTABand";

export const metadata = pageMetadata({ ...customersPage.meta, path: "/customers" });

export default function CustomersPage() {
  const { eyebrow, title, lead, filters } = customersPage;
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />
      <Section className="pt-0 lg:pt-0">
        <Suspense fallback={<GridView cases={caseStudies} filters={filters} active="all" />}>
          <CustomerGrid cases={caseStudies} filters={filters} />
        </Suspense>
      </Section>
      <CTABand />
    </>
  );
}
