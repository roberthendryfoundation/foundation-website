import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Target, Handshake, CheckCircle, BarChart } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Identify Projects",
      description:
        "We find gaps in anxiety support by listening to communities, reviewing research, and accepting proposals from partners.",
    },
    {
      icon: Handshake,
      title: "Collaborate",
      description:
        "We partner with existing organizations to maximize impact, combining resources, expertise, and networks to get things done.",
    },
    {
      icon: CheckCircle,
      title: "Complete",
      description:
        "We drive projects to the finish line with clear milestones, accountability, and commitment to seeing things through.",
    },
    {
      icon: BarChart,
      title: "Measure Impact",
      description:
        "We track real outcomes-projects completed, people helped, and lasting change created-not just awareness raised.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our action-based approach: identify gaps, collaborate with partners,
            complete projects, and measure real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="border-border shadow-soft hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
