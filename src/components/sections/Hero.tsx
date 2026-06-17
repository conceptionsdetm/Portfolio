import Link from "next/link";

export default function Hero() {
  return (
    <section className="bauhaus-hero" aria-label="Introduction">

      {/* Left manifest column */}
      <div className="bauhaus-hero__left" aria-hidden="true">
        <span className="bauhaus-hero__left-manifest">Manifest</span>
        <div>
          <span className="bauhaus-hero__left-ghost">01</span>
          <p className="bauhaus-hero__left-num">№ 001</p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="bauhaus-hero__main">

        <h1 className="bauhaus-hero__name" aria-label="Timonas Stefanou">
          Timonas<br />Stefanou
        </h1>

        <div className="bauhaus-hero__rule" aria-hidden="true" />

        <p className="bauhaus-hero__role">
          Creative &nbsp;·&nbsp; Brand &nbsp;·&nbsp; Digital
        </p>

        <nav className="bauhaus-hero__nav" aria-label="Section links">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* DADA fragments — decorative */}
        <span className="dada-stamp hero__stamp" aria-hidden="true">Portfolio&nbsp;2026</span>
        <span className="dada-arrow hero__scroll" aria-hidden="true">Scroll &#8594;</span>
        <span className="dada-frag hero__frag1" aria-hidden="true">Limassol — Cyprus</span>
        <span className="dada-frag hero__frag2" aria-hidden="true">BA · Frederick University · Sevilla</span>
      </div>

      {/* Right lower cell — empty structural block */}
      <div className="bauhaus-hero__right" aria-hidden="true" />
    </section>
  );
}
