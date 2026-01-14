import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "May Star Enterprise - Premier Authentic Chinese Cuisine",
  description: "Established in 2007, May Star Restaurant is a premier culinary destination in Indonesia, recognized for its authentic Chinese cuisine and commitment to quality. Blending traditional Cantonese heritage with modern dining concepts.",
  keywords: [
    "May Star",
    "Chinese Restaurant",
    "Cantonese Cuisine",
    "Dim Sum",
    "Live Seafood",
    "Chinese BBQ",
    "Fine Dining",
    "Jakarta Restaurant",
    "Authentic Chinese Food"
  ],
  authors: [{ name: "May Star Enterprise" }],
  openGraph: {
    title: "May Star Enterprise - Premier Authentic Chinese Cuisine",
    description: "Experience authentic Cantonese excellence with premium dim sum, live seafood, and Chinese BBQ since 2007.",
    type: "website",
    locale: "id_ID",
    siteName: "May Star Enterprise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
