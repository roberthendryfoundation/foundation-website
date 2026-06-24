import { SEAL_LOGO_SRC } from "../../constants/logos";
import { anxietyStats } from "./aboutContent";

export function AnxietyCredibilityBand() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-10 text-white sm:py-12 md:py-16 lg:py-20"
      aria-labelledby="why-anxiety-heading"
    >
      {/* Mobile: compact horizontal stat carousel */}
      <div className="relative mx-auto max-w-xl px-5 md:hidden animate-fade-up">
        <img
          src={SEAL_LOGO_SRC}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-8 h-72 w-72 opacity-[0.035]"
        />

        <h2
          id="why-anxiety-heading"
          className="relative text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-white"
        >
          The gap we are working to close
        </h2>

        <p className="relative mt-4 text-[15px] leading-7 text-white/80">
          Anxiety is common and treatable, but support can still be hard to find,
          understand, or trust.
        </p>

        <div
          className="relative -mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none"
          role="list"
          aria-label="Anxiety statistics"
        >
          {anxietyStats.map((stat) => (
            <article
              key={stat.number}
              role="listitem"
              className="min-w-[72vw] snap-start rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
            >
              <p className="text-4xl font-extrabold tracking-[-0.05em] text-white">
                {stat.number}
              </p>
              <p className="mt-3 text-sm font-bold text-white">{stat.label}</p>
              <p className="mt-1 text-sm leading-6 text-white/70">
                {stat.description}
              </p>
            </article>
          ))}
        </div>

        <p className="relative mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
          Swipe to explore
        </p>
      </div>

      {/* Desktop: split layout */}
      <div className="mx-auto hidden max-w-7xl gap-10 px-5 sm:px-6 md:grid lg:grid-cols-[0.9fr_1.1fr] lg:px-8 animate-fade-up">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why focus on anxiety?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Anxiety is common, treatable, and often carried quietly. The
            foundation focuses on the gap between needing support and knowing
            where to begin.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
            Anxiety is the most common mental health condition—but it&apos;s also
            one of the most treatable. Millions don&apos;t get help because of
            stigma, cost, or lack of access. That&apos;s the gap we&apos;re
            working to close.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {anxietyStats.map((stat) => (
            <div
              key={stat.number}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-semibold text-white/90">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-white/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
