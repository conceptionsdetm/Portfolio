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
    <div className="border-y-4 border-black py-4 overflow-hidden bg-black">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6">
            <span className="font-grotesk font-bold text-base text-white/50 tracking-[0.18em] uppercase">
              {item}
            </span>
            <span className="text-vermillion text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
