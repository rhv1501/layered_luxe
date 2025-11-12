export type Product = {
  id: string;
  title: string;
  images: string[];
  fabrics?: { brand: string; gsm?: number; blend?: string }[];
  sizes?: string[];
  description?: string;
};

export type Category = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  products?: Product[];
};

export const categories: Category[] = [
  {
    id: "uniforms",
    title: "School Uniforms",
    slug: "uniforms",
    description: "Comfortable and durable school t-shirts designed for daily wear. Made with breathable fabrics and premium stitching for all-day comfort.",
    image: "/next.svg",
    products: [
      {
        id: "school-tshirt",
        title: "School T-Shirt",
        images: ["/next.svg"],
        fabrics: [{ brand: "Premium Cotton Blend", gsm: 180, blend: "65/35 Cotton-Poly" }],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        description: "Comfortable and durable school t-shirts designed for daily wear. Made with breathable fabrics and premium stitching for all-day comfort.",
      },
    ],
  },
  {
    id: "uniform-sets",
    title: "Uniform Sets",
    slug: "uniform-sets",
    description: "Smart and coordinated uniform sets ideal for school or sportswear, crafted from soft and flexible materials.",
    image: "/vercel.svg",
    products: [
      {
        id: "tshirt-shorts-set",
        title: "T-Shirt & Shorts Set",
        images: ["/vercel.svg"],
        fabrics: [{ brand: "Performance Fabric", gsm: 160, blend: "Cotton Poly" }],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Smart and coordinated t-shirt and shorts sets ideal for school or sportswear, crafted from soft and flexible materials.",
      },
      {
        id: "tshirt-skirts-set",
        title: "T-Shirt & Skirts Set",
        images: ["/window.svg"],
        fabrics: [{ brand: "Comfort Blend", gsm: 180, blend: "Cotton-Poly" }],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Stylish t-shirt and skirt sets that combine comfort with elegance, perfect for school uniforms and team attire.",
      },
    ],
  },
  {
    id: "sportswear",
    title: "Sportswear",
    slug: "sportswear",
    description: "High-performance sportswear designed for comfort, mobility, and durability.",
    image: "/globe.svg",
    products: [
      {
        id: "tracksuit",
        title: "Tracksuit",
        images: ["/globe.svg"],
        fabrics: [{ brand: "Athletic Performance", gsm: 220, blend: "Polyester-Spandex" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Premium tracksuits designed for training and performance, offering flexibility and breathability with a sleek finish.",
      },
      {
        id: "sports-tshirt",
        title: "Sports T-Shirt",
        images: ["/file.svg"],
        fabrics: [{ brand: "Moisture-Wicking", gsm: 140, blend: "Polyester-Coolmax" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Lightweight, quick-dry sports t-shirts engineered for performance and endurance, available in multiple colors.",
      },
    ],
  },
  {
    id: "casual-wear",
    title: "Casual Wear",
    slug: "casual-wear", 
    description: "Soft and comfortable casual wear made with quality fabric, ideal for workouts, casual wear, or team uniforms.",
    image: "/window.svg",
    products: [
      {
        id: "lower",
        title: "Lower",
        images: ["/window.svg"],
        fabrics: [{ brand: "Stretch Comfort", gsm: 180, blend: "Cotton-Elastane" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Soft and comfortable lowers made with quality fabric, ideal for workouts, casual wear, or team uniforms.",
      },
    ],
  },
  {
    id: "institutional-apparel",
    title: "Institutional Apparel",
    slug: "institutional-apparel",
    description: "Trendy and vibrant apparel tailored for colleges and coaching institutes, customizable with logos and colors.",
    image: "/next.svg",
    products: [
      {
        id: "college-tshirt",
        title: "College T-Shirt",
        images: ["/next.svg"],
        fabrics: [{ brand: "Premium Cotton", gsm: 200, blend: "100% Cotton" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Trendy and vibrant t-shirts tailored for college students and events, customizable with logos and colors.",
      },
      {
        id: "coaching-tshirt", 
        title: "Coaching Institute T-Shirt",
        images: ["/vercel.svg"],
        fabrics: [{ brand: "Durable Blend", gsm: 180, blend: "70/30 Cotton-Poly" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Custom-branded t-shirts for coaching institutes that promote unity and professional identity.",
      },
    ],
  },
  {
    id: "corporate-branding",
    title: "Corporate & Branding",
    slug: "corporate-branding",
    description: "High-quality promotional and corporate apparel ideal for marketing events, branding, and professional environments.",
    image: "/globe.svg",
    products: [
      {
        id: "promotional-tshirt",
        title: "Promotional T-Shirt",
        images: ["/globe.svg"],
        fabrics: [{ brand: "Economy Plus", gsm: 160, blend: "Cotton-Poly" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "High-quality promotional t-shirts ideal for marketing events, giveaways, and brand awareness campaigns.",
      },
      {
        id: "corporate-tshirt",
        title: "Corporate T-Shirt", 
        images: ["/file.svg"],
        fabrics: [{ brand: "Business Grade", gsm: 200, blend: "Cotton-Poly" }],
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        description: "Premium corporate t-shirts designed for employees and events, blending comfort with a professional look.",
      },
    ],
  },
  {
    id: "winterwear",
    title: "Winterwear",
    slug: "winterwear",
    description: "Warm and durable winter apparel ideal for schools, corporates, and teams, crafted with soft wool blends.",
    image: "/window.svg",
    products: [
      {
        id: "sweater",
        title: "Sweater",
        images: ["/window.svg"],
        fabrics: [{ brand: "Knit Blend", gsm: 240, blend: "Acrylic-Wool" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Warm and durable sweaters ideal for schools, corporates, and teams, crafted with soft wool blends.",
      },
      {
        id: "hood-jacket",
        title: "Hood Jacket",
        images: ["/next.svg"],
        fabrics: [{ brand: "Fleece Blend", gsm: 300, blend: "Cotton-Polyester" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Stylish hooded jackets designed for comfort and warmth, suitable for both casual and professional environments.",
      },
    ],
  },
  {
    id: "formalwear",
    title: "Formalwear", 
    slug: "formalwear",
    description: "Elegant and tailored formal wear for schools, colleges, and corporate uniforms, offering sophistication and comfort.",
    image: "/vercel.svg",
    products: [
      {
        id: "blazer",
        title: "Blazer",
        images: ["/vercel.svg"],
        fabrics: [{ brand: "Formal Suiting", gsm: 280, blend: "Wool Blend" }],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "Elegant and tailored blazers for schools, colleges, and corporate uniforms, offering sophistication and comfort.",
      },
    ],
  },
];