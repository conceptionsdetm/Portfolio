import * as mupdf from "./node_modules/mupdf/dist/mupdf.js";
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp   = require("./node_modules/sharp");

const SOURCES = {
  desktop: [
    "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Websites\\Fameline Mission Solutions\\Fameline Mission Solutions Landinge Page Single page.pdf",
    "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Websites\\Fameline Mission Solutions\\Fameline Mission Solutions Landinge Page Services Page.pdf",
  ],
  mobile: [
    "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Websites\\Fameline Mission Solutions\\Fameline Mission Solutions Landinge Page Single page Mobile Phone.pdf",
    "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Websites\\Fameline Mission Solutions\\Fameline Mission Solutions Landinge Page Services Page Mobile Phone.pdf",
  ],
};

const OUT_DIR = "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public\\work\\fameline-website";
fs.mkdirSync(OUT_DIR, { recursive: true });

async function renderPDF(pdfPath, scale) {
  const doc   = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
  const pages = [];
  for (let i = 0; i < doc.countPages(); i++) {
    const pg     = doc.loadPage(i);
    const pixmap = pg.toPixmap(mupdf.Matrix.scale(scale, scale), mupdf.ColorSpace.DeviceRGB, false, true);
    pages.push(Buffer.from(pixmap.asPNG()));
    pixmap.destroy();
  }
  doc.destroy();
  return pages;
}

async function stitch(pageBuffers) {
  const metas  = await Promise.all(pageBuffers.map(b => sharp(b).metadata()));
  const width  = Math.max(...metas.map(m => m.width));
  const totalH = metas.reduce((s, m) => s + m.height, 0);
  const ops    = [];
  let y = 0;
  for (let i = 0; i < pageBuffers.length; i++) {
    ops.push({ input: pageBuffers[i], top: y, left: 0 });
    y += metas[i].height;
  }
  return sharp({ create: { width, height: totalH, channels: 3, background: { r: 255, g: 255, b: 255 } } })
    .composite(ops).png().toBuffer();
}

async function run() {
  await mupdf.ready;

  // ── Desktop master (1920-pt pages, scale to 2× 1440px target) ────────────
  const desktopScale = (1440 * 2) / 1920;
  console.log("Rendering desktop pages...");
  const desktopPages = [];
  for (const p of SOURCES.desktop) {
    const pages = await renderPDF(p, desktopScale);
    pages.forEach((b, i) => console.log(`  ${path.basename(p)} p${i+1}`));
    desktopPages.push(...pages);
  }
  const desktopMaster = await stitch(desktopPages);
  console.log(`Desktop master stitched`);

  // ── Mobile master (430-pt pages, scale to 2× 390px target) ──────────────
  const mobileScale = (390 * 2) / 430;
  console.log("Rendering mobile pages...");
  const mobilePages = [];
  for (const p of SOURCES.mobile) {
    const pages = await renderPDF(p, mobileScale);
    mobilePages.push(...pages);
  }
  const mobileMaster = await stitch(mobilePages);
  console.log(`Mobile master stitched`);

  // ── Output variants ───────────────────────────────────────────────────────
  const variants = [
    { file: "preview-desktop.jpg", src: desktopMaster, width: 1440 },
    { file: "preview-tablet.jpg",  src: desktopMaster, width: 768  },
    { file: "preview-mobile.jpg",  src: mobileMaster,  width: 390  },
  ];

  for (const v of variants) {
    const out = path.join(OUT_DIR, v.file);
    await sharp(v.src).resize({ width: v.width }).toColorspace("srgb")
      .jpeg({ quality: 84, progressive: true }).toFile(out);
    const meta = await sharp(out).metadata();
    const sz   = Math.round(fs.statSync(out).size / 1024);
    console.log(`  ${v.file}: ${meta.width}×${meta.height}px — ${sz}KB`);
  }

  // ── Cover: 16:9 crop of landing page hero ────────────────────────────────
  const coverOut = path.join(OUT_DIR, "website-cover.jpg");
  const p0meta   = await sharp(desktopPages[0]).metadata();
  const cropH    = Math.round(p0meta.width * 9 / 16);
  await sharp(desktopPages[0])
    .extract({ left: 0, top: 0, width: p0meta.width, height: Math.min(cropH, p0meta.height) })
    .resize({ width: 1440 })
    .toColorspace("srgb").jpeg({ quality: 87 }).toFile(coverOut);
  console.log(`  website-cover.jpg saved`);

  console.log("Done.");
}

run().catch(console.error);
