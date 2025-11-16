// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { HomeIntro } from "@/components/HomeIntro";
import ChiSiamoPage from "./chi_siamo/page";
import MenuPage from "./menu/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* qui puoi importare altre sezioni come componenti separati */}
      {/* <PaniniHighlight /> */}
      {/* <TripAdvisorStrip /> */}
      <HomeIntro />
      <ChiSiamoPage />
      <MenuPage />
    </>
  );
}
