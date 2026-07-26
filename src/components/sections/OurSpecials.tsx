"use client";

import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { SPECIALS_DATA } from "@/lib/constants";
import { IndianBorderStrip, MiniMandala, RangoliDiamond } from "@/components/ui/IndianDoodles";

export function OurSpecials() {
  return (
    <section
      id="specials"
      className="section-pad bg-beige text-espresso relative overflow-hidden border-b border-espresso"
    >
      {/* Background Doodles */}
      <div className="absolute top-10 right-8 opacity-20 animate-slow-spin hidden md:block">
        <MiniMandala size={90} opacity={0.25} />
      </div>
      <div className="absolute bottom-10 left-8 opacity-15 hidden md:block">
        <RangoliDiamond size={50} opacity={0.2} />
      </div>

      <div className="section-wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-espresso/20 pb-4 mb-12">
          <span className="font-yanone text-lg tracking-[0.25em] text-cinnamon uppercase">
            02 / OUR SPECIALS
          </span>
          <IndianBorderStrip width={180} opacity={0.3} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-cinnamon mb-2">
            Handcrafted Signature Selection
          </p>
          <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tighter mb-4">
            Curated Specials
          </h2>
          <p className="font-sans text-base text-chocolate leading-relaxed">
            A tight collection of our most beloved brews, artisanal toasties, and traditional sweets — prepared fresh upon every order.
          </p>
        </div>

        {/* Specials Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {SPECIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="group bg-sand border-2 border-espresso/30 p-2 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-espresso hover:shadow-[6px_6px_0px_rgba(75,54,33,0.15)]"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-espresso/20 mb-4 bg-beige">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-espresso text-beige text-[10px] font-yanone uppercase tracking-widest px-2.5 py-1 z-10">
                      {item.badge}
                    </span>
                  )}

                  {/* Dietary Indicator */}
                  <span
                    className={`absolute top-2 right-2 z-10 w-4 h-4 rounded-full border-2 flex items-center justify-center bg-beige ${
                      item.dietary === "veg"
                        ? "border-green-700"
                        : item.dietary === "vegan"
                        ? "border-emerald-600"
                        : "border-red-700"
                    }`}
                    title={
                      item.dietary === "veg"
                        ? "Vegetarian"
                        : item.dietary === "vegan"
                        ? "Vegan"
                        : "Non-Vegetarian"
                    }
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.dietary === "veg"
                          ? "bg-green-700"
                          : item.dietary === "vegan"
                          ? "bg-emerald-600"
                          : "bg-red-700"
                      }`}
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 sm:mb-2 gap-0.5 sm:gap-2">
                  <h3 className="font-yanone text-base sm:text-2xl uppercase tracking-wider text-espresso group-hover:text-cinnamon transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-yanone text-base sm:text-2xl text-cinnamon font-bold shrink-0">
                    {item.price}
                  </span>
                </div>

                <p className="font-sans text-[10px] sm:text-xs text-chocolate/80 leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-2 sm:pt-3 border-t border-espresso/15 flex items-center justify-between">
                <span className="font-sans text-[8px] sm:text-[10px] uppercase tracking-widest text-cinnamon">
                  {item.dietary === "veg"
                    ? "• Veg"
                    : item.dietary === "vegan"
                    ? "• Vegan"
                    : "• Non-Veg"}
                </span>
                <span className="font-yanone text-xs sm:text-sm uppercase tracking-wider text-espresso opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                  Order Fresh →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA Button */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-6">
            <IndianBorderStrip width={300} opacity={0.3} />
          </div>
          <Link
            href="/menu"
            className="btn-primary text-xl py-4 px-10 shadow-[4px_4px_0px_rgba(75,54,33,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            View Full Menu →
          </Link>
        </div>

      </div>
    </section>
  );
}
