import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

export function AboutCTASection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl mb-6 text-white">
                    Help Us Build an Anxiety-Informed Community
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Share feedback, volunteer, or partner with us. Your input helps us grow responsibly and
                    create resources that truly help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate('/contact')}>
                        Get Involved <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigate('/contact')}>
                        <Heart className="h-4 w-4 mr-2" /> Support Our Work
                    </Button>
                </div>
            </div>
        </section>
    );
}
