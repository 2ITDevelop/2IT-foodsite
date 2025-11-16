// src/components/home/HomeIntro.tsx
import Link from "next/link";

export function HomeIntro() {
  return (
    <section
      id="home-intro"
      className="bg-background py-12 md:py-16 border-b border-neutral-200"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Panini genovesi, piatti tipici dentro il pane
        </h2>
        <p className="mt-3 text-2xl md:text-3xl font-semibold">
          Piatti della tradizione ligure serviti in versione street food.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/menu" className="btn-primary">
            Guarda il menu
          </Link>
          <Link href="/dove-siamo" className="btn-ghost">
            Dove siamo
          </Link>
        </div>
      </div>
    </section>
  );
}
