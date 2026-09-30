"use client";

import React, { useEffect, useRef } from "react";
import {
  Orbit,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { usePhysics } from "@/context/PhysicsContext";

export const ControlsOverlay: React.FC = () => {
  const {
    isActive,
    resetPhysics,
    setGravity,
    setZeroG,
    gravity,
  } = usePhysics();

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Stop native DOM touch and pointer events from bubbling to document.body where Matter.js Mouse listener resides
  useEffect(() => {
    if (!isActive) return;
    const el = containerRef.current;
    if (!el) return;

    const stopNative = (e: Event) => {
      e.stopPropagation();
      if (e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
    };

    const nativeEvents = [
      "touchstart",
      "touchend",
      "touchmove",
      "pointerdown",
      "pointerup",
      "pointermove",
      "mousedown",
      "mouseup",
    ];

    nativeEvents.forEach((eventName) => {
      el.addEventListener(eventName, stopNative, { capture: true });
      el.addEventListener(eventName, stopNative, { capture: false });
    });

    return () => {
      nativeEvents.forEach((eventName) => {
        el.removeEventListener(eventName, stopNative, { capture: true });
        el.removeEventListener(eventName, stopNative, { capture: false });
      });
    };
  }, [isActive]);

  if (!isActive) return null;

  const isZeroG = gravity.x === 0 && gravity.y === 0;
  const isUp = gravity.x === 0 && gravity.y === -1;
  const isDown = gravity.x === 0 && gravity.y === 1;
  const isLeft = gravity.x === -1 && gravity.y === 0;
  const isRight = gravity.x === 1 && gravity.y === 0;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 max-w-[95vw] pointer-events-auto select-none"
    >
      <div className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 shadow-2xl flex items-center gap-1 sm:gap-2 text-xs text-white touch-manipulation">
        {/* Zero-G */}
        <button
          type="button"
          onClick={() => setZeroG()}
          title="Zero Gravity Drift"
          aria-label="Activate Zero Gravity drift"
          className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 py-2 rounded-full transition-all cursor-pointer font-medium min-h-[38px] active:scale-95 ${
            isZeroG
              ? "bg-[var(--accent-cyan)] text-gray-950 font-bold shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white"
          }`}
        >
          <Orbit className="w-4 h-4 shrink-0" />
          <span className="text-xs font-semibold">Zero-G</span>
        </button>

        {/* Up */}
        <button
          type="button"
          onClick={() => setGravity(0, -1)}
          title="Flip Gravity Up"
          aria-label="Set gravity upward"
          className={`inline-flex items-center justify-center p-2.5 rounded-full transition-all cursor-pointer min-w-[38px] min-h-[38px] active:scale-95 ${
            isUp
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white"
          }`}
        >
          <ArrowUp className="w-4 h-4 shrink-0" />
        </button>

        {/* Down */}
        <button
          type="button"
          onClick={() => setGravity(0, 1)}
          title="Normal Gravity Down"
          aria-label="Set gravity downward"
          className={`inline-flex items-center justify-center p-2.5 rounded-full transition-all cursor-pointer min-w-[38px] min-h-[38px] active:scale-95 ${
            isDown
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white"
          }`}
        >
          <ArrowDown className="w-4 h-4 shrink-0" />
        </button>

        {/* Left */}
        <button
          type="button"
          onClick={() => setGravity(-1, 0)}
          title="Pull Left"
          aria-label="Set gravity left"
          className={`inline-flex items-center justify-center p-2.5 rounded-full transition-all cursor-pointer min-w-[38px] min-h-[38px] active:scale-95 ${
            isLeft
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white"
          }`}
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
        </button>

        {/* Right */}
        <button
          type="button"
          onClick={() => setGravity(1, 0)}
          title="Pull Right"
          aria-label="Set gravity right"
          className={`inline-flex items-center justify-center p-2.5 rounded-full transition-all cursor-pointer min-w-[38px] min-h-[38px] active:scale-95 ${
            isRight
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/10 hover:bg-white/20 active:bg-white/30 text-white"
          }`}
        >
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>

        <div className="h-5 w-px bg-white/20 mx-0.5 sm:mx-1" />

        {/* Reset Layout */}
        <button
          type="button"
          onClick={() => resetPhysics()}
          title="Reset Physics & Restore Grid Layout"
          aria-label="Reset layout"
          className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3 py-2 rounded-full bg-[var(--accent-emerald)]/20 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/40 hover:bg-[var(--accent-emerald)]/30 active:scale-95 transition-all cursor-pointer font-semibold min-h-[38px]"
        >
          <RotateCcw className="w-4 h-4 shrink-0" />
          <span className="text-xs font-semibold">Reset</span>
        </button>
      </div>
    </div>
  );
};

