import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Target, Lightbulb, Heart } from 'lucide-react';

export function MissionVisionSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <Card className="border-border shadow-soft">
                        <CardHeader className="text-center">
                            <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                            <CardTitle className="text-xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                To provide clear, compassionate, and evidence-informed information about anxiety,
                                and to connect people with reputable resources and qualified help.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-soft">
                        <CardHeader className="text-center">
                            <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
                            <CardTitle className="text-xl">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                A community where anxiety is understood without stigma and people can find accurate
                                information and clear pathways to care.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-soft">
                        <CardHeader className="text-center">
                            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                            <CardTitle className="text-xl">Our Impact</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                We are starting with educational content and curated resources while we responsibly
                                explore partnerships and future programming.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
