import { urgencyStats } from "./homeContent";

export function StatsSection() {
  return (
    <section
      className="bg-primary py-14 text-primary-foreground sm:py-16 lg:py-20"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 animate-fade-up">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-footer-muted">
            Why it matters
          </p>
          <h2
            id="stats-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Anxiety support needs more than awareness.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
          {urgencyStats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-primary-foreground/15 pl-4"
            >
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-footer-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
