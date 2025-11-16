// src/components/home/Hero.tsx
"use client";

import Image from "next/image";

export function Hero() {
  const scrollToIntro = () => {
    const el = document.getElementById("home-intro");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full aspect-[16/9] min-h-[420px] max-h-[85vh] overflow-hidden">
      {/* immagine di sfondo */}
      <Image
        src="/officina/hero-locale.jpg"
        alt="Ingresso di Officina Sottoripa"
        fill
        priority
        className="object-cover object-center"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />

      {/* contenuto centrale */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            Paninoteca · Porto Antico
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
            Officina Sottoripa
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl mx-auto">
            Panini genovesi nel cuore dei caruggi.
          </p>
        </div>
      </div>

      {/* hint scroll */}
      <button
        type="button"
        onClick={scrollToIntro}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[0.7rem] uppercase tracking-[0.2em] text-white/80"
      >
        <span>Scopri Officina</span>
        <span className="text-lg leading-none">⌄</span>
      </button>
    </section>
  );
}
