import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/utils";
import { IndustryArt } from "./IndustryArt";

const WIDTHS = [800, 1600, 2400];

/** True when scripts/grade-images.ts has produced graded renditions for `base`. */
export function hasGraded(base: string) {
  return fs.existsSync(path.join(process.cwd(), "public", `${base}-1600.avif`));
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
  const srcset = (ext: string) => WIDTHS.map((w) => `${base}-${w}.${ext} ${w}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={srcset("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcset("webp")} sizes={sizes} />
      <img
        src={`${base}-1600.webp`}
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
  const base = `/images/industries/${slug}-${variant}`;
  if (hasGraded(base)) return <GradedPicture base={base} alt={alt} className={className} sizes={sizes} priority={priority} />;
  return <IndustryArt slug={slug} chips={chips} className={cn("h-full w-full", className)} />;
}
