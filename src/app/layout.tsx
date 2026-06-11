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
        <footer className="border-t border-paper/5 py-8 px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <Logo size="sm" />
              <span className="w-px h-3.5 bg-paper/10" />
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-paper/20">
                Timonas Stefanou
              </span>
            </div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-paper/15">
              © {new Date().getFullYear()} &nbsp;◆&nbsp; Limassol, Cyprus
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
