import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-slate-900">
              Layered Luxe
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Complete uniform solutions for schools, colleges, corporates, and
              sports teams across India.
            </p>
            <div className="mt-4">
              <a
                href="/catalogue.pdf"
                className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700"
                download
              >
                Download Catalogue →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/customisation"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Customisation
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Quality & Fabric
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Categories
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/products/school"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  School Uniforms
                </Link>
              </li>
              <li>
                <Link
                  href="/products/college"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  College Uniforms
                </Link>
              </li>
              <li>
                <Link
                  href="/products/corporate"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Corporate Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sports"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Sportswear
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Resources
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/testimonials#portfolio"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-slate-500">
              © 2025 Layered Luxe. All rights reserved. Made in India.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a
                href="/contact"
                className="text-sm text-slate-500 hover:text-slate-900"
              >
                Get a Quote
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="text-sm text-slate-500 hover:text-slate-900"
              >
                +91-XXXXXXXXXX
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="mailto:info@layeredluxe.com"
                className="text-sm text-slate-500 hover:text-slate-900"
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
