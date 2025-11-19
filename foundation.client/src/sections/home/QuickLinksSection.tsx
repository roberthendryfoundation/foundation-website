import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  {
    title: "Our Story",
    description: "Meet the team behind The Robert A. Hendry Foundation.",
    to: "/about",
    icon: BookOpen,
  },
  {
    title: "Educational Resources",
    description:
      "Browse curated guides, videos, and tools for anxiety support.",
    to: "/resources",
    icon: GraduationCap,
  },
  {
    title: "Stories & Voices",
    description:
      "Read curated stories and community perspectives shaping our work.",
    to: "/stories",
    icon: Sparkles,
  },
  {
    title: "Contact Us",
    description: "Share a project idea or connect with our team.",
    to: "/contact",
    icon: MessageCircle,
  },
];

export function QuickLinksSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map(({ title, description, to, icon: Icon }) => (
            <Link
              key={title}
              to={to}
              className="group border border-border rounded-xl p-6 bg-muted/20 hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 rounded-full p-2">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
