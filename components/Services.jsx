import { business } from "@/data/business";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">What We Treat</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand leading-tight">
              Specialized Services<br className="hidden md:block" /> Built Around You
            </h2>
          </div>
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="shrink-0 border border-brand/20 text-brand font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand hover:text-white transition"
          >
            Call to Schedule →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {business.services.map((svc, i) => (
            <div
              key={svc.name}
              className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-accent/20 transition">
                {svc.icon}
              </div>
              <h3 className="font-bold text-brand text-lg mb-2">{svc.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
