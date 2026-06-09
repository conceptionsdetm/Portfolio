import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CallToAction() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <p className="text-gold text-xs tracking-widest uppercase font-mono mb-6">
            Let&apos;s Work Together
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-8 leading-tight">
            Have a project <br />
            <span className="italic gradient-text">in mind?</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto mb-10">
            I&apos;m currently available for freelance projects. Whether it&apos;s
            a brand refresh, a social campaign, or a full identity — let&apos;s
            talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="px-10 py-4 bg-gold text-ink text-sm font-mono tracking-widest uppercase hover:bg-white transition-colors duration-200"
            >
              Start a Conversation
            </a>
            <a
              href="https://www.instagram.com/conceptions.detm/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/20 text-white text-sm font-mono tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-200"
            >
              Instagram
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
