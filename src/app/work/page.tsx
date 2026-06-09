"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/projects";
import type { Category } from "@/data/projects";
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
        <RevealOnScroll className="mb-12">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-3">
            Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Selected Work
          </h1>
        </RevealOnScroll>

        {/* Filter tabs */}
        <RevealOnScroll delay={0.1} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as "all" | Category)}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-gold text-ink"
                  : "border border-white/15 text-white/40 hover:border-gold/40 hover:text-gold/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </RevealOnScroll>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] hover-lift">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="img-overlay" />

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-mono tracking-widest uppercase bg-gold text-ink px-2 py-0.5">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <p className="text-gold text-xs font-mono tracking-widest uppercase mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.client}
                      </p>
                      <h3 className="font-display text-lg text-white group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/30 font-mono text-sm py-20">
            No projects in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
