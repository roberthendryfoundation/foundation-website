import { HeroSection } from '../sections/home/HeroSection';
import { StatsSection } from '../sections/home/StatsSection';  
import { FeaturesSection } from '../sections/home/FeaturesSection';
/*import { NewsSection } from '../sections/home/NewsSection';*/
import { TestimonialsSection } from '../sections/home/TestimonialsSection';
import { CTASection } from '../sections/home/CTASection';
import { ResourceLibrarySection } from '../sections/resources/ResourcesLibrarySection';



export function HomePage() {
    return (
        <div className="space-y-0">
            <HeroSection />
            <StatsSection />
            <FeaturesSection />  
           {/* <NewsSection />*/}
            <ResourceLibrarySection
                categoryFilter="Latest News"
                limit={4}
                title="Latest News"
                description="Short reads and links we find helpful-focused on anxiety awareness and support."
                showFeatured={false}
            />
            <TestimonialsSection />
            <CTASection />

        </div>);
}

