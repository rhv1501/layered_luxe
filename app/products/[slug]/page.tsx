import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "../../../data/categories";

type Props = { params: { slug: string } };

export default function CategoryPage({ params }: Props) {
  const slug = params.slug;
  const category = categories.find((c) => c.slug === slug);

  if (!category) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-16">
      <div className="flex items-center gap-6">
        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
          {category.image && (
            <Image
              src={category.image}
              alt={category.title}
              width={112}
              height={112}
            />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            {category.title}
          </h1>
          <p className="mt-1 text-slate-600">{category.description}</p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-medium text-slate-900">Products</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products && category.products.length > 0 ? (
            category.products.map((p) => (
              <article
                key={p.id}
                className="rounded-lg border border-slate-200 p-4"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3">
                  <small className="text-xs text-slate-500">Fabrics:</small>
                  <ul className="mt-1 text-sm text-slate-600">
                    {p.fabrics?.map((f, i) => (
                      <li key={i}>{`${f.brand}${
                        f.gsm ? ` — ${f.gsm} GSM` : ""
                      }`}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))
          ) : (
            <p className="text-slate-600">
              No products listed yet for this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
