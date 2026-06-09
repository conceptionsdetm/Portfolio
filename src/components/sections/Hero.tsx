"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  "Brand Identity",
  "Social Media Design",
  "Website Design",
  "Marketing Campaigns",
  "Motion Graphics",
  "Creative Direction",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 pt-24 pb-16">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-gold/30 px-4 py-2 mb-10 text-xs tracking-widest uppercase font-mono text-gold/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for freelance
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[.85] tracking-tight text-white"
          >
            Timonas
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="font-display italic text-[clamp(3.5rem,10vw,9rem)] leading-[.85] tracking-tight gradient-text"
          >
            Stefanou
          </motion.h1>
        </div>

        {/* Tagline + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          <div className="max-w-sm">
            <p className="text-white/50 text-sm leading-relaxed font-mono tracking-wide uppercase mb-1">
              Graphic Designer
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Crafting premium brand identities, social media campaigns, and
              digital experiences for brands that care about quality.
            </p>
            <p className="text-white/40 text-xs font-mono tracking-widest uppercase mt-3">
              Based in Limassol, Cyprus
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="px-8 py-3.5 bg-gold text-ink text-sm font-mono tracking-widest uppercase hover:bg-white transition-colors duration-200"
            >
              View Work
            </Link>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="px-8 py-3.5 border border-white/20 text-white text-sm font-mono tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Services row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-3 mt-16"
        >
          {services.map((s, i) => (
            <span
              key={i}
              className="text-xs font-mono tracking-widest uppercase border border-white/10 px-3 py-1.5 text-white/40 hover:border-gold/40 hover:text-gold/60 transition-all duration-200"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
