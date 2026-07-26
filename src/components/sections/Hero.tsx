"use client";

import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { IMAGES } from "@/lib/constants";
import {
  Paisley,
  Lotus,
  MiniMandala,
  PeacockFeather,
  IndianBorderStrip,
} from "@/components/ui/IndianDoodles";

const STICKY_NOTES = [
  {
    image: IMAGES.stickyChaiCup,
    alt: "Masala chai cup",
    label: "Masala Chai",
    caption: "brewed with love",
    rotate: "-3deg",
    top: "8%",
    right: "8%",
    width: "w-36 md:w-44",
    // Mobile-specific positioning (right column)
    mobileTop: "2%",
    mobileRight: "-2%",
    mobileWidth: "w-[42%]",
    bgColor: "#F5EFE6",
  },
  {
    image: IMAGES.stickyBun,
    alt: "Bun maska",
    label: "Bun Maska",
    caption: "warm & buttery",
    rotate: "4deg",
    top: "38%",
    right: "2%",
    width: "w-32 md:w-40",
    mobileTop: "42%",
    mobileRight: "0%",
    mobileWidth: "w-[38%]",
    bgColor: "#E8DDCF",
  },
  {
    image: IMAGES.stickySandwich,
    alt: "Paneer tikka sandwich",
    label: "Tikka Sandwich",
    caption: "spicy & toasty",
    rotate: "-2deg",
    top: "62%",
    right: "12%",
    width: "w-34 md:w-42",
    mobileTop: "74%",
    mobileRight: "5%",
    mobileWidth: "w-[36%]",
    bgColor: "#F5EFE6",
  },
  {
    image: IMAGES.stickySweets,
    alt: "Indian sweets",
    label: "Mithai",
    caption: "little treats, big joy",
    rotate: "3deg",
    top: "22%",
    right: "32%",
    width: "w-28 md:w-36",
    mobileTop: "24%",
    mobileRight: "28%",
    mobileWidth: "w-[30%]",
    bgColor: "#E8DDCF",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] sm:min-h-[100dvh] flex items-center bg-beige pt-20 pb-12 overflow-hidden"
    >
      {/* ── Scattered Indian doodles ── */}
      <div className="absolute left-2 top-24 opacity-40 animate-slow-spin hidden sm:block">
        <MiniMandala size={80} opacity={0.25} />
      </div>
      <div className="absolute -right-4 bottom-20 opacity-30 rotate-12 animate-float-delayed hidden sm:block">
        <Paisley size={90} opacity={0.25} />
      </div>
      <div className="absolute left-6 bottom-12 opacity-30 animate-breathe hidden sm:block">
        <Lotus size={60} opacity={0.25} />
      </div>

      <div className="section-wrap relative w-full flex flex-col justify-center">

        {/* ── Mobile: Sticky note photos floating on the right blank space ── */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] sm:w-[50%] lg:hidden pointer-events-none z-[1]">
          {STICKY_NOTES.map((note, i) => (
            <div
              key={i}
              className={`absolute ${note.mobileWidth} opacity-75 sm:opacity-85`}
              style={{
                top: note.mobileTop,
                right: note.mobileRight,
                transform: `rotate(${note.rotate})`,
              }}
            >
              <div
                className="border border-espresso/20 p-1.5 shadow-[3px_3px_0px_rgba(75,54,33,0.1)] relative"
                style={{ backgroundColor: note.bgColor }}
              >
                {/* Tape strip */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-camel/30 border border-camel/15 z-10" />
                <div className="relative aspect-square overflow-hidden border border-espresso/15 bg-sand/30">
                  <SafeImage
                    src={note.image}
                    alt={note.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div className="pt-1 px-0.5">
                  <p className="font-yanone text-[10px] sm:text-xs text-espresso uppercase tracking-wider leading-tight">
                    {note.label}
                  </p>
                  <p className="font-sans text-[7px] sm:text-[8px] text-cinnamon uppercase tracking-widest">
                    {note.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Left side: Text content ── */}
        <div className="relative z-10 max-w-[55%] sm:max-w-[50%] lg:max-w-xl">
          <div className="mb-4 sm:mb-6">
            <IndianBorderStrip width={240} opacity={0.35} />
          </div>

          <p className="font-sans text-xs uppercase tracking-[0.25em] text-cinnamon mb-3">
            Est. Mumbai — 2026
          </p>

          <h1 className="font-yanone text-5xl xs:text-6xl sm:text-[90px] md:text-[110px] lg:text-[125px] leading-[0.88] text-espresso uppercase tracking-tighter mb-6">
            The Art<br />of the<br />Roast
          </h1>

          <div className="mb-6">
            <IndianBorderStrip width={280} opacity={0.3} />
          </div>

          <p className="font-sans text-sm sm:text-lg text-chocolate leading-relaxed max-w-md mb-8">
            Handcrafted chai, single-origin estate roasting, and quiet space to enjoy the perfect cup. Steeped in Indian tradition, served with Scandinavian restraint.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
            <Link href="/menu" className="btn-primary w-full sm:w-auto text-center">
              Explore Full Menu
            </Link>
            <Link href="/#reservations" className="btn-outline w-full sm:w-auto text-center">
              Reserve Table
            </Link>
          </div>
        </div>

        {/* ── Right side Desktop: Sticky note cutouts ── */}
        <div className="absolute right-0 top-0 bottom-0 w-[48%] hidden lg:block pointer-events-none">
          {STICKY_NOTES.map((note, i) => (
            <div
              key={i}
              className={`absolute ${note.width} group pointer-events-auto`}
              style={{
                top: note.top,
                right: note.right,
                transform: `rotate(${note.rotate})`,
              }}
            >
              {/* Sticky note card */}
              <div
                className="border-2 border-espresso/30 p-2 shadow-[6px_6px_0px_rgba(75,54,33,0.15)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:shadow-[8px_8px_0px_rgba(75,54,33,0.2)]"
                style={{ backgroundColor: note.bgColor }}
              >
                {/* Tape strip effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-camel/40 border border-camel/20 z-10" />

                {/* Safe Image */}
                <div className="relative aspect-square overflow-hidden border border-espresso/20 bg-sand/30">
                  <SafeImage
                    src={note.image}
                    alt={note.alt}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>

                {/* Label & caption */}
                <div className="pt-2 pb-1 px-1">
                  <p className="font-yanone text-lg text-espresso uppercase tracking-wider leading-tight">
                    {note.label}
                  </p>
                  <p className="font-sans text-[10px] text-cinnamon uppercase tracking-widest mt-0.5">
                    {note.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Extra doodle accents around sticky notes */}
          <div className="absolute right-[45%] top-[5%] animate-float">
            <PeacockFeather size={80} opacity={0.2} />
          </div>
          <div className="absolute right-[5%] bottom-[10%] animate-slow-spin">
            <MiniMandala size={60} opacity={0.18} />
          </div>
        </div>

      </div>
    </section>
  );
}
