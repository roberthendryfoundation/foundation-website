import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useCategories } from "../hooks/useSanityData";

interface FilterSidebarProps {
  // Categories
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;

  // Resource Types
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;

  // Tags
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;

  // Clear all
  onClearAll: () => void;

  // Active filter count
  activeFilterCount: number;
}

const RESOURCE_TYPES = [
  { id: "pdf", label: "PDF" },
  { id: "website", label: "Website" },
  { id: "video", label: "Video" },
  { id: "audio", label: "Audio" },
  { id: "worksheet", label: "Worksheet" },
  { id: "article", label: "Article" },
];

const POPULAR_TAGS = [
  "anxiety",
  "anxiety relief",
  "breathing",
  "community",
  "connection",
  "coping skills",
  "coping strategies",
  "depression",
  "mindfulness",
  "relaxation",
];

export function FilterSidebar({
  selectedCategories,
  onCategoryChange,
  selectedTypes,
  onTypeChange,
  selectedTags,
  onTagChange,
  onClearAll,
  activeFilterCount,
}: FilterSidebarProps) {
  // Fetch categories from Sanity
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategories();

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter((c) => c !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  const toggleType = (typeId: string) => {
    if (selectedTypes.includes(typeId)) {
      onTypeChange(selectedTypes.filter((t) => t !== typeId));
    } else {
      onTypeChange([...selectedTypes, typeId]);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Active Filters Header */}
      {activeFilterCount > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="text-sm">
                  {activeFilterCount} active
                </Badge>
                <span className="text-sm font-medium">filters</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearAll}
                className="h-7 text-xs hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-3 w-3 mr-1" />
                Clear all
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Categories */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {categoriesLoading ? (
            <div className="text-sm text-muted-foreground py-2">
              Loading categories...
            </div>
          ) : categories.length === 0 ? (
            <div className="text-sm text-muted-foreground py-2">
              No categories available
            </div>
          ) : (
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category._id}
                  className="flex items-center gap-2 cursor-pointer group py-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category._id)}
                    onChange={() => toggleCategory(category._id)}
                    className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                  {category.featured && (
                    <Badge
                      variant="secondary"
                      className="text-xs h-5 px-1.5 ml-auto"
                    >
                      ⭐
                    </Badge>
                  )}
                </label>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Resource Type */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Resource Type
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {RESOURCE_TYPES.map((type) => (
              <label
                key={type.id}
                className="flex items-center gap-2 cursor-pointer group py-1"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.id)}
                  onChange={() => toggleType(type.id)}
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <Badge
                  key={tag}
                  variant={isSelected ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                  {isSelected && <X className="h-3 w-3 ml-1" />}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
