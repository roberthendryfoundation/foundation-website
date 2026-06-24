import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useLatestResources } from "../../hooks/useSanityData";

export function LatestNewsSection() {
  const { data: resources, isLoading, error } = useLatestResources(
    3,
    undefined,
    undefined,
    ["news-updates"]
  );

  if (!isLoading && (error || !resources?.length)) return null;

  const formatDate = (date?: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section
      className="bg-section-alt py-16 sm:py-20 lg:py-24"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 animate-fade-up">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Latest News
          </p>
          <h2
            id="news-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Updates from the foundation.
          </h2>
        </div>

        {isLoading ? (
          <div className="mt-10 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-2xl bg-white/60"
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 divide-y divide-border rounded-[2rem] border border-border bg-white px-5 shadow-sm sm:px-7">
            {resources!.map((item) => (
              <Link
                key={item._id}
                to={
                  item.slug?.current
                    ? `/resources/${item.slug.current}`
                    : "/resources"
                }
                className="block py-6 transition hover:opacity-80"
              >
                {item.publishedAt && (
                  <p className="text-xs font-medium text-muted-foreground">
                    {formatDate(item.publishedAt)}
                  </p>
                )}
                <h3 className="mt-2 text-lg font-bold leading-7 text-primary">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link
              to={`/resources?categories=${encodeURIComponent("News & Updates")}`}
            >
              View all news
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
