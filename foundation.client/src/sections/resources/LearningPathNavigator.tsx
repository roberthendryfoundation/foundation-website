import { BookOpen, Brain, Microscope, ArrowRight } from "lucide-react";
import { learningPaths } from "./resourcesContent";

interface LearningPathNavigatorProps {
  onSelectLevel: (level: string) => void;
  selectedLevel?: string;
  resourceCounts?: Record<string, number>;
}

const pathIcons = {
  beginner: BookOpen,
  intermediate: Brain,
  advanced: Microscope,
};

const pathSteps = ["01", "02", "03"];

export function LearningPathNavigator({
  onSelectLevel,
  selectedLevel,
  resourceCounts = {},
}: LearningPathNavigatorProps) {
  const handleSelect = (id: string) => {
    onSelectLevel(id);
    window.dispatchEvent(
      new CustomEvent("learningLevelFilter", { detail: id })
    );
    setTimeout(() => {
      document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <section className="hidden bg-slate-50/60 py-14 md:block">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
              Learning Path
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Choose your starting point.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Whether you're just learning about anxiety or diving into research,
              we have resources for every level.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {learningPaths.map((path, index) => {
            const Icon = pathIcons[path.id as keyof typeof pathIcons] ?? BookOpen;
            const count = resourceCounts[path.id] || 0;
            const isSelected = selectedLevel === path.id;

            return (
              <article
                key={path.id}
                className={`relative rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  isSelected
                    ? "border-[#415771] ring-2 ring-[#415771]/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-semibold tracking-[0.2em] text-[#415771]">
                    {pathSteps[index]}
                  </p>
                  {count > 0 && (
                    <span className="rounded-full bg-[#f4f7fa] px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {count}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f7fa] text-[#415771]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {path.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {path.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleSelect(path.id)}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-slate-950 transition hover:text-[#415771]"
                >
                  Explore resources
                  <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
