"use client";

import { useState } from "react";
import { PeacockFeather, MiniMandala, IndianBorderStrip } from "@/components/ui/IndianDoodles";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["8:00 AM", "9:30 AM", "11:00 AM", "1:00 PM", "3:30 PM", "6:00 PM", "8:00 PM"];

export function Reservations() {
  const [selectedDay, setSelectedDay] = useState(2);
  const [selectedTime, setSelectedTime] = useState(1);
  const [guests, setGuests] = useState(2);

  return (
    <section id="reservations" className="section-pad bg-sand text-espresso border-y border-espresso relative overflow-hidden">
      {/* Indian doodles */}
      <div className="absolute -right-8 top-12 opacity-30 animate-float hidden lg:block">
        <PeacockFeather size={130} opacity={0.28} />
      </div>
      <div className="absolute left-6 bottom-12 opacity-25 animate-slow-spin hidden md:block">
        <MiniMandala size={75} opacity={0.22} />
      </div>
      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 pt-4">
            <h2 className="font-yanone text-5xl md:text-7xl uppercase tracking-tighter mb-4">
              Reserve<br />Your Table
            </h2>
            <div className="mb-4">
              <IndianBorderStrip width={240} opacity={0.28} />
            </div>
            <p className="font-sans text-lg text-chocolate leading-relaxed max-w-sm">
              Secure a spot in our tasting room. We recommend booking in advance, especially on weekends, to ensure an uninterrupted experience.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 border-2 border-espresso bg-beige p-8 md:p-12">
            <h3 className="font-yanone text-3xl uppercase tracking-widest text-espresso mb-6">
              July 2026
            </h3>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2 mb-8">
              {DAYS.map((day, i) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(i)}
                  className={`
                    flex flex-col items-center justify-center py-3 border-2 transition-colors
                    ${selectedDay === i
                      ? "border-espresso bg-espresso text-beige"
                      : "border-espresso/30 bg-transparent text-espresso hover:border-espresso hover:bg-sand"}
                  `}
                >
                  <span className="font-sans text-xs uppercase tracking-widest opacity-80 mb-1">{day}</span>
                  <span className="font-yanone text-xl">{20 + i}</span>
                </button>
              ))}
            </div>

            {/* Times */}
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-chocolate mb-4">
              Select Time
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {TIMES.map((time, i) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(i)}
                  className={`
                    px-4 py-2 border-2 font-sans text-sm tracking-widest transition-colors
                    ${selectedTime === i
                      ? "border-espresso bg-espresso text-beige"
                      : "border-espresso/30 bg-transparent text-espresso hover:border-espresso"}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Guests */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-espresso/20 pt-6 mb-8 gap-4">
              <span className="font-sans text-sm font-bold uppercase tracking-widest text-chocolate">
                Party Size
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-10 h-10 border-2 border-espresso flex items-center justify-center font-sans text-xl hover:bg-espresso hover:text-beige transition-colors"
                  aria-label="Decrease guests"
                >
                  −
                </button>
                <span className="w-8 text-center font-yanone text-3xl">{guests}</span>
                <button
                  type="button"
                  onClick={() => setGuests(Math.min(12, guests + 1))}
                  className="w-10 h-10 border-2 border-espresso flex items-center justify-center font-sans text-xl hover:bg-espresso hover:text-beige transition-colors"
                  aria-label="Increase guests"
                >
                  +
                </button>
              </div>
            </div>

            <button type="button" className="btn-primary w-full">
              Confirm Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
