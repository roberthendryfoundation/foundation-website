import { useNavigate } from 'react-router-dom';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

export function AboutHeroSection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="secondary" className="mb-6">
                        <Heart className="h-3 w-3 mr-1" />
                        About The Robert A. Henry Foundation
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
                        Clear, Compassionate Information About Anxiety
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        Andrew Hendry founded this organization after losing his son Robert to a tragic combination of untreated anxiety and alcoholism. Robert was 33. He was brilliant, kind, and deeply loved but he felt he had to hide his pain. This foundation exists so others don’t have to.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" onClick={() => navigate('/services')}>
                            What We’re Building <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
