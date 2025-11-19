import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Target, Lightbulb, Heart } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-border shadow-soft">
            <CardHeader className="text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                We expand access to clear, trustworthy information and practical
                tools so people can make informed choices and chart their own
                path.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardHeader className="text-center">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                A world where people facing anxiety and alcohol use challenges
                are respected, informed, and supported to thrive.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardHeader className="text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground leading-relaxed text-left space-y-2 list-disc list-inside">
                <li>
                  <strong>Empowerment:</strong> Individuals lead; we support.
                </li>
                <li>
                  <strong>Practicality:</strong> We curate what is useful.
                </li>
                <li>
                  <strong>Partnerships:</strong> We build with families,
                  communities, and institutions.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
