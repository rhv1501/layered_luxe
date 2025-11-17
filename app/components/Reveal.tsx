"use client";

import dynamic from "next/dynamic";
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Reveal({
  children,
  delay = 0.2,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40}}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionDiv>
  );
}
