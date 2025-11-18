type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section>
      <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
        {title}
      </h3>
      <div className="mt-3 space-y-3">
        {items.map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm md:text-base font-medium text-foreground">
                {item.name}
              </span>
              <div className="flex-1 border-b border-dotted border-neutral-300" />
              <span className="text-sm font-medium text-accent">
                {item.price}
              </span>
            </div>
            {item.description && (
              <p className="text-[0.75rem] md:text-sm text-accent/90">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
