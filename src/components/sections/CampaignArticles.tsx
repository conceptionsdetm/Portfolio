"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { amsoilCampaign, CampaignPost } from "@/data/amsoil-campaign";
import { assetPath } from "@/lib/basePath";

const IG_URL  = "https://www.instagram.com/amsoil.inc.cyprus/";
const WEB_URL = "https://amsoil.com.cy/";
const RED     = "#D01F2B";

// ── Icons ─────────────────────────────────────────────────────────────────
function IgIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "left" ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
    </svg>
  );
}

// ── Video lightbox modal ──────────────────────────────────────────────────
function VideoModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Video container — stop propagation so clicking video doesn't close */}
      <div
        className="relative flex flex-col items-center"
        style={{ maxHeight: "92vh", maxWidth: "92vw" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors duration-150 flex items-center gap-1.5 font-mono text-[9px] tracking-[0.3em] uppercase"
          aria-label="Close video"
        >
          Close ✕
        </button>

        {/* Video — constrained to viewport, natural aspect ratio preserved */}
        <video
          key={src}
          src={assetPath(src)}
          className="block rounded-sm"
          style={{ maxHeight: "85vh", maxWidth: "88vw", width: "auto", height: "auto" }}
          controls
          autoPlay
          playsInline
        />

        {/* Title below */}
        <p className="mt-4 font-mono text-[9px] tracking-[0.28em] uppercase text-white/45">
          {title}
        </p>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

// ── Video thumbnail card (grid) ───────────────────────────────────────────
function VideoCard({ post, onOpen }: { post: CampaignPost; onOpen: () => void }) {
  return (
    <article className="flex flex-col">
      <button
        onClick={onOpen}
        className="group relative aspect-square bg-zinc-950 overflow-hidden focus:outline-none"
        aria-label={`Play: ${post.title}`}
      >
        {/* Animated ring + play icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
            style={{ borderColor: RED, backgroundColor: `${RED}18` }}
          >
            {/* Play triangle, shifted right slightly to look centred */}
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <polygon points="6 4 20 12 6 20" fill={RED} />
            </svg>
          </div>
          <span className="font-mono text-[7px] tracking-[0.32em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-200">
            Play Reel
          </span>
        </div>
        {/* Subtle glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `radial-gradient(circle at 50% 50%, ${RED}14 0%, transparent 70%)` }}
        />
      </button>

      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-paper/80 text-[13px] leading-snug font-light flex-1">{post.title}</h3>
        <span
          className="shrink-0 mt-0.5 font-mono text-[7px] tracking-[0.28em] uppercase px-2 py-0.5 border"
          style={{ color: RED, borderColor: `${RED}45` }}
        >
          Reel
        </span>
      </div>
    </article>
  );
}

// ── Image carousel card ───────────────────────────────────────────────────
function PostCard({
  post, slideIndex, viewingStory, onPrev, onNext, onToggleStory,
}: {
  post: CampaignPost;
  slideIndex: number;
  viewingStory: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleStory: () => void;
}) {
  const images = post.images ?? [];
  const count  = images.length;

  return (
    <article className="flex flex-col">
      <div
        className="relative bg-zinc-900 overflow-hidden"
        style={{ aspectRatio: viewingStory ? "9/16" : "1/1" }}
      >
        {viewingStory && post.story ? (
          <img
            src={assetPath(post.story)}
            alt={`${post.title} — Story`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <img
            key={images[slideIndex]}
            src={assetPath(images[slideIndex])}
            alt={`${post.title} — ${slideIndex + 1}/${count}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        )}

        {!viewingStory && count > 1 && (
          <>
            <button onClick={onPrev} disabled={slideIndex === 0} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/75 transition-colors duration-150" aria-label="Previous slide">
              <Chevron dir="left"/>
            </button>
            <button onClick={onNext} disabled={slideIndex === count - 1} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/75 transition-colors duration-150" aria-label="Next slide">
              <Chevron dir="right"/>
            </button>
            <span className="absolute bottom-2 right-2 bg-black/60 font-mono text-[8px] text-white px-2 py-0.5 rounded-sm tracking-widest">
              {slideIndex + 1}/{count}
            </span>
          </>
        )}

        {post.story && (
          <button onClick={onToggleStory} className="absolute top-2 left-2 font-mono text-[7px] tracking-[0.25em] uppercase bg-black/60 text-white px-2.5 py-1 rounded-sm hover:bg-black/80 transition-colors duration-150">
            {viewingStory ? "← Carousel" : "Story ↗"}
          </button>
        )}
      </div>

      {!viewingStory && count > 1 && (
        <div className="flex items-center justify-center gap-1 mt-2">
          {images.map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full" style={{ backgroundColor: i === slideIndex ? RED : "rgba(255,255,255,0.25)" }} />
          ))}
        </div>
      )}

      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-paper/80 text-[13px] leading-snug font-light flex-1">{post.title}</h3>
        <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 mt-0.5 text-paper/35 hover:text-paper/70 transition-colors duration-150" aria-label="View on Instagram">
          <IgIcon size={14}/>
        </a>
      </div>
    </article>
  );
}

// ── Main component ────────────────────────────────────────────────────────
export default function CampaignArticles() {
  const [slides,  setSlides]  = useState<Record<string, number>>({});
  const [stories, setStories] = useState<Record<string, boolean>>({});
  const [modal,   setModal]   = useState<{ src: string; title: string } | null>(null);

  const closeModal = useCallback(() => setModal(null), []);

  function getSlide(id: string) { return slides[id] ?? 0; }
  function setSlide(id: string, idx: number) { setSlides((s) => ({ ...s, [id]: idx })); }
  function toggleStory(id: string) { setStories((s) => ({ ...s, [id]: !s[id] })); }

  return (
    <>
      {/* Video lightbox (portal to <body>) */}
      {modal && typeof document !== "undefined" && (
        <VideoModal src={modal.src} title={modal.title} onClose={closeModal} />
      )}

      <div className="space-y-16">
        {amsoilCampaign.map((month) => (
          <section key={month.label}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[8px] tracking-[0.38em] uppercase px-3 py-1.5" style={{ color: RED, border: `1px solid ${RED}50` }}>
                {month.label}
              </span>
              <div className="flex-1 h-px bg-paper/8" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {month.posts.map((post) => {
                if (post.video) {
                  return (
                    <VideoCard
                      key={post.id}
                      post={post}
                      onOpen={() => setModal({ src: post.video!, title: post.title })}
                    />
                  );
                }
                const images   = post.images ?? [];
                const slideIdx = getSlide(post.id);
                return (
                  <PostCard
                    key={post.id}
                    post={post}
                    slideIndex={slideIdx}
                    viewingStory={!!stories[post.id]}
                    onPrev={() => setSlide(post.id, Math.max(0, slideIdx - 1))}
                    onNext={() => setSlide(post.id, Math.min(images.length - 1, slideIdx + 1))}
                    onToggleStory={() => toggleStory(post.id)}
                  />
                );
              })}
            </div>
          </section>
        ))}

        {/* Bottom CTAs */}
        <div className="pt-10 border-t border-paper/8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-[10px] tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: RED, color: "#FFFFFF" }}
          >
            <IgIcon size={13}/>
            AMSOIL Cyprus — Instagram
          </a>
          <a
            href={WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-[10px] tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-80"
            style={{ border: `1px solid ${RED}70`, color: RED }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            amsoil.com.cy
          </a>
        </div>
      </div>
    </>
  );
}
