import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/utils";
import { IndustryArt } from "./IndustryArt";

/** Widths of the graded AVIF renditions scripts/grade-images.ts produced for `base`, smallest first. */
function gradedWidths(base: string): number[] {
  const dir = path.join(process.cwd(), "public", path.dirname(base));
  const name = path.basename(base);
  if (!fs.existsSync(dir)) return [];
  const re = new RegExp(`^${name.replace(/[-]/g, "\\-")}-(\\d+)\\.avif$`);
  return fs
    .readdirSync(dir)
    .map((f) => f.match(re)?.[1])
    .filter((w): w is string => !!w)
    .map(Number)
    .sort((a, b) => a - b);
}

/** True when graded renditions exist for `base` (e.g. /images/trust-servers). */
export function hasGraded(base: string) {
  return gradedWidths(base).length > 0;
}

/**
 * Graded photo (AVIF/WebP) when one exists under /public/images, otherwise the
 * brand line illustration for that industry. Static export, so <picture> is
 * used instead of the next/image optimiser.
 */
export function GradedPicture({
  base,
  alt,
  className,
  sizes = "100vw",
  priority,
}: {
  base: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const widths = gradedWidths(base);
  const srcset = (ext: string) => widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");
  const fallback = widths.find((w) => w >= 1200) ?? widths[widths.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={`${base}-${fallback}.webp`}
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}

export function IndustryImage({
  slug,
  alt,
  variant = "hero",
  chips,
  className,
  sizes,
  priority,
}: {
  slug: string;
  alt: string;
  variant?: "hero" | "alt";
  chips?: string[];
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  // Prefer the requested photo, then the industry's other photo, then the line illustration.
  const other = variant === "hero" ? "alt" : "hero";
  const base = [`/images/industries/${slug}-${variant}`, `/images/industries/${slug}-${other}`].find(hasGraded);
  if (base) return <GradedPicture base={base} alt={alt} className={className} sizes={sizes} priority={priority} />;
  return <IndustryArt slug={slug} chips={chips} className={cn("h-full w-full", className)} />;
}

/** Graded photo at `base` when one exists, otherwise the given illustration. */
export function PhotoOr({
  base,
  alt,
  fallback,
  className,
  sizes,
  priority,
  night,
}: {
  base: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** On dark sections: 25% night overlay and a bottom scrim, per the image guidelines. */
  night?: boolean;
}) {
  if (!hasGraded(base)) return <>{fallback}</>;
  return (
    <>
      <GradedPicture base={base} alt={alt} className={className} sizes={sizes} priority={priority} />
      {night && (
        <>
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#0B0D12]/25" />
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(11,13,18,0.7),transparent)]" />
        </>
      )}
    </>
  );
}
