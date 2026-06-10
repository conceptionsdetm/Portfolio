"use client";

import { useState, useEffect } from "react";

interface Props {
  url: string;
  pdf: string;
  pdfTablet?: string;
  pdfMobile?: string;
  title: string;
}

export default function WebsitePreview({ url, pdf, pdfTablet, pdfMobile, title }: Props) {
  const [src, setSrc] = useState(pdf);

  useEffect(() => {
    const pick = () => {
      const w = window.innerWidth;
      if (w < 640 && pdfMobile) setSrc(pdfMobile);
      else if (w < 1024 && pdfTablet) setSrc(pdfTablet);
      else setSrc(pdf);
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, [pdf, pdfTablet, pdfMobile]);

  return (
    <div className="w-full overflow-hidden">

      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-zinc-800 px-3 py-2">
        <div className="flex gap-1 shrink-0">
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <span className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 min-w-0 bg-zinc-700/60 rounded px-2 py-0.5 font-mono text-[8px] text-paper/35 tracking-wide truncate">
          {url}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[7px] tracking-[0.28em] uppercase text-gold/70 hover:text-gold transition-colors duration-200 whitespace-nowrap"
          onClick={(e) => e.stopPropagation()}
        >
          Open ↗
        </a>
      </div>

      {/* PDF viewport
          <object> renders inline on desktop Chrome / Firefox / Edge / Android Chrome.
          On iOS Safari, inline PDF is not supported — the fallback children are shown instead. */}
      <div className="w-full bg-zinc-950" style={{ height: "80vh" }}>
        <object
          key={src}
          data={src}
          type="application/pdf"
          aria-label={title}
          style={{ display: "block", width: "100%", height: "100%", border: "none" }}
        >
          {/* ── Fallback: iOS Safari + any browser without inline PDF support ── */}
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6 text-center bg-zinc-950">
            <div className="space-y-2">
              <p className="font-mono text-[8px] tracking-[0.32em] uppercase text-paper/25">
                Design Preview
              </p>
              <p className="text-paper/45 text-sm font-light leading-relaxed">
                Tap below to open the full design PDF
              </p>
            </div>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-gold text-ink font-mono text-[8px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
            >
              Open Full Design ↗
            </a>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[8px] tracking-[0.28em] uppercase text-paper/30 hover:text-gold transition-colors duration-200"
            >
              Visit Live Website →
            </a>
          </div>
        </object>
      </div>

      {/* Footer */}
      <div className="bg-zinc-800 px-3 py-2 flex items-center justify-between">
        <span className="font-mono text-[7px] tracking-[0.28em] uppercase text-paper/22">
          Full Design Preview
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[7px] tracking-[0.28em] uppercase text-gold hover:text-paper transition-colors duration-200 whitespace-nowrap"
        >
          Visit Live Website →
        </a>
      </div>

    </div>
  );
}
