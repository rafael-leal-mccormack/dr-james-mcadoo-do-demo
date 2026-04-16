import { business } from "@/data/business";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — visual */}
        <div className="relative">
          <div className="bg-brand rounded-3xl aspect-square max-w-sm mx-auto flex items-center justify-center">
            <span className="text-8xl">🩺</span>
          </div>
          {/* Experience badge */}
          <div className="absolute bottom-6 right-0 md:-right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 max-w-[180px]">
            <p className="text-accent font-extrabold text-2xl">15+</p>
            <p className="text-gray-500 text-sm leading-tight mt-1">Years of specialized care</p>
          </div>
        </div>

        {/* Right — copy */}
        <div>
          <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-4">About the Practice</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand leading-tight mb-6">
            Expert Care You<br />Can Count On
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 text-lg">{business.description}</p>

          <div className="space-y-4 mb-10">
            {[
              "Personalized treatment plans tailored to each patient",
              "Accepting new patients — same week appointments available",
              "Most major insurance plans accepted",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <a
            href={`tel:${business.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-mid text-white font-bold px-8 py-3.5 rounded-full transition"
          >
            Schedule a Consultation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
