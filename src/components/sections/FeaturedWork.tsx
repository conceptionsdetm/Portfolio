"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/basePath";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const featured = projects.filter((p) => p.featured);

export default function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">

      {/* ── Shapes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>

        {/* Top-right: gold circle */}
        <div style={{ position:"absolute", top:"4%", right:"3%", width:90, height:90, borderRadius:"50%", border:"1.5px solid #C9A84C", opacity:.3, animation:"s-float 11s ease-in-out infinite" }} />
        {/* Top-right: gold dot */}
        <div style={{ position:"absolute", top:"8%", right:"6%", width:10, height:10, borderRadius:"50%", background:"#C9A84C", opacity:.5, animation:"s-float 6s ease-in-out infinite", animationDelay:"1s" }} />

        {/* Top-left: vermillion horizontal slash */}
        <div style={{ position:"absolute", top:"6%", left:"2%", width:120, height:2, background:"#D01F2B", opacity:.45, animation:"s-shrink 10s ease-in-out infinite" }} />
        {/* Top-left: small vermillion square */}
        <div style={{ position:"absolute", top:"10%", left:"4%", width:18, height:18, border:"2px solid #D01F2B", opacity:.35, animation:"s-frot 14s ease-in-out infinite" }} />

        {/* Right-mid: paper vertical line */}
        <div style={{ position:"absolute", top:"25%", right:"1.5%", width:1, height:200, background:"rgba(240,235,226,0.1)", animation:"s-rise 13s ease-in-out infinite" }} />

        {/* Between cards: gold rule accent */}
        <div style={{ position:"absolute", top:"54%", right:"4%", width:160, height:1, background:"rgba(201,168,76,0.25)", animation:"s-shrink 9s ease-in-out infinite", animationDelay:"2s" }} />

        {/* Between cards: small dot */}
        <div style={{ position:"absolute", top:"52%", right:"8%", width:7, height:7, borderRadius:"50%", background:"#D01F2B", opacity:.5, animation:"s-float 5s ease-in-out infinite", animationDelay:"0.8s" }} />

        {/* Left-mid: paper short vertical */}
        <div style={{ position:"absolute", top:"38%", left:"1%", width:1, height:100, background:"rgba(240,235,226,0.08)", animation:"s-float 12s ease-in-out infinite", animationDelay:"3s" }} />
        {/* Left-mid: gold tiny dot */}
        <div style={{ position:"absolute", top:"45%", left:"3%", width:8, height:8, borderRadius:"50%", background:"#C9A84C", opacity:.35, animation:"s-pulse 7s ease-in-out infinite" }} />

        {/* Bottom-right: outline square */}
        <div style={{ position:"absolute", bottom:"6%", right:"4%", width:50, height:50, border:"1.5px solid #C9A84C", opacity:.25, animation:"s-rotr 22s linear infinite" }} />
        {/* Bottom-right: small dot */}
        <div style={{ position:"absolute", bottom:"10%", right:"9%", width:6, height:6, background:"#D01F2B", opacity:.55, animation:"s-float 4s ease-in-out infinite", animationDelay:"1.5s" }} />

        {/* Bottom-left: paper line */}
        <div style={{ position:"absolute", bottom:"8%", left:"3%", width:80, height:1, background:"rgba(240,235,226,0.1)", animation:"s-shrink 8s ease-in-out infinite", animationDelay:"4s" }} />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

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
