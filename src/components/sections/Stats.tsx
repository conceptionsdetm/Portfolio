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

      {/* ── Shapes (ink-toned for light background) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>

        {/* Top-left: square — filled ink wash */}
        <div style={{ position:"absolute", top:"10%", left:"2%", width:44, height:44, background:"rgba(10,10,10,0.07)", border:"1.5px solid rgba(10,10,10,0.15)", animation:"s-frot 18s ease-in-out infinite" }} />
        {/* Top-left: small dot */}
        <div style={{ position:"absolute", top:"18%", left:"5%", width:7, height:7, borderRadius:"50%", background:"rgba(10,10,10,0.12)", animation:"s-float 7s ease-in-out infinite", animationDelay:"1s" }} />

        {/* Top-right: circle — filled ink wash */}
        <div style={{ position:"absolute", top:"8%", right:"3%", width:70, height:70, borderRadius:"50%", background:"rgba(10,10,10,0.07)", border:"1px solid rgba(10,10,10,0.14)", animation:"s-scale 12s ease-in-out infinite" }} />
        {/* Top-right: thin line */}
        <div style={{ position:"absolute", top:"14%", right:"6%", width:90, height:1, background:"rgba(10,10,10,0.1)", animation:"s-shrink 9s ease-in-out infinite" }} />
        {/* Top-right: tiny dot */}
        <div style={{ position:"absolute", top:"22%", right:"8%", width:6, height:6, borderRadius:"50%", background:"rgba(10,10,10,0.12)", animation:"s-float 5s ease-in-out infinite", animationDelay:"2s" }} />

        {/* Bottom-left: diagonal line */}
        <div style={{ position:"absolute", bottom:"12%", left:"2%", width:100, height:1, background:"rgba(10,10,10,0.09)", animation:"s-rise 11s ease-in-out infinite" }} />
        {/* Bottom-left: small square */}
        <div style={{ position:"absolute", bottom:"18%", left:"4%", width:12, height:12, border:"1.5px solid rgba(10,10,10,0.1)", animation:"s-rot 25s linear infinite" }} />

        {/* Bottom-right: circle — filled ink wash */}
        <div style={{ position:"absolute", bottom:"8%", right:"2%", width:55, height:55, borderRadius:"50%", background:"rgba(10,10,10,0.07)", border:"1px solid rgba(10,10,10,0.14)", animation:"s-pulse 10s ease-in-out infinite" }} />
        {/* Bottom-right: horizontal line */}
        <div style={{ position:"absolute", bottom:"14%", right:"5%", width:120, height:1, background:"rgba(10,10,10,0.08)", animation:"s-shrink 14s ease-in-out infinite", animationDelay:"3s" }} />

        {/* Center-left: tiny cross */}
        <div style={{ position:"absolute", top:"45%", left:"1.5%", width:14, height:1, background:"rgba(10,10,10,0.1)" }} />
        <div style={{ position:"absolute", top:"42%", left:"2.15%", width:1, height:14, background:"rgba(10,10,10,0.1)", animation:"s-blink 8s ease-in-out infinite" }} />

      </div>

      {/* Ghost number */}
      <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none pointer-events-none" aria-hidden>
        <span
          className="font-display font-black leading-none"
          style={{ fontSize: "40vw", color: "rgba(10,10,10,0.04)" }}
        >
          5
        </span>
      </div>

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
    </section>
  );
}
