import { SEO } from "../components/SEO";
import { AboutHeroSection } from "../sections/about/AboutHeroSection";
import { OurStorySection } from "../sections/about/OurStorySection";
import { MissionVisionSection } from "../sections/about/MissionVisionSection";
import { CuratedStoriesSection } from "../sections/about/CuratedStoriesSection";
import { WhyAnxietySection } from "../sections/about/WhyAnxietySection";
import { ValuesSection } from "../sections/about/ValuesSection";
import { RoadmapSection } from "../sections/about/RoadmapSection";
import { TeamSection } from "../sections/about/TeamSection";
import { TestimonialsSection } from "../sections/about/TestimonialsSection";
import { AccreditationsSection } from "../sections/about/AccreditationsSection";

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
      <MissionVisionSection />
      <OurStorySection />
      <CuratedStoriesSection />
      <WhyAnxietySection />
      <ValuesSection />
      <RoadmapSection />
      <TeamSection />
      <TestimonialsSection />
      <AccreditationsSection />
    </div>
  );
}
