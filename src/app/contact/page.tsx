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
        <RevealOnScroll className="mb-16 max-w-xl">
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-3">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight">
            Let&apos;s Create <br />
            <span className="italic gradient-text">Something Great</span>
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            Whether it&apos;s a brand identity from scratch, a social media
            campaign, or a new website — I&apos;m currently available for
            freelance projects and collaborations.
          </p>
        </RevealOnScroll>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 mb-20">
          {contactLinks.map((link, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block bg-ink p-8 md:p-10 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <p className="text-xs font-mono tracking-widest uppercase text-gold mb-3">
                  {link.label}
                </p>
                <p className="font-display text-xl text-white mb-3 group-hover:text-gold transition-colors">
                  {link.value}
                </p>
                <p className="text-white/30 text-sm">{link.description}</p>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Availability banner */}
        <RevealOnScroll>
          <div className="border border-gold/20 p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Currently Available for Freelance
            </div>
            <p className="font-display text-2xl md:text-3xl text-white mb-6">
              Ready to start a project?
            </p>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="inline-block px-10 py-4 bg-gold text-ink text-sm font-mono tracking-widest uppercase hover:bg-white transition-colors"
            >
              Send Me a Brief
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
