import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { BookOpen, Sparkle } from "lucide-react";

const curatedStories = [
  {
    slug: "roberts-legacy",
    title: "Robert’s Legacy: Turning Loss into Action",
    summary:
      "Andrew shares the practical steps the family is taking to honor Robert—building systems that support families who are already doing everything they can.",
    wordCount: 1250,
  },
  {
    slug: "family-partners",
    title: "Co-Creating with Families & Partners",
    summary:
      "How caregivers, clinicians, and community leaders co-designed the foundation’s first resource kits to make anxiety support easier to navigate.",
    wordCount: 980,
  },
  {
    slug: "community-voices",
    title: "Community Voices in Every Decision",
    summary:
      "A look at the listening sessions guiding our roadmap, with insight from advocates who insist on action, transparency, and shared leadership.",
    wordCount: 1125,
  },
];

export function CuratedStoriesSection() {
  return (
    <section id="curated-stories" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Curated Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Edited pieces under 2,000 words that document how families,
            partners, and community members are shaping the foundation’s work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curatedStories.map((story) => (
            <Card
              key={story.slug}
              className="border-border shadow-soft hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <CardTitle className="text-lg text-foreground">
                    {story.title}
                  </CardTitle>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {story.wordCount} words
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {story.summary}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center text-muted-foreground">
                    <Sparkle className="h-4 w-4 mr-2 text-primary" />
                    Edited for clarity & impact
                  </span>
                  <Link
                    to={`/about#story-${story.slug}`}
                    className="text-primary font-semibold hover:underline"
                  >
                    Read teaser
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

