"use client";

import { useEffect } from "react";
import { assetPath } from "@/lib/basePath";

export default function CVModal({ onClose }: { onClose: () => void }) {
  const pdfSrc = assetPath("/Timonas-Stefanou-CV.pdf");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/92 backdrop-blur-md" />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col border border-paper/10 bg-ink shadow-2xl"
           style={{ maxHeight: "90vh" }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-paper/8 flex-shrink-0">
          <div>
            <span className="font-mono text-[8px] tracking-[0.45em] uppercase text-paper/22 block mb-1">
              Timonas Stefanou
            </span>
            <h2 className="font-display font-black text-xl text-paper leading-none">
              Curriculum Vitae
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Download — secondary action, inside the modal */}
            <a
              href={pdfSrc}
              download="Timonas Stefanou CV.pdf"
              className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold border border-gold/30 hover:bg-gold hover:text-ink px-4 py-2 transition-all duration-200"
            >
              Download
            </a>
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 flex items-center justify-center border border-paper/12 text-paper/35 hover:text-paper hover:border-paper/30 transition-all duration-200 font-mono text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <div className="flex-1 min-h-0 overflow-hidden" style={{ height: "76vh" }}>
          <object
            data={pdfSrc}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Timonas Stefanou — Curriculum Vitae"
          >
            {/* Fallback for browsers that can't embed */}
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center px-8 py-16">
              <p className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper/30">
                Your browser cannot display the PDF inline.
              </p>
              <a
                href={pdfSrc}
                download="Timonas Stefanou CV.pdf"
                className="px-8 py-3 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </object>
        </div>

      </div>
    </div>
  );
}
