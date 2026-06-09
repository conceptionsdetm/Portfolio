import RevealOnScroll from "@/components/ui/RevealOnScroll";

const contactLinks = [
  {
    label: "Email",
    value: "conceptionsdetm@gmail.com",
    href: "mailto:conceptionsdetm@gmail.com",
    description: "Best for project enquiries and brief discussions.",
  },
  {
    label: "Phone",
    value: "+357 99 212155",
    href: "tel:+35799212155",
    description: "Available Mon–Fri, 9am–6pm Cyprus time.",
  },
  {
    label: "Instagram",
    value: "@conceptions.detm",
    href: "https://www.instagram.com/conceptions.detm/",
    description: "Follow the work and behind-the-scenes process.",
  },
  {
    label: "Location",
    value: "Limassol, Cyprus",
    href: "#",
    description: "Available for remote and local projects.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <RevealOnScroll className="mb-16 max-w-xl border-b border-paper/6 pb-8">
          <span className="font-mono text-[9px] tracking-[0.42em] uppercase text-paper/22 block mb-4">
            Contact
          </span>
          <h1 className="font-display font-black text-4xl md:text-6xl text-paper mb-6 leading-none">
            Let&apos;s Create<br />
            <span className="italic text-outline-gold">Something Great</span>
          </h1>
          <p className="text-paper/45 text-base leading-relaxed font-light">
            Whether it&apos;s a brand identity from scratch, a social media
            campaign, or a new website — I&apos;m currently available for
            freelance projects and collaborations.
          </p>
        </RevealOnScroll>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-px bg-paper/5 mb-20">
          {contactLinks.map((link, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block bg-ink p-8 md:p-10 hover:bg-paper/[0.025] transition-colors duration-300"
              >
                <p className="font-mono text-[8px] tracking-[0.4em] uppercase text-gold mb-3">
                  {link.label}
                </p>
                <p className="font-display font-black text-xl text-paper mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {link.value}
                </p>
                <p className="text-paper/28 text-sm font-light">{link.description}</p>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Availability banner */}
        <RevealOnScroll>
          <div className="border border-gold/18 p-8 md:p-12 text-center relative">
            {/* Crop marks */}
            <div className="absolute top-4 left-4 w-4 h-px bg-gold/20" />
            <div className="absolute top-4 left-4 w-px h-4 bg-gold/20" />
            <div className="absolute bottom-4 right-4 w-4 h-px bg-gold/20" />
            <div className="absolute bottom-4 right-4 w-px h-4 bg-gold/20" />

            <div className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.38em] uppercase text-gold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Currently Available for Freelance
            </div>
            <p className="font-display font-black text-2xl md:text-3xl text-paper mb-6 leading-tight">
              Ready to start a project?
            </p>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="inline-block px-10 py-4 bg-gold text-ink font-mono text-[9px] tracking-[0.32em] uppercase hover:bg-paper transition-colors duration-200"
            >
              Send Me a Brief
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </main>
  );
}
