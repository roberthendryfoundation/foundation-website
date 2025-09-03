import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

export function RoadmapSection() {
    const milestones = [
        { year: "Current", title: "Informational Launch", description: "We focus on education about anxiety—what it is, common signs, and how to seek qualified help." },
        { year: "Next", title: "Community Listening", description: "We’ll gather feedback from individuals and partners to understand local needs and gaps." },
        { year: "Planned", title: "Resource Directory", description: "We aim to curate a simple, reputable list of external hotlines, clinics, and self-help materials." },
        { year: "Future", title: "Workshops & Events", description: "Subject to capacity and partnerships, we hope to host educational sessions led by qualified speakers." },
        { year: "Future", title: "Supportive Programs", description: "As we grow, we’ll explore safe, non-clinical peer spaces and referrals to licensed care." },
        { year: "Ongoing", title: "Responsible Growth", description: "We will expand only when we can do so ethically, sustainably, and with appropriate safeguards." },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Our Roadmap</h2>
                    <p className="text-xl text-muted-foreground">
                        Where we are now and how we plan to grow carefully and responsibly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {milestones.map((milestone, i) => (
                        <Card key={i} className="border-border shadow-soft">
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit mb-2">{milestone.year}</Badge>
                                <CardTitle className="text-lg">{milestone.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{milestone.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
