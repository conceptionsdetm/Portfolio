"use client";

import Link from "next/link";
import { assetPath } from "@/lib/basePath";

export default function CVPage() {
  const pdfSrc = assetPath("/Timonas-Stefanou-CV.pdf");

  return (
    <main className="min-h-screen bg-ink pt-16 flex flex-col">

      {/* Header bar */}
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-6 flex items-center justify-between">
        <div>
          <span className="font-mono text-[8px] tracking-[0.42em] uppercase text-paper/22 block mb-1">
            Timonas Stefanou
          </span>
          <h1 className="font-display font-black text-2xl text-paper leading-none">
            Curriculum Vitae
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/about"
            className="font-mono text-[8px] tracking-[0.3em] uppercase text-paper/30 hover:text-paper border border-paper/10 hover:border-paper/25 px-3 py-1.5 transition-all duration-200"
          >
            ← About
          </Link>
          <a
            href={pdfSrc}
            download="Timonas-Stefanou-CV.pdf"
            className="font-mono text-[8px] tracking-[0.3em] uppercase text-gold border border-gold/30 hover:bg-gold hover:text-ink px-3 py-1.5 transition-all duration-200"
          >
            Download
          </a>
        </div>
      </div>

      {/* PDF embed — full remaining height */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-12 pb-10">
        <div className="w-full h-full min-h-[80vh] bg-zinc-900">
          <object
            data={pdfSrc}
            type="application/pdf"
            className="w-full h-full min-h-[80vh]"
            aria-label="Timonas Stefanou — Curriculum Vitae"
          >
            {/* Fallback for browsers that can't embed PDFs */}
            <div className="flex flex-col items-center justify-center h-full min-h-[60vh] gap-6 text-center px-8">
              <p className="font-mono text-[9px] tracking-[0.38em] uppercase text-paper/28">
                Your browser cannot display the PDF inline.
              </p>
              <a
                href={pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold text-ink font-mono text-[9px] tracking-[0.3em] uppercase hover:bg-paper transition-colors duration-200"
              >
                Open PDF in New Tab
              </a>
            </div>
          </object>
        </div>
      </div>

    </main>
  );
}
