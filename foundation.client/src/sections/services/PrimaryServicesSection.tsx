import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { CheckCircle, Heart, Users, Video, Clock } from 'lucide-react';

export function PrimaryServicesSection() {
    const navigate = useNavigate();

    const primaryServices = [
        {
            icon: Heart,
            title: "Anxiety Education",
            description: "Clear, evidence-informed information about anxiety: common signs, coping skills, and how to seek qualified care.",
            features: ["Plain-language guides", "Curated external links", "Downloadable handouts", "Inclusive, stigma-reducing tone"],
            price: "Free",
            availability: "Available online"
        },
        {
            icon: Users,
            title: "Resource Navigation (Non-Clinical)",
            description: "Point you in the right direction via email: how to find licensed providers, hotlines, and low-cost options.",
            features: ["Provider-finding tips", "Financial aid links", "Crisis resources", "Local & national directories"],
            price: "Free",
            availability: "Mon-Fri (email response)"
        },
        {
            icon: Video,
            title: "Learning Events (Planning)",
            description: "As capacity allows, we'll host short educational talks/webinars led by qualified speakers. Not therapy.",
            features: ["Short talks", "Q&A time", "Best-practice content", "Recorded summaries when possible"],
            price: "Free or low-cost",
            availability: "TBD (join interest list)"
        },
        {
            icon: Clock,
            title: "Newsletter & Updates",
            description: "Periodic updates with practical tips, new pages, and community announcements. No spam, no diagnosis.",
            features: ["Actionable tips", "New resource highlights", "Event announcements", "Unsubscribe anytime"],
            price: "Free",
            availability: "Monthly (approx.)"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">What;s Available Now</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Non-clinical offerings that help you understand anxiety and find reputable support.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {primaryServices.map((service, index) => (
                        <Card key={index} className="border-border shadow-soft">
                            <CardHeader>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 rounded-full p-3">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                                        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium mb-2 text-foreground">Features:</h4>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                    <CheckCircle className="h-3 w-3 text-success" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-border">
                                        <div className="text-sm">
                                            <div className="text-muted-foreground">Cost: <span className="text-foreground font-medium">{service.price}</span></div>
                                            <div className="text-muted-foreground">Available: <span className="text-foreground">{service.availability}</span></div>
                                        </div>
                                        <Button variant="outline" size="sm" onClick={() => navigate('/contact')}>
                                            Ask a Question
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
