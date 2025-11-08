import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
                About Layered Luxe
              </h1>
              <p className="mt-6 text-xl text-text-secondary leading-relaxed">
                Layered Luxe, in association with JK Uniforms, offers an
                extensive range of high-quality apparel solutions including
                t-shirts, uniforms, and custom wear.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Our Mission
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  We focus on style, comfort, and superior craftsmanship to help
                  clients stand out. Our brand is built on the foundation of
                  quality, innovation, and customer success.
                </p>
              </div>

              <div className="group">
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Global Standards, Indian Excellence
                </h2>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="h-3 w-3 text-white"
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
                    <span>
                      Premium materials sourced from trusted suppliers
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="h-3 w-3 text-white"
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
                    <span>Skilled artisans and sustainable practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="h-3 w-3 text-white"
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
                    <span>Competitive pricing with worldwide delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="h-3 w-3 text-white"
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
                    <span>Low minimum order quantities for startups</span>
                  </li>
                </ul>
              </div>

              <div className="group">
                <h2 className="font-heading text-2xl font-semibold text-text-primary mb-4">
                  Our Philosophy
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  &ldquo;Let&apos;s Build Apparel Success Together&rdquo; - We
                  believe in collaborative partnerships that drive mutual
                  growth. Every piece of apparel we create reflects our
                  commitment to excellence and your brand&apos;s success.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-surface to-secondary p-6 shadow-2xl border border-surface">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src="/window.svg"
                    alt="Manufacturing excellence at Layered Luxe"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105 opacity-80"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-surface border border-accent/30 p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    Made in India
                  </div>
                  <div className="text-sm text-text-secondary">
                    Global Quality
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm font-medium text-text-secondary">
                  Happy Clients
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm font-medium text-text-secondary">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm font-medium text-text-secondary">
                  Product Types
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm font-medium text-text-secondary">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
