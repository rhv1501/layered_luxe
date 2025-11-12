import Link from "next/link";
import { ProductsGrid } from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-primary font-semibold text-sm mb-6">
            <span>🏷️</span>
            <span>Premium Custom Apparel</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Our <span className="text-accent">Product Collection</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of premium custom apparel. From
            corporate uniforms to promotional wear, each product is crafted with{" "}
            <span className="font-semibold text-accent">superior quality</span>{" "}
            and designed for{" "}
            <span className="font-semibold text-teal">
              maximum customization
            </span>
            .
          </p>
        </div>

        {/* Products Grid */}
        <ProductsGrid />

        {/* Features Section */}
        <section className="mb-20">
          <div className="bg-gradient-subtle rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Every product in our collection is designed with precision and
                manufactured to exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  Premium Quality
                </h3>
                <p className="text-text-secondary text-sm">
                  Superior materials and craftsmanship in every piece
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  Full Customization
                </h3>
                <p className="text-text-secondary text-sm">
                  Complete branding and design personalization
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-royal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-royal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  Fast Delivery
                </h3>
                <p className="text-text-secondary text-sm">
                  Quick turnaround without compromising quality
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-aqua/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-aqua"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  Custom Solutions
                </h3>
                <p className="text-text-secondary text-sm">
                  Tailored designs and branding options
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 lg:p-16 relative overflow-hidden text-primary">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Create Your{" "}
                <span className="text-accent">Custom Collection</span>?
              </h2>
              <p className="text-lg sm:text-xl text-primary/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                From concept to delivery, we&apos;ll work with you to create the
                perfect custom apparel for your brand, team, or event. Get
                started with a personalized consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-accent text-primary px-8 py-4 text-lg font-bold hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Consultation
                  <svg
                    className="ml-2 w-5 h-5"
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
                  href="https://wa.me/+919876543210?text=Hi! I'm interested in custom apparel solutions. Can you help me with bulk orders and customization options?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-500 text-white px-8 py-4 text-lg font-bold hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-accent rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-accent rounded-full animate-pulse delay-100"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-accent rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
