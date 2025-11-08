export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Video Background with responsive aspect ratio */}
      <div className="relative w-full aspect-square md:aspect-16/7">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-manufacturing.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
