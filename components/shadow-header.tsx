"use client";

import React from "react";
import { AmbientSoundscape } from "./ambient-soundscape";
import { soundFX } from "./sound-fx";

export function ShadowHeader() {
  return (
    <header className="relative z-40 w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between text-xs tracking-widest uppercase font-mono select-none">
      {/* Brand & Archive Meta */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-white tracking-[0.25em]">SHADOW</span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-400 tracking-[0.2em]">VISUAL ARCHIVE</span>
      </div>

      {/* Series Indicator & Soundscape Controller */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 text-[11px] text-neutral-400">
          <span className="text-neutral-600">SERIES 04</span>
          <span className="text-neutral-700">•</span>
          <span className="text-amber-200/90 font-medium tracking-[0.2em]">THE JOURNEY</span>
        </div>

        <AmbientSoundscape />
      </div>
    </header>
  );
}
