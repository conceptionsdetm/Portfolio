"use strict";
// Re-compress the hero crop at better dimensions and quality
const sharp = require("./node_modules/sharp");
const path  = require("path");

const dir = "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public\\work\\northtide";

async function run() {
  // Hero: top 16:7 crop (good for portfolio cards) at 1920px wide
  const raw = path.join(dir, "hero.jpg");
  const out = path.join(dir, "cover.jpg");

  // Read existing hero.jpg and re-crop/compress
  const meta = await sharp(raw).metadata();
  const cropH = Math.round(meta.width * 7 / 16);

  await sharp(raw)
    .extract({ left: 0, top: 0, width: meta.width, height: Math.min(cropH, meta.height) })
    .resize({ width: 1920 })
    .toColorspace("srgb")
    .jpeg({ quality: 84, chromaSubsampling: "4:2:0" })
    .toFile(out);

  const sz = require("fs").statSync(out).size;
  console.log(`cover.jpg: ${Math.round(sz/1024)}KB  (1920×${Math.round(1920*7/16)})`);
}
run().catch(console.error);
