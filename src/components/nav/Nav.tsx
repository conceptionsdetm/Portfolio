"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import CVModal from "@/components/ui/CVModal";

const links = [
  { href: "/",        label: "Home" },
  { href: "/work",    label: "Work" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-paper/96 backdrop-blur-md border-b border-ink/8" : "bg-transparent"
        }`}
      >
        <div className="px-8 md:px-14 h-16">
          <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between">

            {/* Logo — left */}
            <Logo size="md" />

            {/* Nav links — always visible */}
            <nav className="flex items-center gap-5 md:gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-grotesk font-medium text-[8px] md:text-[9px] tracking-[0.35em] uppercase transition-colors duration-200 relative group ${
                    pathname === l.href ? "text-vermillion" : "text-ink/45 hover:text-ink"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-vermillion transition-all duration-300 ${
                      pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CV button — desktop only */}
            <button
              onClick={() => setCvOpen(true)}
              className="hidden md:block px-5 py-2 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
            >
              View CV
            </button>
          </div>
        </div>
      </header>

      {/* CV Modal */}
      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
