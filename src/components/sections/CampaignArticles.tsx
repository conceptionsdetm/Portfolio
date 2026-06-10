"use client";

import { useState } from "react";
import { amsoilCampaign, CampaignPost } from "@/data/amsoil-campaign";
import { assetPath } from "@/lib/basePath";

const IG_URL = "https://www.instagram.com/amsoil.inc.cyprus/";
const AMSOIL_RED = "#D01F2B";

// ── Instagram icon ──────────────────────────────────────────────────────────
function IgIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

// ── Chevron arrow ────────────────────────────────────────────────────────────
function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

// ── Video placeholder card ───────────────────────────────────────────────────
function VideoCard({ post }: { post: CampaignPost }) {
  return (
    <article className="flex flex-col">
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-square bg-zinc-900 overflow-hidden"
        title={`View "${post.title}" on Instagram`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {/* Play button ring */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center border transition-colors duration-200"
            style={{ borderColor: `${AMSOIL_RED}55`, backgroundColor: `${AMSOIL_RED}15` }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={AMSOIL_RED} aria-hidden>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <p className="font-mono text-[8px] tracking-[0.3em] uppercase text-paper/30">Video Content</p>
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
        >
          <span className="flex items-center gap-1.5 font-mono text-[8px] tracking-[0.25em] uppercase text-paper/70">
            <IgIcon size={11} />
            View on Instagram
          </span>
        </div>
      </a>

      {/* Title row */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-paper/80 text-[13px] leading-snug font-light flex-1">{post.title}</h3>
        <span
          className="shrink-0 mt-0.5 font-mono text-[7px] tracking-[0.28em] uppercase px-2 py-0.5 border"
          style={{ color: AMSOIL_RED, borderColor: `${AMSOIL_RED}45` }}
        >
          Reel
        </span>
      </div>
    </article>
  );
}

// ── Image carousel card ──────────────────────────────────────────────────────
function PostCard({
  post,
  slideIndex,
  viewingStory,
  onPrev,
  onNext,
  onToggleStory,
}: {
  post: CampaignPost;
  slideIndex: number;
  viewingStory: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleStory: () => void;
}) {
  const images = post.images ?? [];
  const count = images.length;

  return (
    <article className="flex flex-col">
      {/* ── Image area ── */}
      <div className="relative bg-zinc-900 overflow-hidden" style={{ aspectRatio: viewingStory ? "9/16" : "1/1" }}>

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

        {/* Prev / Next (only in carousel mode with >1 slide) */}
        {!viewingStory && count > 1 && (
          <>
            <button
              onClick={onPrev}
              disabled={slideIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/75 transition-colors duration-150"
              aria-label="Previous slide"
            >
              <Chevron dir="left" />
            </button>
            <button
              onClick={onNext}
              disabled={slideIndex === count - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white disabled:opacity-20 hover:bg-black/75 transition-colors duration-150"
              aria-label="Next slide"
            >
              <Chevron dir="right" />
            </button>
            {/* Slide counter */}
            <span className="absolute bottom-2 right-2 bg-black/60 font-mono text-[8px] text-white px-2 py-0.5 rounded-sm tracking-widest">
              {slideIndex + 1}/{count}
            </span>
          </>
        )}

        {/* Story / Back toggle */}
        {post.story && (
          <button
            onClick={onToggleStory}
            className="absolute top-2 left-2 font-mono text-[7px] tracking-[0.25em] uppercase bg-black/60 text-white px-2.5 py-1 rounded-sm hover:bg-black/80 transition-colors duration-150"
          >
            {viewingStory ? "← Carousel" : "Story ↗"}
          </button>
        )}
      </div>

      {/* ── Dot indicator ── */}
      {!viewingStory && count > 1 && (
        <div className="flex items-center justify-center gap-1 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {/* parent controls — skip for simplicity */}}
              className="w-1 h-1 rounded-full transition-colors duration-150"
              style={{ backgroundColor: i === slideIndex ? AMSOIL_RED : "rgba(255,255,255,0.25)" }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Title + IG link ── */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-paper/80 text-[13px] leading-snug font-light flex-1">{post.title}</h3>
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 mt-0.5 text-paper/35 hover:text-paper/70 transition-colors duration-150"
          aria-label="View on Instagram"
          title="View on Instagram"
        >
          <IgIcon size={14} />
        </a>
      </div>
    </article>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function CampaignArticles() {
  // Per-post slide index: key = post.id, value = slide index
  const [slides, setSlides] = useState<Record<string, number>>({});
  // Per-post story view toggle
  const [stories, setStories] = useState<Record<string, boolean>>({});

  function getSlide(id: string) {
    return slides[id] ?? 0;
  }

  function setSlide(id: string, idx: number) {
    setSlides((s) => ({ ...s, [id]: idx }));
  }

  function toggleStory(id: string) {
    setStories((s) => ({ ...s, [id]: !s[id] }));
  }

  return (
    <div className="space-y-16">
      {amsoilCampaign.map((month) => (
        <section key={month.label}>
          {/* Month header */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="font-mono text-[8px] tracking-[0.38em] uppercase px-3 py-1.5"
              style={{ color: AMSOIL_RED, border: `1px solid ${AMSOIL_RED}50` }}
            >
              {month.label}
            </span>
            <div className="flex-1 h-px bg-paper/8" />
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {month.posts.map((post) => {
              if (post.videoPlaceholder) {
                return <VideoCard key={post.id} post={post} />;
              }

              const images = post.images ?? [];
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
    </div>
  );
}
