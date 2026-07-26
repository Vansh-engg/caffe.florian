"use client";

import { WHY_CHOOSE_US_DATA } from "@/lib/constants";
import { IndianBorderStrip, PeacockFeather, RangoliDiamond } from "@/components/ui/IndianDoodles";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-pad bg-sand text-espresso relative overflow-hidden border-b border-espresso"
    >
      {/* Decorative Doodles */}
      <div className="absolute top-12 left-8 opacity-25 animate-float hidden md:block">
        <PeacockFeather size={100} opacity={0.3} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-20 hidden md:block">
        <RangoliDiamond size={55} opacity={0.25} />
      </div>

      <div className="section-wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-espresso/20 pb-4 mb-12">
          <span className="font-yanone text-lg tracking-[0.25em] text-cinnamon uppercase">
            03 / WHY CHOOSE US
          </span>
          <IndianBorderStrip width={180} opacity={0.3} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-cinnamon mb-2">
            The Florian Promise
          </p>
          <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tighter mb-4">
            Uncompromising Excellence
          </h2>
          <p className="font-sans text-base text-chocolate leading-relaxed">
            Four pillars that define our daily practice, from bean selection to the final sip.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.number}
              className="bg-beige border-2 border-espresso/20 p-8 flex flex-col justify-between relative transition-all duration-300 hover:border-espresso hover:-translate-y-1"
            >
              <div>
                <span className="font-yanone text-5xl font-bold text-cinnamon/40 block mb-4">
                  {item.number}
                </span>
                <h3 className="font-yanone text-2xl uppercase tracking-wider text-espresso mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-chocolate/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-espresso/15">
                <RangoliDiamond size={18} opacity={0.4} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
