import { ogKey, ogPages } from "@/lib/og-pages";
import { renderOg } from "@/lib/og";

// Emitted as real .png files so static hosting serves the right content type.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return ogPages().map((p) => ({ name: ogKey(p.path) }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const page = ogPages().find((p) => ogKey(p.path) === name);
  if (!page) return new Response("Not found", { status: 404 });
  return renderOg({ title: page.title, eyebrow: page.eyebrow });
}
