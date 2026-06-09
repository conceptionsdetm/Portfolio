"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: Props) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className={`relative bg-zinc-900 overflow-hidden ${
            i === 0 ? "sm:col-span-2 aspect-[16/7]" : "aspect-square"
          }`}
        >
          <Image
            src={src}
            alt={`${title} — image ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
