import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/basePath";
import ProjectGallery from "@/components/sections/ProjectGallery";
import WebsitePreview from "@/components/sections/WebsitePreview";
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
      <div className="relative w-full aspect-[16/7] bg-zinc-900 mb-16 overflow-hidden">
        <img
          src={assetPath(project.cover)}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-16">

          {/* Left: content */}
          <div>
            <RevealOnScroll className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[8px] tracking-[0.32em] uppercase border border-gold/25 text-gold px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="font-display font-black text-3xl md:text-5xl text-paper mb-6 leading-tight">
                {project.title}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <p className="text-paper/65 text-lg leading-relaxed mb-8 border-l border-gold/50 pl-6 font-light">
                {project.summary}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <h2 className="font-display font-black text-xl text-paper mb-4">The Brief</h2>
              <p className="text-paper/38 text-base leading-relaxed mb-12 font-light">
                {project.description}
              </p>
            </RevealOnScroll>

            {project.url && project.pdf ? (
              <RevealOnScroll>
                <h2 className="font-display font-black text-xl text-paper mb-4">Design Preview</h2>
                <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/28 mb-5">
                  Scroll to explore the full design
                </p>
                <WebsitePreview
                  url={project.url}
                  pdf={assetPath(project.pdf)}
                  pdfTablet={project.pdfTablet ? assetPath(project.pdfTablet) : undefined}
                  pdfMobile={project.pdfMobile ? assetPath(project.pdfMobile) : undefined}
                  title={project.title}
                />
              </RevealOnScroll>
            ) : project.pdf ? (
              <RevealOnScroll>
                <h2 className="font-display font-black text-xl text-paper mb-4">Full Design</h2>
                <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/28 mb-5">
                  Desktop viewport — scroll to view complete layout
                </p>
                <div className="w-full bg-zinc-900 border border-paper/6" style={{ height: "75vh" }}>
                  <object
                    data={assetPath(project.pdf)}
                    type="application/pdf"
                    className="w-full h-full"
                    aria-label={`${project.title} — Full Design`}
                  >
                    <div className="flex flex-col items-center justify-center h-full gap-5 text-center px-8">
                      <p className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper/28">
                        PDF viewer not supported in this browser.
                      </p>
                      <a
                        href={assetPath(project.pdf)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
                      >
                        Open Design in New Tab
                      </a>
                    </div>
                  </object>
                </div>
              </RevealOnScroll>
            ) : (
              <>
                <RevealOnScroll>
                  <h2 className="font-display font-black text-xl text-paper mb-6">Gallery</h2>
                </RevealOnScroll>
                <ProjectGallery images={project.images} title={project.title} />
              </>
            )}
          </div>

          {/* Right: sidebar */}
          <div>
            <RevealOnScroll direction="right">
              <div className="sticky top-24 space-y-6">
                <div className="border border-paper/7 p-6 space-y-6">
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.38em] uppercase text-gold mb-1">Client</p>
                    <p className="text-paper text-sm font-light">{project.client}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.38em] uppercase text-gold mb-1">Year</p>
                    <p className="text-paper text-sm font-light">{project.year}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.38em] uppercase text-gold mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {project.deliverables.map((d) => (
                        <li key={d} className="text-paper/38 text-sm flex items-start gap-2 font-light">
                          <span className="text-gold mt-0.5 shrink-0">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border border-gold/18 p-6">
                  <p className="text-paper/55 text-sm mb-4 font-light">
                    Need something similar? Let&apos;s talk.
                  </p>
                  <a
                    href="mailto:conceptionsdetm@gmail.com"
                    className="block text-center px-6 py-3 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
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
          <div className="mt-24 pt-16 border-t border-paper/5">
            <h2 className="font-display font-black text-2xl text-paper mb-8">More Work</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-zinc-900 aspect-[4/3] hover-lift mb-3">
                    <img
                      src={assetPath(p.cover)}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="img-overlay" />
                  </div>
                  <h3 className="font-display font-black text-sm text-paper group-hover:text-gold transition-colors duration-200 leading-tight">
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
            className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper/22 hover:text-gold transition-colors duration-200"
          >
            ← Back to All Work
          </Link>
        </div>
      </div>
    </main>
  );
}
