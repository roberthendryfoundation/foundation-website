import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EditorialImagePanel } from "../../components/EditorialImagePanel";
import { cn } from "../../components/ui/utils";
import { homeImages, workSteps } from "./homeContent";

export function HowWeWorkSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-28"
      aria-labelledby="how-we-work-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 animate-fade-up">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How We Work
          </p>
          <h2
            id="how-we-work-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            From insight to completed impact.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Our action-based approach: identify gaps, collaborate with partners,
            complete projects, and measure real outcomes.
          </p>

          {/* Mobile: compact work image */}
          <div className="mt-8 lg:hidden">
            <EditorialImagePanel
              src={homeImages.work}
              alt="Resilience and persistence in anxiety support work"
              className="aspect-[16/10] max-h-[220px]"
            />
          </div>

          {/* Desktop: editorial work image */}
          <div className="mt-8 hidden lg:block">
            <EditorialImagePanel
              src={homeImages.work}
              alt="Resilience and persistence in anxiety support work"
              className="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-9 divide-y divide-border rounded-[2rem] border border-border bg-section-alt/40 px-5 lg:mt-0 lg:hidden">
          {workSteps.map((step, index) => (
            <div key={step.title}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-secondary/70">
                    0{index + 1}
                  </span>
                  <span className="font-bold text-primary">{step.title}</span>
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop timeline */}
        <div className="mt-9 hidden gap-4 lg:mt-0 lg:grid lg:grid-cols-2">
          {workSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-border bg-section-alt/50 p-6 transition duration-300 hover:border-secondary/30 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-secondary/70">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
