"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const name1 = "TIMONAS".split("");
const name2 = "STEFANOU".split("");

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-ink"
      style={{ overflowX: "clip" }}
    >
      {/* Vermillion left edge bar */}
      <div className="absolute left-0 top-0 h-full w-[5px] bg-vermillion z-20" />

      {/* CDTM ghost text — behind names */}
      <div
        className="absolute select-none pointer-events-none z-0"
        style={{ left: "4%", top: "14%" }}
        aria-hidden
      >
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "26vw", color: "rgba(240,235,226,0.032)", letterSpacing: "0.14em" }}
        >
          CDTM
        </span>
      </div>

      {/* ── Shapes ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>

        {/* ── Right side ── */}
        {/* Large gold circle — filled wash */}
        <div style={{ position:"absolute", top:"8%", right:"4%", width:120, height:120, borderRadius:"50%", background:"rgba(201,168,76,0.14)", border:"1.5px solid rgba(201,168,76,0.4)", animation:"s-pulse 13s ease-in-out infinite" }} />
        {/* Medium gold circle — filled */}
        <div style={{ position:"absolute", top:"12%", right:"7%", width:60, height:60, borderRadius:"50%", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.3)", animation:"s-scale 9s ease-in-out infinite", animationDelay:"1s" }} />
        {/* Gold dot */}
        <div style={{ position:"absolute", top:"7%", right:"14%", width:10, height:10, borderRadius:"50%", background:"#C9A84C", opacity:.55, animation:"s-float 7s ease-in-out infinite" }} />

        {/* Vermillion square top-right — filled */}
        <div style={{ position:"absolute", top:"22%", right:"5%", width:60, height:60, background:"rgba(208,31,43,0.18)", border:"2px solid rgba(208,31,43,0.5)", animation:"s-rotr 20s linear infinite" }} />
        {/* Vermillion slash top-right */}
        <div style={{ position:"absolute", top:"18%", right:"3%", width:120, height:2, background:"#D01F2B", opacity:.4, animation:"s-shrink 10s ease-in-out infinite" }} />
        {/* Vermillion dot top-right */}
        <div style={{ position:"absolute", top:"30%", right:"9%", width:7, height:7, background:"#D01F2B", opacity:.5, animation:"s-float 5s ease-in-out infinite", animationDelay:"1s" }} />

        {/* Paper vertical line — far right */}
        <div style={{ position:"absolute", top:"15%", right:"1.5%", width:1, height:220, background:"rgba(240,235,226,0.09)", animation:"s-rise 15s ease-in-out infinite" }} />
        {/* Paper vertical line — inner right */}
        <div style={{ position:"absolute", top:"25%", right:"18%", width:1, height:140, background:"rgba(240,235,226,0.07)", animation:"s-rise 11s ease-in-out infinite", animationDelay:"3s" }} />

        {/* Mid-right: cross */}
        <div style={{ position:"absolute", top:"50%", right:"12%", width:16, height:1, background:"rgba(240,235,226,0.14)" }} />
        <div style={{ position:"absolute", top:"47.5%", right:"11.5%", width:1, height:16, background:"rgba(240,235,226,0.14)", animation:"s-blink 9s ease-in-out infinite" }} />

        {/* Gold circle lower right — filled */}
        <div style={{ position:"absolute", bottom:"20%", right:"7%", width:90, height:90, borderRadius:"50%", background:"rgba(201,168,76,0.12)", border:"1.5px solid rgba(201,168,76,0.35)", animation:"s-float 11s ease-in-out infinite" }} />
        {/* Gold dot lower-right */}
        <div style={{ position:"absolute", bottom:"26%", right:"4%", width:11, height:11, borderRadius:"50%", background:"#C9A84C", opacity:.4, animation:"s-float 6s ease-in-out infinite", animationDelay:"1.5s" }} />

        {/* Gold rule */}
        <div style={{ position:"absolute", bottom:"32%", right:"10%", width:170, height:1, background:"rgba(201,168,76,0.25)", animation:"s-shrink 9s ease-in-out infinite", animationDelay:"2.5s" }} />

        {/* Small dot cluster mid-right */}
        <div style={{ position:"absolute", top:"40%", right:"16%", width:7, height:7, background:"#D01F2B", opacity:.45, animation:"s-float 4s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"45%", right:"20%", width:4, height:4, background:"#D01F2B", opacity:.3, animation:"s-float 3.5s ease-in-out infinite", animationDelay:"0.7s" }} />

        {/* ── Left side (below vermillion bar, above name) ── */}
        {/* Paper cross */}
        <div style={{ position:"absolute", top:"12%", left:"8%", width:14, height:1, background:"rgba(240,235,226,0.12)" }} />
        <div style={{ position:"absolute", top:"9.5%", left:"8.5%", width:1, height:14, background:"rgba(240,235,226,0.12)", animation:"s-blink 11s ease-in-out infinite" }} />
        {/* Paper short line */}
        <div style={{ position:"absolute", top:"16%", left:"6%", width:60, height:1, background:"rgba(240,235,226,0.08)", animation:"s-shrink 8s ease-in-out infinite", animationDelay:"5s" }} />

        {/* ── Bottom area ── */}
        {/* Gold outline square bottom-right */}
        <div style={{ position:"absolute", bottom:"8%", right:"3%", width:45, height:45, border:"1.5px solid #C9A84C", opacity:.22, animation:"s-rot 26s linear infinite" }} />
        {/* Bottom-left: paper line */}
        <div style={{ position:"absolute", bottom:"12%", left:"8%", width:1, height:100, background:"rgba(240,235,226,0.07)", animation:"s-wag 14s ease-in-out infinite" }} />
        {/* Bottom-left: vermillion tiny dot */}
        <div style={{ position:"absolute", bottom:"16%", left:"12%", width:5, height:5, background:"#D01F2B", opacity:.35, animation:"s-float 6s ease-in-out infinite", animationDelay:"2s" }} />

      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full pl-6 md:pl-12 pr-0">

        {/* Name block — full bleed, no max-w constraint */}
        <div className="mb-4 md:mb-5">

          {/* TIMONAS */}
          <div className="overflow-hidden mb-1">
            <div className="flex">
              {name1.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "-115%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.72, delay: 0.18 + i * 0.065, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-black text-paper select-none"
                  style={{ fontSize: "clamp(3.5rem,12vw,10.5rem)", lineHeight: 0.88, letterSpacing: "0.04em" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Vermillion rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left", height: "3px" }}
            className="w-full bg-vermillion mb-1"
          />

          {/* STEFANOU — outlined gold, offset right + green breathing dot at end */}
          <div className="overflow-hidden pl-[3.5%]">
            <div className="flex items-end">
              {name2.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "115%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.72, delay: 0.52 + i * 0.065, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display font-black text-outline-gold select-none"
                  style={{ fontSize: "clamp(3.5rem,12vw,10.5rem)", lineHeight: 0.88, letterSpacing: "0.04em" }}
                >
                  {letter}
                </motion.span>
              ))}

              {/* Green availability dot — the living period of the name */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="ml-4 mb-3 flex-shrink-0"
              >
                <span className="relative flex h-5 w-5 md:h-6 md:w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-55" />
                  <span className="relative inline-flex rounded-full h-5 w-5 md:h-6 md:w-6 bg-green-400" />
                </span>
              </motion.span>
            </div>
          </div>
        </div>

        {/* Fields of Work — replacing Graphic Designer */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mb-10 md:mb-14"
        >
          <p className="font-display font-bold text-paper text-xl leading-tight mb-4">
            Fields of Work
          </p>
          <div className="w-full h-px bg-vermillion/50 mb-5" />
          <div className="flex flex-wrap items-center">
            {["Brand Identity","Social Media Design","Website Design","Marketing Design","Motion Graphics","Creative Direction"].map((field, i, arr) => (
              <span key={field} className="flex items-center">
                <span className="font-display font-bold text-paper/75 hover:text-paper transition-colors duration-200 cursor-default"
                      style={{ fontSize: "clamp(0.95rem,1.6vw,1.2rem)" }}>
                  {field}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-vermillion mx-3 md:mx-5 select-none text-xs">◆</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="flex gap-3"
        >
          <Link
            href="/work"
            className="px-8 py-3.5 bg-vermillion text-paper font-mono text-[11px] tracking-[0.32em] uppercase hover:bg-gold hover:text-ink transition-colors duration-200"
          >
            View Work
          </Link>
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="px-8 py-3.5 border border-paper/18 text-paper font-mono text-[11px] tracking-[0.32em] uppercase hover:border-vermillion hover:text-vermillion transition-all duration-200"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-paper/28 to-transparent"
        />
      </motion.div>

    </section>
  );
}
