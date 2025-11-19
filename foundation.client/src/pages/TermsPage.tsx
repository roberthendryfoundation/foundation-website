import { SEO } from "../components/SEO";
import { FileText } from "lucide-react";

export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service - The Robert A. Hendry Foundation"
        description="Terms and conditions for using our mental health resource website."
        canonical="/terms"
      />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/20 rounded-full p-4">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
              Terms of Service
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
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the website of The Robert A. Hendry
                Foundation ("we," "our," "us"), you accept and agree to be bound
                by these Terms of Service. If you do not agree, please do not
                use this website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Critical Disclaimers</h2>
              <div className="bg-destructive/10 border-2 border-destructive p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-destructive mb-3">
                  NOT A SUBSTITUTE FOR PROFESSIONAL CARE
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  This website provides general information about anxiety and
                  mental health for educational purposes only. It is NOT:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-sm text-muted-foreground">
                  <li>Medical, psychiatric, or psychological advice</li>
                  <li>A substitute for professional diagnosis or treatment</li>
                  <li>
                    Intended to replace consultation with qualified healthcare
                    providers
                  </li>
                  <li>A crisis intervention service</li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">What We Are</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are an{" "}
                  <strong>information-only 501(c)(3) nonprofit</strong>. We
                  share educational content and connect people with external
                  resources. We do not provide clinical services, therapy,
                  counseling, diagnosis, or treatment.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Emergency Situations</h2>
              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded mb-4">
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>
                    If you're experiencing a mental health crisis or medical
                    emergency:
                  </strong>
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Call 988 (Suicide & Crisis Lifeline - U.S.)</li>
                  <li>Text HOME to 741741 (Crisis Text Line - U.S.)</li>
                  <li>Call 911 (Emergency services)</li>
                  <li>Visit your nearest emergency room</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>
                    Do not rely on our website or contact form for crisis
                    situations.
                  </strong>{" "}
                  These services are not monitored 24/7.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Use of Website</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Permitted Uses
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use this website to:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Access educational information about anxiety</li>
                <li>View and download free resources (worksheets, guides)</li>
                <li>Find links to external support services</li>
                <li>Contact us with general inquiries</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Prohibited Uses
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may NOT:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  Use this site as a substitute for professional mental health
                  care
                </li>
                <li>
                  Share personal health information or crisis details via
                  contact forms
                </li>
                <li>
                  Reproduce, distribute, or sell our content without permission
                </li>
                <li>Attempt to hack, disrupt, or damage the website</li>
                <li>Use automated tools to scrape or collect data</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Content and Resources</h2>

              <h3 className="text-xl font-semibold mb-3">Our Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website (articles, worksheets, guides, etc.)
                is:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Provided for general educational purposes</li>
                <li>Based on publicly available information</li>
                <li>Not a substitute for professional advice</li>
                <li>Subject to change without notice</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Accuracy</h3>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for accuracy, we make no guarantees about the
                completeness, reliability, or timeliness of our content. Always
                consult qualified healthcare providers for medical decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website links to external websites (crisis hotlines, therapy
                directories, support organizations, etc.). We are NOT
                responsible for:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>Content on third-party websites</li>
                <li>Services provided by external organizations</li>
                <li>Privacy practices of linked sites</li>
                <li>Accuracy or quality of external resources</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                External links are provided for convenience only. Their
                inclusion does not imply endorsement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website (text, graphics, logos, worksheets)
                is owned by The Robert A. Hendry Foundation or its licensors,
                protected by copyright and trademark laws.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Personal Use:</strong> You may download and print
                resources for personal, non-commercial use.
                <strong className="block mt-2">Commercial Use:</strong> Requires
                written permission. Contact us at
                info@robertahendryfoundation.org.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                <li>
                  We provide this website "as is" without warranties of any kind
                </li>
                <li>
                  We are not liable for any damages arising from use of this
                  website
                </li>
                <li>
                  We are not responsible for decisions made based on our content
                </li>
                <li>We are not liable for third-party services or websites</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This includes direct, indirect, incidental, consequential, or
                punitive damages.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">No Confidentiality</h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  <strong>Important:</strong> Information submitted via our
                  contact form is NOT confidential. Do not share:
                </p>
                <ul className="list-disc ml-6 mt-3 space-y-2 text-muted-foreground">
                  <li>Personal health information</li>
                  <li>Crisis or emergency details</li>
                  <li>Sensitive personal information</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We are not therapists or counselors. No therapist-patient
                  relationship is created by using this website.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be posted on this page with an updated date. Continued use
                after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the United States and
                the state where our nonprofit is registered, without regard to
                conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms:
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
                <p className="text-muted-foreground mt-1">
                  Type: 501(c)(3) Nonprofit Organization
                </p>
              </div>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>
                  By using this website, you acknowledge that you have read,
                  understood, and agree to these Terms of Service.
                </strong>{" "}
                If you disagree with any part, please discontinue use
                immediately.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
