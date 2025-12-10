import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import {
  BookOpen,
  Brain,
  Microscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface LearningPathNavigatorProps {
  onSelectLevel: (level: string) => void;
  selectedLevel?: string;
  resourceCounts?: Record<string, number>;
}

const learningPaths = [
  {
    id: "beginner",
    title: "Anxiety 101",
    icon: BookOpen,
    emoji: "📖",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200 hover:border-blue-400",
    bgColor: "bg-blue-50",
    description: "Start here: Learn the basics of anxiety disorders",
    topics: [
      "What is anxiety?",
      "Common types",
      "Myths vs. facts",
      "Anxiety vs. worry",
    ],
    audience: "New learners, General public",
  },
  {
    id: "intermediate",
    title: "Deep Understanding",
    icon: Brain,
    emoji: "🧠",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-200 hover:border-purple-400",
    bgColor: "bg-purple-50",
    description: "Explore symptoms, causes, and treatment options in detail",
    topics: [
      "Symptoms explained",
      "Brain science",
      "Treatment options",
      "Supporting others",
    ],
    audience: "Individuals, Parents, Educators",
  },
  {
    id: "advanced",
    title: "Research & Evidence",
    icon: Microscope,
    emoji: "🔬",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-200 hover:border-green-400",
    bgColor: "bg-green-50",
    description: "Access research studies, data, and clinical guidelines",
    topics: [
      "Latest research",
      "Clinical studies",
      "Statistics & data",
      "Expert insights",
    ],
    audience: "Researchers, Healthcare professionals",
  },
];

export function LearningPathNavigator({
  onSelectLevel,
  selectedLevel,
  resourceCounts = {},
}: LearningPathNavigatorProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Educational Resources
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're just learning about anxiety or diving deep into
            research, we have resources for every level.
          </p>
        </div>

        {/* Learning Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {learningPaths.map((path, index) => {
            const Icon = path.icon;
            const count = resourceCounts[path.id] || 0;
            const isSelected = selectedLevel === path.id;

            return (
              <Card
                key={path.id}
                className={`group cursor-pointer transition-all duration-300 border-2 ${
                  isSelected
                    ? "border-primary shadow-xl scale-[1.02] ring-4 ring-primary/20"
                    : `${path.borderColor} hover:shadow-xl hover:scale-[1.02]`
                }`}
                onClick={() => onSelectLevel(path.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.5s ease-out forwards",
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    {/* Icon */}
                    <div
                      className={`bg-gradient-to-br ${path.color} rounded-xl p-3 group-hover:scale-110 transition-transform duration-300`}
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
                  <CardTitle className="text-xl">{path.title}</CardTitle>

                  <CardDescription className="text-base leading-relaxed">
                    {path.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Topics Covered */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Topics Covered:
                    </p>
                    <ul className="space-y-1">
                      {path.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Audience */}
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                      For: {path.audience}
                    </Badge>
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
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>
              <strong>Not sure where to start?</strong> Begin with{" "}
              <button
                onClick={() => onSelectLevel("beginner")}
                className="text-primary hover:underline font-semibold"
              >
                Anxiety 101
              </button>{" "}
              to build a foundation, then explore topics that interest you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
