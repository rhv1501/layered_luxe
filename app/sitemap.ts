import { productsData } from "@/app/data/products";
import { blogPosts } from "@/app/data/blogPosts";

export default function sitemap() {
  const baseUrl = "https://www.thelayeredluxe.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/products",
    "/uniforms",
    "/quality",
    "/customisation",
    "/blog",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // Product dynamic routes: /products/[slug]
  const productPages = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date().toISOString(),
  }));

  // Blog dynamic routes: /blogs/[slug]
  const blogPages = Object.keys(blogPosts).map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
