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
  title: "RIAS — Women & Girls Modeling",
  description:
    "RIAS is a women and girls modeling brand — kids and adult female models, portfolio looks, fittings, runway, pageants, and soft styling with a cute blush aesthetic.",
  keywords: [
    "women modeling",
    "girls modeling",
    "female models",
    "kids modeling",
    "adult modeling",
    "model portfolio",
    "runway",
    "pageants",
    "RIAS",
  ],
  openGraph: {
    title: "RIAS — Women & Girls Modeling",
    description:
      "All women. All ages. Soft styles for girls and women — portfolio, runway, pageants, and fittings.",
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
