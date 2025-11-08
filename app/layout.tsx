import type { Metadata } from "next";
import { Inter, Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Layered Luxe - Let's Build Apparel Success Together",
  description:
    "T-Shirts, Hoodies, Workwear & More — Designed for Comfort, Style, and Performance. Premium apparel manufacturing in India with global standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} ${dmSans.variable} font-sans antialiased bg-background text-text-primary`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
