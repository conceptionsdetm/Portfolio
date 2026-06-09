"use client";

const items = [
  "Brand Identity",
  "Social Media Design",
  "Website Design",
  "Motion Graphics",
  "Marketing Campaigns",
  "Print Design",
  "Creative Direction",
  "Visual Storytelling",
  "Campaign Strategy",
  "Corporate Identity",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-white/5 py-4 overflow-hidden bg-white/[0.02]">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6">
            <span className="text-xs font-mono tracking-widest uppercase text-white/30">
              {item}
            </span>
            <span className="text-gold/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
