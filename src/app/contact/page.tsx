import RevealOnScroll from "@/components/ui/RevealOnScroll";

const Y = "#FFDD00";
const R = "#BE1622";
const B = "#00539F";

const contactLinks = [
  { label:"Email",     value:"conceptionsdetm@gmail.com", href:"mailto:conceptionsdetm@gmail.com", description:"Best for project enquiries and brief discussions.", accent:R },
  { label:"Phone",     value:"+357 99 212155",             href:"tel:+35799212155",                 description:"Available Mon–Fri, 9am–6pm Cyprus time.",           accent:"#000000" },
  { label:"Instagram", value:"@conceptions.detm",          href:"https://www.instagram.com/conceptions.detm/", description:"Follow the work and behind-the-scenes process.", accent:B },
  { label:"Location",  value:"Limassol, Cyprus",            href:"#",                                description:"Available for remote and local projects.",          accent:Y },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24 px-8 md:px-14 relative overflow-hidden">

      {/* ── Animated Bauhaus shapes ── */}

      {/* Top-right yellow quarter circle */}
      <div aria-hidden className="absolute top-0 right-0 pointer-events-none" style={{ width:220, height:220, overflow:"hidden" }}>
        <div style={{
          position:"absolute", top:0, right:0, left:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:Y, opacity:0.88,
          animation:"s-pulse 14s ease-in-out infinite",
        }} />
      </div>

      {/* Top-right small red circle */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:70, height:70, borderRadius:"50%", background:R,
        right:55, top:55,
        animation:"s-float 8s ease-in-out infinite 0.5s",
      }} />

      {/* Bottom-left blue quarter circle */}
      <div aria-hidden className="absolute bottom-0 left-0 pointer-events-none" style={{ width:200, height:200, overflow:"hidden" }}>
        <div style={{
          position:"absolute", bottom:0, left:0, top:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:B, opacity:0.85,
          animation:"s-pulse 16s ease-in-out infinite 2.5s",
        }} />
      </div>

      {/* Left floating yellow square */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        width:55, height:55, background:Y, opacity:0.6,
        left:"2%", top:"48%",
        animation:"s-rot 24s linear infinite",
      }} />

      {/* Mid-right floating red circle */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:120, height:120, borderRadius:"50%", background:R, opacity:0.15,
        right:"12%", top:"50%",
        animation:"s-scale 11s ease-in-out infinite 1s",
      }} />

      {/* Mid rotating blue outline circle */}
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:180, height:180, borderRadius:"50%",
        border:`4px solid ${B}`, opacity:0.14,
        right:"6%", bottom:"15%",
        animation:"s-pulse 13s ease-in-out infinite 3s",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <RevealOnScroll className="mb-16 max-w-xl">
          <div style={{ width:"100%", height:4, background:"#000000", marginBottom:24 }} />
          <span className="font-grotesk font-bold text-[9px] tracking-[0.42em] uppercase text-black/30 block mb-4">
            Contact
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-black mb-6 leading-none">
            Let&apos;s Create<br />
            <span style={{ color:R, transform:"rotate(-1deg)", display:"inline-block" }}>Something Great</span>
          </h1>
          <p className="text-black/50 text-base leading-relaxed font-grotesk font-light">
            Whether it&apos;s a brand identity from scratch, a social media
            campaign, or a new website — I&apos;m currently available for
            freelance projects and collaborations.
          </p>
        </RevealOnScroll>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-[4px] mb-20" style={{ background:"#000000" }}>
          {contactLinks.map((link, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block bg-white p-8 md:p-10 transition-all duration-300 hover:bg-black"
                style={{ borderLeft:`4px solid ${link.accent}` }}
              >
                <p className="font-grotesk font-bold text-[8px] tracking-[0.4em] uppercase mb-3 transition-colors duration-300" style={{ color:link.accent }}>
                  {link.label}
                </p>
                <p className="font-display font-black text-xl text-black mb-3 leading-tight group-hover:text-white transition-colors duration-300">
                  {link.value}
                </p>
                <p className="text-black/40 group-hover:text-white/40 text-sm font-grotesk font-light transition-colors duration-300">
                  {link.description}
                </p>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Availability banner */}
        <RevealOnScroll>
          <div className="relative p-8 md:p-12 text-center" style={{ background:Y, border:"4px solid #000000" }}>

            {/* Animated shape accents */}
            <div aria-hidden style={{
              position:"absolute", top:-14, right:28, width:28, height:28,
              background:R, transform:"rotate(12deg)",
              animation:"s-frot 18s ease-in-out infinite",
            }} />
            <div aria-hidden style={{
              position:"absolute", bottom:-14, left:28, width:28, height:28,
              borderRadius:"50%", background:B,
              animation:"s-float 7s ease-in-out infinite 1s",
            }} />

            <div className="inline-flex items-center gap-2 font-grotesk font-bold text-[9px] tracking-[0.38em] uppercase text-black mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Currently Available for Freelance
            </div>
            <p className="font-display font-black text-2xl md:text-3xl text-black mb-6 leading-tight" style={{ transform:"rotate(-0.5deg)" }}>
              Ready to start a project?
            </p>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="inline-block px-10 py-4 font-grotesk font-bold text-[9px] tracking-[0.32em] uppercase transition-all duration-200 hover:scale-105"
              style={{ background:"#000000", color:Y, boxShadow:`4px 4px 0px ${R}`, transform:"rotate(-1deg)" }}
            >
              Send Me a Brief →
            </a>
          </div>
        </RevealOnScroll>

        <div style={{ width:"100%", height:4, background:"#000000", marginTop:64 }} />
      </div>
    </main>
  );
}
