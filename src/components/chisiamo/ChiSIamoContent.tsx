import Image from "next/image";

export function ChiSiamoContent() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        {/* Testo */}
        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Chi siamo
          </h2>
          <p className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Lo street food genovese incontra la cucina di casa.
          </p>

          <div className="mt-4 space-y-3 text-sm md:text-base text-neutral-700">
            <p>
              Officina Sottoripa nasce dall&apos;idea di portare i piatti tipici
              genovesi dentro un panino, mantenendo la stessa cura e gli stessi
              sapori di una trattoria di quartiere. Niente farciture anonime:
              solo ricette della tradizione ligure, cotte a lungo e servite
              calde.
            </p>
            <p>
              Siamo sotto i portici di Sottoripa, a due passi dal Porto Antico:
              un posto piccolo e informale, dove puoi fermarti per un panino
              veloce o prenderti il tempo per chiacchierare al bancone.
            </p>
          </div>
        </div>

        {/* Immagine laterale */}
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-black/10">
            <Image
              src="/officina/chisiamo-lato.jpg" 
              alt="Staff e panini di Officina Sottoripa"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
