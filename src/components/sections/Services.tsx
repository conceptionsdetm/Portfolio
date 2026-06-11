import RevealOnScroll from "@/components/ui/RevealOnScroll";

const fields = [
  "Brand Identity",
  "Social Media Design",
  "Website Design",
  "Marketing Design",
  "Motion Graphics",
  "Creative Direction",
];

export default function Services() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12 bg-ink relative overflow-hidden border-t border-paper/6">

      {/* ── Shapes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{ position:"absolute", top:"15%", right:"2%", width:70, height:70, borderRadius:"50%", background:"rgba(201,168,76,0.1)", border:"1.5px solid rgba(201,168,76,0.3)", animation:"s-pulse 13s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"20%", right:"5%", width:8, height:8, borderRadius:"50%", background:"#C9A84C", opacity:.45, animation:"s-float 6s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"20%", left:"1%", width:40, height:40, background:"rgba(201,168,76,0.1)", border:"1.5px solid rgba(201,168,76,0.3)", animation:"s-rotr 20s linear infinite" }} />
        <div style={{ position:"absolute", top:"50%", left:"0.8%", width:1, height:80, background:"rgba(240,235,226,0.08)", animation:"s-rise 14s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"15%", right:"3%", width:28, height:28, background:"rgba(208,31,43,0.16)", border:"2px solid rgba(208,31,43,0.42)", animation:"s-rot 22s linear infinite" }} />
        <div style={{ position:"absolute", top:"30%", right:"10%", width:100, height:1, background:"rgba(201,168,76,0.2)", animation:"s-shrink 10s ease-in-out infinite" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title + rule */}
        <RevealOnScroll className="mb-6 md:mb-8">
          <h2
            className="font-display font-black text-paper leading-none"
            style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
          >
            Fields of Work
          </h2>
        </RevealOnScroll>

        <div className="w-full h-[2px] bg-vermillion mb-6 md:mb-8" />

        {/* All 6 fields — one elegant line */}
        <RevealOnScroll>
          <div className="flex flex-wrap items-center">
            {fields.map((field, i) => (
              <span key={field} className="flex items-center">
                <span
                  className="font-display font-black text-paper/80 hover:text-paper transition-colors duration-300 cursor-default"
                  style={{ fontSize: "clamp(1rem,1.8vw,1.4rem)", letterSpacing: "0.02em" }}
                >
                  {field}
                </span>
                {i < fields.length - 1 && (
                  <span
                    className="text-vermillion mx-4 md:mx-6 select-none"
                    style={{ fontSize: "clamp(0.6rem,1vw,0.85rem)" }}
                  >
                    ◆
                  </span>
                )}
              </span>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
