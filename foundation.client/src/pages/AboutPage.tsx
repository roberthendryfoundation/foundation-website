import { AboutHeroSection } from '../sections/about/AboutHeroSection';
import { MissionVisionSection } from '../sections/about/MissionVisionSection';
import { ValuesSection } from '../sections/about/ValuesSection';
import { RoadmapSection } from '../sections/about/RoadmapSection';
import { TeamSection } from '../sections/about/TeamSection';
import { AccreditationsSection } from '../sections/about/AccreditationsSection';
import { AboutCTASection } from '../sections/about/AboutCTASection';

export function AboutPage() {
    return (
        <div className="space-y-0">
            <AboutHeroSection />
            <MissionVisionSection />
            <ValuesSection />
            <RoadmapSection />
            <TeamSection />
            <AccreditationsSection />
            <AboutCTASection />
        </div>
    );
}
