"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/constants";
import { IndianBorderStrip, Lotus, Paisley } from "@/components/ui/IndianDoodles";

export function About() {
  return (
    <section
      id="about"
      className="section-pad bg-sand text-espresso relative overflow-hidden border-b border-espresso"
    >
      {/* Decorative background doodles */}
      <div className="absolute -left-6 top-16 opacity-20 animate-slow-spin hidden md:block">
        <Lotus size={80} opacity={0.25} />
      </div>
      <div className="absolute right-6 bottom-12 opacity-20 rotate-12 hidden md:block">
        <Paisley size={70} opacity={0.2} />
      </div>

      <div className="section-wrap relative z-10">
        
        {/* Section Tag & Border */}
        <div className="flex items-center justify-between border-b border-espresso/20 pb-4 mb-12">
          <span className="font-yanone text-lg tracking-[0.25em] text-cinnamon uppercase">
            01 / ABOUT US
          </span>
          <IndianBorderStrip width={180} opacity={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6">
            <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tight leading-[0.9] mb-6">
              Rooted in Tradition,<br />Refined by Craft
            </h2>

            <p className="font-sans text-lg text-chocolate leading-relaxed mb-6">
              Caffè Florian was born at the intersection of India’s rich tea and coffee heritage and Scandinavian minimalist design. We believe that true luxury lies in restraint — unhurried brewing, honest ingredients, and quiet spaces that invite contemplation.
            </p>

            <p className="font-sans text-base text-chocolate/80 leading-relaxed mb-8">
              From shade-grown single-origin Arabicas harvested in the misty hills of Chikmagalur to slow-cooked masala chai brewed in authentic clay kulhads, every offering at our counter honors time-tested artisan methods.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-espresso/20 pt-6">
              <div>
                <span className="font-yanone text-3xl text-cinnamon block">100%</span>
                <span className="font-sans text-xs uppercase tracking-widest text-chocolate/70">
                  Single-Origin Arabica
                </span>
              </div>
              <div>
                <span className="font-yanone text-3xl text-cinnamon block">In-House</span>
                <span className="font-sans text-xs uppercase tracking-widest text-chocolate/70">
                  Artisanal Bakery & Bakes
                </span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] border-4 border-espresso p-3 bg-beige shadow-[12px_12px_0px_rgba(75,54,33,0.1)]">
              <SafeImage
                src={IMAGES.about}
                alt="Café interior and brewing bar"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-4 -right-4 bg-espresso text-beige px-4 py-2 font-yanone text-lg uppercase tracking-wider">
                Crafted Daily
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
