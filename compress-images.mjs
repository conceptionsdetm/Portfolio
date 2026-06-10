import sharp from "./node_modules/sharp/lib/index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workDir   = path.join(__dirname, "public", "work");
const MAX_PX    = 1920;
const QUALITY   = 82;

function getAllJpegs(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) files = files.concat(getAllJpegs(full));
    else if (/\.(jpg|jpeg)$/i.test(item.name)) files.push(full);
  }
  return files;
}

async function compress(filePath) {
  const origSize = fs.statSync(filePath).size;
  const buf = await sharp(filePath, { failOnError: false })
    .rotate()
    .resize({ width: MAX_PX, height: MAX_PX, fit: "inside", withoutEnlargement: true })
    .toColorspace("srgb")
    .jpeg({ quality: QUALITY, chromaSubsampling: "4:2:0" })
    .toBuffer();

  if (buf.length < origSize) {
    fs.writeFileSync(filePath, buf);
    return { saved: origSize - buf.length, was: origSize, now: buf.length };
  }
  return { saved: 0, was: origSize, now: origSize };
}

const images = getAllJpegs(workDir);
let totalBefore = 0, totalAfter = 0, changed = 0;

for (const img of images) {
  try {
    const r = await compress(img);
    totalBefore += r.was;
    totalAfter  += r.now;
    if (r.saved > 0) {
      changed++;
      const pct = Math.round((r.saved / r.was) * 100);
      console.log(`  -${pct}%  ${path.relative(workDir, img)}`);
    }
  } catch (e) {
    console.log(`  SKIP: ${path.basename(img)} — ${e.message}`);
  }
}

const savedMB  = ((totalBefore - totalAfter) / 1048576).toFixed(1);
const beforeMB = (totalBefore / 1048576).toFixed(1);
const afterMB  = (totalAfter  / 1048576).toFixed(1);
console.log(`\nDone: ${changed}/${images.length} reduced.`);
console.log(`${beforeMB} MB  →  ${afterMB} MB  (saved ${savedMB} MB)`);
