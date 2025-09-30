import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { client } from '../../sanityClient';
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react"; // 👈 import all icons

interface Article {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: number;
    category?: { _id: string; name: string; icon?: string };
    tags?: string[];
    slug: string;
    body?: any;
}

interface Category {
    _id: string;
    name: string;
    icon?: string;
}

export function BlogArticlesSection() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            const articlesQuery = `*[_type == "article"] | order(date desc)[0...6]{
        title,
        excerpt,
        author,
        date,
        readTime,
        "slug": slug.current,
        category->{_id, name, icon},
        tags,
        body
      }`;

            const categoriesQuery = `*[_type == "category"]{ _id, name, icon }`;

            const [articlesData, categoriesData] = await Promise.all([
                client.fetch(articlesQuery),
                client.fetch(categoriesQuery),
            ]);

            setArticles(articlesData);
            setCategories([{ _id: "all", name: "All", icon: "BookOpen" }, ...categoriesData]);
        };

        fetchData();
    }, []);

    const filteredPosts = articles.filter(post => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory =
            selectedCategory === "all" || post.category?._id === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">Educational Articles &amp; Blog</h2>
                        <p className="text-xl text-muted-foreground">
                            Evidence-informed content written in plain language by our editorial team and guest contributors.
                        </p>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <Badge variant="outline" className="text-xs">CMS-Ready Content</Badge>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search articles, topics, or tags..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                        {categories.map((category) => {
                            const IconComponent =
                                category.icon && (LucideIcons as any)[category.icon]
                                    ? (LucideIcons as any)[category.icon]
                                    : BookOpen;

                            return (
                                <Button
                                    key={category._id}
                                    variant={selectedCategory === category._id ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category._id)}
                                    className="whitespace-nowrap"
                                >
                                    <IconComponent className="h-3 w-3 mr-2" />
                                    {category.name}
                                </Button>
                            );
                        })}
                    </div>
                </div>

                {/* Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, idx) => (
                        <Card key={idx} className="border-border shadow-soft">
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                                    {post.category?.name || 'Uncategorized'}
                                </Badge>
                                <CardTitle className="text-lg">{post.title}</CardTitle>
                                <CardDescription>{post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{post.author}</span>
                                        <span>{post.readTime} min read</span>
                                    </div>

                                    {/* Tags */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <span className="text-sm text-muted-foreground">
                                            {new Date(post.date).toLocaleDateString()}
                                        </span>
                                        <Button variant="ghost" size="sm" asChild>
                                            <Link to={`/resources/${post.slug}`}>
                                                Read <ArrowRight className="h-3 w-3 ml-1" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg mb-2 text-foreground">No articles found</h3>
                        <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
