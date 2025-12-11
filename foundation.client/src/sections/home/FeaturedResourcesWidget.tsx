import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  BookOpen,
  FileText,
  ArrowRight,
  Star,
  Clock,
  Share2,
  Brain,
  Microscope,
} from "lucide-react";
import { useFeaturedResources } from "../../hooks/useSanityData";

export function FeaturedResourcesWidget() {
  const { data: resources = [], isLoading } = useFeaturedResources(4);

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 w-64 bg-muted rounded mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!resources.length) return null;

  const getLevelIcon = (level?: string) => {
    switch (level) {
      case "beginner":
        return BookOpen;
      case "intermediate":
        return Brain;
      case "advanced":
        return Microscope;
      default:
        return BookOpen;
    }
  };

  const getDepthBadge = (depth?: string) => {
    switch (depth) {
      case "quick":
        return { text: "Quick Read", icon: FileText };
      case "article":
        return { text: "Article", icon: FileText };
      case "deep":
        return { text: "Deep Dive", icon: BookOpen };
      case "research":
        return { text: "Research", icon: Microscope };
      default:
        return { text: "Read", icon: FileText };
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Start Learning About Anxiety
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Evidence-based resources to help you understand anxiety disorders
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link to="/resources">
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {resources.map((resource, index) => (
            <Card
              key={resource._id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.5s ease-out forwards",
              }}
            >
              <CardHeader className="pb-3">
                {/* Featured Badge */}
                {resource.featured && (
                  <div className="absolute top-3 right-3">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                )}

                {/* Resource Type Icon */}
                <div className="mb-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 group-hover:scale-110 transition-transform">
                    {(() => {
                      const LevelIcon = getLevelIcon(resource.learningLevel);
                      return <LevelIcon className="h-6 w-6 text-primary" />;
                    })()}
                  </div>
                </div>

                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>

                <CardDescription className="line-clamp-2 text-sm">
                  {resource.description || "Learn more about this topic"}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {resource.contentDepth &&
                    (() => {
                      const depthBadge = getDepthBadge(resource.contentDepth);
                      const DepthIcon = depthBadge.icon;
                      return (
                        <Badge
                          variant="outline"
                          className="text-xs flex items-center gap-1"
                        >
                          <Clock className="h-3 w-3" />
                          <DepthIcon className="h-3 w-3" />
                          {depthBadge.text}
                        </Badge>
                      );
                    })()}
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {resource.topicAreas && resource.topicAreas.length > 0 && (
                    <span className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      {resource.topicAreas.length} topics
                    </span>
                  )}
                  {resource.shareable && (
                    <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                      <Share2 className="h-3 w-3" />
                      Shareable
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link to={`/resources/${resource.slug?.current}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center md:hidden">
          <Button variant="outline" asChild>
            <Link to="/resources">
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
