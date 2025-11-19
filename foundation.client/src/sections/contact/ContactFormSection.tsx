import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Shield, AlertCircle, Send, CheckCircle2 } from "lucide-react";

export function ContactFormSection() {
  // Get Formspree ID from environment variable
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formspreeId || "");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "non-urgent",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  // Success state
  if (state.succeeded) {
    return (
      <Card className="border-border shadow-soft">
        <CardContent className="p-12 text-center">
          <div className="bg-success/10 rounded-full p-4 w-fit mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-success" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Message Sent!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. We typically respond within 2-3 business
            days.
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl text-foreground">
          Send Us a Message
        </CardTitle>
        <CardDescription>
          General questions, feedback, or partnership ideas are welcome. We
          usually reply within 2-3 business days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Configuration error */}
        {!formspreeId && (
          <div className="mb-6 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <p className="text-sm text-destructive">
              <strong>⚠️ Configuration Error:</strong> Formspree ID is missing.
              Please add VITE_FORMSPREE_ID to your .env file.
            </p>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-6">
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
            {formData.urgency === "urgent" && (
              <div className="flex items-start space-x-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                <p className="text-sm text-amber-800">
                  We're not equipped for urgent support. If you need immediate
                  help, call or text <strong>988</strong> (U.S.).
                </p>
              </div>
            )}
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              required
              maxLength={2000}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <span>{formData.message.length}/2000</span>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-sm text-muted-foreground">
                We use HTTPS to protect form submissions. This site is
                informational only and does not provide medical advice.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={state.submitting}
          >
            {state.submitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" /> Send Message
              </>
            )}
          </Button>

          {/* Error state */}
          {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-center">
              <AlertCircle className="h-5 w-5 text-destructive mx-auto mb-2" />
              <p className="text-sm text-destructive">
                Failed to send message. Please try again or email us directly.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
