import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../components/Loader";

// Loading fallback component
const FormLoader = () => (
  <div className="flex justify-center py-8">
    <Loader />
  </div>
);

// Lazy load the contact form
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  loading: () => <FormLoader />,
});

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
            Get Your Custom Quote
          </h1>
          <p className="mt-4 text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to start your apparel journey? Fill out the form below and
            we&apos;ll get back to you with a custom quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
            <div className="p-6 bg-surface border border-accent/20 rounded-3xl">
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                Why Choose Layered Luxe?
              </h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Low minimum orders</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Global quality standards</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Multiple decoration options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Fast turnaround times</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-accent rounded-3xl text-primary">
              <h3 className="font-heading text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Kilpauk, Chennai</span>
                </p>
                <p className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91-90870-95955</span>
                </p>
                <p className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>layeredluxe.vs@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="text-center text-sm text-text-secondary">
              <p>Typically respond within 2-4 hours during business hours</p>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <Suspense fallback={<FormLoader />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
