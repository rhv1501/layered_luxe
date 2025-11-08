import Link from "next/link";
import Image from "next/image";

export default function SegmentCard({
  title,
  href,
  image = "/next.svg",
}: {
  title: string;
  href: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold !text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">
          Explore {title.toLowerCase()}
        </p>
      </div>
    </Link>
  );
}
