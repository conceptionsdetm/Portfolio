"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const name1 = "TIMONAS".split("");
const name2 = "STEFANOU".split("");

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16 pt-20 pb-16 dada-diagonal">

      {/* Crop marks — printing registration */}
      <div className="absolute top-6 left-6 w-5 h-px bg-paper/12" />
      <div className="absolute top-6 left-6 w-px h-5 bg-paper/12" />
      <div className="absolute top-6 right-6 w-5 h-px bg-paper/12" />
      <div className="absolute top-6 right-6 w-px h-5 bg-paper/12" />
      <div className="absolute bottom-6 left-6 w-5 h-px bg-paper/12" />
      <div className="absolute bottom-6 left-6 w-px h-5 bg-paper/12" />
      <div className="absolute bottom-6 right-6 w-5 h-px bg-paper/12" />
      <div className="absolute bottom-6 right-6 w-px h-5 bg-paper/12" />

      {/* Index label — top left */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute top-[4.8rem] left-6 md:left-16 font-mono text-[9px] tracking-[0.45em] uppercase text-paper/18"
      >
        № 01 — INDEX
      </motion.p>

      {/* Vertical discipline label — right side, desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span
          className="font-mono text-[8px] tracking-[0.5em] uppercase text-paper/14"
          style={{ writingMode: "vertical-lr" }}
        >
          Graphic&nbsp;Designer&nbsp;·&nbsp;Limassol,&nbsp;Cyprus
        </span>
        <span className="block w-px h-10 bg-paper/8" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl">

        {/* Available — green pulse dot only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 md:mb-14"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse block" />
        </motion.div>

        {/* T I M O N A S — letters drop from above */}
        <div className="overflow-hidden mb-0.5">
          <div className="flex">
            {name1.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "-115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.72,
                  delay: 0.18 + i * 0.065,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display font-black text-[clamp(3rem,12vw,10.5rem)] leading-[0.88] tracking-[0.04em] text-paper select-none"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Gold hairline — draws left to right */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="w-[90%] h-px bg-gold/45 mb-0.5"
        />

        {/* S T E F A N O U — italic, outlined, letters rise from below, offset */}
        <div className="overflow-hidden mb-12 md:mb-16 pl-[3%]">
          <div className="flex">
            {name2.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.72,
                  delay: 0.52 + i * 0.065,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display italic font-black text-[clamp(3rem,12vw,10.5rem)] leading-[0.88] tracking-[0.04em] text-outline-gold select-none"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-20"
        >
          <p className="font-mono text-[9px] tracking-[0.32em] uppercase text-paper/28 leading-[2.2] max-w-[180px]">
            Brand Identity<br />
            Social Media · Web<br />
            Motion Graphics
          </p>

          <div className="flex gap-3">
            <Link
              href="/work"
              className="px-7 py-2.5 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
            >
              View Work
            </Link>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="px-7 py-2.5 border border-paper/12 text-paper/60 font-mono text-[9px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-paper/25 to-transparent"
        />
        <span className="font-mono text-[8px] tracking-[0.5em] uppercase text-paper/18">Scroll</span>
      </motion.div>

    </section>
  );
}
