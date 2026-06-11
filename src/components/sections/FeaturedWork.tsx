"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/basePath";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const featured = projects.filter((p) => p.featured);

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-14 bg-white">

      {/* 4px black top rule */}
      <div className="w-full h-[4px] bg-black mb-12 md:mb-14" />

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <RevealOnScroll className="mb-12 md:mb-14 flex items-end justify-between">
          <h2 className="font-display font-black text-4xl md:text-6xl text-black leading-none">
            Featured<br />Work
          </h2>
          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2 font-grotesk font-bold text-[10px] tracking-[0.28em] uppercase text-black/40 hover:text-vermillion transition-colors duration-150"
          >
            All Work →
          </Link>
        </RevealOnScroll>

        {/* Featured grid */}
        <div className="space-y-3 md:space-y-4">

          {/* First — large hero card */}
          {featured[0] && (
            <RevealOnScroll>
              <Link href={`/work/${featured[0].slug}`} className="group block">
                <div className="relative overflow-hidden bg-black aspect-[16/7] hover-lift" style={{ outline: "2px solid #000000" }}>
                  <img
                    src={assetPath(featured[0].cover)}
                    alt={featured[0].title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="img-overlay" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured[0].tags.slice(0, 3).map((t) => (
                        <span key={t} className="font-grotesk font-bold text-[8px] tracking-[0.3em] uppercase bg-vermillion text-white px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-black text-2xl md:text-4xl text-white mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                      {featured[0].title}
                    </h3>
                    <p className="font-grotesk font-light text-white/50 text-base max-w-xl hidden md:block">
                      {featured[0].summary}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          )}

          {/* Second + third — side by side */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {featured.slice(1, 3).map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 0.1}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-black aspect-[4/3] hover-lift" style={{ outline: "2px solid #000000" }}>
                    <img
                      src={assetPath(project.cover)}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="img-overlay" />
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <p className="font-grotesk font-bold text-[8px] tracking-[0.3em] uppercase text-gold mb-2">
                        {project.client}
                      </p>
                      <h3 className="font-display font-black text-xl md:text-2xl text-white leading-tight group-hover:text-gold transition-colors duration-300">
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
        <div className="mt-8 md:hidden">
          <Link href="/work" className="font-grotesk font-bold text-[10px] tracking-[0.28em] uppercase text-black/40 hover:text-vermillion transition-colors duration-150">
            All Work →
          </Link>
        </div>

      </div>

      {/* 4px black bottom rule */}
      <div className="w-full h-[4px] bg-black mt-16 md:mt-20" />
    </section>
  );
}
