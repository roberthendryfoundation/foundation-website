import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useFeaturedResources } from "../../hooks/useSanityData";
import { useAdvancedResourceSearch } from "../../hooks/useAdvancedSearch";

function formatType(type?: string) {
  if (!type) return "Article";
  return type.charAt(0).toUpperCase() + type.slice(1);
}

function getSourceName(resource: {
  category?: { name?: string };
  url?: string;
}) {
  if (resource.category?.name) return resource.category.name;
  if (resource.url) {
    try {
      return new URL(resource.url).hostname.replace(/^www\./, "");
    } catch {
      return "External";
    }
  }
  return "Foundation";
}

interface FeaturedResourcesStripProps {
  excludeIds?: string[];
}

export function FeaturedResourcesStrip({
  excludeIds = [],
}: FeaturedResourcesStripProps) {
  const { data: featured = [], isLoading } = useFeaturedResources(6);
  const { data: fallbackData } = useAdvancedResourceSearch(
    {},
    { page: 0, pageSize: 6, sortBy: "recent" }
  );

  const pool = [
    ...featured,
    ...(fallbackData?.resources?.filter(
      (r) => !featured.some((f) => f._id === r._id)
    ) ?? []),
  ]
    .filter((r) => !excludeIds.includes(r._id))
    .slice(0, 3);

  if (isLoading || pool.length === 0) return null;

  const [primary, ...secondary] = pool;

  const renderLarge = (resource: (typeof pool)[0]) => {
    const href = resource.slug?.current
      ? `/resources/${resource.slug.current}`
      : resource.url;
    const isExternal = !!resource.url && !resource.slug?.current;
    const topics = (resource.topicAreas ?? []).slice(0, 2);

    const card = (
      <article className="group h-full rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {formatType(resource.type)}
          </span>
          <span className="text-xs font-medium text-slate-500">
            {getSourceName(resource)}
          </span>
        </div>
        <h3 className="text-xl font-semibold leading-snug text-slate-950 transition group-hover:text-[#415771]">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
            {resource.description}
          </p>
        )}
        {topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {topic.replace(/_/g, " ")}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-950">
          Visit resource
          {isExternal ? (
            <ExternalLink className="h-3.5 w-3.5" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          )}
        </div>
      </article>
    );

    if (!href) return card;
    if (isExternal) {
      return (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {card}
        </a>
      );
    }
    return (
      <Link to={href} className="block h-full">
        {card}
      </Link>
    );
  };

  const renderSmall = (resource: (typeof pool)[0]) => {
    const href = resource.slug?.current
      ? `/resources/${resource.slug.current}`
      : resource.url;
    const isExternal = !!resource.url && !resource.slug?.current;

    const card = (
      <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
            {formatType(resource.type)}
          </span>
          <span className="text-[11px] font-medium text-slate-500">
            {getSourceName(resource)}
          </span>
        </div>
        <h3 className="text-base font-semibold leading-snug text-slate-950 transition group-hover:text-[#415771]">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
            {resource.description}
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-950">
          Visit resource →
        </span>
      </article>
    );

    if (!href) return card;
    if (isExternal) {
      return (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {card}
        </a>
      );
    }
    return <Link to={href}>{card}</Link>;
  };

  return (
    <section className="mb-8 hidden md:block">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-950">
          Featured resources
        </h3>
        <p className="text-sm text-slate-500">
          Curated starting points from trusted sources.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        {renderLarge(primary)}
        <div className="grid gap-5">
          {secondary.map((resource) => (
            <div key={resource._id}>{renderSmall(resource)}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
