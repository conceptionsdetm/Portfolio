// CommonJS — compress all work images from their ORIGINAL source files
"use strict";
const sharp = require("./node_modules/sharp");
const fs    = require("fs");
const path  = require("path");

const SRC_BASE = "C:\\Users\\tstefanou\\Desktop\\Timonas\\Portfolio Update";
const DST_BASE = "C:\\Users\\tstefanou\\Portfolio\\portfolio-pro\\public\\work";
const MAX_PX   = 1920;
const QUALITY  = 82;

// Map of dest-relative paths → source absolute paths
// Re-copy + compress in one shot from originals
const MAP = [
  // AMSOIL
  ["amsoil\\post-01.jpg",          "Social Media\\Amsoil\\Calendar\\May 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post.jpg"],
  ["amsoil\\post-02.jpg",          "Social Media\\Amsoil\\Calendar\\May 2026\\Post 2 - Blog Feature - Head Gaskets\\Posts\\Facebook\\1.jpg"],
  ["amsoil\\post-03.jpg",          "Social Media\\Amsoil\\Calendar\\May 2026\\Post 2 - Blog Feature - Head Gaskets\\Posts\\Facebook\\2.jpg"],
  ["amsoil\\extra-9.jpg",          "Social Media\\Amsoil\\Calendar\\May 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post.jpg"],
  ["amsoil\\extra-10.jpg",         "Social Media\\Amsoil\\Calendar\\May 2026\\Post 2 - Blog Feature - Head Gaskets\\Posts\\Facebook\\1.jpg"],
  ["amsoil\\apr-carousel-01.jpg",  "Social Media\\Amsoil\\Calendar\\April 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post - Carousel\\1.jpg"],
  ["amsoil\\apr-carousel-02.jpg",  "Social Media\\Amsoil\\Calendar\\April 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post - Carousel\\2.jpg"],
  ["amsoil\\apr-carousel-03.jpg",  "Social Media\\Amsoil\\Calendar\\April 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post - Carousel\\3.jpg"],
  ["amsoil\\apr-carousel-04.jpg",  "Social Media\\Amsoil\\Calendar\\April 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post - Carousel\\4.jpg"],
  ["amsoil\\apr-carousel-05.jpg",  "Social Media\\Amsoil\\Calendar\\April 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post - Carousel\\5.jpg"],
  ["amsoil\\apr-carousel-06.jpg",  "Social Media\\Amsoil\\Calendar\\April 2026\\Post 1 - Product Spotlight - Signature Series 5W-30\\Posts\\Instagram\\Post - Carousel\\6.jpg"],
  // Fameline social
  ["fameline-social\\charity.jpg",      "Social Media\\Fameline Holding Group\\International-Day-Of-Charity-Heri-me-Heri.jpg"],
  ["fameline-social\\impa.jpg",         "Social Media\\Fameline Holding Group\\IMPA London 2025 Social Media Post.jpg"],
  ["fameline-social\\save-the-date.jpg","Social Media\\Fameline Holding Group\\Save-the-date-2025.jpg"],
  ["fameline-social\\movember.jpg",     "Social Media\\Fameline Holding Group\\Movember-Invitation.jpg"],
  ["fameline-social\\xmas.jpg",         "Social Media\\Fameline Holding Group\\Xmas-Invitation.jpg"],
  ["fameline-social\\meet-buyer-1.jpg", "Social Media\\Fameline Holding Group\\Meet-the-Buyer-Constantinos-Moyseos-v1.jpg"],
  ["fameline-social\\meet-buyer-2.jpg", "Social Media\\Fameline Holding Group\\Meet-the-Buyer---Andreas-Alvanis.jpg"],
  ["fameline-social\\meet-buyer-3.jpg", "Social Media\\Fameline Holding Group\\Meet-the-buyer-Constantino-Moyseos-2026.jpg"],
  ["fameline-social\\blood-donation.jpg","Social Media\\Fameline Holding Group\\Blood-Donation.jpg"],
  ["fameline-social\\hearts-of-gold.jpg","Social Media\\Fameline Holding Group\\Hearts-of-gold.jpg"],
  ["fameline-social\\marathon.jpg",     "Social Media\\Fameline Holding Group\\Limassol-Marathon-Internal-Post-2026.jpg"],
  ["fameline-social\\tsikno.jpg",       "Social Media\\Fameline Holding Group\\Tsikno-Post-2026.jpg"],
  // Volleyball
  ["fameline-volley\\tank-front.jpg",  "Social Media\\Fameline Holding Group\\Volley\\2025\\Kits Mockup\\Tank top Front.jpg"],
  ["fameline-volley\\tank-back.jpg",   "Social Media\\Fameline Holding Group\\Volley\\2025\\Kits Mockup\\Tank top Back.jpg"],
  ["fameline-volley\\shorts.jpg",      "Social Media\\Fameline Holding Group\\Volley\\2025\\Kits Mockup\\Shorts front.jpg"],
  ["fameline-volley\\good-luck.jpg",   "Social Media\\Fameline Holding Group\\Volley\\2025\\Good luck team post\\Famelions-Good-Luck-Team-Post.jpg"],
  // MIA FemTech
  ["mia-femtech\\post-01.jpg",           "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 1 - The Experience Begins\\Instagram Post - The Experience Begins.jpg"],
  ["mia-femtech\\post-02.jpg",           "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 3 - Confidence is a Luxury\\Post-3 - Confidence is a Luxury - Instagram Post.jpg"],
  ["mia-femtech\\post-03.jpg",           "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 5 - The Feel-Good Checklist (Pre-Consultation)\\Post 5 - The Feel-Good Checklist - IG Post.jpg"],
  ["mia-femtech\\post-05.jpg",           "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 7 - Soft Luxury\\Post-7 - Soft Luxury - Instagram Post.jpg"],
  ["mia-femtech\\dec-01-experience.jpg", "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 1 - The Experience Begins\\Instagram Post - The Experience Begins.jpg"],
  ["mia-femtech\\dec-03-confidence.jpg", "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 3 - Confidence is a Luxury\\Post-3 - Confidence is a Luxury - Instagram Post.jpg"],
  ["mia-femtech\\dec-05-checklist.jpg",  "Social Media\\Mia Femtech\\Calendars\\December 25\\Post 5 - The Feel-Good Checklist (Pre-Consultation)\\Post 5 - The Feel-Good Checklist - IG Post.jpg"],
  ["mia-femtech\\dec-07-soft-luxury.jpg","Social Media\\Mia Femtech\\Calendars\\December 25\\Post 7 - Soft Luxury\\Post-7 - Soft Luxury - Instagram Post.jpg"],
  // Jackets — SinoMed
  ["sinomed\\jacket-01.jpg","Clothes Designs\\SinoMed\\Old\\Sinomed Blue Jacket White Logo.jpg"],
  ["sinomed\\jacket-02.jpg","Clothes Designs\\SinoMed\\Old\\Sinomed Blue Jacket Blue Logo.jpg"],
  ["sinomed\\jacket-03.jpg","Clothes Designs\\SinoMed\\Old\\Sinomed Black Jacket White Logo.jpg"],
  ["sinomed\\jacket-04.jpg","Clothes Designs\\SinoMed\\Old\\Sinomed Black Jacket Grey Logo.jpg"],
  ["sinomed\\jacket-05.jpg","Clothes Designs\\SinoMed\\Old\\Sinomed Grey Jacket Original Logo.jpg"],
  ["sinomed\\jacket-06.jpg","Clothes Designs\\SinoMed\\Sinomed Black Jacket Red - White Logo.jpg"],
  ["sinomed\\jacket-07.jpg","Clothes Designs\\SinoMed\\Sinomed Grey Jacket Original Logo.jpg"],
  // LubeDesk
  ["lubedesk\\jacket-01.jpg","Clothes Designs\\LubeDesk\\old\\LubeDesk Black Jacket White Logo.jpg"],
  ["lubedesk\\jacket-02.jpg","Clothes Designs\\LubeDesk\\old\\LubeDesk Black Jacket Grey Logo.jpg"],
  ["lubedesk\\jacket-03.jpg","Clothes Designs\\LubeDesk\\LubeDesk Blue Jacket Blue Logo.jpg"],
  ["lubedesk\\jacket-04.jpg","Clothes Designs\\LubeDesk\\LubeDesk Blue Jacket White Logo.jpg"],
  // Marathon
  ["marathon\\front.jpg","Clothes Designs\\Fameline Holding Group Marathon t-shirt 2026\\For Printer Viewing_FRONT.jpg"],
  ["marathon\\back.jpg", "Clothes Designs\\Fameline Holding Group Marathon t-shirt 2026\\For Printer Viewing_BACK.jpg"],
  // MIE Football
  ["mie-football\\front.jpg",   "Clothes Designs\\MIE Group\\Football\\front top.jpg"],
  ["mie-football\\back.jpg",    "Clothes Designs\\MIE Group\\Football\\back top.jpg"],
  ["mie-football\\full-kit.jpg","Clothes Designs\\MIE Group\\Football\\full kit front.jpg"],
  // BWSS email
  ["bwss-email\\header-00.jpg", "Email Campaigns\\BWSS\\Chemical Supply Operations\\Header.jpg"],
  ["bwss-email\\header-01.jpg", "Email Campaigns\\BWSS\\The Importance of Safe Chemical Transport in Maritime Logistics\\1.The-Importance-of-Safe-Chemical-Transport-in-Maritime-Logistics-Header.jpg"],
  ["bwss-email\\linkedin-01.jpg","Email Campaigns\\BWSS\\The Importance of Safe Chemical Transport in Maritime Logistics\\1.The-Importance-of-Safe-Chemical-Transport-in-Maritime-Logistics-Linkedin.jpg"],
  ["bwss-email\\header-02.jpg", "Email Campaigns\\BWSS\\A Guide to Ballast Water Management Compliance\\2.A-Guide-to-Ballast-Water-Management-Compliance-Header.jpg"],
  ["bwss-email\\linkedin-02.jpg","Email Campaigns\\BWSS\\A Guide to Ballast Water Management Compliance\\2.A-Guide-to-Ballast-Water-Management-Compliance-Linkedin.jpg"],
  ["bwss-email\\header-03.jpg", "Email Campaigns\\BWSS\\The Future of Ballast Water Systems Innovation and Sustainability\\3.The-Future-of-Ballast-Water-Systems-Innovation-and-Sustainability-Header.jpg"],
  ["bwss-email\\linkedin-03.jpg","Email Campaigns\\BWSS\\The Future of Ballast Water Systems Innovation and Sustainability\\3.The-Future-of-Ballast-Water-Systems-Innovation-and-Sustainability-Linkedin.jpg"],
  ["bwss-email\\header-04.jpg", "Email Campaigns\\BWSS\\Case Study Transforming Shipping with BWSS Solutions\\4.-Case-Study-Transforming-Shipping-with-BWSS-Solutions-Header.jpg"],
  ["bwss-email\\linkedin-04.jpg","Email Campaigns\\BWSS\\Case Study Transforming Shipping with BWSS Solutions\\4.-Case-Study-Transforming-Shipping-with-BWSS-Solutions-LinkedIn.jpg"],
  ["bwss-email\\header-05.jpg", "Email Campaigns\\BWSS\\Why Ballast Water Treatment Matters for Marine Ecosystems\\5.Why-Ballast-Water-Treatment-Matters-for-Marine-Ecosystems-Header.jpg"],
  // Stationery
  ["fameline-stationery\\envelope-dl.jpg","Stationary\\Fameline Holding Group\\DL-Envelope.jpg"],
];

