"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { MiniMandala, Lotus, IndianBorderStrip, Paisley } from "@/components/ui/IndianDoodles";

const FOOTER_LINKS = {
  explore: [
    { label: "Our Story", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "Email Us", href: "mailto:hello@caffeflorian.com" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-espresso text-beige py-16 sm:py-24 border-t border-chocolate relative overflow-hidden">
      {/* Large background mandala watermark */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 animate-slow-spin hidden lg:block">
        <MiniMandala size={340} color="#C8A97E" opacity={0.15} />
      </div>
      {/* Corner lotus */}
      <div className="absolute left-8 top-10 opacity-15 animate-float hidden md:block">
        <Lotus size={80} color="#C8A97E" opacity={0.18} />
      </div>
      {/* Bottom-right paisley */}
      <div className="absolute right-6 bottom-8 opacity-10 rotate-12 hidden md:block">
        <Paisley size={70} color="#C8A97E" opacity={0.15} />
      </div>
      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-4">
            <Link href="/" className="font-yanone text-4xl uppercase tracking-tighter block mb-2">
              Caffè Florian
            </Link>
            <div className="mb-4">
              <IndianBorderStrip width={180} color="#C8A97E" opacity={0.4} />
            </div>
            <p className="font-sans text-sm tracking-widest text-beige/60 uppercase max-w-xs">
              The Art of the Roast. New York City.
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <p className="font-sans text-xs uppercase tracking-widest text-cinnamon mb-4">
                  {group}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                        <a
                          href={link.href}
                          className="font-yanone text-xl uppercase tracking-widest text-beige hover:text-cinnamon transition-colors"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="font-yanone text-xl uppercase tracking-widest text-beige hover:text-cinnamon transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-chocolate/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs uppercase tracking-widest text-beige/40">
            © {new Date().getFullYear()} Caffè Florian. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest text-beige/40 hover:text-cinnamon transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
