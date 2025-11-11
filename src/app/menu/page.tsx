export default function MenuPage() {
  const items = [
    { name: "Classico", price: "€5,50", desc: "Prosciutto, mozzarella, pomodoro" },
    { name: "Piccante", price: "€6,00", desc: "Salame piccante, provola, salsa" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Menu</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <li key={it.name} className="rounded-2xl border p-4 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-medium">{it.name}</h3>
              <span className="font-semibold">{it.price}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
