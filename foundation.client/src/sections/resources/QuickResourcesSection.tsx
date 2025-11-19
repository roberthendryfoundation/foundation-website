import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { Phone, Brain, PlayCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickResourcesSection() {
  const quickResources = [
    {
      title: "Crisis Support (U.S.)",
      description:
        "If you're in distress, call or text 988 for the Suicide & Crisis Lifeline.",
      icon: Phone,
      type: "emergency",
      action: "Call or text 988",
    },
    {
      title: "Self-Assessment (External)",
      description:
        "Third-party screening tools to reflect on what you're feeling.",
      icon: Brain,
      type: "tool",
      action: "Explore Tools",
      url: "https://screening.mhanational.org", // external
    },
    {
      title: "Breathing Exercises",
      description: "Short, guided videos you can try right now.",
      icon: PlayCircle,
      type: "audio",
      action: "Listen",
      url: "/resources/breathing", // internal route
    },
    {
      title: "Find a Therapist (External)",
      description: "Search reputable directories for licensed providers.",
      icon: Users,
      type: "directory",
      action: "Search",
      url: "https://www.psychologytoday.com/us/therapists", // external
    },
  ];

  // helper to decide internal vs external
  const isExternal = (url?: string) =>
    !!url && (url.startsWith("http") || url.startsWith("tel:"));

  return (
    <section id="quick-access" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Quick Access Resources
          </h2>
          <p className="text-xl text-muted-foreground">
            Immediate access to essential mental health tools and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickResources.map((resource, index) => (
            <Card
              key={index}
              className={`relative border-border shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                resource.type === "emergency"
                  ? "border-destructive border-2 shadow-destructive/20"
                  : "hover:border-primary/30"
              }`}
            >
              {resource.type === "emergency" && (
                <div className="absolute inset-0 border-2 border-destructive rounded-lg animate-pulse opacity-20 pointer-events-none"></div>
              )}
              <CardHeader className="text-center">
                <div
                  className={`rounded-full p-3 w-fit mx-auto mb-4 ${
                    resource.type === "emergency"
                      ? "bg-destructive/10"
                      : "bg-primary/10"
                  }`}
                >
                  <resource.icon
                    className={`h-6 w-6 ${
                      resource.type === "emergency"
                        ? "text-destructive"
                        : "text-primary"
                    }`}
                  />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  {resource.description}
                </CardDescription>

                {resource.url ? (
                  isExternal(resource.url) ? (
                    <a
                      href={resource.url}
                      target={
                        resource.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        resource.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <Button
                        size="sm"
                        className={
                          resource.type === "emergency"
                            ? "bg-destructive hover:bg-destructive/90"
                            : ""
                        }
                      >
                        {resource.action}
                      </Button>
                    </a>
                  ) : (
                    <Link to={resource.url}>
                      <Button size="sm">{resource.action}</Button>
                    </Link>
                  )
                ) : (
                  <p className="text-sm font-semibold text-destructive">
                    {resource.action}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
