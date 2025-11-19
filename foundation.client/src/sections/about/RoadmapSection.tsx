import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";

export function RoadmapSection() {
  const milestones = [
    {
      year: "2024",
      title: "Foundation Building",
      description:
        "Established 501(c)(3) status, launched our educational resource library, shared Robert's story, and defined our mission: to make clear, trustworthy information about anxiety easier to access.",
      status: "active",
      icon: "🏗️",
    },
    {
      year: "2024-2025",
      title: "Growing Our Resource Library",
      description:
        "Continuing to expand guides, articles, and lived-experience stories. Each resource is shaped by community input and the real needs shared with us by people affected by anxiety and alcohol use.",
      status: "active",
      icon: "📚",
    },
    {
      year: "Ongoing",
      title: "Listening & Learning From Our Community",
      description:
        "We gather insights from individuals, families, and contributors who share their experiences. Their voices help us understand where information is missing and what tools would make the biggest difference.",
      status: "active",
      icon: "🗣️",
    },
    {
      year: "Ongoing",
      title: "Identifying Opportunities for Collaboration",
      description:
        "We are in early conversations with mission-aligned organizations to explore where shared work could be helpful. Collaboration will grow as our capacity grows and as community needs guide our direction.",
      status: "active",
      icon: "🤝",
    },
    {
      year: "Long-Term",
      title: "Building for Sustainable Impact",
      description:
        "We are working toward long-term, steady growth: strengthening our resource library, expanding collaboration capacity responsibly, and staying grounded in our core values as we scale.",
      status: "future",
      icon: "🌱",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Building an action-based foundation step by step. Here's where we
            are and where we're going.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, i) => (
            <Card key={i} className="border-border shadow-soft">
              <CardHeader>
                <div className="text-3xl mb-3">{milestone.icon}</div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {milestone.year}
                </Badge>
                <CardTitle className="text-lg">{milestone.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{milestone.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
