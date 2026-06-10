"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/basePath";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const featured = projects.filter((p) => p.featured);

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <RevealOnScroll className="mb-12 md:mb-14 flex items-end justify-between border-b border-paper/6 pb-6">
          <h2 className="font-display font-black text-4xl md:text-5xl text-paper leading-none">
            Featured Work
          </h2>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-[0.32em] uppercase text-paper/35 hover:text-gold transition-colors duration-200"
          >
            All Work &nbsp;→
          </Link>
        </RevealOnScroll>

        {/* Featured grid */}
        <div className="space-y-4 md:space-y-5">
          {/* First — large hero card */}
          {featured[0] && (
            <RevealOnScroll>
              <Link href={`/work/${featured[0].slug}`} className="group block">
                <div className="relative overflow-hidden bg-zinc-900 aspect-[16/7] hover-lift">
                  <img
                    src={assetPath(featured[0].cover)}
                    alt={featured[0].title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="img-overlay" />
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured[0].tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] tracking-[0.3em] uppercase border border-gold/30 text-gold px-2 py-0.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display font-black text-2xl md:text-4xl text-paper mb-2 leading-tight group-hover:text-gold transition-colors duration-300">
                      {featured[0].title}
                    </h3>
                    <p className="font-display font-normal text-paper/45 text-lg max-w-xl hidden md:block">
                      {featured[0].summary}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          )}

          {/* Second + third — side by side */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {featured.slice(1, 3).map((project, i) => (
              <RevealOnScroll key={project.slug} delay={i * 0.12}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] hover-lift">
                    <img
                      src={assetPath(project.cover)}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="img-overlay" />
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <p className="font-mono text-[9px] tracking-[0.32em] uppercase text-gold mb-2">
                        {project.client}
                      </p>
                      <h3 className="font-display font-black text-xl md:text-2xl text-paper leading-tight group-hover:text-gold transition-colors duration-300">
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
            className="font-mono text-[11px] tracking-[0.32em] uppercase text-paper/35 hover:text-gold transition-colors duration-200"
          >
            All Work →
          </Link>
        </div>

      </div>
    </section>
  );
}
