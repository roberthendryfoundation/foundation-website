import { useNavigate } from 'react-router-dom';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

export function ServicesHeroSection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="secondary" className="mb-6">
                        <Heart className="h-3 w-3 mr-1" />
                        Information & Future Programs
                    </Badge>
                    <h1 className="text-4xl lg:text-6xl mb-6 text-foreground">
                        What We Offer (Right Now & What's Next)
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        We're an early-stage nonprofit focused on anxiety awareness. We do <strong>not</strong> provide
                        counseling, diagnosis, or a hotline. Today, we offer education and resource navigation, while
                        carefully planning programs for the future.
                    </p>
                    <Button size="lg" onClick={() => navigate('/contact')}>
                        Join the Interest List <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
