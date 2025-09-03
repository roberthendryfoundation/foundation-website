import { CheckCircle, Shield } from 'lucide-react';

export function AccreditationsSection() {
    const accreditations = [
        "Informational Use Only (This site does not provide medical advice, diagnosis, or treatment).",
        "Privacy-First Practices (We collect minimal information and handle inquiries with care. See our Privacy Policy).",
        "Ethical Content (We link to reputable sources and avoid unverifiable claims or statistics).",
        "Crisis Navigation (We prominently direct visitors to national and local crisis resources, e.g., 988 in the U.S.).",
        "Transparency (We will publish updates about programs and funding as we grow).",
        "Accessibility (We strive to make our content clear, readable, and usable for all visitors).",
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                        Our Commitments &amp; Policies
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        How we keep information responsible, respectful, and useful.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {accreditations.map((a, i) => (
                        <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-border shadow-soft">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span className="text-foreground">{a}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-white p-8 rounded-lg border border-border shadow-soft">
                    <div className="flex items-start space-x-4">
                        <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl mb-3 text-foreground">Responsible Use &amp; Privacy</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                This website is for informational purposes only and is not a substitute for professional
                                medical advice, diagnosis, or treatment. If you are in crisis or considering self-harm,
                                call or text <strong>988</strong> in the U.S. or visit your nearest emergency department.
                                We do not provide clinical services or store medical records. Any messages you send are
                                handled according to our Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
