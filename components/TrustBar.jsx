const stats = [
  { value: "10+",  label: "Years Experience" },
  { value: "500+", label: "Patients Treated" },
  { value: "98%",  label: "Satisfaction Rate" },
  { value: "Same", label: "Day Appointments" },
];

export default function TrustBar() {
  return (
    <section className="bg-brand">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-accent text-3xl font-extrabold mb-1">{s.value}</p>
            <p className="text-white/60 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
