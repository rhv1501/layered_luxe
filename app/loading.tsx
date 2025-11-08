import Loader from "./components/Loader";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <Loader />
        <p className="mt-4 text-sm text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
