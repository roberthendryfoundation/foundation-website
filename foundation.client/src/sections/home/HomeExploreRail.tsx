import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { exploreItems } from "./homeContent";

export function HomeExploreRail() {
  return (
    <section className="bg-white py-6 sm:py-8" aria-labelledby="explore-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 animate-fade-up">
        <div className="mb-4 flex items-end justify-between">
          <h2
            id="explore-heading"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            Explore
          </h2>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {exploreItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group min-w-[170px] snap-start rounded-2xl border border-border bg-white p-4 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-md sm:min-w-0"
            >
              <item.icon
                className="mb-5 h-5 w-5 text-primary transition-colors group-hover:text-secondary"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-primary">
                  {item.title}
                </h3>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-secondary"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
