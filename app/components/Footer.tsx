import Image from "next/image";
import Link from "next/link";
import { productsData } from "../data/products";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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

            <div className="mt-4">
              <a
                href="/catalogue.pdf"
                className="inline-flex items-center text-sm font-medium text-text-primary hover:text-accent"
                download
              >
                Download Catalogue →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/customisation"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Customisation
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Quality & Fabric
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
              Products
            </h4>
            <ul className="mt-4 space-y-2">
              {productsData.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              {/* Testimonials links removed per request (page retained for future use) */}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-accent/20 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-text-secondary">
              © {year} Layered Luxe. All rights reserved. Made in India.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a
                href="/contact"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                Get a Quote
              </a>
              <span className="text-text-secondary/50">|</span>
              <a
                href="tel:+919087095955"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                +91-90870-95955
              </a>
              <span className="text-text-secondary/50">|</span>
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
