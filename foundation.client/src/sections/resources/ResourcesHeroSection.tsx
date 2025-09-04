import { Badge } from '../../components/ui/badge';
import { BookOpen } from 'lucide-react';

export function ResourcesHeroSection() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="secondary" className="mb-6">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Anxiety Resources
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
                        Education &amp; Support Resources
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Clear, compassionate information about anxiety, plus links to reputable third party tools and hotlines.
                        We don't provide counseling, diagnosis, or a proprietary crisis line.
                    </p>
                </div>
            </div>
        </section>
    );
}
