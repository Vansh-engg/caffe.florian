"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

export interface ModalItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  dietary: "veg" | "vegan" | "non-veg";
  badge?: string;
  popular?: boolean;
  categoryTitle?: string;
}

interface ItemDetailModalProps {
  item: ModalItem | null;
  onClose: () => void;
}

export function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const dietaryLabel =
    item.dietary === "veg"
      ? "Vegetarian"
      : item.dietary === "vegan"
      ? "100% Plant Based (Vegan)"
      : "Non-Vegetarian";

  const dietaryBorderColor =
    item.dietary === "veg"
      ? "border-green-700 text-green-800 bg-green-50/90"
      : item.dietary === "vegan"
      ? "border-emerald-600 text-emerald-800 bg-emerald-50/90"
      : "border-red-700 text-red-800 bg-red-50/90";

  const dietaryDotColor =
    item.dietary === "veg"
      ? "bg-green-700"
      : item.dietary === "vegan"
      ? "bg-emerald-600"
      : "bg-red-700";

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/70 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Card - Responsive 2-column layout (Image Left + Details Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] flex flex-col md:flex-row bg-beige border-3 border-espresso shadow-[12px_12px_0px_rgba(75,54,33,0.3)] z-10 overflow-hidden my-auto text-espresso"
          >
            {/* Close Button (Cross) - Always visible in top right */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-2.5 right-2.5 z-30 w-9 h-9 rounded-full bg-sand border-2 border-espresso text-espresso hover:bg-cinnamon hover:text-beige hover:border-cinnamon transition-all duration-200 flex items-center justify-center shadow-md group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Image Section - High visibility & clear view */}
            <div className="relative w-full md:w-5/12 h-44 sm:h-56 md:h-auto min-h-[200px] md:min-h-[320px] bg-sand border-b-2 md:border-b-0 md:border-r-2 border-espresso overflow-hidden shrink-0">
              <SafeImage
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 350px"
              />

              {/* Special Badge overlay at top-left corner */}
              <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
                {item.badge && (
                  <span className="bg-cinnamon text-beige font-yanone uppercase text-[10px] sm:text-xs tracking-widest px-2.5 py-0.5 border border-beige/30 shadow-sm">
                    {item.badge}
                  </span>
                )}
                {item.popular && (
                  <span className="bg-espresso text-beige font-yanone uppercase text-[10px] sm:text-xs tracking-widest px-2.5 py-0.5 border border-beige/30 shadow-sm">
                    Popular Pick
                  </span>
                )}
              </div>
            </div>

            {/* Right Details Section */}
            <div className="w-full md:w-7/12 p-4 sm:p-6 overflow-y-auto flex flex-col justify-between">
              <div>
                {/* Category tag */}
                {item.categoryTitle && (
                  <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cinnamon mb-1 font-semibold">
                    {item.categoryTitle} — Caffè Florian
                  </p>
                )}

                {/* Title & Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2.5 border-b border-espresso/15 mb-3">
                  <h2 className="font-yanone text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-espresso leading-tight pr-6 md:pr-0">
                    {item.name}
                  </h2>
                  <span className="font-yanone text-2xl sm:text-3xl md:text-4xl text-cinnamon font-black tracking-tight shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Dietary Tag */}
                <div className="mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-sans font-medium border ${dietaryBorderColor} shadow-sm`}
                  >
                    <span className={`w-2 h-2 rounded-full ${dietaryDotColor}`} />
                    {dietaryLabel}
                  </span>
                </div>

                {/* Full Description */}
                <div className="mb-4">
                  <h4 className="font-yanone text-sm sm:text-base uppercase tracking-widest text-espresso/70 mb-1">
                    Details & Ingredients
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-chocolate leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Quality Highlights */}
                <div className="grid grid-cols-2 gap-2 p-2.5 bg-sand border border-espresso/15 text-[10px] sm:text-xs font-sans text-espresso/80 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-cinnamon">✦</span>
                    <span>Freshly Handcrafted</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cinnamon">✦</span>
                    <span>Artisanal Selection</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cinnamon">✦</span>
                    <span>Authentic Recipe</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cinnamon">✦</span>
                    <span>Single-Origin Beans</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-espresso/15 flex items-center justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2 border-2 border-espresso font-yanone text-base sm:text-lg uppercase tracking-wider bg-sand text-espresso hover:bg-espresso hover:text-beige transition-all shadow-[2px_2px_0px_rgba(75,54,33,0.2)] hover:shadow-none"
                >
                  Close Details ✕
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


