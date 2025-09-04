import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function NewsSection() {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-white" aria-labelledby="news-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 id="news-heading" className="text-3xl lg:text-4xl mb-4 text-foreground">
                            Latest News &amp; Resources
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Short reads and links we find helpful—focused on anxiety awareness and support.
                        </p>
                    </div>
                    <Button variant="outline" onClick={() => navigate('/resources')}>
                        View All Resources <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>

                {/* Static content now, replace with CMS later */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-border shadow-soft">
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">Anxiety Basics</Badge>
                            <CardTitle className="text-lg">What Anxiety Feels Like (and Why That's Normal)</CardTitle>
                            <CardDescription>Published August 1, 2025</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                A plain language starting point: common signs, everyday triggers, and ideas for talking to a professional…
                            </p>
                            <Button variant="ghost" size="sm">Read More <ArrowRight className="h-3 w-3 ml-1" /></Button>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-soft">
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">Community</Badge>
                            <CardTitle className="text-lg">Interest List: Short Talks on Anxiety</CardTitle>
                            <CardDescription>Published July 20, 2025</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                We're exploring short, informational sessions with qualified speakers. No therapy education only.
                            </p>
                            <Button variant="ghost" size="sm">Join Interest List <ArrowRight className="h-3 w-3 ml-1" /></Button>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-soft">
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">Resources</Badge>
                            <CardTitle className="text-lg">Free Coping Skills Workbook for Teens</CardTitle>
                            <CardDescription>Published January 5, 2025</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Download our free guide designed for adolescents, featuring cognitive behavioral tools and exercises endorsed by licensed therapists...
                            </p>
                            <Button variant="ghost" size="sm">Download PDF <ArrowRight className="h-3 w-3 ml-1" /></Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">
                        <strong>CMS Integration Ready:</strong> This section is designed to integrate with content management systems like Strapi, Contentful, or WordPress.
                    </p>
                </div>
            </div>
        </section>
    );
}
