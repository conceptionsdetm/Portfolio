"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── Bauhaus palette ─────────────────────────────── */
const Y = "#FFDD00";
const R = "#BE1622";
const B = "#00539F";
const K = "#000000";
const W = "#FFFFFF";

/* ── Shape cell types ────────────────────────────── */
type Shape = "circle" | "rect" | "q-tl" | "q-tr" | "q-bl" | "q-br";
type CellDef = { color: string; shape: Shape };

/*
 * Quarter-circle positioning (inside overflow:hidden cell):
 *  q-tl → top:0 left:0   (circle center = bottom-right corner)
 *  q-tr → top:0 right:0  (circle center = bottom-left corner)
 *  q-bl → bottom:0 left:0 (circle center = top-right corner)
 *  q-br → bottom:0 right:0 (circle center = top-left corner)
 */
const QUARTER_POS: Record<string, React.CSSProperties> = {
  "q-tl": { top: 0,    left:  0   },
  "q-tr": { top: 0,    right: 0, left: "auto" },
  "q-bl": { bottom: 0, left:  0,  top: "auto" },
  "q-br": { bottom: 0, right: 0,  top: "auto", left: "auto" },
};

/* ── 5 × 5 shape grid ────────────────────────────── */
const GRID: CellDef[][] = [
  [{ color:Y, shape:"q-br" },{ color:W, shape:"rect" },{ color:B, shape:"q-bl" },{ color:R, shape:"rect"  },{ color:Y, shape:"q-tl" }],
  [{ color:B, shape:"q-tr" },{ color:R, shape:"rect" },{ color:Y, shape:"circle"},{ color:B, shape:"q-bl" },{ color:R, shape:"rect"  }],
  [{ color:R, shape:"rect" },{ color:Y, shape:"q-br" },{ color:K, shape:"circle"},{ color:Y, shape:"q-tr" },{ color:B, shape:"rect"  }],
  [{ color:Y, shape:"q-tl" },{ color:B, shape:"rect" },{ color:B, shape:"circle"},{ color:R, shape:"rect" },{ color:Y, shape:"q-bl" }],
  [{ color:B, shape:"q-tr" },{ color:Y, shape:"rect" },{ color:R, shape:"q-br" },{ color:Y, shape:"circle"},{ color:B, shape:"q-tl" }],
];

function ShapeCell({ def }: { def: CellDef }) {
  const { color, shape } = def;

  if (shape === "rect") {
    return <div style={{ width: "100%", height: "100%", background: color }} />;
  }

  if (shape === "circle") {
    return (
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: color, borderRadius: "50%" }} />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: W }}>
      <div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          borderRadius: "50%",
          background: color,
          ...QUARTER_POS[shape],
        }}
      />
    </div>
  );
}

/* ── Dada letter data ────────────────────────────── */
const NAME1: { l: string; color: string; stroke: string | null; r: number; ty: number }[] = [
  { l:"T", color:"#000000",     stroke:null,      r:-2,   ty: 3 },
  { l:"I", color:"transparent", stroke:"#BE1622", r: 1.5, ty:-5 },
  { l:"M", color:"#000000",     stroke:null,      r:-1,   ty: 0 },
  { l:"O", color:"#BE1622",     stroke:null,      r: 2.5, ty:-3 },
  { l:"N", color:"transparent", stroke:"#000000", r:-1.5, ty: 4 },
  { l:"A", color:"#000000",     stroke:null,      r: 1.5, ty: 0 },
  { l:"S", color:"#BE1622",     stroke:null,      r:-2.5, ty: 2 },
];

const NAME2: { l: string; color: string; stroke: string | null; r: number; ty: number }[] = [
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
    <section
      className="relative min-h-screen flex overflow-hidden bg-white"
      style={{ overflowX: "clip" }}
    >
      {/* ── Left content panel ── */}
      <div className="relative z-10 w-full md:w-[42%] flex flex-col justify-end pb-14 md:pb-20 px-8 md:px-14 pt-24">

        {/* Red left bar */}
        <div className="absolute left-0 top-0 h-full w-[6px] bg-vermillion z-20" />

        {/* Ghost CDTM — Dada stamp */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            left: "8%",
            top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            fontSize: "clamp(4rem,12vw,9rem)",
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            color: "rgba(0,0,0,0.04)",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
          aria-hidden
        >
          CDTM
        </div>

        {/* TIMONAS */}
        <div className="overflow-visible mb-0">
          <div className="flex items-baseline">
            {NAME1.map((d, i) => (
              <motion.span
                key={i}
                initial={{ y: "-115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black select-none inline-block"
                style={{
                  fontSize: "clamp(3rem,8.5vw,7.5rem)",
                  lineHeight: 0.86,
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
        </div>

        {/* Dada slash rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformOrigin: "left",
            height: "4px",
            background: "#000000",
            transform: "rotate(-1.2deg)",
            width: "102%",
          }}
        />

        {/* STEFANOU */}
        <div className="overflow-visible pl-[4%] mb-6">
          <div className="flex items-end">
            {NAME2.map((d, i) => (
              <motion.span
                key={i}
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.48 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black select-none inline-block"
                style={{
                  fontSize: "clamp(3rem,8.5vw,7.5rem)",
                  lineHeight: 0.86,
                  letterSpacing: "0.02em",
                  color: d.color,
                  WebkitTextStroke: d.stroke ? `3px ${d.stroke}` : undefined,
                  transform: `rotate(${d.r}deg) translateY(${d.ty}px)`,
                }}
              >
                {d.l}
              </motion.span>
            ))}
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

        {/* Fields */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 1.1 }}
          className="mb-6"
        >
          <div className="flex flex-wrap items-center gap-y-1">
            {["Brand Identity","Social Media","Website Design","Creative Direction"].map((f, i, arr) => (
              <span key={f} className="flex items-center">
                <span className="font-grotesk font-medium text-black/55 text-xs tracking-[0.05em]">{f}</span>
                {i < arr.length - 1 && <span className="text-vermillion mx-2 text-[0.5rem]">◆</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.22 }}
          className="mb-8 max-w-sm"
        >
          <p className="font-grotesk font-normal text-black/65 text-sm leading-relaxed">
            Graphic designer from Limassol, Cyprus. BA Graphic &amp; Advertising Design,
            Frederick University — Erasmus+ Escuela de Arte, Sevilla.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.35 }}
          className="flex flex-wrap gap-3 items-start"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ background: "#BE1622", color: "#FFFFFF", boxShadow: "4px 4px 0px #000000", transform: "rotate(-1deg)" }}
          >
            View Work →
          </Link>
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ border: "2px solid #000000", color: "#000000", boxShadow: "4px 4px 0px #000000", transform: "rotate(0.8deg)" }}
          >
            Contact →
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-grotesk font-bold text-[10px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ border: "2px solid #00539F", color: "#00539F", boxShadow: "4px 4px 0px #00539F", transform: "rotate(-0.5deg)" }}
          >
            Instagram ↗
          </a>
        </motion.div>
      </div>

      {/* ── Right shape-grid panel ── */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute top-0 right-0 h-full"
        style={{ width: "58%", borderLeft: "4px solid #000000" }}
        aria-hidden
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            width: "100%",
            height: "100%",
          }}
        >
          {GRID.flat().map((cell, i) => (
            <ShapeCell key={i} def={cell} />
          ))}
        </div>
      </motion.div>

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
