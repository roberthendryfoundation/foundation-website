import {
  BookOpen,
  GraduationCap,
  Sparkles,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const exploreItems: {
  title: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { title: "Our Story", href: "/about", icon: BookOpen },
  { title: "Educational Resources", href: "/resources", icon: GraduationCap },
  { title: "Stories & Voices", href: "/stories", icon: Sparkles },
  { title: "Contact Us", href: "/contact", icon: MessageCircle },
];

export const whatWeDoSteps = [
  {
    title: "Identify gaps.",
    description:
      "We listen to communities, review research, and surface where anxiety support falls short.",
  },
  {
    title: "Collaborate with partners.",
    description:
      "We work with aligned organizations to combine expertise, resources, and reach.",
  },
  {
    title: "Complete projects.",
    description:
      "We drive work to the finish line with clear milestones and accountability.",
  },
];

export const urgencyStats = [
  {
    value: "40 Million",
    label: "Adults in the U.S. affected by anxiety annually",
  },
  {
    value: "Only 36%",
    label: "Of people with anxiety seek treatment",
  },
  {
    value: "31.9%",
    label: "Of adolescents have experienced an anxiety disorder",
  },
  {
    value: "#1",
    label: "Most common mental health condition",
  },
];

export const featuredValues = [
  {
    title: "Respect & agency",
    description:
      "People living with anxiety are the architects of their future. We provide clear, trustworthy information so they can decide on their own terms.",
    image: "/core-values/respect-agency.webp",
  },
  {
    title: "Evidence + lived experience",
    description:
      "We combine research with real-world wisdom to build resources people can trust.",
    image: "/core-values/evidence-lived-experience.webp",
  },
  {
    title: "Collaboration",
    description:
      "We work with mission-aligned partners to build and share practical educational resources.",
    image: "/core-values/collaboration.webp",
  },
] as const;

/** Editorial images used across homepage sections */
export const homeImages = {
  hero: "/hero-image.webp",
  mission: "/core-values/collaboration.webp",
  work: "/core-values/resilience.webp",
  storyFallback: "/core-values/inclusivity.webp",
  cta: "/core-values/transparency.webp",
} as const;

export const workSteps = [
  {
    title: "Identify Projects",
    description:
      "We find gaps in anxiety support by listening to communities, reviewing research, and accepting proposals from partners.",
  },
  {
    title: "Collaborate",
    description:
      "We partner with existing organizations to maximize impact, combining resources, expertise, and networks.",
  },
  {
    title: "Complete",
    description:
      "We drive projects to the finish line with clear milestones, accountability, and commitment to seeing things through.",
  },
  {
    title: "Measure Impact",
    description:
      "We track real outcomes—projects completed, people helped, and lasting change created—not just awareness raised.",
  },
];

export const resourceTabs = [
  "Featured",
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;