async function run() {
  let totalSaved = 0, count = 0, errors = 0;

  for (const [rel, srcRel] of MAP) {
    const dst = path.join(DST_BASE, rel);
    // First try the mapped source
    let src = path.join(SRC_BASE, srcRel);
    if (!fs.existsSync(src)) {
      // Fall back to existing file in dst
      src = dst;
      if (!fs.existsSync(src)) { console.log(`MISSING: ${rel}`); errors++; continue; }
    }

    const origSize = fs.existsSync(dst) ? fs.statSync(dst).size : fs.statSync(src).size;

    try {
      const buf = await sharp(src, { failOnError: false })
        .rotate()
        .resize({ width: MAX_PX, height: MAX_PX, fit: "inside", withoutEnlargement: true })
        .toColorspace("srgb")
        .jpeg({ quality: QUALITY, chromaSubsampling: "4:2:0" })
        .toBuffer();

      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.writeFileSync(dst, buf);
      const saved = origSize - buf.length;
      totalSaved += Math.max(0, saved);
      count++;
      const pct = Math.round((buf.length / origSize) * 100);
      console.log(`  ${pct}%  ${buf.length >> 10}KB  ${rel}`);
    } catch (e) {
      console.log(`  ERR: ${rel} — ${e.message}`);
      errors++;
    }
  }

  // Also compress anything already in dst not in the map
  function allJpegs(dir) {
    let out = [];
    if (!fs.existsSync(dir)) return out;
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, f.name);
      if (f.isDirectory()) out = out.concat(allJpegs(full));
      else if (/\.jpe?g$/i.test(f.name)) {
        const rel2 = path.relative(DST_BASE, full).toLowerCase();
        const inMap = MAP.some(([r]) => r.toLowerCase() === rel2);
        if (!inMap) out.push(full);
      }
    }
    return out;
  }

  for (const fp of allJpegs(DST_BASE)) {
    try {
      const orig = fs.statSync(fp).size;
      const buf = await sharp(fp, { failOnError: false })
        .rotate().resize({ width: MAX_PX, height: MAX_PX, fit: "inside", withoutEnlargement: true })
        .toColorspace("srgb").jpeg({ quality: QUALITY, chromaSubsampling: "4:2:0" }).toBuffer();
      if (buf.length < orig) {
        fs.writeFileSync(fp, buf);
        totalSaved += orig - buf.length;
        count++;
        const rel2 = path.relative(DST_BASE, fp);
        console.log(`  ${Math.round(buf.length/orig*100)}%  ${buf.length>>10}KB  ${rel2}`);
      }
    } catch {}
  }

  console.log(`\n✓ ${count} images written. ${errors} skipped.`);
  console.log(`Saved: ${(totalSaved/1048576).toFixed(1)} MB total`);
}

run().catch(console.error);
