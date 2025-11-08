import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-text-primary">
              Layered Luxe
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Complete uniform solutions for schools, colleges, corporates, and
              sports teams across India.
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

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
              Categories
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/products/menswear"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Men&apos;s Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/products/womenswear"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Women&apos;s Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/products/kidswear"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Kids&apos; Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/uniforms"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Uniforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/testimonials#portfolio"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  Testimonials
                </Link>
              </li>
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
              © 2025 Layered Luxe. All rights reserved. Made in India.
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
                href="tel:+91-XXXXXXXXXX"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                +91-XXXXXXXXXX
              </a>
              <span className="text-text-secondary/50">|</span>
              <a
                href="mailto:info@layeredluxe.com"
                className="text-sm text-text-secondary hover:text-text-primary"
              >
                info@layeredluxe.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
