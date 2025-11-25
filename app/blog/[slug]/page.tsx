import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/app/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-12 text-center">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold text-primary mb-6 sm:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-sm text-text-secondary">
            <time className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {post.date}
            </time>
            <span className="text-gray-300">•</span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-surface rounded-2xl shadow-sm p-8 lg:p-12">
          <article
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:text-primary prose-strong:text-text-primary prose-li:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12">
          <div className="bg-linear-to-r from-accent via-accent to-accent rounded-2xl p-8 lg:p-12 text-center text-primary">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Need Expert Advice on Uniforms?
            </h3>
            <p className="text-primary/90 mb-6 max-w-2xl mx-auto font-body">
              Our team of uniform specialists is ready to help you make the
              right choices for your institution or organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-background px-6 py-3 text-base font-semibold text-text-primary hover:bg-surface transition-all"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/catalogue.pdf"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-accent transition-all"
                download
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
