"use client";

import { useEffect, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Reveal({
  children,
  delay = 0.2,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // schedule mount on next frame to avoid synchronous state update inside effect
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) {
    // Return a static version that does NOT animate → fixes hydration
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionDiv>
  );
}
