import Link from "next/link";
import { categories } from "../../data/categories";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
            Our Product Categories
          </h1>
          <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
            Discover our comprehensive range of premium uniforms, sportswear,
            and corporate apparel. Each category is designed to meet specific
            industry needs with quality fabrics and professional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group bg-surface border border-accent/20 rounded-3xl overflow-hidden hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                <Image
                  src={category.image || "/window.svg"}
                  alt={category.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {category.description}
                </p>

                {category.products && category.products.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.products.slice(0, 3).map((product) => (
                      <span
                        key={product.id}
                        className="inline-flex items-center rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent"
                      >
                        {product.title}
                      </span>
                    ))}
                    {category.products.length > 3 && (
                      <span className="inline-flex items-center rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent">
                        +{category.products.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">
                    {category.products?.length || 0} Products
                  </span>
                  <svg
                    className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Categories Section */}
        <section className="mt-20 bg-surface rounded-3xl p-12 border border-accent/20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Why Choose Our Products?
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Quality craftsmanship meets modern design in every piece we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                Premium Quality
              </h3>
              <p className="text-text-secondary">
                Only the finest fabrics and materials sourced from trusted
                manufacturers across India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                Custom Design
              </h3>
              <p className="text-text-secondary">
                Personalized designs, logos, and colors to perfectly represent
                your brand identity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                Fast Delivery
              </h3>
              <p className="text-text-secondary">
                Quick turnaround times without compromising quality, delivered
                anywhere in India
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-accent rounded-3xl p-12 border border-accent/50">
            <h2 className="font-heading text-3xl font-bold text-primary lg:text-4xl mb-4">
              Ready to Order Your Uniforms?
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">
              Get a custom quote for your organization. We&apos;ll help you
              choose the perfect products and customize them to match your brand
              perfectly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-text-primary hover:bg-surface transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Quote
              </Link>
              <Link
                href="/customisation"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-text-primary transition-all"
              >
                View Customization Options
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
