import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ResourcesCTASection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl mb-6 text-white">
                    Have Questions About These Resources?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    We're an information-only nonprofit. We can't offer counseling, but we can help you navigate options
                    and point to reputable hotlines and providers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary"
                        onClick={() => navigate('/services')}
                    >
                        What We Offer
                    </Button>
                </div>
                <p className="mt-6 text-xs text-white/80">
                    Information on this page is educational and not a substitute for professional care.
                    If you're in crisis, call or text 988 (U.S.).
                </p>
            </div>
        </section>
    );
}
