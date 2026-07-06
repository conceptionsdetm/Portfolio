import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";

export const metadata: Metadata = {
  title: "Timonas Stefanou — Creative Designer",
  description:
    "Portfolio of Timonas Stefanou — Graphic Designer specialising in Brand Identity, Social Media, Website Design, and Creative Direction. Based in Limassol, Cyprus.",
  keywords: [
    "graphic designer",
    "brand identity",
    "social media design",
    "website design",
    "creative director",
    "Limassol",
    "Cyprus",
    "Timonas Stefanou",
  ],
  authors: [{ name: "Timonas Stefanou" }],
  openGraph: {
    title: "Timonas Stefanou — Creative Designer",
    description: "Brand identity, social media & website design. Limassol, Cyprus.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">
        <Nav />
        {children}

        {/* ── Bauhaus footer ── */}
        <footer className="bauhaus-footer" id="contact" aria-label="Contact and footer">

          {/* Yellow accent square */}
          <div className="bauhaus-footer__accent" aria-hidden="true">
            <div className="bauhaus-footer__accent-sq" />
          </div>

          {/* Name + location + links */}
          <div className="bauhaus-footer__center">
            <span className="bauhaus-footer__name">Timonas Stefanou</span>
            <span className="bauhaus-footer__location">Limassol &mdash; Cyprus</span>

            <div className="bauhaus-footer__links">
              <a href="mailto:conceptionsdetm@gmail.com" className="bauhaus-footer__link">
                conceptionsdetm@gmail.com
              </a>
              <span className="bauhaus-footer__sep">·</span>
              <a href="tel:+35799212155" className="bauhaus-footer__link">
                +357 99 212155
              </a>
              <span className="bauhaus-footer__sep">·</span>
              <a href="https://www.instagram.com/timo_steph/" target="_blank" rel="noopener noreferrer" className="bauhaus-footer__link">
                Instagram
              </a>
              <span className="bauhaus-footer__sep">·</span>
              <a href="https://www.linkedin.com/in/cdtm" target="_blank" rel="noopener noreferrer" className="bauhaus-footer__link">
                LinkedIn
              </a>
              <span className="bauhaus-footer__sep">·</span>
              <a href="https://www.twitch.tv/narkouinox" target="_blank" rel="noopener noreferrer" className="bauhaus-footer__link">
                Twitch
              </a>
            </div>
          </div>

          <span className="bauhaus-footer__year">2025</span>
        </footer>
      </body>
    </html>
  );
}
