"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const fabrics = [
  {
    id: 1,
    title: "Jersey Fabric",
    image: "/next.svg",
    summary:
      "The most popular fabric for T-shirts, known for its flexibility and comfort.",
    details:
      "Knitted from both cotton and synthetic fibers, Jersey fabric is created using a weft knitting technique that gives it softness and stretch. Single Jersey is used for lightweight tees, while Double Jersey provides more structure for Polo shirts.",
    tags: ["Soft", "Stretchable", "T-Shirts"],
  },
  {
    id: 2,
    title: "Pique Knit Fabric",
    image: "/vercel.svg",
    summary: "Classic choice for Polo T-shirts with distinct woven textures.",
    details:
      "Pique knit combines warp and weft weaving to create raised patterns such as honeycomb, cord, or birdseye. Its structured yet breathable texture makes it perfect for polos and uniforms needing a refined appearance.",
    tags: ["Polo", "Textured", "Durable"],
  },
  {
    id: 3,
    title: "French Terry Fabric",
    image: "/window.svg",
    summary:
      "A soft, mid-weight knit ideal for hoodies, sweatshirts, and joggers.",
    details:
      "French Terry has a smooth outer layer and looped interior, providing warmth without bulk. Traditionally made from cotton, it's now often blended with Lycra or rayon for added flexibility and comfort.",
    tags: ["Hoodies", "Soft", "Premium Casual"],
  },
  {
    id: 4,
    title: "Fleece Fabric",
    image: "/globe.svg",
    summary: "Winter favorite for warmth and comfort.",
    details:
      "Fleece is similar to French Terry but features cut and brushed loops, creating a fluffy, insulating texture. Lightweight yet warm, it's the go-to fabric for sweatshirts and hoodies during colder seasons.",
    tags: ["Winterwear", "Soft", "Warm"],
  },
  {
    id: 5,
    title: "Zen Fabric",
    image: "/file.svg",
    summary:
      "A reversible, luxurious interlock fabric ideal for summer apparel.",
    details:
      "Zen fabric is formed by knitting two layers together, making it thicker, softer, and reversible. It absorbs moisture efficiently, making it a top choice for luxury summer collections.",
    tags: ["Luxury", "Breathable", "Summer"],
  },
  {
    id: 6,
    title: "Rib Fabric",
    image: "/next.svg",
    summary: "Stretchable fabric ideal for cuffs, collars, and fitted designs.",
    details:
      "Rib fabric is produced by alternating purl and knit stitches to form raised rib lines. It's flexible, soft, and provides warmth, often used for cuffs, collars, and fitted tops.",
    tags: ["Stretchable", "Cuffs", "Collars"],
  },
  {
    id: 7,
    title: "Waffle Fabric",
    image: "/vercel.svg",
    summary: "Textured fabric known for absorbency and warmth.",
    details:
      "Waffle fabric features raised threads forming small rectangular grids. Originally made from cotton, modern versions use blends for added softness. Perfect for hoodies, robes, and towels.",
    tags: ["Textured", "Absorbent", "Hoodies"],
  },
  {
    id: 8,
    title: "Supima Fabric",
    image: "/window.svg",
    summary: "Premium cotton known for superior softness and color retention.",
    details:
      "Supima is an extra-long staple cotton, making it stronger, smoother, and softer than conventional cotton. Its ability to retain color and texture makes it ideal for high-end T-shirts and polos.",
    tags: ["Luxury Cotton", "Soft", "Durable"],
  },
  {
    id: 9,
    title: "Organic Cotton",
    image: "/globe.svg",
    summary: "Eco-conscious cotton grown without synthetic chemicals.",
    details:
      "Organic cotton is cultivated without harmful fertilizers or pesticides, making it safe for both skin and environment. Increasingly popular among sustainable apparel brands.",
    tags: ["Sustainable", "Eco-Friendly", "Natural"],
  },
  {
    id: 10,
    title: "Bamboo Fabric",
    image: "/file.svg",
    summary:
      "Lightweight, breathable, and sustainable fabric derived from bamboo fibers.",
    details:
      "Bamboo fabric can be natural or viscose-based, both known for breathability, moisture-wicking, and stretch. Soft on skin and ideal for athleisure or casual wear.",
    tags: ["Breathable", "Sustainable", "Moisture-Wicking"],
  },
  {
    id: 11,
    title: "Tencel Fabric",
    image: "/next.svg",
    summary: "Smooth and silky sustainable fabric made from eucalyptus pulp.",
    details:
      "Also known as Lyocell, Tencel is soft, strong, and highly absorbent. It's eco-friendly and used widely in luxury shirts and casualwear for its lightweight comfort.",
    tags: ["Eco", "Luxury", "Moisture-Absorbent"],
  },
  {
    id: 12,
    title: "500 GSM Fabric",
    image: "/vercel.svg",
    summary: "Heavy-duty fabric ideal for outerwear and gymwear.",
    details:
      "Our 500 GSM range includes French Terry, Fleece, and Bonded fabrics — perfect for rugged outerwear, gym apparel, or structured streetwear with a premium feel.",
    tags: ["Heavyweight", "Outerwear", "Structured"],
  },
  {
    id: 13,
    title: "Suvin Fabric",
    image: "/window.svg",
    summary:
      "Elite Indian cotton blend offering sheen and unmatched smoothness.",
    details:
      "Suvin combines Sujata and St. Vincent cotton varieties to create a lustrous, soft, and durable fabric exclusive to our region — highly sought after for premium clothing.",
    tags: ["Elite Cotton", "Smooth", "Premium"],
  },
];

