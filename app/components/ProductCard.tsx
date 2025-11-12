"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { productsData, whatsappConfig } from "../data/products";

export interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  whatsappUrl: string;
}

interface ProductsGridProps {
  products?: Product[];
  whatsappMessage?: string;
  whatsappNumber?: string;
  className?: string;
}

// Individual Product Card Component
function ProductCard({ product, whatsappUrl }: ProductCardProps) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Check if the click was on the WhatsApp button or its children
    const target = e.target as HTMLElement;
    if (target.closest("[data-whatsapp]")) {
      return; // Don't navigate if WhatsApp button was clicked
    }
    router.push(`/products/${product.slug}`);
  };

  return (
    <div
      className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">
          {product.title}
        </h3>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full font-medium"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
              +{product.features.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <div className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent text-primary rounded-xl font-semibold text-sm shadow-md">
            <span>View Details</span>
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
            title="Quick WhatsApp Inquiry"
            data-whatsapp="true"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// Products Grid Component
export function ProductsGrid({
  products = productsData,
  whatsappMessage = whatsappConfig.defaultMessage,
  whatsappNumber = whatsappConfig.number,
  className = "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20",
}: ProductsGridProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          whatsappUrl={whatsappUrl}
        />
      ))}
    </div>
  );
}

// Export the individual ProductCard as default
export default ProductCard;
