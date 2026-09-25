"use client";

import React, { createContext, useContext } from "react";
import { usePhysicsWorld } from "@/hooks/usePhysicsWorld";

interface PhysicsContextType {
  registerElement: (id: string, element: HTMLElement | null) => void;
  startPhysics: () => void;
  resetPhysics: () => void;
  isActive: boolean;
  engineRef: React.RefObject<import("matter-js").Engine | null>;
}

const PhysicsContext = createContext<PhysicsContextType | null>(null);

export const PhysicsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const physics = usePhysicsWorld();

  return (
    <PhysicsContext.Provider value={physics}>
      {children}
    </PhysicsContext.Provider>
  );
};

export const usePhysics = (): PhysicsContextType => {
  const context = useContext(PhysicsContext);
  if (!context) {
    throw new Error("usePhysics must be used within a PhysicsProvider");
  }
  return context;
};
