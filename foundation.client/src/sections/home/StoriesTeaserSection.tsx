import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { useStories, useTestimonials } from "../../hooks/useSanityData";

export function StoriesTeaserSection() {
  const { data: stories = [], isLoading: storiesLoading } = useStories({
    limit: 1,
    featured: true,
  });
  const { data: voices = [], isLoading: voicesLoading } = useTestimonials({
    limit: 1,
    featured: true,
  });

  const featuredStory = stories[0];
  const featuredVoice = voices[0];

  if (!featuredStory && !featuredVoice && storiesLoading && voicesLoading) {
    return null;
  }

  if (!featuredStory && !featuredVoice && !storiesLoading && !voicesLoading) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-muted/40 via-white to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 rounded-full p-3">
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Stories that Inspire Action
            </h2>
            <p className="text-muted-foreground">
              Lived experience and collaboration-curated in one place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredStory && (
            <Card className="border-border shadow-soft hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Curated Story
                  </span>
                </div>
                <CardTitle className="text-lg text-foreground">
                  {featuredStory.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featuredStory.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {featuredStory.wordCount
                      ? `${featuredStory.wordCount} words`
                      : "Story length available soon"}
                  </span>
                  <Link
                    to="/stories"
                    className="inline-flex items-center text-primary font-semibold"
                  >
                    Read all stories
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}

          {featuredVoice && (
            <Card className="border-border shadow-soft hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Quote className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Community Voice
                  </span>
                </div>
                <CardTitle className="text-lg text-foreground">
                  {featuredVoice.name}
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  {featuredVoice.role}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  “{featuredVoice.quote}”
                </p>
                <Link
                  to="/stories#community-voices"
                  className="inline-flex items-center text-primary font-semibold text-sm"
                >
                  Explore community voices
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
