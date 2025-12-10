import { useParams, useNavigate } from "react-router-dom";
import { useStoryBySlug } from "../hooks/useSanityData";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { ArrowLeft, Calendar } from "lucide-react";
import { SEO } from "../components/SEO";
import { SocialShare } from "../components/SocialShare";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PortableText } from "@portabletext/react";
import { Loading } from "../components/Loading";

export function StoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: story, isLoading, error } = useStoryBySlug(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Loading message="Loading story..." />
        </div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Story Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The story you're looking for doesn't exist or has been removed.
              </p>
              <Button onClick={() => navigate("/stories")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const storyUrl = `${window.location.origin}/stories/${slug}`;

  return (
    <>
      <SEO
        title={`${story.title} - Stories`}
        description={story.summary || `Read ${story.title}`}
        keywords={story.themes?.join(", ") || "story, anxiety"}
        canonical={`/stories/${slug}`}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-muted/30 border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 space-y-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/stories")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>

            <Breadcrumbs
              items={[
                { label: "Stories", href: "/stories" },
                { label: story.title },
              ]}
            />
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          <Card className="overflow-visible">
            {/* Story Image */}
            {story.image?.url && (
              <div className="h-64 md:h-96 w-full overflow-hidden">
                <img
                  src={story.image.url}
                  alt={story.image.alt || story.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {story.themes?.map((theme: string) => (
                  <Badge
                    key={theme}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {theme}
                  </Badge>
                ))}
                {story.wordCount && (
                  <Badge variant="outline" className="text-xs">
                    {story.wordCount} words
                  </Badge>
                )}
                {story.publishedAt && (
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(story.publishedAt).toLocaleDateString()}
                  </Badge>
                )}
              </div>

              <CardTitle className="text-3xl md:text-4xl font-bold leading-tight">
                {story.title}
              </CardTitle>

              {story.summary && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {story.summary}
                </p>
              )}
            </CardHeader>

            <CardContent className="space-y-6 overflow-visible">
              {/* Story Body */}
              {story.body && story.body.length > 0 ? (
                <div className="prose prose-lg max-w-none">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <PortableText value={story.body as any} />
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  Full story content coming soon.
                </p>
              )}

              {/* Share Section */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="relative overflow-visible">
                    <h3 className="text-sm font-semibold mb-2">
                      Share this story
                    </h3>
                    <SocialShare
                      url={storyUrl}
                      title={story.title}
                      description={story.summary}
                    />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/stories")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Stories
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </>
  );
}
