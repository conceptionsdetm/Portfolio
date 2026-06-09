"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden">

      {/* Crop marks */}
      <div className="absolute top-8 left-8 w-5 h-px bg-paper/10" />
      <div className="absolute top-8 left-8 w-px h-5 bg-paper/10" />
      <div className="absolute top-8 right-8 w-5 h-px bg-paper/10" />
      <div className="absolute top-8 right-8 w-px h-5 bg-paper/10" />

      <div className="max-w-5xl mx-auto">

        <span className="font-mono text-[9px] tracking-[0.45em] uppercase text-paper/20 block mb-10">
          № 06 — Let&apos;s Work Together
        </span>

        {/* Ransom-note Bodoni: "Let's" solid + "talk." outlined */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[0.85] text-paper"
              style={{ fontSize: "clamp(4rem,14vw,12rem)" }}
            >
              Let&apos;s
            </motion.h2>
          </div>
          <div className="overflow-hidden pl-[5%]">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic font-black leading-[0.85] text-outline-gold"
              style={{ fontSize: "clamp(4rem,14vw,12rem)" }}
            >
              talk.
            </motion.h2>
          </div>
        </div>

        {/* Hairline separator */}
        <div className="w-14 h-px bg-gold/45 mb-8" />

        <p className="text-paper/38 text-sm font-light leading-relaxed max-w-xs mb-10">
          Available for freelance — brand identity,<br />
          social campaigns, and full creative direction.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="px-9 py-3.5 bg-gold text-ink font-mono text-[9px] tracking-[0.32em] uppercase hover:bg-paper transition-colors duration-200"
          >
            Start a Conversation
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-3.5 border border-paper/14 text-paper/55 font-mono text-[9px] tracking-[0.32em] uppercase hover:border-gold hover:text-gold transition-all duration-200"
          >
            Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
