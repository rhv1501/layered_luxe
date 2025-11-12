import Link from "next/link";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../components/Loader";

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center py-8">
    <Loader />
  </div>
);

// Lazy load the uniforms grid
const UniformsGrid = dynamic(() => import("../components/UniformsGrid"), {
  loading: () => <SectionLoader />,
});

export default function UniformsPage() {
  const uniformSolutions = [
    {
      id: "corporate",
      title: "Corporate Uniforms",
      subtitle: "Corporate Attire",
      description:
        "Professional shirts, trousers, ties, and accessories for a polished corporate image.",
      image: "/corporate.png",
      href: "/products/corporate-shirts-pants",
    },
    {
      id: "school",
      title: "School Uniforms",
      subtitle: "School Uniforms",
      description:
        "Durable and comfortable school uniforms that foster pride and unity among students.",
      image: "/schooluniforms.png",
      href: "/products/school-uniforms",
    },
    {
      id: "tshirts",
      title: "Uniform T Shirts",
      subtitle: "Uniform T Shirts",
      description:
        "Semi formal t-shirts for corporate events, team-building activities, and Friday casuals.",
      image: "/tshirtuniforms.png",
      href: "/products/promotional-tshirts",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl font-bold text-text-primary lg:text-6xl mb-8">
            Our Uniform Solutions
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            From corporate attire to healthcare scrubs, we manufacture
            high-quality uniforms for every industry.
          </p>
        </div>

        {/* Uniform Solutions Grid */}
        <Suspense fallback={<SectionLoader />}>
          <UniformsGrid uniformSolutions={uniformSolutions} />
        </Suspense>

        {/* Contact CTA */}
        <div className="text-center mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 text-lg font-semibold text-primary hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Now
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Why Choose LayeredLuxe Section */}
        <section className="bg-surface/50 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl mb-6">
              Why Choose LayeredLuxe?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              With our technical expertise in garment manufacturing, we deliver
              exceptional quality uniforms tailored to your specific
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                Premium Quality
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Durable fabrics and expert craftsmanship ensure long-lasting
                uniforms that maintain their appearance.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                On-Time Delivery
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Efficient production processes and logistics ensure your
                uniforms arrive when you need them.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                Custom Design
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tailor uniforms to your brand with custom colors, logos, and
                designs that reflect your identity.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h1m7.728 1.857a3 3 0 01-7.456 0m0 0v-2a9 9 0 0110.272 0"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                Bulk Orders
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Competitive pricing and efficient handling of large-scale orders
                for organizations of any size.
              </p>
            </div>
          </div>
        </section>

        {/* Manufacturing Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              From concept to delivery, we ensure quality at every step of the
              manufacturing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                Consultation
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                We discuss your requirements, brand guidelines, and specific
                needs to create the perfect uniform solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                Design & Sampling
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our skilled craftspeople create custom designs and produce
                samples for your approval before mass production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                Production
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Using premium materials and skilled craftsmanship, we
                manufacture your uniforms with attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                QC and Dispatch
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                With quality checks at each step of the process, we ensure
                correct fit and quality along with timely dispatch.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <div className="bg-linear-to-br from-accent via-accent to-accent/80 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-heading text-4xl font-bold text-primary lg:text-5xl mb-6">
                Ready to Order Your Uniforms?
              </h2>
              <p className="text-xl text-primary/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                Get a custom quote for your organization. We&apos;ll help you
                choose the perfect products and customize them to match your
                brand perfectly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-10 py-5 text-lg font-semibold text-text-primary hover:bg-surface transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Your Quote
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="/customisation"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-10 py-5 text-lg font-semibold text-primary hover:bg-primary hover:text-accent transition-all"
                >
                  View Customization Options
                </Link>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-primary rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-primary rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-primary rounded-full"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
