import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title = "Let's Build Apparel Success Together",
  subtitle = "T-Shirts, Hoodies, Workwear & More — Designed for Comfort, Style, and Performance.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c49a6c08_1px,transparent_1px),linear-gradient(to_bottom,#c49a6c08_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-text-secondary font-body">
                {subtitle}
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium text-accent uppercase tracking-wide mb-6">
                  Manufacturing Excellence in India
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:scale-105"
                >
                  Get in Touch
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <a
                  href="/catalogue.pdf"
                  className="group inline-flex items-center justify-center rounded-2xl border-2 border-secondary px-8 py-4 text-sm font-semibold text-text-primary transition-all duration-300 hover:border-accent hover:bg-accent hover:text-primary"
                  download
                >
                  Download Catalogue
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-surface p-8 shadow-2xl lg:aspect-4/3">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/window.svg"
                    alt="Premium apparel manufacturing"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-surface p-4 shadow-xl border border-secondary">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-text-primary">
                    Global Standards
                  </span>
                </div>
              </div>

              <div className="absolute -right-6 -top-6 rounded-2xl bg-accent p-4 text-primary shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold">500+</div>
                  <div className="text-xs">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
