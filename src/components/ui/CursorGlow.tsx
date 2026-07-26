"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const sparkleColors = ["#C68642", "#D9C6A5", "#C4A882", "#E5D0B8", "#8B6914"];

export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 18 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 18 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const inHero =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;

      setVisible(inHero);
      if (inHero) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion, cursorX, cursorY]);

  if (reducedMotion || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden lg:block"
      style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
    >
      <div className="relative h-16 w-16">
        {sparkleColors.map((color, i) => (
          <motion.span
            key={color}
            className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 rounded-full"
            style={{
              background: color,
              x: Math.cos((i / sparkleColors.length) * Math.PI * 2) * 20,
              y: Math.sin((i / sparkleColors.length) * Math.PI * 2) * 20,
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sand/30 blur-md" />
      </div>
    </motion.div>
  );
}
