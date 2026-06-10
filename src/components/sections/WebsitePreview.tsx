"use client";

import { useState } from "react";

interface Props {
  url: string;
  title: string;
}

export default function WebsitePreview({ url, title }: Props) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="w-full select-none">

      {/* Browser chrome */}
      <div className="flex items-center gap-3 bg-zinc-800 px-4 py-2.5 rounded-t-sm">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/55" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/55" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/55" />
        </div>
        <div className="flex-1 bg-zinc-700/70 rounded px-3 py-1 font-mono text-[9px] text-paper/35 tracking-wide truncate">
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[8px] tracking-[0.3em] uppercase text-gold/70 hover:text-gold transition-colors duration-200 ml-2"
        >
          Open ↗
        </a>
      </div>

      {/* Viewport window */}
      <div
        className="relative overflow-hidden bg-zinc-900 cursor-pointer"
        style={{ height: "72vh" }}
        onClick={() => setPaused((p) => !p)}
        title={paused ? "Click to resume scroll" : "Click to pause"}
      >
        {/* Scrolling iframe */}
        <iframe
          src={url}
          title={title}
          scrolling="no"
          style={{
            width: "100%",
            height: "7200px",
            border: "none",
            display: "block",
            transformOrigin: "top left",
            animationName: "website-scroll",
            animationDuration: "38s",
            animationDelay: "1.5s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationPlayState: paused ? "paused" : "running",
          }}
        />

        {/* Pause overlay hint */}
        {paused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper border border-paper/30 bg-ink/70 px-4 py-2">
              Paused — click to resume
            </span>
          </div>
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
      </div>

      {/* Footer bar */}
      <div className="bg-zinc-800 px-4 py-2.5 flex items-center justify-between rounded-b-sm">
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
