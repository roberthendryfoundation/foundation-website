import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Shield, AlertCircle, Send } from 'lucide-react';

export function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        urgency: 'non-urgent',
        preferredContact: 'email',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Form submitted! (simulate)');
        setIsSubmitting(false);
    };

    return (
        <Card className="border-border shadow-soft">
            <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <CardDescription>
                    General questions, feedback, or partnership ideas are welcome. We usually reply within 2-3 business days.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Urgency */}
                    <div className="space-y-2">
                        <Label htmlFor="urgency">How urgent is your request?</Label>
                        <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-border rounded-md bg-input-background"
                            required
                        >
                            <option value="non-urgent">Non-urgent</option>
                            <option value="somewhat-urgent">Somewhat urgent</option>
                            <option value="urgent">Urgent</option>
                        </select>
                        {formData.urgency === 'urgent' && (
                            <div className="flex items-start space-x-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
                                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                                <p className="text-sm text-amber-800">
                                    We're not equipped for urgent support. If you need immediate help, call or text <strong>988</strong> (U.S.).
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input name="phone" value={formData.phone} onChange={handleInputChange} />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input name="subject" value={formData.subject} onChange={handleInputChange} required />
                    </div>

                    {/* Message */}
                    <div className="space-y-2 relative">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            required
                        />
                        <span className="absolute right-2 bottom-2 text-xs text-muted-foreground">
                            {formData.message.length}/500
                        </span>
                    </div>

                    {/* Privacy */}
                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                        <div className="flex items-start space-x-3">
                            <Shield className="h-5 w-5 text-primary mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                                We use HTTPS to protect form submissions. This site is informational only and does not provide medical advice.
                            </p>
                        </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending…' : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
