import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { BookOpen, Search, TrendingUp } from "lucide-react";

export function ResourcesHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = [
    "panic attacks",
    "breathing exercises",
    "sleep anxiety",
    "social situations",
    "work stress",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to library section
      document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Dispatch custom event to trigger search in library
      window.dispatchEvent(
        new CustomEvent("resourceSearch", { detail: searchQuery })
      );
    }
  };

  const handlePopularSearch = (term: string) => {
    setSearchQuery(term);
    window.dispatchEvent(new CustomEvent("resourceSearch", { detail: term }));
    setTimeout(() => {
      document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 text-base py-2 px-4 shadow-sm"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Anxiety Resources
          </Badge>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Learn About Anxiety
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
            While we build our action-based foundation, we're sharing
            evidence-based educational resources to help you understand anxiety.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            <strong>Phase 1:</strong> Education & Resource Library |{" "}
            <strong>Next:</strong> Project collaboration & completion (2025)
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources... (e.g., panic attacks, coping strategies)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-32 h-14 text-base border-2 shadow-lg focus:shadow-xl transition-shadow"
              />
              <Button
                type="submit"
                size="lg"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Popular:
            </span>
            {popularSearches.map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => handlePopularSearch(term)}
                className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                {term}
              </Button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </section>
  );
}
