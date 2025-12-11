import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Heart, ArrowRight, AlertCircle } from "lucide-react";
import { LEGAL_DISCLAIMER } from "../../constants";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="gradient-hero text-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.85fr] gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-black/10 text-white border-white/30"
              >
                <Heart className="h-3 w-3 mr-1" />
                The Robert A. Hendry Foundation
              </Badge>
              <h1 className="text-4xl lg:text-6xl text-black">
                Building an Action-Based Anxiety Foundation
              </h1>
              <p className="text-xl text-black/90 leading-relaxed">
                Started in memory of Robert A. Hendry, we are a 501(c)(3)
                nonprofit that does not just talk about anxiety - we collaborate
                on projects that create real change.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate("/resources")}>
                Browse Educational Resources{" "}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/about")}
              >
                Read Our Story
              </Button>
            </div>

            <div className="flex items-start space-x-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <AlertCircle className="h-5 w-5 text-blue-700 mt-0.5" />
              <p className="text-sm text-blue-900 leading-relaxed">
                {LEGAL_DISCLAIMER}
              </p>
            </div>

            <div className="bg-red-50 backdrop-blur-sm rounded-lg p-4 border-b border-red-200">
              <p className="text-lg font-semibold text-red-800 mb-2">
                <strong>In Crisis?</strong>
              </p>
              <p className="text-red-700 hover:text-red-900">
                If you're in crisis, call or text 988 (U.S. Suicide & Crisis
                Lifeline), or contact your local emergency services.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/hero-image.webp"
                alt="The Robert A. Hendry Foundation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
