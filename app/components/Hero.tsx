import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // set the fetchpriority attribute at runtime to avoid TypeScript type errors
    // and ensure the browser treats this video as high priority when supported.
    if (
      videoRef.current &&
      typeof videoRef.current.setAttribute === "function"
    ) {
      try {
        videoRef.current.setAttribute("fetchpriority", "high");
      } catch {
        // ignore if the attribute isn't supported or setting fails
      }
    }
  }, []);

  return (
    <section className="relative w-full">
      {/* Video Background with responsive aspect ratio */}
      <div className="relative w-full aspect-square md:aspect-16/7">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-manufacturing.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
