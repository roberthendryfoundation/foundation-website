import { HeroSection } from "../sections/home/HeroSection";
import { QuickLinksSection } from "../sections/home/QuickLinksSection";
import { StoriesTeaserSection } from "../sections/home/StoriesTeaserSection";
import { StatsSection } from "../sections/home/StatsSection";
import { FeaturesSection } from "../sections/home/FeaturesSection";
import { CTASection } from "../sections/home/CTASection";
import { FeaturedResourcesWidget } from "../sections/home/FeaturedResourcesWidget";
import { LatestResourcesSection } from "../sections/home/LatestResourcesSection";
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
        <QuickLinksSection />
        <StoriesTeaserSection />
        <StatsSection />
        <FeaturesSection />

        {/* ✅ Featured Educational Resources (manually curated) */}
        <FeaturedResourcesWidget />

        {/* ✅ Latest News (automatically pulls from News & Updates category) */}
        <LatestResourcesSection
          limit={3}
          categorySlugs={["news-updates"]}
          title="Latest News"
          description="Stay updated with our newest announcements and anxiety research news."
          viewAllText="View All News"
          viewAllLink={`/resources?categories=${encodeURIComponent(
            "News & Updates"
          )}`}
        />

        {/* Testimonials coming when we have real ones */}
        <CTASection />
      </div>
    </>
  );
}
