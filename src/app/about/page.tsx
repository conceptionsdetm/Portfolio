const skills = [
  { name: "Adobe Illustrator",   level: 95 },
  { name: "Adobe Photoshop",     level: 92 },
  { name: "Adobe InDesign",      level: 88 },
  { name: "Adobe Premiere Pro",  level: 80 },
  { name: "Adobe After Effects", level: 75 },
  { name: "WordPress / Web",     level: 70 },
];

const experience = [
  {
    period: "2025 — Present",
    role: "Junior Graphic Designer",
    company: "Fameline Holding Group",
    description:
      "Creating visual assets — brand identities, social media content, corporate presentations, exhibition materials, and video productions for 15+ companies across the group.",
  },
  {
    period: "2019 — 2025",
    role: "Digital Marketing & Systems Coordinator",
    company: "P.K. Trisel Electronics Ltd",
    description:
      "Managed the full company website, designed all marketing materials (brochures, catalogs, banners, newsletters), and ran digital campaigns that elevated product visibility.",
  },
  {
    period: "2019 — 2025",
    role: "Freelance Graphic Designer",
    company: "Self-employed",
    description:
      "Delivered brand identities, websites, print materials, and social media design for clients across Cyprus — from brief to final print-ready and digital files.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>

      {/* ── Top section: 3-column Bauhaus grid ── */}
      <div className="bauhaus-about-hero">

        {/* Left: red block + Kandinsky target */}
        <div className="bauhaus-about-hero__left">
          <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="60" cy="60" r="56" fill="#F5C400"/>
            <circle cx="60" cy="60" r="36" fill="#D62B2B"/>
            <circle cx="60" cy="60" r="18" fill="#1A1A1A"/>
          </svg>
        </div>

        {/* Centre: intro text */}
        <div className="bauhaus-about-hero__center">
          <span className="bauhaus-section-id">03 — About</span>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)",
            lineHeight: 0.92,
            transform: "rotate(-1.2deg)",
            transformOrigin: "left center",
            display: "inline-block",
            marginBottom: 0,
          }}>
            About<br />the Work
          </h2>

          <div className="bauhaus-rule" />

          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.75,
            color: "rgba(26,26,26,0.78)",
            maxWidth: 540,
          }}>
            A graphic designer from Limassol, Cyprus with a BA in Graphic &amp; Advertising
            Design from Frederick University and an Erasmus+ exchange at Escuela de Arte,
            Sevilla. Specialising in brand identity, social media campaigns, and website design
            for clients across maritime, healthcare, defence, and corporate sectors.
          </p>

          <span className="bauhaus-stamp" aria-hidden="true" style={{ marginTop: "2.5rem" }}>
            Limassol, Cyprus — 2025
          </span>
        </div>

        {/* Right: stats */}
        <div className="bauhaus-about-hero__right">
          <div className="bauhaus-stat">
            <p className="bauhaus-stat__label">Discipline</p>
            <p className="bauhaus-stat__value">Brand</p>
            <p className="bauhaus-stat__desc">Identity · Social · Digital</p>
          </div>
          <div className="bauhaus-stat">
            <p className="bauhaus-stat__label">Based in</p>
            <p className="bauhaus-stat__value">CY</p>
            <p className="bauhaus-stat__desc">Limassol, Cyprus</p>
          </div>
          <div className="bauhaus-stat">
            <p className="bauhaus-stat__label">Education</p>
            <p className="bauhaus-stat__value">BA</p>
            <p className="bauhaus-stat__desc">Frederick Univ. + Sevilla</p>
          </div>
          <div className="bauhaus-stat">
            <p className="bauhaus-stat__label">Available</p>
            <p className="bauhaus-stat__value">Yes</p>
            <p className="bauhaus-stat__desc">Freelance projects</p>
          </div>
        </div>
      </div>

      {/* ── Detailed section: 2-column ── */}
      <div className="bauhaus-about-detail">

        {/* Sidebar with vertical label */}
        <div className="bauhaus-about-detail__sidebar" aria-hidden="true">
          <span className="bauhaus-about-detail__sidebar-label">Profile</span>
        </div>

        {/* Main content */}
        <div className="bauhaus-about-detail__content">

          {/* Bio + Skills side-by-side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>

            {/* Bio */}
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", lineHeight: 1, marginBottom: "1.5rem" }}>
                The Designer
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: 14, lineHeight: 1.75, fontWeight: 300, color: "rgba(26,26,26,0.75)" }}>
                  I specialise in brand identity, social media design, website design, and
                  marketing campaigns. My work spans industries from FemTech and healthcare to
                  maritime logistics, automotive, and corporate services.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.75, fontWeight: 300, color: "rgba(26,26,26,0.75)" }}>
                  What sets my work apart is the combination of strategic thinking and
                  executional quality. Every project starts with understanding the audience,
                  the objective, and the brand before a single element is placed on canvas.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.75, fontWeight: 300, color: "rgba(26,26,26,0.75)" }}>
                  Currently working as Junior Graphic Designer at Fameline Holding Group in
                  Limassol, while taking on selected freelance projects for clients who care
                  about craft.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
                <a
                  href="mailto:conceptionsdetm@gmail.com"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    padding: "0.6rem 1.2rem",
                    background: "var(--red)",
                    color: "var(--white)",
                    display: "inline-block",
                  }}
                >
                  Email Me
                </a>
                <a
                  href="tel:+35799212155"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    padding: "0.6rem 1.2rem",
                    border: "var(--grid-line)",
                    color: "var(--black)",
                    display: "inline-block",
                  }}
                >
                  +357 99 212155
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", lineHeight: 1, marginBottom: "1.5rem" }}>
                Software
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="bauhaus-skill-label">
                      <span style={{ color: "rgba(26,26,26,0.7)" }}>{s.name}</span>
                      <span style={{ color: "var(--red)" }}>{s.level}%</span>
                    </div>
                    <div className="bauhaus-skill-track">
                      <div className="bauhaus-skill-fill" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", lineHeight: 1, margin: "2.5rem 0 1.5rem" }}>
                Languages
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { lang: "Greek",   level: "Native" },
                  { lang: "English", level: "Fluent" },
                  { lang: "Spanish", level: "Conversational" },
                ].map((l) => (
                  <div key={l.lang} className="bauhaus-row" style={{ gridTemplateColumns: "1fr auto", gap: "1rem", padding: "0.75rem 0" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 14, opacity: 0.65 }}>
                      {l.lang}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.35 }}>
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", lineHeight: 1, marginBottom: "0.5rem" }}>
            Experience
          </h3>
          <div className="bauhaus-rule" />

          <div>
            {experience.map((e, i) => (
              <div key={i} className="bauhaus-row">
                <p className="bauhaus-row__period" style={{ color: "var(--red)" }}>{e.period}</p>
                <div>
                  <h4 className="bauhaus-row__role">{e.role}</h4>
                  <p className="bauhaus-row__company">{e.company}</p>
                  <p className="bauhaus-row__desc">{e.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", lineHeight: 1, margin: "3rem 0 0.5rem" }}>
            Education
          </h3>
          <div className="bauhaus-rule" />

          <div>
            {[
              { period: "2015 — 2024", degree: "BA Graphic & Advertising Design", school: "Frederick University, Limassol" },
              { period: "2018",        degree: "BA Graphic & Advertising Design · Erasmus+", school: "Escuela de Arte, Sevilla, Spain" },
            ].map((e, i) => (
              <div key={i} className="bauhaus-row">
                <p className="bauhaus-row__period" style={{ color: "var(--blue)" }}>{e.period}</p>
                <div>
                  <h4 className="bauhaus-row__role" style={{ fontSize: "1.5rem" }}>{e.degree}</h4>
                  <p className="bauhaus-row__company">{e.school}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ width: "100%", height: "1.5px", background: "var(--black)", marginTop: "3rem" }} />
        </div>
      </div>
    </main>
  );
}
