import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items, tone = "light" }: { items: { name: string; path: string }[]; tone?: "light" | "night" }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav aria-label="Breadcrumb" className="t-mono">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={it.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className={tone === "night" ? "text-night-body" : "text-body"}>
                    {it.name}
                  </span>
                ) : (
                  <>
                    <Link href={it.path} className={tone === "night" ? "text-cobalt-on-night hover:text-white" : "text-cobalt hover:text-cobalt-hover"}>
                      {it.name}
                    </Link>
                    <span aria-hidden="true" className="text-muted-display">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
