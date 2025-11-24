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

export default function TestimonialsSection() {
  return (
    <div className="bg-background">
      {/* Stats Section */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              Trusted by Leading Organizations
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Real stories from satisfied clients across education, corporate,
              and sports sectors.
            </p>
          </div>
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

      {/* Testimonials Grid - Show only first 3 testimonials */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-text-primary lg:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto font-body">
              Discover why schools, corporates, and sports teams trust us with
              their uniform needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
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

          {/* View All CTA removed — testimonials page retained but navigation removed per request */}
        </div>
      </section>
    </div>
  );
}
