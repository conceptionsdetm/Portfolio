"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden bg-ink">

      {/* ── Shapes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>

        {/* Right side — heavy concentration (text is left-heavy) */}

        {/* Large gold circle top-right */}
        <div style={{ position:"absolute", top:"5%", right:"4%", width:130, height:130, borderRadius:"50%", border:"1.5px solid #C9A84C", opacity:.25, animation:"s-pulse 14s ease-in-out infinite" }} />
        {/* Medium gold circle inside */}
        <div style={{ position:"absolute", top:"9%", right:"7%", width:70, height:70, borderRadius:"50%", border:"1px solid #C9A84C", opacity:.2, animation:"s-scale 10s ease-in-out infinite", animationDelay:"1.5s" }} />
        {/* Gold dot top-right */}
        <div style={{ position:"absolute", top:"6%", right:"16%", width:11, height:11, borderRadius:"50%", background:"#C9A84C", opacity:.5, animation:"s-float 7s ease-in-out infinite" }} />

        {/* Vermillion square outline top-right */}
        <div style={{ position:"absolute", top:"18%", right:"5%", width:55, height:55, border:"2px solid #D01F2B", opacity:.28, animation:"s-rotr 22s linear infinite" }} />
        {/* Vermillion slash top-right */}
        <div style={{ position:"absolute", top:"15%", right:"12%", width:130, height:2, background:"#D01F2B", opacity:.35, animation:"s-shrink 10s ease-in-out infinite" }} />
        {/* Vermillion dot */}
        <div style={{ position:"absolute", top:"28%", right:"8%", width:8, height:8, background:"#D01F2B", opacity:.5, animation:"s-float 5s ease-in-out infinite", animationDelay:"1s" }} />

        {/* Paper vertical line right */}
        <div style={{ position:"absolute", top:"10%", right:"2%", width:1, height:260, background:"rgba(240,235,226,0.09)", animation:"s-rise 16s ease-in-out infinite" }} />
        {/* Paper vertical line mid-right */}
        <div style={{ position:"absolute", top:"20%", right:"18%", width:1, height:180, background:"rgba(240,235,226,0.07)", animation:"s-rise 12s ease-in-out infinite", animationDelay:"2s" }} />

        {/* Mid-right: cross */}
        <div style={{ position:"absolute", top:"45%", right:"10%", width:18, height:1, background:"rgba(240,235,226,0.14)" }} />
        <div style={{ position:"absolute", top:"42.5%", right:"9.5%", width:1, height:18, background:"rgba(240,235,226,0.14)", animation:"s-blink 8s ease-in-out infinite" }} />

        {/* Mid-right: large outlined square */}
        <div style={{ position:"absolute", top:"40%", right:"20%", width:80, height:80, border:"1px solid rgba(201,168,76,0.2)", animation:"s-wag 18s ease-in-out infinite" }} />
        {/* Gold dot cluster mid-right */}
        <div style={{ position:"absolute", top:"50%", right:"14%", width:7, height:7, borderRadius:"50%", background:"#C9A84C", opacity:.35, animation:"s-float 6s ease-in-out infinite", animationDelay:"0.5s" }} />
        <div style={{ position:"absolute", top:"54%", right:"17%", width:4, height:4, borderRadius:"50%", background:"#C9A84C", opacity:.3, animation:"s-float 4.5s ease-in-out infinite", animationDelay:"1.2s" }} />

        {/* Bottom-right cluster */}
        <div style={{ position:"absolute", bottom:"8%", right:"3%", width:90, height:90, borderRadius:"50%", border:"1.5px solid #C9A84C", opacity:.2, animation:"s-float 11s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"12%", right:"8%", width:12, height:12, background:"#D01F2B", opacity:.45, animation:"s-float 5s ease-in-out infinite", animationDelay:"2s" }} />
        <div style={{ position:"absolute", bottom:"18%", right:"12%", width:6, height:6, borderRadius:"50%", background:"#C9A84C", opacity:.4, animation:"s-float 8s ease-in-out infinite", animationDelay:"3s" }} />
        <div style={{ position:"absolute", bottom:"6%", right:"16%", width:60, height:1, background:"rgba(240,235,226,0.1)", animation:"s-shrink 12s ease-in-out infinite" }} />

        {/* Left side — subtle accents above headline */}
        <div style={{ position:"absolute", top:"8%", left:"3%", width:80, height:1, background:"rgba(240,235,226,0.08)", animation:"s-shrink 9s ease-in-out infinite", animationDelay:"4s" }} />
        <div style={{ position:"absolute", top:"12%", left:"5%", width:8, height:8, border:"1.5px solid rgba(240,235,226,0.15)", animation:"s-rot 20s linear infinite" }} />

        {/* Bottom-left */}
        <div style={{ position:"absolute", bottom:"10%", left:"2%", width:50, height:50, border:"1px solid rgba(201,168,76,0.18)", animation:"s-rotr 26s linear infinite" }} />
        <div style={{ position:"absolute", bottom:"14%", left:"6%", width:7, height:7, background:"#D01F2B", opacity:.35, animation:"s-float 6s ease-in-out infinite" }} />

      </div>

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
