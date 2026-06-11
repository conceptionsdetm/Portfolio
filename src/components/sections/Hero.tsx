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

      {/* CDTM ghost text */}
      <div
        className="absolute select-none pointer-events-none z-0"
        style={{ left: "4%", top: "14%" }}
        aria-hidden
      >
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "26vw", color: "rgba(240,235,226,0.028)", letterSpacing: "0.14em" }}
        >
          CDTM
        </span>
      </div>

      {/* ── Bauhaus panel — right 40%, slams in on load ── */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 h-full pointer-events-none z-0"
        style={{ width: "clamp(200px, 40%, 580px)", borderLeft: "1px solid rgba(208,31,43,0.18)", background: "rgba(208,31,43,0.045)" }}
        aria-hidden
      >
        {/* Shapes — all inside the Bauhaus panel */}

        {/* Top cluster */}
        <div style={{ position:"absolute", top:"7%",  left:"18%", width:110, height:110, borderRadius:"50%", background:"rgba(201,168,76,0.13)", border:"1.5px solid rgba(201,168,76,0.38)", animation:"s-pulse 13s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"10%", left:"32%", width:55,  height:55,  borderRadius:"50%", background:"rgba(201,168,76,0.09)", border:"1px solid rgba(201,168,76,0.28)", animation:"s-scale 9s ease-in-out infinite", animationDelay:"1s" }} />
        <div style={{ position:"absolute", top:"6%",  left:"55%", width:9,   height:9,   borderRadius:"50%", background:"#C9A84C", opacity:.5, animation:"s-float 7s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"5%",  right:"8%", width:1,   height:200, background:"rgba(240,235,226,0.08)", animation:"s-rise 15s ease-in-out infinite" }} />

        {/* Upper-mid cluster */}
        <div style={{ position:"absolute", top:"22%", left:"10%", width:55, height:55,  background:"rgba(208,31,43,0.20)", border:"2px solid rgba(208,31,43,0.50)", animation:"s-rotr 20s linear infinite" }} />
        <div style={{ position:"absolute", top:"28%", left:"40%", width:6,  height:6,   background:"#D01F2B", opacity:.45, animation:"s-float 5s ease-in-out infinite", animationDelay:"1s" }} />
        <div style={{ position:"absolute", top:"32%", left:"20%", width:90, height:1,   background:"rgba(201,168,76,0.22)", animation:"s-shrink 10s ease-in-out infinite", animationDelay:"2s" }} />
        <div style={{ position:"absolute", top:"35%", right:"12%",width:14, height:1,   background:"rgba(240,235,226,0.13)" }} />
        <div style={{ position:"absolute", top:"32.5%",right:"11.5%",width:1,height:14, background:"rgba(240,235,226,0.13)", animation:"s-blink 10s ease-in-out infinite" }} />

        {/* Center cluster */}
        <div style={{ position:"absolute", top:"46%", left:"8%",  width:70, height:70,  background:"rgba(201,168,76,0.10)", border:"1px solid rgba(201,168,76,0.28)", animation:"s-wag 18s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"50%", left:"42%", width:16, height:1,   background:"rgba(240,235,226,0.14)" }} />
        <div style={{ position:"absolute", top:"47.5%",left:"41.5%",width:1,height:16,  background:"rgba(240,235,226,0.14)", animation:"s-blink 9s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"55%", left:"28%", width:5,  height:5,   borderRadius:"50%", background:"#C9A84C", opacity:.35, animation:"s-float 6s ease-in-out infinite", animationDelay:"0.8s" }} />
        <div style={{ position:"absolute", top:"60%", left:"55%", width:80, height:1,   background:"rgba(201,168,76,0.15)", animation:"s-shrink 12s ease-in-out infinite", animationDelay:"3s" }} />

        {/* Lower-mid cluster */}
        <div style={{ position:"absolute", bottom:"26%",left:"12%", width:85, height:85, borderRadius:"50%", background:"rgba(201,168,76,0.11)", border:"1.5px solid rgba(201,168,76,0.32)", animation:"s-float 11s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"30%",left:"42%", width:10, height:10, borderRadius:"50%", background:"#C9A84C", opacity:.38, animation:"s-float 6s ease-in-out infinite", animationDelay:"1.5s" }} />
        <div style={{ position:"absolute", bottom:"28%",right:"8%", width:1,  height:130, background:"rgba(240,235,226,0.07)", animation:"s-rise 14s ease-in-out infinite", animationDelay:"2s" }} />
        <div style={{ position:"absolute", bottom:"24%",left:"25%", width:5,  height:5,  background:"#D01F2B", opacity:.35, animation:"s-float 7s ease-in-out infinite", animationDelay:"2.5s" }} />

        {/* Bottom cluster */}
        <div style={{ position:"absolute", bottom:"10%",left:"6%",  width:42, height:42, border:"1.5px solid #C9A84C", opacity:.25, animation:"s-rot 26s linear infinite" }} />
        <div style={{ position:"absolute", bottom:"8%", left:"28%", width:35, height:35, background:"rgba(208,31,43,0.18)", border:"2px solid rgba(208,31,43,0.38)", animation:"s-rotr 18s linear infinite" }} />
        <div style={{ position:"absolute", bottom:"12%",left:"55%", width:7,  height:7,  borderRadius:"50%", background:"#C9A84C", opacity:.35, animation:"s-float 8s ease-in-out infinite", animationDelay:"3s" }} />
        <div style={{ position:"absolute", bottom:"6%", right:"6%", width:14, height:1,  background:"rgba(240,235,226,0.12)" }} />
        <div style={{ position:"absolute", bottom:"3.5%",right:"5.5%",width:1,height:14, background:"rgba(240,235,226,0.12)", animation:"s-blink 11s ease-in-out infinite" }} />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full pl-6 md:pl-12 pr-0">

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

        {/* Structural gold rule — Bauhaus grid divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left", height: "1px", background: "rgba(201,168,76,0.28)" }}
          className="w-full mb-1"
        />

        {/* STEFANOU — gold outline, offset right + green dot */}
        <div className="overflow-hidden pl-[3.5%] mb-3 md:mb-4">
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

            {/* Green availability dot */}
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

        {/* Fields of Work */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mb-8 md:mb-10"
        >
          <div className="flex flex-wrap items-center">
            {["Brand Identity","Social Media Design","Website Design","Marketing Design","Motion Graphics","Creative Direction"].map((field, i, arr) => (
              <span key={field} className="flex items-center">
                <span
                  className="font-grotesk font-medium text-paper/75 hover:text-paper transition-colors duration-200 cursor-default"
                  style={{ fontSize: "clamp(0.82rem,1.4vw,1.05rem)", letterSpacing: "0.04em" }}
                >
                  {field}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-vermillion mx-3 md:mx-4 select-none text-xs">◆</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.28 }}
          className="mb-10 md:mb-12 max-w-xl"
        >
          <p className="font-grotesk font-light text-paper/80 text-base md:text-lg leading-relaxed">
            Graphic designer from Limassol, Cyprus. BA in Graphic &amp; Advertising Design,
            Frederick University — Erasmus+ at Escuela de Arte, Sevilla.
          </p>
          <p className="font-grotesk font-light text-paper/50 text-sm md:text-base leading-relaxed mt-4">
            Working across FemTech, healthcare, maritime logistics, automotive, and corporate
            services — contextual intelligence and visual precision on every brief.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.42 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-grotesk font-medium text-[11px] uppercase tracking-[0.14em] transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ backgroundColor: "#D01F2B", color: "#F0EBE2", boxShadow: "0 4px 24px rgba(208,31,43,0.45)" }}
          >
            View Work <span>→</span>
          </Link>
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-grotesk font-medium text-[11px] uppercase tracking-[0.14em] border border-paper/22 text-paper transition-all duration-300 hover:scale-105 hover:border-gold hover:text-gold whitespace-nowrap"
          >
            Contact <span>→</span>
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-grotesk font-medium text-[11px] uppercase tracking-[0.14em] transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{ border: "1px solid rgba(201,168,76,0.35)", color: "#C9A84C" }}
          >
            Instagram <span>↗</span>
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
