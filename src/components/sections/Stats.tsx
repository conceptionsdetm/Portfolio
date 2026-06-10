import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "20+",  label: "Clients Served" },
  { value: "5+",   label: "Years Experience" },
  { value: "500+", label: "Designs Delivered" },
  { value: "3",    label: "Countries" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-paper relative overflow-hidden">

      {/* Ghost number background */}
      <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden>
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "40vw", color: "rgba(10,10,10,0.04)" }}
        >
          5
        </span>
      </div>

      {/* Crop marks */}
      <div className="absolute top-5 left-5 w-5 h-px bg-ink/10" />
      <div className="absolute top-5 left-5 w-px h-5 bg-ink/10" />
      <div className="absolute bottom-5 right-5 w-5 h-px bg-ink/10" />
      <div className="absolute bottom-5 right-5 w-px h-5 bg-ink/10" />

      {/* Vermillion top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-vermillion" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-ink/8">
        {stats.map((s, i) => (
          <RevealOnScroll key={i} delay={i * 0.1} className="text-center md:px-8 group">
            <p className="font-display font-black text-ink leading-none mb-3"
               style={{ fontSize: "clamp(3.5rem,8vw,7rem)" }}>
              {s.value}
            </p>
            <div className="w-8 h-[3px] bg-vermillion mx-auto mb-3 transition-all duration-300 group-hover:w-16" />
            <p className="font-display font-bold text-lg text-ink/55 tracking-wide uppercase">
              {s.label}
            </p>
          </RevealOnScroll>
        ))}
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-ink/5" />
    </section>
  );
}
