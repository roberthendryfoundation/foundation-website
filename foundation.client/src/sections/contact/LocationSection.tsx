import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { MapPin } from "lucide-react";

export function LocationSection() {
  return (
    <Card className="border-border shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Our Location</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="font-medium text-foreground">
              The Robert A. Hendry Foundation
            </div>
            <div className="text-muted-foreground">
              We operate as a virtual 501(c)(3) nonprofit. Our work focuses on
              building accessible educational resources and connecting with
              community members and partners who share our mission.
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>For all inquiries, please use the contact form.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
