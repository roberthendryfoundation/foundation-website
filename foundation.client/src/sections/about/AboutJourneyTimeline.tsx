import { journeyMilestones, mobileJourneyMilestones } from "./aboutContent";

export function AboutJourneyTimeline() {
  return (
    <section
      className="bg-white py-10 sm:py-12 md:bg-section-alt md:py-16 lg:py-24"
      aria-labelledby="journey-heading"
    >
      {/* Mobile: horizontal milestone carousel */}
      <div className="mx-auto max-w-xl px-5 md:hidden animate-fade-up">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
          Our Journey
        </p>

        <h2
          id="journey-heading"
          className="mt-4 text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-primary"
        >
          Building step by step
        </h2>

        <div
          className="-mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none"
          role="list"
          aria-label="Foundation milestones"
        >
          {mobileJourneyMilestones.map((milestone) => (
            <article
              key={milestone.title}
              role="listitem"
              className="min-w-[80vw] snap-start rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                {milestone.year}
              </p>
              <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-primary">
                {milestone.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
          Swipe to explore
        </p>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="mx-auto hidden max-w-7xl px-5 sm:px-6 md:block lg:px-8 animate-fade-up">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Our Journey
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Building step by step
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            An action-based foundation growing carefully—with community input at
            every stage.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-4 h-px bg-border"
              aria-hidden="true"
            />
            <div className="grid grid-cols-5 gap-5">
              {journeyMilestones.map((milestone) => (
                <div key={milestone.title} className="relative pt-8">
                  <div
                    className="absolute left-0 top-2.5 h-3 w-3 rounded-full border-2 border-primary bg-white"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    {milestone.year}
                  </p>
                  <h3 className="mt-2 text-sm font-bold text-primary">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
