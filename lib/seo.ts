import type { Metadata } from "next";
import { site } from "@/content/site";

/** Same rule as lib/og-pages ogKey (kept here so seo.ts stays free of content imports). */
function ogImage(path: string) {
  const key = path.replace(/^\/|\/$/g, "").replace(/\//g, "-");
  return { url: `/og/${key || "home"}.png`, width: 1200, height: 630 };
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

/** Builds per-page metadata with canonical URL and Open Graph defaults. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type, siteName: site.name, locale: "en_US", images: [ogImage(path)] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage(path).url] },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: absoluteUrl("/logo.png"),
  description: site.description,
  email: site.email,
  sameAs: site.social.filter((s) => !s.href.includes("wa.me")).map((s) => s.href),
  founder: [{ "@type": "Person", name: "Manoj Kurapati" }],
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  author = site.name,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    ...(datePublished ? { datePublished } : {}),
    author: { "@type": "Organization", name: author, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") } },
  };
}
