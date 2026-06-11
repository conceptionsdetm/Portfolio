"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const name1 = "TIMONAS".split("");
const name2 = "STEFANOU".split("");

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-white"
      style={{ overflowX: "clip" }}
    >
      {/* Red left bar */}
      <div className="absolute left-0 top-0 h-full w-[6px] bg-vermillion z-20" />

      {/* ── Bauhaus yellow panel — slams in from right ── */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 h-full z-0 pointer-events-none"
        style={{ width: "clamp(200px,38%,560px)", background: "#FFDD00", borderLeft: "4px solid #000000" }}
        aria-hidden
      >
        {/* Bold primary shapes on yellow — 6 deliberate Bauhaus forms */}

        {/* Large black outlined circle */}
        <div style={{ position:"absolute", top:"8%", left:"50%", transform:"translateX(-50%)", width:130, height:130, borderRadius:"50%", border:"4px solid #000000", animation:"s-pulse 14s ease-in-out infinite" }} />

        {/* Solid red square — rotating */}
        <div style={{ position:"absolute", top:"28%", left:"14%", width:64, height:64, background:"#BE1622", animation:"s-rotr 18s linear infinite" }} />

        {/* Solid blue circle */}
        <div style={{ position:"absolute", top:"30%", right:"12%", width:56, height:56, borderRadius:"50%", background:"#00539F", animation:"s-float 11s ease-in-out infinite" }} />

        {/* Black horizontal rule across full panel width */}
        <div style={{ position:"absolute", top:"50%", left:0, right:0, height:"4px", background:"#000000" }} />

        {/* Black outlined square — counter-rotating */}
        <div style={{ position:"absolute", bottom:"22%", left:"18%", width:50, height:50, border:"4px solid #000000", animation:"s-rot 22s linear infinite" }} />

        {/* Solid yellow-on-black cross */}
        <div style={{ position:"absolute", bottom:"18%", right:"20%", width:20, height:4, background:"#000000" }} />
        <div style={{ position:"absolute", bottom:"16%", right:"22.6%", width:4, height:20, background:"#000000", animation:"s-blink 8s ease-in-out infinite" }} />

        {/* Small red dot */}
        <div style={{ position:"absolute", bottom:"35%", left:"58%", width:12, height:12, borderRadius:"50%", background:"#BE1622", animation:"s-float 7s ease-in-out infinite", animationDelay:"1s" }} />

        {/* Blue outlined small square bottom */}
        <div style={{ position:"absolute", bottom:"8%", left:"50%", transform:"translateX(-50%)", width:36, height:36, border:"3px solid #00539F", animation:"s-rotr 14s linear infinite" }} />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full pl-8 md:pl-14 pr-0">

        {/* TIMONAS — massive black */}
        <div className="overflow-hidden mb-0">
          <div className="flex">
            {name1.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "-115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black select-none"
                style={{ fontSize: "clamp(4rem,13vw,11rem)", lineHeight: 0.86, letterSpacing: "0.02em", color: "#000000" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 4px black Bauhaus rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left", height: "4px", background: "#000000" }}
          className="w-full mb-0"
        />

        {/* STEFANOU — massive red, offset right + green dot */}
        <div className="overflow-hidden pl-[4%] mb-5 md:mb-7">
          <div className="flex items-end">
            {name2.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.48 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black select-none"
                style={{ fontSize: "clamp(4rem,13vw,11rem)", lineHeight: 0.86, letterSpacing: "0.02em", color: "#BE1622" }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.45 }}
              className="ml-4 mb-3 flex-shrink-0"
            >
              <span className="relative flex h-5 w-5 md:h-6 md:w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                <span className="relative inline-flex rounded-full h-5 w-5 md:h-6 md:w-6 bg-green-500" />
              </span>
            </motion.span>
          </div>
        </div>

        {/* Fields of Work */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 1.1 }}
          className="mb-7 md:mb-9"
        >
          <div className="flex flex-wrap items-center gap-y-1">
            {["Brand Identity","Social Media Design","Website Design","Marketing Design","Motion Graphics","Creative Direction"].map((field, i, arr) => (
              <span key={field} className="flex items-center">
                <span
                  className="font-grotesk font-medium text-black/60 hover:text-black transition-colors duration-150 cursor-default"
                  style={{ fontSize: "clamp(0.78rem,1.3vw,1rem)", letterSpacing: "0.05em" }}
                >
                  {field}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-vermillion mx-3 md:mx-4 select-none" style={{ fontSize: "0.55rem" }}>◆</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.22 }}
          className="mb-10 md:mb-12 max-w-lg"
        >
          <p className="font-grotesk font-normal text-black/70 text-base md:text-lg leading-relaxed">
            Graphic designer from Limassol, Cyprus. BA in Graphic &amp; Advertising Design,
            Frederick University — Erasmus+ at Escuela de Arte, Sevilla.
          </p>
          <p className="font-grotesk font-light text-black/42 text-sm md:text-base leading-relaxed mt-3">
            Working across FemTech, healthcare, maritime logistics, automotive, and corporate
            services — contextual intelligence and visual precision on every brief.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.35 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-grotesk font-bold text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ background: "#BE1622", color: "#FFFFFF", boxShadow: "4px 4px 0px #000000" }}
          >
            View Work →
          </Link>
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-grotesk font-bold text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ border: "2px solid #000000", color: "#000000", boxShadow: "4px 4px 0px #000000" }}
          >
            Contact →
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-grotesk font-bold text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ border: "2px solid #00539F", color: "#00539F", boxShadow: "4px 4px 0px #00539F" }}
          >
            Instagram ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-8 left-8 md:left-14 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
