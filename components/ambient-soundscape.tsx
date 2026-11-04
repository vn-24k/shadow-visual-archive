"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundFX } from "./sound-fx";

export function AmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (typeof window === "undefined") return;

    if (!isPlaying) {
      // Start 432Hz ambient drone
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2); // Slow cinematic fade in
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 432Hz fundamental + 216Hz octave below + 648Hz fifth overtone
      const frequencies = [216, 432, 648];
      oscillatorsRef.current = frequencies.map((freq) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
        return osc;
      });

      setIsPlaying(true);
      soundFX.playWarmChime();
    } else {
      // Fade out and stop
      if (gainNodeRef.current && audioCtxRef.current) {
        const now = audioCtxRef.current.currentTime;
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, now);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
        setTimeout(() => {
          oscillatorsRef.current.forEach((o) => {
            try { o.stop(); } catch {}
          });
          audioCtxRef.current?.close();
          oscillatorsRef.current = [];
          audioCtxRef.current = null;
        }, 1300);
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((o) => {
        try { o.stop(); } catch {}
      });
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      onMouseEnter={() => soundFX.playHover()}
      className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-amber-400/40 text-neutral-300 hover:text-white transition-all text-xs font-mono select-none"
      title="Toggle 432Hz Ambient Soundscape"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-amber-300" />
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-2.5 bg-amber-300 animate-pulse" />
            <span className="w-0.5 h-3 bg-amber-400 animate-[pulse_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 h-1.5 bg-amber-300 animate-pulse" />
            <span className="w-0.5 h-2 bg-amber-400 animate-[pulse_1.2s_ease-in-out_infinite]" />
          </div>
          <span className="text-[10px] tracking-widest text-amber-200">432Hz ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
          <span className="text-[10px] tracking-widest text-neutral-400">SOUNDSCAPE</span>
        </>
      )}
    </button>
  );
}
