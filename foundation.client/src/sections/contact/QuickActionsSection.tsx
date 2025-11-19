import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, MessageCircle, Heart } from "lucide-react";

export function QuickActionsSection() {
  const navigate = useNavigate();

  return (
    <Card className="border-border shadow-soft">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          onClick={() => navigate("/resources")}
          variant="outline"
          className="w-full justify-start"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Learn about Anxiety
        </Button>
        <Button
          onClick={() => navigate("/stories")}
          variant="outline"
          className="w-full justify-start"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Read Stories
        </Button>
        <Button
          onClick={() => navigate("/about")}
          variant="outline"
          className="w-full justify-start"
        >
          <Heart className="h-4 w-4 mr-2" />
          Support Our Mission
        </Button>
      </CardContent>
    </Card>
  );
}
