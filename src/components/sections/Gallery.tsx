"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { GALLERY_DATA, GalleryItem } from "@/lib/constants";
import { IndianBorderStrip, Lotus, MiniMandala, RangoliDiamond } from "@/components/ui/IndianDoodles";

const CATEGORIES = ["All", "Coffee", "Food", "Interior", "Desserts", "Lifestyle"] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems =
    activeCategory === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  return (
    <section
      id="gallery"
      className="section-pad bg-beige text-espresso relative overflow-hidden border-b border-espresso"
    >
      {/* Background Doodles */}
      <div className="absolute top-12 left-6 opacity-20 animate-slow-spin hidden md:block">
        <MiniMandala size={90} opacity={0.25} />
      </div>
      <div className="absolute bottom-12 right-6 opacity-20 animate-float hidden md:block">
        <Lotus size={75} opacity={0.25} />
      </div>

      <div className="section-wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-espresso/20 pb-4 mb-12">
          <span className="font-yanone text-lg tracking-[0.25em] text-cinnamon uppercase">
            04 / GALLERY
          </span>
          <IndianBorderStrip width={180} opacity={0.3} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-cinnamon mb-2">
            Visual Storytelling
          </p>
          <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tighter mb-4">
            The Florian Space
          </h2>
          <p className="font-sans text-base text-chocolate leading-relaxed">
            Moments captured at our roastery — from morning brews to afternoon quiet.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-yanone text-lg uppercase tracking-widest px-5 py-2 transition-all border ${
                activeCategory === cat
                  ? "bg-espresso text-beige border-espresso shadow-[4px_4px_0px_rgba(75,54,33,0.15)]"
                  : "bg-sand text-espresso border-espresso/30 hover:border-espresso hover:bg-beige"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden border-2 border-espresso/30 cursor-pointer bg-sand ${
                  item.aspect === "tall"
                    ? "aspect-[3/4]"
                    : item.aspect === "wide"
                    ? "aspect-[16/10]"
                    : "aspect-square"
                }`}
              >
                {/* Safe Image */}
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Hover Overlay & Caption */}
                <div className="absolute inset-0 bg-espresso/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                  <div className="flex justify-between items-start">
                    <span className="bg-cinnamon text-beige text-[10px] font-yanone uppercase tracking-widest px-2.5 py-1">
                      {item.category}
                    </span>
                    <RangoliDiamond size={18} color="#F5EFE6" opacity={0.8} />
                  </div>

                  <div>
                    <h3 className="font-yanone text-3xl uppercase tracking-wider text-beige mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-beige/70">
                      {item.alt}
                    </p>
                    <span className="inline-block mt-3 font-yanone text-sm uppercase tracking-widest text-camel">
                      Click to expand ↗
                    </span>
                  </div>
                </div>

                {/* Always visible subtle border accent */}
                <div className="absolute bottom-2 left-2 z-10 opacity-70 group-hover:opacity-0 transition-opacity">
                  <span className="bg-espresso/80 text-beige text-[9px] font-yanone uppercase tracking-widest px-2 py-0.5">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 text-beige hover:text-cinnamon border-2 border-beige/40 p-2 font-sans text-xl leading-none transition-colors"
                aria-label="Close Lightbox"
              >
                ✕
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-beige hover:text-cinnamon border-2 border-beige/40 p-3 md:p-4 font-yanone text-2xl transition-colors bg-espresso/80"
                aria-label="Previous Image"
              >
                ←
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-beige hover:text-cinnamon border-2 border-beige/40 p-3 md:p-4 font-yanone text-2xl transition-colors bg-espresso/80"
                aria-label="Next Image"
              >
                →
              </button>

              {/* Image & Caption Container */}
              <div
                className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[60vh] md:h-[70vh] border-4 border-beige p-2 bg-sand shadow-2xl">
                  <SafeImage
                    src={filteredItems[lightboxIndex].src}
                    alt={filteredItems[lightboxIndex].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Caption Bar */}
                <div className="mt-4 text-center text-beige max-w-xl">
                  <span className="inline-block bg-cinnamon text-beige text-xs font-yanone uppercase tracking-widest px-3 py-1 mb-2">
                    {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                  <h3 className="font-yanone text-3xl uppercase tracking-wider text-beige">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="font-sans text-sm text-beige/70 mt-1">
                    {filteredItems[lightboxIndex].alt}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
