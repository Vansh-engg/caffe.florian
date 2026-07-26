"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { PeacockFeather, RangoliDiamond, IndianBorderStrip } from "@/components/ui/IndianDoodles";

const EVENT_FEATURES = [
  "Curated tasting menus",
  "Exclusive space rental",
  "Bespoke event planning",
  "Capacity for up to 30 guests",
];

export function PrivateEvents() {
  return (
    <section id="events" className="section-pad bg-sand text-espresso relative overflow-hidden">
      {/* Indian doodles */}
      <div className="absolute top-10 left-8 opacity-30 animate-float hidden lg:block">
        <PeacockFeather size={110} opacity={0.28} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-25 rotate-12 animate-float-delayed hidden md:block">
        <RangoliDiamond size={56} opacity={0.22} />
      </div>
      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 relative aspect-[4/5] border-4 border-espresso p-2 bg-beige">
            <div className="relative w-full h-full">
              <Image
                src={IMAGES.events}
                alt="Private dining setting"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tighter mb-4">
              Private Events
            </h2>
            <div className="mb-6">
              <IndianBorderStrip width={280} opacity={0.28} />
            </div>
            <p className="font-sans text-lg text-chocolate leading-relaxed max-w-md mb-8">
              Elevate your next gathering in our private tasting room. Designed with the same restraint as our main space, it offers an intimate environment for workshops, dinners, and creative offsites.
            </p>
            
            <ul className="mb-10 space-y-4">
              {EVENT_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-4 border-b border-espresso/10 pb-2">
                  <span className="w-1.5 h-1.5 bg-espresso block" />
                  <span className="font-sans text-sm tracking-widest uppercase text-espresso">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a href="mailto:events@caffeflorian.com" className="btn-outline">
              Inquire Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
