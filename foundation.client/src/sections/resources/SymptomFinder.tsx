import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  X,
  Search,
  Heart,
  Wind,
  CircleDot,
  Dumbbell,
  Gauge,
  Thermometer,
  Activity,
  Brain,
  Zap,
  HelpCircle,
  Cloud,
  AlertTriangle,
  Frown,
  AlertCircle,
  Meh,
  Ban,
  Moon,
  UtensilsCrossed,
  Home,
  Clock,
  Lightbulb,
} from "lucide-react";

interface SymptomFinderProps {
  onFindResources: (symptoms: string[]) => void;
}

const symptomCategories = [
  {
    category: "Physical Symptoms",
    icon: Activity,
    color: "from-red-400 to-red-500",
    symptoms: [
      { id: "racing_heart", label: "Racing Heart", icon: Heart },
      { id: "breathing_difficulty", label: "Shortness of Breath", icon: Wind },
      { id: "nausea", label: "Nausea / Upset Stomach", icon: CircleDot },
      { id: "muscle_tension", label: "Muscle Tension", icon: Dumbbell },
      { id: "dizziness", label: "Dizziness", icon: Gauge },
      { id: "sweating", label: "Sweating / Hot Flashes", icon: Thermometer },
      { id: "chest_pain", label: "Chest Pain / Tightness", icon: Activity },
    ],
  },
  {
    category: "Mental Symptoms",
    icon: Brain,
    color: "from-purple-400 to-purple-500",
    symptoms: [
      { id: "racing_thoughts", label: "Racing Thoughts", icon: Zap },
      { id: "concentration", label: "Can't Concentrate", icon: HelpCircle },
      { id: "intrusive_thoughts", label: "Intrusive Thoughts", icon: Brain },
      { id: "brain_fog", label: "Brain Fog", icon: Cloud },
      { id: "overwhelmed", label: "Feeling Overwhelmed", icon: AlertCircle },
      {
        id: "catastrophizing",
        label: "Catastrophic Thinking",
        icon: AlertTriangle,
      },
    ],
  },
  {
    category: "Emotional Symptoms",
    icon: Frown,
    color: "from-blue-400 to-blue-500",
    symptoms: [
      { id: "fear", label: "Feeling Scared / Fearful", icon: AlertCircle },
      { id: "sadness", label: "Feeling Sad", icon: Frown },
      {
        id: "irritability",
        label: "Irritability / Anger",
        icon: AlertTriangle,
      },
      { id: "numbness", label: "Feeling Numb", icon: Meh },
      { id: "guilt", label: "Guilt / Shame", icon: Frown },
      { id: "restlessness", label: "Restlessness", icon: Zap },
    ],
  },
  {
    category: "Behavioral Symptoms",
    icon: Activity,
    color: "from-orange-400 to-orange-500",
    symptoms: [
      { id: "avoidance", label: "Avoidance Behaviors", icon: Ban },
      { id: "sleep_issues", label: "Can't Sleep / Insomnia", icon: Moon },
      { id: "appetite", label: "Appetite Changes", icon: UtensilsCrossed },
      { id: "withdrawal", label: "Social Withdrawal", icon: Home },
      { id: "procrastination", label: "Procrastination", icon: Clock },
    ],
  },
];

export function SymptomFinder({ onFindResources }: SymptomFinderProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((s) => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const clearAll = () => {
    setSelectedSymptoms([]);
  };

  const handleFindResources = () => {
    onFindResources(selectedSymptoms);
    // Scroll to results section
    const resultsSection = document.getElementById("resource-library");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getSymptomLabel = (id: string): string => {
    for (const category of symptomCategories) {
      const symptom = category.symptoms.find((s) => s.id === id);
      if (symptom) return symptom.label;
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
                What Are You Experiencing?
              </CardTitle>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select any symptoms you're feeling to find resources that can
                help you right now.
              </p>
            </div>
          </CardHeader>

          <CardContent>
            {/* Selected Symptoms */}
            {selectedSymptoms.length > 0 && (
              <div className="mb-6 p-4 bg-primary/5 border-2 border-primary/20 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">
                    Selected Symptoms ({selectedSymptoms.length})
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
                  {selectedSymptoms.map((symptomId) => (
                    <Badge
                      key={symptomId}
                      className="bg-primary text-primary-foreground px-3 py-1 cursor-pointer group hover:bg-primary/80"
                      onClick={() => toggleSymptom(symptomId)}
                    >
                      {getSymptomLabel(symptomId)}
                      <X className="h-3 w-3 ml-1 group-hover:scale-110 transition-transform" />
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Symptom Categories */}
            <div className="space-y-6">
              {symptomCategories.map((category, index) => (
                <div
                  key={category.category}
                  className="p-4 bg-muted/30 rounded-xl border-2 border-border"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isExpanded
                      ? "fadeInUp 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`bg-gradient-to-br ${category.color} rounded-lg p-2`}
                    >
                      {(() => {
                        const CategoryIcon = category.icon;
                        return <CategoryIcon className="h-6 w-6 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  {/* Symptoms */}
                  <div className="flex flex-wrap gap-2">
                    {category.symptoms.map((symptom) => {
                      const isSelected = selectedSymptoms.includes(symptom.id);
                      const SymptomIcon = symptom.icon;
                      return (
                        <Button
                          key={symptom.id}
                          variant={isSelected ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleSymptom(symptom.id)}
                          className={`transition-all duration-200 ${
                            isSelected
                              ? "shadow-lg scale-105"
                              : "hover:scale-105"
                          }`}
                        >
                          <SymptomIcon className="h-4 w-4 mr-2" />
                          {symptom.label}
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
                disabled={selectedSymptoms.length === 0}
                className="shadow-xl hover:shadow-2xl transition-all duration-300 px-8"
              >
                <Search className="h-5 w-5 mr-2" />
                Find Resources for My Symptoms ({selectedSymptoms.length})
              </Button>
              {selectedSymptoms.length === 0 && (
                <p className="text-sm text-muted-foreground mt-3">
                  Select at least one symptom to find resources
                </p>
              )}
            </div>

            {/* Help Text */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Lightbulb className="h-4 w-4" />
                <span>
                  <strong>Tip:</strong> You can select multiple symptoms to find
                  resources that address all of them. Don't worry about being
                  exact—we'll show you everything that might help.
                </span>
              </p>
            </div>

            {/* Expand Toggle */}
            {!isExpanded && (
              <div className="mt-4 text-center">
                <Button variant="ghost" onClick={() => setIsExpanded(true)}>
                  Show All Symptom Categories
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
