import Image from "next/image";
import Link from "next/link";

interface UniformSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

interface UniformsGridProps {
  uniformSolutions: UniformSolution[];
}

const UniformsGrid: React.FC<UniformsGridProps> = ({ uniformSolutions }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2 mb-20">
      {uniformSolutions.map((uniform) => (
        <Link
          key={uniform.id}
          href={uniform.href}
          className="group bg-surface border border-accent/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-2"
        >
          <div className="aspect-video relative overflow-hidden bg-secondary">
            <Image
              src={uniform.image}
              alt={uniform.title}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-110 transition-transform duration-300 opacity-20"
            />
            {/* Category overlay for placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-accent/10">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary font-medium">
                  {uniform.title}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4">
              <svg
                className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
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
            </div>
          </div>

          <div className="p-8">
            <div className="mb-3">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {uniform.subtitle}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-text-primary group-hover:text-accent transition-colors mb-4">
              {uniform.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {uniform.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UniformsGrid;
