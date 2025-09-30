import { Card, CardContent } from '../../components/ui/Card';
import { Heart } from 'lucide-react';

export function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Your anxiety guides helped me make sense of what I was feeling and find next steps that were actually useful.",
            author: "Community Member",
            role: "Reader",
        },
        {
            quote: "I shared your resource list with a friend. it was clear, compassionate, and easy to follow.",
            author: "Local Advocate",
            role: "Volunteer",
        },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Personal Testimonials</h2>
                    <p className="text-xl text-muted-foreground">
                        Real experiences shared by individuals who've benefited from our resources.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="border-border shadow-soft">
                            <CardContent className="p-8">
                                <blockquote className="text-lg leading-relaxed mb-6 text-foreground">"{t.quote}"</blockquote>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-primary/10 rounded-full p-2">
                                        <Heart className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">{t.author}</div>
                                        <div className="text-sm text-muted-foreground">{t.role}</div>
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
