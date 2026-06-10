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
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <RevealOnScroll className="mb-12 border-b border-paper/6 pb-8">
          <span className="font-mono text-[9px] tracking-[0.42em] uppercase text-paper/22 block mb-4">
            Portfolio — All Work
          </span>
          <h1 className="font-display font-black text-5xl md:text-7xl text-paper leading-none">
            Selected Work
          </h1>
        </RevealOnScroll>

        {/* Filter tabs */}
        <RevealOnScroll delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as "all" | Category)}
              className={`px-4 py-1.5 font-mono text-[8px] tracking-[0.32em] uppercase transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-gold text-ink"
                  : "border border-paper/10 text-paper/32 hover:border-gold/30 hover:text-gold/65"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </RevealOnScroll>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] hover-lift">
                    <img
                      src={assetPath(project.cover)}
                      alt={project.title}
                      loading={i < 6 ? "eager" : "lazy"}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="img-overlay" />

                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="font-mono text-[7px] tracking-[0.3em] uppercase bg-gold text-ink px-2 py-0.5">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <p className="text-gold font-mono text-[7px] tracking-[0.32em] uppercase mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.client}
                      </p>
                      <h3 className="font-display font-black text-lg text-paper leading-tight group-hover:text-gold transition-colors duration-300">
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
          <p className="text-center text-paper/20 font-mono text-[9px] tracking-[0.35em] uppercase py-20">
            No projects in this category yet.
          </p>
        )}

      </div>
    </main>
  );
}
