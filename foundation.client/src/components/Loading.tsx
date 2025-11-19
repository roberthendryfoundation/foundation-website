import { Loader2 } from "lucide-react";

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export function Loading({
  message = "Loading...",
  fullScreen = false,
}: LoadingProps) {
  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

// Skeleton loader for resource cards with shimmer effect
export function ResourceCardSkeleton() {
  return (
    <div className="border border-border rounded-lg p-6">
      <div className="flex items-start space-x-4">
        {/* Icon skeleton with gradient shimmer */}
        <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg h-12 w-12 animate-shimmer"></div>

        <div className="flex-1 space-y-3">
          {/* Title skeleton with shimmer effect */}
          <div className="h-4 bg-gradient-to-r from-muted via-muted/50 to-muted rounded w-3/4 animate-shimmer"></div>
          <div className="h-3 bg-gradient-to-r from-muted via-muted/50 to-muted rounded w-full animate-shimmer"></div>
          <div className="h-3 bg-gradient-to-r from-muted via-muted/50 to-muted rounded w-2/3 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}

// Skeleton for a grid of cards
export function ResourceGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ResourceCardSkeleton key={i} />
      ))}
    </div>
  );
}
