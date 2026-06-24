import { useState } from "react";
import { Search, X } from "lucide-react";
import {
  topicBrowserTabs,
  getTopicsForBrowserTab,
  getTopicLabel,
  type TopicBrowserTabId,
} from "./resourcesContent";

interface TopicBrowserTabsProps {
  onFindResources: (topics: string[]) => void;
}

export function TopicBrowserTabs({ onFindResources }: TopicBrowserTabsProps) {
  const [activeTab, setActiveTab] = useState<TopicBrowserTabId>(
    topicBrowserTabs[0].id
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const activeTopics = getTopicsForBrowserTab(activeTab);

  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((t) => t !== topicId)
        : [...prev, topicId]
    );
  };

  const clearAll = () => setSelectedTopics([]);

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
    <section id="topic-browser" className="hidden bg-white py-14 md:block">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
          <div className="rounded-3xl bg-white p-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
                Explore Topics
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Find resources by topic
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Select topics you'd like to learn about, then browse matching
                educational resources.
              </p>
            </div>

            <div className="scrollbar-none mt-6 overflow-x-auto">
              <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
                {topicBrowserTabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-slate-950 text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeTopics.map((topic) => {
                const isSelected = selectedTopics.includes(topic.id);
                const TopicIcon = topic.icon;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => toggleTopic(topic.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      isSelected
                        ? "border border-[#415771] bg-[#415771] font-semibold text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-[#415771] hover:bg-[#f4f7fa]"
                    }`}
                  >
                    <TopicIcon className="h-3.5 w-3.5" />
                    {topic.label}
                  </button>
                );
              })}
            </div>

            {selectedTopics.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-[#f4f7fa]/60 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-950">
                    {selectedTopics.length} topic
                    {selectedTopics.length !== 1 ? "s" : ""} selected
                  </p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                  >
                    Clear all
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedTopics.map((topicId) => (
                    <button
                      key={topicId}
                      type="button"
                      onClick={() => toggleTopic(topicId)}
                      className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                    >
                      {getTopicLabel(topicId)}
                      <X className="h-3 w-3" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleFindResources}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#415771]"
                >
                  <Search className="h-4 w-4" />
                  Find Resources for Selected Topics
                </button>
              </div>
            )}

            {selectedTopics.length === 0 && (
              <p className="mt-4 text-sm text-slate-500">
                Select one or more topics to filter the resource library below.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
