import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIAS — Kids Modeling & Children's Fashion",
  description:
    "RIAS is a cute kidswear and children's modeling brand — portfolio looks, party outfits, kids fittings, shoot styling, and little-star fashion moments.",
  keywords: [
    "kids modeling",
    "children's fashion",
    "kidswear",
    "kids outfits",
    "model portfolio",
    "party dresses kids",
    "RIAS",
  ],
  openGraph: {
    title: "RIAS — Kids Modeling & Children's Fashion",
    description:
      "Little stars, soft styles. Cute kidswear, portfolio looks, and styling for young models.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/rias/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
