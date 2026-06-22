"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { clients, serviceFilters } from "@/data/clients";
import { assetPath } from "@/lib/basePath";

export default function WorkPage() {
  const [search, setSearch]               = useState("");
  const [activeService, setActiveService] = useState("all");

  const filtered = useMemo(() => {
    return clients.filter((c) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.industry.toLowerCase().includes(q) ||
        c.services.some((s) => s.label.toLowerCase().includes(q));
      const matchesService =
        activeService === "all" ||
        c.services.some((s) => s.category === activeService);
      return matchesSearch && matchesService;
    });
  }, [search, activeService]);

  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>

      {/* ── Section header ── */}
      <div className="bauhaus-work__header" aria-hidden="true">
        <div className="bauhaus-work__header-num">
          <span className="bauhaus-work__ghost-num">02</span>
        </div>
        <div className="bauhaus-work__header-label">
          <span className="bauhaus-work__label">Selected Work</span>
          <div className="bauhaus-work__rule" />
        </div>
      </div>

      {/* ── Service filter bar ── */}
      <div className="bauhaus-work__filter-bar">
        <div className="bauhaus-work__filter-sidebar">Filter</div>
        <div className="bauhaus-work__filters">
          {serviceFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveService(f.id)}
              className={`bauhaus-work__filter-btn${activeService === f.id ? " active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Search bar ── */}
      <div className="bauhaus-work__search-row">
        <div className="bauhaus-work__search-sidebar" />
        <div className="bauhaus-work__search-input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clients, industries…"
          />
        </div>
      </div>

      {/* ── Client grid ── */}
      {filtered.length > 0 ? (
        <div className="bauhaus-client-grid">
          {filtered.map((client, i) => (
            <Link
              key={client.slug}
              href={`/work/${client.slug}`}
              className="bauhaus-client-card"
            >
              <span className="bauhaus-client-card__num">№ {String(i + 1).padStart(2, "0")}</span>

              <div className="bauhaus-client-card__logo">
                {client.logo ? (
                  <img
                    src={assetPath(client.logo)}
                    alt={client.name}
                    loading={i < 9 ? "eager" : "lazy"}
                    style={{ maxHeight: client.logoMaxHeight ?? 60, maxWidth: "78%", objectFit: "contain" }}
                  />
                ) : (
                  <div
                    className="bauhaus-client-card__initials"
                    style={{ background: client.logoInitialsBg, color: client.logoInitialsColor }}
                  >
                    {client.logoInitials}
                  </div>
                )}
              </div>

              <div className="bauhaus-client-card__info">
                <p className="bauhaus-client-card__name">{client.shortName}</p>
                <p className="bauhaus-client-card__industry">{client.industry}</p>
                <p className="bauhaus-client-card__services">
                  {client.services.slice(0, 2).map((s) => s.label.split(" ")[0]).join(" · ")}
                  {client.services.length > 2 && ` +${client.services.length - 2}`}
                </p>
              </div>

              <span className="bauhaus-client-card__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      ) : (
        <div style={{
          padding: "5rem 3.5rem",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.38em",
          textTransform: "uppercase",
          opacity: 0.28,
          textAlign: "center",
        }}>
          No clients match your filter.
        </div>
      )}
    </main>
  );
}
