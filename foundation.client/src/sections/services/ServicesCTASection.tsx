import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Calendar, Phone } from 'lucide-react';

export function ServicesCTASection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl mb-6 text-white">Want to hear when programs launch?</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Join our interest list or reach out with questions. Your feedback helps us grow responsibly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90"
                        onClick={() => navigate('/contact')}
                    >
                        <Calendar className="h-4 w-4 mr-2" /> Join Interest List
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-primary"
                    >
                        <Phone className="h-4 w-4 mr-2" /> Support Our Mission
                    </Button>
                </div>
            </div>
        </section>
    );
}
