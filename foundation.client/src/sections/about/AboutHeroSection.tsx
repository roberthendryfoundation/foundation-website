import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export function AboutHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Heart className="h-3 w-3 mr-1" />
            About The Robert A. Hendry Foundation
          </Badge>
          <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
            We Are Building Something Different
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Andrew Hendry founded this organization after losing his son Robert
            to a tragic combination of unsuccessfully treated anxiety and
            alcohol use. Robert was 33, brilliant, kind, and deeply loved - but
            he suffered in silence. This foundation exists to do something about
            it. We do not just raise awareness. We are a 501(c)(3) nonprofit
            that identifies, collaborates on, and completes projects that help
            people with anxiety and empower families who are already trying to
            support their loved ones.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Everything we build centers families, caregivers, and people living
            with anxiety. We focus on co-creating practical solutions — doing
            things that support their efforts, amplify their progress, and make
            resources easier to access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/resources")}>
              Browse Resources <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
