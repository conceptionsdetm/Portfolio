import * as mupdf from "./node_modules/mupdf/dist/mupdf.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp   = require("./node_modules/sharp");

const PDF_PATH = "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Websites\\North Tide\\NorthTide Landing Page Single Page V4.pdf";
const OUT_DIR  = "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public\\work\\northtide";

async function run() {
  await mupdf.ready;

  const data   = fs.readFileSync(PDF_PATH);
  const doc    = mupdf.Document.openDocument(data, "application/pdf");
  const page   = doc.loadPage(0);

  // Render at 2x to get crisp 1920px output
  const scale  = mupdf.Matrix.scale(2, 2);
  const pixmap = page.toPixmap(scale, mupdf.ColorSpace.DeviceRGB, false, true);

  const pngBuf = Buffer.from(pixmap.asPNG());
  console.log(`  Raw PNG: ${Math.round(pngBuf.length / 1024)}KB  (${pixmap.getWidth()}×${pixmap.getHeight()}px)`);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Get full-page dims to crop top ~56% as hero (16:9 ratio roughly)
  const fullH = pixmap.getHeight();
  const w     = pixmap.getWidth();
  const heroH = Math.round(w * 9 / 16);  // 16:9 crop

  // Compress full page screenshot
  const fullJpg = path.join(OUT_DIR, "full-page.jpg");
  await sharp(pngBuf)
    .resize({ width: 1920, withoutEnlargement: true })
    .toColorspace("srgb")
    .jpeg({ quality: 85 })
    .toFile(fullJpg);

  // Crop hero section (top portion)
  const heroJpg = path.join(OUT_DIR, "hero.jpg");
  await sharp(pngBuf)
    .resize({ width: 1920, withoutEnlargement: true })
    .extract({ left: 0, top: 0, width: w > 1920 ? 1920 : w, height: Math.min(heroH, fullH) })
    .toColorspace("srgb")
    .jpeg({ quality: 88 })
    .toFile(heroJpg);

  const heroSz = Math.round(fs.statSync(heroJpg).size / 1024);
  const fullSz = Math.round(fs.statSync(fullJpg).size / 1024);
  console.log(`  hero.jpg: ${heroSz}KB`);
  console.log(`  full-page.jpg: ${fullSz}KB`);

  doc.destroy();
  console.log("Done.");
}

run().catch(console.error);
