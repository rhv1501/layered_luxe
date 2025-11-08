import Loader from "../components/Loader";

export default function ProductsLoading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-surface rounded-lg mx-auto max-w-md mb-6"></div>
          <div className="h-6 bg-surface rounded-lg mx-auto max-w-2xl"></div>
        </div>

        {/* Loading Component */}
        <div className="flex justify-center mb-12">
          <Loader />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface border border-accent/20 rounded-2xl overflow-hidden"
            >
              <div className="aspect-4/3 bg-secondary animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-secondary rounded mb-3"></div>
                <div className="h-4 bg-secondary rounded mb-2"></div>
                <div className="h-4 bg-secondary rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
