"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  delay?: number;
  reveal?: boolean;
}

const variantStyles = {
  primary:
    "bg-coffee text-warm-white border-2 border-coffee-dark/20 shadow-sticker hover:shadow-sticker-hover hover:bg-coffee-dark",
  secondary:
    "bg-warm-beige text-charcoal border-2 border-sand/60 shadow-sticker hover:bg-sand/40",
  ghost:
    "border-2 border-dashed border-coffee/40 bg-warm-cream/80 text-coffee hover:bg-warm-beige hover:border-coffee",
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  href,
  onClick,
  delay = 0,
  reveal = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 12 });
  const springY = useSpring(y, { stiffness: 200, damping: 12 });

  const handleMouseMove = (e: MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 50) {
      x.set(distanceX * 0.25);
      y.set(distanceY * 0.25);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass = `
    inline-flex w-full items-center justify-center gap-2
    rounded-full px-6 py-3.5 font-display text-sm font-semibold
    sm:w-auto sm:px-8 sm:py-4
    transition-all duration-300
    ${variantStyles[variant]} ${className}
  `;

  const motionProps = {
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: reducedMotion ? undefined : { scale: 1.04 },
    whileTap: reducedMotion ? undefined : { scale: 0.97 },
    initial: reveal ? { opacity: 0, scale: 0.9 } : false,
    animate: reveal
      ? {
          opacity: 1,
          scale: 1,
          transition: {
            delay: variant === "primary" ? 1.8 + delay : 2.0 + delay,
            type: "spring",
            stiffness: 260,
            damping: 14,
          },
        }
      : undefined,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseClass}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={baseClass}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
