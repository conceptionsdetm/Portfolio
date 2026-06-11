"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";
import { assetPath } from "@/lib/basePath";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter as Category));

  return (
    <main className="min-h-screen bg-white pt-24 pb-24 px-8 md:px-14 relative overflow-hidden">

      {/* Bauhaus shapes — top right corner */}
      <div className="absolute top-0 right-0 pointer-events-none" aria-hidden style={{ width:180, height:180, overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, width:"100%", height:"100%", background:"#FFDD00" }} />
        <div style={{ position:"absolute", top:0, right:0, width:"100%", height:"100%", borderRadius:"50%", background:"#FFFFFF" }} />
        <div style={{ position:"absolute", top:24, right:24, width:64, height:64, background:"#BE1622", borderRadius:"50%" }} />
      </div>

      {/* Blue rule — bottom left */}
      <div className="absolute bottom-24 left-0 pointer-events-none" aria-hidden>
        <div style={{ width:100, height:4, background:"#00539F", transform:"rotate(-8deg)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <RevealOnScroll className="mb-12">
          <div style={{ width:"100%", height:4, background:"#000000", marginBottom:24 }} />
          <span className="font-grotesk font-bold text-[9px] tracking-[0.42em] uppercase text-black/30 block mb-4">
            Portfolio — All Work
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl text-black leading-none">
            Selected{" "}
            <span style={{ color:"#BE1622", display:"inline-block", transform:"rotate(-1deg)" }}>Work</span>
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
                  ? { background:"#000000", color:"#FFDD00", boxShadow:"2px 2px 0px #BE1622" }
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

                    {/* Bauhaus accent bar on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[4px] transition-all duration-300 origin-left"
                      style={{ background:"#BE1622", transform:"scaleX(0)" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scaleX(1)")}
                    />

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="font-grotesk font-bold text-[7px] tracking-[0.3em] uppercase px-2 py-0.5" style={{ background:"#FFDD00", color:"#000000" }}>
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <p className="font-grotesk font-bold text-[7px] tracking-[0.32em] uppercase mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color:"#FFDD00" }}>
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
