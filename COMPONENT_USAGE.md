# ProductCard & ProductsGrid Component Usage

This guide shows how to use the reusable ProductCard and ProductsGrid components throughout your application.

## Components Available

- **ProductCard**: Individual product card component
- **ProductsGrid**: Grid layout component that renders multiple ProductCards
- **Product Interface**: TypeScript interface for product data
- **productsData**: Default product data from `/app/data/products.ts`

## Basic Usage

### 1. Using ProductsGrid with Default Data

```tsx
import { ProductsGrid } from "../components/ProductCard";

export default function ProductsPage() {
  return (
    <div>
      {/* Uses default products data, WhatsApp config, and grid layout */}
      <ProductsGrid />
    </div>
  );
}
```

### 2. Using ProductsGrid with Custom Data

```tsx
import { ProductsGrid } from "../components/ProductCard";

const customProducts = [
  {
    id: "custom-1",
    title: "Custom Product",
    slug: "custom-product",
    image: "/custom.jpg",
    description: "A custom product description",
    features: ["Feature 1", "Feature 2"],
  },
];

export default function CustomPage() {
  return (
    <ProductsGrid
      products={customProducts}
      whatsappMessage="Custom message for this page"
      whatsappNumber="+919876543210"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
    />
  );
}
```

### 3. Using Individual ProductCard

```tsx
import ProductCard from "../components/ProductCard";
import { productsData } from "../data/products";

export default function SingleProductExample() {
  const product = productsData[0]; // First product
  const whatsappUrl = "https://wa.me/+919876543210?text=Hello";

  return (
    <div className="max-w-sm">
      <ProductCard product={product} whatsappUrl={whatsappUrl} />
    </div>
  );
}
```

### 4. Using ProductsGrid in Different Layouts

```tsx
import { ProductsGrid } from "../components/ProductCard";
import { productsData } from "../data/products";

export default function VariousLayoutsPage() {
  // Show only first 3 products in a single row
  const featuredProducts = productsData.slice(0, 3);

  // Show last 3 products in a different layout
  const otherProducts = productsData.slice(-3);

  return (
    <div>
      {/* Featured products in single row */}
      <section>
        <h2>Featured Products</h2>
        <ProductsGrid
          products={featuredProducts}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        />
      </section>

      {/* Other products in 2-column layout */}
      <section>
        <h2>More Products</h2>
        <ProductsGrid
          products={otherProducts}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          whatsappMessage="I'm interested in these specific products!"
        />
      </section>
    </div>
  );
}
```

## Component Props

### ProductsGrid Props

- `products?: Product[]` - Array of products (defaults to imported productsData)
- `whatsappMessage?: string` - Custom WhatsApp message (defaults to config)
- `whatsappNumber?: string` - WhatsApp number (defaults to config)
- `className?: string` - Custom CSS classes for grid layout

### ProductCard Props

- `product: Product` - Single product object (required)
- `whatsappUrl: string` - Complete WhatsApp URL with message (required)

### Product Interface

```tsx
interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
}
```

## Data Management

All product data is centralized in `/app/data/products.ts`:

```tsx
import { productsData, whatsappConfig } from "../data/products";

// Use in your components
const products = productsData;
const whatsappNumber = whatsappConfig.number;
const defaultMessage = whatsappConfig.defaultMessage;
```

## Features

✅ **SSR Compatible** - Works with server-side rendering  
✅ **TypeScript** - Full type safety  
✅ **Reusable** - Use anywhere in your app  
✅ **Customizable** - Override props for different layouts  
✅ **Responsive** - Built with Tailwind responsive classes  
✅ **Interactive** - Click to navigate, WhatsApp integration  
✅ **Centralized Data** - Single source of truth for products
