import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../../components/Loader";

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center py-8">
    <Loader />
  </div>
);

// Lazy load the products grid
const ProductsGrid = dynamic(() => import("../../../components/ProductsGrid"), {
  loading: () => <SectionLoader />,
});

const categoryData = {
  menswear: {
    title: "Men's Wear",
    image: "/images/categories/menswear.jpg",
    summary:
      "Stylish and comfortable apparel designed for performance, confidence, and everyday wear.",
    subcategories: [
      {
        name: "T-Shirts",
        description:
          "Premium cotton t-shirts designed for everyday comfort and style. Available in various fits and colors.",
      },
      {
        name: "Polo T-Shirts",
        description:
          "Classic polo shirts combining elegance and comfort, perfect for casual and semi-formal occasions.",
      },
      {
        name: "Oversized T-Shirts",
        description:
          "Trendy oversized t-shirts for a relaxed, contemporary look with maximum comfort.",
      },
      {
        name: "Men's Hoodies",
        description:
          "Cozy hoodies crafted from soft fabrics, ideal for layering and casual wear.",
      },
      {
        name: "Sweatshirts",
        description:
          "Comfortable sweatshirts perfect for workouts, lounging, or casual outings.",
      },
      {
        name: "Formal Shirts",
        description:
          "Professional dress shirts tailored for business and formal occasions.",
      },
      {
        name: "Pajamas",
        description:
          "Soft, breathable sleepwear designed for ultimate comfort and relaxation.",
      },
      {
        name: "Formal Pants",
        description:
          "Tailored formal trousers that combine style, comfort, and professional appearance.",
      },
      {
        name: "Shorts",
        description:
          "Versatile shorts for casual wear, sports, or summer comfort in various styles.",
      },
      {
        name: "Hawaiian Shirts",
        description:
          "Vibrant, tropical-inspired shirts perfect for vacations and casual summer wear.",
      },
      {
        name: "Men's Bathrobes",
        description:
          "Luxurious bathrobes made from absorbent materials for post-shower comfort.",
      },
      {
        name: "Men's Cargo Pants",
        description:
          "Functional cargo pants with multiple pockets, perfect for outdoor activities and casual wear.",
      },
      {
        name: "Men's Jeans Pants",
        description:
          "Classic denim jeans in various cuts and washes for timeless style and durability.",
      },
      {
        name: "Men's Denim Jackets",
        description:
          "Stylish denim jackets that add a classic touch to any casual outfit.",
      },
      {
        name: "Men's Track Pants",
        description:
          "Athletic track pants designed for sports, workouts, or comfortable lounging.",
      },
      {
        name: "Men's Athletic Tanks",
        description:
          "Breathable tank tops perfect for gym sessions and active lifestyle.",
      },
    ],
  },
  womenswear: {
    title: "Women's Wear",
    image: "/images/categories/womenswear.jpg",
    summary:
      "Elegant, versatile, and comfortable styles crafted to celebrate modern femininity.",
    subcategories: [
      {
        name: "Women's T-Shirts",
        description:
          "Stylish t-shirts designed with feminine cuts and premium fabrics for everyday elegance.",
      },
      {
        name: "Oversized Tees",
        description:
          "Trendy oversized t-shirts that offer comfort and contemporary style for casual wear.",
      },
      {
        name: "Women's Hoodies",
        description:
          "Cozy hoodies with flattering fits, perfect for layering and casual comfort.",
      },
      {
        name: "Yoga Pants",
        description:
          "Flexible, breathable yoga pants designed for movement, exercise, and active lifestyle.",
      },
      {
        name: "Women's Shorts",
        description:
          "Comfortable and stylish shorts in various lengths and fits for different occasions.",
      },
      {
        name: "Women's Tank Tops",
        description:
          "Versatile tank tops perfect for layering, workouts, or warm weather comfort.",
      },
      {
        name: "Women's Co-Ord Sets",
        description:
          "Matching coordinate sets that offer effortless style and coordinated fashion.",
      },
      {
        name: "Women's Pajama Shorts",
        description:
          "Comfortable sleepwear shorts made from soft materials for restful nights.",
      },
      {
        name: "Women's Jeggings",
        description:
          "Stretchy jeggings that combine the look of jeans with the comfort of leggings.",
      },
    ],
  },
  kidswear: {
    title: "Kids' Wear",
    image: "/images/categories/kidswear.jpg",
    summary:
      "Soft, playful, and durable kidswear built for comfort, movement, and style.",
    subcategories: [
      {
        name: "Kids T-Shirts",
        description:
          "Fun and comfortable t-shirts designed for active children with playful designs.",
      },
      {
        name: "Polo T-Shirts",
        description:
          "Smart-casual polo shirts for kids that are perfect for school and special occasions.",
      },
      {
        name: "Baby Onesies",
        description:
          "Soft, adorable onesies for babies made from gentle, skin-friendly materials.",
      },
      {
        name: "Baby Rompers",
        description:
          "Cute and practical rompers for babies that are easy to wear and change.",
      },
      {
        name: "Kids Pajamas",
        description:
          "Cozy sleepwear for children featuring fun prints and comfortable fits.",
      },
      {
        name: "Kids Vests",
        description:
          "Essential undergarments and outerwear vests for children's comfort and layering.",
      },
      {
        name: "Kids Shorts",
        description:
          "Durable and comfortable shorts for active children during play and sports.",
      },
      {
        name: "Baby Underpants",
        description:
          "Soft, comfortable undergarments designed specifically for babies and toddlers.",
      },
    ],
  },
  "polo-tees": {
    title: "Polo Tees",
    image: "/images/categories/polo-tees.jpg",
    summary:
      "Classic Polo T-shirts combining comfort and elegance — perfect for corporates, teams, and casual wear.",
    subcategories: [
      {
        name: "Cotton Polo Tees",
        description:
          "Premium 100% cotton polo shirts offering breathability and timeless style.",
      },
      {
        name: "Pique Knit Polo Tees",
        description:
          "Textured pique knit polos that provide enhanced airflow and professional appearance.",
      },
      {
        name: "Performance Polo Tees",
        description:
          "Athletic polo shirts with moisture-wicking properties for active lifestyles.",
      },
      {
        name: "Customized Polo Tees",
        description:
          "Personalized polo shirts with custom logos, embroidery, and branding options.",
      },
    ],
  },
  "custom-logo-tees": {
    title: "Custom Logo Tees",
    image: "/images/categories/custom-logo-tees.jpg",
    summary:
      "Create personalized T-shirts with custom logo prints, embroidery, or screen printing — perfect for brands and events.",
    subcategories: [
      {
        name: "Corporate Logo Tees",
        description:
          "Professional branded t-shirts for companies, featuring custom logos and corporate colors.",
      },
      {
        name: "Event & Promotional Tees",
        description:
          "Custom t-shirts perfect for events, promotions, and marketing campaigns.",
      },
      {
        name: "Team & Sports Tees",
        description:
          "Customized team shirts for sports groups, clubs, and organizations.",
      },
      {
        name: "Custom Printed Tees",
        description:
          "Personalized t-shirts with custom designs, graphics, and text printing.",
      },
    ],
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryData[slug as keyof typeof categoryData];

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/products"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <svg
                className="w-4 h-4 text-text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-text-primary font-medium">{category.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl mb-6">
            {category.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {category.summary}
          </p>
        </div>

        {/* Products Grid */}
        <Suspense fallback={<SectionLoader />}>
          <ProductsGrid category={category} />
        </Suspense>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-linear-to-br from-accent via-accent to-accent/80 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-heading text-3xl font-bold text-primary lg:text-4xl mb-6">
                Ready to Order {category.title}?
              </h2>
              <p className="text-lg text-primary/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                Get a custom quote for your {category.title.toLowerCase()}{" "}
                requirements. We&apos;ll help you choose the perfect products
                with custom branding.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-text-primary hover:bg-surface transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Custom Quote
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
