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

      {/* ── Animated shapes (right side, away from text) ── */}

      {/* Vermillion square outline — top right */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ top: "10%", right: "6%", width: 64, height: 64, border: "2px solid #D01F2B" }}
        animate={{ rotate: [0, 90, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vermillion horizontal slash — top right */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ top: "7%", right: "4%", width: 110, height: 3, background: "#D01F2B", transformOrigin: "right" }}
        animate={{ scaleX: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gold circle outline — lower right */}
      <motion.div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{ bottom: "22%", right: "8%", width: 90, height: 90, border: "1.5px solid #C9A84C" }}
        animate={{ y: [0, -16, 0], scale: [1, 1.07, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Gold filled dot — lower right */}
      <motion.div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{ bottom: "28%", right: "5%", width: 12, height: 12, background: "#C9A84C" }}
        animate={{ y: [0, -10, 0], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      {/* Paper vertical line — right edge mid */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ top: "22%", right: "2%", width: 1, height: 160, background: "rgba(240,235,226,0.1)", transformOrigin: "top" }}
        animate={{ rotate: [-12, -5, -12], scaleY: [1, 0.65, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small vermillion dots cluster */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ top: "38%", right: "16%", width: 7, height: 7, background: "#D01F2B" }}
        animate={{ y: [0, -7, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ top: "44%", right: "20%", width: 4, height: 4, background: "#D01F2B" }}
        animate={{ y: [0, 5, 0], opacity: [0.25, 0.65, 0.25] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* Gold horizontal rule — below name area right */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ bottom: "32%", right: "10%", width: 160, height: 1, background: "rgba(201,168,76,0.28)" }}
        animate={{ scaleX: [1, 0.55, 1], opacity: [0.28, 0.55, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full pl-10 md:pl-16 pr-0">

        {/* Name block — full bleed, no max-w constraint */}
        <div className="mb-10 md:mb-14">

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

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="max-w-6xl pr-6 md:pr-20 flex flex-col md:flex-row md:items-end gap-8 md:gap-20"
        >
          <div>
            <p className="font-display font-bold text-paper text-xl mb-1 leading-tight">
              Graphic Designer
            </p>
            <p className="font-display font-normal text-paper/45 text-lg leading-snug">
              Brand Identity&ensp;·&ensp;Social Media&ensp;·&ensp;Web&ensp;·&ensp;Motion
            </p>
          </div>

          <div className="flex gap-3">
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
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-8 left-10 md:left-16 flex items-center gap-3 z-10"
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
