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
  const { registerElement } = usePhysics();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      registerElement(id, el);
    }
    return () => {
      registerElement(id, null);
    };
  }, [id, registerElement]);

  return (
    <div
      ref={ref}
      className={`physics-ready ${className}`}
      data-physics-id={id}
    >
      {children}
    </div>
  );
};
