import Link from "next/link";
import { clients } from "@/data/clients";
import { assetPath } from "@/lib/basePath";

export default function WorkPage() {
  return (
    <main className="pt-24 pb-24">
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px"
        style={{ background: "rgba(0,0,0,0.07)" }}
      >
        {clients.map((client, i) => (
          <Link
            key={client.slug}
            href={`/work/${client.slug}`}
            className="group relative bg-white flex items-center justify-center overflow-hidden"
            style={{ minHeight: 160 }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center p-8 w-full transition-transform duration-200 ease-out group-hover:-translate-y-1">
              {client.logo ? (
                <img
                  src={assetPath(client.logo)}
                  alt={client.name}
                  loading={i < 12 ? "eager" : "lazy"}
                  className="max-h-14 max-w-[75%] object-contain"
                />
              ) : (
                <div
                  className="w-12 h-12 flex items-center justify-center font-display font-black text-sm select-none"
                  style={{ background: client.logoInitialsBg, color: client.logoInitialsColor }}
                >
                  {client.logoInitials}
                </div>
              )}
            </div>

            {/* Hover name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black px-4 py-2.5 flex items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out">
              <span className="font-mono text-[7px] tracking-[0.28em] uppercase text-white/85">
                {client.shortName}
              </span>
              <span className="text-xs leading-none" style={{ color: "#F5C400" }}>↗</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
