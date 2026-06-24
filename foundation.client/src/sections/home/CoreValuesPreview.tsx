import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredValues } from "./homeContent";

export function CoreValuesPreview() {
  return (
    <section
      className="bg-section-alt py-16 sm:py-20 lg:py-28"
      aria-labelledby="values-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 animate-fade-up">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Core Values
          </p>
          <h2
            id="values-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Principles that guide the work.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Our work is grounded in respect, evidence, transparency, and
            collaboration.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            View all values
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div>
          <div className="-mx-5 mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none lg:mx-0 lg:mt-0 lg:grid lg:grid-cols-1 lg:gap-5 lg:overflow-visible lg:px-0">
            {featuredValues.map((value, index) => (
              <article
                key={value.title}
                className="group min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md lg:min-w-0"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-section-alt sm:aspect-[2/1] lg:aspect-[16/10]">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-primary/10"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-sm font-semibold text-secondary/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-primary lg:mt-6">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60 lg:hidden">
            Swipe to explore
          </p>
        </div>
      </div>
    </section>
  );
}
