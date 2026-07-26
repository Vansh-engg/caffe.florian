"use client";

const ESPRESSO = "#4B3621";
const CINNAMON = "#8B5E3C";
const CAMEL = "#C8A97E";
const SAND = "#E8DDCF";

/* ─── Paisley ─── */
export function Paisley({
  size = 60,
  color = CINNAMON,
  opacity = 0.35,
  className = "",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 55 C10 55, 5 38, 10 25 C15 12, 28 8, 32 15 C38 25, 30 36, 22 32 C16 29, 18 20, 24 18 C30 16, 34 22, 30 28"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      <circle cx="30" cy="14" r="3" fill={color} opacity={opacity * 0.7} />
      <path
        d="M18 44 Q22 40 26 44 Q30 48 26 50 Q22 52 18 48 Z"
        fill={color}
        opacity={opacity * 0.5}
      />
      <path
        d="M34 40 Q36 36 40 39 Q43 42 40 45 Q37 48 34 45 Z"
        fill={color}
        opacity={opacity * 0.4}
      />
    </svg>
  );
}

/* ─── Lotus ─── */
export function Lotus({
  size = 56,
  color = ESPRESSO,
  opacity = 0.3,
  className = "",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Center petals */}
      <path d="M28 42 C24 34, 24 26, 28 20 C32 26, 32 34, 28 42Z" fill={color} opacity={opacity} />
      {/* Left petal */}
      <path d="M28 42 C18 36, 14 26, 18 18 C22 24, 24 34, 28 42Z" fill={color} opacity={opacity * 0.8} />
      {/* Right petal */}
      <path d="M28 42 C38 36, 42 26, 38 18 C34 24, 32 34, 28 42Z" fill={color} opacity={opacity * 0.8} />
      {/* Far left petal */}
      <path d="M28 42 C14 38, 8 28, 12 16 C18 24, 22 36, 28 42Z" fill={color} opacity={opacity * 0.6} />
      {/* Far right petal */}
      <path d="M28 42 C42 38, 48 28, 44 16 C38 24, 34 36, 28 42Z" fill={color} opacity={opacity * 0.6} />
      {/* Water line */}
      <path d="M10 44 Q28 40 46 44" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={opacity * 0.5} />
      {/* Center dot */}
      <circle cx="28" cy="36" r="2.5" fill={color} opacity={opacity} />
    </svg>
  );
}

/* ─── Mini Mandala ─── */
export function MiniMandala({
  size = 70,
  color = CINNAMON,
  opacity = 0.25,
  className = "",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="35" cy="35" r="32" stroke={color} strokeWidth="1" opacity={opacity * 0.6} strokeDasharray="3 4" />
      {/* Mid ring */}
      <circle cx="35" cy="35" r="22" stroke={color} strokeWidth="1.2" opacity={opacity} />
      {/* Inner ring */}
      <circle cx="35" cy="35" r="12" stroke={color} strokeWidth="1.5" opacity={opacity} />
      {/* Spokes */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="35"
          y1="35"
          x2={35 + 30 * Math.cos((angle * Math.PI) / 180)}
          y2={35 + 30 * Math.sin((angle * Math.PI) / 180)}
          stroke={color}
          strokeWidth="0.8"
          opacity={opacity * 0.7}
        />
      ))}
      {/* Petal shapes on spokes */}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const px = 35 + 22 * Math.cos(rad);
        const py = 35 + 22 * Math.sin(rad);
        return (
          <circle key={angle} cx={px} cy={py} r="3" fill={color} opacity={opacity * 0.8} />
        );
      })}
      {/* Center */}
      <circle cx="35" cy="35" r="4" fill={color} opacity={opacity} />
      <circle cx="35" cy="35" r="1.5" fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
    </svg>
  );
}

/* ─── Rangoli Diamond ─── */
export function RangoliDiamond({
  size = 48,
  color = CAMEL,
  opacity = 0.3,
  className = "",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer diamond */}
      <path d="M24 4 L44 24 L24 44 L4 24 Z" stroke={color} strokeWidth="1.5" fill="none" opacity={opacity} />
      {/* Inner diamond */}
      <path d="M24 12 L36 24 L24 36 L12 24 Z" stroke={color} strokeWidth="1" fill="none" opacity={opacity * 0.8} />
      {/* Smallest diamond */}
      <path d="M24 18 L30 24 L24 30 L18 24 Z" fill={color} opacity={opacity * 0.5} />
      {/* Corner dots */}
      <circle cx="24" cy="4" r="2" fill={color} opacity={opacity} />
      <circle cx="44" cy="24" r="2" fill={color} opacity={opacity} />
      <circle cx="24" cy="44" r="2" fill={color} opacity={opacity} />
      <circle cx="4" cy="24" r="2" fill={color} opacity={opacity} />
      {/* Mid-edge dots */}
      <circle cx="24" cy="12" r="1.5" fill={color} opacity={opacity * 0.7} />
      <circle cx="36" cy="24" r="1.5" fill={color} opacity={opacity * 0.7} />
      <circle cx="24" cy="36" r="1.5" fill={color} opacity={opacity * 0.7} />
      <circle cx="12" cy="24" r="1.5" fill={color} opacity={opacity * 0.7} />
    </svg>
  );
}

