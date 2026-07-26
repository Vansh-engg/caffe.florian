"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { MiniMandala, Paisley, IndianBorderStrip, Lotus } from "@/components/ui/IndianDoodles";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-sand text-espresso relative overflow-hidden border-b border-espresso">
      {/* Indian doodles */}
      <div className="absolute -left-6 top-16 opacity-30 animate-slow-spin hidden md:block">
        <MiniMandala size={90} opacity={0.22} />
      </div>
      <div className="absolute right-8 bottom-16 opacity-25 animate-float hidden md:block">
        <Lotus size={60} opacity={0.2} />
      </div>
      <div className="absolute right-4 top-12 opacity-20 rotate-12 hidden lg:block">
        <Paisley size={70} opacity={0.18} />
      </div>
      <div className="section-wrap relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-espresso/20 pb-4 mb-12">
          <span className="font-yanone text-lg tracking-[0.25em] text-cinnamon uppercase">
            05 / GUEST VOICES
          </span>
          <IndianBorderStrip width={180} opacity={0.3} />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-cinnamon mb-2">
            Community Stories
          </p>
          <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tighter mb-4">
            Words From Our Table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <blockquote
              key={i}
              className="bg-beige border-2 border-espresso/20 p-8 flex flex-col justify-between transition-all duration-300 hover:border-espresso hover:-translate-y-1 shadow-[6px_6px_0px_rgba(75,54,33,0.08)]"
            >
              <div>
                <div className="flex gap-1 text-cinnamon mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <span key={starIndex} className="text-lg">★</span>
                  ))}
                </div>
                <p className="font-sans text-base md:text-lg text-chocolate leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <footer className="border-t border-espresso/15 pt-4 mt-auto">
                <p className="font-yanone text-2xl uppercase tracking-widest text-espresso">
                  {testimonial.author}
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-cinnamon mt-0.5">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
