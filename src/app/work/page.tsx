"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clients, serviceFilters } from "@/data/clients";
import { assetPath } from "@/lib/basePath";

const Y = "#FFDD00";
const R = "#BE1622";
const B = "#00539F";

export default function WorkPage() {
  const [search, setSearch]           = useState("");
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
    <main className="min-h-screen bg-white pt-24 pb-24 px-8 md:px-14 relative overflow-hidden">

      {/* ── Bauhaus corner decorations ── */}
      <div aria-hidden className="absolute top-0 right-0 pointer-events-none" style={{ width:200, height:200, overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, right:0, left:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:R, opacity:0.88, animation:"s-pulse 15s ease-in-out infinite" }} />
      </div>
      <div aria-hidden className="absolute pointer-events-none hidden md:block" style={{
        width:64, height:64, borderRadius:"50%", background:Y,
        right:52, top:52, animation:"s-float 10s ease-in-out infinite 1s",
      }} />
      <div aria-hidden className="absolute bottom-0 left-0 pointer-events-none" style={{ width:170, height:170, overflow:"hidden" }}>
        <div style={{ position:"absolute", bottom:0, left:0, top:"auto", width:"200%", height:"200%",
          borderRadius:"50%", background:Y, opacity:0.82, animation:"s-pulse 12s ease-in-out infinite 2s" }} />
      </div>
      <div aria-hidden className="absolute pointer-events-none hidden lg:block" style={{
        width:50, height:50, background:B, opacity:0.50,
        left:"1.5%", top:"52%", animation:"s-rot 22s linear infinite",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Editorial header ── */}
        <div className="mb-14">
          <div style={{ width:"100%", height:4, background:"#000000", marginBottom:24 }} />
          <span className="font-grotesk font-bold text-[9px] tracking-[0.42em] uppercase text-black/30 block mb-4">
            Portfolio — Clients
          </span>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h1 className="font-display font-black text-5xl md:text-7xl text-black leading-none">
              Selected{" "}
              <span style={{ color:R, display:"inline-block", transform:"rotate(-1.2deg)" }}>Work</span>
            </h1>
            <motion.span
              key={filtered.length}
              initial={{ opacity:0, y:6 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.25 }}
              className="font-grotesk font-bold text-[9px] tracking-[0.35em] uppercase text-black/18 pb-2 tabular-nums"
            >
              {filtered.length} {filtered.length === 1 ? "Client" : "Clients"}
            </motion.span>
          </div>
        </div>

        {/* ── Search + filter ── */}
        <div className="mb-12 flex flex-col gap-4">
          {/* Search bar */}
          <div className="relative max-w-sm">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-black/25">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search clients..."
              className="w-full border border-black/15 px-4 py-2.5 pl-9 font-grotesk text-sm text-black placeholder:text-black/25 focus:outline-none focus:border-black/50 transition-colors duration-200 bg-white"
            />
          </div>

          {/* Service filter pills */}
          <div className="flex flex-wrap gap-2">
            {serviceFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveService(f.id)}
                className="font-grotesk font-bold text-[8px] tracking-[0.28em] uppercase px-4 py-1.5 transition-all duration-200 hover:scale-105"
                style={
                  activeService === f.id
                    ? { background:"#000000", color:Y, boxShadow:`2px 2px 0px ${R}` }
                    : { border:"2px solid rgba(0,0,0,0.12)", color:"rgba(0,0,0,0.38)" }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Client logo grid ── */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-px"
              style={{ background:"rgba(0,0,0,0.07)" }}
            >
              {filtered.map((client, i) => (
                <motion.div
                  key={client.slug}
                  initial={{ opacity:0, y:12 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.35, delay: Math.min(i * 0.04, 0.3) }}
                >
                  <Link
                    href={`/work/${client.slug}`}
                    className="group relative flex flex-col bg-white p-5 md:p-6 hover:bg-neutral-50 transition-all duration-300 cursor-pointer h-full"
                    style={{ minHeight:190 }}
                  >
                    {/* Hover arrow */}
                    <span
                      className="absolute top-3 right-3 text-xs transition-all duration-300"
                      style={{ color:"rgba(0,0,0,0)", opacity:0 }}
                      aria-hidden
                    >
                      ↗
                    </span>
                    <span
                      className="absolute top-3 right-3 text-xs transition-all duration-300 group-hover:opacity-100"
                      style={{ color:"rgba(0,0,0,0.35)", opacity:0 }}
                      aria-hidden
                    >
                      ↗
                    </span>

                    {/* Logo area */}
                    <div className="flex items-center justify-center flex-1 py-2">
                      {client.logo ? (
                        <img
                          src={assetPath(client.logo)}
                          alt={client.name}
                          loading={i < 12 ? "eager" : "lazy"}
                          className="max-h-16 max-w-[82%] object-contain transition-transform duration-300 group-hover:scale-110"
                          style={{ filter:"none" }}
                        />
                      ) : (
                        <div
                          className="w-14 h-14 flex items-center justify-center font-display font-black text-sm transition-transform duration-300 group-hover:scale-110 select-none"
                          style={{ background:client.logoInitialsBg, color:client.logoInitialsColor }}
                        >
                          {client.logoInitials}
                        </div>
                      )}
                    </div>

                    {/* Card info */}
                    <div className="border-t border-black/6 pt-3 mt-2">
                      <p className="font-grotesk font-bold text-[11px] text-black leading-tight mb-0.5 truncate">
                        {client.shortName}
                      </p>
                      <p className="font-grotesk text-[8px] tracking-[0.22em] uppercase text-black/28 truncate">
                        {client.industry}
                      </p>
                      <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1.5">
                        {client.services.slice(0, 2).map((s) => (
                          <span key={s.category} className="font-grotesk text-[7px] tracking-[0.12em] uppercase text-black/18">
                            {s.label.split(" ")[0]}
                          </span>
                        ))}
                        {client.services.length > 2 && (
                          <span className="font-grotesk text-[7px] text-black/15">
                            +{client.services.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              className="text-center text-black/22 font-grotesk font-bold text-[9px] tracking-[0.38em] uppercase py-20"
            >
              No clients match your filter.
            </motion.p>
          )}
        </AnimatePresence>

        <div style={{ width:"100%", height:4, background:"#000000", marginTop:64 }} />
      </div>
    </main>
  );
}
