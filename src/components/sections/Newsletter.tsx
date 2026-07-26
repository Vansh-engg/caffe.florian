"use client";

import { useState, FormEvent } from "react";
import { RangoliDiamond, MiniMandala, IndianBorderStrip } from "@/components/ui/IndianDoodles";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section-pad bg-sand text-espresso relative overflow-hidden">
      {/* Indian doodles */}
      <div className="absolute top-8 left-8 opacity-25 animate-slow-spin hidden md:block">
        <MiniMandala size={80} opacity={0.2} />
      </div>
      <div className="absolute top-8 right-8 opacity-25 animate-float hidden md:block">
        <RangoliDiamond size={48} opacity={0.2} />
      </div>
      <div className="absolute bottom-8 left-[45%] opacity-20 animate-breathe hidden md:block">
        <RangoliDiamond size={36} opacity={0.18} />
      </div>
      <div className="section-wrap max-w-3xl mx-auto text-center relative z-10">
        
        <h2 className="font-yanone text-4xl md:text-5xl uppercase tracking-widest mb-3">
          Join the Club
        </h2>
        <div className="flex justify-center mb-4">
          <IndianBorderStrip width={220} opacity={0.3} />
        </div>
        <p className="font-sans text-sm md:text-base text-chocolate uppercase tracking-widest mb-10 max-w-lg mx-auto">
          Sign up to receive updates on limited roasts, tasting events, and exclusive releases.
        </p>

        {submitted ? (
          <div className="border-2 border-espresso bg-beige py-6 px-4">
            <p className="font-yanone text-2xl uppercase tracking-widest text-espresso">
              Welcome to the club.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL ADDRESS"
              required
              className="w-full flex-1 border-2 border-espresso bg-beige px-6 py-4 font-sans text-sm uppercase tracking-widest text-espresso placeholder:text-espresso/40 outline-none focus:bg-sand transition-colors mb-4 sm:mb-0 sm:border-r-0"
            />
            <button
              type="submit"
              className="btn-primary w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
