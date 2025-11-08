import Loader from "../../components/Loader";

export default function BlogPostLoading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-surface rounded w-12"></div>
            <div className="w-4 h-4 bg-surface rounded"></div>
            <div className="h-4 bg-surface rounded w-20"></div>
          </div>
        </nav>

        {/* Article Header Skeleton */}
        <article className="mb-16">
          <div className="h-12 bg-surface rounded-lg mb-6"></div>
          <div className="flex items-center space-x-6 mb-8">
            <div className="h-4 bg-surface rounded w-24"></div>
            <div className="h-4 bg-surface rounded w-20"></div>
            <div className="h-4 bg-surface rounded w-16"></div>
          </div>

          {/* Featured Image Skeleton */}
          <div className="aspect-video bg-surface rounded-2xl mb-8 animate-pulse"></div>

          {/* Loading Component */}
          <div className="flex justify-center mb-12">
            <Loader />
          </div>

          {/* Content Skeleton */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-4">
              <div className="h-4 bg-surface rounded"></div>
              <div className="h-4 bg-surface rounded"></div>
              <div className="h-4 bg-surface rounded w-4/5"></div>
              <div className="h-6 bg-surface rounded w-1/2 my-8"></div>
              <div className="h-4 bg-surface rounded"></div>
              <div className="h-4 bg-surface rounded"></div>
              <div className="h-4 bg-surface rounded w-3/4"></div>
              <div className="h-4 bg-surface rounded w-5/6"></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
