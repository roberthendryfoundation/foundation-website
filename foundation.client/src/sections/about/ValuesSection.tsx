import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Zap, Users, Handshake, Shield } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Resilience",
      description: "We get things done and keep going.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "We recognize that anxiety affects everyone.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We build with partners, families, and communities.",
    },
    {
      icon: Zap,
      title: "Action-Focused",
      description: "We make change happen through real projects.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These four principles guide everything we do—from building resources
            today to completing projects tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Card key={i} className="border-border shadow-soft text-center">
              <CardHeader>
                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{v.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
