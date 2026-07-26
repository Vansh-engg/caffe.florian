"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { RangoliDiamond } from "@/components/ui/IndianDoodles";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  // Track which section is in view on the homepage via IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const sectionIds = ["hero", "about", "specials", "gallery", "testimonials", "reservations", "visit"];
    
    // Use a map to track visibility ratios for more accurate detection
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest visibility ratio
        let maxRatio = 0;
        let activeId = "";
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            activeId = id;
          }
        });

        if (activeId) {
          setActiveHash(`#${activeId}`);
        }
      },
      {
        // Multiple thresholds for smoother tracking
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-80px 0px -30% 0px",
      }
    );

    // Slight delay to ensure DOM is painted
    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  const isActive = useCallback(
    (href: string) => {
      // Menu page link
      if (href === "/menu") return pathname === "/menu";
      // Home link — active when at top (hero) or no hash matched
      if (href === "/") {
        return pathname === "/" && (activeHash === "" || activeHash === "#hero");
      }
      // Section links on homepage
      if (pathname === "/" && href.startsWith("/#")) {
        return activeHash === href.replace("/", "");
      }
      return false;
    },
    [pathname, activeHash]
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-beige/95 backdrop-blur-sm border-b border-espresso">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <RangoliDiamond size={22} opacity={0.6} />
          <Link
            href="/"
            className="font-yanone text-3xl font-bold uppercase tracking-tight text-espresso transition-opacity hover:opacity-80"
          >
            Caffè Florian
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-yanone text-lg uppercase tracking-widest transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-cinnamon border-b-2 border-cinnamon pb-0.5"
                    : "text-chocolate hover:text-cinnamon"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/menu" className="btn-outline text-sm py-2 px-4">
            Full Menu
          </Link>
          <Link href="/#reservations" className="btn-primary text-sm py-2 px-4">
            Book Table
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-2 border-espresso text-espresso lg:hidden hover:bg-espresso hover:text-beige transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {/* Hamburger / Close icon — no emoji */}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer — two-column grid for compact display */}
      {menuOpen && (
        <div className="border-b border-espresso bg-sand lg:hidden animate-in fade-in duration-200">
          <div className="px-4 py-4 sm:px-8">
            <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-espresso/10">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2.5 font-yanone text-xl uppercase tracking-widest transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-cinnamon font-semibold"
                        : "text-espresso hover:text-cinnamon"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex gap-3">
              <Link
                href="/menu"
                onClick={() => setMenuOpen(false)}
                className="btn-outline flex-1 text-center text-base py-2"
              >
                Full Menu
              </Link>
              <Link
                href="/#reservations"
                onClick={() => setMenuOpen(false)}
                className="btn-primary flex-1 text-center text-base py-2"
              >
                Book Table
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
