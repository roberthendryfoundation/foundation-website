import { leadershipMembers } from "./aboutContent";

export function LeadershipSection() {
  return (
    <section
      className="bg-section-alt py-10 sm:py-12 md:bg-white md:py-16 lg:py-24"
      aria-labelledby="leadership-heading"
    >
      {/* Mobile: compact cards with read-more */}
      <div className="mx-auto max-w-xl px-5 md:hidden animate-fade-up">
        <h2
          id="leadership-heading"
          className="text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-primary"
        >
          Leadership &amp; Stewardship
        </h2>
        <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
          The foundation is growing carefully, with a focus on responsible
          resources and transparent operations.
        </p>

        <div className="mt-6 space-y-4">
          {leadershipMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-border bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-section-alt text-sm font-bold text-secondary"
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {member.tag}
                  </p>
                </div>
              </div>

              <details className="mt-4 border-t border-border pt-4">
                <summary className="cursor-pointer text-sm font-bold text-primary">
                  Read more
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {member.description}
                </p>
              </details>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop: split layout */}
      <div className="mx-auto hidden max-w-7xl gap-10 px-5 sm:px-6 md:grid lg:grid-cols-[0.75fr_1.25fr] lg:px-8 animate-fade-up">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Leadership
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Leadership &amp; Stewardship
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            The foundation is growing carefully, with a focus on responsible
            resources, community input, and transparent operations.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {leadershipMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/25 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-section-alt text-sm font-bold text-secondary"
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-secondary">
                    {member.role}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-section-alt px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {member.tag}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
