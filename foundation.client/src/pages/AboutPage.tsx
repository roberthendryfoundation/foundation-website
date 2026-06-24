import { SEO } from "../components/SEO";
import { AboutHeroSection } from "../sections/about/AboutHeroSection";
import { FounderStorySection } from "../sections/about/FounderStorySection";
import { HowWeWorkSection } from "../sections/about/HowWeWorkSection";
import { AnxietyCredibilityBand } from "../sections/about/AnxietyCredibilityBand";
import { AboutJourneyTimeline } from "../sections/about/AboutJourneyTimeline";
import { LeadershipSection } from "../sections/about/LeadershipSection";
import { ResponsibleDesignAccordion } from "../sections/about/ResponsibleDesignAccordion";
import { AboutSupportNote } from "../sections/about/AboutSupportNote";
import { AboutFinalCTA } from "../sections/about/AboutFinalCTA";

export function AboutPage() {
  return (
    <div className="space-y-0">
      <SEO
        title="About Us - The Robert A. Hendry Foundation"
        description="Learn about The Robert A. Hendry Foundation, a 501(c)(3) nonprofit founded by Andrew Hendry in memory of his son Robert. We identify, collaborate on, and complete projects to help people with anxiety through action-based change."
        keywords="about us, Robert Hendry, Andrew Hendry, anxiety nonprofit, action-based foundation, mental health nonprofit, nonprofit mission, anxiety projects, Robert's story"
        canonical="/about"
      />
      <AboutHeroSection />
      <FounderStorySection />
      <HowWeWorkSection />
      <AnxietyCredibilityBand />
      <AboutJourneyTimeline />
      <LeadershipSection />
      <ResponsibleDesignAccordion />
      <AboutSupportNote />
      <AboutFinalCTA />
    </div>
  );
}
