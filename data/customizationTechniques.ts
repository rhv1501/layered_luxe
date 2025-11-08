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
    image: "/vercel.svg",
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
    image: "/next.svg",
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
    image: "/window.svg",
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
    id: "puff-printing",
    title: "Puff Printing",
    image: "/globe.svg",
    summary: "Puff printing creates raised, 3D designs on garments with vibrant colors and a soft tactile feel.",
    description: "Puff printing creates raised, 3D designs on garments. It offers vibrant colors, a soft and tactile feel, and a unique visual appeal. This technique is versatile, working well on various fabrics and adding a touch of luxury to clothing. It's particularly popular for logos, designs, and text, making it a great choice for branding and customization.",
    benefits: [
      "Creates raised 3D designs",
      "Soft and tactile feel",
      "Vibrant color options",
      "Unique visual appeal",
      "Adds luxury touch"
    ],
    idealFor: ["Logos", "Branding", "Text designs", "Fashion apparel"],
    fabrics: ["Cotton", "Cotton blends", "Fleece", "Sweatshirt material"]
  },
  {
    id: "silicone-hd-printing",
    title: "Silicone HD Printing",
    image: "/file.svg",
    summary: "Silicone HD printing offers a luxurious and high-quality finish using laser-cut vinyl rolls.",
    description: "Silicone HD printing offers a luxurious and high-quality finish. It uses laser-cut vinyl rolls to create 3D, raised designs with vibrant colors. This technique is durable, water-resistant, and perfect for adding a premium touch to garments. It's ideal for logos, designs, and text, and is a great choice for luxury fashion, streetwear and sportswear.",
    benefits: [
      "Luxurious high-quality finish",
      "3D raised designs",
      "Water-resistant",
      "Durable and long-lasting",
      "Premium feel"
    ],
    idealFor: ["Luxury fashion", "Streetwear", "Sportswear", "Premium branding"],
    fabrics: ["Cotton", "Polyester", "Performance fabrics", "Athletic wear"]
  },
  {
    id: "gold-foil-printing",
    title: "Gold Foil Printing",
    image: "/vercel.svg",
    summary: "Gold printing adds a touch of luxury and elegance to garments using laser-cut, textured vinyl rolls.",
    description: "Gold printing adds a touch of luxury and elegance to garments. It uses laser-cut, textured vinyl rolls to create stunning, gold-colored designs. This technique offers a real, glittery gold look, making it perfect for special occasions, costume design, dance apparel and high-end fashion. It's durable, water-resistant, and adds a premium feel to any garment.",
    benefits: [
      "Luxurious gold finish",
      "Real glittery appearance",
      "Durable and water-resistant",
      "Perfect for special occasions",
      "Premium aesthetic"
    ],
    idealFor: ["Special occasions", "Costume design", "Dance apparel", "High-end fashion"],
    fabrics: ["Cotton", "Polyester", "Satin", "Velvet", "Performance fabrics"]
  },
  {
    id: "chenille-embroidery",
    title: "Chenille Embroidery",
    image: "/window.svg",
    summary: "Chenille embroidery creates a plush, velvety look on garments using special yarns.",
    description: "Chenille embroidery creates a plush, velvety look on garments. It uses special yarns to form raised, textured designs with a luxurious feel. This technique is perfect for adding a touch of elegance and sophistication to clothing. It's ideal for logos, designs, and text, and is commonly used in high-end sportswear such as Varsity Jackets.",
    benefits: [
      "Plush velvety texture",
      "Luxurious feel",
      "Raised textured designs",
      "Elegant and sophisticated",
      "Premium quality finish"
    ],
    idealFor: ["Varsity jackets", "High-end sportswear", "Luxury apparel", "School letterman jackets"],
    fabrics: ["Wool", "Cotton", "Polyester blends", "Fleece", "Varsity jacket materials"]
  }
];