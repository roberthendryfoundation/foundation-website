import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

export function InterestGroupsSection() {
    const navigate = useNavigate();

    const supportGroups = [
        { name: "Anxiety 101: Understanding & Coping (Planned)", time: "TBD", type: "Virtual" },
        { name: "Caregivers Supporting Loved Ones (Planned)", time: "TBD", type: "Virtual" },
        { name: "Mindfulness for Anxiety (Planned)", time: "TBD", type: "Virtual" },
        { name: "Young Adults & Anxiety (Planned)", time: "TBD", type: "Virtual" }
    ];


    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Interest Groups (Planned)</h2>
                    <p className="text-xl text-muted-foreground">
                        Sign up for updates: if enough interest builds, we'll explore scheduling a session
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {supportGroups.map((group, index) => (
                        <Card key={index} className="border-border shadow-soft">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">{group.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-sm">
                                        <Clock className="h-3 w-3 text-muted-foreground" />
                                        <span className="text-muted-foreground">{group.time}</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs">{group.type}</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button onClick={() => navigate('/contact')}>
                        Join an Interest List <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
