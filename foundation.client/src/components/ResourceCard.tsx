import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/Card";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  resource: {
    _id: string;
    _createdAt: string;
    title: string;
    description?: string;
    type?: string;
    url?: string;
    slug?: { current: string };
    learningLevel?: string;
    contentDepth?: string;
    topicAreas?: string[];
    shareable?: boolean;
    category?: { name?: string };
  };
  index?: number;
  variant?: "default" | "compact" | "editorial";
}

function formatType(type?: string) {
  if (!type) return "Article";
  return type.charAt(0).toUpperCase() + type.slice(1);
}

function getSourceName(resource: ResourceCardProps["resource"]) {
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

export function ResourceCard({
  resource,
  index = 0,
  variant = "default",
}: ResourceCardProps) {
  const getDepthText = (depth?: string) => {
    switch (depth) {
      case "quick":
        return "5 min";
      case "article":
        return "15 min";
      case "deep":
        return "30 min";
      case "research":
        return "60+ min";
      default:
        return "";
    }
  };

  const getActionText = (type?: string) => {
    switch (type?.toLowerCase()) {
      case "video":
        return "Watch video";
      case "audio":
      case "podcast":
        return "Listen";
      case "pdf":
      case "document":
        return "View PDF";
      case "worksheet":
      case "workbook":
        return "Download";
      case "website":
      case "link":
        return "Visit resource";
      case "tool":
      case "app":
        return "Open tool";
      default:
        return "Visit resource";
    }
  };

  const isCompact = variant === "compact";
  const isEditorial = variant === "editorial";
  const topics = (resource.topicAreas ?? []).slice(0, 2);

  const editorialCard = (
    <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {formatType(resource.type)}
        </span>
        <span className="text-xs font-medium text-slate-500">
          {getSourceName(resource)}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-slate-950 transition group-hover:text-[#415771]">
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
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {topic.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      )}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-semibold text-slate-950">
          {getActionText(resource.type)}
        </span>
        {resource.url && !resource.slug?.current ? (
          <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-[#415771]" />
        ) : (
          <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#415771]" />
        )}
      </div>
    </article>
  );

  if (isEditorial) {
    if (resource.url && !resource.slug?.current) {
      return (
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {editorialCard}
        </a>
      );
    }
    if (resource.slug?.current) {
      return (
        <Link
          to={`/resources/${resource.slug.current}`}
          className="block h-full"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {editorialCard}
        </Link>
      );
    }
    return editorialCard;
  }

  if (!resource.slug?.current) {
    return (
      <Card
        className={`h-full border border-border ${isCompact ? "rounded-2xl shadow-sm" : ""}`}
      >
        <CardContent className="p-4">
          <h3
            className="mb-3 line-clamp-3 text-base font-semibold leading-snug text-foreground"
            title={resource.title}
          >
            {resource.title}
          </h3>
          {resource.description && (
            <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
              {resource.description}
            </p>
          )}
          {isCompact ? (
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {resource.type || "Resource"}
              </span>
              <span className="text-sm font-semibold text-slate-950">
                {getActionText(resource.type)} →
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {resource.contentDepth && (
                <span className="rounded bg-muted/50 px-2 py-1 text-muted-foreground">
                  {getDepthText(resource.contentDepth)}
                </span>
              )}
              {resource.topicAreas && resource.topicAreas.length > 0 && (
                <span className="text-muted-foreground">
                  • {resource.topicAreas.length} topic
                  {resource.topicAreas.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Link
      to={`/resources/${resource.slug.current}`}
      className="block h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Card
        className={`group h-full cursor-pointer border border-border transition-all duration-200 hover:border-primary/50 ${
          isCompact ? "rounded-2xl shadow-sm hover:shadow-md" : "hover:shadow-md"
        }`}
      >
        <CardContent className="p-4">
          <h3
            className={`mb-3 line-clamp-3 text-base font-semibold leading-snug text-foreground ${
              !isCompact
                ? "transition-colors group-hover:text-primary"
                : "text-slate-950"
            }`}
            title={resource.title}
          >
            {resource.title}
          </h3>
          {resource.description && (
            <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
              {resource.description}
            </p>
          )}
          {isCompact ? (
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {resource.type || "Article"}
              </span>
              <span className="text-sm font-semibold text-slate-950 transition group-hover:text-primary">
                {getActionText(resource.type)} →
              </span>
            </div>
          ) : (
            <>
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                {resource.contentDepth && (
                  <span className="rounded bg-muted/50 px-2 py-1 text-muted-foreground">
                    {getDepthText(resource.contentDepth)}
                  </span>
                )}
                {resource.topicAreas && resource.topicAreas.length > 0 && (
                  <span className="text-muted-foreground">
                    • {resource.topicAreas.length} topic
                    {resource.topicAreas.length > 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <div className="border-t border-border pt-2">
                <span className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {getActionText(resource.type)}
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
