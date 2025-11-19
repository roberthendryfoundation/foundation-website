import { SEO } from "../components/SEO";
import { Shield } from "lucide-react";

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy - The Robert A. Hendry Foundation"
        description="Learn how we protect your privacy and handle information on our mental health resource website."
        canonical="/privacy"
      />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/20 rounded-full p-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-center text-muted-foreground">
              Last Updated: October 23, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Our Commitment to Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Robert A. Hendry Foundation ("we," "our," or "us") is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard information when you
                visit our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                What We Are (and Aren't)
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg mb-4">
                <p className="text-foreground leading-relaxed">
                  <strong>Important:</strong> We are an information-only
                  nonprofit organization. We do NOT:
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Provide therapy, counseling, or clinical services</li>
                  <li>Collect or store personal health information</li>
                  <li>Maintain patient records</li>
                  <li>Diagnose or treat mental health conditions</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our website provides educational content and links to external
                resources. We do not require registration or collect personal
                information to view our resources.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                1. Automatically Collected Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Like most websites, we automatically collect certain technical
                information:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent,
                  browser type, device type
                </li>
                <li>
                  <strong>Analytics:</strong> We use Google Analytics to
                  understand how visitors use our site
                </li>
                <li>
                  <strong>IP Addresses:</strong> For security and analytics
                  (anonymized)
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                2. Information You Provide
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We only collect information you voluntarily provide:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Contact Form:</strong> Name and email (if you contact
                  us)
                </li>
                <li>
                  <strong>Newsletter:</strong> Email address (if you subscribe)
                </li>
                <li>
                  <strong>No Health Information:</strong> We never ask for or
                  collect mental health details
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                How We Use Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Improve our website and resources</li>
                <li>Respond to inquiries via contact form</li>
                <li>Send newsletters (only if you subscribed)</li>
                <li>Understand which resources are most helpful</li>
                <li>Ensure website security</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>
                  We never sell, rent, or share your personal information with
                  third parties for marketing purposes.
                </strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies for:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Essential Cookies:</strong> Required for site
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Google Analytics (you can
                  opt out)
                </li>
                <li>
                  <strong>Preferences:</strong> Remember your settings (like
                  dark mode)
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website contains links to external resources (crisis
                hotlines, therapy directories, etc.). We are not responsible for
                the privacy practices of these third-party websites. Please
                review their privacy policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect
                information. Our website uses HTTPS/SSL encryption. However, no
                internet transmission is 100% secure. If you're in crisis,
                please call 988 instead of using our contact form.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Access any personal information we have about you</li>
                <li>Request deletion of your information</li>
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Opt out of analytics cookies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, email us at:{" "}
                <a
                  href="mailto:info@robertahendryfoundation.org"
                  className="text-primary hover:underline"
                >
                  info@robertahendryfoundation.org
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is not directed to children under 13. We do not
                knowingly collect information from children. If you're a parent
                and believe your child provided information, please contact us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated "Last Updated" date.
                Continued use of our website constitutes acceptance of changes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>The Robert A. Hendry Foundation</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Email:{" "}
                  <a
                    href="mailto:info@robertahendryfoundation.org"
                    className="text-primary hover:underline"
                  >
                    info@robertahendryfoundation.org
                  </a>
                </p>
              </div>
            </section>

            <section className="bg-destructive/10 border-l-4 border-destructive p-6 rounded">
              <h3 className="text-lg font-semibold text-destructive mb-2">
                Crisis Notice
              </h3>
              <p className="text-sm text-muted-foreground">
                If you're experiencing a mental health crisis, please do not use
                our contact form. Call or text 988 for the Suicide & Crisis
                Lifeline (U.S.), or visit your nearest emergency room.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
