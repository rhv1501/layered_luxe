import Link from "next/link";

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
      "https://images.unsplash.com/photo-1631248051267-d2f65e8d3f55?w=400&h=250&fit=crop&auto=format",
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
      "https://images.unsplash.com/photo-1594736797933-d0500ba2fe65?w=400&h=250&fit=crop&auto=format",
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
      "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=250&fit=crop&auto=format",
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-surface border border-accent/20 rounded-2xl shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <time>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="text-text-secondary mb-6 font-body leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-text-primary transition-colors group"
                  >
                    Read Article
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center rounded-2xl bg-surface border-2 border-accent px-8 py-4 text-base font-semibold text-accent hover:bg-accent hover:text-primary transition-all shadow-sm">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-surface">
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
      </section>

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
