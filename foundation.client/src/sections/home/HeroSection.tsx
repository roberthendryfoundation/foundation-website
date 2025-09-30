import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge';
import { Heart, Phone, ArrowRight, Shield, Award, CheckCircle } from 'lucide-react';

export function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="gradient-hero text-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                                <Heart className="h-3 w-3 mr-1" />
                                The Robert A. Hendry Foundation
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl text-white">
                                Anxiety is real. It's treatable. And no one should face it alone.
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                We're here to educate, support, and prevent the silent suffering that took Robert Hendry and many others life.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate('/contact')}>
                                <Phone className="h-4 w-4 mr-2" /> Contact Us
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigate('/services')}>
                                What We Offer <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <p className="text-sm text-white/90 mb-2"><strong>In Crisis?</strong></p>
                            <p className="text-white/80">
                                If you're in crisis, call or text <a href="tel:988" className="underline font-semibold">988</a> (U.S.) for the Suicide & Crisis Lifeline,
                                or contact your local emergency services.
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="hidden lg:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6">
                            <div className="flex items-center space-x-3">
                                <Shield className="h-6 w-6 text-white" />
                                <span className="text-white">Information Only (Not Medical Advice)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Award className="h-6 w-6 text-white" />
                                <span className="text-white">Evidence Informed, Accessible Language</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-6 w-6 text-white" />
                                <span className="text-white">Links to Reputable External Resources</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
