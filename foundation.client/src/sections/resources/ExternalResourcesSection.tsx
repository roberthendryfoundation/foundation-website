import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Globe, ExternalLink } from "lucide-react";

export function ExternalResourcesSection() {
  const externalResources = [
    {
      title: "988 Suicide & Crisis Lifeline",
      description: "Call or text 988 for free, confidential support (U.S.).",
      url: "https://988lifeline.org",
      category: "Crisis Support",
    },
    {
      title: "Crisis Text Line",
      description: "Text HOME to 741741 for 24/7 text support (U.S.).",
      url: "https://crisistextline.org",
      category: "Crisis Support",
    },
    {
      title: "National Alliance on Mental Illness (NAMI)",
      description: "Education, support, and advocacy.",
      url: "https://nami.org",
      category: "Support Organization",
    },
    {
      title: "Anxiety & Depression Association of America",
      description: "Research-informed information on anxiety and depression.",
      url: "https://adaa.org",
      category: "Education",
    },
    {
      title: "Mental Health America",
      description: "Information and external screenings.",
      url: "https://mhanational.org",
      category: "Education",
    },
  ];

  return (
    <section id="external" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            External Resources
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted organizations and websites for additional mental health
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {externalResources.map((resource, index) => (
            <Card key={index} className="border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {resource.description}
                    </p>

                    {/* clickable link */}
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {resource.url.replace(/^https?:\/\//, "")}
                    </a>
                  </div>

                  {/* make Visit button link out */}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Visit
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
