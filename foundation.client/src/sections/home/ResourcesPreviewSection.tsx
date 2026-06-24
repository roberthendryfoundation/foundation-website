import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "../../components/ui/button";
import { cn } from "../../components/ui/utils";
import { useFeaturedResources } from "../../hooks/useSanityData";
import { resourceTabs } from "./homeContent";

export function ResourcesPreviewSection() {
  const [activeTab, setActiveTab] =
    useState<(typeof resourceTabs)[number]>("Featured");
  const { data: resources = [], isLoading } = useFeaturedResources(12);

  const filtered = useMemo(() => {
    if (activeTab === "Featured") {
      return resources.slice(0, 3);
    }
    const level = activeTab.toLowerCase();
    return resources
      .filter((r) => r.learningLevel === level)
      .slice(0, 3);
  }, [resources, activeTab]);

  if (!isLoading && resources.length === 0) return null;

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="resources-preview-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 animate-fade-up">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Resources
            </p>
            <h2
              id="resources-preview-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Start learning about anxiety.
            </h2>
            <p className="mt-3 text-lg leading-8 text-muted-foreground">
              Evidence-based guides and tools—curated, not overwhelming.
            </p>
          </div>
          <Button variant="outline" asChild className="hidden lg:inline-flex">
            <Link to="/resources">
              View all resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-none sm:mx-0 sm:px-0">
          {resourceTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200",
                activeTab === tab
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-muted-foreground hover:border-secondary/40 hover:text-primary"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-36 animate-pulse rounded-2xl bg-section-alt"
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="mt-8 text-muted-foreground">
            No resources in this category yet.{" "}
            <Link to="/resources" className="font-semibold text-primary hover:underline">
              Browse all resources
            </Link>
          </p>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <Link
                key={resource._id}
                to={
                  resource.slug?.current
                    ? `/resources/${resource.slug.current}`
                    : "/resources"
                }
                className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
              >
                <h3 className="text-base font-bold leading-7 text-primary group-hover:text-secondary">
                  {resource.title}
                </h3>
                {resource.description && (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {resource.description}
                  </p>
                )}
                {resource.duration && (
                  <p className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {resource.duration}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center lg:hidden">
          <Button variant="outline" asChild>
            <Link to="/resources">
              View all resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
