import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../components/Loader";

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center py-8">
    <Loader />
  </div>
);
export const metadata = {
  title: "The Layered Luxe-Blogs & Insights",
  description:
    "Stay updated with expert advice on uniforms, fabrics, and styling for institutions, teams, and professional environments.",
  alternates: {
    canonical: "https://thelayeredluxe.com/blog",
  },
};

// Lazy load the blog grid
const BlogGrid = dynamic(() => import("../components/BlogGrid"), {
  loading: () => <SectionLoader />,
});

const blogPosts = [
  {
    id: "gsm-uniform-fabric",
    title: "Why GSM Matters in School Uniforms",
    excerpt:
      "Understanding fabric weight and its impact on durability, comfort, and appearance in school uniforms.",
    date: "November 1, 2025",
    readTime: "5 min read",
    category: "Fabric Guide",
    image:
      "https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "school-tracksuit-guide",
    title: "5 Things to Check When Choosing School Tracksuits",
    excerpt:
      "Essential factors to consider when selecting tracksuits for your school or sports program.",
    date: "October 28, 2025",
    readTime: "4 min read",
    category: "Buying Guide",
    image:
      "https://images.unsplash.com/photo-1603373577790-b635631b0302?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "corporate-uniform-branding",
    title: "How Corporate Uniforms Reinforce Brand Identity",
    excerpt:
      "A case study on how professional uniforms contribute to company culture and brand recognition.",
    date: "October 25, 2025",
    readTime: "6 min read",
    category: "Corporate",
    image:
      "https://images.unsplash.com/photo-1762504366698-46550e162068?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "uniform-care-tips",
    title: "Caring for Your Uniforms: Washing & Storage Tips",
    excerpt:
      "Proper maintenance techniques to extend the life and appearance of your uniforms.",
    date: "October 20, 2025",
    readTime: "3 min read",
    category: "Care Guide",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=250&fit=crop&auto=format",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
              Blog & Insights
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-text-secondary font-body">
              Expert advice on uniforms, fabrics, and styling for institutions,
              teams, and professional environments.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<SectionLoader />}>
            <BlogGrid blogPosts={blogPosts} />
          </Suspense>

          {/* Load More Section */}
          {/* <div className="mt-16 text-center">
            <button className="inline-flex items-center rounded-2xl bg-surface border-2 border-accent px-8 py-4 text-base font-semibold text-accent hover:bg-accent hover:text-primary transition-all shadow-sm">
              Load More Articles
            </button>
          </div> */}
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-accent rounded-3xl p-12 text-primary border border-accent/50">
            <h2 className="font-heading text-3xl font-bold lg:text-4xl">
              Stay Updated with Industry Insights
            </h2>
            <p className="mt-4 text-lg text-primary/80 max-w-2xl mx-auto font-body">
              Get the latest trends, tips, and expert advice delivered to your
              inbox monthly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl px-4 py-3 bg-background text-text-primary border border-accent/30 focus:border-accent outline-none placeholder-text-secondary/60"
              />
              <button className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-text-primary hover:bg-surface transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
            Have Specific Questions?
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
            Our uniform experts are ready to help with your specific
            requirements and provide personalized recommendations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 text-base font-semibold text-primary hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
            >
              Get Expert Advice
            </a>
            <a
              href="/catalogue.pdf"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-accent px-8 py-4 text-base font-semibold text-accent hover:bg-accent hover:text-primary transition-all"
              download
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
