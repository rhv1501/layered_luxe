import Link from "next/link";

export default function Hero({
  title = "Crafting Premium Apparel for Your Brand",
  subtitle = "From concept to creation — we deliver exceptional T-Shirts, Uniforms, and Custom Apparel with unmatched quality and precision.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Responsive video container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            poster="/images/hero-fallback.jpg"
            style={{
              // Ensure video maintains aspect ratio while filling container intelligently
              minWidth: "100%",
              minHeight: "100%",
            }}
          >
            <source src="/videos/hero-manufacturing.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
          </video>
        </div>

        {/* Fallback Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          }}
        ></div>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-text-primary/70 via-text-primary/50 to-text-primary/30"></div>

        {/* Additional Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c49a6c15_1px,transparent_1px),linear-gradient(to_bottom,#c49a6c15_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-20 pb-16 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-accent backdrop-blur-sm border border-accent/30 mb-6 sm:mb-8 animate-fadeIn">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Manufacturing Excellence Since 2020
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 animate-slideInLeft">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="max-w-3xl text-base leading-relaxed text-primary/90 font-body mb-6 sm:mb-8 sm:text-lg lg:text-xl animate-fadeInUp">
              {subtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-primary/80 font-medium">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">
                  50K+
                </div>
                <div className="text-xs sm:text-sm text-primary/80 font-medium">
                  Products Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-primary/80 font-medium">
                  Support Available
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-accent px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary shadow-2xl transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/25 hover:scale-105 backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Start Your Project
                <svg
                  className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
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

              <Link
                href="/products"
                className="group inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-primary/20 backdrop-blur-sm border-2 border-primary/30 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/30 hover:border-primary/50 hover:scale-105"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                View Products
                <svg
                  className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
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

              <a
                href="/catalogue.pdf"
                className="group inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-transparent backdrop-blur-sm border-2 border-primary/30 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
                download
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
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
                <span className="hidden sm:inline">Download Catalog</span>
                <span className="sm:hidden">Catalog</span>
                <svg
                  className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 sm:pt-8 border-t border-primary/20">
              <p className="text-xs sm:text-sm text-primary/70 mb-3 sm:mb-4">
                Trusted by leading brands across India
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-8 opacity-70">
                <div className="text-primary/60 text-xs sm:text-sm font-medium">
                  🏢 Corporate Partners
                </div>
                <div className="text-primary/60 text-xs sm:text-sm font-medium">
                  🏫 Educational Institutions
                </div>
                <div className="text-primary/60 text-xs sm:text-sm font-medium">
                  ⚽ Sports Teams
                </div>
                <div className="text-primary/60 text-xs sm:text-sm font-medium">
                  🏥 Healthcare Organizations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
