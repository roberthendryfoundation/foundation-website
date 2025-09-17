import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";

interface Article {
    title: string;
    excerpt: string;
    body: any[];
    author: string;
    date: string;
    readTime: number;
    tags?: string[];
    category?: { name: string };
    seoTitle?: string;
    seoDescription?: string;
}

export function ArticlePage() {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        excerpt,
        body,
        author,
        date,
        readTime,
        tags,
        category->{name},
        seoTitle,
        seoDescription
      }`;
            const data = await client.fetch(query, { slug });
            setArticle(data);
        };
        fetchArticle();
    }, [slug]);

    if (!article) {
        return <p className="text-center py-20">Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Link to="/resources" className="inline-flex items-center mb-6 text-primary hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
            </Link>

            <Card>
                <CardHeader>
                    <Badge variant="secondary" className="mb-2">
                        {article.category?.name || "Uncategorized"}
                    </Badge>
                    <CardTitle className="text-3xl mb-2">{article.title}</CardTitle>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-sm text-muted-foreground flex justify-between">
                        <span>By {article.author}</span>
                        <span>
                            {article.date ? new Date(article.date).toLocaleDateString() : ""} •{" "}
                            {article.readTime} min read
                        </span>
                    </div>

                    {/* ✅ Proper PortableText rendering */}
                    <div className="prose prose-lg max-w-none">
                        <PortableText
                            value={article.body}
                            components={{
                                types: {
                                    image: ({ value }) => (
                                        <img
                                            src={value.asset?.url}
                                            alt={value.alt || ""}
                                            className="rounded-lg my-4"
                                        />
                                    ),
                                },
                                marks: {
                                    link: ({ children, value }) => (
                                        <a
                                            href={value.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline"
                                        >
                                            {children}
                                        </a>
                                    ),
                                },
                            }}
                        />
                    </div>

                    {article.tags && (
                        <div className="pt-4">
                            <h4 className="font-semibold mb-2">Tags:</h4>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag, idx) => (
                                    <Badge key={idx} variant="outline">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
