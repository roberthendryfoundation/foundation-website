import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { X, Search } from "lucide-react";

interface TopicExplorerProps {
  onFindResources: (topics: string[]) => void;
}

interface Topic {
  id: string;
  label: string;
  emoji: string;
}

const topicCategories = [
  {
    category: "Understanding Anxiety",
    emoji: "📚",
    color: "from-blue-400 to-blue-500",
    topics: [
      { id: "what_is_anxiety", label: "What is Anxiety?", emoji: "❓" },
      {
        id: "types_of_anxiety",
        label: "Types of Disorders",
        emoji: "📋",
      },
      { id: "myths_facts", label: "Myths vs. Facts", emoji: "🔍" },
      {
        id: "anxiety_vs_worry",
        label: "Anxiety vs. Normal Worry",
        emoji: "🤔",
      },
    ],
  },
  {
    category: "Symptoms & Signs",
    emoji: "🧠",
    color: "from-purple-400 to-purple-500",
    topics: [
      {
        id: "physical_symptoms",
        label: "Physical Symptoms",
        emoji: "💪",
      },
      {
        id: "emotional_impact",
        label: "Emotional Impact",
        emoji: "😔",
      },
      { id: "behavioral_signs", label: "Behavioral Signs", emoji: "🏃" },
      {
        id: "recognizing_anxiety",
        label: "Recognizing in Others",
        emoji: "👀",
      },
    ],
  },
  {
    category: "Science & Causes",
    emoji: "🔬",
    color: "from-green-400 to-green-500",
    topics: [
      { id: "brain_science", label: "Brain Science", emoji: "🧬" },
      { id: "genetic_factors", label: "Genetic Factors", emoji: "🧬" },
      {
        id: "environmental_triggers",
        label: "Environmental Triggers",
        emoji: "🌍",
      },
      {
        id: "research_studies",
        label: "Research & Studies",
        emoji: "📊",
      },
    ],
  },
  {
    category: "Treatment & Support",
    emoji: "💊",
    color: "from-orange-400 to-orange-500",
    topics: [
      {
        id: "treatment_overview",
        label: "Treatment Options",
        emoji: "🏥",
      },
      { id: "therapy_types", label: "Therapy Types", emoji: "🛋️" },
      {
        id: "medication_info",
        label: "Medication Info",
        emoji: "💊",
      },
      {
        id: "self_help",
        label: "Self-Help Strategies",
        emoji: "📝",
      },
    ],
  },
  {
    category: "When to Seek Help",
    emoji: "💡",
    color: "from-yellow-400 to-yellow-500",
    topics: [
      {
        id: "when_to_seek_help",
        label: "When to Get Help",
        emoji: "🚨",
      },
      {
        id: "finding_therapist",
        label: "Finding a Therapist",
        emoji: "🔎",
      },
      {
        id: "what_to_expect",
        label: "What to Expect",
        emoji: "📋",
      },
      {
        id: "talking_to_doctor",
        label: "Talking to Your Doctor",
        emoji: "💬",
      },
    ],
  },
  {
    category: "Supporting Others",
    emoji: "🤝",
    color: "from-pink-400 to-pink-500",
    topics: [
      {
        id: "supporting_family",
        label: "Supporting Family",
        emoji: "👨‍👩‍👧",
      },
      { id: "parenting", label: "Parenting Guide", emoji: "👶" },
      { id: "what_not_to_say", label: "What NOT to Say", emoji: "🙊" },
      {
        id: "supportive_environment",
        label: "Creating Support",
        emoji: "🏠",
      },
    ],
  },
  {
    category: "Awareness & Advocacy",
    emoji: "📊",
    color: "from-red-400 to-red-500",
    topics: [
      {
        id: "statistics_data",
        label: "Statistics & Data",
        emoji: "📈",
      },
      {
        id: "breaking_stigma",
        label: "Breaking the Stigma",
        emoji: "💪",
      },
      {
        id: "awareness_campaigns",
        label: "Awareness Campaigns",
        emoji: "📢",
      },
      {
        id: "sharing_educating",
        label: "Sharing & Educating",
        emoji: "📤",
      },
    ],
  },
];

export function TopicExplorer({ onFindResources }: TopicExplorerProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((t) => t !== topicId)
        : [...prev, topicId]
    );
  };

  const clearAll = () => {
    setSelectedTopics([]);
  };

  const handleFindResources = () => {
    onFindResources(selectedTopics);
    // Scroll to results section
    const resultsSection = document.getElementById("resource-library");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getTopicLabel = (id: string): string => {
    for (const category of topicCategories) {
      const topic = category.topics.find((t) => t.id === id);
      if (topic) return topic.label;
    }
    return id;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 shadow-xl">
          <CardHeader>
            <div className="text-center">
              <CardTitle className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Explore Topics
              </CardTitle>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select topics you'd like to learn about. Choose as many as you
                want to find relevant educational resources.
              </p>
            </div>
          </CardHeader>

          <CardContent>
            {/* Selected Topics */}
            {selectedTopics.length > 0 && (
              <div className="mb-6 p-4 bg-primary/5 border-2 border-primary/20 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">
                    Selected Topics ({selectedTopics.length})
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAll}
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTopics.map((topicId) => (
                    <Badge
                      key={topicId}
                      className="bg-primary text-primary-foreground px-3 py-1 cursor-pointer group hover:bg-primary/80"
                      onClick={() => toggleTopic(topicId)}
                    >
                      {getTopicLabel(topicId)}
                      <X className="h-3 w-3 ml-1 group-hover:scale-110 transition-transform" />
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Topic Categories */}
            <div className="space-y-6">
              {topicCategories.map((category, index) => (
                <div
                  key={category.category}
                  className="p-4 bg-muted/30 rounded-xl border-2 border-border"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.5s ease-out forwards",
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`bg-gradient-to-br ${category.color} rounded-lg p-2`}
                    >
                      <span className="text-2xl">{category.emoji}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => {
                      const isSelected = selectedTopics.includes(topic.id);
                      return (
                        <Button
                          key={topic.id}
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleTopic(topic.id)}
                          className={`transition-all duration-200 ${
                            isSelected
                              ? "shadow-lg scale-105"
                              : "hover:scale-105"
                          }`}
                        >
                          <span className="mr-2">{topic.emoji}</span>
                          {topic.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Find Resources Button */}
            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={handleFindResources}
                disabled={selectedTopics.length === 0}
                className="shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Resources for Selected Topics ({selectedTopics.length})
              </Button>
              {selectedTopics.length === 0 && (
                <p className="text-sm text-muted-foreground mt-3">
                  Select at least one topic to find resources
                </p>
              )}
            </div>

            {/* Help Text */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Tip:</strong> Select multiple topics to find
                resources that cover all of them. This is great for exploring
                connections between different aspects of anxiety.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
