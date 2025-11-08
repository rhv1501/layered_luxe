import Loader from "../components/Loader";

export default function QualityLoading() {
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

        {/* Quality Standards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface border border-accent/20 rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl mb-6"></div>
              <div className="h-6 bg-secondary rounded mb-3 w-48"></div>
              <div className="space-y-2">
                <div className="h-4 bg-secondary rounded"></div>
                <div className="h-4 bg-secondary rounded w-4/5"></div>
                <div className="h-4 bg-secondary rounded w-3/5"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section Skeleton */}
        <section className="bg-surface/50 rounded-3xl p-12 mb-20">
          <div className="h-8 bg-secondary rounded mx-auto max-w-sm mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="aspect-square bg-secondary rounded-2xl mb-4 animate-pulse"></div>
                <div className="h-4 bg-secondary rounded mx-auto w-24"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-2xl mx-auto mb-6"></div>
              <div className="h-6 bg-secondary rounded mb-3 mx-auto w-32"></div>
              <div className="space-y-2">
                <div className="h-3 bg-secondary rounded"></div>
                <div className="h-3 bg-secondary rounded w-4/5 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
