import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/button';
import { FileText, Download } from 'lucide-react';
import { client } from '../../sanityClient';

interface Resource {
    title: string;
    description: string;
    type: string;
    fileUrl?: string;
}

export function DownloadablesSection() {
    const [resources, setResources] = useState<Resource[]>([]);

    useEffect(() => {
        const fetchResources = async () => {
            const query = `*[_type == "resource" && type == "pdf"]{
        title,
        description,
        type,
        "fileUrl": file.asset->url
      }`;
            const data = await client.fetch(query);
            setResources(data);
        };
        fetchResources();
    }, []);

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
                    {resources.map((res, index) => (
                        <Card key={index} className="border-border shadow-soft">
                            <CardHeader>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 rounded-lg p-3">
                                        <FileText className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg">{res.title}</CardTitle>
                                        <CardDescription>{res.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-muted-foreground">{res.type}</div>
                                    {res.fileUrl && (
                                        <Button size="sm" asChild>
                                            <a href={res.fileUrl} target="_blank" rel="noopener noreferrer">
                                                <Download className="h-3 w-3 mr-2" />
                                                Download
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
