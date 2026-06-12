export default function ContactPage() {
  const links = [
    { label: "Email",     value: "conceptionsdetm@gmail.com", href: "mailto:conceptionsdetm@gmail.com" },
    { label: "Phone",     value: "+357 99 212155",             href: "tel:+35799212155" },
    { label: "Instagram", value: "@timo_steph",                href: "https://www.instagram.com/timo_steph/" },
    { label: "LinkedIn",  value: "linkedin.com/in/cdtm",       href: "https://www.linkedin.com/in/cdtm" },
    { label: "Twitch",    value: "narkouinox",                  href: "https://www.twitch.tv/narkouinox" },
    { label: "Location",  value: "Limassol, Cyprus",            href: "#" },
  ];

  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>

      {/* ── Section header ── */}
      <div className="bauhaus-work__header">
        <div className="bauhaus-work__header-num">
          <span className="bauhaus-work__ghost-num">04</span>
        </div>
        <div className="bauhaus-work__header-label">
          <span className="bauhaus-work__label">Contact</span>
          <div className="bauhaus-work__rule" />
        </div>
      </div>

      {/* ── Contact grid ── */}
      <div className="bauhaus-contact">

        {/* Left: yellow block with Bauhaus asterisk */}
        <div className="bauhaus-contact__sidebar">
          <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="36" y="4" width="8" height="72" fill="#1A1A1A"/>
            <rect x="36" y="4" width="8" height="72" fill="#1A1A1A" transform="rotate(45 40 40)"/>
            <rect x="36" y="4" width="8" height="72" fill="#1A1A1A" transform="rotate(90 40 40)"/>
            <rect x="36" y="4" width="8" height="72" fill="#1A1A1A" transform="rotate(135 40 40)"/>
          </svg>
        </div>

        {/* Right: contact links */}
        <div className="bauhaus-contact__main">
          <span className="bauhaus-section-id">04 — Contact</span>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)",
            lineHeight: 0.92,
            transform: "rotate(-1.2deg)",
            transformOrigin: "left center",
            display: "inline-block",
            marginBottom: 0,
          }}>
            Let&apos;s Create<br />Something
          </h2>

          <div className="bauhaus-rule" />

          <p style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.75,
            color: "rgba(26,26,26,0.75)",
            maxWidth: 480,
            marginBottom: "3rem",
          }}>
            Available for freelance projects — brand identity, social media campaigns,
            website design. Based in Limassol, working globally.
          </p>

          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bauhaus-contact__link"
            >
              <span className="bauhaus-contact__link-label">{l.label}</span>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: 14, letterSpacing: "0.04em" }}>
                {l.value}
              </span>
            </a>
          ))}

          <div style={{ marginTop: "3rem" }}>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                padding: "0.75rem 2rem",
                background: "var(--red)",
                color: "var(--white)",
              }}
            >
              Send a Brief →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
