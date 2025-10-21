import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/badge';
import { Users } from 'lucide-react';

export function TeamSection() {
    //const teamMembers = [
    //    { name: "Volunteer Leadership", role: "Board & Advisors", credentials: "Community advocates with lived experience and nonprofit stewardship", specialty: "Governance, partnerships, and mission oversight" },
    //    { name: "Program Volunteers", role: "Education & Outreach", credentials: "Trained in sharing evidence-informed educational materials (non-clinical)", specialty: "Content review, outreach, and event coordination" },
    //    { name: "Operations Support", role: "Compliance & Admin", credentials: "Nonprofit administration and privacy-minded operational support", specialty: "Policies, documentation, and sustainable growth practices" },
    //    { name: "Advisory Network", role: "Subject-Matter Guidance", credentials: "External professionals who may provide high-level guidance (no patient care)", specialty: "Best-practice input and referrals to reputable sources" },
    //];
    const teamMembers = [
        {
            name: "Founding Team",
            role: "Leadership",
            credentials: "Driven by lived experience and a commitment to mental health advocacy",
            specialty: "Guiding vision, strategy, and early growth of the foundation"
        },
        {
            name: "Community Partnerships",
            role: "Outreach & Collaboration",
            credentials: "Building relationships with local organizations and professionals",
            specialty: "Connecting resources and creating future opportunities for impact"
        },
        {
            name: "Future Advisors",
            role: "Planned Growth",
            credentials: "Advisory board seats reserved for experts and community leaders",
            specialty: "Will provide trusted input as the foundation expands"
        },
        {
            name: "Operational Support",
            role: "Compliance & Structure",
            credentials: "Focused on transparent operations and nonprofit best practices",
            specialty: "Ensuring sustainable, ethical, and accountable growth"
        },
    ];


    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Our Team & Advisors</h2>
                    <p className="text-xl text-muted-foreground">
                        A small, dedicated group working to build a trustworthy, anxiety-focused resource hub.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((m, i) => (
                        <Card key={i} className="border-border shadow-soft">
                            <CardHeader>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 rounded-full p-3">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{m.name}</CardTitle>
                                        <CardDescription className="text-base font-medium text-primary mb-2">
                                            {m.role}
                                        </CardDescription>
                                        <Badge variant="secondary" className="text-xs">{m.credentials}</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    <strong>Specialty:</strong> {m.specialty}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
