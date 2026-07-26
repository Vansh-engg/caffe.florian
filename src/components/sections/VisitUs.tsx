"use client";

import { HOURS } from "@/lib/constants";
import { Lotus, MiniMandala, IndianBorderStrip, Paisley } from "@/components/ui/IndianDoodles";

export function VisitUs() {
  return (
    <section id="visit" className="section-pad bg-beige text-espresso border-b border-espresso relative overflow-hidden">
      {/* Indian doodles */}
      <div className="absolute top-12 right-[52%] opacity-20 animate-slow-spin hidden lg:block">
        <MiniMandala size={70} opacity={0.2} />
      </div>
      <div className="absolute bottom-10 left-6 opacity-25 animate-float-delayed hidden md:block">
        <Lotus size={60} opacity={0.22} />
      </div>
      <div className="absolute top-8 left-8 opacity-20 rotate-45 hidden md:block">
        <Paisley size={55} opacity={0.18} />
      </div>

      <div className="section-wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-espresso/20 pb-4 mb-12">
          <span className="font-yanone text-lg tracking-[0.25em] text-cinnamon uppercase">
            06 / LOCATION & HOURS
          </span>
          <IndianBorderStrip width={180} opacity={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 pt-2">
            <h2 className="font-yanone text-5xl md:text-6xl uppercase tracking-tighter mb-2">
              Visit The Roastery
            </h2>
            <p className="font-sans text-sm text-chocolate/80 mb-6">
              Located in the heart of SoHo. Walk-ins welcome for coffee & pastries.
            </p>

            <address className="not-italic mb-8 bg-sand border-2 border-espresso/20 p-6">
              <p className="font-yanone text-2xl uppercase tracking-wider text-espresso mb-1">
                Caffè Florian flagship
              </p>
              <p className="font-sans text-sm tracking-widest text-chocolate uppercase mb-1">
                42 Minimalist Way, SoHo
              </p>
              <p className="font-sans text-sm tracking-widest text-chocolate uppercase mb-4">
                New York, NY 10012
              </p>
              <a
                href="tel:+12125550172"
                className="font-yanone text-xl tracking-widest text-espresso hover:text-cinnamon transition-colors inline-block"
              >
                📞 +1 (212) 555-0172
              </a>
            </address>

            <div className="space-y-3 border-t border-espresso/20 pt-6">
              <h3 className="font-yanone text-xl uppercase tracking-wider text-cinnamon mb-4">
                Opening Hours
              </h3>
              {HOURS.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between items-baseline border-b border-espresso/10 pb-2"
                >
                  <span className="font-sans text-sm font-semibold uppercase tracking-widest text-chocolate">
                    {row.day}
                  </span>
                  <span className="font-yanone text-xl tracking-widest text-espresso">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 h-[420px] lg:h-full min-h-[420px] border-4 border-espresso bg-sand relative p-2 shadow-[8px_8px_0px_rgba(75,54,33,0.1)]">
            <div className="relative w-full h-full">
              <iframe
                title="Caffè Florian location map"
                src="https://maps.google.com/maps?q=SoHo+New+York&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
