"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const name1 = "TIMONAS".split("");
const name2 = "STEFANOU".split("");

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink dada-diagonal">

      {/* Vermillion left edge bar */}
      <div className="absolute left-0 top-0 h-full w-[5px] bg-vermillion z-20" />

      {/* Ghost letter — Dada background anchor */}
      <div className="absolute right-[-6%] bottom-[-4%] select-none pointer-events-none z-0" aria-hidden>
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "48vw", color: "rgba(240,235,226,0.022)" }}
        >
          D
        </span>
      </div>

      {/* Crop marks */}
      <div className="absolute top-6 left-8 w-6 h-px bg-paper/12 z-10" />
      <div className="absolute top-6 left-8 w-px h-6 bg-paper/12 z-10" />
      <div className="absolute top-6 right-6 w-6 h-px bg-paper/12 z-10" />
      <div className="absolute top-6 right-6 w-px h-6 bg-paper/12 z-10" />
      <div className="absolute bottom-6 left-8 w-6 h-px bg-paper/12 z-10" />
      <div className="absolute bottom-6 left-8 w-px h-6 bg-paper/12 z-10" />
      <div className="absolute bottom-6 right-6 w-6 h-px bg-paper/12 z-10" />
      <div className="absolute bottom-6 right-6 w-px h-6 bg-paper/12 z-10" />

      {/* Index label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute top-[4.8rem] left-10 md:left-16 z-10 flex items-center gap-4"
      >
        <span className="w-5 h-px bg-vermillion block" />
        <span className="font-mono text-[11px] tracking-[0.45em] uppercase text-paper/30">№ 01 — Index</span>
      </motion.div>

      {/* Vertical discipline label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 z-10"
      >
        <span
          className="font-mono text-[9px] tracking-[0.5em] uppercase text-paper/18"
          style={{ writingMode: "vertical-lr" }}
        >
          Graphic&nbsp;Designer&nbsp;·&nbsp;Limassol,&nbsp;Cyprus
        </span>
        <span className="block w-px h-10 bg-paper/8" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl pl-10 md:pl-16 pr-6 md:pr-20">

        {/* Available pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 md:mb-14 flex items-center gap-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse block" />
          <span className="font-mono text-[12px] tracking-[0.4em] uppercase text-paper/40">Available</span>
        </motion.div>

        {/* Name block */}
        <div className="mb-10 md:mb-14">

          {/* TIMONAS — solid, drops from above */}
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

          {/* Vermillion thick rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left", height: "3px" }}
            className="w-[90%] bg-vermillion mb-1"
          />

          {/* STEFANOU — outlined gold, NO italic, offset right */}
          <div className="overflow-hidden pl-[3.5%]">
            <div className="flex">
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
            </div>
          </div>
        </div>

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20"
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
        <span className="font-mono text-[11px] tracking-[0.5em] uppercase text-paper/22">Scroll</span>
      </motion.div>

    </section>
  );
}
