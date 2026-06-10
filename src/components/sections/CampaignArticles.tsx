"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import type { CampaignConfig, CampaignPost } from "@/data/campaign-types";
import { assetPath } from "@/lib/basePath";

// ── Icons ─────────────────────────────────────────────────────────────────
function IgIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function Chevron({ dir, size = 20 }: { dir: "left" | "right"; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "left" ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
    </svg>
  );
}

// ── Shared scroll-lock + Escape hook ─────────────────────────────────────
function useModalSetup(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
}

// ── Video lightbox ────────────────────────────────────────────────────────
function VideoModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useModalSetup(onClose);
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.93)" }} onClick={onClose}>
      <div className="relative flex flex-col items-center" style={{ maxHeight: "92vh", maxWidth: "92vw" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/55 hover:text-white transition-colors duration-150 font-mono text-[9px] tracking-[0.3em] uppercase">Close ✕</button>
        <video key={src} src={assetPath(src)} className="block rounded-sm" style={{ maxHeight: "85vh", maxWidth: "88vw", width: "auto", height: "auto" }} controls autoPlay playsInline/>
        <p className="mt-4 font-mono text-[9px] tracking-[0.28em] uppercase text-white/40">{title}</p>
      </div>
    </div>,
    document.body
  );
}

// ── Image lightbox ────────────────────────────────────────────────────────
function ImageModal({ post, accentColor, onClose }: { post: CampaignPost; accentColor: string; onClose: () => void }) {
  const [slide, setSlide]   = useState(0);
  const [story, setStory]   = useState(false);

  useModalSetup(onClose);

  const images   = post.images ?? [];
  const count    = images.length;
  // Normalise: single story string OR stories array
  const storySlides = post.stories ?? (post.story ? [post.story] : []);
  const storyCount  = storySlides.length;
  const [storySlide, setStorySlide] = useState(0);

  const hasStory = storySlides.length > 0;

  const src         = story ? assetPath(storySlides[storySlide]) : assetPath(images[slide]);
  const aspectStyle = story ? { aspectRatio: "9/16", maxHeight: "85vh" } : { maxHeight: "85vh", maxWidth: "88vw" };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.93)" }} onClick={onClose}>
      <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/55 hover:text-white transition-colors font-mono text-[9px] tracking-[0.3em] uppercase">Close ✕</button>

        <div className="relative" style={aspectStyle}>
          <img key={src} src={src} alt={post.title} className="block rounded-sm" style={{ maxHeight: "85vh", maxWidth: "88vw", width: "auto", height: "auto", objectFit: "contain" }} draggable={false}/>

          {/* Carousel arrows */}
          {!story && count > 1 && (
            <>
              <button onClick={() => setSlide(s => Math.max(0, s - 1))} disabled={slide === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -ml-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/85 transition-colors" aria-label="Previous"><Chevron dir="left"/></button>
              <button onClick={() => setSlide(s => Math.min(count - 1, s + 1))} disabled={slide === count - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/85 transition-colors" aria-label="Next"><Chevron dir="right"/></button>
              <span className="absolute bottom-3 right-3 bg-black/65 font-mono text-[8px] text-white px-2.5 py-1 rounded-sm tracking-widest">{slide + 1} / {count}</span>
            </>
          )}

          {/* Story carousel arrows */}
          {story && storyCount > 1 && (
            <>
              <button onClick={() => setStorySlide(s => Math.max(0, s - 1))} disabled={storySlide === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full -ml-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/85 transition-colors" aria-label="Previous story"><Chevron dir="left"/></button>
              <button onClick={() => setStorySlide(s => Math.min(storyCount - 1, s + 1))} disabled={storySlide === storyCount - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/85 transition-colors" aria-label="Next story"><Chevron dir="right"/></button>
              <span className="absolute bottom-3 right-3 bg-black/65 font-mono text-[8px] text-white px-2.5 py-1 rounded-sm tracking-widest">{storySlide + 1} / {storyCount}</span>
            </>
          )}

          {/* Story toggle */}
          {hasStory && (
            <button onClick={() => { setStory(s => !s); setStorySlide(0); }} className="absolute top-3 left-3 font-mono text-[7px] tracking-[0.25em] uppercase bg-black/65 text-white px-3 py-1.5 rounded-sm hover:bg-black/85 transition-colors">
              {story ? "← Carousel" : "Story ↗"}
            </button>
          )}
        </div>

        {/* Dots */}
        {!story && count > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {images.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} className="w-1.5 h-1.5 rounded-full transition-colors" style={{ backgroundColor: i === slide ? accentColor : "rgba(255,255,255,0.3)" }} aria-label={`Slide ${i + 1}`}/>
            ))}
          </div>
        )}

        <p className="mt-4 font-mono text-[9px] tracking-[0.28em] uppercase text-white/40">{post.title}</p>
      </div>
    </div>,
    document.body
  );
}

