"use client";
import React from "react";

export default function ContactForm() {
  const [form, setForm] = React.useState({
    organisationName: "",
    contactName: "",
    email: "",
    phone: "",
    segment: "School",
    productCategory: "",
    approxQuantity: "",
    notes: "",
  });
  const [status, setStatus] = React.useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus(
          "Thank you! We'll be in touch within 24 hours to discuss your apparel requirements."
        );
        setForm({
          organisationName: "",
          contactName: "",
          email: "",
          phone: "",
          segment: "School",
          productCategory: "",
          approxQuantity: "",
          notes: "",
        });
      } else {
        const text = await res.text();
        setStatus("Error: " + text);
      }
    } catch (err) {
      setStatus("Error sending request: " + String(err));
    }
  }

  return (
    <div className="bg-surface border border-accent/20 rounded-3xl p-8">
      <form className="space-y-6" onSubmit={submit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Organisation Name *
            </label>
            <input
              value={form.organisationName}
              onChange={(e) =>
                setForm({ ...form, organisationName: e.target.value })
              }
              placeholder="Your company/school name"
              required
              className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Contact Person *
            </label>
            <input
              value={form.contactName}
              onChange={(e) =>
                setForm({ ...form, contactName: e.target.value })
              }
              placeholder="Your full name"
              required
              className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your.email@company.com"
              type="email"
              required
              className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Phone Number *
            </label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
              required
              className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Industry Segment
            </label>
            <select
              value={form.segment}
              onChange={(e) => setForm({ ...form, segment: e.target.value })}
              className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-0 transition-colors"
            >
              <option>School</option>
              <option>College</option>
              <option>Corporate</option>
              <option>Sports</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Approximate Quantity
            </label>
            <input
              value={form.approxQuantity}
              onChange={(e) =>
                setForm({ ...form, approxQuantity: e.target.value })
              }
              placeholder="e.g. 100-500 pieces"
              className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Product Category
          </label>
          <input
            value={form.productCategory}
            onChange={(e) =>
              setForm({ ...form, productCategory: e.target.value })
            }
            placeholder="T-shirts, Hoodies, Uniforms, etc."
            className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Additional Requirements
          </label>
          <textarea
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Tell us about your specific requirements, preferred colors, decoration methods, deadlines, etc."
            rows={4}
            className="w-full rounded-2xl border border-accent/30 bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/60 focus:border-accent focus:outline-none focus:ring-0 transition-colors resize-none"
          />
        </div>

        <div className="pt-4">
          <button
            className="w-full rounded-2xl bg-accent py-4 text-base font-semibold text-primary hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {status && (
        <div className="mt-6 p-4 rounded-2xl bg-accent/10 border border-accent/30">
          <p className="text-sm text-accent">{status}</p>
        </div>
      )}
    </div>
  );
}
