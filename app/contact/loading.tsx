import Loader from "../components/Loader";

export default function ContactLoading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 bg-surface rounded-lg mx-auto max-w-md mb-6"></div>
          <div className="h-6 bg-surface rounded-lg mx-auto max-w-2xl"></div>
        </div>

        {/* Loading Component */}
        <div className="flex justify-center mb-16">
          <Loader />
        </div>

        {/* Contact Form and Info Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form Skeleton */}
          <div className="bg-surface rounded-3xl p-8">
            <div className="h-8 bg-secondary rounded mb-6 w-48"></div>
            <div className="space-y-6">
              <div className="h-12 bg-secondary rounded"></div>
              <div className="h-12 bg-secondary rounded"></div>
              <div className="h-12 bg-secondary rounded"></div>
              <div className="h-32 bg-secondary rounded"></div>
              <div className="h-12 bg-accent/20 rounded"></div>
            </div>
          </div>

          {/* Contact Info Skeleton */}
          <div className="space-y-8">
            <div className="h-8 bg-surface rounded w-56"></div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-surface rounded-2xl p-6">
                <div className="h-6 bg-secondary rounded w-32 mb-3"></div>
                <div className="h-4 bg-secondary rounded w-48"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
