"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackSrc,
  className = "",
  containerClassName = "",
  fill,
  width,
  height,
  unoptimized = true,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const defaultFallback =
    fallbackSrc ||
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80";

  return (
    <div
      className={`relative overflow-hidden bg-sand/40 ${
        fill ? "w-full h-full" : ""
      } ${containerClassName}`}
    >
      {/* Loading Skeleton Pulse */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-sand/60 animate-pulse z-10" />
      )}

      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-sand/60 p-4 text-center border border-espresso/20">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8B5E3C"
            strokeWidth="1.5"
            className="mb-1 opacity-70"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="2" x2="6" y2="4" />
            <line x1="10" y1="2" x2="10" y2="4" />
            <line x1="14" y1="2" x2="14" y2="4" />
          </svg>
          <span className="font-yanone text-xs uppercase tracking-widest text-espresso/70">
            Caffè Florian
          </span>
        </div>
      ) : (
        <Image
          src={error ? defaultFallback : src}
          alt={alt || "Café imagery"}
          fill={fill}
          width={width}
          height={height}
          unoptimized={unoptimized}
          className={`transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          {...props}
        />
      )}
    </div>
  );
}
