"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ArchiveGallery() {
  const archives = [
    {
      series: "SERIES 01",
      title: "The Awakening",
      date: "OCTOBER 2026",
      location: "KYOTO • ARASHIYAMA",
      coord: "35.0116° N / 135.6778° E",
    },
    {
      series: "SERIES 02",
      title: "Solitude & Silence",
      date: "NOVEMBER 2026",
      location: "ZUGSPITZE • BAVARIAN ALPS",
      coord: "47.4211° N / 10.9853° E",
    },
    {
      series: "SERIES 03",
      title: "The Golden Hour",
      date: "DECEMBER 2026",
      location: "SAHARA DUNES • MERZOUGA",
      coord: "31.0999° N / 4.0116° W",
    },
    {
      series: "SERIES 04",
      title: "The Inner Journey",
      date: "CURRENT ARCHIVE",
      location: "LAKE BLED • JULIAN ALPS",
      coord: "46.3636° N / 14.0938° E",
      highlight: true,
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/[0.08] select-none">
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-200/80 block mb-2">
            CATALOGUE RAISONNÉ
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl text-white font-normal">
            Visual Archive Series
          </h2>
        </div>
        <span className="text-xs font-mono tracking-widest text-neutral-500 mt-2 sm:mt-0">
          EDITION OF 400 • ANALOGUE & DIGITAL
        </span>
      </div>

      {/* Grid of Archive Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {archives.map((item) => (
          <div
            key={item.series}
            className={`group relative rounded-xl p-6 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer ${
              item.highlight
                ? "bg-gradient-to-b from-amber-200/[0.06] to-transparent border border-amber-300/30 shadow-[0_0_25px_rgba(251,191,36,0.1)]"
                : "bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500 mb-4">
                <span>{item.series}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="font-editorial text-2xl text-white font-normal group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mt-2 tracking-wider">
                {item.location}
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>{item.coord}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform group-hover:text-amber-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
