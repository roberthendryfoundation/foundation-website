import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { MapPin, Video, Phone, Clock } from 'lucide-react';

export function AccessOptionsSection() {
    const accessOptions = [
        {
            icon: MapPin,
            title: "Online Resource Hub",
            description: "Read articles and guides free and available anytime.",
            location: "roberthendryfoundation.org/resources"
        },
        {
            icon: Video,
            title: "Talks & Webinars (Planned)",
            description: "Short educational sessions sign up for updates.",
            location: "Join interest list via Contact"
        },
        {
            icon: Phone,
            title: "Crisis Support (External)",
            description: "For immediate help, call or text 988 in the U.S.",
            location: "24/7 nationwide"
        },
        {
            icon: Clock,
            title: "Email Response Window",
            description: "We aim to reply to general inquiries within 2-3 business days.",
            location: "Mon-Fri"
        }
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Access & Availability</h2>
                    <p className="text-xl text-muted-foreground">
                        How to use our resources and stay informed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessOptions.map((o, i) => (
                        <Card key={i} className="border-border shadow-soft text-center">
                            <CardHeader>
                                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                                    <o.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{o.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="leading-relaxed mb-3">{o.description}</CardDescription>
                                <div className="text-sm text-muted-foreground">{o.location}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
