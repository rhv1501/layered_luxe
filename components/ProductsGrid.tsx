import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
}

interface Category {
  subcategories: Product[];
}

interface ProductsGridProps {
  category: Category;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ category }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
      {category.subcategories.map((product, index) => (
        <Link
          key={index}
          href="/contact"
          className="group bg-surface border border-accent/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-2"
        >
          {/* Product Image */}
          <div className="aspect-4/3 relative overflow-hidden bg-secondary">
            <Image
              src="/next.svg"
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-110 transition-transform duration-300 opacity-20"
            />
            {/* Product name overlay for placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-text-secondary font-medium">
                  {product.name}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute top-3 right-3">
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

          <div className="p-6">
            <h3 className="font-heading text-xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-3">
              {product.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-accent">Get Quote</span>
              <svg
                className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1"
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
  );
};

export default ProductsGrid;
