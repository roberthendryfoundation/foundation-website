import { howWeWorkPrinciples, mobileHowWeWorkPrinciples } from "./aboutContent";

export function HowWeWorkSection() {
  return (
    <section
      className="bg-white py-10 sm:py-12 md:py-16 lg:py-24"
      aria-labelledby="about-how-we-work-heading"
    >
      {/* Mobile: horizontal principle carousel */}
      <div className="mx-auto max-w-xl px-5 md:hidden animate-fade-up">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
          How we work
        </p>

        <h2
          id="about-how-we-work-heading"
          className="mt-4 text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-primary"
        >
          Practical support, shaped by real people.
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
          Four principles guide every resource and project we build.
        </p>

        <div
          className="-mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none"
          role="list"
          aria-label="How we work principles"
        >
          {mobileHowWeWorkPrinciples.map((item, index) => (
            <article
              key={item.id}
              role="listitem"
              className="min-w-[82vw] snap-start rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm font-bold text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-xl font-bold leading-tight tracking-[-0.03em] text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
          Swipe to explore
        </p>
      </div>

      {/* Desktop: split layout with principle rows */}
      <div className="mx-auto hidden max-w-7xl gap-10 px-5 sm:px-6 md:grid lg:grid-cols-[0.85fr_1.15fr] lg:px-8 animate-fade-up">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Practical support, shaped by real people.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Our mission, vision, and values come together in four principles that
            guide every resource and project we build.
          </p>
        </div>

        <div className="divide-y divide-border rounded-[1.5rem] border border-border bg-white shadow-sm">
          {howWeWorkPrinciples.map((item, index) => (
            <div
              key={item.id}
              className="grid gap-3 p-6 transition-colors duration-300 first:rounded-t-[1.5rem] last:rounded-b-[1.5rem] hover:bg-section-alt/30 sm:grid-cols-[auto_1fr] sm:gap-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-section-alt text-sm font-bold text-secondary">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
