import { SEO } from "../components/SEO";
import { ContactHeroSection } from "../sections/contact/ContactHeroSection";
import { CrisisBannerSection } from "../sections/contact/CrisisBannerSection";
import { ContactFormSection } from "../sections/contact/ContactFormSection";
import { ContactInfoSection } from "../sections/contact/ContactInfoSection";
import { OfficeHoursSection } from "../sections/contact/OfficeHoursSection";
import { LocationSection } from "../sections/contact/LocationSection";
import { QuickActionsSection } from "../sections/contact/QuickActionsSection";

export function ContactPage() {
  return (
    <div className="space-y-0">
      <SEO
        title="Contact Us - The Robert A. Hendry Foundation"
        description="Get in touch with The Robert A. Hendry Foundation. Share project ideas, explore partnerships, or ask questions about our action-based approach to anxiety support."
        keywords="contact, get in touch, partnership, project proposal, anxiety nonprofit contact, collaborate"
        canonical="/contact"
      />
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
