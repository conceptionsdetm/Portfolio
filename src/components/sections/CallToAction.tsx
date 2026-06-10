"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden bg-ink">

      <div className="max-w-5xl mx-auto relative z-10">

        {/* "Let's" + "talk." */}
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
              className="font-display font-black leading-[0.85] text-vermillion"
              style={{ fontSize: "clamp(4rem,14vw,12rem)" }}
            >
              talk.
            </motion.h2>
          </div>
        </div>

        <div className="w-14 h-[3px] bg-vermillion mb-8" />

        <p className="font-display font-normal text-paper/45 text-xl leading-relaxed max-w-sm mb-10">
          Available for freelance — brand identity,
          social campaigns, and full creative direction.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="px-9 py-4 bg-vermillion text-paper font-mono text-[11px] tracking-[0.32em] uppercase hover:bg-gold hover:text-ink transition-colors duration-200"
          >
            Start a Conversation
          </a>
          <a
            href="https://www.instagram.com/conceptions.detm/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 border border-paper/14 text-paper font-mono text-[11px] tracking-[0.32em] uppercase hover:border-vermillion hover:text-vermillion transition-all duration-200"
          >
            Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
