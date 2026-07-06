"use strict";
const fs   = require("fs");
const path = require("path");

// mupdf WASM — pure JS, no native deps
const mupdf = require("./node_modules/mupdf");

const JOBS = [
  {
    pdf: "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Websites\\North Tide\\NorthTide Landing Page Single Page V4.pdf",
    dir: "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public\\work\\northtide",
    name: "hero"
  }
];

async function run() {
  // mupdf may need to be initialised
  const lib = typeof mupdf.ready === "function" ? await mupdf.ready : mupdf;

  for (const job of JOBS) {
    const data = fs.readFileSync(job.pdf);
    const doc  = lib.Document.openDocument(data, "application/pdf");
    const page = doc.loadPage(0);

    // Render at 2x scale for crisp 1920-wide output
    const matrix = lib.Matrix.scale(2, 2);
    const pixmap = page.toPixmap(matrix, lib.ColorSpace.DeviceRGB, false, true);

    fs.mkdirSync(job.dir, { recursive: true });

    // Save as PNG first, then we'll compress with sharp
    const pngPath = path.join(job.dir, job.name + ".tmp.png");
    const pngData = pixmap.asPNG();
    fs.writeFileSync(pngPath, pngData);
    console.log(`  PNG: ${Math.round(pngData.length / 1024)}KB  ${job.name}.tmp.png`);

    doc.destroy();
  }
}

run().catch(console.error);
