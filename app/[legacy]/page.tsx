import redirects from "@/redirects/redirects.json";
import { LegacyRedirect } from "@/components/site/LegacyRedirect";

/**
 * Old velociti.club routes that now live elsewhere. The redirect host for
 * velociti.club returns real 301s; these pages cover visitors who reach the
 * old paths on thinkvelociti.com itself (static hosting cannot send 301s).
 */
const map = Object.fromEntries(Object.entries(redirects.paths).filter(([from, to]) => from !== to)) as Record<string, string>;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(map).map((from) => ({ legacy: from.slice(1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ legacy: string }> }) {
  const to = map[`/${(await params).legacy}`];
  return { title: "Moved", robots: { index: false, follow: true }, alternates: { canonical: to } };
}

export default async function LegacyPage({ params }: { params: Promise<{ legacy: string }> }) {
  const to = map[`/${(await params).legacy}`];
  return <LegacyRedirect to={to} />;
}