// ── Video thumbnail card ──────────────────────────────────────────────────
function VideoCard({ post, accentColor, onOpen }: { post: CampaignPost; accentColor: string; onOpen: () => void }) {
  return (
    <article className="flex flex-col">
      <button onClick={onOpen} className="group relative aspect-square bg-zinc-950 overflow-hidden focus:outline-none" aria-label={`Play: ${post.title}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110" style={{ borderColor: accentColor, backgroundColor: `${accentColor}18` }}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden><polygon points="6 4 20 12 6 20" fill={accentColor}/></svg>
          </div>
          <span className="font-mono text-[7px] tracking-[0.32em] uppercase text-white/30 group-hover:text-white/60 transition-colors">Play</span>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}14 0%, transparent 70%)` }}/>
      </button>
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-paper/80 text-[13px] leading-snug font-light flex-1">{post.title}</h3>
        <span className="shrink-0 mt-0.5 font-mono text-[7px] tracking-[0.28em] uppercase px-2 py-0.5 border" style={{ color: accentColor, borderColor: `${accentColor}45` }}>Reel</span>
      </div>
    </article>
  );
}

// ── Image thumbnail card ──────────────────────────────────────────────────
function PostCard({ post, accentColor, igUrl, onOpen }: { post: CampaignPost; accentColor: string; igUrl?: string; onOpen: () => void }) {
  const images  = post.images ?? [];
  const multi   = images.length > 1;
  const hasStory = !!(post.story || (post.stories && post.stories.length > 0));

  return (
    <article className="flex flex-col">
      <button onClick={onOpen} className="group relative aspect-square bg-zinc-900 overflow-hidden focus:outline-none" aria-label={`View: ${post.title}`}>
        <img src={assetPath(images[0])} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" draggable={false}/>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-250"/>
        {multi && (
          <div className="absolute top-2 right-2 opacity-80">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <rect x="2" y="7" width="13" height="13" rx="2" opacity="0.5"/>
              <rect x="6" y="3" width="13" height="13" rx="2" fill="white"/>
            </svg>
          </div>
        )}
        {hasStory && (
          <div className="absolute top-2 left-2 w-5 h-5 rounded-full border-2 border-white/70 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)` }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white" aria-hidden><polygon points="6 4 20 12 6 20"/></svg>
          </div>
        )}
      </button>
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-paper/80 text-[13px] leading-snug font-light flex-1">{post.title}</h3>
        {igUrl && (
          <a href={igUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 mt-0.5 text-paper/35 hover:text-paper/70 transition-colors" aria-label="View on Instagram">
            <IgIcon size={14}/>
          </a>
        )}
      </div>
    </article>
  );
}

// ── Main generic component ────────────────────────────────────────────────
export default function CampaignArticles({ campaign, accentColor, igUrl, webUrl, igLabel, webLabel }: CampaignConfig) {
  const [videoModal, setVideoModal] = useState<{ src: string; title: string } | null>(null);
  const [imageModal, setImageModal] = useState<CampaignPost | null>(null);

  const closeVideo = useCallback(() => setVideoModal(null), []);
  const closeImage = useCallback(() => setImageModal(null), []);
  const canPortal  = typeof document !== "undefined";

  return (
    <>
      {canPortal && videoModal && <VideoModal src={videoModal.src} title={videoModal.title} onClose={closeVideo}/>}
      {canPortal && imageModal && <ImageModal post={imageModal} accentColor={accentColor} onClose={closeImage}/>}

      <div className="space-y-16">
        {campaign.map((month) => (
          <section key={month.label}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[8px] tracking-[0.38em] uppercase px-3 py-1.5" style={{ color: accentColor, border: `1px solid ${accentColor}50` }}>
                {month.label}
              </span>
              <div className="flex-1 h-px bg-paper/8"/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {month.posts.map((post) =>
                post.video ? (
                  <VideoCard key={post.id} post={post} accentColor={accentColor} onOpen={() => setVideoModal({ src: post.video!, title: post.title })}/>
                ) : (
                  <PostCard key={post.id} post={post} accentColor={accentColor} igUrl={igUrl} onOpen={() => setImageModal(post)}/>
                )
              )}
            </div>
          </section>
        ))}

        {/* Bottom CTAs */}
        {(igUrl || webUrl) && (
          <div className="pt-10 border-t border-paper/8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {igUrl && (
              <a href={igUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-80" style={{ backgroundColor: accentColor, color: "#FFFFFF" }}>
                <IgIcon size={13}/>
                {igLabel ?? "View on Instagram"}
              </a>
            )}
            {webUrl && (
              <a href={webUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-mono text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-80" style={{ border: `1px solid ${accentColor}70`, color: accentColor }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {webLabel ?? webUrl.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );
}
