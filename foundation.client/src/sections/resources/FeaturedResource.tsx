import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useFeaturedResources } from "../../hooks/useSanityData";
import { useAdvancedResourceSearch } from "../../hooks/useAdvancedSearch";

export function FeaturedResource() {
  const { data: featuredList, isLoading: featuredLoading } =
    useFeaturedResources(1);
  const { data: fallbackData, isLoading: fallbackLoading } =
    useAdvancedResourceSearch({}, { page: 0, pageSize: 1, sortBy: "recent" });

  const isLoading = featuredLoading || fallbackLoading;
  const resource =
    featuredList?.[0] ?? fallbackData?.resources?.[0] ?? null;

  if (isLoading || !resource) return null;

  const href = resource.slug?.current
    ? `/resources/${resource.slug.current}`
    : resource.url;

  const isExternal = !!resource.url && !resource.slug?.current;

  const card = (
    <article className="rounded-3xl bg-slate-950 p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        Featured Resource
      </p>
      <h3 className="mt-3 text-lg font-bold leading-snug text-white">
        {resource.title}
      </h3>
      {resource.description && (
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-white/75">
          {resource.description}
        </p>
      )}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
        {isExternal ? "Visit site" : "Read more"} →
        {isExternal && <ExternalLink className="h-3.5 w-3.5" />}
      </span>
    </article>
  );

  return (
    <section className="bg-white px-4 pb-2 pt-2 md:hidden">
      {href ? (
        isExternal ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {card}
          </a>
        ) : (
          <Link to={href} className="block">
            {card}
          </Link>
        )
      ) : (
        card
      )}
    </section>
  );
}
