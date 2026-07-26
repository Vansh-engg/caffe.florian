"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { SafeImage } from "@/components/ui/SafeImage";
import { COMPLETE_MENU_CATEGORIES } from "@/lib/constants";
import { IndianBorderStrip, MiniMandala, RangoliDiamond, Lotus } from "@/components/ui/IndianDoodles";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter items by category tab
  const filteredCategories = useMemo(() => {
    return COMPLETE_MENU_CATEGORIES.map((cat) => {
      if (selectedCategory !== "all" && cat.id !== selectedCategory) {
        return { ...cat, items: [] };
      }
      return cat;
    }).filter((cat) => cat.items.length > 0);
  }, [selectedCategory]);

  // Handle category selection with smooth scroll
  const handleCategoryClick = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== "all") {
      setTimeout(() => {
        const el = document.getElementById(`category-${categoryId}`);
        if (el) {
          const navHeight = 140; // nav + category bar height
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: "smooth",
          });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-beige text-espresso">
      <Navigation />

      {/* Hero / Header Banner */}
      <section className="pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 bg-sand border-b border-espresso relative overflow-hidden">
        {/* Background Doodles */}
        <div className="absolute top-10 right-10 opacity-20 animate-slow-spin hidden md:block">
          <MiniMandala size={120} opacity={0.25} />
        </div>
        <div className="absolute bottom-6 left-8 opacity-20 hidden md:block">
          <Lotus size={80} opacity={0.2} />
        </div>

        <div className="section-wrap relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-cinnamon mb-2">
            — complete roastery & kitchen offerings —
          </p>
          <h1 className="font-yanone text-5xl xs:text-6xl sm:text-7xl md:text-8xl uppercase tracking-tighter mb-4 text-espresso">
            The Complete Menu
          </h1>
          <p className="font-sans text-sm sm:text-base text-chocolate leading-relaxed mb-6 sm:mb-8">
            From single-origin estate brews and spiced kulhad chai to artisanal sourdough toasties, freshly baked mawa cakes, and wood-fired pizzas.
          </p>
          <div className="flex justify-center mb-6 sm:mb-8">
            <IndianBorderStrip width={280} opacity={0.35} />
          </div>

          {/* Dietary Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-sans text-chocolate/80 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-green-700 bg-beige flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
              </span>
              Vegetarian
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-emerald-600 bg-beige flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </span>
              100% Plant Based (Vegan)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full border-2 border-red-700 bg-beige flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-700" />
              </span>
              Non-Vegetarian
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Category Nav Pill Bar */}
      <section className="sticky top-[65px] sm:top-[73px] z-30 bg-beige/95 backdrop-blur-md border-b border-espresso shadow-sm">
        <div className="section-wrap py-2.5 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => handleCategoryClick("all")}
              className={`font-yanone text-base sm:text-lg uppercase tracking-wider px-3.5 sm:px-4 py-1 sm:py-1.5 border transition-all ${
                selectedCategory === "all"
                  ? "bg-cinnamon text-beige border-cinnamon shadow-[2px_2px_0px_rgba(139,94,60,0.3)]"
                  : "bg-sand text-espresso border-espresso/20 hover:border-espresso hover:bg-espresso/5"
              }`}
            >
              All Items
            </button>

            {COMPLETE_MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`font-yanone text-base sm:text-lg uppercase tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 border transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-cinnamon text-beige border-cinnamon shadow-[2px_2px_0px_rgba(139,94,60,0.3)]"
                    : "bg-sand text-espresso border-espresso/20 hover:border-espresso hover:bg-espresso/5"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories List */}
      <section className="section-pad">
        <div className="section-wrap max-w-6xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-sand border-2 border-espresso/20 p-6 sm:p-8">
              <RangoliDiamond size={36} opacity={0.4} />
              <h3 className="font-yanone text-2xl sm:text-3xl uppercase tracking-wider text-espresso mt-3 mb-2">
                No menu items found
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                }}
                className="btn-primary"
              >
                Reset Category Filter
              </button>
            </div>
          ) : (
            <div className="space-y-14 sm:space-y-20">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  id={`category-${category.id}`}
                  className="scroll-mt-32 sm:scroll-mt-36"
                >
                  {/* Category Header Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-espresso pb-3 mb-6">
                    <div>
                      <h2 className="font-yanone text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-espresso mb-1">
                        {category.title}
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-chocolate/80 italic">
                        {category.description}
                      </p>
                    </div>
                    <span className="font-yanone text-xs sm:text-sm tracking-widest text-cinnamon uppercase mt-2 sm:mt-0">
                      {category.items.length} Options
                    </span>
                  </div>

                  {/* Category Items Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-4 md:gap-6">
                    {category.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="bg-sand border-2 border-espresso/25 p-2 sm:p-4 md:p-5 flex flex-col sm:flex-row gap-2 sm:gap-4 hover:border-espresso hover:shadow-[4px_4px_0px_rgba(75,54,33,0.12)] transition-all duration-300 group"
                      >
                        {/* Food Photography Image */}
                        <div className="relative w-full sm:w-32 md:w-36 h-24 sm:h-36 shrink-0 border border-espresso/20 bg-beige overflow-hidden">
                          <SafeImage
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, 150px"
                          />

                          {/* Popular badge */}
                          {item.popular && (
                            <span className="absolute top-1 left-1 bg-cinnamon text-beige text-[7px] sm:text-[9px] font-yanone uppercase tracking-widest px-1 sm:px-1.5 py-0.5 z-10">
                              Popular
                            </span>
                          )}

                          {/* Dietary badge */}
                          <span
                            className={`absolute top-1 right-1 z-10 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border-2 flex items-center justify-center bg-beige ${
                              item.dietary === "veg"
                                ? "border-green-700"
                                : item.dietary === "vegan"
                                ? "border-emerald-600"
                                : "border-red-700"
                            }`}
                          >
                            <span
                              className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${
                                item.dietary === "veg"
                                  ? "bg-green-700"
                                  : item.dietary === "vegan"
                                  ? "bg-emerald-600"
                                  : "bg-red-700"
                              }`}
                            />
                          </span>
                        </div>

                        {/* Text Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-2 mb-0.5 sm:mb-1">
                              <h3 className="font-yanone text-sm sm:text-xl md:text-2xl uppercase tracking-wider text-espresso group-hover:text-cinnamon transition-colors leading-tight">
                                {item.name}
                              </h3>
                              <span className="font-yanone text-sm sm:text-xl md:text-2xl text-cinnamon font-bold shrink-0">
                                {item.price}
                              </span>
                            </div>

                            <p className="font-sans text-[9px] sm:text-xs text-chocolate/80 leading-relaxed mb-1.5 sm:mb-3 line-clamp-2 sm:line-clamp-none">
                              {item.description}
                            </p>
                          </div>

                          <div className="pt-1.5 sm:pt-2 border-t border-espresso/10 flex items-center justify-between">
                            <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-widest text-cinnamon">
                              {item.dietary === "veg"
                                ? "Veg"
                                : item.dietary === "vegan"
                                ? "Vegan"
                                : "Non-Veg"}
                            </span>
                            <span className="font-sans text-[9px] sm:text-[11px] font-semibold text-espresso opacity-70 group-hover:opacity-100 hidden sm:inline">
                              Handcrafted Fresh
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Top */}
      <div className="py-6 sm:py-8 text-center bg-sand border-t border-espresso">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-outline text-base"
        >
          Back to Top
        </button>
      </div>

      <Footer />
    </main>
  );
}
