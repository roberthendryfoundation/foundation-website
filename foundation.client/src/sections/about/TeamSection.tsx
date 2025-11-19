import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import { Users } from "lucide-react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Andrew Hendry",
      role: "Father & Advocate",
      credentials: "Building change in Robert's memory",
      specialty:
        "Founded The Robert A. Hendry Foundation in 2024 after losing his son Robert to unsuccessfully treated anxiety and alcohol use. Andrew is committed to creating real change through action, collaboration, and project-based impact.",
    },
    {
      name: "Anthony Reeder",
      role: "Executive Director",
      credentials: "Leading operations and strategy",
      specialty:
        "Runs the foundation's day-to-day operations, oversees program development, manages partnerships, and ensures the mission translates into real-world impact.",
    },
    {
      name: "Volunteer Network",
      role: "Content & Operations",
      credentials: "Passionate advocates and supporters",
      specialty:
        "Helping curate educational resources, share the foundation's mission, and build community connections as we grow.",
      hidden: true,
    },
    {
      name: "Advisory Board",
      role: "Strategic Guidance (Forming)",
      credentials: "Subject-matter experts and community leaders",
      specialty:
        "Advisory board seats are being established for 2025 to provide high-level guidance on partnerships, projects, and best practices.",
      hidden: true,
    },
    {
      name: "Future Team Members",
      role: "Growing with Purpose",
      credentials: "Open to passionate individuals",
      specialty:
        "We're growing our team to include project coordinators, partnership managers, and community outreach specialists. Interested? Contact us.",
      hidden: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            The Team Making It Happen
          </h2>
          <p className="text-xl text-muted-foreground">
            A growing team dedicated to turning tragedy into action and building
            real change for people with anxiety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers
            .filter((member) => !member.hidden)
            .map((m, i) => (
              <Card key={i} className="border-border shadow-soft">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{m.name}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary mb-2">
                        {m.role}
                      </CardDescription>
                      <Badge variant="secondary" className="text-xs">
                        {m.credentials}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Specialty:</strong> {m.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
