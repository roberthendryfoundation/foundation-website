import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { useLatestResources } from "../../hooks/useSanityData";

interface LatestResourcesSectionProps {
  /** Number of resources to display (default: 3) */
  limit?: number;
  /** Filter by specific category IDs (optional) */
  categoryIds?: string[];
  /** Filter by category slugs (easier than IDs) e.g., ["news-updates"] */
  categorySlugs?: string[];
  /** Show resources of specific type only (e.g., "news", "article") */
  resourceType?: string;
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Custom text for "View All" button */
  viewAllText?: string;
  /** Custom link for "View All" button (default: /resources) */
  viewAllLink?: string;
}

export function LatestResourcesSection({
  limit = 3,
  categoryIds,
  categorySlugs,
  resourceType,
  title = "Latest Resources",
  description = "Stay updated with our newest educational content and news about anxiety.",
  viewAllText = "View All Resources",
  viewAllLink = "/resources",
}: LatestResourcesSectionProps) {
  const navigate = useNavigate();
  const {
    data: resources,
    isLoading,
    error,
  } = useLatestResources(limit, categoryIds, resourceType, categorySlugs);

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">Loading latest resources...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !resources || resources.length === 0) {
    return null; // Don't show section if no resources
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource) => (
            <div
              key={resource._id}
              className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
              onClick={() =>
                resource.slug?.current &&
                navigate(`/resources/${resource.slug.current}`)
              }
            >
              {/* Image (if available) */}
              {resource.image?.url && (
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={resource.image.url}
                    alt={resource.image.alt || resource.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {resource.isExternal && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Categories */}
                {resource.categories && resource.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.categories.slice(0, 2).map((category) => (
                      <Badge
                        key={category._id}
                        variant="secondary"
                        className="text-xs"
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {resource.title}
                </h3>

                {/* Description */}
                {resource.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                )}

                {/* Meta Info */}
                <div className="flex items-center text-xs text-muted-foreground pt-4 border-t border-border">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>
                    {resource.publishedAt
                      ? new Date(resource.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )
                      : "Recently added"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate(viewAllLink)}
            className="group"
          >
            {viewAllText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
