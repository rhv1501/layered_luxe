"use client";
import React from "react";

export default function Stepper({
  steps = [],
  current = 1,
}: {
  steps?: string[];
  current?: number;
}) {
  return (
    <nav aria-label="Progress" className="w-full">
      <ol className="flex items-center gap-4">
        {steps.map((s, i) => {
          const idx = i + 1;
          const isActive = idx === current;
          const isDone = idx < current;
          return (
            <li key={s} className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium ${
                  isDone
                    ? "bg-slate-900 text-white"
                    : isActive
                    ? "border-slate-900 text-slate-900"
                    : "border-slate-200 text-slate-600"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {idx}
              </div>
              <div className="hidden min-w-[140px] text-sm text-slate-600 md:block">
                {s}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
