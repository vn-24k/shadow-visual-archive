"use client";

import React from "react";
import { soundFX } from "./sound-fx";

export function ShadowFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#070709] py-14 text-neutral-500 text-xs font-mono select-none">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-baseline justify-between gap-8">
        <div>
          <span className="font-bold text-white tracking-[0.25em] block mb-2">
            SHADOW / VISUAL ARCHIVE
          </span>
          <p className="text-[11px] text-neutral-400 max-w-sm font-normal leading-relaxed">
            Curated explorations of distance, solitude, and human transformation. Recorded on 35mm analogue film and digital silver gelatin.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8 text-[11px] tracking-widest uppercase">
          <a
            href="#"
            onMouseEnter={() => soundFX.playHover()}
            className="hover:text-amber-200 transition"
          >
            Archive Index
          </a>
          <a
            href="#"
            onMouseEnter={() => soundFX.playHover()}
            className="hover:text-amber-200 transition"
          >
            Monographs
          </a>
          <a
            href="#"
            onMouseEnter={() => soundFX.playHover()}
            className="hover:text-amber-200 transition"
          >
            Press & Exhibitions
          </a>
          <a
            href="mailto:archive@shadow-journal.com"
            onMouseEnter={() => soundFX.playHover()}
            className="text-white hover:text-amber-200 transition"
          >
            Inquiries →
          </a>
        </div>
      </div>
    </footer>
  );
}
