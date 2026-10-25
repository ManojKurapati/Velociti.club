import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/site/ContactForm";
import { copy } from "@/components/site/Copy";

export const metadata = pageMetadata({ ...contactPage.meta, path: "/contact" });

export default function ContactPage() {
  const contacts = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "WhatsApp", value: site.whatsapp.display, href: site.whatsapp.href },
  ];
  return (
    <section className="pb-[72px] pt-14 lg:pb-[120px] lg:pt-20">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">{contactPage.eyebrow}</p>
          <h1 className="mt-6 text-[clamp(44px,5.6vw,80px)] font-semibold leading-[1] tracking-[-0.04em]">{contactPage.title}</h1>
          <p className="t-mono mt-6 text-body">{contactPage.meta_line}</p>
          <ol className="mt-10 space-y-5">
            {contactPage.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4">
                <span className="t-mono inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-cobalt">{i + 1}</span>
                <span className="pt-1 text-[17px] text-ink">{s}</span>
              </li>
            ))}
          </ol>
          <dl className="mt-12 divide-y divide-line border-y border-line">
            {contacts.map((c) => (
              <div key={c.label} className="flex justify-between gap-4 py-3.5 text-[15px]">
                <dt className="text-body">{c.label}</dt>
                <dd className="text-right">
                  {c.href ? (
                    <a href={c.href} className="link" {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {c.value}
                    </a>
                  ) : (
                    copy(c.value)
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="card p-6 sm:p-8 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
