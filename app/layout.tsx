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
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/favicon_io/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    other: { rel: "manifest", url: "/favicon_io/site.webmanifest" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <script
          type="application/ld+json"
          // JSON-LD for Organization with Instagram profile
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Layered Luxe",
              url: "https://www.thelayeredluxe.com",
              logo: "https://www.thelayeredluxe.com/favicon_io/favicon-32x32.png",
              sameAs: ["https://instagram.com/layeredluxe.vs"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          // JSON-LD for LocalBusiness with address and phone numbers
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Layered Luxe",
              url: "https://www.thelayeredluxe.com",
              telephone: [
                "+91-90870-95955",
                "+91-90479-99633"
              ],
              email: "layeredluxe.vs@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kilpauk",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN"
              },
            }),
          }}
        />
      </head>
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
