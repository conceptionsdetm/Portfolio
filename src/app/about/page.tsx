import RevealOnScroll from "@/components/ui/RevealOnScroll";

const skills = [
  { name: "Adobe Illustrator",   level: 95 },
  { name: "Adobe Photoshop",     level: 92 },
  { name: "Adobe InDesign",      level: 88 },
  { name: "Adobe Premiere Pro",  level: 80 },
  { name: "Adobe After Effects", level: 75 },
  { name: "WordPress / Web",     level: 70 },
];

const experience = [
  {
    period: "2025 — Present",
    role: "Junior Graphic Designer",
    company: "Fameline Holding Group",
    description:
      "Creating visual assets — brand identities, social media content, corporate presentations, exhibition materials, and video productions for 15+ companies across the group.",
  },
  {
    period: "2019 — 2025",
    role: "Digital Marketing & Systems Coordinator",
    company: "P.K. Trisel Electronics Ltd",
    description:
      "Managed the full company website, designed all marketing materials (brochures, catalogs, banners, newsletters), and ran digital campaigns that elevated product visibility.",
  },
  {
    period: "2019 — 2025",
    role: "Freelance Graphic Designer",
    company: "Self-employed",
    description:
      "Delivered brand identities, websites, print materials, and social media design for clients across Cyprus — from brief to final print-ready and digital files.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <RevealOnScroll className="mb-16 max-w-2xl border-b border-paper/6 pb-8">
          <span className="font-mono text-[9px] tracking-[0.42em] uppercase text-paper/22 block mb-4">
            About
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-paper mb-8 leading-none">
            The Designer<br />
            <span className="italic text-outline-gold">Behind the Work</span>
          </h1>
          <p className="text-paper/55 text-base leading-relaxed font-light">
            I&apos;m Timonas Stefanou — a graphic designer from Limassol, Cyprus
            with a BA in Graphic &amp; Advertising Design from Frederick
            University and an Erasmus+ exchange at Escuela de Arte, Sevilla.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 mb-24">

          {/* Bio */}
          <div className="space-y-6 text-paper/52 text-base leading-relaxed font-light">
            <RevealOnScroll>
              <p>
                I specialise in brand identity, social media design, website design,
                and marketing campaigns. My work spans industries from FemTech
                and healthcare to maritime logistics, automotive, and corporate
                services — giving me the range to approach any brief with
                contextual intelligence and visual precision.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p>
                What sets my work apart is the combination of strategic thinking
                and executional quality. I don&apos;t just make things look good —
                I make sure they work. Every project starts with understanding the
                audience, the objective, and the brand before a single element is
                placed on the canvas.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <p>
                Currently working as Junior Graphic Designer at Fameline Holding
                Group in Limassol, while taking on selected freelance projects for
                clients who care about craft. I&apos;m actively looking for
                freelance collaborations, agency partnerships, and in-house
                opportunities.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="pt-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:conceptionsdetm@gmail.com"
                  className="font-mono text-[9px] tracking-[0.32em] uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold hover:text-ink transition-all duration-200"
                >
                  Email Me
                </a>
                <a
                  href="https://www.instagram.com/conceptions.detm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] tracking-[0.32em] uppercase text-paper/35 border border-paper/12 px-4 py-2 hover:border-gold/35 hover:text-gold/65 transition-all duration-200"
                >
                  Instagram
                </a>
                <a
                  href="tel:+35799212155"
                  className="font-mono text-[9px] tracking-[0.32em] uppercase text-paper/35 border border-paper/12 px-4 py-2 hover:border-gold/35 hover:text-gold/65 transition-all duration-200"
                >
                  +357 99 212155
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Skills */}
          <RevealOnScroll direction="right">
            <div>
              <h2 className="font-display font-black text-2xl text-paper mb-2 leading-none">
                Software
              </h2>
              <div className="w-8 h-px bg-gold/45 mb-8" />
              <div className="space-y-5">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between font-mono text-[8px] tracking-[0.3em] mb-2">
                      <span className="text-paper/50 uppercase">{s.name}</span>
                      <span className="text-gold">{s.level}%</span>
                    </div>
                    <div className="h-px bg-paper/8 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-gold/40"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-black text-2xl text-paper mt-12 mb-2 leading-none">
                Languages
              </h2>
              <div className="w-8 h-px bg-gold/45 mb-6" />
              <div className="space-y-2">
                {[
                  { lang: "Greek",   level: "Native" },
                  { lang: "English", level: "Fluent" },
                  { lang: "Spanish", level: "Conversational" },
                ].map((l) => (
                  <div key={l.lang} className="flex justify-between text-sm border-b border-paper/5 pb-2">
                    <span className="text-paper/52 font-light">{l.lang}</span>
                    <span className="text-paper/25 font-mono text-[8px] tracking-[0.3em] uppercase">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Experience */}
        <RevealOnScroll className="mb-10">
          <h2 className="font-display font-black text-3xl text-paper leading-none mb-2">
            Experience
          </h2>
          <div className="w-8 h-px bg-gold/45" />
        </RevealOnScroll>

        <div className="space-y-0">
          {experience.map((e, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-paper/5">
                <p className="font-mono text-[8px] tracking-[0.38em] uppercase text-gold mt-1">
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display font-black text-xl text-paper mb-1 leading-tight">
                    {e.role}
                  </h3>
                  <p className="text-paper/35 font-mono text-[8px] tracking-[0.3em] uppercase mb-3">
                    {e.company}
                  </p>
                  <p className="text-paper/45 text-sm leading-relaxed font-light">
                    {e.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education */}
        <RevealOnScroll className="mt-20 mb-10">
          <h2 className="font-display font-black text-3xl text-paper leading-none mb-2">
            Education
          </h2>
          <div className="w-8 h-px bg-gold/45" />
        </RevealOnScroll>

        <div className="space-y-0">
          {[
            {
              period: "2015 — 2024",
              degree: "BA Graphic & Advertising Design",
              school: "Frederick University, Limassol",
            },
            {
              period: "2018",
              degree: "BA Graphic & Advertising Design · Erasmus+",
              school: "Escuela de Arte, Sevilla, Spain",
            },
          ].map((e, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-paper/5">
                <p className="font-mono text-[8px] tracking-[0.38em] uppercase text-gold mt-1">
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display font-black text-lg text-paper mb-1 leading-tight">
                    {e.degree}
                  </h3>
                  <p className="text-paper/35 font-mono text-[8px] tracking-[0.3em] uppercase">
                    {e.school}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </main>
  );
}
