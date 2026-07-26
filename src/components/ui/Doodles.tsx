"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SquiggleColor = "coral" | "mint" | "lavender" | "peach" | "sky" | "yellow";

const squiggleColors: Record<SquiggleColor, string> = {
  coral: "#C68642",
  mint: "#B8A88A",
  lavender: "#C4A882",
  peach: "#D9A86C",
  sky: "#D9C6A5",
  yellow: "#C68642",
};

const DOODLE_STROKE = "#2C2416";

export function SquiggleUnderline({
  color = "coral",
  className = "",
}: {
  color?: SquiggleColor;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const stroke = squiggleColors[color];

  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      className={`w-full max-w-[220px] sm:max-w-[280px] ${className}`}
      aria-hidden="true"
    >
      <motion.path
        d="M4 10 C30 2, 50 14, 80 8 S130 2, 160 10 S190 6, 196 8"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </svg>
  );
}

export function StarDoodle({
  className = "",
  color = "#F0E6D2",
  size = 24,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      animate={
        reducedMotion
          ? undefined
          : { rotate: [0, 12, -8, 0], scale: [1, 1.15, 1] }
      }
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z"
        fill={color}
        stroke={DOODLE_STROKE}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function HeartDoodle({ className = "", size = 20 }: { className?: string; size?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      animate={reducedMotion ? undefined : { scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z"
        fill="#E5D0B8"
        stroke={DOODLE_STROKE}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function CoffeeCupDoodle({ className = "", size = 28 }: { className?: string; size?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      animate={reducedMotion ? undefined : { y: [0, -4, 0], rotate: [0, 4, -2, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="6" y="12" width="16" height="14" rx="3" fill="#EDE6DA" stroke={DOODLE_STROKE} strokeWidth="1.5" />
      <path d="M22 16h3a3 3 0 0 1 0 6h-3" fill="none" stroke={DOODLE_STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 8 Q12 4 14 8" fill="none" stroke={DOODLE_STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14 8 Q16 4 18 8" fill="none" stroke={DOODLE_STROKE} strokeWidth="1.2" strokeLinecap="round" />
    </motion.svg>
  );
}

export function SparkleDoodle({ className = "", color = "#C68642" }: { className?: string; color?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={className}
      aria-hidden="true"
      animate={reducedMotion ? undefined : { rotate: 360, scale: [1, 1.3, 1] }}
      transition={{ rotate: { duration: 6, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
    >
      <path d="M9 0v18M0 9h18M2.5 2.5l13 13M15.5 2.5l-13 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
}

export function FloatingDoodles({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div className="absolute left-[5%] top-[15%] hidden xs:block sm:left-[8%] sm:top-[18%]" animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <StarDoodle color="#F0E6D2" size={24} />
        </motion.div>
        <motion.div className="absolute right-[8%] top-[22%] sm:right-[12%] sm:top-[28%]" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>
          <HeartDoodle size={18} />
        </motion.div>
        <motion.div className="absolute bottom-[20%] left-[10%] hidden sm:block" animate={{ x: [0, 8, 0], rotate: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <CoffeeCupDoodle size={28} />
        </motion.div>
        <motion.div className="absolute bottom-[28%] right-[15%] hidden md:block" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <SparkleDoodle color="#C68642" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute -right-2 -top-4 hidden sm:block" aria-hidden="true">
      <motion.span
        className="inline-block text-base text-coffee"
        animate={{ rotate: [0, 8, -8, 0], y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ~
      </motion.span>
    </div>
  );
}

interface PlayfulHeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  squiggle?: SquiggleColor;
  className?: string;
  badge?: string;
  doodles?: boolean;
}

export function PlayfulHeading({
  children,
  as: Tag = "h2",
  squiggle = "coral",
  className = "",
  badge,
  doodles = true,
}: PlayfulHeadingProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative inline-block max-w-full">
      {doodles && <FloatingDoodles variant="section" />}
      {badge && (
        <motion.span
          className="mb-3 inline-block rounded-full bg-warm-beige px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-coffee sm:px-4 sm:text-xs"
          initial={reducedMotion ? false : { opacity: 0, y: 8, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          {badge}
        </motion.span>
      )}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <Tag
          className={`font-display font-bold leading-[1.1] text-charcoal ${className}`}
        >
          {children}
        </Tag>
        <SquiggleUnderline color={squiggle} className="mt-2" />
      </motion.div>
    </div>
  );
}
