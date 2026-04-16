import { business } from "@/data/business";

export default function Cta() {
  return (
    <section className="py-24 px-6 bg-brand">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-4">Get Started Today</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          Ready to Take the<br />Next Step?
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
          Our team is here to answer your questions and guide you through every step of your care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-full transition"
          >
            Call {business.phone}
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-10 py-4 rounded-full transition"
          >
            View Services
          </a>
        </div>
        <p className="text-white/30 text-sm mt-8">{business.city} · New patients welcome</p>
      </div>
    </section>
  );
}
