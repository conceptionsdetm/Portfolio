import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Timonas Stefanou — Graphic Designer",
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
    title: "Timonas Stefanou — Graphic Designer",
    description: "Brand identity, social media & website design. Limassol, Cyprus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise">
        <Nav />
        {children}
        <footer className="border-t-4 border-black bg-white py-8 px-8 md:px-14">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <Logo size="sm" />
              <span className="w-px h-3.5 bg-black/15" />
              <span className="font-grotesk font-bold text-[9px] tracking-[0.3em] uppercase text-black/30">
                Timonas Stefanou
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/cdtm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-black/35 hover:text-black transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/timo_steph/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-black/35 hover:text-black transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:conceptionsdetm@gmail.com" aria-label="Email"
                className="text-black/35 hover:text-black transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* Twitch */}
              <a href="https://www.twitch.tv/narkouinox" target="_blank" rel="noopener noreferrer" aria-label="Twitch"
                className="text-black/35 hover:text-black transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="font-grotesk font-bold text-[9px] tracking-[0.3em] uppercase text-black/25">
              © {new Date().getFullYear()} &nbsp;<span className="text-vermillion">◆</span>&nbsp; Limassol, Cyprus
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