export default function FabricsPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
              Premium Fabrics Collection
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-text-secondary font-body">
              Discover our curated selection of premium fabrics, each chosen for
              its unique properties, comfort, and durability. From everyday
              comfort to luxury finishes.
            </p>
          </div>
        </div>
      </div>

      {/* Fabrics Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-surface p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30 group cursor-pointer"
                onClick={() => toggleCard(fabric.id)}
              >
                {/* Fabric Image */}
                <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={fabric.image}
                    alt={fabric.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Fabric Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary font-heading">
                    {fabric.title}
                  </h3>
                  <div className="shrink-0">
                    <svg
                      className={`w-5 h-5 text-accent transition-transform duration-300 ${
                        expandedCard === fabric.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {fabric.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/20 text-accent rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-text-secondary font-body mb-4">
                  {fabric.summary}
                </p>

                {/* Expandable Details */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedCard === fabric.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-accent/20">
                    <p className="text-text-secondary font-body leading-relaxed">
                      {fabric.details}
                    </p>
                    {expandedCard === fabric.id && (
                      <div className="mt-4">
                        <button
                          className="text-accent font-medium text-sm hover:text-accent/80 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCard(null);
                          }}
                        >
                          Show Less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Click to Expand Hint */}
                {expandedCard !== fabric.id && (
                  <div className="mt-4 text-center">
                    <span className="text-accent text-sm font-medium">
                      Click to learn more ↓
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface border-t border-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
            Find the Perfect Fabric for Your Collection
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
            Each fabric tells a story — of craftsmanship, comfort, and
            creativity. Explore them all and choose what defines your brand.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-accent text-primary font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
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
        </div>
      </section>

      {/* Fabric Properties Info Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-text-primary lg:text-3xl">
              Why Fabric Choice Matters
            </h2>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto font-body">
              Understanding fabric properties helps you make the right choice
              for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-surface border border-accent/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
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
              <h3 className="font-heading font-semibold text-text-primary mb-2">
                Comfort
              </h3>
              <p className="text-text-secondary text-sm">
                Softness, breathability, and skin-friendly properties for
                all-day wear.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-surface border border-accent/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-text-primary mb-2">
                Durability
              </h3>
              <p className="text-text-secondary text-sm">
                Long-lasting quality that maintains shape and color through
                countless washes.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-surface border border-accent/10">
              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-accent flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
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
              <h3 className="font-heading font-semibold text-text-primary mb-2">
                Performance
              </h3>
              <p className="text-text-secondary text-sm">
                Specialized properties like moisture-wicking, stretch, and
                temperature regulation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
