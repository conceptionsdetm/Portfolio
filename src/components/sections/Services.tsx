import RevealOnScroll from "@/components/ui/RevealOnScroll";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Logo design, brand systems, guidelines, stationery, and everything needed to build a consistent, memorable identity from scratch.",
  },
  {
    number: "02",
    title: "Social Media Design",
    description:
      "Monthly content calendars, campaign visuals, carousels, stories, and ad creatives designed to grow engagement and brand recognition.",
  },
  {
    number: "03",
    title: "Website Design",
    description:
      "Landing pages, corporate websites, and UI/UX design with a focus on conversion, clarity, and premium visual presentation across all devices.",
  },
  {
    number: "04",
    title: "Marketing Design",
    description:
      "Email campaigns, brochures, presentations, leaflets, exhibition graphics, and print materials that communicate clearly and look exceptional.",
  },
  {
    number: "05",
    title: "Motion Graphics",
    description:
      "Animated social content, exhibition videos, LED wall content, promotional videos, and After Effects productions for events and digital platforms.",
  },
  {
    number: "06",
    title: "Creative Direction",
    description:
      "Strategic visual direction for brands, campaigns, and launches — bringing creative vision and execution quality to every touchpoint.",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-ink relative overflow-hidden">

      {/* ── Shapes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>

        {/* Top-right: large gold circle — filled */}
        <div style={{ position:"absolute", top:"3%", right:"2%", width:110, height:110, borderRadius:"50%", background:"rgba(201,168,76,0.13)", border:"1.5px solid rgba(201,168,76,0.38)", animation:"s-pulse 13s ease-in-out infinite" }} />
        {/* Top-right: medium gold circle — filled */}
        <div style={{ position:"absolute", top:"6%", right:"4.5%", width:55, height:55, borderRadius:"50%", background:"rgba(201,168,76,0.1)", border:"1px solid rgba(201,168,76,0.28)", animation:"s-scale 9s ease-in-out infinite", animationDelay:"1s" }} />
        {/* Top-right: gold dot */}
        <div style={{ position:"absolute", top:"4%", right:"10%", width:9, height:9, borderRadius:"50%", background:"#C9A84C", opacity:.45, animation:"s-float 6s ease-in-out infinite" }} />

        {/* Top-left: vermillion slash */}
        <div style={{ position:"absolute", top:"5%", left:"1%", width:140, height:2, background:"#D01F2B", opacity:.4, animation:"s-shrink 11s ease-in-out infinite" }} />
        {/* Top-left: small square — filled */}
        <div style={{ position:"absolute", top:"9%", left:"3%", width:32, height:32, background:"rgba(208,31,43,0.2)", border:"2px solid rgba(208,31,43,0.5)", animation:"s-frot 16s ease-in-out infinite" }} />
        {/* Top-left: tiny dot */}
        <div style={{ position:"absolute", top:"15%", left:"2%", width:6, height:6, background:"#D01F2B", opacity:.4, animation:"s-float 5s ease-in-out infinite", animationDelay:"2s" }} />

        {/* Left side mid: paper vertical line */}
        <div style={{ position:"absolute", top:"28%", left:"0.8%", width:1, height:180, background:"rgba(240,235,226,0.09)", animation:"s-rise 14s ease-in-out infinite" }} />
        {/* Left side: cross */}
        <div style={{ position:"absolute", top:"48%", left:"2%", width:16, height:1, background:"rgba(240,235,226,0.12)" }} />
        <div style={{ position:"absolute", top:"45.5%", left:"2.65%", width:1, height:16, background:"rgba(240,235,226,0.12)", animation:"s-blink 9s ease-in-out infinite" }} />

        {/* Right side mid: paper line */}
        <div style={{ position:"absolute", top:"35%", right:"1%", width:1, height:220, background:"rgba(240,235,226,0.07)", animation:"s-rise 17s ease-in-out infinite", animationDelay:"3s" }} />
        {/* Right side: small dot */}
        <div style={{ position:"absolute", top:"55%", right:"3%", width:8, height:8, borderRadius:"50%", background:"#D01F2B", opacity:.4, animation:"s-float 7s ease-in-out infinite", animationDelay:"1.5s" }} />

        {/* Between row 1 and row 2: gold rule (at ~52% height) */}
        <div style={{ position:"absolute", top:"50%", left:"0", width:"100%", height:1, background:"rgba(201,168,76,0.06)" }} />

        {/* Bottom-left: gold square — filled */}
        <div style={{ position:"absolute", bottom:"5%", left:"2%", width:60, height:60, background:"rgba(201,168,76,0.12)", border:"1.5px solid rgba(201,168,76,0.35)", animation:"s-rotr 20s linear infinite" }} />
        {/* Bottom-left: dot */}
        <div style={{ position:"absolute", bottom:"9%", left:"6%", width:10, height:10, borderRadius:"50%", background:"#C9A84C", opacity:.35, animation:"s-float 8s ease-in-out infinite" }} />
        {/* Bottom-left: horizontal rule */}
        <div style={{ position:"absolute", bottom:"14%", left:"1%", width:100, height:1, background:"rgba(240,235,226,0.08)", animation:"s-shrink 10s ease-in-out infinite", animationDelay:"4s" }} />

        {/* Bottom-right: vermillion square — filled */}
        <div style={{ position:"absolute", bottom:"6%", right:"3%", width:40, height:40, background:"rgba(208,31,43,0.18)", border:"2px solid rgba(208,31,43,0.45)", animation:"s-rot 28s linear infinite" }} />
        {/* Bottom-right: paper line */}
        <div style={{ position:"absolute", bottom:"10%", right:"6%", width:1, height:120, background:"rgba(240,235,226,0.07)", animation:"s-wag 12s ease-in-out infinite" }} />
        {/* Bottom-right: tiny dot cluster */}
        <div style={{ position:"absolute", bottom:"18%", right:"8%", width:5, height:5, background:"#D01F2B", opacity:.45, animation:"s-float 4s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"21%", right:"10%", width:4, height:4, background:"#C9A84C", opacity:.4, animation:"s-float 5.5s ease-in-out infinite", animationDelay:"0.7s" }} />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <RevealOnScroll className="mb-14 md:mb-20">
          <h2 className="font-display font-black text-paper leading-none"
              style={{ fontSize: "clamp(3rem,8vw,6rem)" }}>
            Fields of Work
          </h2>
        </RevealOnScroll>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <RevealOnScroll key={s.number} delay={i * 0.07}>
              <div className="border border-paper/6 p-8 md:p-10 group hover:border-vermillion/30 transition-colors duration-500">
                <span className="block font-display font-black text-vermillion leading-none mb-6"
                      style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)" }}>
                  {s.number}
                </span>
                <h3 className="font-display font-black text-paper mb-4 leading-tight group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: "clamp(1.25rem,2.2vw,1.75rem)" }}>
                  {s.title}
                </h3>
                <div className="w-6 h-[3px] bg-vermillion/40 mb-5 group-hover:bg-vermillion transition-colors duration-300" />
                <p className="font-display font-normal text-paper/45 text-lg leading-relaxed">
                  {s.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
