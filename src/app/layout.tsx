import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";

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
        <footer className="border-t border-white/5 py-8 px-6 md:px-12 text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono">
            © {new Date().getFullYear()} Timonas Stefanou &nbsp;·&nbsp; Designed &amp; built by hand
          </p>
        </footer>
      </body>
    </html>
  );
}
