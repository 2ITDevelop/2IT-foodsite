export default function ContattiPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Contatti</h2>
      <div className="mt-4 space-y-2">
        <p><strong>Indirizzo:</strong> Via Esempio 123 22 2 2, Città</p>
        <p><strong>Telefono:</strong> +39 333 123 4567</p>
        <p><strong>Orari:</strong> Lun–Sab 11:30–22:30</p>
      </div>
      <div className="mt-6">
        <iframe
          title="Mappa"
          className="w-full h-64 rounded-xl border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=genova&output=embed"
        />
      </div>
    </section>
  );
}
