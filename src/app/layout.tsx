import type { Metadata } from "next";
import { Yanone_Kaffeesatz, Inter } from "next/font/google";
import "./globals.css";

const yanone = Yanone_Kaffeesatz({
  subsets: ["latin"],
  variable: "--font-yanone",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Caffè Florian | Boutique Coffee Roastery",
  description: "A premium boutique coffee roastery blending the warmth of luxury coffee houses with the restraint of Scandinavian interiors.",
  openGraph: {
    title: "Caffè Florian",
    description: "Boutique coffee roastery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${yanone.variable} ${inter.variable}`}>
      <body className="font-sans bg-beige text-espresso antialiased">
        {children}
      </body>
    </html>
  );
}
