const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        {/* Simple spinning loader with Tailwind */}
        <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>

        {/* Brand loader with company colors */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-accent/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
