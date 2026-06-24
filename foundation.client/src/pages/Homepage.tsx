import { HeroSection } from "../sections/home/HeroSection";
import { HomeExploreRail } from "../sections/home/HomeExploreRail";
import { WhatWeDoSection } from "../sections/home/WhatWeDoSection";
import { StatsSection } from "../sections/home/StatsSection";
import { CoreValuesPreview } from "../sections/home/CoreValuesPreview";
import { StoriesFeatureSection } from "../sections/home/StoriesFeatureSection";
import { HowWeWorkSection } from "../sections/home/HowWeWorkSection";
import { ResourcesPreviewSection } from "../sections/home/ResourcesPreviewSection";
import { LatestNewsSection } from "../sections/home/LatestNewsSection";
import { CTASection } from "../sections/home/CTASection";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO
        title="Home - The Robert A. Hendry Foundation | Action-Based Anxiety Nonprofit"
        description="A 501(c)(3) nonprofit that identifies needs, collaborates on projects, and completes solutions for people with anxiety. Founded in memory of Robert A. Hendry. We actively share educational resources."
        keywords="anxiety nonprofit, anxiety foundation, Robert Hendry, anxiety projects, mental health nonprofit, action-based foundation"
        canonical="/"
      />
      <div className="space-y-0">
        <HeroSection />
        <HomeExploreRail />
        <WhatWeDoSection />
        <StatsSection />
        <CoreValuesPreview />
        <StoriesFeatureSection />
        <HowWeWorkSection />
        <ResourcesPreviewSection />
        <LatestNewsSection />
        <CTASection />
      </div>
    </>
  );
}
