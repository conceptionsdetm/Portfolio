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

      <div className="relative z-10 max-w-5xl">

        {/* "Let's" — black */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.85]"
            style={{ fontSize: "clamp(4.5rem,15vw,13rem)", color: "#000000" }}
          >
            Let&apos;s
          </motion.h2>
        </div>

        {/* "talk." — red */}
        <div className="overflow-hidden pl-[6%]">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[0.85]"
            style={{ fontSize: "clamp(4.5rem,15vw,13rem)", color: "#BE1622" }}
          >
            talk.
          </motion.h2>
        </div>

        {/* 4px black rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left", height: "4px", background: "#000000" }}
          className="w-24 mt-8 mb-8"
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
            style={{ background: "#000000", color: "#FFDD00", boxShadow: "4px 4px 0px #BE1622" }}
          >
            Start a Conversation →
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-grotesk font-bold text-[11px] uppercase tracking-[0.16em] transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ border: "2px solid #000000", color: "#000000", boxShadow: "4px 4px 0px #000000" }}
          >
            Instagram ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
