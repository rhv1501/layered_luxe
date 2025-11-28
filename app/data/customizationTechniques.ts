export interface CustomizationTechnique {
  id: string;
  title: string;
  image: string;
  summary: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  fabrics: string[];
}

export const customizationTechniques: CustomizationTechnique[] = [
  {
    id: "dtf-digital-printing",
    title: "DTF Digital Printing",
    image: "/dtf.webp",
    summary: "DTF (Direct-to-Film) printing produces vibrant and long-lasting designs on garments.",
    description: "DTF (Direct-to-Film) printing produces vibrant and long-lasting designs on garments. It's versatile, working well on various fabrics like cotton, polyester, and blends. DTF Digital Printing method delivers high-quality prints with detailed images including photos and gradients and sharp lines, making it ideal for custom designs and small-scale production.",
    benefits: [
      "Vibrant and long-lasting designs",
      "Works on various fabrics",
      "High-quality detailed prints",
      "Ideal for custom designs",
      "Perfect for small-scale production"
    ],
    idealFor: ["Custom designs", "Small production runs", "Photo prints", "Gradient designs"],
    fabrics: ["Cotton", "Polyester", "Blends"]
  },
  {
    id: "screen-printing",
    title: "Screen Printing",
    image: "/screen.webp",
    summary: "Screen printing is a versatile technique that involves transferring ink onto fabric through a mesh screen.",
    description: "Screen printing is a versatile technique that involves transferring ink onto fabric through a mesh screen. It's ideal for large production runs. Screen printing is cost-effective, especially for bulk orders, and can be used on a wide range of fabrics. It's a popular choice for band merchandise, sports apparel, and custom designs.",
    benefits: [
      "Cost-effective for bulk orders",
      "Excellent for large production runs",
      "Durable and long-lasting",
      "Wide range of fabric compatibility",
      "Vibrant color reproduction"
    ],
    idealFor: ["Band merchandise", "Sports apparel", "Bulk orders", "Corporate apparel"],
    fabrics: ["Cotton", "Polyester", "Cotton blends", "Canvas"]
  },
  {
    id: "embroidery",
    title: "Embroidery",
    image: "/embroidery.webp",
    summary: "Embroidery is a decorative needlework technique that involves using a needle and thread to create designs on fabric.",
    description: "Embroidery is a decorative needlework technique that involves using a needle and thread to create designs on fabric. It is a versatile technique that can be used to create a wide variety of designs. Embroidery can be used to add color, and texture to garments. It is a durable and long-lasting technique that can be used on a variety of fabrics.",
    benefits: [
      "Durable and long-lasting",
      "Adds texture and dimension",
      "Professional appearance",
      "Wide variety of designs possible",
      "Premium quality finish"
    ],
    idealFor: ["Corporate logos", "School uniforms", "Premium apparel", "Brand identity"],
    fabrics: ["Cotton", "Polyester", "Denim", "Canvas", "Fleece"]
  },
 {
  id: "3d-embossing",
  title: "3D Embossing",
  image: "/embossed.webp",
  summary: "3D embossing creates elevated, sculpted designs on garments, delivering a premium and textured finish.",
  description:
    "3D embossing adds depth and dimension to designs by creating raised, sculpted impressions on the fabric. It offers a premium, long-lasting finish that feels luxurious and stands out visually. This technique works exceptionally well for minimalistic yet bold branding, logos, and signature elements, providing a refined and durable aesthetic.",
  benefits: [
    "Premium raised finish",
    "Long-lasting and durable",
    "Highly detailed embossed effect",
    "Luxurious and refined look",
    "Enhances brand visibility"
  ],
  idealFor: ["Brand logos", "Premium apparel", "Minimalistic designs", "Luxury merchandise"],
  fabrics: ["Leather", "PU leather", "Thick cotton", "Hoodies", "Sweatshirt fabric"]
},

{
  id: "sublimation",
  title: "Sublimation Printing",
  image: "/sublimation.webp",
  summary: "Sublimation printing infuses vibrant, permanent colors into the fabric for full-color, high-detail designs.",
  description:
    "Sublimation printing uses heat to transfer dye directly into the fabric fibers, resulting in vibrant, permanent, and photo-quality prints. The colors do not crack, fade, or peel since the design becomes part of the material itself. This technique is perfect for all-over prints, gradients, and detailed artwork, especially on polyester-based fabrics.",
  benefits: [
    "Vibrant, permanent colors",
    "Photo-quality detailing",
    "No cracking or peeling",
    "Lightweight and smooth feel",
    "Perfect for all-over prints"
  ],
  idealFor: ["Sportswear", "Jerseys", "Polyester tees", "All-over prints", "Photo designs"],
  fabrics: ["Polyester", "Poly blends", "White/light-colored fabrics"]
},
{
  id: "batch-printing",
  title: "Woven Badges",
  image: "/batch.webp",
  summary: "Batch printing delivers consistent, high-quality prints for large-volume orders with efficient turnaround.",
  description:
    "Batch printing is ideal for producing large quantities of garments with uniform designs. It ensures consistency, cost-efficiency, and fast production across bulk orders. This method is commonly used for uniforms, events, promotional merchandise, and brand collections where the same artwork must be replicated accurately on many pieces.",
  benefits: [
    "Efficient for high-volume orders",
    "Consistent print quality",
    "Cost-effective production",
    "Fast turnaround for bulk",
    "Ideal for uniforms and events"
  ],
  idealFor: ["Bulk orders", "Corporate uniforms", "Events and campaigns", "Merchandise production"],
  fabrics: ["Cotton", "Polyester", "Cotton blends", "Activewear", "Hoodies"]
}

];