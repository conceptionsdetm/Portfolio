"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  url: string;
  title: string;
}

const DESIGN_W = 1440;  // px — width to render the site at (fits most desktop designs)
const PAGE_H   = 8000;  // px — tall enough to capture full-page content
const SPEED    = 1.8;   // visual px/frame — scroll pace at 60fps

export default function WebsitePreview({ url, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);
  const posRef       = useRef(0);
  const dirRef       = useRef<1 | -1>(1);
  const pausedRef    = useRef(false);

  const [scale,  setScale]  = useState(0.65);
  const [paused, setPaused] = useState(false);

  // Sync paused state to ref for use inside rAF
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  // Measure container width → compute scale
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      setScale(containerRef.current.offsetWidth / DESIGN_W);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // rAF scroll loop — restarts when scale changes so maxScroll is recalculated
  useEffect(() => {
    if (!containerRef.current) return;

    const containerH = containerRef.current.offsetHeight;
    // After scale(), iframe visually occupies PAGE_H * scale pixels tall.
    // wrapperRef translateY operates in real (un-scaled) space, so maxScroll
    // is the visual overflow: (PAGE_H * scale) - containerH
    const maxScroll = Math.max(0, PAGE_H * scale - containerH);

    // Reset to top on scale change
    posRef.current = 0;
    dirRef.current = 1;
    if (wrapperRef.current) wrapperRef.current.style.transform = "translateY(0)";

    const tick = () => {
      if (!pausedRef.current && wrapperRef.current) {
        posRef.current += SPEED * dirRef.current;
        if (posRef.current >= maxScroll) { posRef.current = maxScroll; dirRef.current = -1; }
        if (posRef.current <= 0)         { posRef.current = 0;         dirRef.current =  1; }
        wrapperRef.current.style.transform = `translateY(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Short delay before starting
    const t = setTimeout(() => { rafRef.current = requestAnimationFrame(tick); }, 1800);
    return () => { clearTimeout(t); cancelAnimationFrame(rafRef.current); };
  }, [scale]);

  return (
    <div className="w-full select-none">

      {/* Browser chrome */}
      <div className="flex items-center gap-3 bg-zinc-800 px-4 py-2.5">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 bg-zinc-700/60 rounded px-3 py-1 font-mono text-[9px] text-paper/35 tracking-wide truncate">
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[8px] tracking-[0.3em] uppercase text-gold/70 hover:text-gold transition-colors duration-200 ml-2"
          onClick={(e) => e.stopPropagation()}
        >
          Open ↗
        </a>
      </div>

      {/* Viewport window */}
      <div
        ref={containerRef}
        className="relative bg-white cursor-pointer overflow-hidden"
        style={{ height: "72vh" }}
        onClick={() => setPaused((p) => !p)}
        title={paused ? "Click to resume" : "Click to pause"}
      >
        {/* Scrolling wrapper — translateY moves in real pixels */}
        <div ref={wrapperRef} style={{ willChange: "transform" }}>
          {/* Iframe scaled to fit container width */}
          <iframe
            src={url}
            title={title}
            scrolling="no"
            style={{
              display: "block",
              border: "none",
              width: `${DESIGN_W}px`,
              height: `${PAGE_H}px`,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",  // let click-to-pause work
            }}
          />
        </div>

        {/* Pause badge */}
        {paused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper bg-ink/80 border border-paper/25 px-4 py-2">
              Paused — click to resume
            </span>
          </div>
        )}

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 pointer-events-none"
          style={{ height: "80px", background: "linear-gradient(to top, #0a0a0a, transparent)" }}
        />
      </div>

      {/* Footer bar */}
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-paper/22">
          {paused ? "Scroll paused" : "Auto-scrolling"}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold hover:text-paper transition-colors duration-200"
        >
          Visit Live Website →
        </a>
      </div>

    </div>
  );
}
