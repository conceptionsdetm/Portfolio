"use client";

const items = [
  "Brand Identity",
  "Social Media",
  "Website Design",
  "Motion Graphics",
  "Marketing Campaigns",
  "Print Design",
  "Creative Direction",
  "Visual Storytelling",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-paper/8 py-4 overflow-hidden bg-ink">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6">
            <span className="font-display font-bold text-lg text-paper/35 tracking-widest uppercase">
              {item}
            </span>
            <span className="text-vermillion text-xl">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
