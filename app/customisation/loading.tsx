import Loader from "../components/Loader";

export default function CustomisationLoading() {
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

        {/* Customisation Options Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div className="h-8 bg-surface rounded w-64"></div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-surface border border-accent/20 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl mb-4"></div>
                <div className="h-6 bg-secondary rounded mb-3 w-48"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-secondary rounded"></div>
                  <div className="h-4 bg-secondary rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="aspect-square bg-surface rounded-3xl animate-pulse"></div>
        </div>

        {/* Decoration Techniques Skeleton */}
        <section className="mb-20">
          <div className="h-8 bg-surface rounded mx-auto max-w-md mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-surface rounded-2xl p-4">
                <div className="aspect-square bg-secondary rounded-xl mb-3 animate-pulse"></div>
                <div className="h-4 bg-secondary rounded mx-auto w-20"></div>
              </div>
            ))}
          </div>
        </section>

        {/* MOQ Section Skeleton */}
        <section className="bg-surface/50 rounded-3xl p-12">
          <div className="h-8 bg-secondary rounded mx-auto max-w-sm mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="text-center p-6 bg-background rounded-2xl"
              >
                <div className="h-8 bg-accent/20 rounded mx-auto w-16 mb-4"></div>
                <div className="h-6 bg-secondary rounded mx-auto w-32 mb-2"></div>
                <div className="h-4 bg-secondary rounded mx-auto w-24"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
