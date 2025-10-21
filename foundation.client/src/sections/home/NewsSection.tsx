import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/badge';
import { ArrowRight, Newspaper } from 'lucide-react';
import { client } from '../../sanityClient';

interface Article {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    category?: { name: string };
}

export function NewsSection() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const query = `*[_type == "article"] | order(date desc)[0...3]{
          title,
          excerpt,
          "slug": slug.current,
          date,
          category->{ name }
        }`;
                const data = await client.fetch(query);
                setArticles(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return (
        <section className="py-20 bg-white" aria-labelledby="news-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 id="news-heading" className="text-3xl lg:text-4xl mb-4 text-foreground">
                            Latest News &amp; Resources
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Short reads and links we find helpful-focused on anxiety awareness and support.
                        </p>
                    </div>
                    <Button variant="outline" onClick={() => navigate('/resources')}>
                        View All Resources <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>

                {/* Loading state */}
                {loading && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">Loading latest articles...</p>
                    </div>
                )}

                {/* No articles fallback */}
                {!loading && articles.length === 0 && (
                    <div className="text-center py-12">
                        <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg mb-2 text-foreground">No articles yet</h3>
                        <p className="text-muted-foreground">
                            Check back soon for updates from our editorial team.
                        </p>
                    </div>
                )}

                {/* Dynamic articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, idx) => (
                        <Card key={idx} className="border-border shadow-soft">
                            <CardHeader>
                                {article.category?.name && (
                                    <Badge variant="secondary" className="w-fit mb-2">
                                        {article.category.name}
                                    </Badge>
                                )}
                                <CardTitle className="text-lg">{article.title}</CardTitle>
                                <CardDescription>
                                    Published {new Date(article.date).toLocaleDateString()}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link to={`/resources/${article.slug}`}>
                                        Read More <ArrowRight className="h-3 w-3 ml-1" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">
                        <strong>CMS Integration Ready:</strong> This section now pulls content directly from Sanity.
                    </p>
                </div>
            </div>
        </section>
    );
}
