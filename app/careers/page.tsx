import { careersPage } from "@/content/careers";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { SimpleForm } from "@/components/site/SimpleForm";
import { CTABand } from "@/components/site/CTABand";
import { copy, hasCopy } from "@/components/site/Copy";
import { Arrow } from "@/components/site/Button";

export const metadata = pageMetadata({ ...careersPage.meta, path: "/careers" });

export default function CareersPage() {
  const { hero, roles, rolesNote, benefits, aiGuidelines: ai, open } = careersPage;
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
        {hasCopy(rolesNote) && <p className="mt-4 text-[13px]">{copy(rolesNote)}</p>}
      </Section>

      {benefits.items.some((b) => hasCopy(b.title)) && (
      <Section tone="white" labelledBy="benefits-title">
        <SectionHeader eyebrow={benefits.eyebrow} title={benefits.title} id="benefits-title" className="mb-12" />
        <ul className="grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.filter((b) => hasCopy(b.title)).map((b, i) => (
            <li key={i} className="bg-surface p-7">
              <h3 className="text-[19px] font-semibold">{copy(b.title)}</h3>
              <p className="mt-2 text-[15px]">{copy(b.body)}</p>
            </li>
          ))}
        </ul>
      </Section>
      )}

      <Section id="ai-guidelines" labelledBy="ai-title">
        <div className="max-w-[820px]">
          <p className="eyebrow">{ai.eyebrow}</p>
          <h2 id="ai-title" className="t-h2 mt-5">
            {ai.title}
          </h2>
          <p className="t-lead mt-6">{ai.intro}</p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-7 lg:p-9">
            <h3 className="t-h3">{ai.acceptable.title}</h3>
            <ul className="mt-6 space-y-3.5">
              {ai.acceptable.items.map((it) => (
                <li key={it} className="flex gap-3 text-[16px] leading-relaxed">
                  <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" className="mt-1 shrink-0 text-cobalt" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="night card-night bg-night p-7 text-night-body lg:p-9">
            <h3 className="t-h3 text-white">{ai.notAcceptable.title}</h3>
            <ul className="mt-6 space-y-3.5">
              {ai.notAcceptable.items.map((it) => (
                <li key={it} className="flex gap-3 text-[16px] leading-relaxed">
                  <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" className="mt-1 shrink-0 text-[#FF8A80]" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
                  </svg>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="t-h3 mt-16">{ai.expectations.title}</h3>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {ai.expectations.stages.map((st, i) => (
            <li key={st.title} className="card p-7">
              <p className="t-mono text-cobalt">
                {String(i + 1).padStart(2, "0")} · {st.title}
              </p>
              <ul className="mt-5 space-y-3">
                {st.items.map((it) => (
                  <li key={it} className="text-[15px] leading-relaxed">
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-[820px] border-l-2 border-cobalt pl-5 text-[18px] font-medium leading-relaxed text-ink">{ai.closing}</p>
      </Section>

      <Section id="apply" tone="white" labelledBy="open-title">
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
