import { notFound } from "next/navigation";
import { legalPages } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";
import { copy } from "@/components/site/Copy";
import { CookieSettingsButton } from "@/components/site/CookieSettingsButton";

type Key = keyof typeof legalPages;
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(legalPages).map((page) => ({ page }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const key = (await params).page as Key;
  const p = legalPages[key];
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.description, path: `/legal/${key}` });
}

export default async function LegalPage({ params }: { params: Promise<{ page: string }> }) {
  const key = (await params).page as Key;
  const p = legalPages[key];
  if (!p) notFound();
  return (
    <section className="pb-[72px] pt-16 lg:pb-[120px] lg:pt-24">
      <div className="container-site max-w-[808px]">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-5 text-[clamp(40px,5vw,64px)] font-semibold leading-[1.04] tracking-[-0.04em]">{p.title}</h1>
        <p className="t-mono mt-5 text-body">Last updated {copy(p.updated)}</p>
        <p className="mt-6 rounded-[12px] border border-line bg-surface p-4 text-[14px]">{copy("[Placeholder text — replace with counsel-approved copy before launch]")}</p>
        <div className="prose-velociti mt-10">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <p>{copy(s.p)}</p>
            </section>
          ))}
          {key === "cookies" && (
            <p>
              <CookieSettingsButton />
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
