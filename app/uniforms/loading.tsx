import Loader from "../components/Loader";

export default function UniformsLoading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-20">
          <div className="h-14 bg-surface rounded-lg mx-auto max-w-lg mb-8"></div>
          <div className="h-6 bg-surface rounded-lg mx-auto max-w-3xl"></div>
        </div>

        {/* Loading Component */}
        <div className="flex justify-center mb-16">
          <Loader />
        </div>

        {/* Uniform Solutions Grid Skeleton */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface border border-accent/20 rounded-3xl overflow-hidden"
            >
              <div className="aspect-4/3 bg-secondary animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-secondary rounded mb-2"></div>
                <div className="h-4 bg-accent/20 rounded mb-3 w-32"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-secondary rounded"></div>
                  <div className="h-4 bg-secondary rounded w-4/5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section Skeleton */}
        <section className="bg-surface/50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <div className="h-12 bg-secondary rounded mx-auto max-w-md mb-6"></div>
            <div className="h-6 bg-secondary rounded mx-auto max-w-2xl"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-6"></div>
                <div className="h-6 bg-secondary rounded mb-3 mx-auto w-32"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-secondary rounded"></div>
                  <div className="h-3 bg-secondary rounded w-4/5 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
