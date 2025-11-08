import Hero from "./components/Hero";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Loader from "./components/Loader";

// Lazy load heavy components with loading fallbacks
const CategoryGrid = dynamic(() => import("./components/CategoryGrid"), {
  loading: () => (
    <div className="flex justify-center py-12">
      <Loader />
    </div>
  ),
});

const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  {
    loading: () => (
      <div className="flex justify-center py-12">
        <Loader />
      </div>
    ),
  }
);

// Loading fallback components
const SectionLoader = () => (
  <div className="flex justify-center py-8">
    <Loader />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />

        {/* Quality Section */}
        <section className="py-20 bg-background border-t border-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-surface border border-secondary">
                <div className="text-4xl font-bold mb-2 text-accent">500+</div>
                <div className="text-text-secondary">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-secondary">
                <div className="text-4xl font-bold mb-2 text-accent">8</div>
                <div className="text-text-secondary">Product Categories</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-secondary">
                <div className="text-4xl font-bold mb-2 text-accent">5+</div>
                <div className="text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-secondary">
                <div className="text-4xl font-bold mb-2 text-accent">99%</div>
                <div className="text-text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Manufacture in India Section */}
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-semibold text-text-primary lg:text-4xl">
                Why Manufacture in India?
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
                India is a global powerhouse in apparel manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-3xl bg-secondary hover:bg-background hover:shadow-soft transition-all duration-300 border border-secondary">
                <div className="h-12 w-12 rounded-2xl bg-accent mb-6 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  World-Class Materials
                </h3>
                <p className="text-text-secondary">
                  We leverage world-class materials, skilled artisans, and
                  sustainable practices to bring your ideas to life.
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-secondary hover:bg-background hover:shadow-soft transition-all duration-300 border border-secondary">
                <div className="h-12 w-12 rounded-2xl bg-accent mb-6 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-text-secondary">
                  Competitive pricing and global supply chain ensure smooth
                  production and worldwide delivery.
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-secondary hover:bg-background hover:shadow-soft transition-all duration-300 border border-secondary">
                <div className="h-12 w-12 rounded-2xl bg-accent mb-6 flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  Global Standards
                </h3>
                <p className="text-text-secondary">
                  International quality standards with the advantage of
                  cost-effective production and skilled craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-semibold text-text-primary lg:text-4xl">
                Our Product Range
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
                From school uniforms to corporate apparel, sportswear to
                winterwear - Layered Luxe delivers unmatched craftsmanship and
                comfort across 8 specialized categories designed for every need.
              </p>
            </div>
            <Suspense fallback={<SectionLoader />}>
              <CategoryGrid />
            </Suspense>
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-3xl font-semibold text-text-primary lg:text-4xl mb-6">
                  Customization & Sampling
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-text-secondary">
                      Low minimum order quantities (MOQs) to support startups
                      and brands.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-text-secondary">
                      Multiple decoration techniques — embroidery, puff
                      printing, 3D embossing, sublimation, DTF printing, and
                      more.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-text-secondary">
                      Sampling process ensures perfect fit, fabric, and finish
                      before mass production.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/customisation"
                    className="inline-flex items-center rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
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
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-secondary p-8 border border-accent/20">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="bg-surface rounded-2xl p-4 border border-secondary flex items-center justify-center">
                      <span className="text-sm font-medium text-text-primary text-center">
                        Embroidery
                      </span>
                    </div>
                    <div className="bg-surface rounded-2xl p-4 border border-secondary flex items-center justify-center">
                      <span className="text-sm font-medium text-text-primary text-center">
                        DTF Printing
                      </span>
                    </div>
                    <div className="bg-surface rounded-2xl p-4 border border-secondary flex items-center justify-center">
                      <span className="text-sm font-medium text-text-primary text-center">
                        Sublimation
                      </span>
                    </div>
                    <div className="bg-surface rounded-2xl p-4 border border-secondary flex items-center justify-center">
                      <span className="text-sm font-medium text-text-primary text-center">
                        3D Embossing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
      </main>
    </div>
  );
}
