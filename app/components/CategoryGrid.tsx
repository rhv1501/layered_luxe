import SegmentCard from "./SegmentCard";

export default function CategoryGrid() {
  const categories = [
    {
      id: "menswear",
      title: "Men's Wear",
      slug: "menswear",
      image: "/next.svg",
      description:
        "Stylish and comfortable apparel designed for performance, confidence, and everyday wear.",
      productCount: 16,
    },
    {
      id: "womenswear",
      title: "Women's Wear",
      slug: "womenswear",
      image: "/vercel.svg",
      description:
        "Elegant, versatile, and comfortable styles crafted to celebrate modern femininity.",
      productCount: 9,
    },
    {
      id: "kidswear",
      title: "Kids' Wear",
      slug: "kidswear",
      image: "/globe.svg",
      description:
        "Soft, playful, and durable kidswear built for comfort, movement, and style.",
      productCount: 8,
    },
    {
      id: "polo-tees",
      title: "Polo Tees",
      slug: "polo-tees",
      image: "/window.svg",
      description:
        "Classic Polo T-shirts combining comfort and elegance — perfect for corporates, teams, and casual wear.",
      productCount: 4,
    },
    {
      id: "custom-logo-tees",
      title: "Custom Logo Tees",
      slug: "custom-logo-tees",
      image: "/file.svg",
      description:
        "Create personalized T-shirts with custom logo prints, embroidery, or screen printing — perfect for brands and events.",
      productCount: 4,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-text-primary">
        Explore Our Categories
      </h2>
      <p className="mt-2 text-text-secondary">
        Browse our comprehensive range of apparel categories designed for every
        need.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((c) => (
          <SegmentCard
            key={c.id}
            title={c.title}
            href={`/products/${c.slug}`}
            image={c.image}
            description={c.description}
          />
        ))}
      </div>
    </section>
  );
}
