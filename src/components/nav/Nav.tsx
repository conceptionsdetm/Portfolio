"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/",         label: "Home" },
  { href: "/work",     label: "Work" },
  { href: "/about",    label: "About" },
  { href: "/contact",  label: "Contact" },
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
        scrolled ? "bg-ink/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display italic text-xl text-gold tracking-wide hover:opacity-80 transition-opacity"
        >
          T·M
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs tracking-widest uppercase font-mono transition-colors duration-200 relative group ${
                pathname === l.href ? "text-gold" : "text-white/50 hover:text-white"
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
            href="mailto:conceptionsdetm@gmail.com"
            className="ml-4 px-5 py-2 border border-gold/50 text-gold text-xs tracking-widest uppercase font-mono hover:bg-gold hover:text-ink transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink/98 backdrop-blur-md border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-widest uppercase font-mono ${
                pathname === l.href ? "text-gold" : "text-white/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:conceptionsdetm@gmail.com"
            className="mt-2 self-start px-5 py-2.5 border border-gold text-gold text-xs tracking-widest uppercase font-mono"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
