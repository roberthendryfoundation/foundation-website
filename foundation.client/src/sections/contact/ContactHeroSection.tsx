import { Badge } from '../../components/ui/badge';
import { Heart } from 'lucide-react';

export function ContactHeroSection() {
    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="secondary" className="mb-6">
                        <Heart className="h-3 w-3 mr-1" />
                        Contact Us
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
                        We're here to listen and guide
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        We're an informational nonprofit focused on anxiety awareness. While we don't provide counseling or urgent support,
                        we can point you to reputable resources and keep you updated as our programs grow.
                    </p>
                </div>
            </div>
        </section>
    );
}
