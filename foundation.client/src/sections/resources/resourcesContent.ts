import {
  BookOpen,
  Brain,
  Microscope,
  Phone,
  PlayCircle,
  Users,
  HelpCircle,
  ClipboardList,
  Search as SearchIcon,
  Dumbbell,
  Frown,
  Activity,
  Eye,
  Dna,
  Globe,
  BarChart3,
  Pill,
  Hospital,
  Sofa,
  FileText,
  Lightbulb,
  AlertCircle,
  MessageCircle,
  Baby,
  MessageSquare,
  Home,
  TrendingUp,
  Megaphone,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const popularSearches = [
  "panic attacks",
  "breathing exercises",
  "sleep anxiety",
  "social situations",
  "work stress",
];

export const quickResources = [
  {
    title: "Crisis Support (U.S.)",
    subtitle: "Immediate Support",
    description:
      "Call or text 988 for the Suicide & Crisis Lifeline.",
    icon: Phone,
    type: "emergency" as const,
    action: "Call or text 988",
  },
  {
    title: "Self-Assessment (External)",
    subtitle: "Screening",
    description:
      "Third-party screening tools to reflect on what you're feeling.",
    icon: Brain,
    type: "tool" as const,
    action: "Explore Tools",
    url: "https://screening.mhanational.org",
  },
  {
    title: "Breathing Exercises",
    subtitle: "Guided practice",
    description: "Short, guided videos you can try right now.",
    icon: PlayCircle,
    type: "audio" as const,
    action: "Listen",
    url: "/resources/breathing",
  },
  {
    title: "Find a Therapist (External)",
    subtitle: "Directory",
    description: "Search reputable directories for licensed providers.",
    icon: Users,
    type: "directory" as const,
    action: "Search",
    url: "https://www.psychologytoday.com/us/therapists",
  },
];

export const learningPaths = [
  {
    id: "beginner",
    label: "Start Here",
    title: "Anxiety 101",
    description: "Learn the basics of anxiety disorders.",
    topics: [
      "What is anxiety?",
      "Myths vs. facts",
      "Anxiety vs. worry",
    ],
    audience: "New learners",
    cta: "Explore resources",
  },
  {
    id: "intermediate",
    label: "Go Deeper",
    title: "Deep Understanding",
    description: "Explore symptoms, causes, and treatment options.",
    topics: ["Symptoms", "Brain science", "Treatment options"],
    audience: "Individuals, parents, educators",
    cta: "Explore resources",
  },
  {
    id: "advanced",
    label: "Research",
    title: "Research & Evidence",
    description: "Access studies, data, and clinical guidance.",
    topics: ["Latest research", "Clinical studies", "Statistics & data"],
    audience: "Researchers and healthcare professionals",
    cta: "Explore resources",
  },
];

export interface TopicItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface TopicCategory {
  category: string;
  icon: LucideIcon;
  topics: TopicItem[];
}

export const topicCategories: TopicCategory[] = [
  {
    category: "Understanding Anxiety",
    icon: BookOpen,
    topics: [
      { id: "what_is_anxiety", label: "What is Anxiety?", icon: HelpCircle },
      {
        id: "types_of_anxiety",
        label: "Types of Disorders",
        icon: ClipboardList,
      },
      { id: "myths_facts", label: "Myths vs. Facts", icon: SearchIcon },
      {
        id: "anxiety_vs_worry",
        label: "Anxiety vs. Normal Worry",
        icon: HelpCircle,
      },
    ],
  },
  {
    category: "Symptoms & Signs",
    icon: Brain,
    topics: [
      { id: "physical_symptoms", label: "Physical Symptoms", icon: Dumbbell },
      { id: "emotional_impact", label: "Emotional Impact", icon: Frown },
      { id: "behavioral_signs", label: "Behavioral Signs", icon: Activity },
      {
        id: "recognizing_anxiety",
        label: "Recognizing in Others",
        icon: Eye,
      },
    ],
  },
  {
    category: "Science & Causes",
    icon: Microscope,
    topics: [
      { id: "brain_science", label: "Brain Science", icon: Brain },
      { id: "genetic_factors", label: "Genetic Factors", icon: Dna },
      {
        id: "environmental_triggers",
        label: "Environmental Triggers",
        icon: Globe,
      },
      { id: "research_studies", label: "Research & Studies", icon: BarChart3 },
    ],
  },
  {
    category: "Treatment & Support",
    icon: Pill,
    topics: [
      { id: "treatment_overview", label: "Treatment Options", icon: Hospital },
      { id: "therapy_types", label: "Therapy Types", icon: Sofa },
      { id: "medication_info", label: "Medication Info", icon: Pill },
      { id: "self_help", label: "Self-Help Strategies", icon: FileText },
    ],
  },
  {
    category: "When to Seek Help",
    icon: Lightbulb,
    topics: [
      { id: "when_to_seek_help", label: "When to Get Help", icon: AlertCircle },
      {
        id: "finding_therapist",
        label: "Finding a Therapist",
        icon: SearchIcon,
      },
      { id: "what_to_expect", label: "What to Expect", icon: ClipboardList },
      {
        id: "talking_to_doctor",
        label: "Talking to Your Doctor",
        icon: MessageCircle,
      },
    ],
  },
  {
    category: "Supporting Others",
    icon: Users,
    topics: [
      { id: "supporting_family", label: "Supporting Family", icon: Users },
      { id: "parenting", label: "Parenting Guide", icon: Baby },
      { id: "what_not_to_say", label: "What NOT to Say", icon: MessageSquare },
      { id: "supportive_environment", label: "Creating Support", icon: Home },
    ],
  },
  {
    category: "Awareness & Advocacy",
    icon: BarChart3,
    topics: [
      { id: "statistics_data", label: "Statistics & Data", icon: TrendingUp },
      { id: "breaking_stigma", label: "Breaking the Stigma", icon: Dumbbell },
      {
        id: "awareness_campaigns",
        label: "Awareness Campaigns",
        icon: Megaphone,
      },
      { id: "sharing_educating", label: "Sharing & Educating", icon: Send },
    ],
  },
];

export const externalResources = [
  {
    title: "988 Suicide & Crisis Lifeline",
    description: "Call or text 988 for free, confidential support (U.S.).",
    url: "https://988lifeline.org",
    category: "Crisis Support",
  },
  {
    title: "Crisis Text Line",
    description: "Text HOME to 741741 for 24/7 text support (U.S.).",
    url: "https://crisistextline.org",
    category: "Crisis Support",
  },
  {
    title: "National Alliance on Mental Illness (NAMI)",
    description: "Education, support, and advocacy.",
    url: "https://nami.org",
    category: "Support Organization",
  },
  {
    title: "Anxiety & Depression Association of America",
    description: "Research-informed information on anxiety and depression.",
    url: "https://adaa.org",
    category: "Education",
  },
  {
    title: "Mental Health America",
    description: "Information and external screenings.",
    url: "https://mhanational.org",
    category: "Education",
  },
];

export function getTopicLabel(id: string): string {
  for (const category of topicCategories) {
    const topic = category.topics.find((t) => t.id === id);
    if (topic) return topic.label;
  }
  return id;
}

/** Desktop topic browser tabs — maps to topicCategories indices */
export const topicBrowserTabs = [
  {
    id: "understand",
    label: "Understand",
    categoryNames: ["Understanding Anxiety"],
  },
  {
    id: "symptoms",
    label: "Symptoms",
    categoryNames: ["Symptoms & Signs"],
  },
  {
    id: "science",
    label: "Science",
    categoryNames: ["Science & Causes"],
  },
  {
    id: "treatment",
    label: "Treatment",
    categoryNames: ["Treatment & Support"],
  },
  {
    id: "support",
    label: "Support",
    categoryNames: ["When to Seek Help", "Supporting Others"],
  },
  {
    id: "stigma",
    label: "Stigma",
    categoryNames: ["Awareness & Advocacy"],
  },
] as const;

export type TopicBrowserTabId = (typeof topicBrowserTabs)[number]["id"];

export function getTopicsForBrowserTab(tabId: string) {
  const tab = topicBrowserTabs.find((t) => t.id === tabId);
  if (!tab) return [];
  const names = tab.categoryNames as readonly string[];
  return topicCategories
    .filter((c) => names.includes(c.category))
    .flatMap((c) => c.topics);
}

export const AUDIENCE_FILTER_OPTIONS = [
  { id: "general public", label: "General public" },
  { id: "parents", label: "Parents & caregivers" },
  { id: "educators", label: "Educators" },
  { id: "healthcare professionals", label: "Healthcare professionals" },
  { id: "researchers", label: "Researchers" },
];
