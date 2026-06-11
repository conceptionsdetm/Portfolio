"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const R = "#BE1622";
const B = "#00539F";

const NAME1 = [
  { l:"T", color:"#000000",     stroke:null,      r:-2,   ty: 3 },
  { l:"I", color:"transparent", stroke:"#BE1622", r: 1.5, ty:-5 },
  { l:"M", color:"#000000",     stroke:null,      r:-1,   ty: 0 },
  { l:"O", color:"#BE1622",     stroke:null,      r: 2.5, ty:-3 },
  { l:"N", color:"transparent", stroke:"#000000", r:-1.5, ty: 4 },
  { l:"A", color:"#000000",     stroke:null,      r: 1.5, ty: 0 },
  { l:"S", color:"#BE1622",     stroke:null,      r:-2.5, ty: 2 },
];

const NAME2 = [
  { l:"S", color:"#BE1622",     stroke:null,      r:-1.5, ty: 2 },
  { l:"T", color:"transparent", stroke:"#000000", r: 2,   ty:-4 },
  { l:"E", color:"#BE1622",     stroke:null,      r:-1,   ty: 3 },
  { l:"F", color:"#000000",     stroke:null,      r: 1.5, ty:-2 },
  { l:"A", color:"transparent", stroke:"#BE1622", r:-2,   ty: 0 },
  { l:"N", color:"#BE1622",     stroke:null,      r: 1,   ty: 3 },
  { l:"O", color:"transparent", stroke:"#000000", r:-1.5, ty:-3 },
  { l:"U", color:"#BE1622",     stroke:null,      r: 2.5, ty: 0 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white px-8 md:px-14 pt-28 pb-16">

      {/* ── Animated Bauhaus shapes (background) ── */}

      {/* Top-left quarter circle — grows & cycles yellow → red → blue */}
      <div aria-hidden className="absolute top-0 left-0 pointer-events-none"
        style={{ width:300, height:300, overflow:"hidden",
          animation:"h-qc-grow-a 16s ease-in-out infinite" }}>
        <div style={{
          position:"absolute", top:0, left:0, width:"200%", height:"200%",
          borderRadius:"50%",
          animation:"h-fill-yrbY 12s ease-in-out infinite",
        }} />
      </div>

      {/* Top-right quarter circle — shrinks & cycles blue → yellow → red */}
      <div aria-hidden className="absolute top-0 right-0 pointer-events-none"
        style={{ width:210, height:210, overflow:"hidden",
          animation:"h-qc-grow-b 19s ease-in-out infinite" }}>
        <div style={{
          position:"absolute", top:0, right:0, left:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:"#00539F",
          animation:"h-fill-byrB 15s ease-in-out infinite",
        }} />
      </div>

      {/* Right floating circle — orbits + red → blue → yellow */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:155, height:155, borderRadius:"50%",
        right:"8%", top:"36%",
        animation:"h-circle-drift 11s ease-in-out infinite",
      }} />

      {/* Right large circle — breathes + yellow → red → blue */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:265, height:265, borderRadius:"50%",
        right:"2%", top:"20%",
        animation:"h-circle-breathe 14s ease-in-out infinite 1s",
      }} />

      {/* Bottom-left quarter circle — pulses + red → blue → yellow */}
      <div aria-hidden className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width:210, height:210, overflow:"hidden",
          animation:"h-qc-grow-a 18s ease-in-out infinite" }}>
        <div style={{
          position:"absolute", bottom:0, left:0, top:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:"#BE1622",
          animation:"h-fill-rybR 11s ease-in-out infinite",
        }} />
      </div>

      {/* Bottom-right circle outline — scales, rotates, border morphs blue → red → yellow */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:230, height:230, borderRadius:"50%",
        border:"5px solid #00539F",
        right:"19%", bottom:"7%",
        animation:"h-outline-morph 13s ease-in-out infinite 0.8s",
      }} />

      {/* Left rotating square — spins + yellow → red → blue */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        width:72, height:72,
        left:"2%", top:"53%",
        animation:"h-sq-spin 22s linear infinite",
      }} />

      {/* Mid drifting small square — wanders + colour + opacity */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:52, height:52,
        left:"44%", top:"17%",
        animation:"h-sq-wander 20s ease-in-out infinite 2s",
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Name block */}
        <div className="mb-6">

          {/* TIMONAS */}
          <div className="flex items-baseline overflow-visible flex-wrap">
            {NAME1.map((d, i) => (
              <motion.span
                key={i}
                initial={{ y: "-115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black select-none inline-block"
                style={{
                  fontSize: "clamp(3.8rem,9.5vw,10rem)",
                  lineHeight: 0.88,
                  letterSpacing: "0.02em",
                  color: d.color,
                  WebkitTextStroke: d.stroke ? `3px ${d.stroke}` : undefined,
                  transform: `rotate(${d.r}deg) translateY(${d.ty}px)`,
                }}
              >
                {d.l}
              </motion.span>
            ))}
          </div>

          {/* Dada rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: "left",
              height: 4,
              background: "#000000",
              transform: "rotate(-0.8deg)",
              width: "70%",
              margin: "6px 0",
            }}
          />

          {/* STEFANOU */}
          <div className="flex items-end overflow-visible pl-[2%] flex-wrap">
            {NAME2.map((d, i) => (
              <motion.span
                key={i}
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.48 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black select-none inline-block"
                style={{
                  fontSize: "clamp(3.8rem,9.5vw,10rem)",
                  lineHeight: 0.88,
                  letterSpacing: "0.02em",
                  color: d.color,
                  WebkitTextStroke: d.stroke ? `3px ${d.stroke}` : undefined,
                  transform: `rotate(${d.r}deg) translateY(${d.ty}px)`,
                }}
              >
                {d.l}
              </motion.span>
            ))}
            {/* Online indicator */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.45 }}
              className="ml-3 mb-2 flex-shrink-0"
            >
              <span className="relative flex h-4 w-4 md:h-5 md:w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-55" />
                <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-green-500" />
              </span>
            </motion.span>
          </div>
        </div>

        {/* Fields, bio, CTAs */}
        <div className="mt-8 md:mt-10 max-w-xl">

          {/* Discipline tags */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 1.1 }}
            className="flex flex-wrap items-center gap-y-2 mb-5"
          >
            {["Brand Identity", "Social Media", "Website Design", "Creative Direction"].map((f, i, arr) => (
              <span key={f} className="flex items-center">
                <span className="font-grotesk font-medium text-black/55 text-lg tracking-[0.05em]">{f}</span>
                {i < arr.length - 1 && <span className="text-vermillion mx-2 text-[0.5rem]">◆</span>}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.22 }}
            className="font-grotesk font-normal text-black/60 text-lg leading-relaxed mb-8"
          >
            Graphic designer from Limassol, Cyprus. BA Graphic &amp; Advertising Design,
            Frederick University — Erasmus+ Escuela de Arte, Sevilla.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.35 }}
            className="flex flex-wrap gap-3 items-start"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ background: R, color: "#FFFFFF", boxShadow: "4px 4px 0px #000000", transform: "rotate(-1deg)" }}
            >
              View Work →
            </Link>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ border: "2px solid #000000", color: "#000000", background:"#FFFFFF", boxShadow: "4px 4px 0px #000000", transform: "rotate(0.8deg)" }}
            >
              Contact →
            </a>
            <a
              href="https://www.instagram.com/conceptions.detm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ border: `2px solid ${B}`, color: B, background:"#FFFFFF", boxShadow: `4px 4px 0px ${B}`, transform: "rotate(-0.5deg)" }}
            >
              Instagram ↗
            </a>
          </motion.div>
        </div>
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
