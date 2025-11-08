import Loader from "../components/Loader";

export default function TestimonialsLoading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-surface rounded-lg mx-auto max-w-md mb-6"></div>
          <div className="h-6 bg-surface rounded-lg mx-auto max-w-3xl mb-4"></div>
          <div className="h-6 bg-surface rounded-lg mx-auto max-w-2xl"></div>
        </div>

        {/* Loading Component */}
        <div className="flex justify-center mb-16">
          <Loader />
        </div>

        {/* Testimonials Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface border border-accent/20 rounded-2xl p-8"
            >
              {/* Stars Skeleton */}
              <div className="flex space-x-1 mb-6">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <div
                    key={starIndex}
                    className="w-5 h-5 bg-accent/20 rounded"
                  ></div>
                ))}
              </div>

              {/* Quote Skeleton */}
              <div className="space-y-3 mb-6">
                <div className="h-4 bg-secondary rounded"></div>
                <div className="h-4 bg-secondary rounded"></div>
                <div className="h-4 bg-secondary rounded w-4/5"></div>
              </div>

              {/* Author Skeleton */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-secondary rounded w-24"></div>
                  <div className="h-3 bg-secondary rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section Skeleton */}
        <section className="bg-surface/50 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-12 bg-accent/20 rounded mx-auto w-20 mb-4"></div>
                <div className="h-6 bg-secondary rounded mx-auto w-32 mb-2"></div>
                <div className="h-4 bg-secondary rounded mx-auto w-28"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
