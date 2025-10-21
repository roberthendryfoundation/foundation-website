import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Search,
  FileText,
  Globe,
  Video,
  Music,
  BookOpen,
  ExternalLink,
  Download,
  Star,
} from "lucide-react";
import { client } from "../../sanityClient";

interface Resource {
  _id: string;
  title: string;
  description?: string;
  type?: string;
  url?: string;
  fileUrl?: string;
  category?: { _id: string; name: string; icon?: string };
  tags?: string[];
  featured?: boolean;
}

interface Category {
  _id: string;
  name: string;
  icon?: string;
}

interface ResourceLibraryProps {
    categoryFilter?: string;
    limit?: number;
    hideHeader?: boolean;    // hide the big title + CMS badge
    title?: string;          // custom title override
    description?: string;    // custom description override
    showFeatured?: boolean;  // toggle featured section
}

export function ResourceLibrarySection({
    categoryFilter,
    limit,
    hideHeader = false,
    title = "Resource Library",
    description = "Curated worksheets, guides, videos, and trusted links to support your mental health journey.",
    showFeatured = true,
}: ResourceLibraryProps) {
    const [resources, setResources] = useState<Resource[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            const resourcesQuery = `*[_type == "resource"] | order(_createdAt desc){
        _id,
        title,
        description,
        type,
        "fileUrl": file.asset->url,
        url,
        category->{_id, name, icon},
        tags,
        featured
      }`;

            const categoriesQuery = `*[_type == "category"]{ _id, name, icon }`;

            const [resourcesData, categoriesData] = await Promise.all([
                client.fetch(resourcesQuery),
                client.fetch(categoriesQuery),
            ]);

            setResources(resourcesData);
            setCategories([{ _id: "all", name: "All", icon: "BookOpen" }, ...categoriesData]);
        };

        fetchData();
    }, []);

    const featuredResources = resources.filter((r) => r.featured);
    const normalResources = resources.filter((r) => !r.featured);

    const filteredNormalResources = normalResources.filter((res) => {
        const matchesSearch =
            res.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            res.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            res.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategoryDropdown =
            selectedCategory === "all" || res.category?._id === selectedCategory;

        const matchesPropFilter =
            !categoryFilter ||
            res.category?.name?.toLowerCase() === categoryFilter.toLowerCase();

        return matchesSearch && matchesCategoryDropdown && matchesPropFilter;
    });

    const limitedNormalResources = limit
        ? filteredNormalResources.slice(0, limit)
        : filteredNormalResources;


  const getIcon = (type?: string) => {
    switch (type?.toLowerCase()) {
      case "pdf":
        return <FileText className="h-6 w-6 text-primary" />;
      case "website":
        return <Globe className="h-6 w-6 text-primary" />;
      case "video":
        return <Video className="h-6 w-6 text-primary" />;
      case "audio":
        return <Music className="h-6 w-6 text-primary" />;
      default:
        return <BookOpen className="h-6 w-6 text-primary" />;
    }
  };

  const getAction = (res: Resource) => {
    if (res.type?.toLowerCase() === "pdf" && res.fileUrl) {
      return (
        <Button size="sm" asChild>
          <a href={res.fileUrl} target="_blank" rel="noopener noreferrer">
            <Download className="h-3 w-3 mr-2" />
            Download
          </a>
        </Button>
      );
    }
    if (res.url) {
      return (
        <Button size="sm" asChild>
          <a href={res.url} target="_blank" rel="noopener noreferrer">
            Visit <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </Button>
      );
    }
    return null;
  };
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header (optional) */}
                {!hideHeader && (
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-xl text-muted-foreground">{description}</p>
                            )}
                        </div>
                    </div>
                )}

                {/* ⭐ Featured Resources */}
                {showFeatured && featuredResources.length > 0 && (
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                            <Star className="h-5 w-5 text-yellow-500" /> Featured Resources
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredResources.map((res) => (
                                <Card key={res._id} className="border-border shadow-soft">
                                    <CardHeader>
                                        <div className="flex items-start space-x-4">
                                            <div className="bg-primary/10 rounded-lg p-3">
                                                {getIcon(res.type)}
                                            </div>
                                            <div className="flex-1">
                                                <CardTitle className="text-lg">{res.title}</CardTitle>
                                                <CardDescription>
                                                    {res.description || "No description provided"}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground capitalize">
                                                {res.type || "Unknown"}
                                            </span>
                                            {getAction(res)}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}

                {/* 🔎 Search + Filter (skip if categoryFilter or limit is set) */}
                {!categoryFilter && !limit && (
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search resources, topics, or tags..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="w-full md:w-64">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="all">All</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

                {/* 📚 Normal Resources */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {limitedNormalResources.map((res) => (
                        <Card key={res._id} className="border-border shadow-soft">
                            <CardHeader>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 rounded-lg p-3">
                                        {getIcon(res.type)}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg">{res.title}</CardTitle>
                                        <CardDescription>
                                            {res.description || "No description provided"}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {res.tags && res.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {res.tags.map((tag, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground capitalize">
                                            {res.type || "Unknown"}
                                        </span>
                                        {getAction(res)}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* 🔗 View All link (only when limited + categoryFilter provided) */}
                {categoryFilter && limit && filteredNormalResources.length > limit && (
                    <div className="mt-6 text-right">
                        <a
                            href={`/resources`}
                            className="text-primary hover:underline inline-flex items-center"
                        >
                            View all {categoryFilter} <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                    </div>
                )}

                {/* Empty State */}
                {limitedNormalResources.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg mb-2 text-foreground">No resources found</h3>
                        <p className="text-muted-foreground">
                            Try adjusting your search terms or category filter.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );

}
