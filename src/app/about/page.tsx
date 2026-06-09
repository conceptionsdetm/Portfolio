import RevealOnScroll from "@/components/ui/RevealOnScroll";

const skills = [
  { name: "Adobe Illustrator",  level: 95 },
  { name: "Adobe Photoshop",    level: 92 },
  { name: "Adobe InDesign",     level: 88 },
  { name: "Adobe Premiere Pro", level: 80 },
  { name: "Adobe After Effects",level: 75 },
  { name: "WordPress / Web",    level: 70 },
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
        <RevealOnScroll className="mb-16 max-w-2xl">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-3">
            About
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-8 leading-tight">
            The Designer <br />
            <span className="italic gradient-text">Behind the Work</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            I&apos;m Timonas Stefanou — a graphic designer from Limassol, Cyprus
            with a BA in Graphic &amp; Advertising Design from Frederick
            University and an Erasmus+ exchange at Escuela de Arte, Sevilla.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 mb-24">
          {/* Bio */}
          <div className="space-y-6 text-white/60 text-base leading-relaxed">
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

            {/* Contact links */}
            <RevealOnScroll delay={0.2} className="pt-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:conceptionsdetm@gmail.com"
                  className="text-xs font-mono tracking-widest uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold hover:text-ink transition-all"
                >
                  Email Me
                </a>
                <a
                  href="https://www.instagram.com/conceptions.detm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono tracking-widest uppercase text-white/40 border border-white/15 px-4 py-2 hover:border-gold/40 hover:text-gold/60 transition-all"
                >
                  Instagram
                </a>
                <a
                  href="tel:+35799212155"
                  className="text-xs font-mono tracking-widest uppercase text-white/40 border border-white/15 px-4 py-2 hover:border-gold/40 hover:text-gold/60 transition-all"
                >
                  +357 99 212155
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Skills */}
          <RevealOnScroll direction="right">
            <div>
              <h2 className="font-display text-2xl text-white mb-8 line-gold">
                Software
              </h2>
              <div className="space-y-5">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs font-mono tracking-wider mb-2">
                      <span className="text-white/60 uppercase">{s.name}</span>
                      <span className="text-gold">{s.level}%</span>
                    </div>
                    <div className="h-px bg-white/10 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-gold/50"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display text-2xl text-white mt-12 mb-6 line-gold">
                Languages
              </h2>
              <div className="space-y-2">
                {[
                  { lang: "Greek",   level: "Native" },
                  { lang: "English", level: "Fluent" },
                  { lang: "Spanish", level: "Conversational" },
                ].map((l) => (
                  <div key={l.lang} className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-white/60">{l.lang}</span>
                    <span className="text-white/30 text-xs font-mono">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Experience */}
        <RevealOnScroll className="mb-12">
          <h2 className="font-display text-3xl text-white line-gold">
            Experience
          </h2>
        </RevealOnScroll>

        <div className="space-y-0">
          {experience.map((e, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-white/5">
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-gold">
                    {e.period}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white mb-1">
                    {e.role}
                  </h3>
                  <p className="text-white/40 text-sm font-mono mb-3">
                    {e.company}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education */}
        <RevealOnScroll className="mt-20 mb-12">
          <h2 className="font-display text-3xl text-white line-gold">
            Education
          </h2>
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
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-white/5">
                <p className="text-xs font-mono tracking-widest uppercase text-gold">
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">{e.degree}</h3>
                  <p className="text-white/40 text-sm font-mono">{e.school}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
}
