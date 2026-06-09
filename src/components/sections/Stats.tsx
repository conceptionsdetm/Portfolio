import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "20+",  label: "Clients Served" },
  { value: "5+",   label: "Years Experience" },
  { value: "500+", label: "Designs Delivered" },
  { value: "3",    label: "Countries" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
        {stats.map((s, i) => (
          <RevealOnScroll key={i} delay={i * 0.1} className="text-center md:px-8">
            <p className="font-display text-4xl md:text-5xl text-gold mb-2">
              {s.value}
            </p>
            <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
              {s.label}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
