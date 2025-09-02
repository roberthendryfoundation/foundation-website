import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Phone, Heart } from 'lucide-react';

export function CTASection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl mb-6 text-white">Help Us Grow Responsibly</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Your support helps us create accessible resources and plan future programs with care.
                    We’re information-first and community-driven.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate('/contact')}>
                        <Phone className="h-4 w-4 mr-2" /> Ask a Question
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigate('/donate')}>
                        <Heart className="h-4 w-4 mr-2" /> Support Our Mission
                    </Button>
                </div>
                <p className="mt-6 text-xs text-white/80">
                    This website is for informational purposes only and does not provide medical advice, diagnosis, or treatment.
                </p>
            </div>
        </section>
    );
}
