"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Y = "#FFDD00";
const R = "#BE1622";
const B = "#00539F";
const K = "#000000";

/* ── Letter types ──────────────────────────────── */
type ShapeDef = {
  type: "circle" | "square" | "diamond";
  color: string;
  size: number;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};
type LetterDef = {
  l: string; color: string; stroke: string | null;
  r: number; ty: number; shape?: ShapeDef;
};

/* ── TIMONAS ───────────────────────────────────── */
const NAME1: LetterDef[] = [
  { l:"T", color:K, stroke:null, r:-2, ty:3,
    shape:{ type:"square",  color:R,    size:18, top:"-8px",  right:"0px" } },
  { l:"I", color:"transparent", stroke:R, r:1.5, ty:-5,
    shape:{ type:"circle",  color:Y,    size:16, top:"20%",   left:"calc(50% - 8px)" } },
  { l:"M", color:K, stroke:null, r:-1, ty:0 },
  { l:"O", color:R, stroke:null, r:2.5, ty:-3,
    shape:{ type:"circle",  color:K,    size:20, top:"22%",   left:"20%" } },
  { l:"N", color:"transparent", stroke:K, r:-1.5, ty:4 },
  { l:"A", color:K, stroke:null, r:1.5, ty:0,
    shape:{ type:"diamond", color:R,    size:14, top:"-10px", left:"calc(50% - 7px)" } },
  { l:"S", color:R, stroke:null, r:-2.5, ty:2 },
];

/* ── STEFANOU ──────────────────────────────────── */
const NAME2: LetterDef[] = [
  { l:"S", color:R, stroke:null, r:-1.5, ty:2,
    shape:{ type:"circle",  color:Y,    size:15, top:"8%",    left:"-4px" } },
  { l:"T", color:"transparent", stroke:K, r:2, ty:-4 },
  { l:"E", color:R, stroke:null, r:-1, ty:3,
    shape:{ type:"square",  color:B,    size:12, top:"40%",   right:"-5px" } },
  { l:"F", color:K, stroke:null, r:1.5, ty:-2 },
  { l:"A", color:"transparent", stroke:R, r:-2, ty:0,
    shape:{ type:"circle",  color:K,    size:12, top:"-7px",  left:"calc(50% - 6px)" } },
  { l:"N", color:R, stroke:null, r:1, ty:3 },
  { l:"O", color:"transparent", stroke:K, r:-1.5, ty:-3,
    shape:{ type:"circle",  color:R,    size:18, top:"25%",   left:"25%" } },
  { l:"U", color:R, stroke:null, r:2.5, ty:0 },
];

function DadaLetter({ d, i, dir }: { d: LetterDef; i: number; dir: "up" | "down" }) {
  return (
    <motion.span
      key={i}
      initial={{ y: dir === "up" ? "-115%" : "115%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: (dir === "up" ? 0.15 : 0.48) + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="font-display font-black select-none inline-block"
      style={{
        position: "relative",
        fontSize: "clamp(3.8rem,9.5vw,10rem)",
        lineHeight: 0.88,
        letterSpacing: "0.02em",
        color: d.color,
        WebkitTextStroke: d.stroke ? `3px ${d.stroke}` : undefined,
        transform: `rotate(${d.r}deg) translateY(${d.ty}px)`,
        overflow: "visible",
      }}
    >
      {d.l}
      {d.shape && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            width: d.shape.size,
            height: d.shape.size,
            background: d.shape.color,
            borderRadius: d.shape.type === "circle" ? "50%" : undefined,
            transform: d.shape.type === "diamond" ? "rotate(45deg)" : undefined,
            top: d.shape.top,
            right: d.shape.right,
            bottom: d.shape.bottom,
            left: d.shape.left,
            pointerEvents: "none",
          }}
        />
      )}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white px-8 md:px-14 pt-28 pb-16">

      {/* ── Background shapes — positioned right half, clear of text ── */}

      {/* Top-left corner: small yellow quarter circle */}
      <div aria-hidden className="absolute top-0 left-0 pointer-events-none"
        style={{ width:180, height:180, overflow:"hidden",
          animation:"h-qc-grow-a 16s ease-in-out infinite" }}>
        <div style={{ position:"absolute", top:0, left:0, width:"200%", height:"200%",
          borderRadius:"50%", background:Y }} />
      </div>

      {/* Top-right corner: blue quarter circle */}
      <div aria-hidden className="absolute top-0 right-0 pointer-events-none"
        style={{ width:220, height:220, overflow:"hidden",
          animation:"h-qc-grow-b 19s ease-in-out infinite" }}>
        <div style={{ position:"absolute", top:0, right:0, left:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:B }} />
      </div>

      {/* Yellow circle — beside TIMONAS, right of name */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:260, height:260, borderRadius:"50%", background:Y, opacity:0.85,
        left:"58%", top:"8%",
        animation:"s-scale 13s ease-in-out infinite 1s",
      }} />

      {/* Red circle — beside STEFANOU, floats */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:140, height:140, borderRadius:"50%", background:R,
        left:"65%", top:"38%",
        animation:"s-float 9s ease-in-out infinite",
      }} />

      {/* Right zone — blue outline circle, bottom-right */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:200, height:200, borderRadius:"50%",
        border:`5px solid ${B}`, opacity:0.25,
        right:"6%", bottom:"10%",
        animation:"s-scale 11s ease-in-out infinite 0.5s",
      }} />

      {/* Bottom-left corner: red quarter circle */}
      <div aria-hidden className="absolute bottom-0 left-0 pointer-events-none"
        style={{ width:180, height:180, overflow:"hidden",
          animation:"h-qc-grow-a 18s ease-in-out infinite" }}>
        <div style={{ position:"absolute", bottom:0, left:0, top:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:R }} />
      </div>

      {/* Right zone — small yellow square, spins */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:58, height:58, background:Y, opacity:0.7,
        right:"22%", bottom:"18%",
        animation:"s-rot 22s linear infinite",
      }} />

      {/* Right zone — tiny drifting black square */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:44, height:44, background:K, opacity:0.07,
        right:"35%", top:"10%",
        animation:"s-frot 20s ease-in-out infinite 2s",
      }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Name block */}
        <div className="mb-6">

          {/* TIMONAS */}
          <div className="flex items-baseline overflow-visible">
            {NAME1.map((d, i) => (
              <DadaLetter key={i} d={d} i={i} dir="up" />
            ))}
          </div>

          {/* Dada rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin:"left", height:4, background:K,
              transform:"rotate(-0.8deg)", width:"62%", margin:"6px 0",
            }}
          />

          {/* STEFANOU */}
          <div className="flex items-end overflow-visible pl-[2%]">
            {NAME2.map((d, i) => (
              <DadaLetter key={i} d={d} i={i} dir="down" />
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

        {/* Info block */}
        <div className="mt-8 md:mt-10">

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.22 }}
            className="font-grotesk font-normal text-black/60 text-lg leading-relaxed mb-8 max-w-md"
          >
            A graphic designer from Limassol, Cyprus with a BA in Graphic &amp; Advertising Design
            from Frederick University and an Erasmus+ exchange at Escuela de Arte, Sevilla.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.35 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ background: R, color: "#FFFFFF", boxShadow: "4px 4px 0px #000000", transform: "rotate(-1deg)" }}
            >
              View Work →
            </Link>
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
