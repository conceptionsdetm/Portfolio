"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import type { Client } from "@/data/clients";
import { clients, sectionLabels } from "@/data/clients";
import type { Project } from "@/data/projects";
import { assetPath } from "@/lib/basePath";

interface Props {
  client: Client;
  clientProjects: Project[];
}

const R = "#BE1622";

export default function ClientPage({ client, clientProjects }: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  const categories = Array.from(
    new Set(clientProjects.flatMap((p) => p.category))
  ).filter(Boolean);

  const clientIndex = clients.findIndex((c) => c.slug === client.slug);
  const prevClient  = clientIndex > 0                ? clients[clientIndex - 1] : null;
  const nextClient  = clientIndex < clients.length - 1 ? clients[clientIndex + 1] : null;

  const tabs = [
    { id: "overview", label: "Overview" },
    ...categories.map((cat) => ({ id: cat, label: sectionLabels[cat] || cat })),
  ];

  const scrollTo = useCallback((id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 128;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="pt-28 pb-20 px-8 md:px-14 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">

            {/* Left column */}
            <div>
              <Link
                href="/work"
                className="font-grotesk font-bold text-[8px] tracking-[0.32em] uppercase text-black/25 hover:text-black transition-colors duration-200 mb-6 inline-block"
              >
                ← All Clients
              </Link>

              <p className="font-grotesk font-bold text-[9px] tracking-[0.42em] uppercase text-black/30 mb-3">
                {client.industry}
              </p>

              <h1 className="font-display font-black leading-none text-black mb-5"
                style={{ fontSize:"clamp(2.4rem,6vw,5.5rem)" }}>
                {client.name}
              </h1>

              <div style={{ width:"100%", height:4, background:"#000000", marginBottom:24 }} />

              <p className="font-grotesk text-lg text-black/60 leading-relaxed max-w-xl mb-8">
                {client.overview}
              </p>

              {/* Service badges */}
              <div className="flex flex-wrap gap-2">
                {client.services.map((s) => (
                  <span
                    key={s.category}
                    className="font-grotesk font-bold text-[7px] tracking-[0.28em] uppercase px-4 py-1.5"
                    style={{ border:"2px solid #000000", color:"#000000" }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column: logo + year */}
            <div className="flex flex-col items-center gap-4 lg:pt-14">
              {client.logo ? (
                <div className="flex items-center justify-center w-full h-36">
                  <img
                    src={assetPath(client.logo)}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ filter:"drop-shadow(0 2px 16px rgba(0,0,0,0.10))" }}
                  />
                </div>
              ) : (
                <div
                  className="w-36 h-36 flex items-center justify-center font-display font-black text-3xl select-none"
                  style={{ background:client.logoInitialsBg, color:client.logoInitialsColor }}
                >
                  {client.logoInitials}
                </div>
              )}
              <span className="font-grotesk text-[8px] tracking-[0.38em] uppercase text-black/28">
                {client.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky tab navigation ── */}
      <div className="sticky top-16 z-40 bg-white border-y border-black/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-8 md:px-14">
          <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth:"none" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="px-5 py-4 font-grotesk font-bold text-[8px] tracking-[0.30em] uppercase whitespace-nowrap transition-all duration-200 border-b-2 flex-shrink-0"
                style={{
                  borderBottomColor: activeTab === tab.id ? "#000000" : "transparent",
                  color: activeTab === tab.id ? "#000000" : "rgba(0,0,0,0.30)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-14">

        {/* Overview */}
        <section id="overview" className="py-16 border-b border-black/6">
          <div className="flex items-start gap-4 mb-10">
            <span className="font-display font-black select-none"
              style={{ fontSize:"clamp(5rem,12vw,10rem)", lineHeight:1, color:"rgba(0,0,0,0.04)", marginTop:"-0.15em" }}>
              01
            </span>
            <div className="pt-1">
              <h2 className="font-display font-black text-4xl md:text-5xl text-black leading-none mb-3">
                Overview
              </h2>
              <div style={{ width:56, height:4, background:R }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <p className="font-grotesk text-lg text-black/60 leading-relaxed">
              {client.overview}
            </p>
            <div className="space-y-5 border-l border-black/8 pl-8">
              <div>
                <p className="font-grotesk font-bold text-[8px] tracking-[0.38em] uppercase text-black/25 mb-1">Client</p>
                <p className="font-grotesk text-base text-black">{client.name}</p>
              </div>
              <div>
                <p className="font-grotesk font-bold text-[8px] tracking-[0.38em] uppercase text-black/25 mb-1">Industry</p>
                <p className="font-grotesk text-base text-black">{client.industry}</p>
              </div>
              <div>
                <p className="font-grotesk font-bold text-[8px] tracking-[0.38em] uppercase text-black/25 mb-1">Period</p>
                <p className="font-grotesk text-base text-black">{client.year}</p>
              </div>
              <div>
                <p className="font-grotesk font-bold text-[8px] tracking-[0.38em] uppercase text-black/25 mb-2.5">Services Delivered</p>
                <ul className="space-y-1.5">
                  {client.services.map((s) => (
                    <li key={s.category} className="flex items-center gap-2.5 font-grotesk text-sm text-black">
                      <span style={{ width:6, height:6, borderRadius:"50%", background:R, flexShrink:0, display:"inline-block" }} />
                      {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Per-category sections */}
        {categories.map((cat, idx) => {
          const categoryProjects = clientProjects.filter((p) =>
            p.category.includes(cat)
          );
          if (!categoryProjects.length) return null;

          return (
            <section key={cat} id={cat} className="py-16 border-b border-black/6">
              <div className="flex items-start gap-4 mb-10">
                <span className="font-display font-black select-none"
                  style={{ fontSize:"clamp(5rem,12vw,10rem)", lineHeight:1, color:"rgba(0,0,0,0.04)", marginTop:"-0.15em" }}>
                  {String(idx + 2).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h2 className="font-display font-black text-4xl md:text-5xl text-black leading-none mb-3">
                    {sectionLabels[cat] || cat}
                  </h2>
                  <div style={{ width:56, height:4, background:R }} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden bg-zinc-950 aspect-[4/3] mb-3">
                      <img
                        src={assetPath(project.cover)}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-display font-black text-white text-base leading-tight group-hover:text-gold transition-colors duration-200">
                          {project.title}
                        </p>
                      </div>
                      {/* "View →" overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-grotesk font-bold text-[8px] tracking-[0.32em] uppercase px-4 py-2 bg-white text-black">
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-0.5">
                      <p className="font-grotesk text-[8px] tracking-[0.28em] uppercase text-black/35">
                        {project.year}
                      </p>
                      <p className="font-grotesk text-[8px] tracking-[0.28em] uppercase text-black/22 group-hover:text-black/55 transition-colors duration-200">
                        View →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Get in touch CTA */}
        <section className="py-16">
          <div className="border-2 border-black p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ background:"#000000" }}>
            <div>
              <p className="font-display font-black text-2xl md:text-3xl text-white mb-2">
                Need something similar?
              </p>
              <p className="font-grotesk text-white/50 text-sm">
                Let&apos;s talk about your project.
              </p>
            </div>
            <a
              href="mailto:conceptionsdetm@gmail.com"
              className="font-grotesk font-bold text-[9px] tracking-[0.32em] uppercase px-8 py-4 transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ background:R, color:"#FFFFFF", boxShadow:"3px 3px 0px #FFDD00" }}
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>

      {/* ── Next / Prev client navigation ── */}
      <div className="border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-8 md:px-14">
          <div className="flex items-stretch divide-x divide-black/8">
            {prevClient ? (
              <Link
                href={`/work/${prevClient.slug}`}
                className="group flex-1 py-8 flex flex-col gap-1.5 hover:bg-neutral-50 transition-colors duration-200 pr-6"
              >
                <span className="font-grotesk text-[8px] tracking-[0.32em] uppercase text-black/25 group-hover:text-black/50 transition-colors duration-200">
                  ← Previous
                </span>
                <span className="font-display font-black text-xl text-black">
                  {prevClient.shortName}
                </span>
                <span className="font-grotesk text-[8px] tracking-[0.2em] uppercase text-black/22">
                  {prevClient.industry}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextClient ? (
              <Link
                href={`/work/${nextClient.slug}`}
                className="group flex-1 py-8 flex flex-col gap-1.5 items-end hover:bg-neutral-50 transition-colors duration-200 pl-6"
              >
                <span className="font-grotesk text-[8px] tracking-[0.32em] uppercase text-black/25 group-hover:text-black/50 transition-colors duration-200">
                  Next →
                </span>
                <span className="font-display font-black text-xl text-black">
                  {nextClient.shortName}
                </span>
                <span className="font-grotesk text-[8px] tracking-[0.2em] uppercase text-black/22">
                  {nextClient.industry}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
