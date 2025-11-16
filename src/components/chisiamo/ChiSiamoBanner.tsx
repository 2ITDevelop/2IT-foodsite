"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ChiSiamoBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const height = rect.height || 1;

      // quanto hai “scrollato” dentro la sezione
      const scrolled = Math.min(Math.max(0, -rect.top), height);
      const progress = Math.min(1, scrolled / (height * 0.6)); // fade entro il 60% della sezione

      setOpacity(1 - progress);
    };

    handleScroll(); // inizializza
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full aspect-[16/9] min-h-[420px] max-h-[85vh] overflow-hidden"
    >
      {/* Background panino */}
      <Image
        src="/officina/chisiamo.jpg"
        alt="Panino di Officina Sottoripa"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />

      {/* Scritta “Chi Siamo” che sfuma */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * 24}px)`,
          transition: "opacity 0.1s linear, transform 0.1s linear",
        }}
      >
        <Image
          src="/officina/scrittachisiamo.png"
          alt="Chi Siamo"
          width={600}
          height={300}
          className="w-[70vw] max-w-[600px] h-auto"
        />
      </div>
    </section>
  );
}
