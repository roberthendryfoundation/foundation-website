import { HeroSection } from '../sections/home/HeroSection';
import { StatsSection } from '../sections/home/StatsSection';  
import { FeaturesSection } from '../sections/home/FeaturesSection';
import { NewsSection } from '../sections/home/NewsSection';
import { TestimonialsSection } from '../sections/home/TestimonialsSection';
import { CTASection } from '../sections/home/CTASection';



export function HomePage() {
    return (
        <div className="space-y-0">
            <HeroSection />
            <StatsSection />
            <FeaturesSection />  
            <NewsSection />
            <TestimonialsSection />
            <CTASection />

        </div>);
}

