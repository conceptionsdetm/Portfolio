"use client";

import { useState, useEffect } from "react";

interface Props {
  img: string;
  imgTablet?: string;
  imgMobile?: string;
  title: string;
  url?: string; // optional — omit if no live site
}

export default function WebsitePreview({ img, imgTablet, imgMobile, title, url }: Props) {
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

      {/* Footer */}
      <div className="bg-zinc-800 border-t border-paper/8 px-4 py-3 flex items-center justify-between gap-4">
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-paper/50">
          Full Design Preview
        </span>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-1.5 bg-gold text-ink font-mono text-[9px] tracking-[0.22em] uppercase hover:bg-paper transition-colors duration-200 whitespace-nowrap"
          >
            Visit Live Website →
          </a>
        ) : (
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-paper/40 truncate">
            {title}
          </span>
        )}
      </div>

    </div>
  );
}
