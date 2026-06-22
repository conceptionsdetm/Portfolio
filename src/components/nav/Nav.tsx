"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CVModal from "@/components/ui/CVModal";

const links = [
  { href: "/work",    label: "Work" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <header className="bauhaus-nav">

        {/* Left: red block with asterisk + blue accent strip */}
        <div className="bauhaus-nav__block" style={{ display: "flex", padding: 0 }}>
          <Link href="/" style={{
            flex: 1,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "var(--red)",
          }}>
            <svg width="32" height="32" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="27" y="3"  width="6" height="54" fill="#F5C400"/>
              <rect x="27" y="3"  width="6" height="54" fill="#F5C400" transform="rotate(45 30 30)"/>
              <rect x="27" y="3"  width="6" height="54" fill="#F5C400" transform="rotate(90 30 30)"/>
              <rect x="27" y="3"  width="6" height="54" fill="#F5C400" transform="rotate(135 30 30)"/>
            </svg>
          </Link>
          <div aria-hidden="true" style={{
            width: 18,
            background: "var(--blue)",
            borderLeft: "var(--grid-line)",
          }} />
        </div>

        {/* Centre: nav links */}
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

        {/* Right: CV button */}
        <div className="bauhaus-nav__right">
          <button
            onClick={() => setCvOpen(true)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              padding: "0.5rem 1.25rem",
              background: "var(--yellow)",
              color: "var(--black)",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            View CV
          </button>
        </div>
      </header>

      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
