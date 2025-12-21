"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "../data/products";

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const sectionId = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="md:col-span-1">
      <div className="flex items-center gap-2">
        <h4
          id={`${sectionId}-title`}
          className="text-sm font-semibold uppercase tracking-wide text-text-primary"
        >
          {title}
        </h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${sectionId}-content`}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center rounded-md border border-accent/30 px-2 py-1 text-xs text-text-secondary hover:text-text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40 md:hidden"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <div
        id={`${sectionId}-content`}
        role="region"
        aria-labelledby={`${sectionId}-title`}
        className={`${open ? "mt-4 block" : "mt-4 hidden"} md:block`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-md overflow-hidden scale-150">
                <Image
                  src="/logo.png"
                  alt="Layered Luxe"
                  fill
                  className="object-cover scale-200"
                />
              </div>
              <span className="font-bold text-lg text-text-primary">
                Layered Luxe
              </span>
            </Link>

            <p className="mt-4 text-sm text-text-secondary">
              Layered Luxe is a premium bulk apparel manufacturer. We specialise
              in custom T-shirts, uniforms, corporate wear, jerseys, hoodies,
              and merchandise. With 13+ years of expertise across Indore,
              Tiruppur, and Chennai, we deliver quality nationwide.
            </p>

            <div className="mt-6">
              <a
                href="/catalogue.pdf"
                className="inline-flex items-center rounded-md border border-accent/30 px-3 py-2 text-sm font-medium text-text-primary hover:bg-accent/10 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                download
              >
                Download Catalogue →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/customisation"
                  className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                >
                  Customisation
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                >
                  Quality & Fabric
                </Link>
              </li>
            </ul>
          </FooterSection>

          {/* Products */}
          <FooterSection title="Products">
            <ul className="space-y-2">
              {productsData.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact & Resources */}
          <FooterSection title="Resources">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 rounded"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        <div className="mt-10 border-t border-accent/20 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-text-secondary">
              © {year} Layered Luxe. All rights reserved. Made in India.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-accent/30 px-3 py-2 text-sm font-medium text-text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                Get a Quote
              </Link>
              <span className="hidden text-text-secondary/50 md:inline">|</span>
              <div className="flex items-center gap-3 whitespace-nowrap">
                <a
                  href="tel:+919087095955"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  +91-90870-95955
                </a>
                <a
                  href="tel:+919047999633"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  +91-90479-99633
                </a>
              </div>
              <span className="hidden text-text-secondary/50 md:inline">|</span>
              <a
                href="mailto:layeredluxe.vs@gmail.com"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                layeredluxe.vs@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
