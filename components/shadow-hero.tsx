"use client";

import React, { useState } from "react";
import { Compass, Sparkles } from "lucide-react";
import { soundFX } from "./sound-fx";

export function ShadowHero() {
  const [activeKeyword, setActiveKeyword] = useState<string>("REFLECTION");

  const keywords = ["SILENCE", "REFLECTION", "GROWTH", "FREEDOM", "YOU"];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-4 pb-20 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[680px]">
        {/* Left Column: Monumental Editorial Serif & Philosophical Metadata */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full z-20 text-left">
          {/* Top Poem Note */}
          <div className="mb-8">
            <p className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase leading-relaxed max-w-[220px]">
              Not all journeys are about distance. Some are about finding yourself.
            </p>
          </div>

          {/* Monumental Headline */}
          <div className="mb-8">
            <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white leading-[0.95]">
              THE <br />
              INNER <br />
              <span className="italic font-light bg-gradient-to-r from-amber-200 via-[#e2c78b] to-amber-100 bg-clip-text text-transparent">
                JOURNEY
              </span>
            </h1>
            <p className="mt-4 text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase">
              Some paths lead you back to yourself.
            </p>
          </div>

          {/* Contemplation Keywords List (Interactive Kokonut/Aceternity style) */}
          <div className="flex flex-col gap-1.5 my-6">
            {keywords.map((kw) => {
              const isSelected = activeKeyword === kw;
              return (
                <button
                  key={kw}
                  onClick={() => {
                    setActiveKeyword(kw);
                    soundFX.playClick();
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`text-left text-xs font-mono tracking-[0.3em] transition-all duration-300 flex items-center gap-2.5 ${
                    isSelected
                      ? "text-amber-200 font-semibold translate-x-2"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isSelected ? "bg-amber-400 shadow-[0_0_8px_#fde047]" : "bg-neutral-700"
                    }`}
                  />
                  <span>{kw}</span>
                </button>
              );
            })}
          </div>

          {/* Compass Coordinates & Series 04 Stamp */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-amber-200/70" />
              <span>33.6844° N / 73.0479° E</span>
            </div>
            <span>VISUAL ARCHIVE</span>
          </div>
        </div>

        {/* Center Column: The Double-Exposure Artwork Poster */}
        <div className="lg:col-span-5 relative flex justify-center items-center z-10">
          {/* Subtle Lunar Aura Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-amber-200/10 blur-[100px] pointer-events-none -z-10" />

          {/* Master Artwork Frame */}
          <div className="relative group max-w-[420px] w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 hover:border-amber-200/30 transition-all duration-700">
            <img
              src="/assets/shadow/shadow-hero-art.jpg"
              alt="The Inner Journey - Series 04"
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            
            {/* Fine 1px Editorial Frame Inset */}
            <div className="absolute inset-2 border border-white/15 pointer-events-none rounded-xl" />
          </div>
        </div>

        {/* Right Column: Quotes, Artisan Seal & Series Thumbnail */}
        <div className="lg:col-span-3 flex flex-col justify-between h-full z-20 text-right">
          {/* Right Poetic Callout */}
          <div className="mb-10">
            <p className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase leading-relaxed max-w-[190px] ml-auto">
              It's not the place that changes you. It's what you become along the way.
            </p>
          </div>

          {/* Traditional Artisan Hanko Seal Stamp (夢 - Dream) */}
          <div className="my-auto flex justify-end">
            <div
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playWarmChime()}
              className="group cursor-pointer w-11 h-11 border-2 border-red-700 bg-red-950/40 rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(185,28,28,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300"
              title="Artisan Seal: Yume (Dream)"
            >
              <span className="font-serif text-lg font-bold text-red-400 group-hover:scale-110 transition-transform">
                夢
              </span>
            </div>
          </div>

          {/* Series 05 Preview Card */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <span className="text-[9px] font-mono tracking-[0.25em] text-neutral-500 uppercase block mb-2">
              Next In Archive • Series 05
            </span>
            <div className="inline-block relative overflow-hidden rounded border border-white/10 shadow-lg">
              <img
                src="/assets/shadow/mountain-thumb.jpg"
                alt="Series 05 Preview"
                className="w-20 h-28 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
