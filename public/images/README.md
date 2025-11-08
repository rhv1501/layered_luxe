# Product Images Structure

This directory contains all product images for the Layered Luxe website.

## Folder Structure

```
/public/images/
├── categories/           # Category hero images
│   ├── menswear.jpg
│   ├── womenswear.jpg
│   ├── kidswear.jpg
│   ├── polo-tees.jpg
│   └── custom-logo-tees.jpg
├── products/            # Individual product images
│   ├── menswear/
│   │   ├── t-shirts.jpg
│   │   ├── polo-t-shirts.jpg
│   │   ├── oversized-t-shirts.jpg
│   │   ├── mens-hoodies.jpg
│   │   ├── sweatshirts.jpg
│   │   ├── formal-shirts.jpg
│   │   ├── pajamas.jpg
│   │   ├── formal-pants.jpg
│   │   ├── shorts.jpg
│   │   ├── hawaiian-shirts.jpg
│   │   ├── mens-bathrobes.jpg
│   │   ├── mens-cargo-pants.jpg
│   │   ├── mens-jeans-pants.jpg
│   │   ├── mens-denim-jackets.jpg
│   │   ├── mens-track-pants.jpg
│   │   └── mens-athletic-tanks.jpg
│   ├── womenswear/
│   │   ├── womens-t-shirts.jpg
│   │   ├── oversized-tees.jpg
│   │   ├── womens-hoodies.jpg
│   │   ├── yoga-pants.jpg
│   │   ├── womens-shorts.jpg
│   │   ├── womens-tank-tops.jpg
│   │   ├── womens-co-ord-sets.jpg
│   │   ├── womens-pajama-shorts.jpg
│   │   └── womens-jeggings.jpg
│   ├── kidswear/
│   │   ├── kids-t-shirts.jpg
│   │   ├── polo-t-shirts.jpg
│   │   ├── baby-onesies.jpg
│   │   ├── baby-rompers.jpg
│   │   ├── kids-pajamas.jpg
│   │   ├── kids-vests.jpg
│   │   ├── kids-shorts.jpg
│   │   └── baby-underpants.jpg
│   ├── polo-tees/
│   │   ├── cotton-polo-tees.jpg
│   │   ├── pique-knit-polo-tees.jpg
│   │   ├── performance-polo-tees.jpg
│   │   └── customized-polo-tees.jpg
│   └── custom-logo-tees/
│       ├── corporate-logo-tees.jpg
│       ├── event-promotional-tees.jpg
│       ├── team-sports-tees.jpg
│       └── custom-printed-tees.jpg
└── default-product.jpg   # Fallback image for missing products
```

## Image Requirements

- **Format**: JPG or PNG
- **Recommended Size**: 800x600px (4:3 aspect ratio)
- **Quality**: High-resolution for web display
- **File Naming**: Use lowercase with hyphens (e.g., `mens-t-shirts.jpg`)
- **Alt Text**: Automatically generated from product name

## Automatic Fallbacks

The system includes automatic fallbacks:

1. First tries: `/images/products/[category]/[product-name].jpg`
2. If missing, shows: placeholder until images are added
3. Category images: `/images/categories/[category].jpg`

## Adding New Images

1. **For Products**: Add to respective category folder with exact filename matching
2. **For Categories**: Add to `/images/categories/` folder
3. **Naming Convention**: Convert product names to lowercase, replace spaces with hyphens, remove apostrophes

## Current Status

✅ Directory structure created
⚠️ Images need to be added manually
📝 Automatic filename conversion implemented
🔄 Fallback system in place

## Example Mapping

Product Name → Filename:

- "Men's T-Shirts" → `mens-t-shirts.jpg`
- "Women's Co-Ord Sets" → `womens-co-ord-sets.jpg`
- "Baby Onesies" → `baby-onesies.jpg`
- "Cotton Polo Tees" → `cotton-polo-tees.jpg`
