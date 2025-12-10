import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import {
  AlertCircle,
  Search,
  Compass,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

interface JourneyNavigatorProps {
  onSelectJourney: (stage: string) => void;
  selectedJourney?: string;
  resourceCounts?: Record<string, number>;
}

const journeyStages = [
  {
    id: "crisis",
    title: "In Crisis",
    icon: AlertCircle,
    emoji: "🆘",
    color: "from-red-500 to-red-600",
    borderColor: "border-red-200 hover:border-red-400",
    bgColor: "bg-red-50",
    description: "Immediate help and support for urgent situations",
    keywords: ["Emergency", "Urgent", "Now"],
  },
  {
    id: "discovering",
    title: "Just Discovering",
    icon: Search,
    emoji: "🔍",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200 hover:border-blue-400",
    bgColor: "bg-blue-50",
    description: "Understanding anxiety and recognizing symptoms",
    keywords: ["What is anxiety?", "Am I anxious?", "Self-assessment"],
  },
  {
    id: "learning",
    title: "Learning to Manage",
    icon: Compass,
    emoji: "🧭",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200 hover:border-purple-400",
    bgColor: "bg-purple-50",
    description: "Building foundational coping skills and techniques",
    keywords: ["Breathing", "Grounding", "Basic coping"],
  },
  {
    id: "building",
    title: "Building Strategies",
    icon: TrendingUp,
    emoji: "💪",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-200 hover:border-orange-400",
    bgColor: "bg-orange-50",
    description: "Developing long-term management strategies",
    keywords: ["CBT", "Therapy", "Advanced tools"],
  },
  {
    id: "thriving",
    title: "Thriving",
    icon: Sparkles,
    emoji: "🌟",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-200 hover:border-green-400",
    bgColor: "bg-green-50",
    description: "Maintaining wellness and preventing relapse",
    keywords: ["Maintenance", "Prevention", "Lifestyle"],
  },
];

export function JourneyNavigator({
  onSelectJourney,
  selectedJourney,
  resourceCounts = {},
}: JourneyNavigatorProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Where Are You in Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find resources tailored to your current stage. There's no right or
            wrong place to start.
          </p>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {journeyStages.map((stage, index) => {
            const Icon = stage.icon;
            const count = resourceCounts[stage.id] || 0;
            const isSelected = selectedJourney === stage.id;

            return (
              <Card
                key={stage.id}
                className={`group cursor-pointer transition-all duration-300 border-2 ${
                  isSelected
                    ? "border-primary shadow-xl scale-[1.02] ring-4 ring-primary/20"
                    : `${stage.borderColor} hover:shadow-xl hover:scale-[1.02]`
                }`}
                onClick={() => onSelectJourney(stage.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.5s ease-out forwards",
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    {/* Icon */}
                    <div
                      className={`bg-gradient-to-br ${stage.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Resource Count Badge */}
                    {count > 0 && (
                      <Badge variant="secondary" className="font-semibold">
                        {count} resources
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl">{stage.title}</CardTitle>

                  <CardDescription className="text-base leading-relaxed">
                    {stage.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {stage.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                    <span>Explore resources</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Banner */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 text-center">
          <p className="text-muted-foreground">
            <span className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <strong>Not sure where you are?</strong> It's okay! Browse all
            </span>
            resources or use our{" "}
            <button
              onClick={() => onSelectJourney("all")}
              className="text-primary hover:underline font-semibold"
            >
              symptom finder
            </button>{" "}
            to find what you need right now.
          </p>
        </div>
      </div>
    </section>
  );
}
