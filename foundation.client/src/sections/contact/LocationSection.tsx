import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { MapPin, Mail } from 'lucide-react';

export function LocationSection() {
    return (
        <Card className="border-border shadow-soft">
            <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Our Location</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div>
                        <div className="font-medium text-foreground">The Robert A. Henry Foundation</div>
                        <div className="text-muted-foreground">
                            We currently do not offer in-person services or maintain a public office.
                        </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p>For all inquiries, please use the contact form or email us.</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                        <Mail className="h-3 w-3 mr-2" />
                        Email Us
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
