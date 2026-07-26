import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { OurSpecials } from "@/components/sections/OurSpecials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reservations } from "@/components/sections/Reservations";
import { VisitUs } from "@/components/sections/VisitUs";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige">
      <Navigation />
      <Hero />
      <About />
      <OurSpecials />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Reservations />
      <VisitUs />
      <Newsletter />
      <Footer />
    </main>
  );
}