/* ─── Peacock Feather ─── */
export function PeacockFeather({
  size = 80,
  color = ESPRESSO,
  opacity = 0.25,
  className = "",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M40 95 L40 30" stroke={color} strokeWidth="2" strokeLinecap="round" opacity={opacity} />
      {/* Main eye */}
      <ellipse cx="40" cy="22" rx="14" ry="20" stroke={color} strokeWidth="1.5" fill="none" opacity={opacity} />
      <ellipse cx="40" cy="22" rx="9" ry="13" stroke={color} strokeWidth="1" fill="none" opacity={opacity * 0.7} />
      <ellipse cx="40" cy="22" rx="4" ry="6" fill={color} opacity={opacity * 0.6} />
      {/* Side fronds */}
      <path d="M40 30 Q28 40 20 35" stroke={color} strokeWidth="1" strokeLinecap="round" opacity={opacity * 0.6} />
      <path d="M40 30 Q52 40 60 35" stroke={color} strokeWidth="1" strokeLinecap="round" opacity={opacity * 0.6} />
      <path d="M40 40 Q24 52 18 48" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity={opacity * 0.5} />
      <path d="M40 40 Q56 52 62 48" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity={opacity * 0.5} />
      <path d="M40 50 Q28 64 22 62" stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity={opacity * 0.4} />
      <path d="M40 50 Q52 64 58 62" stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity={opacity * 0.4} />
    </svg>
  );
}

/* ─── Indian Border Strip ─── */
export function IndianBorderStrip({
  width = "100%",
  color = CINNAMON,
  opacity = 0.2,
  className = "",
}: {
  width?: string | number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height="20"
      viewBox="0 0 400 20"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Repeating diamond pattern */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
        <g key={x} transform={`translate(${x}, 10)`}>
          <path d={`M0 -7 L7 0 L0 7 L-7 0 Z`} stroke={color} strokeWidth="1" fill="none" opacity={opacity} />
          <circle cx="0" cy="0" r="1.5" fill={color} opacity={opacity * 0.6} />
          <circle cx="0" cy="-7" r="1" fill={color} opacity={opacity * 0.5} />
        </g>
      ))}
      <line x1="0" y1="2" x2="400" y2="2" stroke={color} strokeWidth="0.6" opacity={opacity * 0.4} />
      <line x1="0" y1="18" x2="400" y2="18" stroke={color} strokeWidth="0.6" opacity={opacity * 0.4} />
    </svg>
  );
}

/* ─── Scattered Indian Doodles (background decorator) ─── */
export function ScatteredDoodles({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const col = variant === "dark" ? CAMEL : ESPRESSO;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Top-left paisley */}
      <div className="absolute -left-4 top-12 opacity-60 rotate-12">
        <Paisley size={72} color={col} opacity={0.3} />
      </div>
      {/* Top-right mandala */}
      <div className="absolute -right-6 top-8 opacity-50 -rotate-6">
        <MiniMandala size={80} color={col} opacity={0.22} />
      </div>
      {/* Mid-left lotus */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-50">
        <Lotus size={52} color={col} opacity={0.25} />
      </div>
      {/* Mid-right diamond */}
      <div className="absolute right-[4%] top-1/2 -translate-y-1/2 opacity-50 rotate-12">
        <RangoliDiamond size={44} color={col} opacity={0.25} />
      </div>
      {/* Bottom-left diamond */}
      <div className="absolute left-12 bottom-10 opacity-40 -rotate-12">
        <RangoliDiamond size={36} color={col} opacity={0.2} />
      </div>
      {/* Bottom-right paisley */}
      <div className="absolute -right-2 bottom-8 opacity-40 -rotate-6">
        <Paisley size={60} color={col} opacity={0.22} />
      </div>
    </div>
  );
}
