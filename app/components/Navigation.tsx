"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Fabrics", href: "/fabrics" },
    { name: "Quality", href: "/quality" },
    { name: "Customisation", href: "/customisation" },
    { name: "Blogs", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-md shadow-lg border-b border-secondary"
            : "bg-background/95 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative h-10 w-10 rounded-xl bg-accent flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <span className="text-lg font-bold text-primary">LL</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-text-primary">
                    Layered Luxe
                  </span>
                  <div className="text-xs font-medium text-text-secondary">
                    Premium Apparel
                  </div>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium transition-all duration-300 group py-2 px-3 rounded-lg text-text-primary hover:text-accent hover:bg-surface whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              <div className="flex items-center space-x-4 ml-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2.5 rounded-xl bg-accent text-sm font-semibold text-primary hover:bg-accent/90 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-3 rounded-xl text-text-primary hover:bg-surface transition-all duration-300"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute block w-6 h-0.5 bg-text-primary top-2"></span>
                  <span className="absolute block w-6 h-0.5 bg-text-primary top-3.5"></span>
                  <span className="absolute block w-6 h-0.5 bg-text-primary top-5"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeSidebar}
          ></div>

          <div className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-surface shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-secondary">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">LL</span>
                </div>
                <div>
                  <span className="font-bold text-lg text-text-primary">
                    Layered Luxe
                  </span>
                  <div className="text-xs text-text-secondary font-medium">
                    Premium Apparel
                  </div>
                </div>
              </div>

              <button
                onClick={closeSidebar}
                className="p-2 rounded-xl text-text-secondary hover:bg-background"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-6 py-8 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeSidebar}
                  className="group flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium text-text-secondary hover:bg-background hover:text-text-primary"
                >
                  <span>{item.name}</span>
                  <svg
                    className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-4 py-4 rounded-xl bg-accent text-primary font-semibold hover:bg-accent/90"
                  onClick={closeSidebar}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
