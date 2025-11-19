import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Clock } from "lucide-react";

export function OfficeHoursSection() {
  const officeHours = [
    {
      day: "Email Responses",
      hours: "Mon-Fri",
      services: "We aim to reply within 2-3 business days",
    },
    {
      day: "Crisis Support",
      hours: "24/7",
      services:
        "If you're in crisis, call or text 988 (U.S. Suicide & Crisis Lifeline).",
    },
  ];

  return (
    <Card className="border-border shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Response Times</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {officeHours.map((schedule, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-foreground">
                  {schedule.day}
                </div>
                <div className="text-sm text-muted-foreground">
                  {schedule.services}
                </div>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                {schedule.hours}
              </div>
            </div>
            {index < officeHours.length - 1 && (
              <div className="border-b border-border" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
