import {
  CheckCircle,
  Shield,
  Lock,
  FileText,
  AlertCircle,
  BarChart,
  Eye,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";

export function AccreditationsSection() {
  const accreditations = [
    {
      icon: FileText,
      title: "Informational Use Only",
      description:
        "This site does not provide medical advice, diagnosis, or treatment.",
    },
    {
      icon: Lock,
      title: "Privacy-First Practices",
      description:
        "We collect minimal information and handle inquiries with care. See our Privacy Policy.",
    },
    {
      icon: CheckCircle,
      title: "Ethical Content",
      description:
        "We link to reputable sources and avoid unverifiable claims or statistics.",
    },
    {
      icon: AlertCircle,
      title: "Crisis Navigation",
      description:
        "We prominently direct visitors to national and local crisis resources, e.g., 988 in the U.S.",
    },
    {
      icon: BarChart,
      title: "Transparency",
      description: "We publish updates about programs and funding as we grow.",
    },
    {
      icon: Eye,
      title: "Accessibility",
      description:
        "We strive to make our content clear, readable, and usable for all visitors.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Our Commitments &amp; Policies
          </h2>
          <p className="text-xl text-muted-foreground">
            How we keep information responsible, respectful, and useful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {accreditations.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="border-border shadow-soft hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg pt-2">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/20 bg-primary/5 shadow-soft">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Responsible Use &amp; Privacy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  This website is for informational purposes only and is not a
                  substitute for professional medical advice, diagnosis, or
                  treatment. If you are in crisis or considering self-harm, call
                  or text <strong>988</strong> in the U.S. or visit your nearest
                  emergency department. We do not provide clinical services or
                  store medical records. Any messages you send are handled
                  according to our Privacy Policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
