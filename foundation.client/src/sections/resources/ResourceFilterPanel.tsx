import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { useCategories } from "../../hooks/useSanityData";
import { AUDIENCE_FILTER_OPTIONS } from "./resourcesContent";
import { cn } from "../../components/ui/utils";

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

interface ResourceFilterPanelProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
  selectedAudience: string[];
  onAudienceChange: (audience: string[]) => void;
  onClearAll: () => void;
  activeFilterCount: number;
}

function FilterAccordion({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-950"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-slate-500 transition duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && <div className="px-3 pb-4">{children}</div>}
    </div>
  );
}

export function ResourceFilterPanel({
  selectedCategories,
  onCategoryChange,
  selectedTypes,
  onTypeChange,
  selectedTags,
  onTagChange,
  selectedAudience,
  onAudienceChange,
  onClearAll,
  activeFilterCount,
}: ResourceFilterPanelProps) {
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategories();

  const toggle = (
    value: string,
    selected: string[],
    onChange: (next: string[]) => void
  ) => {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  return (
    <aside className="sticky top-28 self-start rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div>
          <h3 className="text-base font-bold text-slate-950">Refine Library</h3>
          <p className="mt-1 text-xs text-slate-500">
            Filter by topic, audience, and type.
          </p>
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onClearAll}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#415771] hover:underline"
          >
            <X className="h-3 w-3" />
            Clear
          </button>
        )}
      </div>

      <div className="divide-y divide-slate-100">
        <FilterAccordion title="Topics" defaultOpen>
          {categoriesLoading ? (
            <p className="px-3 text-sm text-slate-500">Loading…</p>
          ) : categories.length === 0 ? (
            <p className="px-3 text-sm text-slate-500">No topics available</p>
          ) : (
            <div className="space-y-0.5">
              {categories.map((category) => (
                <label
                  key={category._id}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category._id)}
                    onChange={() =>
                      toggle(
                        category._id,
                        selectedCategories,
                        onCategoryChange
                      )
                    }
                    className="h-4 w-4 rounded border-slate-300 text-[#415771] focus:ring-[#415771]"
                  />
                  {category.name}
                </label>
              ))}
            </div>
          )}
        </FilterAccordion>

        <FilterAccordion title="Audience">
          <div className="space-y-0.5">
            {AUDIENCE_FILTER_OPTIONS.map((audience) => (
              <label
                key={audience.id}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  checked={selectedAudience.includes(audience.id)}
                  onChange={() =>
                    toggle(audience.id, selectedAudience, onAudienceChange)
                  }
                  className="h-4 w-4 rounded border-slate-300 text-[#415771] focus:ring-[#415771]"
                />
                {audience.label}
              </label>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion title="Resource Type">
          <div className="space-y-0.5">
            {RESOURCE_TYPES.map((type) => (
              <label
                key={type.id}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.id)}
                  onChange={() =>
                    toggle(type.id, selectedTypes, onTypeChange)
                  }
                  className="h-4 w-4 rounded border-slate-300 text-[#415771] focus:ring-[#415771]"
                />
                {type.label}
              </label>
            ))}
          </div>
        </FilterAccordion>

        <FilterAccordion title="Popular Tags" defaultOpen={false}>
          <div className="flex flex-wrap gap-2 px-1">
            {POPULAR_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggle(tag, selectedTags, onTagChange)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition",
                    isSelected
                      ? "bg-[#415771] text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-[#415771]/40"
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </FilterAccordion>
      </div>
    </aside>
  );
}
