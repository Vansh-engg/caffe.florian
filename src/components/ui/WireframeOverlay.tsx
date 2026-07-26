"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "@/context/RevealContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WireframeOverlay() {
  const { phase } = useReveal();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {phase === "wireframe" && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[60] bg-warm-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(111, 78, 55, 0.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(111, 78, 55, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
