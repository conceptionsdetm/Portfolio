import RevealOnScroll from "@/components/ui/RevealOnScroll";

const Y = "#FFDD00";
const R = "#BE1622";
const B = "#00539F";

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
    <main className="min-h-screen bg-white pt-24 pb-24 px-8 md:px-14 relative overflow-hidden">

      {/* ── Animated Bauhaus shapes ── */}

      {/* Top-right blue quarter circle */}
      <div aria-hidden className="absolute top-0 right-0 pointer-events-none" style={{ width:240, height:240, overflow:"hidden" }}>
        <div style={{
          position:"absolute", top:0, right:0, left:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:B, opacity:0.88,
          animation:"s-pulse 16s ease-in-out infinite",
        }} />
      </div>

      {/* Top-right red circle (nested) */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:80, height:80, borderRadius:"50%", background:R,
        right:60, top:60,
        animation:"s-float 9s ease-in-out infinite 1s",
      }} />

      {/* Bottom-left yellow quarter circle */}
      <div aria-hidden className="absolute bottom-0 left-0 pointer-events-none" style={{ width:180, height:180, overflow:"hidden" }}>
        <div style={{
          position:"absolute", bottom:0, left:0, top:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:Y, opacity:0.85,
          animation:"s-pulse 14s ease-in-out infinite 2s",
        }} />
      </div>

      {/* Mid rotating yellow square */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        width:60, height:60, background:Y, opacity:0.55,
        left:"3%", top:"55%",
        animation:"s-rot 28s linear infinite",
      }} />

      {/* Mid-right floating blue circle outline */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:200, height:200, borderRadius:"50%",
        border:`4px solid ${B}`, opacity:0.16,
        right:"10%", top:"45%",
        animation:"s-scale 12s ease-in-out infinite 0.5s",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <RevealOnScroll className="mb-16 max-w-2xl">
          <div style={{ width:"100%", height:4, background:"#000000", marginBottom:24 }} />
          <span className="font-grotesk font-bold text-[9px] tracking-[0.42em] uppercase text-black/30 block mb-4">
            About
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-black mb-6 leading-none">
            The Designer<br />
            <span style={{ color:R }}>Behind the Work</span>
          </h1>
          <p className="text-black/55 text-base leading-relaxed font-grotesk font-light">
            I&apos;m Timonas Stefanou — a graphic designer from Limassol, Cyprus
            with a BA in Graphic &amp; Advertising Design from Frederick
            University and an Erasmus+ exchange at Escuela de Arte, Sevilla.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 mb-24">

          {/* Bio */}
          <div className="space-y-6 text-black/55 text-base leading-relaxed font-grotesk font-light">
            <RevealOnScroll>
              <p>
                I specialise in brand identity, social media design, website design,
                and marketing campaigns. My work spans industries from FemTech
                and healthcare to maritime logistics, automotive, and corporate
                services — contextual intelligence and visual precision on every brief.
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
                clients who care about craft.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} className="pt-4">
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:conceptionsdetm@gmail.com"
                  className="font-grotesk font-bold text-[9px] tracking-[0.32em] uppercase px-5 py-2.5 transition-all duration-200 hover:scale-105"
                  style={{ background:R, color:"#FFFFFF", boxShadow:"3px 3px 0px #000000", transform:"rotate(-0.8deg)" }}
                >
                  Email Me
                </a>
                <a
                  href="https://www.instagram.com/conceptions.detm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-grotesk font-bold text-[9px] tracking-[0.32em] uppercase px-5 py-2.5 transition-all duration-200 hover:scale-105"
                  style={{ border:"2px solid #000000", color:"#000000", background:"#FFFFFF", boxShadow:"3px 3px 0px #000000", transform:"rotate(0.5deg)" }}
                >
                  Instagram
                </a>
                <a
                  href="tel:+35799212155"
                  className="font-grotesk font-bold text-[9px] tracking-[0.32em] uppercase px-5 py-2.5 transition-all duration-200 hover:scale-105"
                  style={{ border:`2px solid ${B}`, color:B, background:"#FFFFFF", boxShadow:`3px 3px 0px ${B}`, transform:"rotate(-0.4deg)" }}
                >
                  +357 99 212155
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Skills */}
          <RevealOnScroll direction="right">
            <div>
              <h2 className="font-display font-black text-2xl text-black mb-2 leading-none">Software</h2>
              <div style={{ width:32, height:4, background:R, marginBottom:32 }} />
              <div className="space-y-5">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between font-grotesk text-[8px] tracking-[0.3em] mb-2">
                      <span className="text-black/50 uppercase">{s.name}</span>
                      <span style={{ color:R }} className="font-bold">{s.level}%</span>
                    </div>
                    <div className="h-[3px] bg-black/8 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0"
                        style={{ width:`${s.level}%`, background:`linear-gradient(90deg, ${R}, ${Y})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-black text-2xl text-black mt-12 mb-2 leading-none">Languages</h2>
              <div style={{ width:32, height:4, background:B, marginBottom:24 }} />
              <div className="space-y-2">
                {[
                  { lang:"Greek",   level:"Native" },
                  { lang:"English", level:"Fluent" },
                  { lang:"Spanish", level:"Conversational" },
                ].map((l) => (
                  <div key={l.lang} className="flex justify-between text-sm border-b border-black/8 pb-2">
                    <span className="text-black/55 font-grotesk font-light">{l.lang}</span>
                    <span className="text-black/30 font-grotesk font-bold text-[8px] tracking-[0.3em] uppercase">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Experience */}
        <RevealOnScroll className="mb-10">
          <h2 className="font-display font-black text-3xl text-black leading-none mb-2">Experience</h2>
          <div style={{ width:32, height:4, background:"#000000" }} />
        </RevealOnScroll>

        <div className="space-y-0">
          {experience.map((e, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-black/8">
                <p className="font-grotesk font-bold text-[8px] tracking-[0.38em] uppercase mt-1" style={{ color:R }}>
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display font-black text-xl text-black mb-1 leading-tight">{e.role}</h3>
                  <p className="text-black/35 font-grotesk font-bold text-[8px] tracking-[0.3em] uppercase mb-3">{e.company}</p>
                  <p className="text-black/50 text-sm leading-relaxed font-grotesk font-light">{e.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education */}
        <RevealOnScroll className="mt-20 mb-10">
          <h2 className="font-display font-black text-3xl text-black leading-none mb-2">Education</h2>
          <div style={{ width:32, height:4, background:"#000000" }} />
        </RevealOnScroll>

        <div className="space-y-0">
          {[
            { period:"2015 — 2024", degree:"BA Graphic & Advertising Design", school:"Frederick University, Limassol" },
            { period:"2018",        degree:"BA Graphic & Advertising Design · Erasmus+", school:"Escuela de Arte, Sevilla, Spain" },
          ].map((e, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-b border-black/8">
                <p className="font-grotesk font-bold text-[8px] tracking-[0.38em] uppercase mt-1" style={{ color:B }}>
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display font-black text-lg text-black mb-1 leading-tight">{e.degree}</h3>
                  <p className="text-black/35 font-grotesk font-bold text-[8px] tracking-[0.3em] uppercase">{e.school}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div style={{ width:"100%", height:4, background:"#000000", marginTop:64 }} />
      </div>
    </main>
  );
}
