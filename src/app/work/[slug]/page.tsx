import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/sections/ProjectGallery";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects
    .filter(
      (p) =>
        p.slug !== params.slug &&
        p.category.some((c) => project.category.includes(c))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-24">
      {/* Hero image */}
      <div className="relative w-full aspect-[16/7] bg-zinc-900 mb-16">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
          {/* Left: content */}
          <div>
            {/* Tags */}
            <RevealOnScroll className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono tracking-widest uppercase border border-gold/30 text-gold px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </RevealOnScroll>

            {/* Title */}
            <RevealOnScroll delay={0.1}>
              <h1 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
                {project.title}
              </h1>
            </RevealOnScroll>

            {/* Summary */}
            <RevealOnScroll delay={0.15}>
              <p className="text-white/70 text-lg leading-relaxed mb-8 border-l-2 border-gold pl-6">
                {project.summary}
              </p>
            </RevealOnScroll>

            {/* Description */}
            <RevealOnScroll delay={0.2}>
              <h2 className="font-display text-xl text-white mb-4">The Brief</h2>
              <p className="text-white/50 text-base leading-relaxed mb-12">
                {project.description}
              </p>
            </RevealOnScroll>

            {/* Gallery — client component for animation */}
            <RevealOnScroll>
              <h2 className="font-display text-xl text-white mb-6">Gallery</h2>
            </RevealOnScroll>
            <ProjectGallery images={project.images} title={project.title} />
          </div>

          {/* Right: sidebar */}
          <div>
            <RevealOnScroll direction="right">
              <div className="sticky top-24 space-y-8">
                <div className="border border-white/8 p-6 space-y-6">
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-gold mb-1">Client</p>
                    <p className="text-white text-sm">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-gold mb-1">Year</p>
                    <p className="text-white text-sm">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-gold mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {project.deliverables.map((d) => (
                        <li key={d} className="text-white/50 text-sm flex items-start gap-2">
                          <span className="text-gold mt-0.5">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border border-gold/20 p-6">
                  <p className="text-white text-sm mb-4">
                    Need something similar? Let&apos;s talk.
                  </p>
                  <a
                    href="mailto:conceptionsdetm@gmail.com"
                    className="block text-center px-6 py-3 bg-gold text-ink text-xs font-mono tracking-widest uppercase hover:bg-white transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Related work */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/5">
            <h2 className="font-display text-2xl text-white mb-8">More Work</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] hover-lift mb-3">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="img-overlay" />
                  </div>
                  <h3 className="font-display text-sm text-white group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <Link
            href="/work"
            className="text-xs font-mono tracking-widest uppercase text-white/30 hover:text-gold transition-colors"
          >
            ← Back to All Work
          </Link>
        </div>
      </div>
    </main>
  );
}
