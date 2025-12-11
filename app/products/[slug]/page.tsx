import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "../../components/ProductGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return {
    title: `The Layered Luxe – ${slug}`,
    alternates: {
      canonical: `https://thelayeredluxe.com/products/${slug}`,
    },
  };
}

const productData = {
  "polo-neck-tshirts": {
    title: "Corporate T shirts",
    slug: "polo-neck-tshirts",
    description:
      "Premium-quality customised polo neck T-shirts designed for men and women. Perfect for corporate wear, sports teams, and events. Durable fabric, elegant fit, and logo personalization options to match your brand identity.",
    features: ["Nirmal Knit", "Mars", "100% Cotton", "Lacoste"],
    specifications: {
      material: "100% Cotton / Cotton Blend",
      gsm: "140-240 GSM",
      sizes: "S, M, L, XL, 2XL, 3XL, 4XL",
      colors: "20+ Colors Available",
      printing: "Screen Print, DTF, Embroidery",
      moq: "Minimum 50 pieces",
    },
    gallery: [
      "/poloneck/01.jpg",
      "/poloneck/02.png",
      "/poloneck/03.png",
      "/poloneck/04.png",
      "/poloneck/05.png",
    ],
  },
  "round-neck-tshirts": {
    title: "Customised Round Neck T-Shirts",
    slug: "round-neck-tshirts",
    description:
      "High-quality customised round neck T-shirts for Corporates, event, or promotional use. Soft, breathable fabric with vibrant printing options including screen, DTF, and sublimation. Ideal for brands, startups, and college events.",
    features: ["Nirmal Knit", "Mars", "100% Cotton", "Lacoste"],
    specifications: {
      material: "Cotton / Polyester Blend",
      gsm: "140-240 GSM",
      sizes: "S, M, L, XL, 2XL, 3XL",
      colors: "15+ Colors Available",
      printing: "DTF, Screen Print, Sublimation",
      moq: "Minimum 50 pieces",
    },
    gallery: ["/window.svg", "/window.svg", "/window.svg", "/window.svg"],
  },
  "corporate-shirts-pants": {
    title: "Corporate Uniforms",
    slug: "corporate-shirts-pants",
    description:
      "Professional corporate shirts and pants tailored for comfort and style. Perfect for offices, hospitality, and formal workwear. Available in multiple fits, colors, and branding options for a polished team look.",
    features: [
      "Formal Office Wear - suits,blazers,dress,shirts",
      "Casual Office Wear - polos,t-shirts",
      "Industrial and safety wear",
      "All other bulk speciality uniforms",
    ],
    specifications: {
      material: "Cotton Blend",
      gsm: "140-240 GSM",
      sizes: "S, M, L, XL, 2XL, 3XL, 4XL",
      colors: "Corporate Colors Available",
      printing: "Embroidery, Heat Transfer",
      moq: "Minimum 50 pieces",
    },
    gallery: [
      "/shirtpant/01.png",
      "/shirtpant/02.png",
      "/shirtpant/03.png",
      "/shirtpant/04.png",
    ],
  },
  "school-uniforms": {
    title: "Custom School Uniforms",
    slug: "school-uniforms",
    description:
      "Premium-quality school uniforms tailored for comfort, durability, and a smart appearance. Perfect for schools, academies, Play schools and institutions seeking custom-designed shirts, pants, skirts, and sportswear. Available with embroidery or logo printing for a professional identity.",
    features: [
      "100% Cotton/ Poly Cotton",
      "Nirmal Knit/ Spun Nirmal Knit",
      "Mars Baby Pique",
      "Dot Knit/ Honey Comb",
      "Four Way Lycra",
      "Superpoly",
    ],
    // features: [
    //   "Durable Cotton & Polyester Fabric",
    //   "Custom Logo Embroidery",
    //   "Complete Uniform Sets",
    //   "Tailored Fit for Comfort",
    //   "Wrinkle-Resistant Material",
    //   "Machine Washable",
    //   "Color-Fast Dyes",
    //   "Institutional Branding",
    //   "Sports & PE Uniforms",
    //   "Formal & Casual Options",
    //   "Size Range for All Ages",
    //   "Bulk Order Benefits",
    // ],
    specifications: {
      gsm: "140-240",
      sizes: "Age 3-18, Adult S-4XL",
      printing: "Embroidery, Screen Print, DTF",
      moq: "Minimum 50 pieces",
      colours: "All Colors Available",
    },
    gallery: ["/uniform/03.png", "/uniform/02.png", "/uniform/01.png"],
  },
  jerseys: {
    title: "Custom Jerseys",
    slug: "jerseys",
    description:
      "Personalised sports jerseys crafted for teams, tournaments, and fitness events. Choose from Dri-FIT, mesh, or polyester materials with full sublimation printing. Add names, numbers, and logos to showcase your team spirit.",
    features: [
      "Salina  Dri-FIT",
      "Dot Knit",
      "Full Sublimation Printing",
      "Name & Number Customization",
      "Team Logo Integration",
      "Tournament Ready",
      "Athletic Fit",
      "Moisture-Wicking",
    ],
    specifications: {
      material: "Polyester Mesh / Dri-FIT",
      gsm: "140-180 GSM",
      sizes: "S, M, L, XL, 2XL, 3XL",
      colors: "15+ Colors Available",
      printing: "Sublimation, Heat Press",
      moq: "Minimum 50 pieces",
    },
    gallery: ["/Jersey/02.png", "/Jersey/01.png", "/Jersey/03.png"],
  },
  "custom-hoodies-jackets": {
    title: "Customised Hoodies & Jackets",
    slug: "custom-hoodies-jackets",
    description:
      "Stay warm in style with customised hoodies and jackets. Perfect for corporate gifting, winter campaigns, and team branding. Available in cotton fleece, polyester, and zipper styles with embroidered or printed logos.",
    features: ["Loopknit Cotton Hoodies", "Jacket (Imported Fabric)"],
    specifications: {
      material: "Cotton Fleece / Polyester",
      gsm: "140-240 GSM",
      sizes: "S, M, L, XL, 2XL, 3XL, 4XL",
      colors: "12+ Colors Available",
      printing: "Embroidery, Screen Print",
      moq: "Minimum 50 pieces",
    },
    gallery: [
      "/jacket/02.png",
      "/jacket/03.png",
      "/jacket/04.png",
      "/jacket/05.png",
      "/jacket/06.png",
      "/jacket/07.png",
    ],
  },
  // "promotional-tshirts": {
  //   title: "Promotional T-Shirts for Events & Brands",
  //   slug: "promotional-tshirts",
  //   description:
  //     "Affordable promotional T-shirts ideal for marketing campaigns, giveaways, college fests, and product launches. Lightweight cotton fabric with high-quality printing for maximum brand visibility and comfort.",
  //   features: [
  //     "Budget-Friendly Pricing",
  //     "Marketing Campaign Ready",
  //     "College Fest Suitable",
  //     "Product Launch Events",
  //     "High-Quality Printing",
  //     "Maximum Brand Visibility",
  //     "Lightweight Comfort",
  //     "Bulk Order Benefits",
  //   ],
  //   specifications: {
  //     material: "Cotton / Cotton Blend",
  //     gsm: "140-160 GSM",
  //     sizes: "S, M, L, XL, 2XL, 3XL",
  //     colors: "10+ Colors Available",
  //     printing: "Screen Print, DTF",
  //     moq: "Minimum 50 pieces",
  //   },
  //   gallery: ["/file.svg", "/file.svg", "/file.svg", "/file.svg"],
  // },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hi! I'm interested in ${product.title}. Can you provide more details and pricing for bulk orders?`;
  const whatsappUrl = `https://wa.me/+919087095955?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* Breadcrumb */}
        <nav className="mb-8 pt-8">
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
            <li className="text-accent font-medium">{product.title}</li>
          </ol>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery (client-side interactive) */}
          <ProductGallery gallery={product.gallery} title={product.title} />

          {/* Product Info */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
                <span>🏷️</span>
                <span>Custom Apparel</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="text-lg font-semibold text-accent mb-2">
                Contact us for custom pricing and bulk order discounts
              </div>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Types
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    {/* <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div> */}
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp Inquiry */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span className="font-bold">Inquire on WhatsApp</span>
                </a>

                {/* Contact Form */}
                <Link
                  href="/contact"
                  className="flex-1 group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-accent hover:bg-accent/90 text-primary rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="font-bold">Get Detailed Quote</span>
                </Link>
              </div>

              <div className="text-center text-sm text-text-secondary">
                💡 <span className="font-semibold">Need bulk pricing?</span>{" "}
                Contact us for special discounts on orders above 100 pieces
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Product Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </div>
                <div className="text-text-primary font-bold text-lg">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Layered Luxe?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We deliver premium quality products with exceptional customization
              options and unmatched service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-white/80 text-sm">
                Top-grade materials and manufacturing processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
              <p className="text-white/80 text-sm">
                Quick turnaround times without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Competitive Pricing</h3>
              <p className="text-white/80 text-sm">
                Best rates with bulk order discounts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
              <h3 className="text-lg font-bold mb-2">Custom Solutions</h3>
              <p className="text-white/80 text-sm">
                Tailored designs and branding options
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-3xl p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Place Your Order?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get started with your custom {product.title.toLowerCase()} order
              today. Our team will help you with design, pricing, and delivery
              timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span>Quick WhatsApp Chat</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-accent hover:bg-accent/90 text-primary rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
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
                <span>Get Detailed Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
