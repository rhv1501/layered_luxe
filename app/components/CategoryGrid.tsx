import SegmentCard from "./SegmentCard";

export default function CategoryGrid() {
  const categories = [
    {
      id: "Customised polo neck tees",
      title: "Custom Polo Neck T-Shirts for Men",
      slug: "polo-neck-tshirts",
      image: "/menswear.png",
      description:
        "Premium-quality customised polo neck T-shirts designed for men. Perfect for corporate wear, sports teams, and events. Durable fabric, elegant fit, and logo personalization options to match your brand identity.",
      productCount: 16,
    },
    {
      id: "Customised round neck tees",
      title: "Custom Round Neck T-Shirts",
      slug: "round-neck-tshirts",
      image: "/window.svg",
      description:
        "High-quality customised round neck T-shirts for casual, event, or promotional use. Soft, breathable fabric with vibrant printing options including screen, DTF, and sublimation. Ideal for brands, startups, and college events.",
      productCount: 8,
    },
    {
      id: "corporate shirts and pants",
      title: "Corporate Uniforms – Shirts & Pants",
      slug: "corporate-shirts-pants",
      image: "/file.svg",
      description:
        "Professional corporate shirts and pants tailored for comfort and style. Perfect for offices, hospitality, and formal workwear. Available in multiple fits, colors, and branding options for a polished team look.",
      productCount: 10,
    },
    {
      id: "jerseys",
      title: "Custom Jerseys",
      slug: "jerseys",
      image: "/file.svg",
      description:
        "Personalised sports jerseys crafted for teams, tournaments, and fitness events. Choose from Dri-FIT, mesh, or polyester materials with full sublimation printing. Add names, numbers, and logos to showcase your team spirit.",
      productCount: 6,
    },
    {
      id: "Hoodies and Jackets",
      title: "Custom Hoodies & Jackets",
      slug: "custom-hoodies-jackets",
      image: "/file.svg",
      description:
        "Stay warm in style with customised hoodies and jackets. Perfect for corporate gifting, winter campaigns, and team branding. Available in cotton fleece, polyester, and zipper styles with embroidered or printed logos.",
      productCount: 7,
    },
    {
      id: "Promotional Tees",
      title: "Promotional T-Shirts for Events & Brands",
      slug: "promotional-tshirts",
      image: "/file.svg",
      description:
        "Affordable promotional T-shirts ideal for marketing campaigns, giveaways, college fests, and product launches. Lightweight cotton fabric with high-quality printing for maximum brand visibility and comfort.",
      productCount: 12,
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
