import * as mupdf from "./node_modules/mupdf/dist/mupdf.js";
import fs from "fs";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp   = require("./node_modules/sharp");

await mupdf.ready;

const BASE = "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update";
const PUB  = "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public";

// ── helpers ─────────────────────────────────────────────────────────────────

async function renderFull(pdfPath, maxDim = 800) {
  const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
  const pg  = doc.loadPage(0);
  const b   = pg.getBounds();
  const pw  = b[2] - b[0], ph = b[3] - b[1];
  const sc  = maxDim / Math.max(pw, ph);
  const px  = pg.toPixmap(mupdf.Matrix.scale(sc, sc), mupdf.ColorSpace.DeviceRGB, true);
  const buf = Buffer.from(px.asPNG());
  px.destroy(); doc.destroy();
  return buf;
}

async function renderNavCrop(pdfPath, cropPts = 150, outW = 1440) {
  const doc   = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
  const pg    = doc.loadPage(0);
  const b     = pg.getBounds();
  const pw    = b[2] - b[0], ph = b[3] - b[1];
  const sc    = outW / pw;
  const px    = pg.toPixmap(mupdf.Matrix.scale(sc, sc), mupdf.ColorSpace.DeviceRGB, true);
  const full  = Buffer.from(px.asPNG());
  px.destroy(); doc.destroy();
  const cropH = Math.min(Math.round(cropPts * sc), Math.round(ph * sc));
  return sharp(full).extract({ left: 0, top: 0, width: outW, height: cropH }).toBuffer();
}

async function save(buf, outRel, trim = false) {
  const out = path.join(PUB, outRel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  let s = sharp(buf);
  if (trim) s = s.trim({ background: { r: 255, g: 255, b: 255, alpha: 0 }, threshold: 12 });
  await s.png({ compressionLevel: 9 }).toFile(out);
  const m  = await sharp(out).metadata();
  const kb = Math.round(fs.statSync(out).size / 1024);
  console.log(`  ✓ ${outRel} — ${m.width}×${m.height}  ${kb}KB`);
}

// ── task list ────────────────────────────────────────────────────────────────

const TASKS = [

  // ── Dedicated logo PDFs ──────────────────────────────────────────────────

  {
    label: "AMSOIL logo",
    async run() {
      const buf = await renderFull(
        `${BASE}\\Social Media\\Amsoil\\Calendar\\April 2026\\Post 4 - Understanding Oil Viscosity\\Assets\\Amsoil Logo\\Amsoil Logo.pdf`,
        600
      );
      await save(buf, "work/amsoil/logo.png", true);
    },
  },

  {
    label: "BWSS logo",
    async run() {
      const buf = await renderFull(
        `${BASE}\\Exhibitions\\Posidonia\\BWSS LED Wall Video\\Assets\\BWSS-Logo.pdf`,
        600
      );
      await save(buf, "work/bwss-email/logo.png",  true);
      await save(buf, "work/posidonia/logo.png",   true);
    },
  },

  {
    label: "Famelions logo",
    async run() {
      const buf = await renderFull(
        `${BASE}\\Social Media\\Fameline Holding Group\\Volley\\2025\\Logo proposal\\Famelions Logo.pdf`,
        600
      );
      await save(buf, "work/fameline-volley/logo.png", true);
    },
  },

  // ── Nav-bar crops from website design PDFs ───────────────────────────────

  {
    label: "NorthTide nav logo",
    async run() {
      const buf = await renderNavCrop(
        `${BASE}\\Websites\\North Tide\\NorthTide Landing Page Single Page V4.pdf`,
        400, 1440
      );
      await save(buf, "work/northtide/logo.png");
    },
  },

  {
    label: "MIA FemTech nav logo",
    async run() {
      const buf = await renderNavCrop(
        `${BASE}\\Websites\\Mia Femtech\\Mia Femtech Landing Page Single Page v2.pdf`,
        400, 1440
      );
      await save(buf, "work/mia-femtech/logo.png");
    },
  },

  {
    label: "Fameline Mission Solutions nav logo",
    async run() {
      const buf = await renderNavCrop(
        `${BASE}\\Websites\\Fameline Mission Solutions\\Fameline Mission Solutions Landinge Page Single page.pdf`,
        400, 1440
      );
      await save(buf, "work/fameline-website/logo.png");
    },
  },

  {
    label: "Albaflux brand guidelines logo",
    async run() {
      const buf = await renderNavCrop(
        `${BASE}\\Brand Guidelines\\Albaflux\\Brand Guidelines\\Brand Guidelines v2.pdf`,
        400, 1440
      );
      await save(buf, "work/albaflux-brand/logo.png");
      await save(buf, "work/albaflux-website/logo.png");
    },
  },

];

// ── run ──────────────────────────────────────────────────────────────────────

for (const task of TASKS) {
  console.log(`\n[${task.label}]`);
  try {
    await task.run();
  } catch (e) {
    console.error(`  ✗ Failed: ${e.message}`);
  }
}

console.log("\nDone.");
