"use strict";
const sharp = require("./node_modules/sharp");
const fs    = require("fs");
const path  = require("path");

const SRC = "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update\\Social Media\\Amsoil\\Calendar\\May 2026";
const DST = "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public\\work\\amsoil";

const MAP = [
  ["post-01.jpg", "Post 1 -  Built for Extreme Heat\\Posts\\Facebook Post\\1.jpg"],
  ["post-02.jpg", "Post 1 -  Built for Extreme Heat\\Posts\\Facebook Post\\2.jpg"],
  ["post-03.jpg", "Post 2 - Protection Beyond the shore\\Posts\\Facebook Post\\1.jpg"],
  ["extra-9.jpg", "Post 1 -  Built for Extreme Heat\\Posts\\Instagram Post\\Post - Carousel\\1.jpg"],
  ["extra-10.jpg","Post 1 -  Built for Extreme Heat\\Posts\\Instagram Post\\Post - Carousel\\2.jpg"],
];

async function run() {
  for (const [dst, srcRel] of MAP) {
    const src = path.join(SRC, srcRel);
    const out = path.join(DST, dst);
    if (!fs.existsSync(src)) { console.log(`MISSING: ${src}`); continue; }
    try {
      const buf = await sharp(src, { failOnError: false })
        .rotate()
        .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
        .toColorspace("srgb")
        .jpeg({ quality: 82, chromaSubsampling: "4:2:0" })
        .toBuffer();
      fs.writeFileSync(out, buf);
      console.log(`  OK  ${buf.length >> 10}KB  ${dst}`);
    } catch(e) { console.log(`  ERR: ${dst} — ${e.message}`); }
  }
}
run().catch(console.error);
