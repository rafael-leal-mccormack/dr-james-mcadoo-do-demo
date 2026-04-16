import { business } from "@/data/business";

export default function Nav() {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold">
            {business.name.charAt(0)}
          </div>
          <span className="font-bold text-brand text-lg tracking-tight">{business.name}</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#services" className="hover:text-brand transition">Services</a>
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#insurances" className="hover:text-brand transition">Insurance</a>
        </nav>

        <a
          href={`tel:${business.phone.replace(/\D/g, "")}`}
          className="bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition"
        >
          {business.phone}
        </a>
      </div>
    </header>
  );
}
