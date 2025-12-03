// Server component: interactive parts moved to `CustomisationClient`
import CustomisationClient from "./CustomisationClient";
import { customizationTechniques } from "../data/customizationTechniques";
export const metadata = {
  title: "The Layered Luxe-order process & Customisation",
  description:
    "Discover The Layered Luxe's bespoke customisation services for uniforms and apparel. From fabric selection to logo embroidery, we tailor solutions to your brand's needs.",
  alternates: {
    canonical: "https://thelayeredluxe.com/customisation",
  },
};

export default function CustomisationPage() {
  const steps = [
    "Requirement Discussion",
    "Fabric & Style Selection",
    "Design Finalization",
    "Production Begins",
    "Final Quality Check",
    "Delivery / Dispatch",
  ];

  const customizationFeatures = [
    {
      title: "Logo & Embroidery",
      description:
        "Premium embroidery, screen printing, and sublimation options",
      icon: "✨",
      features: [
        "Custom logo placement",
        "Multiple printing techniques",
        "Color matching",
        "Quality assurance",
      ],
    },
    {
      title: "Tailored Fits",
      description:
        "Tailored fits for every body type and professional requirement",
      icon: "📏",
      features: [
        "Custom measurements",
        "Size grading",
        "Fit samples",
        "Adjustment services",
      ],
    },
    {
      title: "Fabric & Style Selection",
      description:
        "Premium fabrics sourced globally for durability and comfort",
      icon: "🧵",
      features: [
        "Cotton blends",
        "Performance fabrics",
        "Eco-friendly options",
        "Weather-resistant materials",
      ],
    },
    {
      title: "RequirementDiscussion",
      description: "Work with our design team to create the perfect uniform",
      icon: "🎨",
      features: [
        "Color consultation",
        "Style recommendations",
        "Mockup creation",
        "Brand alignment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
              Custom Apparel Solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-text-secondary font-body">
              From concept to creation, we bring your vision to life with
              premium customization options and professional-grade
              manufacturing.
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Our Customization Process
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              A streamlined workflow designed for institutional clients and
              businesses
            </p>
          </div>

          {/* <div className="mt-8">
            <Stepper steps={steps} current={2} />
          </div> */}

          {/* Process Details */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="text-center group">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <span className="font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold text-text-primary">{step}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {index === 0 &&
                    "Understanding fabric, quantity, design, purpose, colors, budget"}
                  {index === 1 &&
                    "Choosing fabric type, style, GSM, colors, and printing method"}
                  {index === 2 &&
                    "Submitting logo or design files; minor adjustments if needed"}
                  {index === 3 &&
                    "Cutting, stitching, pinting, embroidery, and quality check in-house"}
                  {index === 4 &&
                    "Checking stitching, color, logo alignment, size and fabric finishing"}
                  {index === 5 &&
                    "Delivering the complete order within the specified timeline"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Features */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Customization Options
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Every detail matters. Explore our comprehensive customization
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {customizationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-surface border border-accent/20 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary mb-6 font-body">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-text-secondary"
                    >
                      <svg
                        className="w-4 h-4 text-accent mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive sections are rendered client-side */}
      <CustomisationClient
        steps={steps}
        customizationFeatures={customizationFeatures}
        customizationTechniques={customizationTechniques}
      />

      {/* CTA Section */}
      <section className="py-20 bg-accent border-t border-accent/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary lg:text-4xl">
            Ready to Create Your Custom Apparel?
          </h2>
          <p className="mt-4 text-lg text-primary/80 max-w-2xl mx-auto font-body">
            Let&apos;s discuss your project requirements and bring your vision
            to life with our premium customization services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-surface transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/catalogue.pdf"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-text-primary transition-all"
              download
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
