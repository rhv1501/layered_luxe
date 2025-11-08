"use client";
import React from "react";

export default function FabricSwatches({
  options = [
    { name: "Navy", color: "#0b3b66" },
    { name: "Maroon", color: "#7a1f2b" },
    { name: "Forest Green", color: "#0f6b4a" },
    { name: "Slate", color: "#4b5563" },
  ],
  onSelect,
}: {
  options?: { name: string; color: string }[];
  onSelect?: (opt: { name: string; color: string }) => void;
}) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="flex items-center gap-3">
      {options.map((o, i) => (
        <button
          key={o.name}
          onClick={() => {
            setActive(i);
            onSelect?.(o);
          }}
          aria-pressed={active === i}
          className={`flex h-10 w-10 items-center justify-center rounded-full ring-offset-2 focus:outline-none ${
            active === i ? "ring-2 ring-slate-900" : "border border-slate-200"
          }`}
          style={{ background: o.color }}
          title={o.name}
        />
      ))}
    </div>
  );
}
