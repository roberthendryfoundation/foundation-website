import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/button';
import { FileText, Download } from 'lucide-react';

export function DownloadablesSection() {
    const downloadableResources = [
        {
            title: "Anxiety Basics: Mini Workbook (Coming Soon)",
            description: "Simple exercises and prompts to understand your patterns.",
            type: "PDF",
            size: "TBD",
            downloads: "Coming soon"
        },
        {
            title: "Daily Check-In Sheet (Coming Soon)",
            description: "A one-page tracker for mood, sleep, and small wins.",
            type: "PDF",
            size: "TBD",
            downloads: "Coming soon"
        },
        {
            title: "Daily Check‑In Sheet (Coming Soon)",
            description: "A one‑page tracker for mood, sleep, and small wins.",
            type: "PDF",
            size: "TBD",
            downloads: "Coming soon"
        },
        {
            title: "Personal Calm Plan Template (Coming Soon)",
            description: "Fill‑in sections for coping skills, contacts, and reminders.",
            type: "PDF",
            size: "TBD",
            downloads: "Coming soon"
        },
        {
            title: "Mindfulness Starter Guide (Coming Soon)",
            description: "Short practices and tips for beginners.",
            type: "PDF",
            size: "TBD",
            downloads: "Coming soon"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Downloadable Resources</h2>
                    <p className="text-xl text-muted-foreground">
                        Free worksheets, guides, and tools to support your mental health journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {downloadableResources.map((resource, index) => (
                        <Card key={index} className="border-border shadow-soft">
                            <CardHeader>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 rounded-lg p-3">
                                        <FileText className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                                        <CardDescription>{resource.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-muted-foreground">
                                        <span className="inline-block mr-4">{resource.type} • {resource.size}</span>
                                        <span>{resource.downloads}</span>
                                    </div>
                                    <Button size="sm">
                                        <Download className="h-3 w-3 mr-2" />
                                        Download
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
