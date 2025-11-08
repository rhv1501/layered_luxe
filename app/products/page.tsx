import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const categories = [
    {
      id: "menswear",
      title: "Men's Wear",
      slug: "menswear",
      image: "/images/categories/menswear.jpg",
      summary:
        "Stylish and comfortable apparel designed for performance, confidence, and everyday wear.",
    },
    {
      id: "womenswear",
      title: "Women's Wear",
      slug: "womenswear",
      image: "/images/categories/womenswear.jpg",
      summary:
        "Elegant, versatile, and comfortable styles crafted to celebrate modern femininity.",
    },
    {
      id: "kidswear",
      title: "Kids' Wear",
      slug: "kidswear",
      image: "/images/categories/kidswear.jpg",
      summary:
        "Soft, playful, and durable kidswear built for comfort, movement, and style.",
    },
    {
      id: "polo-tees",
      title: "Polo Tees",
      slug: "polo-tees",
      image: "/images/categories/polo-tees.jpg",
      summary:
        "Classic Polo T-shirts combining comfort and elegance — perfect for corporates, teams, and casual wear.",
    },
    {
      id: "custom-logo-tees",
      title: "Custom Logo Tees",
      slug: "custom-logo-tees",
      image: "/images/categories/custom-logo-tees.jpg",
      summary:
        "Create personalized T-shirts with custom logo prints, embroidery, or screen printing — perfect for brands and events.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
            Our Product Categories
          </h1>
          <p className="mt-4 text-xl text-text-secondary max-w-4xl mx-auto">
            Showcase all Layered Luxe product categories across Menswear,
            Womenswear, and Kidswear, with premium quality and style for every
            occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group bg-surface border border-accent/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-secondary">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-300 opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {category.summary}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">
                    View Products
                  </span>
                  <svg
                    className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
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

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-linear-to-br from-accent via-accent to-accent/80 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-heading text-4xl font-bold text-primary lg:text-5xl mb-6">
                Design Your Collection with Layered Luxe
              </h2>
              <p className="text-xl text-primary/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                From premium basics to fully customized apparel — explore our
                complete product range built for quality, comfort, and
                performance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-10 py-5 text-lg font-semibold text-text-primary hover:bg-surface transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get in Touch
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
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-primary rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary rounded-full"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
