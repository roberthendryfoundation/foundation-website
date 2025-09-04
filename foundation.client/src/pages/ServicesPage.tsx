import { ServicesHeroSection } from '../sections/services/ServicesHeroSection';
import { CrisisBannerSection } from '../sections/services/CrisisBannerSection';
import { PrimaryServicesSection } from '../sections/services/PrimaryServicesSection';
import { SpecialtyServicesSection } from '../sections/services/SpecialtyServicesSection';
import { InterestGroupsSection } from '../sections/services/InterestGroupsSection';
import { AccessOptionsSection } from '../sections/services/AccessOptionsSection';
import { InsurancePaymentSection } from '../sections/services/InsurancePaymentSection';
import { ServicesCTASection } from '../sections/services/ServicesCTASection';

export function ServicesPage() {
    return (
        <div className="space-y-0">
            <ServicesHeroSection />
            <CrisisBannerSection />
            <PrimaryServicesSection />
            <SpecialtyServicesSection />
            <InterestGroupsSection />
            <AccessOptionsSection />
            <InsurancePaymentSection />
            <ServicesCTASection />
        </div>
    );
}
