"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const featured = projects.filter((p) => p.featured);

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealOnScroll className="flex items-end justify-between mb-16">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase font-mono mb-3">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-gold transition-colors"
          >
            View All
            <span className="text-base">→</span>
          </Link>
        </RevealOnScroll>

        {/* Featured grid */}
        <div className="space-y-4 md:space-y-6">
          {/* First featured — large hero card */}
          {featured[0] && (
            <RevealOnScroll>
              <Link href={`/work/${featured[0].slug}`} className="group block">
                <div className="relative overflow-hidden bg-zinc-900 aspect-[16/7] hover-lift">
                  <Image
                    src={featured[0].cover}
                    alt={featured[0].title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 90vw"
                  />
                  <div className="img-overlay" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured[0].tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono tracking-widest uppercase border border-gold/30 text-gold px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl md:text-4xl text-white mb-2 group-hover:text-gold transition-colors">
                      {featured[0].title}
                    </h3>
                    <p className="text-white/60 text-sm max-w-xl hidden md:block">
                      {featured[0].summary}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          )}

          {/* Second and third — side by side */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {featured.slice(1, 3).map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 0.15}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] hover-lift">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="img-overlay" />
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <p className="text-gold text-xs font-mono tracking-widest uppercase mb-2">
                        {project.client}
                      </p>
                      <h3 className="font-display text-xl md:text-2xl text-white group-hover:text-gold transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-gold transition-colors"
          >
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
