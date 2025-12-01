import React from "react";
import Link from "next/link";

export const metadata = {
  title: "The Layered Luxe-Quality & Standards",
  description:
    "Premium materials and world-class craftsmanship that set us apart in the global apparel manufacturing industry",
  alternates: {
    canonical: "https://thelayeredluxe.com/quality",
  },
};
export default function QualityPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
            Quality & Standards
          </h1>
          <p className="mt-4 text-xl text-text-secondary max-w-2xl mx-auto">
            Premium materials and world-class craftsmanship that set us apart in
            the global apparel manufacturing industry
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <section>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-3">
              Premium Fabric Partners
            </h2>
            <p className="text-text-secondary mb-8">
              We collaborate exclusively with India&apos;s most trusted fabric
              manufacturers to ensure consistent quality and reliability
            </p>

            <div className="space-y-6">
              <div className="rounded-3xl border border-accent/20 p-6 bg-surface hover:shadow-lg hover:border-accent/40 transition-all">
                <h3 className="font-semibold text-text-primary text-lg">
                  Mafatlal Industries
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  Industry-leading cotton blends with superior color-fastness
                  and pre-shrunk technology
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    GSM: 160-220
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Cotton-Poly Blends
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Premium Quality
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-accent/20 p-6 bg-surface hover:shadow-lg hover:border-accent/40 transition-all">
                <h3 className="font-semibold text-text-primary text-lg">
                  Mayur Fabrics
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  Premium suiting and shirting fabrics for corporate and formal
                  wear applications
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    GSM: 180-250
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Formal Grade
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Wrinkle Resistant
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-accent/20 p-6 bg-surface hover:shadow-lg hover:border-accent/40 transition-all">
                <h3 className="font-semibold text-text-primary text-lg">
                  Performance Athletics
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  Advanced moisture-wicking and breathable fabrics engineered
                  for peak athletic performance
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    GSM: 140-180
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    Quick-Dry Tech
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full">
                    UV Protection
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-text-primary mb-3">
              Craftsmanship & Finishing
            </h2>
            <p className="text-text-secondary mb-8">
              Every garment undergoes rigorous quality control to meet
              international standards and exceed expectations
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-accent shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-base">
                    Double-Needle Reinforced Stitching
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Industrial-grade stitching techniques for maximum durability
                    and longevity in daily wear
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-accent shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-base">
                    Ergonomic Design Features
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Strategic side-slits and comfort panels for enhanced
                    movement and all-day comfort
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-accent shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-base">
                    Advanced Color-Fastness Technology
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Proprietary color-locking process ensures vibrant colors
                    that resist fading through countless washes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-accent shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-base">
                    Pre-Shrunk Precision Processing
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Controlled shrinkage treatment guarantees consistent fit and
                    size retention over time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-accent shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-text-primary text-base">
                    Quality Assurance Testing
                  </h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Multi-stage quality control process including fabric
                    inspection, stitching validation, and final inspection
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Precision Fit & Modern Styling
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Contemporary cuts designed for comfort, performance, and
              professional appearance across all body types
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-3xl bg-surface border border-accent/20 hover:shadow-lg hover:border-accent/40 transition-all">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-text-primary text-lg mb-3">
                Regular Fit
              </h3>
              <p className="text-sm text-text-secondary">
                Classic, comfortable everyday wear with a relaxed silhouette
                perfect for all-day comfort and professional settings
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-surface border border-accent/20 hover:shadow-lg hover:border-accent/40 transition-all">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-8 bg-accent rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-text-primary text-lg mb-3">
                Slim Fit
              </h3>
              <p className="text-sm text-text-secondary">
                Modern, tailored silhouette that provides a contemporary look
                while maintaining comfort and freedom of movement
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-surface border border-accent/20 hover:shadow-lg hover:border-accent/40 transition-all">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-8 bg-accent rounded-lg"></div>
              </div>
              <h3 className="font-semibold text-text-primary text-lg mb-3">
                Athletic Fit
              </h3>
              <p className="text-sm text-text-secondary">
                Performance-oriented design engineered for sports and active
                wear with moisture management and enhanced mobility
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-3xl bg-accent border border-accent/50 p-12 text-center text-primary">
          <h2 className="font-heading text-3xl font-bold lg:text-4xl mb-4">
            Experience Our Quality Standards
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">
            Request samples to feel the difference in quality, craftsmanship,
            and attention to detail that sets us apart
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-surface transition-all shadow-lg"
            >
              Request Samples
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-text-primary transition-all"
            >
              Browse Products
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
