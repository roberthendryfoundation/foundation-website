import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Search,
  AlertCircle,
  Grid3x3,
  List,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAdvancedResourceSearch } from "../../hooks/useAdvancedSearch";
import { ResourceGridSkeleton } from "../../components/Loading";
import { ResourceCard } from "../../components/ResourceCard";
import { FilterSidebar } from "../../components/FilterSidebar";

interface ResourceLibraryProps {
  categoryFilter?: string;
  limit?: number;
  hideHeader?: boolean;
  title?: string;
  description?: string;
  // ✅ EDUCATION-FOCUSED FILTERS
  learningLevel?: string; // beginner, intermediate, advanced
  topicAreas?: string[]; // educational topics
  contentDepth?: string; // quick, article, deep, research
}

export function ResourceLibrarySection({
  categoryFilter,
  limit,
  hideHeader = false,
  title = "Educational Resources",
  description = "Explore evidence-based information about anxiety disorders to learn, understand, and share.",
  learningLevel,
  topicAreas: initialTopics = [],
  contentDepth,
}: ResourceLibraryProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<
    "recent" | "title" | "manual" | "relevance"
  >("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false); // Mobile only
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = limit || 12;

  // ✅ SIDEBAR FILTERS
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // ✅ EDUCATION: Learning level + topics state
  const [selectedLearningLevel, setSelectedLearningLevel] = useState<
    string | undefined
  >(learningLevel);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(initialTopics);
  const [selectedContentDepth, setSelectedContentDepth] = useState<
    string | undefined
  >(contentDepth);

  // ✅ ENHANCEMENT 1: Debounce search term (300ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // ✅ FIX: Load sidebar filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const categoriesFromUrl = params.get("categories");
    const typesFromUrl = params.get("types");
    const tagsFromUrl = params.get("tags");
    const searchFromUrl = params.get("search");

    if (categoriesFromUrl) {
      setSelectedCategories(categoriesFromUrl.split(","));
    }
    if (typesFromUrl) {
      setSelectedTypes(typesFromUrl.split(","));
    }
    if (tagsFromUrl) {
      setSelectedTags(tagsFromUrl.split(","));
    }
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount, not when location.search changes

  // ✅ FIX: Save sidebar filters to URL when they change
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // Update sidebar filters in URL
    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    } else {
      params.delete("categories");
    }

    if (selectedTypes.length > 0) {
      params.set("types", selectedTypes.join(","));
    } else {
      params.delete("types");
    }

    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    } else {
      params.delete("tags");
    }

    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }

    const newSearch = params.toString();
    const currentSearch = location.search.replace("?", "");

    // Only navigate if URL changed (to avoid infinite loops)
    if (newSearch !== currentSearch) {
      navigate(`?${newSearch}`, { replace: true });
    }
  }, [
    selectedCategories,
    selectedTypes,
    selectedTags,
    searchTerm,
    navigate,
    location.search,
  ]);

  // Listen for search events from hero section + learning level/topic events
  useEffect(() => {
    const handleSearchEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSearchTerm(customEvent.detail);
      setCurrentPage(0); // Reset to first page on search
    };

    // ✅ EDUCATION: Listen for learning level filter events
    const handleLearningLevelEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSelectedLearningLevel(customEvent.detail);
      setCurrentPage(0);
    };

    // ✅ EDUCATION: Listen for topic filter events
    const handleTopicEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSelectedTopics(customEvent.detail);
      setCurrentPage(0);
    };

    window.addEventListener("resourceSearch", handleSearchEvent);
    window.addEventListener("learningLevelFilter", handleLearningLevelEvent);
    window.addEventListener("topicFilter", handleTopicEvent);

    return () => {
      window.removeEventListener("resourceSearch", handleSearchEvent);
      window.removeEventListener(
        "learningLevelFilter",
        handleLearningLevelEvent
      );
      window.removeEventListener("topicFilter", handleTopicEvent);
    };
  }, []);

  // ✅ EDUCATION: Use advanced search with education filters
  const {
    data: searchData,
    isLoading: resourcesLoading,
    error: resourcesError,
  } = useAdvancedResourceSearch(
    {
      searchTerm: debouncedSearchTerm || undefined, // ✅ Use debounced term
      category:
        categoryFilter ||
        (selectedCategories.length > 0 ? selectedCategories : undefined), // ✅ FIX: Use all categories
      type: selectedTypes.length > 0 ? selectedTypes : undefined, // ✅ FIX: Use all types
      tags: selectedTags.length > 0 ? selectedTags : undefined, // ✅ FIX: Actually use tags!
      // ✅ EDUCATION FILTERS
      learningLevel: selectedLearningLevel,
      topicAreas: selectedTopics.length > 0 ? selectedTopics : undefined,
      contentDepth: selectedContentDepth,
    },
    {
      page: currentPage,
      pageSize,
      sortBy: sortBy as "relevance" | "recent" | "title" | "manual",
    }
  );

  const resources = searchData?.resources || [];
  const totalResources = searchData?.total || 0;

  if (resourcesLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!hideHeader && (
            <div className="mb-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {title}
              </h2>
              {description && (
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}
          <ResourceGridSkeleton count={limit || 6} />
        </div>
      </section>
    );
  }

  if (resourcesError) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-2 border-destructive/20 rounded-2xl p-12 text-center backdrop-blur-sm">
            <div className="bg-destructive/10 rounded-full p-4 w-fit mx-auto mb-6">
              <AlertCircle className="h-16 w-16 text-destructive" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              Unable to load resources
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're having trouble connecting to our content service. Please try
              refreshing the page.
            </p>
            <Button
              onClick={() => window.location.reload()}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // ✅ REMOVED: All client-side filtering (now done by server)
  // Resources are already filtered, sorted, and paginated by Sanity!

  const totalPages = Math.ceil(totalResources / pageSize);
  const paginatedResources = resources; // Already paginated by server

  const clearFilters = () => {
    setSearchTerm("");
    setSortBy("recent");
    setCurrentPage(0);
    // ✅ Clear sidebar filters
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedTags([]);
    // ✅ EDUCATION: Clear learning level + topics + depth filters
    setSelectedLearningLevel(undefined);
    setSelectedTopics([]);
    setSelectedContentDepth(undefined);
  };

  const activeFilterCount =
    selectedCategories.length +
    selectedTypes.length +
    selectedTags.length +
    (selectedLearningLevel ? 1 : 0) +
    selectedTopics.length +
    (selectedContentDepth ? 1 : 0);

  return (
    <section id="resource-library" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {!hideHeader && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-foreground">{title}</h2>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        {/* Search Bar (Top) */}
        {!categoryFilter && !limit && (
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(0);
                }}
                className="pl-10 h-11"
              />
            </div>
          </div>
        )}

        {/* Two-Column Layout: Sidebar + Content */}
        {!categoryFilter && !limit && (
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* LEFT SIDEBAR: Filters (hidden on mobile, toggle button) */}
            <aside className={`${showFilters ? "block" : "hidden"} lg:block`}>
              <div className="lg:sticky lg:top-24">
                <FilterSidebar
                  selectedCategories={selectedCategories}
                  onCategoryChange={setSelectedCategories}
                  selectedTypes={selectedTypes}
                  onTypeChange={setSelectedTypes}
                  selectedTags={selectedTags}
                  onTagChange={setSelectedTags}
                  onClearAll={clearFilters}
                  activeFilterCount={activeFilterCount}
                />
              </div>
            </aside>

            {/* RIGHT CONTENT AREA */}
            <div className="space-y-6">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                  {activeFilterCount > 0 && (
                    <Badge className="ml-2" variant="default">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Top Bar: Results + Sort + View Toggle */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* Results Count */}
                <div className="text-sm text-muted-foreground">
                  Showing {currentPage * pageSize + 1}–
                  {Math.min((currentPage + 1) * pageSize, totalResources)} of{" "}
                  {totalResources} resources
                </div>

                {/* Right: Sort + View Toggle */}
                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(
                        e.target.value as
                          | "recent"
                          | "title"
                          | "manual"
                          | "relevance"
                      );
                      setCurrentPage(0);
                    }}
                    className="h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="recent">Newest First</option>
                    <option value="relevance">Best Match</option>
                    <option value="title">A-Z</option>
                    <option value="manual">Manual Order</option>
                  </select>

                  <div className="flex gap-1 bg-muted/50 p-1 rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="h-8 w-8"
                      aria-label="Grid view"
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="h-8 w-8"
                      aria-label="List view"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Resource Grid */}
              {resourcesLoading ? (
                <ResourceGridSkeleton count={pageSize} />
              ) : paginatedResources.length === 0 ? (
                <div className="text-center py-16">
                  <div className="bg-muted/30 rounded-full p-6 w-fit mx-auto mb-4">
                    <AlertCircle className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    No resources found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search terms.
                  </p>
                  {activeFilterCount > 0 && (
                    <Button onClick={clearFilters} variant="outline">
                      Clear all filters
                    </Button>
                  )}
                </div>
              ) : (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {paginatedResources.map((res, index) => (
                    <ResourceCard key={res._id} resource={res} index={index} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {!limit && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-1">
                    {[...Array(totalPages)].map((_, i) => {
                      // Show first, last, current, and adjacent pages
                      if (
                        i === 0 ||
                        i === totalPages - 1 ||
                        i === currentPage ||
                        i === currentPage - 1 ||
                        i === currentPage + 1
                      ) {
                        return (
                          <Button
                            key={i}
                            variant={i === currentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(i)}
                            className="w-9"
                          >
                            {i + 1}
                          </Button>
                        );
                      } else if (
                        i === currentPage - 2 ||
                        i === currentPage + 2
                      ) {
                        return (
                          <span key={i} className="px-2">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
                    }
                    disabled={currentPage === totalPages - 1}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
