import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { BookOpen, Users, Clock, Heart } from 'lucide-react';

export function FeaturesSection() {
    const features = [
        { icon: BookOpen, title: "Anxiety Education", description: "Clear, evidence-informed guides..." },
        { icon: Users, title: "Resource Navigation", description: "Pointers to reputable hotlines..." },
        { icon: Clock, title: "Updates & Learning", description: "Short articles and occasional talks..." },
        { icon: Heart, title: "Stigma Reduction", description: "Language and materials designed to build empathy..." },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">How We Help</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Education and navigation so you can understand anxiety and find qualified help when you're ready.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <Card key={i} className="border-border shadow-soft hover:shadow-lg transition-shadow">
                            <CardHeader className="text-center pb-4">
                                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-4">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
