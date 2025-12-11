import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <div className="w-20 h-1 rounded-full bg-accent shadow-sm" />
              </div>

              <h1 className="font-heading text-4xl font-bold text-text-primary lg:text-5xl">
                Layered Luxe — Wear Your Purpose
              </h1>

              <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-prose first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:mr-3">
                Layered Luxe is a premium custom-apparel brand built on a legacy
                of craftsmanship, trust, and purpose. With over 13 years of
                manufacturing expertise, we specialize in delivering
                high-quality customized clothing for schools, corporates, sports
                teams, academies, and events across India.
              </p>

              <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-prose">
                Our journey began in North India, with manufacturing units in
                Indore and Tiruppur that have proudly served numerous schools
                and institutions for over a decade. In June 2025, we expanded to
                Chennai to bring premium-quality apparel solutions closer to
                more organizations—backed by years of proven experience.
              </p>

              <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-prose">
                At Layered Luxe, every stitch, every fabric, and every finish
                reflects our belief that clothing is more than just material. It
                represents identity, unity, and purpose.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                What We Do
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We manufacture high-quality, fully customized apparel,
                including:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  Polo &amp; Round Neck T-shirts
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  School Uniforms
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  Corporate Uniforms
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  Event Tees &amp; Promotional Wear
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  Hoodies &amp; Sweatshirts
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  Sports Jerseys (all categories)
                </li>
              </ul>

              <p className="text-text-secondary leading-relaxed mt-4">
                With complete in-house production—printing, embroidery,
                sublimation, and finishing—we deliver consistent quality, faster
                timelines, and better value for every bulk order.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Our Brand Personality
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Premium. Classy. Friendly.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Layered Luxe blends luxury craftsmanship with an approachable,
                people-first attitude. Our tone is refined yet warm—making
                corporates feel confident, and playschools feel cared for.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                What Makes Us Different
              </h2>
              <h3 className="text-lg font-semibold text-text-primary">
                Premium Quality at an Affordable Price
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We believe quality shouldn’t be a luxury. Our products combine
                superior craftsmanship with pricing options tailored to fit
                every customer’s budget.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mt-4">
                All Services Under One Roof
              </h3>
              <p className="text-text-secondary leading-relaxed">
                From fabric selection to stitching, printing, embroidery, and
                sublimation—our manufacturing units handle everything
                internally, ensuring tighter quality control and seamless
                production.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mt-4">
                Experience You Can Trust
              </h3>
              <p className="text-text-secondary leading-relaxed">
                With 13+ years in the apparel industry and expertise across
                multiple sectors, we understand timelines, precision, and the
                importance of dependable service.
              </p>

              <h3 className="text-lg font-semibold text-text-primary mt-4">
                Bulk Orders, Zero Compromise
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We cater exclusively to bulk requirements, offering
                premium-quality results for institutions, corporates, academies,
                and events.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Our Story
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Layered Luxe is built by two sisters—mothers, homemakers, and
                dreamers—who decided to turn ambition into reality. Balancing
                homes, raising children, and managing everyday responsibilities
                taught us resilience, creativity, and commitment.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Layered Luxe is the extension of that belief: a brand created
                with heart, discipline, and a passion to build something
                meaningful. Through our work, we hope to inspire other women and
                mothers to pursue their dreams unapologetically.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Vision &amp; Mission
              </h2>
              <p className="text-text-secondary leading-relaxed">
                <strong>Vision:</strong> To become a pan-India leader in
                customized apparel and uniform manufacturing—known for quality,
                trust, and a purpose-driven approach.
              </p>
              <p className="text-text-secondary leading-relaxed">
                <strong>Mission:</strong> To deliver superior, affordable, and
                meaningful apparel solutions while contributing to society
                through ethical practices, employment opportunities, and
                community-focused efforts.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Our Promise
              </h2>
              <p className="text-text-secondary leading-relaxed">
                At Layered Luxe, we don’t just deliver uniforms or T-shirts. We
                deliver identity, confidence, unity, and pride—one garment at a
                time. Because every person, every team, and every child deserves
                to wear their purpose.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-surface to-secondary p-6 shadow-2xl border border-surface">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src="/about.jpeg"
                    alt="Manufacturing excellence at Layered Luxe"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 hover:scale-105 opacity-80"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-surface border border-accent/30 p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    Made in India
                  </div>
                  <div className="text-sm text-text-secondary">
                    Global Quality
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">
                  Premium
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  Quality
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">13+</div>
                <div className="text-sm font-medium text-text-secondary">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">
                  In House
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  Production
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-surface border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm font-medium text-text-secondary">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
