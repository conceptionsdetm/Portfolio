import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "20+",  label: "Clients Served" },
  { value: "5+",   label: "Years Experience" },
  { value: "500+", label: "Designs Delivered" },
  { value: "3",    label: "Countries" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-paper relative">
      {/* Crop mark — top left */}
      <div className="absolute top-5 left-5 w-4 h-px bg-ink/10" />
      <div className="absolute top-5 left-5 w-px h-4 bg-ink/10" />
      {/* Crop mark — bottom right */}
      <div className="absolute bottom-5 right-5 w-4 h-px bg-ink/10" />
      <div className="absolute bottom-5 right-5 w-px h-4 bg-ink/10" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-ink/8">
        {stats.map((s, i) => (
          <RevealOnScroll key={i} delay={i * 0.1} className="text-center md:px-8">
            <p className="font-display font-black text-5xl md:text-6xl text-ink mb-2 leading-none">
              {s.value}
            </p>
            <p className="font-mono text-[8px] tracking-[0.4em] uppercase text-ink/35">
              {s.label}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
