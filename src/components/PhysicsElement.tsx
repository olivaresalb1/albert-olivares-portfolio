"use client";

import React, { useEffect, useRef } from "react";
import { usePhysics } from "@/context/PhysicsContext";

interface PhysicsElementProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const PhysicsElement: React.FC<PhysicsElementProps> = ({
  id,
  children,
  className = "",
}) => {
  const { registerElement, isActive } = usePhysics();
  const ref = useRef<HTMLDivElement | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isDragRef = useRef<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      registerElement(id, el);
    }
    return () => {
      registerElement(id, null);
    };
  }, [id, registerElement]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isActive) return;
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
    isDragRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isActive || !pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    const dist = Math.hypot(dx, dy);
    const duration = Date.now() - pointerStartRef.current.time;

    if (dist > 6 || duration > 250) {
      isDragRef.current = true;
    }
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    if (pointerStartRef.current) {
      const dx = e.clientX - pointerStartRef.current.x;
      const dy = e.clientY - pointerStartRef.current.y;
      const dist = Math.hypot(dx, dy);
      const duration = Date.now() - pointerStartRef.current.time;

      if (dist > 6 || duration > 250 || isDragRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
      pointerStartRef.current = null;
      isDragRef.current = false;
    }
  };

  return (
    <div
      ref={ref}
      className={`physics-ready [&.is-physics-active[data-physics-id^="project-"]]:w-[110px] [&.is-physics-active[data-physics-id^="project-"]]:h-[110px] [&.is-physics-active[data-physics-id^="project-"]]:sm:w-[135px] [&.is-physics-active[data-physics-id^="project-"]]:sm:h-[135px] ${className}`}
      data-physics-id={id}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onClickCapture={handleClickCapture}
    >
      {children}
    </div>
  );
};
