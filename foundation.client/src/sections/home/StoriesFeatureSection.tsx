import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEAL_LOGO_SRC } from "../../constants/logos";
import { useStories, useTestimonials } from "../../hooks/useSanityData";
import { homeImages } from "./homeContent";

function CommunityVoiceCard({
  quote,
  name,
  role,
}: {
  quote?: string;
  name?: string;
  role?: string;
}) {
  return (
    <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-white/10 bg-primary p-6 text-primary-foreground shadow-[0_24px_70px_rgba(15,23,42,0.18)] lg:rounded-[28px] lg:p-8">
      <img
        src={SEAL_LOGO_SRC}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-[0.04]"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-footer-muted">
            Community Voice
          </p>

          {quote ? (
            <>
              <p
                className="mt-8 text-4xl leading-none text-primary-foreground/20 lg:mt-10 lg:text-5xl"
                aria-hidden="true"
              >
                &ldquo;
              </p>
              <blockquote className="mt-2 text-lg font-semibold leading-relaxed text-primary-foreground lg:text-xl">
                {quote}
              </blockquote>
            </>
          ) : (
            <p className="mt-8 text-lg leading-relaxed text-footer-muted lg:mt-10">
              Community perspectives will appear here as they are curated.
            </p>
          )}
        </div>

        {name && (
          <div className="mt-8 border-t border-white/10 pt-6 lg:mt-10">
            <p className="font-semibold text-footer-foreground">{name}</p>
            {role && (
              <p className="mt-1 text-sm text-footer-muted">{role}</p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function StoriesFeatureSection() {
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

  if (!featuredStory && !featuredVoice && !storiesLoading && !voicesLoading) {
    return null;
  }

  if (!featuredStory && !featuredVoice && storiesLoading && voicesLoading) {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="h-48 animate-pulse rounded-[2rem] bg-section-alt" />
        </div>
      </section>
    );
  }

  const storyImage =
    featuredStory?.image?.url ?? homeImages.storyFallback;
  const storyImageAlt =
    featuredStory?.image?.alt ??
    "Community voices shaping anxiety support";

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-28"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 animate-fade-up">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Stories & Voices
          </p>
          <h2
            id="stories-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Lived experience that moves the work forward.
          </h2>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[1.55fr_0.95fr] lg:items-stretch">
          {featuredStory ? (
            <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-white shadow-sm transition duration-300 hover:shadow-md lg:rounded-[28px]">
              <div className="relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[420px]">
                <img
                  src={storyImage}
                  alt={storyImageAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-primary/10"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 flex-col bg-white p-6 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Curated Story
                </p>
                <h3 className="mt-5 text-2xl font-bold text-primary">
                  {featuredStory.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-muted-foreground">
                  {featuredStory.summary}
                </p>
                <Link
                  to="/stories"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  Read all stories
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ) : (
            <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-border bg-white shadow-sm lg:rounded-[28px]">
              <div className="relative h-[280px] overflow-hidden sm:h-[320px] lg:h-[420px]">
                <img
                  src={homeImages.storyFallback}
                  alt="Community voices shaping anxiety support"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground">
                  Curated stories coming soon.
                </p>
                <Link
                  to="/stories"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary"
                >
                  Visit stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          )}

          <CommunityVoiceCard
            quote={featuredVoice?.quote}
            name={featuredVoice?.name}
            role={featuredVoice?.role}
          />
        </div>
      </div>
    </section>
  );
}
