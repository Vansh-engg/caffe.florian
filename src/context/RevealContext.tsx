"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealPhase = "wireframe" | "revealing" | "complete";

interface RevealContextValue {
  phase: RevealPhase;
  isWireframe: boolean;
  isComplete: boolean;
}

const RevealContext = createContext<RevealContextValue>({
  phase: "wireframe",
  isWireframe: true,
  isComplete: false,
});

export function RevealProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<RevealPhase>(
    reducedMotion ? "complete" : "wireframe"
  );

  useEffect(() => {
    if (reducedMotion) {
      setPhase("complete");
      return;
    }

    const wireframeTimer = setTimeout(() => setPhase("revealing"), 500);

    const completeTimer = setTimeout(() => setPhase("complete"), 4200);

    return () => {
      clearTimeout(wireframeTimer);
      clearTimeout(completeTimer);
    };
  }, [reducedMotion]);

  return (
    <RevealContext.Provider
      value={{
        phase,
        isWireframe: phase === "wireframe",
        isComplete: phase === "complete" || reducedMotion,
      }}
    >
      {children}
    </RevealContext.Provider>
  );
}

export function useReveal() {
  return useContext(RevealContext);
}
