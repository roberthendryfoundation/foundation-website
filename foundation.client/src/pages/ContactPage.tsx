import { ContactHeroSection } from '../sections/contact/ContactHeroSection';
import { CrisisBannerSection } from '../sections/contact/CrisisBannerSection';
import { ContactFormSection } from '../sections/contact/ContactFormSection';
import { ContactInfoSection } from '../sections/contact/ContactInfoSection';
import { OfficeHoursSection } from '../sections/contact/OfficeHoursSection';
import { LocationSection } from '../sections/contact/LocationSection';
import { QuickActionsSection } from '../sections/contact/QuickActionsSection';

export function ContactPage() {
    return (
        <div className="space-y-0">
            <ContactHeroSection />
            <CrisisBannerSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <ContactFormSection />
                    </div>
                    <div className="space-y-6">
                        <ContactInfoSection />
                        <OfficeHoursSection />
                        <LocationSection />
                        <QuickActionsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}
