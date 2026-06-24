import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { learningPaths } from "./resourcesContent";

interface LearningPathTabsProps {
  onSelectLevel: (level: string) => void;
  selectedLevel?: string;
  resourceCounts?: Record<string, number>;
}

export function LearningPathTabs({
  onSelectLevel,
  selectedLevel,
  resourceCounts = {},
}: LearningPathTabsProps) {
  const [activeTab, setActiveTab] = useState(
    selectedLevel && learningPaths.some((p) => p.id === selectedLevel)
      ? selectedLevel
      : "beginner"
  );

  const activePath =
    learningPaths.find((p) => p.id === activeTab) ?? learningPaths[0];
  const count = resourceCounts[activePath.id] || 0;

  const handleTabSelect = (id: string) => {
    setActiveTab(id);
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
    <section className="bg-white px-4 py-10 md:hidden">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        02 / Learning Path
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
        Choose Your Learning Path
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Whether you're just learning about anxiety or diving into research, we
        have resources for every level.
      </p>

      <div className="mt-5 grid grid-cols-3 rounded-2xl bg-slate-100 p-1">
        {learningPaths.map((path) => {
          const isActive = activeTab === path.id;
          return (
            <button
              key={path.id}
              type="button"
              onClick={() => handleTabSelect(path.id)}
              className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-600"
              }`}
            >
              {path.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold leading-snug text-slate-950">
              {activePath.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {activePath.description}
            </p>
          </div>
          {count > 0 && (
            <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
              {count}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {activePath.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              {topic}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs text-slate-500">
          For: {activePath.audience}
        </p>

        <button
          type="button"
          onClick={() => handleTabSelect(activePath.id)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-950"
        >
          {activePath.cta}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        New here? Start with{" "}
        <button
          type="button"
          onClick={() => handleTabSelect("beginner")}
          className="font-semibold text-slate-950 underline-offset-2 hover:underline"
        >
          Anxiety 101
        </button>
        , then explore topics that interest you.
      </div>
    </section>
  );
}
