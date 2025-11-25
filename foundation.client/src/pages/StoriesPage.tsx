import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight, BookOpen, Quote, Sparkles } from "lucide-react";
import { LEGAL_DISCLAIMER } from "../constants";
import { SEO } from "../components/SEO";
import { Loading } from "../components/Loading";
import {
  useStories,
  useTestimonials,
  type Story,
} from "../hooks/useSanityData";

export function StoriesPage() {
  const {
    data: stories = [],
    isLoading: storiesLoading,
    isError: storiesError,
  } = useStories();
  const { data: communityVoices = [], isLoading: voicesLoading } =
    useTestimonials({ limit: 9 });

  const isLoading = (storiesLoading && stories.length === 0) || voicesLoading;
  const hasStories = stories.length > 0;
  const hasVoices = communityVoices.length > 0;

  return (
    <>
      <SEO
        title="Stories & Community Voices"
        description="Read curated stories and community voices highlighting lived experience, collaboration, and practical anxiety support."
        keywords="stories, community voices, anxiety lived experience, Robert A. Hendry Foundation"
        canonical="/stories"
      />

      {isLoading && (
        <Loading fullScreen message="Loading Stories & Community Voices..." />
      )}

      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Stories &amp; Community Voices
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Curated stories (under 2,000 words) and short community perspectives
            capture how families, partners, and practitioners are shaping this
            foundation’s work. Every piece reflects collaboration, agency, and
            transparency.
          </p>
          <p className="text-sm text-muted-foreground">{LEGAL_DISCLAIMER}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6 mb-10">
            <div className="space-y-2 text-center md:text-left">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Curated Stories
              </Badge>
              <h2 className="text-3xl font-semibold text-foreground">
                Edited pieces grounded in lived experience
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Each story is shaped with the people who lived it. We keep them
                concise, practical, and under 2,000 words so you can act on what
                you learn.
              </p>
            </div>
            <Button size="lg" asChild>
              <a href="#community-voices" className="flex items-center">
                Jump to Community Voices
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>

          {storiesError && (
            <p className="text-sm text-destructive">
              We’re having trouble loading stories right now. Please try again
              soon.
            </p>
          )}

          {hasStories ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story: Story) => {
                const storySlug = story.slug?.current;
                const storyUrl = storySlug ? `/stories/${storySlug}` : "#";

                return (
                  <Link key={story._id} to={storyUrl} className="block h-full">
                    <Card className="h-full border-border shadow-soft hover:shadow-md transition-shadow cursor-pointer">
                      {story.image?.url && (
                        <div className="h-48 w-full overflow-hidden rounded-t-xl">
                          <img
                            src={story.image.url}
                            alt={story.image.alt || story.title}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl leading-tight">
                          {story.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {story.summary}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {story.wordCount ? (
                            <Badge variant="outline" className="text-xs">
                              {story.wordCount} words
                            </Badge>
                          ) : null}
                          {story.themes?.map((theme: string) => (
                            <Badge
                              key={theme}
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary"
                            >
                              {theme}
                            </Badge>
                          ))}
                        </div>
                        {storySlug && (
                          <div className="pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-center text-primary hover:text-primary"
                            >
                              Read Story
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            !storiesLoading && (
              <p className="text-sm text-muted-foreground">
                Stories are coming soon. Check back shortly or contact the team
                if you’d like to collaborate.
              </p>
            )
          )}
        </div>
      </section>

      <section
        id="community-voices"
        className="py-16 bg-muted/40 border-t border-border/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
              <Quote className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground">
                Voices from Our Community
              </h2>
              <p className="text-muted-foreground">
                Short reflections (2–6 sentences) from partners, family members,
                and practitioners working alongside the foundation.
              </p>
            </div>
          </div>

          {hasVoices ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityVoices.map((voice) => (
                <Card
                  key={voice._id}
                  className="h-full border-border shadow-soft bg-background"
                >
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-lg text-foreground">
                      {voice.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {voice.role}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      “{voice.quote}”
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            !voicesLoading && (
              <p className="text-sm text-muted-foreground">
                Community voices will appear here soon. We’d love to include
                yours.
              </p>
            )
          )}

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-6">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Have a story to share?
                </h3>
                <p className="text-sm text-muted-foreground">
                  We co-edit each piece to keep the storyteller’s voice
                  centered. Reach out if you’d like to collaborate on a story or
                  highlight.
                </p>
              </div>
            </div>
            <Button asChild size="lg" variant="secondary">
              <a href="/contact">Contact the team</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
