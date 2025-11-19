import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { BookOpen, Heart } from "lucide-react";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl mb-6 text-white">
          Join Us in Creating Change
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          We are building an action-based foundation that identifies,
          collaborates on, and completes projects that make a real difference.
          Help us prepare for Phase 2.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => navigate("/contact")}
          >
            <Heart className="h-4 w-4 mr-2" /> Contact the Team
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
            onClick={() => navigate("/stories")}
          >
            <BookOpen className="h-4 w-4 mr-2" /> Explore Stories
          </Button>
        </div>
        <p className="mt-6 text-xs text-white/80">
          We are action-focused and collaboration-driven. This website does not
          provide medical advice, diagnosis, or treatment.
        </p>
      </div>
    </section>
  );
}
