import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/Card";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  resource: {
    _id: string;
    _createdAt: string;
    title: string;
    description?: string;
    type?: string;
    url?: string; // External URL
    slug?: { current: string };
    learningLevel?: string;
    contentDepth?: string;
    topicAreas?: string[];
    shareable?: boolean;
  };
  index?: number;
}

export function ResourceCard({ resource, index = 0 }: ResourceCardProps) {
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
        return "Visit site";
      case "tool":
      case "app":
        return "Open tool";
      default:
        return "Read article";
    }
  };

  // If no slug, render non-clickable card
  if (!resource.slug?.current) {
    return (
      <Card className="h-full border border-border">
        <CardContent className="p-4">
          <h3
            className="text-base font-semibold text-foreground line-clamp-3 mb-3 leading-snug"
            title={resource.title}
          >
            {resource.title}
          </h3>
          {resource.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {resource.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Reading Time */}
            {resource.contentDepth && (
              <span className="px-2 py-1 bg-muted/50 rounded text-muted-foreground">
                {getDepthText(resource.contentDepth)}
              </span>
            )}
            {/* Topic Count */}
            {resource.topicAreas && resource.topicAreas.length > 0 && (
              <span className="text-muted-foreground">
                • {resource.topicAreas.length} topic
                {resource.topicAreas.length > 1 ? "s" : ""}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Clickable card with link
  return (
    <Link
      to={`/resources/${resource.slug.current}`}
      className="block h-full"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <Card className="group h-full hover:shadow-md transition-all duration-200 border border-border hover:border-primary/50 cursor-pointer">
        <CardContent className="p-4">
          {/* Title */}
          <h3
            className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-3 leading-snug"
            title={resource.title}
          >
            {resource.title}
          </h3>

          {/* Description */}
          {resource.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {resource.description}
            </p>
          )}

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            {/* Reading Time */}
            {resource.contentDepth && (
              <span className="px-2 py-1 bg-muted/50 rounded text-muted-foreground">
                {getDepthText(resource.contentDepth)}
              </span>
            )}

            {/* Topic Count */}
            {resource.topicAreas && resource.topicAreas.length > 0 && (
              <span className="text-muted-foreground">
                • {resource.topicAreas.length} topic
                {resource.topicAreas.length > 1 ? "s" : ""}
              </span>
            )}
          </div>

          {/* Action Link */}
          <div className="pt-2 border-t border-border">
            <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
              {getActionText(resource.type)}
              <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
