import { Grid3x3, List } from "lucide-react";
import { Button } from "../../components/ui/button";

interface ResourceToolbarProps {
  currentPage: number;
  pageSize: number;
  totalResources: number;
  sortBy: string;
  onSortChange: (value: "recent" | "title" | "manual" | "relevance") => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export function ResourceToolbar({
  currentPage,
  pageSize,
  totalResources,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: ResourceToolbarProps) {
  const start = totalResources === 0 ? 0 : currentPage * pageSize + 1;
  const end = Math.min((currentPage + 1) * pageSize, totalResources);

  return (
    <div className="mb-5 hidden items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:flex">
      <p className="text-sm text-slate-600">
        Showing {start}–{end} of {totalResources} resources
      </p>
      <div className="flex items-center gap-2">
        <select
          value={sortBy}
          onChange={(e) =>
            onSortChange(
              e.target.value as "recent" | "title" | "manual" | "relevance"
            )
          }
          className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#415771] focus:ring-offset-2"
          aria-label="Sort resources"
        >
          <option value="recent">Newest First</option>
          <option value="relevance">Best Match</option>
          <option value="title">A-Z</option>
          <option value="manual">Manual Order</option>
        </select>
        <div className="flex gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => onViewModeChange("grid")}
            className="h-8 w-8"
            aria-label="Grid view"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => onViewModeChange("list")}
            className="h-8 w-8"
            aria-label="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
