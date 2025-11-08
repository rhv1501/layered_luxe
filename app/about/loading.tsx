import Loader from "../components/Loader";

export default function AboutLoading() {
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

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="h-8 bg-surface rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-surface rounded"></div>
              <div className="h-4 bg-surface rounded"></div>
              <div className="h-4 bg-surface rounded w-5/6"></div>
            </div>
          </div>
          <div className="aspect-square bg-surface rounded-3xl animate-pulse"></div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center p-6 bg-surface rounded-2xl">
              <div className="h-8 bg-secondary rounded mx-auto w-16 mb-2"></div>
              <div className="h-4 bg-secondary rounded mx-auto w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
