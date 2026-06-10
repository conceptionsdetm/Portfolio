"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assetPath } from "@/lib/basePath";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() =>
    setActive((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const next = useCallback(() =>
    setActive((i) => (i !== null && i < images.length - 1 ? i + 1 : i)),
    [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      close();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  // Prevent background scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((src, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.055 }}
            onClick={() => setActive(i)}
            className={`relative overflow-hidden bg-zinc-900 group cursor-zoom-in focus:outline-none ${
              i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-square"
            }`}
          >
            <img
              src={assetPath(src)}
              alt={`${title} — ${i + 1}`}
              loading={i < 2 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 font-mono text-[8px] tracking-[0.38em] uppercase text-paper border border-paper/45 px-3 py-1.5 transition-opacity duration-300">
                View
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[200] bg-ink/96 flex items-center justify-center"
            onClick={close}
          >
            {/* Main image */}
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              src={assetPath(images[active])}
              alt={`${title} — ${active + 1}`}
              className="max-h-[86vh] max-w-[86vw] object-contain select-none shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            {/* Prev */}
            {active > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 group flex items-center gap-2 font-mono text-[8px] tracking-[0.3em] uppercase text-paper/35 hover:text-paper transition-colors duration-200"
              >
                <span className="border border-paper/12 group-hover:border-gold/45 px-3 py-2 transition-colors duration-200">← Prev</span>
              </button>
            )}

            {/* Next */}
            {active < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 group flex items-center gap-2 font-mono text-[8px] tracking-[0.3em] uppercase text-paper/35 hover:text-paper transition-colors duration-200"
              >
                <span className="border border-paper/12 group-hover:border-gold/45 px-3 py-2 transition-colors duration-200">Next →</span>
              </button>
            )}

            {/* Top bar */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-5 md:px-8 py-4 bg-gradient-to-b from-ink/80 to-transparent">
              <span className="font-mono text-[8px] tracking-[0.42em] uppercase text-paper/30">
                {title}
              </span>
              <div className="flex items-center gap-5">
                <span className="font-mono text-[8px] tracking-[0.3em] text-paper/25">
                  {active + 1} / {images.length}
                </span>
                <button
                  onClick={close}
                  className="font-mono text-[8px] tracking-[0.3em] uppercase text-paper/40 hover:text-paper border border-paper/12 hover:border-paper/40 px-3 py-1.5 transition-all duration-200"
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* Bottom dot nav */}
            <div className="absolute bottom-5 inset-x-0 flex justify-center gap-2" onClick={(e) => e.stopPropagation()}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-0.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-gold w-6"
                      : "bg-paper/20 w-2 hover:bg-paper/45"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
