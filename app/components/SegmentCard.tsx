import Link from "next/link";
import Image from "next/image";

export default function SegmentCard({
  title,
  href,
  image = "/next.svg",
  description,
}: {
  title: string;
  href: string;
  image?: string;
  description?: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-accent/20 bg-surface shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/40 hover:-translate-y-1"
    >
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors mb-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2 mb-3">
          {description || `Explore our ${title.toLowerCase()} collection`}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center text-xs font-medium text-accent">
            View Products
          </span>
          <svg
            className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5"
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
    </Link>
  );
}
