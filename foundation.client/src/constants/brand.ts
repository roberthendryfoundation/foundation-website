/**
 * Brand accent cycles for cards/categories — mirrors palette in index.css.
 * Use only primary, secondary, and their tints (no off-palette colors).
 */
export const brandAccentStyles = [
  {
    color: "from-primary to-primary-hover",
    borderColor: "border-primary/20 hover:border-primary/40",
    bgColor: "bg-primary/5",
  },
  {
    color: "from-primary/90 to-secondary",
    borderColor: "border-primary/15 hover:border-secondary/30",
    bgColor: "bg-section-alt",
  },
  {
    color: "from-secondary to-secondary-hover",
    borderColor: "border-secondary/25 hover:border-secondary/45",
    bgColor: "bg-secondary/5",
  },
  {
    color: "from-secondary/90 to-secondary-hover",
    borderColor: "border-secondary/20 hover:border-secondary/40",
    bgColor: "bg-secondary/10",
  },
  {
    color: "from-primary/70 to-secondary/90",
    borderColor: "border-border hover:border-secondary/35",
    bgColor: "bg-muted",
  },
] as const;

export function brandAccentAt(index: number) {
  return brandAccentStyles[index % brandAccentStyles.length];
}

/** Semantic surface classes for alternating page sections */
export const sectionSurfaces = {
  default: "bg-background",
  alt: "bg-section-alt",
  white: "bg-white",
} as const;

/** Hero / CTA section backgrounds */
export const heroSectionClass =
  "bg-gradient-to-br from-section-alt via-background to-white";

export const alertSurfaceClass =
  "bg-secondary/10 border border-secondary/25 text-foreground";

export const crisisSurfaceClass =
  "bg-primary/5 border border-primary/20 text-foreground";
