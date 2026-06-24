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

// TODO: Restore story image when final photography is available.
const showStoryImages = false;

function StoryCard({ story }: { story: Story }) {
  const storySlug = story.slug?.current;
  const storyUrl = storySlug ? `/stories/${storySlug}` : "#";

  return (
    <Link to={storyUrl} className="block h-full">
      <article className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
        {/* TODO: Restore story image when final photography is available. */}
        {showStoryImages && story.image?.url && (
          <div className="h-48 w-full overflow-hidden">
            <img
              src={story.image.url}
              alt={story.image.alt || story.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        <div className="p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#415771]">
            Personal Story
          </p>
          <div
            className="mt-4 h-px w-12 bg-[#415771]/30"
            aria-hidden="true"
          />
          <h3 className="mt-5 text-xl font-semibold leading-tight text-slate-950">
            {story.title}
          </h3>
          <p className="mt-6 text-sm leading-7 text-slate-700">
            {story.summary}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {story.wordCount ? (
              <Badge variant="outline" className="text-xs">
                {story.wordCount} words
              </Badge>
            ) : null}
            {story.themes?.map((theme: string) => (
              <Badge
                key={theme}
                variant="secondary"
                className="bg-primary/10 text-xs text-primary"
              >
                {theme}
              </Badge>
            ))}
          </div>
          {storySlug && (
            <div className="mt-5 border-t border-slate-100 pt-4">
              <span className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-primary">
                Read Story
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

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

      <section className="bg-section-alt py-16">
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2 text-center md:max-w-2xl md:text-left">
              <Badge className="border-primary/20 bg-primary/10 text-primary">
                Curated Stories
              </Badge>
              <h2 className="text-3xl font-semibold text-foreground">
                Edited pieces grounded in lived experience
              </h2>
              <p className="text-muted-foreground">
                Each story is shaped with the people who lived it. We keep them
                concise, practical, and under 2,000 words so you can act on what
                you learn.
              </p>
            </div>
            <Button size="lg" asChild className="shrink-0 lg:hidden">
              <a href="#community-voices" className="flex items-center">
                Jump to Community Voices
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {storiesError && (
            <p className="text-sm text-secondary">
              We’re having trouble loading stories right now. Please try again
              soon.
            </p>
          )}

          {hasStories ? (
            <div className="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12">
              <div className="mx-auto w-full max-w-xl space-y-6 lg:mx-0 lg:max-w-none">
                {stories.map((story: Story) => (
                  <StoryCard key={story._id} story={story} />
                ))}
              </div>

              <aside className="mt-10 hidden lg:block lg:sticky lg:top-28">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
                    Why these stories matter
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Real experiences help families, partners, and practitioners
                    understand anxiety with more empathy and clarity. These
                    pieces are co-edited to stay practical, honest, and grounded
                    in lived experience—not clinical advice.
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Each story is kept under 2,000 words so you can read, reflect,
                    and act without feeling overwhelmed.
                  </p>
                  <Button size="lg" asChild className="mt-6 w-full">
                    <a href="#community-voices" className="flex items-center justify-center">
                      Jump to Community Voices
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </aside>
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
