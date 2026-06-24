import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { topicCategories, getTopicLabel } from "./resourcesContent";

interface TopicAccordionFilterProps {
  onFindResources: (topics: string[]) => void;
}

export function TopicAccordionFilter({
  onFindResources,
}: TopicAccordionFilterProps) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState(
    topicCategories[0]?.category ?? ""
  );

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("resourcesTopicBar", {
        detail: selectedTopics.length > 0,
      })
    );
    return () => {
      window.dispatchEvent(
        new CustomEvent("resourcesTopicBar", { detail: false })
      );
    };
  }, [selectedTopics.length]);

  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((t) => t !== topicId)
        : [...prev, topicId]
    );
  };

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? "" : category));
  };

  const handleFindResources = () => {
    onFindResources(selectedTopics);
    window.dispatchEvent(
      new CustomEvent("topicFilter", { detail: selectedTopics })
    );
    document.getElementById("resource-library")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="bg-slate-50 px-4 py-10 md:hidden">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          Explore Topics
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Select topics to find relevant educational resources.
        </p>

        {selectedTopics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedTopics.map((topicId) => (
              <button
                key={topicId}
                type="button"
                onClick={() => toggleTopic(topicId)}
                className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white"
              >
                {getTopicLabel(topicId)} ×
              </button>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-3">
          {topicCategories.map((category) => {
            const isOpen = openCategory === category.category;
            return (
              <div key={category.category}>
                <button
                  type="button"
                  onClick={() => toggleCategory(category.category)}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-950">
                    {category.category}
                  </span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-slate-500" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-slate-500" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-b-2xl border-x border-b border-slate-200 bg-white px-4 pb-4 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {category.topics.map((topic) => {
                        const isSelected = selectedTopics.includes(topic.id);
                        return (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => toggleTopic(topic.id)}
                            className={`rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 ${
                              isSelected
                                ? "bg-slate-950 font-semibold text-white shadow-sm"
                                : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            {topic.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedTopics.length > 0 && (
        <>
          <div className="fixed inset-x-4 bottom-4 z-50 rounded-2xl bg-slate-950 p-3 text-white shadow-2xl sm:hidden">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold">
                {selectedTopics.length} topic
                {selectedTopics.length !== 1 ? "s" : ""} selected
              </p>
              <button
                type="button"
                onClick={handleFindResources}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
              >
                Find resources →
              </button>
            </div>
          </div>
          <div className="h-20 md:hidden" aria-hidden="true" />
        </>
      )}
    </>
  );
}
