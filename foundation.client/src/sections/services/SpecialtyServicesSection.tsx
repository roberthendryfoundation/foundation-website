import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Star } from 'lucide-react';

export function SpecialtyServicesSection() {
    const specialtyServices = [
        {
            title: "Peer Discussion Spaces (Planned)",
            description: "Exploring safe, moderated, non-clinical peer groups focused on coping with anxiety.",
            specialist: "Facilitated by trained volunteers (non-clinical)"
        },
        {
            title: "Provider Office Hours (Planned)",
            description: "Short informational Q&A sessions with licensed professionals—education only, not patient care.",
            specialist: "Guest clinicians (external)"
        },
        {
            title: "Youth & Caregiver Info Sessions (Planned)",
            description: "Age-appropriate anxiety education for teens and supportive guidance for caregivers.",
            specialist: "Subject-matter speakers"
        },
        {
            title: "Workplace Learning (Planned)",
            description: "Talks on understanding anxiety at work and creating supportive environments.",
            specialist: "Community partners"
        },
        {
            title: "Resource Finder Tool (Planned)",
            description: "A simple directory to help locate reputable hotlines, clinics, and self-help materials.",
            specialist: "Tech & content volunteers"
        },
        {
            title: "Local Referral Network (Planned)",
            description: "Connecting the community with vetted providers and services (information only).",
            specialist: "Partnerships team"
        }
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">What We're Planning</h2>
                    <p className="text-xl text-muted-foreground">
                        Ideas we're exploring. Timing depends on funding, partners, and safeguards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialtyServices.map((service, index) => (
                        <Card key={index} className="border-border shadow-soft">
                            <CardHeader>
                                <div className="flex items-center space-x-2 mb-2">
                                    <Star className="h-4 w-4 text-primary" />
                                    <Badge variant="secondary" className="text-xs">Specialty</Badge>
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="leading-relaxed mb-4">{service.description}</CardDescription>
                                <div className="text-sm text-muted-foreground">
                                    <strong>Facilitation:</strong> {service.specialist}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
