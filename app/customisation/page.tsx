"use client";

// import Stepper from "../components/Stepper";
import FabricSwatches from "../components/FabricSwatches";
import { customizationTechniques } from "../data/customizationTechniques";
import Image from "next/image";
import React from "react";

export default function CustomisationPage() {
  const [expandedCard, setExpandedCard] = React.useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };
  const steps = [
    "RequirementDiscussion",
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

      {/* Fabric Selection Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl mb-6">
                Premium Fabric Selection
              </h2>
              <p className="text-lg text-text-secondary mb-8 font-body">
                Choose from our curated collection of premium fabrics, each
                selected for durability, comfort, and professional appearance.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      Quality Assurance
                    </h4>
                    <p className="text-text-secondary">
                      Every fabric undergoes rigorous testing for color-fastness
                      and durability
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      Sustainable Options
                    </h4>
                    <p className="text-text-secondary">
                      Eco-friendly fabrics available for environmentally
                      conscious brands
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5"></div>
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      Sample Service
                    </h4>
                    <p className="text-text-secondary">
                      Free fabric samples for approval before production
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-accent/20 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-6">
                Fabric & Color Selection
              </h3>
              <p className="text-text-secondary mb-6 font-body">
                Select from our branded fabrics and color swatches to match your
                brand identity.
              </p>
              <div className="mb-6">
                <FabricSwatches
                  onSelect={(selection) => {
                    console.log("Selected fabric:", selection);
                  }}
                />
              </div>
              <div className="bg-surface border border-accent/20 rounded-xl p-6">
                <h4 className="font-semibold text-text-primary mb-3">
                  Sample Information
                </h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-accent mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sample turnaround: 5-7 business days
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-accent mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Color-fastness testing included
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-accent mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Shrink-resistance verification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Techniques Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Customization Techniques
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Explore our comprehensive range of decoration and customization
              techniques, each designed to bring your vision to life with
              precision and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {customizationTechniques.map((technique) => (
              <div
                key={technique.id}
                className="bg-surface p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30 group cursor-pointer"
                onClick={() => toggleCard(technique.id)}
              >
                {/* Technique Image */}
                <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={technique.image}
                    alt={technique.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Technique Title */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-text-primary font-heading">
                    {technique.title}
                  </h3>
                  <div className="shrink-0">
                    <svg
                      className={`w-5 h-5 text-accent transition-transform duration-300 ${
                        expandedCard === technique.id
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-text-secondary font-body mb-4">
                  {technique.summary}
                </p>

                {/* Expandable Details */}
                <div
                  className={`overflow-auto transition-all duration-300 ease-in-out ${
                    expandedCard === technique.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-accent/20">
                    <p className="text-text-secondary font-body leading-relaxed mb-4">
                      {technique.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {technique.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-text-secondary"
                          >
                            <svg
                              className="w-3 h-3 text-accent mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Ideal For:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {technique.idealFor.map((item, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-accent/20 text-accent rounded-lg text-xs font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compatible Fabrics */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Compatible Fabrics:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {technique.fabrics.map((fabric, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-secondary/50 text-text-secondary rounded-lg text-xs"
                          >
                            {fabric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {expandedCard === technique.id && (
                      <div className="mt-4">
                        <button
                          className="text-accent font-medium text-sm hover:text-accent/80 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCard(null);
                          }}
                        >
                          Show Less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Click to Expand Hint */}
                {expandedCard !== technique.id && (
                  <div className="mt-4 text-center">
                    <span className="text-accent text-sm font-medium">
                      Click to learn more ↓
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
