import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md";
}

export default function Logo({ size = "md" }: LogoProps) {
  const w = size === "sm" ? 52 : 62;
  const h = size === "sm" ? 32 : 38;
  const fs = size === "sm" ? 13 : 15;

  return (
    <Link href="/" className="hover:opacity-75 transition-opacity duration-200">
      <span
        className="relative inline-block bg-vermillion"
        style={{
          width: w,
          height: h,
          clipPath: `polygon(0 0, 100% 0, 100% 52%, 78% 100%, 0 100%)`,
        }}
      >
        <span
          className="font-display font-black text-paper"
          style={{
            position: "absolute",
            top: "50%",
            left: "46%",
            transform: "translate(-50%, -54%) rotate(-13deg)",
            fontSize: fs,
            whiteSpace: "nowrap",
            letterSpacing: "0.1em",
          }}
        >
          cdt<span style={{ display: "inline-block", transform: "translateY(2px) rotate(3deg)" }}>m</span>
        </span>
      </span>
    </Link>
  );
}
