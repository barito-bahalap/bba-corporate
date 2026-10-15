// Usage: pnpm add -D sharp && node scripts/optimize-images.mjs
// Put originals in image-src/work/<slug>.(jpg|png). Output: public/work/<slug>-<w>.(avif|webp|jpg)
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "image-src/work";
const OUT = "public/work";
const WIDTHS = [480, 960, 1440];
const RATIO = 10 / 16;

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
  const slug = path.parse(file).name;
  for (const w of WIDTHS) {
    const base = sharp(path.join(SRC, file)).resize(w, Math.round(w * RATIO), {
      fit: "cover",
      position: "top",
    });
    await base.clone().avif({ quality: 55 }).toFile(`${OUT}/${slug}-${w}.avif`);
    await base.clone().webp({ quality: 78 }).toFile(`${OUT}/${slug}-${w}.webp`);
    await base
      .clone()
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(`${OUT}/${slug}-${w}.jpg`);
  }
  console.log("done", slug);
}
