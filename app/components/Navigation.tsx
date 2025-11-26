"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Uniforms", href: "/uniforms" },
    { name: "Products", href: "/products" },
    // Fabrics temporarily removed from nav (folder retained for future use)
    { name: "Quality", href: "/quality" },
    { name: "Order Process", href: "/customisation" },
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
      {/* Announcement Bar - Sticky */}
      <div
        className="sticky top-0 z-50"
        style={{ backgroundColor: "#0b2c57", color: "#f4a624" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Single Row with scrollable contact info */}
          <div className="sm:hidden flex items-center justify-between py-2">
            {/* Contact Info - Scrollable on mobile */}
            <div className="flex items-center gap-4 overflow-x-auto flex-1 mr-3">
              <a
                href="tel:+919087095955"
                className="flex items-center hover:text-primary/80 transition-colors whitespace-nowrap text-xs"
              >
                <span className="font-medium">+91-90870-95955</span>
              </a>
              <a
                href="tel:+919047999633"
                className="flex items-center hover:text-primary/80 transition-colors whitespace-nowrap text-xs"
              >
                <span className="font-medium">+91-90479-99633</span>
              </a>
            </div>

            {/* Social Links - Compact on mobile */}
            <div className="flex items-center gap-2 shrink-0">
              {/* <a
                href="https://facebook.com/layeredluxe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-primary/80 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a> */}
              <a
                href="https://wa.me/919087095955"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary/80 transition-colors whitespace-nowrap text-xs"
              >
                <svg
                  className="w-3 h-3 mr-1.5 shrink-0 scale-150"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                </svg>
              </a>
              <a
                href="https://instagram.com/layeredluxe_by_vs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-primary/80 transition-colors "
              >
                <svg
                  className="w-3.5 h-3.5 scale-125"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop and Tablet Layout */}
          <div className="hidden sm:flex sm:items-center sm:justify-between py-2 gap-4">
            {/* Contact Info - Left on larger screens */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="tel:+919087095955"
                className="flex items-center hover:text-primary/80 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+91-90870-95955</span>
              </a>
              <a
                href="tel:+919047999633"
                className="flex items-center hover:text-primary/80 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+91-90479-99633</span>
              </a>
            </div>

            {/* Social Links - Right aligned */}
            <div className="flex items-center gap-3">
              {/* <a
                href="https://facebook.com/layeredluxe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-primary/80 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a> */}
              <a
                href="https://wa.me/919087095955"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary/80 transition-colors scale-150 "
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                </svg>
              </a>
              <a
                href="https://instagram.com/layeredluxe_by_vs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-primary/80 transition-colors scale-130"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-gray-200"
            : "bg-white"
        }`}
        style={{ top: "38px" }} // Account for announcement bar height
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 sm:h-28 items-center justify-between">
            {/* Mobile Hamburger - Left */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
                style={{ color: "#0B2C57" }}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className="absolute block w-6 h-0.5 top-2"
                    style={{ backgroundColor: "#0B2C57" }}
                  ></span>
                  <span
                    className="absolute block w-6 h-0.5 top-3.5"
                    style={{ backgroundColor: "#0B2C57" }}
                  ></span>
                  <span
                    className="absolute block w-6 h-0.5 top-5"
                    style={{ backgroundColor: "#0B2C57" }}
                  ></span>
                </div>
              </button>
            </div>

            {/* Logo - Left on desktop, Center on mobile */}
            <div className="flex items-center lg:justify-start justify-center flex-1 lg:flex-initial">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="scale-[150%] md:scale-[230%] relative h-12 w-12 rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-[160%] md:group-hover:scale-[250%]">
                  <Image
                    src="/logo.png"
                    alt="Layered Luxe"
                    fill
                    className="object-cover transform scale-200"
                    fetchPriority="high"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
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
                  className="inline-flex items-center px-6 py-2.5 rounded-xl bg-primary text-sm font-semibold text-white hover:text-yellow-400 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile spacer to center logo */}
            <div className="lg:hidden w-14"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeSidebar}
          ></div>

          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative h-12 w-12 rounded-lg overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Layered Luxe"
                    fill
                    className="object-cover transform scale-125"
                  />
                </div>
                <div>
                  <span
                    className="font-bold text-lg"
                    style={{ color: "#0B2C57" }}
                  >
                    Layered Luxe
                  </span>
                  <div
                    className="text-xs font-medium"
                    style={{ color: "#234D91" }}
                  >
                    Premium Apparel
                  </div>
                </div>
              </div>

              <button
                onClick={closeSidebar}
                className="p-2 rounded-xl hover:bg-gray-100"
                style={{ color: "#234D91" }}
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

            {/* Scrollable Navigation */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeSidebar}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium hover:bg-gray-100 transition-colors mb-2"
                  style={{ color: "#234D91" }}
                >
                  <span>{item.name}</span>
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#F4A624" }}
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

              {/* Mobile Contact Info in Sidebar */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4
                  className="text-sm font-semibold mb-4"
                  style={{ color: "#0B2C57" }}
                >
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a
                    href="tel:+919087095955"
                    className="flex items-center px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                    style={{ color: "#234D91" }}
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm">+91-90870-95955</span>
                  </a>
                  <a
                    href="https://wa.me/919087095955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
                    style={{ color: "#234D91" }}
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                    </svg>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-gray-200">
                  {/* <a
                    href="https://facebook.com/layeredluxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl transition-colors hover:bg-yellow-500"
                    style={{
                      backgroundColor: "rgba(244, 166, 36, 0.1)",
                      color: "#F4A624",
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a> */}
                  <a
                    href="https://instagram.com/layeredluxe_by_vs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl transition-colors hover:bg-yellow-500"
                    style={{
                      backgroundColor: "rgba(244, 166, 36, 0.1)",
                      color: "#F4A624",
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Fixed Contact Button at Bottom */}
            <div className="p-6 border-t border-gray-200 shrink-0">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-4 py-4 rounded-xl font-semibold transition-colors"
                style={{ backgroundColor: "#F4A624", color: "#0B2C57" }}
                onClick={closeSidebar}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
