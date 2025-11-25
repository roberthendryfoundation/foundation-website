import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ResourcesHeroSection } from "../sections/resources/ResourcesHeroSection-Enhanced";
import { QuickResourcesSection } from "../sections/resources/QuickResourcesSection";
import { LearningPathNavigator } from "../sections/resources/LearningPathNavigator";
import { TopicExplorer } from "../sections/resources/TopicExplorer";
import { ResourceLibrarySection } from "../sections/resources/ResourcesLibrarySection";
import { ExternalResourcesSection } from "../sections/resources/ExternalResourcesSection";
import { ResourcesCTASection } from "../sections/resources/ResourcesCTASection";
import { SEO } from "../components/SEO";
import { useLearningLevelCounts } from "../hooks/useSanityData";

export function ResourcesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedLearningLevel, setSelectedLearningLevel] = useState<
    string | undefined
  >();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // ✅ ENHANCEMENT 2: Fetch resource counts for learning paths
  const { data: learningLevelCounts } = useLearningLevelCounts();

  // ✅ ENHANCEMENT 3: Load filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const levelFromUrl = params.get("level");
    const topicsFromUrl = params.get("topics");

    if (levelFromUrl) {
      setSelectedLearningLevel(levelFromUrl);
    }
    if (topicsFromUrl) {
      setSelectedTopics(topicsFromUrl.split(","));
    }
  }, []); // Only run on mount

  // Reset topics when learning level changes
  useEffect(() => {
    if (selectedLearningLevel) {
      setSelectedTopics([]);
    }
  }, [selectedLearningLevel]);

  // ✅ ENHANCEMENT 3: Update URL params when filters change (ALL filters)
  useEffect(() => {
    const params = new URLSearchParams();

    // Save all filter states to URL
    if (selectedLearningLevel) {
      params.set("level", selectedLearningLevel);
    }
    if (selectedTopics.length > 0) {
      params.set("topics", selectedTopics.join(","));
    }

    const newSearch = params.toString();
    const currentSearch = location.search.replace("?", "");

    // Only navigate if URL changed (to avoid infinite loops)
    if (newSearch !== currentSearch) {
      navigate(`?${newSearch}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLearningLevel, selectedTopics, navigate]);

  const handleLearningLevelSelect = (level: string) => {
    if (level === "all") {
      setSelectedLearningLevel(undefined);
      setSelectedTopics([]);
    } else {
      setSelectedLearningLevel(level);

      // Dispatch event to ResourceLibrarySection
      window.dispatchEvent(
        new CustomEvent("learningLevelFilter", { detail: level })
      );
    }
  };

  const handleTopicSearch = (topics: string[]) => {
    setSelectedTopics(topics);
    setSelectedLearningLevel(undefined);

    // Dispatch event to ResourceLibrarySection
    window.dispatchEvent(new CustomEvent("topicFilter", { detail: topics }));
  };

  return (
    <>
      <SEO
        title="Anxiety Education & Awareness - The Robert A. Hendry Foundation"
        description="Learn about anxiety disorders through evidence-based educational resources. Understand symptoms, causes, treatment options, and how to support others."
        keywords="anxiety education, anxiety awareness, understanding anxiety, anxiety information, mental health education, anxiety research"
        canonical="/resources"
      />
      <div className="space-y-0">
        <ResourcesHeroSection />
        <QuickResourcesSection />

        {/* ✅ EDUCATION: Learning Path Navigation */}
        <LearningPathNavigator
          onSelectLevel={handleLearningLevelSelect}
          selectedLevel={selectedLearningLevel}
          resourceCounts={learningLevelCounts}
        />

        {/* ✅ EDUCATION: Topic Explorer */}
        <TopicExplorer onFindResources={handleTopicSearch} />

        <ResourceLibrarySection
          learningLevel={selectedLearningLevel}
          topicAreas={selectedTopics}
        />
        <ExternalResourcesSection />
        <ResourcesCTASection />
      </div>
    </>
  );
}
