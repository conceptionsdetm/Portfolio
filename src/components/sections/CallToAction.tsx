"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-40 px-8 md:px-14 overflow-hidden" style={{ background: "#FFDD00" }}>

      {/* Bauhaus structural black rule — top */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-black" />

      {/* Bauhaus structural black rule — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-black" />

      {/* Bold geometric accents — black on yellow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{ position:"absolute", top:"8%",  right:"4%",  width:100, height:100, borderRadius:"50%", border:"4px solid #000000", animation:"s-pulse 14s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"15%", right:"8%",  width:50,  height:50,  background:"#BE1622", animation:"s-rotr 20s linear infinite" }} />
        <div style={{ position:"absolute", bottom:"12%", right:"5%", width:60, height:60, border:"4px solid #000000", animation:"s-rot 25s linear infinite" }} />
        <div style={{ position:"absolute", bottom:"18%", right:"12%",width:14, height:4,  background:"#000000" }} />
        <div style={{ position:"absolute", bottom:"16%", right:"13.5%",width:4,height:14, background:"#000000" }} />
        <div style={{ position:"absolute", top:"50%", right:"2%",   width:4,  height:160, background:"rgba(0,0,0,0.12)" }} />
      </div>

      {/* Ghost stamp — Dada background layer */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "2%",
          top: "50%",
          transform: "translateY(-50%) rotate(-85deg)",
          fontSize: "clamp(4rem,18vw,16rem)",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          color: "rgba(0,0,0,0.06)",
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
        aria-hidden
      >
        CDTM
      </div>

      <div className="relative z-10 max-w-5xl">

        {/* "Let's" — black, slightly tilted */}
        <div className="overflow-visible">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.85] inline-block"
            style={{ fontSize: "clamp(4.5rem,15vw,13rem)", color: "#000000", transform: "rotate(-1.2deg)" }}
          >
            Let&apos;s
          </motion.h2>
        </div>

        {/* "talk." — red, offset more, counter-tilt */}
        <div className="overflow-visible pl-[8%]">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.85] inline-block"
            style={{ fontSize: "clamp(4.5rem,15vw,13rem)", color: "#BE1622", transform: "rotate(1.5deg)" }}
          >
            talk.
          </motion.h2>
        </div>

        {/* Dada slash rule — angled */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left", height: "4px", background: "#000000", transform: "rotate(-1deg)", width: "7rem" }}
          className="mt-8 mb-8"
        />

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-grotesk font-bold text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ background: "#000000", color: "#FFDD00", boxShadow: "4px 4px 0px #BE1622", transform: "rotate(-1deg)" }}
          >
            Start a Conversation →
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-grotesk font-bold text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ border: "2px solid #000000", color: "#000000", boxShadow: "4px 4px 0px #000000", transform: "rotate(0.8deg)" }}
          >
            Instagram ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
