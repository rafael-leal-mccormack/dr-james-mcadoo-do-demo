import { business } from "@/data/business";

export default function Insurances() {
  if (!business.insurances?.length) return null;

  return (
    <section id="insurances" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">No Surprises</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand mb-4">Most Major Insurance Accepted</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            Call our office and we'll verify your coverage before your first visit — no hidden costs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {business.insurances.map((ins) => (
            <span
              key={ins}
              className="bg-white border border-gray-200 text-brand text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:border-accent/40 hover:shadow-md transition"
            >
              {ins}
            </span>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Don't see your insurance?{" "}
          <a href={`tel:${business.phone.replace(/\D/g, "")}`} className="text-accent font-semibold hover:underline">
            Call us — we likely accept it.
          </a>
        </p>
      </div>
    </section>
  );
}
