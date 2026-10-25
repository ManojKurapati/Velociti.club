/**
 * Grades every source photo so the site reads as one set, then exports
 * AVIF + WebP at 2400w, 1600w and 800w (no upscaling; smaller sources also
 * get a rendition at their own width) next to the original.
 *
 *   1. Desaturate to ~70%
 *   2. Cool the white balance slightly
 *   3. Lift the blacks to #0B0D12
 *
 * Usage: npm run grade-images            (all JPG/PNG under public/images)
 *        npm run grade-images -- path.jpg (specific files)
 *
 * Source naming: public/images/industries/<slug>-hero.jpg and <slug>-alt.jpg.
 * Components pick up graded files automatically (see components/art/IndustryImage.tsx).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public/images");
const WIDTHS = [2400, 1600, 800];
const BLACK = [0x0b, 0x0d, 0x12]; // night

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p);
    // Skip already-graded renditions like foo-1600.webp.
    return /\.(jpe?g|png)$/i.test(d.name) && !/-\d{3,4}\.(jpe?g|png)$/i.test(d.name) ? [p] : [];
  });
}

async function grade(file: string) {
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  const graded = sharp(file)
    .rotate()
    .modulate({ saturation: 0.7 })
    // Cool: pull red down a touch, push blue up a touch.
    .recomb([
      [0.96, 0.02, 0.0],
      [0.0, 1.0, 0.0],
      [0.0, 0.02, 1.04],
    ])
    // Lift blacks: out = in * (255 - b) / 255 + b, per channel.
    .linear(
      BLACK.map((b) => (255 - b) / 255),
      BLACK,
    );
  const buf = await graded.toBuffer();
  const meta = await sharp(buf).metadata();
  // Only emit renditions the source can fill, so srcset widths stay truthful;
  // a source narrower than 2400 px also gets one rendition at its own width.
  const srcW = meta.width ?? 0;
  const widths = WIDTHS.filter((w) => w <= srcW);
  if (srcW < WIDTHS[0] && !widths.includes(srcW)) widths.unshift(srcW);
  for (const w of widths) {
    const img = sharp(buf).resize({ width: w, withoutEnlargement: true });
    await img.clone().avif({ quality: 52, effort: 6 }).toFile(`${base}-${w}.avif`);
    await img.clone().webp({ quality: 74 }).toFile(`${base}-${w}.webp`);
  }
  console.log("graded", path.relative(process.cwd(), file));
}

const args = process.argv.slice(2);
const files = args.length ? args.map((a) => path.resolve(a)) : walk(ROOT);
if (!files.length) console.log("No source images found under public/images. Download the Unsplash originals first (see public/images/CREDITS.md).");
for (const f of files) await grade(f);
