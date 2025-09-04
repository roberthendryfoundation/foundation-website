import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactInfoSection() {
    const contactMethods = [
        {
            icon: Phone,
            title: "988 Lifeline (U.S.)",
            description: "24/7 confidential support for people in distress",
            contact: "Call or text 988",
            subtext: "For immediate help or suicidal thoughts",
            type: "emergency",
            available: "Always available"
        },
        {
            icon: MessageCircle,
            title: "Crisis Text Line",
            description: "Text-based support when you're overwhelmed",
            contact: "Text HOME to 741741",
            subtext: "Free, 24/7 in the U.S.",
            type: "emergency",
            available: "Always available"
        },
        {
            icon: Mail,
            title: "General Inquiries",
            description: "Questions, feedback, partnerships, volunteering",
            contact: "info@roberthenryfoundation.org",
            subtext: "We typically reply within 2-3 business days",
            type: "secondary",
            available: "Business days"
        }
    ];

    return (
        <Card className="border-border shadow-soft">
            <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
                <CardDescription>
                    We're an informational nonprofit; for crisis help use the resources below.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex items-start space-x-3">
                            <div className={`rounded-full p-2 ${method.type === 'emergency' ? 'bg-destructive/10' : 'bg-muted'}`}>
                                <method.icon
                                    className={`h-4 w-4 ${method.type === 'emergency' ? 'text-destructive' : 'text-muted-foreground'
                                        }`}
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-foreground">{method.title}</h4>
                                <p className="text-sm text-muted-foreground">{method.description}</p>
                                <p className="font-medium text-foreground">{method.contact}</p>
                                <p className="text-xs text-muted-foreground">{method.subtext}</p>
                                <Badge
                                    variant={method.type === 'emergency' ? 'destructive' : 'secondary'}
                                    className="text-xs mt-1"
                                >
                                    {method.available}
                                </Badge>
                            </div>
                        </div>
                        {index < contactMethods.length - 1 && <div className="border-b border-border" />}
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
