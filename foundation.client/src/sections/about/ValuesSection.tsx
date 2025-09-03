import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Heart, Lightbulb, Handshake, Shield } from 'lucide-react';

export function ValuesSection() {
    const values = [
        { icon: Heart, title: "Compassion", description: "We meet every person with empathy..." },
        { icon: Lightbulb, title: "Accuracy", description: "We share clear, evidence-informed info..." },
        { icon: Handshake, title: "Inclusivity", description: "We welcome people of all backgrounds..." },
        { icon: Shield, title: "Transparency", description: "We communicate honestly about what we can and cannot provide." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Our Core Values</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        These principles guide our early work and our growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((v, i) => (
                        <Card key={i} className="border-border shadow-soft text-center">
                            <CardHeader>
                                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                                    <v.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{v.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{v.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
