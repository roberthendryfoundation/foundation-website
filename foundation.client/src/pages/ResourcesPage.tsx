import { ResourcesHeroSection } from '../sections/resources/ResourcesHeroSection';
import { QuickResourcesSection } from '../sections/resources/QuickResourcesSection';
import { BlogArticlesSection } from '../sections/resources/BlogArticlesSection';
import { DownloadablesSection } from '../sections/resources/DownloadablesSection';
import { ExternalResourcesSection } from '../sections/resources/ExternalResourcesSection';
import { ResourcesCTASection } from '../sections/resources/ResourcesCTASection';

export function ResourcesPage() {
    return (
        <div className="space-y-0">
            <ResourcesHeroSection />
            <QuickResourcesSection />
            <BlogArticlesSection />
            <DownloadablesSection />
            <ExternalResourcesSection />
            <ResourcesCTASection />
        </div>
    );
}
