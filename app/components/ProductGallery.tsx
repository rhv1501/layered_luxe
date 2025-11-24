"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  gallery: string[];
  title?: string;
};

export default function ProductGallery({ gallery, title }: Props) {
  const [selected, setSelected] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-200">
        <Image
          src={gallery[selected]}
          alt={title ?? "Product image"}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          priority={selected === 0}
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {gallery.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`aspect-square rounded-xl overflow-hidden bg-white shadow-md border transition-all duration-150 focus:outline-none ${
              idx === selected ? "ring-2 ring-accent" : "border-gray-100"
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <Image
              src={src}
              alt={`${title ?? "Product"} view ${idx + 1}`}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
