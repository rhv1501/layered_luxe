"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "../data/products";

function CatalogueDownloadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="rounded-lg bg-surface border border-accent/30 p-6 w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Download Catalogue
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              Choose the catalogue type you want to download:
            </p>
            <div className="space-y-3">
              <a
                href="/corporate.pdf"
                download
                onClick={onClose}
                className="block w-full rounded-md border border-accent/30 px-4 py-2 text-center text-sm font-medium text-text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
              >
                Corporate Catalogue
              </a>
              <a
                href="/school.pdf"
                download
                onClick={onClose}
                className="block w-full rounded-md border border-accent/30 px-4 py-2 text-center text-sm font-medium text-text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
              >
                School Catalogue
              </a>
            </div>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-md border border-accent/30 px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

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
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);

  return (
    <>
      <CatalogueDownloadModal
        isOpen={catalogueModalOpen}
        onClose={() => setCatalogueModalOpen(false)}
      />
      <footer className="border-t border-accent/20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-1 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-md overflow-hidden scale-150 flex-shrink-0">
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

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-text-secondary line-clamp-4">
                Layered Luxe is a premium bulk apparel manufacturer. We
                specialise in custom T-shirts, uniforms, corporate wear,
                jerseys, hoodies, and merchandise. With 13+ years of expertise
                across Indore, Tiruppur, and Chennai, we deliver quality
                nationwide.
              </p>

              <div className="mt-4 sm:mt-6">
                <button
                  onClick={() => setCatalogueModalOpen(true)}
                  className="inline-flex items-center rounded-md border border-accent/30 px-3 py-2 text-sm font-medium text-text-primary hover:bg-accent/10 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                >
                  Download Catalogue →
                </button>
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

          <div className="mt-8 sm:mt-10 border-t border-accent/20 pt-6 sm:pt-8">
            <div className="flex flex-col gap-6">
              <p className="text-xs sm:text-sm text-text-secondary text-center sm:text-left">
                © {year} Layered Luxe. All rights reserved. Made in India.
              </p>
              <div className="flex flex-col gap-4 sm:gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto text-center sm:text-left inline-flex items-center justify-center sm:justify-start rounded-md border border-accent/30 px-3 py-2 text-xs sm:text-sm font-medium text-text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    Get a Quote
                  </Link>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-text-secondary justify-center sm:justify-start">
                    <a
                      href="tel:+919087095955"
                      className="hover:text-text-primary transition"
                    >
                      +91-90870-95955
                    </a>
                    <span className="hidden sm:inline text-text-secondary/50">
                      |
                    </span>
                    <a
                      href="tel:+919047999633"
                      className="hover:text-text-primary transition"
                    >
                      +91-90479-99633
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="hidden sm:inline text-text-secondary/50 mr-3">
                    |
                  </span>
                  <a
                    href="mailto:layeredluxe.vs@gmail.com"
                    className="text-xs sm:text-sm text-text-secondary hover:text-text-primary transition"
                  >
                    layeredluxe.vs@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
