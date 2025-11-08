import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    role: "Principal",
    organization: "St. Mary's School",
    content:
      "Layered Luxe delivered exceptional quality uniforms for our 500+ students. The fabric quality and stitching are outstanding, and the students love the comfortable fit.",
    rating: 5,
    type: "Education",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "HR Manager",
    organization: "Tech Corp India",
    content:
      "Professional service from start to finish. The corporate uniforms enhanced our team's appearance and the customization options were exactly what we needed.",
    rating: 5,
    type: "Corporate",
    avatar: "RK",
  },
  {
    id: 3,
    name: "Coach Arjun Patel",
    role: "Head Coach",
    organization: "Champions FC",
    content:
      "The sports uniforms are fantastic! Breathable fabric, perfect fit, and the team looks great on and off the field. Highly recommend for sports teams.",
    rating: 5,
    type: "Sports",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Mrs. Sunita Mehta",
    role: "Administrative Head",
    organization: "Delhi Coaching Institute",
    content:
      "Excellent turnaround time and quality. The logo embroidery was perfect and the uniforms have maintained their color and shape after multiple washes.",
    rating: 5,
    type: "Education",
    avatar: "SM",
  },
  {
    id: 5,
    name: "Mr. Vikram Singh",
    role: "Purchase Manager",
    organization: "Green Valley School",
    content:
      "Managing uniforms for 800+ students is challenging, but Layered Luxe made it seamless. Great coordination and timely delivery across all variants.",
    rating: 5,
    type: "Education",
    avatar: "VS",
  },
  {
    id: 6,
    name: "Ms. Kavya Reddy",
    role: "Brand Manager",
    organization: "Elite Enterprises",
    content:
      "The corporate blazers and shirts perfectly represent our brand. The attention to detail and fabric quality exceeded our expectations.",
    rating: 5,
    type: "Corporate",
    avatar: "KR",
  },
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "50,000+", label: "Uniforms Delivered" },
  { number: "5 Years", label: "Industry Experience" },
  { number: "99%", label: "Client Satisfaction" },
];

const portfolioItems = [
  {
    id: 1,
    client: "St. Mary's School",
    category: "School Uniforms",
    volume: "500+ sets",
    year: "2025",
    image: "/next.svg",
    description:
      "Complete school uniform program including T-shirts, skirts, and shorts in navy and white.",
  },
  {
    id: 2,
    client: "Tech Corp India",
    category: "Corporate",
    volume: "200+ sets",
    year: "2024",
    image: "/vercel.svg",
    description:
      "Corporate polo shirts and blazers for a leading technology company.",
  },
  {
    id: 3,
    client: "Champions FC",
    category: "Sports",
    volume: "50+ sets",
    year: "2025",
    image: "/window.svg",
    description:
      "Custom tracksuits and sports T-shirts for local football club.",
  },
  {
    id: 4,
    client: "Delhi Coaching Institute",
    category: "College",
    volume: "300+ sets",
    year: "2024",
    image: "/globe.svg",
    description: "Coaching institute uniforms with custom logo embroidery.",
  },
  {
    id: 5,
    client: "Green Valley School",
    category: "School Uniforms",
    volume: "800+ sets",
    year: "2024",
    image: "/file.svg",
    description:
      "Large-scale uniform program with multiple variants and seasonal options.",
  },
  {
    id: 6,
    client: "Elite Enterprises",
    category: "Corporate",
    volume: "150+ sets",
    year: "2025",
    image: "/next.svg",
    description:
      "Professional corporate wear including shirts, blazers, and promotional T-shirts.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
              What Our Clients Say
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-text-secondary font-body">
              Discover why schools, corporates, and sports teams trust us with
              their uniform needs. Real stories from satisfied clients.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl font-bold text-accent lg:text-4xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-text-secondary font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-surface border border-accent/20 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 group"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-accent">
                    {testimonial.type}
                  </span>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-text-secondary mb-8 font-body leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-accent">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl mb-6">
            See What Our Clients Have to Say
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto font-body">
            Don&apos;t just take our word for it. Watch real testimonials from
            institutions and businesses who have transformed their image with
            our uniforms.
          </p>

          <div className="relative bg-secondary border border-accent/20 rounded-2xl overflow-hidden aspect-video max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center bg-background/10">
              <div className="bg-surface/90 border border-accent/30 rounded-full p-6 shadow-lg hover:bg-surface transition-colors cursor-pointer">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-background/80 text-text-primary px-3 py-1 rounded text-sm">
              Client Success Stories - 3:24
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Trusted by Leading Organizations
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
              From prestigious schools to Fortune 500 companies, we&apos;re the
              preferred choice for professional uniforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="text-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="bg-surface border border-accent/20 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent/40 transition-all">
                  <div className="h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-text-secondary font-medium">
                      Client {i}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent border-t border-accent/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary lg:text-4xl">
            Ready to Join Our Success Stories?
          </h2>
          <p className="mt-4 text-lg text-primary/80 max-w-2xl mx-auto font-body">
            Experience the quality and service that has made us the trusted
            choice for uniform solutions across India.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-text-primary hover:bg-surface transition-all shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-text-primary transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-background border-t border-secondary"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
              Our Success Stories
            </h2>
            <p className="mt-4 text-xl text-text-secondary max-w-2xl mx-auto font-body">
              From small schools to large corporations, see how we&apos;ve
              helped businesses across India build their brand through quality
              apparel
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-accent/20 bg-surface shadow-sm transition-all hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={`${item.client} uniform project`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-accent/20 text-accent px-3 py-1 text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.client}
                  </h3>
                  <p className="text-sm text-text-secondary mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-accent">
                      Volume: {item.volume}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl bg-linear-to-br from-surface via-secondary to-background border border-accent/30 p-12 text-center">
            <h3 className="font-heading text-3xl font-bold lg:text-4xl text-text-primary">
              Ready to Start Your Project?
            </h3>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
              From consultation to delivery, we handle everything. Let&apos;s
              build your brand together with premium apparel solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-accent px-8 py-4 text-base font-semibold text-primary hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <a
                href="/catalogue.pdf"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-accent px-8 py-4 text-base font-semibold text-accent hover:bg-accent hover:text-primary transition-all"
                download
              >
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
