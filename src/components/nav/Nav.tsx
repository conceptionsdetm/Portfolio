"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/work",    label: "Work" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bauhaus-nav">

        {/* Left: red block — home link */}
        <Link href="/" className="bauhaus-nav__block">
          <svg width="32" height="32" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="27" y="3"  width="6" height="54" fill="#F5C400"/>
            <rect x="27" y="3"  width="6" height="54" fill="#F5C400" transform="rotate(45 30 30)"/>
            <rect x="27" y="3"  width="6" height="54" fill="#F5C400" transform="rotate(90 30 30)"/>
            <rect x="27" y="3"  width="6" height="54" fill="#F5C400" transform="rotate(135 30 30)"/>
          </svg>
        </Link>

        {/* Centre: nav links — hidden on mobile */}
        <nav className="bauhaus-nav__links" aria-label="Primary navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname.startsWith(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: Kandinsky circles — hidden on mobile */}
        <div className="bauhaus-nav__right">
          <svg width="38" height="38" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="27" fill="none" stroke="#1A1A1A" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="17" fill="#F5C400"/>
            <circle cx="40" cy="40" r="7"  fill="#1A1A1A"/>
          </svg>
        </div>
      </header>

      {/* Mobile drawer — toggled by hamburger hidden on desktop */}
      {/* Mobile hamburger — shown only on small screens via inline style */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 201,
          height: "var(--nav-h)",
          width: 56,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
        className="mobile-menu-btn"
      >
        <span style={{ display:"block", width:22, height:1.5, background:"var(--black)", transition:"all 0.2s",
          transform: open ? "rotate(45deg) translateY(6px)" : "none" }} />
        <span style={{ display:"block", width:22, height:1.5, background:"var(--black)", transition:"all 0.2s",
          opacity: open ? 0 : 1 }} />
        <span style={{ display:"block", width:22, height:1.5, background:"var(--black)", transition:"all 0.2s",
          transform: open ? "rotate(-45deg) translateY(-6px)" : "none" }} />
      </button>

      {open && (
        <div style={{
          position: "fixed",
          top: "var(--nav-h)",
          left: 0,
          right: 0,
          zIndex: 199,
          background: "var(--cream)",
          borderBottom: "var(--grid-line)",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: pathname.startsWith(l.href) ? "var(--red)" : "var(--black)",
                opacity: pathname.startsWith(l.href) ? 1 : 0.6,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
