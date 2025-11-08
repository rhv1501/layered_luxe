import { categories as allCategories } from "../../data/categories";
import SegmentCard from "./SegmentCard";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-text-primary">
        Explore our categories
      </h2>
      <p className="mt-2 text-text-secondary">
        Browse by segment or product type.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allCategories.map((c) => (
          <SegmentCard
            key={c.id}
            title={c.title}
            href={`/products/${c.slug}`}
            image={c.image}
          />
        ))}
      </div>
    </section>
  );
}
