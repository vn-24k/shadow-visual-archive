"use client";

import React from "react";
import {
  SmoothCursor,
  NoiseGrain,
  ShadowHeader,
  ShadowHero,
  ArchiveGallery,
  ShadowFooter,
} from "./components";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 selection:bg-amber-200/30 selection:text-amber-100 font-sans antialiased relative overflow-x-hidden">
      <SmoothCursor color="#fde68a" glowColor="rgba(253, 230, 138, 0.4)" />
      <NoiseGrain />
      <ShadowHeader />
      <main className="relative z-20">
        <ShadowHero />
        <ArchiveGallery />
      </main>
      <ShadowFooter />
    </div>
  );
}
