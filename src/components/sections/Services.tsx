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
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-3">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Services
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((s, i) => (
            <RevealOnScroll key={s.number} delay={i * 0.08} className="bg-ink p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-300">
              <span className="block font-mono text-gold/40 text-xs tracking-widest mb-6">
                {s.number}
              </span>
              <h3 className="font-display text-xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {s.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
