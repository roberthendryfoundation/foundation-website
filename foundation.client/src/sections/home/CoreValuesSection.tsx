import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { CheckCircle, Award, Shield } from "lucide-react";

export function CoreValuesSection() {
  const coreValues = [
    {
      icon: CheckCircle,
      label: "Respect & agency",
      description:
        "People living with anxiety are the architects of their future. Our role is to provide clear, trustworthy information so they can make informed decisions on their own terms.",
      image: "/core-values/respect-agency.webp",
    },
    {
      icon: Award,
      label: "Evidence + lived experience",
      description: "We combine research with real-world wisdom.",
      image: "/core-values/evidence-lived-experience.webp",
    },
    {
      icon: Shield,
      label: "Transparency",
      description: "We're clear about what we do and do not do.",
      image: "/core-values/transparency.webp",
    },
    {
      icon: CheckCircle,
      label: "Inclusivity & cultural humility",
      description: "We listen first and build with communities.",
      image: "/core-values/inclusivity.webp",
    },
    {
      icon: CheckCircle,
      label: "Resilience-focused",
      description: "We amplify strengths, not just symptoms.",
      image: "/core-values/resilience.webp",
    },
    {
      icon: Award,
      label: "Collaboration",
      description:
        "We collaborate with mission-aligned contributors and organizations to build and share educational resources.",
      image: "/core-values/collaboration.webp",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide everything we do at The Robert A. Hendry
            Foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map(({ icon: Icon, label, description, image }) => (
            <Card
              key={label}
              className="border-border shadow-soft hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Hide image if it doesn't exist
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <CardHeader className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold">{label}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center leading-relaxed text-base">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
