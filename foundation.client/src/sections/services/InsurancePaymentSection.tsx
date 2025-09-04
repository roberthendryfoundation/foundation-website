import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { CheckCircle, Shield, Heart } from 'lucide-react';

export function InsurancePaymentSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Costs, Insurance &amp; Disclaimers</h2>
                        <p className="text-xl text-muted-foreground">
                            We're not a healthcare provider and don't bill insurance. Our resources are free to the community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Transparency */}
                        <Card className="border-border shadow-soft">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Shield className="h-5 w-5 text-primary" />
                                    <span>Transparency</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {[
                                        "Information only - not medical advice or therapy",
                                        "No crisis line - for immediate help call or text 988",
                                        "No insurance billing or patient records",
                                        "We link to reputable external services and hotlines"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-success" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Support */}
                        <Card className="border-border shadow-soft">
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Heart className="h-5 w-5 text-primary" />
                                    <span>Support Our Work</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {[
                                        "Donations fund content, accessibility, and outreach",
                                        "We'll publish updates as programs develop",
                                        "Financials available upon request as we grow"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-success" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
