"use client";

import { useState, useEffect } from "react";

interface Props {
  img: string;
  imgTablet?: string;
  imgMobile?: string;
  title: string;
  url?: string;
  ctaLabel?: string;
  ctaColor?: string;
  ctaTextColor?: string;
  ctaFontFamily?: string;
  ctaFontWeight?: number;
}

export default function WebsitePreview({
  img, imgTablet, imgMobile, title, url,
  ctaLabel = "Visit Live Website",
  ctaColor = "#c9a96e",
  ctaTextColor = "#0a0a0a",
  ctaFontFamily = "var(--font-mono)",
  ctaFontWeight = 700,
}: Props) {
  const [src, setSrc] = useState(img);

  useEffect(() => {
    const pick = () => {
      const w = window.innerWidth;
      if (w < 640 && imgMobile) setSrc(imgMobile);
      else if (w < 1024 && imgTablet) setSrc(imgTablet);
      else setSrc(img);
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, [img, imgTablet, imgMobile]);

  return (
    <div className="w-full overflow-hidden select-none">

      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2">
        <div className="flex gap-1 shrink-0">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 min-w-0 bg-zinc-700/60 rounded px-2 py-0.5 font-mono text-[8px] text-paper/35 tracking-wide truncate">
          {url ?? title}
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-[7px] tracking-[0.28em] uppercase text-gold/70 hover:text-gold transition-colors duration-200 whitespace-nowrap"
          >
            Open ↗
          </a>
        )}
      </div>

      {/* Scrollable image viewport */}
      <div
        className="w-full bg-white"
        style={{
          maxHeight: "80vh",
          overflowY: "scroll",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <img
          key={src}
          src={src}
          alt={title}
          draggable={false}
          style={{ display: "block", width: "100%", height: "auto" }}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* Footer — pill CTA, centred, breathing room */}
      <div className="bg-zinc-800 border-t border-paper/8 px-6 py-5 flex items-center justify-center">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-[12px] uppercase transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              backgroundColor: ctaColor,
              color: ctaTextColor,
              fontFamily: ctaFontFamily,
              fontWeight: ctaFontWeight,
              letterSpacing: "0.12em",
              boxShadow: `0 4px 24px ${ctaColor}55`,
            }}
          >
            {ctaLabel}
            <span className="text-[11px]">→</span>
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-[11px] sm:text-[12px] uppercase cursor-default whitespace-nowrap"
            style={{
              backgroundColor: ctaColor,
              color: ctaTextColor,
              fontFamily: ctaFontFamily,
              fontWeight: ctaFontWeight,
              letterSpacing: "0.12em",
              opacity: 0.75,
            }}
          >
            {ctaLabel}
          </span>
        )}
      </div>

    </div>
  );
}
