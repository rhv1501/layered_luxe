import { categories } from "../data/categories";
import Link from "next/link";
import Image from "next/image";

export default function ProductGrid() {
  // Get all products from all categories
  const allProducts = categories.flatMap(
    (category) =>
      category.products?.map((product) => ({
        ...product,
        categoryTitle: category.title,
        categorySlug: category.slug,
      })) || []
  );

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-text-primary">
          Our Products
        </h2>
        <p className="mt-2 text-text-secondary">
          Explore our complete range of high-quality apparel products.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="group block overflow-hidden rounded-xl border border-accent/20 bg-surface shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full bg-accent/90 px-2.5 py-1 text-xs font-medium text-primary">
                  {product.categoryTitle}
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                {product.description ||
                  `Premium ${product.title.toLowerCase()} from our ${product.categoryTitle.toLowerCase()} collection.`}
              </p>

              {product.fabrics && product.fabrics.length > 0 && (
                <div className="mb-3">
                  <div className="text-xs text-text-secondary">
                    <span className="font-medium">Fabric:</span>{" "}
                    {product.fabrics[0].brand}
                    {product.fabrics[0].gsm &&
                      ` • ${product.fabrics[0].gsm} GSM`}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <div className="text-xs text-text-secondary">
                    <span className="font-medium">Sizes:</span>{" "}
                    {product.sizes.slice(0, 4).join(", ")}
                    {product.sizes.length > 4 &&
                      ` +${product.sizes.length - 4} more`}
                  </div>
                </div>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Get Quote
                <svg
                  className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5"
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
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-text-secondary mb-4">
          Need something custom? We specialize in bespoke manufacturing.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-primary hover:bg-accent/90 transition-colors"
        >
          Request Custom Quote
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
    </section>
  );
}
