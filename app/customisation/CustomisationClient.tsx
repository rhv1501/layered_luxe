"use client";

import React from "react";
import FabricSwatches from "../components/FabricSwatches";
import Image from "next/image";

type Props = {
  steps: string[];
  customizationFeatures: Array<any>;
  customizationTechniques: Array<any>;
};

export default function CustomisationClient({
  steps,
  customizationFeatures,
  customizationTechniques,
}: Props) {
  const [expandedCard, setExpandedCard] = React.useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      {/* Fabric Selection Section (interactive) */}
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

      {/* Customization Techniques Section (interactive) */}
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
                <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={technique.image}
                    alt={technique.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>

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

                <p className="text-text-secondary font-body mb-4">
                  {technique.summary}
                </p>

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

                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {technique.benefits.map(
                          (benefit: string, index: number) => (
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
                          )
                        )}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Ideal For:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {technique.idealFor.map(
                          (item: string, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-accent/20 text-accent rounded-lg text-xs font-medium"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-text-primary mb-2">
                        Compatible Fabrics:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {technique.fabrics.map(
                          (fabric: string, index: number) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-secondary/50 text-text-secondary rounded-lg text-xs"
                            >
                              {fabric}
                            </span>
                          )
                        )}
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
    </>
  );
}
