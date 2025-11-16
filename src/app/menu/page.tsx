import { MenuBanner } from "@/components/menu/MenuBanner";
import { MenuSection } from "@/components/menu/MenuSection";

const PRIMI = [
  { name: "Gnocchi al pesto", price: "€ 6,00" },
  { name: "Ravioli au tuccu", price: "€ 6,50" },
  { name: "Pansoti in salsa di noci", price: "€ 6,50" },
];

const PANINI_CALDI = [
  {
    name: "Pesto",
    price: "€ 5,00",
    description: "Pesto, patate, fagioli e prescinseua",
  },
  {
    name: "Branda",
    price: "€ 6,50",
    description: "Baccalà, patate, olive taggiasche",
  },
  {
    name: "Trippe",
    price: "€ 6,50",
    description: "Trippe accomodate",
  },
  {
    name: "Porcello tonnato",
    price: "€ 6,50",
    description:
      "Arista di maiale cotta a bassa temperatura con salsa tonnata",
  },
  {
    name: "Pulled pork",
    price: "€ 7,00",
    description:
      "Maiale sfilacciato e affumicato con salsa BBQ e insalata di cavolo",
  },
  {
    name: "Tartare",
    price: "€ 6,50",
    description: "Carne cruda piemontese",
  },
  {
    name: "Acciughe",
    price: "€ 5,00",
    description: "Burro e acciughe",
  },
];

const SECONDI = [
  { name: "Ripieni alla genovese", price: "€ 7,00" },
  { name: "Torta di spinaci", price: "€ 7,00" },
  { name: "Trippe accomodate", price: "€ 7,50" },
];

export default function MenuPage() {
  return (
    <>
      <MenuBanner />

      <section className="bg-background py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Intestazione  */}
          <div className="text-center mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Il nostro menu
            </h2>
            <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              Panini caldi, primi piatti e secondi della tradizione genovese.
            </p>
            <p className="mt-3 text-sm md:text-base text-neutral-700 max-w-2xl mx-auto">
              Ogni piatto è preparato con ingredienti selezionati e ricette
              tipiche liguri, servito al piatto o dentro un panino caldo a
              seconda della proposta.
            </p>
          </div>

          {/* Griglia menu */}
          <div className="grid gap-10 md:gap-14 md:grid-cols-2">
            <div className="space-y-8">
              <MenuSection title="Primi piatti" items={PRIMI} />
              <MenuSection title="Secondi piatti" items={SECONDI} />
            </div>
            <div>
              <MenuSection title="Panini caldi" items={PANINI_CALDI} />
            </div>
          </div>

          <p className="mt-10 text-[0.75rem] text-neutral-500 text-center">
            I prezzi indicati si riferiscono al consumo al banco. Per eventuali
            variazioni o piatti del giorno chiedi al personale.
          </p>
        </div>
      </section>
    </>
  );
}
