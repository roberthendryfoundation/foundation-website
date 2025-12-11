import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Heart,
  ArrowRight,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { LEGAL_DISCLAIMER } from "../../constants";

export function HeroSection() {
  const navigate = useNavigate();
  const coreValues = [
    {
      icon: CheckCircle,
      label: "Respect & agency",
      description:
        "People living with anxiety are the architects of their future. Our role is to provide clear, trustworthy information so they can make informed decisions on their own terms.",
    },
    {
      icon: Award,
      label: "Evidence + lived experience",
      description: "We combine research with real-world wisdom.",
    },
    {
      icon: Shield,
      label: "Transparency",
      description: "We’re clear about what we do and do not do.",
    },
    {
      icon: CheckCircle,
      label: "Inclusivity & cultural humility",
      description: "We listen first and build with communities.",
    },
    {
      icon: CheckCircle,
      label: "Resilience-focused",
      description: "We amplify strengths, not just symptoms.",
    },
    {
      icon: Award,
      label: "Collaboration",
      description:
        "We collaborate with mission-aligned contributors and organizations to build and share educational resources.",
    },
  ];

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

            {/* Core Values - Mobile / Tablet */}
            <div className="lg:hidden">
              <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/10 space-y-4">
                <h3 className="text-lg font-semibold text-black">
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreValues.map(({ icon: Icon, label, description }) => (
                    <div key={label} className="flex items-start space-x-3">
                      <div className="bg-black/10 rounded-full p-2">
                        <Icon className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black">
                          {label}
                        </p>
                        <p className="text-sm text-black/80 leading-snug">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
