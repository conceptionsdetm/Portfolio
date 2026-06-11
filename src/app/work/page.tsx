"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";
import { assetPath } from "@/lib/basePath";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const Y = "#FFDD00";
const R = "#BE1622";
const B = "#00539F";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter as Category));

  return (
    <main className="min-h-screen bg-white pt-24 pb-24 px-8 md:px-14 relative overflow-hidden">

      {/* ── Animated Bauhaus shapes ── */}

      {/* Top-right red quarter circle */}
      <div aria-hidden className="absolute top-0 right-0 pointer-events-none" style={{ width:200, height:200, overflow:"hidden" }}>
        <div style={{
          position:"absolute", top:0, right:0, left:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:R, opacity:0.88,
          animation:"s-pulse 15s ease-in-out infinite",
        }} />
      </div>

      {/* Top-right small yellow circle */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:65, height:65, borderRadius:"50%", background:Y,
        right:50, top:50,
        animation:"s-float 10s ease-in-out infinite 1s",
      }} />

      {/* Bottom-left yellow quarter circle */}
      <div aria-hidden className="absolute bottom-0 left-0 pointer-events-none" style={{ width:170, height:170, overflow:"hidden" }}>
        <div style={{
          position:"absolute", bottom:0, left:0, top:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:Y, opacity:0.82,
          animation:"s-pulse 12s ease-in-out infinite 2s",
        }} />
      </div>

      {/* Rotating blue square — left mid */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        width:50, height:50, background:B, opacity:0.55,
        left:"2%", top:"50%",
        animation:"s-rot 22s linear infinite",
      }} />

      {/* Floating blue circle outline — right mid */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:160, height:160, borderRadius:"50%",
        border:`4px solid ${B}`, opacity:0.14,
        right:"5%", top:"42%",
        animation:"s-scale 14s ease-in-out infinite 0.5s",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <RevealOnScroll className="mb-12">
          <div style={{ width:"100%", height:4, background:"#000000", marginBottom:24 }} />
          <span className="font-grotesk font-bold text-[9px] tracking-[0.42em] uppercase text-black/30 block mb-4">
            Portfolio — All Work
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl text-black leading-none">
            Selected{" "}
            <span style={{ color:R, display:"inline-block", transform:"rotate(-1deg)" }}>Work</span>
          </h1>
        </RevealOnScroll>

        {/* Filter tabs */}
        <RevealOnScroll delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as "all" | Category)}
              className="font-grotesk font-bold text-[8px] tracking-[0.32em] uppercase px-4 py-1.5 transition-all duration-200 hover:scale-105"
              style={
                activeFilter === cat.id
                  ? { background:"#000000", color:Y, boxShadow:`2px 2px 0px ${R}` }
                  : { border:"2px solid rgba(0,0,0,0.15)", color:"rgba(0,0,0,0.4)" }
              }
            >
              {cat.label}
            </button>
          ))}
        </RevealOnScroll>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-[4px]" style={{ background:"#000000" }}>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-black aspect-[4/3] hover-lift">
                    <img
                      src={assetPath(project.cover)}
                      alt={project.title}
                      loading={i < 6 ? "eager" : "lazy"}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="img-overlay" />

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="font-grotesk font-bold text-[7px] tracking-[0.3em] uppercase px-2 py-0.5" style={{ background:Y, color:"#000000" }}>
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <p className="font-grotesk font-bold text-[7px] tracking-[0.32em] uppercase mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color:Y }}>
                        {project.client}
                      </p>
                      <h3 className="font-display font-black text-lg text-white leading-tight group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-black/25 font-grotesk font-bold text-[9px] tracking-[0.35em] uppercase py-20">
            No projects in this category yet.
          </p>
        )}

        <div style={{ width:"100%", height:4, background:"#000000", marginTop:64 }} />
      </div>
    </main>
  );
}
