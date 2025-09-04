import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

export function BlogArticlesSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Resources', icon: BookOpen },
        { id: 'mental-health', name: 'Anxiety Info', icon: BookOpen },
        { id: 'self-care', name: 'Self-Care', icon: BookOpen },
        { id: 'crisis', name: 'Crisis Resources', icon: BookOpen },
        { id: 'family', name: 'Family & Caregivers', icon: BookOpen },
        { id: 'videos', name: 'Videos & Audio', icon: BookOpen },
    ];

    const blogPosts = [
        {
            id: 1,
            title: "Understanding Anxiety: A Plain-Language Starter",
            excerpt: "Common signs, everyday triggers, and how to talk with a licensed professional if you choose.",
            author: "Editorial Team",
            date: "August 1, 2025",
            readTime: "6 min read",
            category: "mental-health",
            featured: true,
            tags: ["anxiety", "coping", "help-seeking"]
        },
        {
            id: 2,
            title: "Small Skills, Real Relief: 5-Minute Grounding",
            excerpt: "Simple techniques you can try today—no app required.",
            author: "Guest Contributor",
            date: "July 25, 2025",
            readTime: "5 min read",
            category: "self-care",
            featured: false,
            tags: ["grounding", "breathing", "skills"]
        },
        {
            id: 3,
            title: "Supporting a Loved One (Without Fixing Everything)",
            excerpt: "Ways to listen, validate, and share resources without pressure.",
            author: "Editorial Team",
            date: "July 18, 2025",
            readTime: "7 min read",
            category: "family",
            featured: true,
            tags: ["family", "support", "validation"]
        },
        {
            id: 4,
            title: "Mindfulness: Getting Started When You're Anxious",
            excerpt: "Short practices, realistic expectations, and common pitfalls.",
            author: "Guest Contributor",
            date: "July 10, 2025",
            readTime: "8 min read",
            category: "self-care",
            featured: false,
            tags: ["mindfulness", "practice", "anxiety"]
        },
        {
            id: 5,
            title: "How to Find Affordable Care",
            excerpt: "Sliding‑scale options, directories, and questions to ask providers.",
            author: "Editorial Team",
            date: "June 28, 2025",
            readTime: "6 min read",
            category: "mental-health",
            featured: false,
            tags: ["cost", "directories", "access"]
        },
        {
            id: 6,
            title: "Make a Personal Calm Plan",
            excerpt: "Create a simple plan you can use on tougher days.",
            author: "Editorial Team",
            date: "June 20, 2025",
            readTime: "6 min read",
            category: "self-care",
            featured: false,
            tags: ["planning", "wellness", "routine"]
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
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
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category.id)}
                                className="whitespace-nowrap"
                            >
                                <category.icon className="h-3 w-3 mr-2" />
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <Card key={post.id} className="border-border shadow-soft">
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                                    {categories.find(cat => cat.id === post.category)?.name}
                                </Badge>
                                <CardTitle className="text-lg">{post.title}</CardTitle>
                                <CardDescription>{post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span>{post.author}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <span className="text-sm text-muted-foreground">{post.date}</span>
                                        <Button variant="ghost" size="sm">
                                            Read <ArrowRight className="h-3 w-3 ml-1" />
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
