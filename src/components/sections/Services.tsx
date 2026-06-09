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
    <section className="py-24 md:py-32 px-6 md:px-12 bg-ink">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <RevealOnScroll className="mb-14 md:mb-16 flex items-start justify-between">
          <div>
            <span className="font-mono text-[9px] tracking-[0.42em] uppercase text-paper/22 block mb-4">
              № 04 — What I Do
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-paper leading-none">
              Services
            </h2>
          </div>
          <div
            className="hidden md:block font-mono text-[8px] tracking-[0.42em] uppercase text-paper/12 mt-1"
            style={{ writingMode: "vertical-lr" }}
          >
            Design Disciplines
          </div>
        </RevealOnScroll>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <RevealOnScroll key={s.number} delay={i * 0.07}>
              <div className="border border-paper/6 p-8 md:p-10 group hover:border-gold/20 transition-colors duration-500 relative">
                {/* Corner crop mark */}
                <div className="absolute top-3 right-3 w-3 h-px bg-paper/8" />
                <div className="absolute top-3 right-3 w-px h-3 bg-paper/8" />

                <span className="block font-mono text-[8px] tracking-[0.4em] uppercase text-gold/45 mb-7">
                  {s.number}
                </span>
                <h3 className="font-display font-black text-xl md:text-2xl text-paper mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <div className="w-7 h-px bg-gold/30 mb-5" />
                <p className="text-paper/32 text-sm leading-relaxed font-light">
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
