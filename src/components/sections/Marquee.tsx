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
    <div className="border-y border-paper/5 py-3.5 overflow-hidden bg-ink">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5">
            <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-paper/28">
              {item}
            </span>
            <span className="text-vermillion" style={{ fontSize: "6px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
