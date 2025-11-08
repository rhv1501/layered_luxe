import Loader from "../../components/Loader";

export default function CategoryLoading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-surface rounded w-16"></div>
            <div className="w-4 h-4 bg-surface rounded"></div>
            <div className="h-4 bg-surface rounded w-20"></div>
          </div>
        </nav>

        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-surface rounded-lg mx-auto max-w-sm mb-6"></div>
          <div className="h-6 bg-surface rounded-lg mx-auto max-w-2xl"></div>
        </div>

        {/* Loading Component */}
        <div className="flex justify-center mb-12">
          <Loader />
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="bg-surface border border-accent/20 rounded-2xl p-6"
            >
              <div className="aspect-4/3 bg-secondary rounded-xl mb-4 animate-pulse"></div>
              <div className="h-6 bg-secondary rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-secondary rounded"></div>
                <div className="h-4 bg-secondary rounded w-4/5"></div>
                <div className="h-4 bg-secondary rounded w-3/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
