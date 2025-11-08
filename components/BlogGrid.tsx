import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogGridProps {
  blogPosts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogPosts }) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="group bg-surface border border-accent/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-2"
        >
          <div className="aspect-video relative overflow-hidden bg-secondary">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-110 transition-transform duration-300"
              unoptimized
            />
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center text-xs text-text-secondary mb-3">
              <time>{post.date}</time>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="font-heading text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-3 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-sm transition-colors"
            >
              Read Article
              <svg
                className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
  );
};

export default BlogGrid;
