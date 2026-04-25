import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SVG_PATH = path.join(ROOT, "public/favicon.svg");
const OUT_DIR = path.join(ROOT, "public/icons");
const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const svgBuffer = fs.readFileSync(SVG_PATH);

for (const size of SIZES) {
  await sharp(svgBuffer, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(path.join(OUT_DIR, `icon-${size}x${size}.png`));
  console.log(`Generated icon-${size}x${size}.png`);
}
