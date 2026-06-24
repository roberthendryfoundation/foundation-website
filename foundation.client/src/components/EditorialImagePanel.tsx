import type { ReactNode } from "react";
import { cn } from "./ui/utils";

interface EditorialImagePanelProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlay?: boolean;
  children?: ReactNode;
}

export function EditorialImagePanel({
  src,
  alt,
  className,
  imageClassName,
  overlay = true,
  children,
}: EditorialImagePanelProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-section-alt shadow-sm",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
          imageClassName
        )}
      />
      {overlay && (
        <div
          className="absolute inset-0 bg-primary/10 transition-opacity group-hover:bg-primary/5"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
