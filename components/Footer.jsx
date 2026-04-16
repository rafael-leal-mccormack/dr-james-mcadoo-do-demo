import { business } from "@/data/business";

export default function Footer() {
  return (
    <footer className="bg-brand border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-bold">
            {business.name.charAt(0)}
          </div>
          <span className="text-white font-bold">{business.name}</span>
        </div>
        <p className="text-white/60 text-sm">
          {business.specialty && `${business.specialty} · `}{business.city} · {business.phone}
        </p>
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} {business.name}</p>
      </div>
    </footer>
  );
}
