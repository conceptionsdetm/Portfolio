import Link from "next/link";

export default function Hero() {
  return (
    <section className="bauhaus-hero" aria-label="Introduction">

      {/* Top-left: red block with Bauhaus asterisk */}
      <div className="bauhaus-hero__tl" aria-hidden="true">
        <svg width="68" height="68" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="36" y="4" width="8" height="72" fill="#F5C400"/>
          <rect x="36" y="4" width="8" height="72" fill="#F5C400" transform="rotate(45 40 40)"/>
          <rect x="36" y="4" width="8" height="72" fill="#F5C400" transform="rotate(90 40 40)"/>
          <rect x="36" y="4" width="8" height="72" fill="#F5C400" transform="rotate(135 40 40)"/>
        </svg>
      </div>

      {/* Top-centre: empty structural cell */}
      <div className="bauhaus-hero__tc" aria-hidden="true" />

      {/* Top-right: Kandinsky circle + blue block */}
      <div className="bauhaus-hero__tr">
        <div className="bauhaus-hero__tr-circle">
          <svg width="140" height="140" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="80" cy="80" r="74" fill="none" stroke="#1A1A1A" strokeWidth="2"/>
            <circle cx="80" cy="80" r="57" fill="none" stroke="#1A1A1A" strokeWidth="2"/>
            <circle cx="80" cy="80" r="38" fill="#F5C400"/>
            <circle cx="80" cy="80" r="17" fill="#1A1A1A"/>
          </svg>
        </div>
        <div className="bauhaus-hero__tr-blue" aria-hidden="true" />
      </div>

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
        <span className="dada-stamp hero__stamp" aria-hidden="true">Portfolio&nbsp;2025</span>
        <span className="dada-arrow hero__scroll" aria-hidden="true">Scroll &#8594;</span>
        <span className="dada-frag hero__frag1" aria-hidden="true">Limassol — Cyprus</span>
        <span className="dada-frag hero__frag2" aria-hidden="true">BA · Frederick University · Sevilla</span>
      </div>

      {/* Right lower cell — empty structural block */}
      <div className="bauhaus-hero__right" aria-hidden="true" />
    </section>
  );
}
