import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ExternalLink } from "lucide-react";
import {
  useAdvancedResourceSearch,
  Resource,
} from "../hooks/useAdvancedSearch";
import { trackSearch } from "../utils/analytics";

interface GlobalSearchProps {
  isMobile?: boolean;
}

export function GlobalSearch({ isMobile = false }: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isLoading } = useAdvancedResourceSearch(
    { searchTerm: debouncedQuery },
    { pageSize: 8 }
  );
  const results = data?.resources || [];

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      if (query.length > 2) {
        trackSearch(query);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard shortcut (Cmd/Ctrl + K) and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open modal with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        return;
      }

      // Close modal with Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        return;
      }

      // Keyboard navigation in results
      if (isOpen && results.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && results[selectedIndex]) {
          e.preventDefault();
          handleResultClick(results[selectedIndex].slug?.current || "");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, results]);

  // Focus input when opened and lock body scroll
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleResultClick = (slug: string) => {
    navigate(`/resources/${slug}`);
    setIsOpen(false);
    setQuery("");
  };

  const handleViewAllResults = () => {
    navigate(`/resources?search=${encodeURIComponent(query)}`);
    setIsOpen(false);
    setQuery("");
  };

  if (isMobile) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
    );
  }

  return (
    <>
      {/* Search Icon - All Devices */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 relative group"
        aria-label="Search (Press ⌘K)"
        title="Search (⌘K)"
      >
        <Search className="h-5 w-5" />
        {/* Tooltip hint for ⌘K on desktop */}
        <span className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Press ⌘K
        </span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-black/50 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="w-full max-w-2xl mx-4 bg-white rounded-lg shadow-2xl border border-border overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources, articles, and more..."
                className="flex-1 text-base bg-transparent outline-none"
                aria-label="Search resources"
                aria-describedby="search-instructions"
                role="searchbox"
                aria-autocomplete="list"
                aria-controls="search-results"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 hover:bg-muted rounded transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded border border-border"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div
              id="search-results"
              role="listbox"
              aria-label="Search results"
              className="max-h-[60vh] overflow-y-auto"
            >
              {isLoading ? (
                <div className="p-12 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                      <div className="absolute inset-0 h-12 w-12 rounded-full bg-primary/20 animate-ping" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-foreground mb-1">
                        Searching for "{query}"
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Finding the best resources for you...
                      </p>
                    </div>
                  </div>
                </div>
              ) : query.length > 0 && results && results.length > 0 ? (
                <>
                  <div className="divide-y divide-border">
                    {results
                      .slice(0, 8)
                      .map((resource: Resource, i: number) => (
                        <button
                          key={resource._id}
                          onClick={() =>
                            handleResultClick(resource.slug?.current || "")
                          }
                          role="option"
                          aria-selected={i === selectedIndex}
                          className={`w-full p-4 text-left transition-colors flex items-start gap-3 group ${
                            i === selectedIndex
                              ? "bg-primary/10 border-l-4 border-primary"
                              : "hover:bg-muted/50 border-l-4 border-transparent"
                          }`}
                        >
                          {/* Icon */}
                          <div className="mt-1">
                            {resource.type === "External Link" ? (
                              <ExternalLink className="h-4 w-4 text-primary" />
                            ) : (
                              <div className="h-4 w-4 rounded bg-primary/10 flex items-center justify-center">
                                <span className="text-xs text-primary font-semibold">
                                  {resource.type?.[0]}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                              {resource.title}
                            </div>
                            {resource.description && (
                              <div className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                {resource.description}
                              </div>
                            )}
                            {resource.category && (
                              <div className="flex gap-2 mt-2">
                                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                  {resource.category.name}
                                </span>
                              </div>
                            )}
                            {resource.tags && resource.tags.length > 0 && (
                              <div className="flex gap-2 mt-2">
                                {resource.tags
                                  .slice(0, 2)
                                  .map((tag: string) => (
                                    <span
                                      key={tag}
                                      className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                  </div>

                  {/* View All */}
                  {results.length > 8 && (
                    <div className="p-4 border-t border-border">
                      <button
                        onClick={handleViewAllResults}
                        className="w-full text-center text-sm text-primary hover:underline"
                      >
                        View all {results.length} results →
                      </button>
                    </div>
                  )}
                </>
              ) : query.length > 0 ? (
                <div className="p-12 text-center">
                  <div className="bg-muted/30 rounded-full p-6 w-fit mx-auto mb-4">
                    <Search className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    No results found for "{query}"
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                    Try different keywords or browse our popular topics below
                  </p>

                  {/* Quick suggestions */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    <button
                      onClick={() => setQuery("anxiety")}
                      className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      anxiety
                    </button>
                    <button
                      onClick={() => setQuery("treatment")}
                      className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      treatment
                    </button>
                    <button
                      onClick={() => setQuery("breathing")}
                      className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      breathing
                    </button>
                    <button
                      onClick={() => setQuery("self help")}
                      className="px-3 py-1.5 text-sm border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                    >
                      self help
                    </button>
                  </div>

                  <button
                    onClick={handleViewAllResults}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Browse all resources →
                  </button>
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <p className="mb-2">Start typing to search...</p>
                  <p className="text-xs">
                    Try searching for "anxiety", "panic", or "breathing"
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-muted/30 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>
                  Press{" "}
                  <kbd className="px-2 py-0.5 bg-background rounded border border-border">
                    ↵
                  </kbd>{" "}
                  to select
                </span>
                <span>
                  Press{" "}
                  <kbd className="px-2 py-0.5 bg-background rounded border border-border">
                    ESC
                  </kbd>{" "}
                  to close
                </span>
              </div>
              <span className="hidden sm:block">Powered by Sanity</span>
            </div>

            {/* Hidden instructions for screen readers */}
            <div id="search-instructions" className="sr-only">
              Use arrow keys to navigate results. Press Enter to select. Press
              Escape to close.
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
}
