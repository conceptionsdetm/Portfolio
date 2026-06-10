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

      {/* Ghost text background */}
      <div className="absolute left-[-3%] bottom-[-8%] select-none pointer-events-none z-0" aria-hidden>
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "35vw", color: "rgba(240,235,226,0.018)" }}
        >
          S
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <RevealOnScroll className="mb-14 md:mb-20 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-5 h-px bg-vermillion block" />
              <span className="font-mono text-[11px] tracking-[0.42em] uppercase text-paper/30">
                № 04 — What I Do
              </span>
            </div>
            <h2 className="font-display font-black text-paper leading-none"
                style={{ fontSize: "clamp(3rem,8vw,6rem)" }}>
              Services
            </h2>
          </div>
        </RevealOnScroll>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <RevealOnScroll key={s.number} delay={i * 0.07}>
              <div className="border border-paper/6 p-8 md:p-10 group hover:border-vermillion/30 transition-colors duration-500 relative">

                {/* Crop corner */}
                <div className="absolute top-3 right-3 w-3 h-px bg-paper/10" />
                <div className="absolute top-3 right-3 w-px h-3 bg-paper/10" />

                {/* Number — large Bodoni Black, vermillion */}
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
