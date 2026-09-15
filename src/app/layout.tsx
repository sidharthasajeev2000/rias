import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rias — Bespoke Tailoring Atelier",
  description:
    "Rias is a craft-focused bespoke tailoring atelier offering custom suits, alterations, fittings, bridal and formal wear, and thoughtful restyling.",
  keywords: [
    "bespoke tailoring",
    "custom suits",
    "alterations",
    "bridal alterations",
    "atelier",
    "Rias",
  ],
  openGraph: {
    title: "Rias — Bespoke Tailoring Atelier",
    description:
      "Clothes shaped to you. An intimate atelier for custom suits, alterations, and formal wear.",
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
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
