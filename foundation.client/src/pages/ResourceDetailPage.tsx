import { useParams, Link, useNavigate } from "react-router-dom";
import { useResourceBySlug, useRelatedResources } from "../hooks/useSanityData";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import {
  ArrowLeft,
  Clock,
  Share2,
  Printer,
  Download,
  BookmarkPlus,
  ExternalLink,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { ResourceCard } from "../components/ResourceCard";
import { SocialShare } from "../components/SocialShare";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: resource, isLoading, error } = useResourceBySlug(slug || "");

  // Fetch related resources
  const { data: relatedResources = [] } = useRelatedResources(
    resource?._id || "",
    resource?.topicAreas,
    resource?.learningLevel,
    3
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-32 bg-muted rounded"></div>
            <div className="h-12 w-3/4 bg-muted rounded"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Resource Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The resource you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/resources")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const getLevelBadge = (level?: string) => {
    const badges = {
      beginner: {
        emoji: "📖",
        text: "Beginner",
        class: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      },
      intermediate: {
        emoji: "🧠",
        text: "Intermediate",
        class:
          "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
      },
      advanced: {
        emoji: "🔬",
        text: "Advanced",
        class:
          "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
      },
    };
    return badges[level as keyof typeof badges] || badges.beginner;
  };

  const getDepthBadge = (depth?: string) => {
    const badges = {
      quick: { text: "Quick Read (2-5 min)", icon: "📄" },
      article: { text: "Article (5-15 min)", icon: "📰" },
      deep: { text: "Deep Dive (15-30 min)", icon: "📚" },
      research: { text: "Research Paper (30+ min)", icon: "🔬" },
    };
    return badges[depth as keyof typeof badges] || badges.article;
  };

  const levelBadge = getLevelBadge(resource.learningLevel);
  const depthBadge = getDepthBadge(resource.contentDepth);

  // Check if this is an external resource
  const isExternalResource = !!resource.url;

  // Extract domain from URL for display
  const getSourceDomain = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "");
      return domain;
    } catch {
      return url;
    }
  };

  // If external resource, show minimal preview page
  if (isExternalResource) {
    return (
      <>
        <SEO
          title={`${resource.title} - External Resource`}
          description={resource.description || `Learn about ${resource.title}`}
          keywords={resource.topicAreas?.join(", ") || "anxiety education"}
          canonical={`/resources/${slug}`}
        />

        <div className="min-h-screen bg-background">
          {/* Header */}
          <div className="bg-muted/30 border-b">
            <div className="max-w-3xl mx-auto px-4 py-4 space-y-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/resources")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Button>

              <Breadcrumbs
                items={[
                  { label: "Resources", href: "/resources" },
                  {
                    label: resource.categories?.[0]?.name || "Resource",
                    href: "/resources",
                  },
                  { label: resource.title },
                ]}
              />
            </div>
          </div>

          {/* Main Content - Single Card */}
          <div className="max-w-3xl mx-auto px-4 py-12">
            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-6">
                {/* External Badge + Source */}
                <div className="flex items-center gap-2 text-sm">
                  <Badge className="bg-blue-500 text-white border-0">
                    🔗 External Resource
                  </Badge>
                  <span className="text-muted-foreground">from</span>
                  <span className="font-semibold text-foreground">
                    {getSourceDomain(resource.url!)}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  {resource.title}
                </h1>

                {/* Description */}
                {resource.description && (
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                )}

                {/* Visit Button */}
                <div className="pt-2 space-y-4">
                  <Button size="lg" className="w-full" asChild>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit External Resource
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Opens in new tab
                  </p>

                  {/* Social Share */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Share this resource:
                    </span>
                    <SocialShare
                      url={`/resources/${slug}`}
                      title={resource.title}
                      description={resource.description}
                    />
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
                  <Badge className={levelBadge.class} variant="outline">
                    {levelBadge.emoji} {levelBadge.text}
                  </Badge>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {depthBadge.text}
                  </span>
                  {resource.topicAreas && resource.topicAreas.length > 0 && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {resource.topicAreas.length} topics
                      </span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            {relatedResources.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  📚 Related Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedResources.map((related, index) => (
                    <ResourceCard
                      key={related._id}
                      resource={related}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // Internal resource - show full content page
  return (
    <>
      <SEO
        title={`${resource.title} - Educational Resources`}
        description={resource.description || `Learn about ${resource.title}`}
        keywords={resource.topicAreas?.join(", ") || "anxiety education"}
        canonical={`/resources/${slug}`}
      />

      <div className="min-h-screen bg-background">
        {/* Header Actions */}
        <div className="bg-muted/30 border-b no-print">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/resources")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Button>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
                {resource.fileUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={resource.fileUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-3 space-y-8">
              {/* Title & Badges */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {resource.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={levelBadge.class}>
                    {levelBadge.emoji} {levelBadge.text}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {depthBadge.text}
                  </Badge>
                  {resource.topicAreas && resource.topicAreas.length > 0 && (
                    <Badge variant="secondary">
                      {resource.topicAreas.length} topics covered
                    </Badge>
                  )}
                  {resource.shareable && (
                    <Badge
                      variant="outline"
                      className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800"
                    >
                      <Share2 className="h-3 w-3 mr-1" />
                      Shareable
                    </Badge>
                  )}
                </div>

                {resource.description && (
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                )}
              </div>

              {/* Article Content */}
              <Card>
                <CardContent className="pt-6 prose prose-lg dark:prose-invert max-w-none">
                  {/* This would be your rich text content from Sanity */}
                  <div className="text-base leading-relaxed space-y-4">
                    <p>{resource.description || "Content coming soon..."}</p>

                    {/* If you have block content from Sanity, render it here */}
                    {/* Example: <PortableText value={resource.body} /> */}

                    <p className="text-muted-foreground italic">
                      💡 <strong>Note:</strong> Add rich content to this
                      resource in your Sanity Studio to see it displayed here.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Takeaways */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📖 Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Understanding anxiety is the first step to managing it
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Professional help is available and effective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>You're not alone in your experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feedback */}
              <Card className="no-print">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm font-semibold mb-3">
                      Was this helpful?
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <Button variant="outline" size="sm">
                        👍 Yes
                      </Button>
                      <Button variant="outline" size="sm">
                        👎 No
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Info */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Learning Level */}
                  <div>
                    <p className="text-sm font-semibold mb-1">Learning Level</p>
                    <Badge className={levelBadge.class}>
                      {levelBadge.emoji} {levelBadge.text}
                    </Badge>
                  </div>

                  {/* Content Depth */}
                  <div>
                    <p className="text-sm font-semibold mb-1">Reading Time</p>
                    <p className="text-sm text-muted-foreground">
                      {depthBadge.icon} {depthBadge.text}
                    </p>
                  </div>

                  {/* Topics Covered */}
                  {resource.topicAreas && resource.topicAreas.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold mb-2">
                        Topics Covered
                      </p>
                      <div className="space-y-1">
                        {resource.topicAreas.slice(0, 5).map((topic, i) => (
                          <p
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            {topic.replace(/_/g, " ")}
                          </p>
                        ))}
                        {resource.topicAreas.length > 5 && (
                          <p className="text-xs text-muted-foreground">
                            +{resource.topicAreas.length - 5} more
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Best For */}
                  {resource.targetAudience &&
                    resource.targetAudience.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold mb-2">Best For</p>
                        <div className="flex flex-wrap gap-1">
                          {resource.targetAudience.map((aud, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                            >
                              {aud.replace(/_/g, " ")}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Actions */}
                  <div className="pt-4 border-t no-print">
                    <Button variant="outline" size="sm" className="w-full mb-2">
                      <BookmarkPlus className="h-4 w-4 mr-2" />
                      Save for Later
                    </Button>
                    {resource.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Source
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Need Help Card */}
              <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 no-print">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help Now?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    If you're experiencing severe anxiety or crisis:
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a href="tel:988">📞 Call 988 Crisis Line</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/services">Find a Therapist</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <div className="mt-12 no-print">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  📚 Related Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedResources.map((related, index) => (
                    <ResourceCard
                      key={related._id}
                      resource={related}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
