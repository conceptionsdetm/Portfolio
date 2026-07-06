import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "20+",  label: "Clients Served" },
  { value: "5+",   label: "Years Experience" },
  { value: "500+", label: "Designs Delivered" },
  { value: "3",    label: "Countries" },
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-14 bg-black relative overflow-hidden">

      {/* Ghost number */}
      <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden>
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "40vw", color: "rgba(255,255,255,0.03)" }}
        >
          5
        </span>
      </div>

      {/* Bauhaus yellow top bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gold" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-white/10">
        {stats.map((s, i) => (
          <RevealOnScroll key={i} delay={i * 0.1} className="text-center md:px-8 group">
            <p
              className="font-display font-black text-white leading-none mb-3"
              style={{ fontSize: "clamp(3.5rem,8vw,7rem)" }}
            >
              {s.value}
            </p>
            <div className="w-8 h-[4px] bg-vermillion mx-auto mb-3 transition-all duration-300 group-hover:w-16" />
            <p className="font-grotesk font-semibold text-sm text-white/45 tracking-[0.2em] uppercase">
              {s.label}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
