import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { clients } from "@/data/clients";
import { assetPath } from "@/lib/basePath";
import ClientPage from "@/components/sections/ClientPage";
import ProjectGallery from "@/components/sections/ProjectGallery";
import WebsitePreview from "@/components/sections/WebsitePreview";
import CampaignArticles from "@/components/sections/CampaignArticles";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { CampaignConfig } from "@/data/campaign-types";
import { amsoilCampaign } from "@/data/amsoil-campaign";
import { miaFemtechCampaign } from "@/data/mia-femtech-campaign";

const CAMPAIGN_CONFIGS: Record<string, CampaignConfig> = {
  "amsoil-social": {
    campaign:    amsoilCampaign,
    accentColor: "#D01F2B",
    igUrl:       "https://www.instagram.com/amsoil.inc.cyprus/",
    webUrl:      "https://amsoil.com.cy/",
    igLabel:     "AMSOIL Cyprus — Instagram",
    webLabel:    "amsoil.com.cy",
  },
  "mia-femtech-social": {
    campaign:    miaFemtechCampaign,
    accentColor: "#C4687A",
    igUrl:       "http://instagram.com/miafemtech_cyprus_/",
    webUrl:      "https://mia-femtech.medisera.eu/",
    igLabel:     "MIA FemTech Cyprus — Instagram",
    webLabel:    "mia-femtech.medisera.eu",
  },
};

export function generateStaticParams() {
  const projectParams = projects.map((p) => ({ slug: p.slug }));
  const clientParams  = clients.map((c)  => ({ slug: c.slug }));
  return [...projectParams, ...clientParams];
}

interface Props {
  params: { slug: string };
}

export default function WorkDetailPage({ params }: Props) {
  const { slug } = params;

  /* ── Client case study ── */
  const client = clients.find((c) => c.slug === slug);
  if (client) {
    const clientProjects = projects.filter((p) =>
      client.projectSlugs.includes(p.slug)
    );
    return <ClientPage client={client} clientProjects={clientProjects} />;
  }

  /* ── Individual project page ── */
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter(
      (p) =>
        p.slug !== slug &&
        p.category.some((c) => project.category.includes(c))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-24">

      {/* Hero */}
      {project.logoHero ? (
        <div className="relative w-full bg-zinc-950 mb-16 overflow-hidden h-[160px] md:h-[220px] lg:h-[300px]">
          <img
            src={assetPath(project.logoHero)}
            alt={project.client}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-transparent to-transparent" />
        </div>
      ) : project.logoImg ? (
        <div className="relative w-full bg-zinc-950 mb-16 flex items-center justify-center overflow-hidden" style={{ height:"260px" }}>
          <img
            src={assetPath(project.logoImg)}
            alt={project.client}
            className="max-h-[65%] max-w-[60%] object-contain"
            style={{ filter:"drop-shadow(0 4px 32px rgba(0,0,0,0.6))" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className="relative w-full bg-zinc-900 mb-16 overflow-hidden aspect-video lg:aspect-auto lg:h-[52vh]">
          <img
            src={assetPath(project.cover)}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        </div>
      )}

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

            {project.previewImg ? (
              <RevealOnScroll>
                <h2 className="font-display font-black text-xl text-paper mb-4">Design Preview</h2>
                <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/28 mb-5">
                  Scroll to explore the full design
                </p>
                <WebsitePreview
                  img={assetPath(project.previewImg)}
                  imgTablet={project.previewImgTablet ? assetPath(project.previewImgTablet) : undefined}
                  imgMobile={project.previewImgMobile ? assetPath(project.previewImgMobile) : undefined}
                  title={project.title}
                  url={project.url}
                  ctaLabel={project.ctaLabel}
                  ctaColor={project.ctaColor}
                  ctaTextColor={project.ctaTextColor}
                  ctaFontFamily={project.ctaFontFamily}
                  ctaFontWeight={project.ctaFontWeight}
                />
              </RevealOnScroll>
            ) : project.pdf ? (
              <RevealOnScroll>
                <h2 className="font-display font-black text-xl text-paper mb-4">Full Design</h2>
                <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/28 mb-5">
                  Desktop viewport — scroll to view complete layout
                </p>
                <div className="w-full bg-zinc-900 border border-paper/6" style={{ height:"75vh" }}>
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
            ) : CAMPAIGN_CONFIGS[project.slug] ? (
              <>
                <RevealOnScroll>
                  <h2 className="font-display font-black text-xl text-paper mb-2">Campaign Articles</h2>
                  <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/28 mb-8">
                    Monthly content calendar
                  </p>
                </RevealOnScroll>
                <CampaignArticles {...CAMPAIGN_CONFIGS[project.slug]} />
              </>
            ) : (
              <>
                <RevealOnScroll>
                  <h2 className="font-display font-black text-xl text-paper mb-6">Gallery</h2>
                </RevealOnScroll>
                <ProjectGallery images={project.images} title={project.title} />
              </>
            )}

            {/* Design Materials PDF — shown whenever pdfMaterials is set, below main content */}
            {project.pdfMaterials && (
              <RevealOnScroll>
                <h2 className="font-display font-black text-xl text-paper mt-16 mb-4">Design Materials</h2>
                <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/28 mb-5">
                  Asset library — photography, icons, brand references
                </p>
                <div className="w-full bg-zinc-900 border border-paper/6" style={{ height: "75vh" }}>
                  <object
                    data={assetPath(project.pdfMaterials)}
                    type="application/pdf"
                    className="w-full h-full"
                    aria-label={`${project.title} — Design Materials`}
                  >
                    <div className="flex flex-col items-center justify-center h-full gap-5 text-center px-8">
                      <p className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper/28">
                        PDF viewer not supported in this browser.
                      </p>
                      <a
                        href={assetPath(project.pdfMaterials)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
                      >
                        Open Materials in New Tab
                      </a>
                    </div>
                  </object>
                </div>
              </RevealOnScroll>
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

                {/* Back to client */}
                {(() => {
                  const parentClient = clients.find((c) =>
                    c.projectSlugs.includes(project.slug)
                  );
                  return parentClient ? (
                    <Link
                      href={`/work/${parentClient.slug}`}
                      className="block font-grotesk font-bold text-[8px] tracking-[0.28em] uppercase text-paper/22 hover:text-gold transition-colors duration-200"
                    >
                      ← {parentClient.shortName} — All Work
                    </Link>
                  ) : null;
                })()}
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
