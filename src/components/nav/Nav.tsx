"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/",        label: "Home" },
  { href: "/work",    label: "Work" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/96 backdrop-blur-md border-b border-paper/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display italic font-black text-2xl text-gold tracking-wide hover:opacity-75 transition-opacity duration-200"
        >
          T·M
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-mono text-[9px] tracking-[0.35em] uppercase transition-colors duration-200 relative group ${
                pathname === l.href ? "text-gold" : "text-paper/40 hover:text-paper"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                  pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <a
            href="/Timonas-Stefanou-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-paper transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-5 bg-paper transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-paper transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink/98 backdrop-blur-md border-t border-paper/5 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-mono text-[11px] tracking-[0.35em] uppercase ${
                pathname === l.href ? "text-gold" : "text-paper/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/Timonas-Stefanou-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 self-start px-5 py-2.5 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
