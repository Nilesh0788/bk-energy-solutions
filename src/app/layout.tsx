import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bkenergysolutions.com'),
  title: "BK Energy Solutions | Authorised Helvar LED Driver Distributor | North India",
  description: "Authorised Helvar LED Driver distributor serving North India. Premium lighting components, DALI-2 drivers, constant current/voltage LED drivers. 15+ years technical expertise.",
  keywords: ["Helvar LED Drivers", "Helvar authorised distributor", "Helvar distributor North India", "LED drivers India", "DALI-2 LED drivers", "Constant current LED drivers", "Constant voltage LED drivers", "Lighting electronic components", "LED lighting components supplier", "BK Energy Solutions"],
  authors: [{ name: "BK Energy Solutions" }],
  openGraph: {
    title: "BK Energy Solutions | Authorised Helvar LED Driver Distributor",
    description: "Premium lighting components and authorised Helvar LED driver distribution for North India. Technical expertise, quality products, reliable service.",
    url: "https://www.bkenergysolutions.com",
    siteName: "BK Energy Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BK Energy Solutions - Premium Lighting Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BK Energy Solutions | Authorised Helvar LED Driver Distributor",
    description: "Premium lighting components and authorised Helvar LED driver distribution for North India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
