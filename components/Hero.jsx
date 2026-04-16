import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background texture — two soft blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent-pale rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/4 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-[1fr_340px] gap-16 items-center relative">

        {/* LEFT — copy */}
        <div>
          {business.specialty && (
            <div className="animate-fade-up flex items-center gap-2 mb-8">
              <div className="w-7 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                {business.specialty}
              </span>
            </div>
          )}

          <h1 className="animate-fade-up delay-100 font-display font-semibold text-brand leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}>
            {business.tagline}
          </h1>

          <p className="animate-fade-up delay-200 text-gray-500 text-lg leading-relaxed mb-10 max-w-[42ch] font-body">
            {business.description}
          </p>

          <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-12">
            <a
              href={`tel:${business.phone.replace(/\D/g, "")}`}
              className="bg-brand hover:bg-brand-mid text-white font-semibold px-8 py-4 rounded-2xl transition-colors text-base"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="border border-gray-200 hover:border-brand/30 hover:bg-brand/4 text-gray-600 font-semibold px-8 py-4 rounded-2xl transition-colors text-base"
            >
              Our Services
            </a>
          </div>

          {/* Trust strip */}
          {business.insurances && business.insurances.length > 0 && (
            <div className="animate-fade-up delay-400">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">
                Insurance accepted
              </p>
              <div className="flex flex-wrap gap-2">
                {business.insurances.slice(0, 5).map((ins) => (
                  <span
                    key={ins}
                    className="bg-gray-50 border border-gray-100 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {ins}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — floating doctor card */}
        <div className="animate-fade-in delay-300 hidden md:flex justify-end">
          <div className="relative pb-10 pr-2">
            {/* Main card */}
            <div className="bg-brand rounded-[2rem] px-8 py-10 text-white w-[300px] shadow-2xl shadow-brand/20">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              {business.doctorName && (
                <p className="font-display font-semibold text-xl leading-tight mb-1">
                  {business.doctorName}
                </p>
              )}
              {business.specialty && (
                <p className="text-accent text-sm font-medium mb-5">{business.specialty}</p>
              )}

              <div className="border-t border-white/10 pt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-white/60 text-sm">{business.city}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <a
                    href={`tel:${business.phone.replace(/\D/g, "")}`}
                    className="text-white/80 text-sm hover:text-white transition"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Board certified badge */}
            <div className="absolute -top-3 -right-3 bg-accent text-white text-[11px] font-bold px-3.5 py-2 rounded-full shadow-lg shadow-accent/30 whitespace-nowrap">
              Board Certified
            </div>

            {/* Same-day badge */}
            <div className="absolute -bottom-2 -left-4 bg-white border border-gray-100 shadow-xl shadow-gray-200/80 rounded-2xl px-5 py-4">
              <p className="text-brand font-display font-semibold text-2xl leading-none">Same</p>
              <p className="text-gray-400 text-xs mt-1">day appointments</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
