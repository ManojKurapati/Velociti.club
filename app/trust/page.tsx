import { trustPage } from "@/content/trust";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { SafeguardGrid } from "@/components/site/SafeguardGrid";
import { ComplianceGrid } from "@/components/site/ComplianceGrid";
import { SimpleForm } from "@/components/site/SimpleForm";
import { CTABand } from "@/components/site/CTABand";
import { copy } from "@/components/site/Copy";
import { SceneArt } from "@/components/art/SceneArt";
import { PhotoOr } from "@/components/art/IndustryImage";

export const metadata = pageMetadata({ ...trustPage.meta, path: "/trust" });

const ENDPOINT = process.env.NEXT_PUBLIC_TRUST_FORM_ENDPOINT;

export default function TrustPage() {
  const { hero, principles, safeguards, compliance, documents, report, image } = trustPage;
  const portalIsPlaceholder = documents.portal.href.startsWith("[");
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
        <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          {[
            ["Principles", "#principles"],
            ["Safeguards", "#safeguards"],
            ["Compliance", "#compliance"],
            ["Security documents", "#documents"],
            ["Submit a report", "#report"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="link">
              {l}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-site">
        <div className="relative aspect-[21/9] h-auto max-h-[460px] min-h-[200px] w-full overflow-hidden rounded-[24px] bg-[#0F1520] max-sm:aspect-auto max-sm:h-[220px]">
          <PhotoOr
            base="/images/trust-servers"
            alt={image.alt}
            className="absolute inset-0"
            sizes="(min-width:1248px) 1200px, 100vw"
            priority
            fallback={<SceneArt name={image.name} className="absolute inset-0 h-full w-full" label={image.alt} />}
          />
        </div>
      </div>

      <Section id="principles" labelledBy="principles-title">
        <SectionHeader eyebrow={principles.eyebrow} title={principles.title} id="principles-title" className="mb-12" />
        <ol className="divide-y divide-line border-y border-line">
          {principles.items.map((p, i) => (
            <li key={p.title} className="grid gap-3 py-7 md:grid-cols-[80px_1fr_1.2fr] md:gap-8">
              <span className="t-mono pt-1.5 text-cobalt">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[24px] font-semibold tracking-[-0.02em]">{p.title}</h3>
              <p className="text-[17px] leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="safeguards" tone="night" labelledBy="safeguards-title">
        <SectionHeader eyebrow={safeguards.eyebrow} title={safeguards.title} id="safeguards-title" className="mb-12" />
        <SafeguardGrid cells={safeguards.cells} />
      </Section>

      <Section id="compliance" labelledBy="compliance-title">
        <SectionHeader eyebrow={compliance.eyebrow} title={compliance.title} lead={compliance.note} id="compliance-title" className="mb-12" />
        <ComplianceGrid items={compliance.items} />
      </Section>

      <Section id="documents" tone="white" labelledBy="documents-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">{documents.eyebrow}</p>
            <h2 id="documents-title" className="t-h2 mt-5">{documents.title}</h2>
            <p className="t-lead mt-6">{documents.body}</p>
            <p className="mt-8 text-[16px]">
              {portalIsPlaceholder ? (
                <>
                  {documents.portal.label}: {copy(documents.portal.href)}
                </>
              ) : (
                <a href={documents.portal.href} className="link">
                  {documents.portal.label}
                </a>
              )}
            </p>
          </div>
          <SimpleForm
            formType="security_documents_request"
            endpoint={ENDPOINT}
            fallbackEmail={site.emails.security}
            submitLabel="Request documents"
            successMessage="Thanks — we'll be in touch within two business days with an NDA and the documents you asked for."
            fields={[
              { name: "name", label: "Full name", autoComplete: "name" },
              { name: "email", label: "Work email", type: "email", autoComplete: "email" },
              { name: "company", label: "Company", autoComplete: "organization" },
              { name: "document", label: "Document", type: "select", options: documents.types },
              { name: "notes", label: "Notes", type: "textarea", optional: true },
            ]}
          />
        </div>
      </Section>

      <Section id="report" labelledBy="report-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">{report.eyebrow}</p>
            <h2 id="report-title" className="t-h2 mt-5">{report.title}</h2>
            <p className="t-lead mt-6">{report.body}</p>
            <p className="mt-8 text-[16px]">
              Prefer email?{" "}
              <a href={`mailto:${site.emails.security}`} className="link">
                {site.emails.security}
              </a>
            </p>
          </div>
          <SimpleForm
            formType="vulnerability_report"
            endpoint={ENDPOINT}
            fallbackEmail={site.emails.security}
            submitLabel="Submit report"
            successMessage="Thank you. We've received your report and will acknowledge it shortly."
            fields={[
              { name: "name", label: "Name", autoComplete: "name" },
              { name: "email", label: "Work email", type: "email", autoComplete: "email" },
              { name: "description", label: "Description", type: "textarea" },
            ]}
          />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
