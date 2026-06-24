import { cn } from "../../components/ui/utils";
import { homeImages, whatWeDoSteps } from "./homeContent";

function MissionVisualCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative min-h-[280px] overflow-hidden rounded-[24px] border border-border shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:min-h-[360px] lg:min-h-[390px]",
        className
      )}
    >
      <img
        src={homeImages.mission}
        alt="Hands offering support — collaboration and partnership in anxiety care"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Community-led support
        </p>
        <p className="mt-1 text-sm font-medium text-primary">
          Practical work that turns awareness into measurable help.
        </p>
      </div>
    </div>
  );
}

export function WhatWeDoSection() {
  return (
    <section
      className="bg-white py-14 sm:py-16 lg:py-24"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 animate-fade-up">
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              What We Do
            </p>
            <h2
              id="what-we-do-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Turning anxiety awareness into completed action.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              We focus on practical work that moves from awareness to action:
              listening to communities, building with aligned partners, and
              finishing projects that create measurable support.
            </p>

            <div className="mt-8 lg:hidden">
              <MissionVisualCard />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10">
              {whatWeDoSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-border bg-section-alt/60 p-5 transition duration-300 hover:border-secondary/30 hover:shadow-md lg:p-7"
                >
                  <span className="text-sm font-semibold text-secondary/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <MissionVisualCard />
          </div>
        </div>
      </div>
    </section>
  );
}
