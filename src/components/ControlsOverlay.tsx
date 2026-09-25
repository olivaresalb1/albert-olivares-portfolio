"use client";

import React from "react";
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

  if (!isActive) return null;

  const isZeroG = gravity.x === 0 && gravity.y === 0;
  const isUp = gravity.x === 0 && gravity.y === -1;
  const isDown = gravity.x === 0 && gravity.y === 1;
  const isLeft = gravity.x === -1 && gravity.y === 0;
  const isRight = gravity.x === 1 && gravity.y === 0;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-gray-900/85 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-2 text-xs text-white physics-ready">
        {/* Zero-G */}
        <button
          type="button"
          onClick={setZeroG}
          title="Zero Gravity Drift"
          aria-label="Activate Zero Gravity drift"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
            isZeroG
              ? "bg-[var(--accent-cyan)] text-gray-950 font-bold shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/5 hover:bg-white/15 text-white/80 hover:text-white"
          }`}
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>Zero-G</span>
        </button>

        {/* Up */}
        <button
          type="button"
          onClick={() => setGravity(0, -1)}
          title="Flip Gravity Up"
          aria-label="Set gravity upward"
          className={`p-2 rounded-full transition-all cursor-pointer ${
            isUp
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/5 hover:bg-white/15 text-white/80 hover:text-white"
          }`}
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Down */}
        <button
          type="button"
          onClick={() => setGravity(0, 1)}
          title="Normal Gravity Down"
          aria-label="Set gravity downward"
          className={`p-2 rounded-full transition-all cursor-pointer ${
            isDown
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/5 hover:bg-white/15 text-white/80 hover:text-white"
          }`}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </button>

        {/* Left */}
        <button
          type="button"
          onClick={() => setGravity(-1, 0)}
          title="Pull Left"
          aria-label="Set gravity left"
          className={`p-2 rounded-full transition-all cursor-pointer ${
            isLeft
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/5 hover:bg-white/15 text-white/80 hover:text-white"
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>

        {/* Right */}
        <button
          type="button"
          onClick={() => setGravity(1, 0)}
          title="Pull Right"
          aria-label="Set gravity right"
          className={`p-2 rounded-full transition-all cursor-pointer ${
            isRight
              ? "bg-[var(--accent-cyan)] text-gray-950 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              : "bg-white/5 hover:bg-white/15 text-white/80 hover:text-white"
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="h-4 w-px bg-white/15 mx-1" />

        {/* Reset Layout */}
        <button
          type="button"
          onClick={resetPhysics}
          title="Reset Physics & Restore Grid Layout"
          aria-label="Reset layout"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--accent-emerald)]/15 text-[var(--accent-emerald)] border border-[var(--accent-emerald)]/30 hover:bg-[var(--accent-emerald)]/25 transition-all cursor-pointer font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
