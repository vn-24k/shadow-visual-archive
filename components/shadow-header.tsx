"use client";

import React from "react";

export function ShadowHeader() {
  return (
    <header className="relative z-40 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-xs tracking-widest uppercase font-mono select-none">
      {/* Top Left: Brand & Archive Meta (Matching Reference 1:1) */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-white tracking-[0.25em]">SHADOW</span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-400 tracking-[0.2em]">VISUAL ARCHIVE</span>
      </div>

      {/* Top Right: Series Metadata (Matching Reference 1:1) */}
      <div className="flex flex-col items-end text-[10px] tracking-widest text-neutral-400 text-right">
        <span className="text-neutral-400">SERIES 04</span>
        <span className="text-neutral-200 font-bold">THE JOURNEY</span>
      </div>
    </header>
  );
}
