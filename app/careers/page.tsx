import { careersPage } from "@/content/careers";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { SimpleForm } from "@/components/site/SimpleForm";
import { CTABand } from "@/components/site/CTABand";
import { copy } from "@/components/site/Copy";
import { Arrow } from "@/components/site/Button";

export const metadata = pageMetadata({ ...careersPage.meta, path: "/careers" });

export default function CareersPage() {
  const { hero, roles, rolesNote, benefits, open } = careersPage;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />

      <Section className="pt-0 lg:pt-0" labelledBy="roles-title">
        <h2 id="roles-title" className="t-mono mb-4 text-cobalt">
          Open roles · {roles.length}
        </h2>
        <ul className="divide-y divide-line border-y border-line">
          {roles.map((r) => (
            <li key={r.title}>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                className="group grid gap-3 py-7 md:grid-cols-[1.1fr_1.4fr_auto] md:items-center md:gap-10"
                data-track={`Apply: ${r.title}`}
              >
                <span>
                  <span className="block text-[24px] font-semibold tracking-[-0.02em] text-ink">{r.title}</span>
                  <span className="t-mono mt-2 block text-body">
                    {r.team} · {r.location}
                  </span>
                </span>
                <span className="text-[16px] leading-relaxed">{r.summary}</span>
                <span className="inline-flex items-center gap-2 text-[15px] font-medium text-cobalt">
                  Apply <Arrow className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[13px]">{copy(rolesNote)}</p>
      </Section>

      <Section tone="white" labelledBy="benefits-title">
        <SectionHeader eyebrow={benefits.eyebrow} title={benefits.title} id="benefits-title" className="mb-12" />
        <ul className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((b, i) => (
            <li key={i} className="bg-surface p-7">
              <h3 className="text-[19px] font-semibold">{copy(b.title)}</h3>
              <p className="mt-2 text-[15px]">{copy(b.body)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="apply" labelledBy="open-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="open-title" className="t-h2">{open.title}</h2>
            <p className="t-lead mt-6">{open.body}</p>
            <p className="mt-8 text-[16px]">
              Or email{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <SimpleForm
            formType="open_application"
            endpoint={process.env.NEXT_PUBLIC_LEAD_ENDPOINT}
            fallbackEmail={site.email}
            submitLabel={open.button}
            successMessage="Thanks — we read every application and will reply if there's a fit."
            fields={[
              { name: "name", label: "Full name", autoComplete: "name" },
              { name: "email", label: "Email", type: "email", autoComplete: "email" },
              { name: "role", label: "Role you're interested in", type: "select", options: [...roles.map((r) => r.title), "Something else"] },
              { name: "link", label: "LinkedIn, GitHub or portfolio", optional: true, autoComplete: "url" },
              { name: "note", label: "What have you built?", type: "textarea" },
            ]}
          />
        </div>
      </Section>

      <CTABand />
    </>
  );
}
