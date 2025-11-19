import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface LogoProps {
  variant?: "header" | "footer" | "compact";
  showText?: boolean;
  className?: string;
}

export function Logo({
  variant = "header",
  showText = true,
  className = "",
}: LogoProps) {
  // Logo image path - replace with your actual logo
  // Supports: /logo.png, /logo.svg, /logo.jpg
  const logoSrc = "/logo.png"; // Change to "/logo.svg" if using SVG

  const isCompact = variant === "compact";
  const isFooter = variant === "footer";

  // Size based on variant
  const logoSize = isCompact ? "h-8 w-8" : isFooter ? "h-10 w-10" : "h-10 w-10";
  const textSize = isCompact ? "text-base" : isFooter ? "text-base" : "text-lg";
  const subtitleSize = isCompact ? "text-[10px]" : "text-xs";

  return (
    <Link
      to="/"
      className={`flex items-center space-x-3 ${className}`}
      aria-label="The Robert A. Hendry Foundation - Home"
    >
      {/* Logo Image or Placeholder */}
      <div className={`${logoSize} flex-shrink-0 relative`}>
        <img
          src={logoSrc}
          alt="The Robert A. Hendry Foundation Logo"
          className={`${logoSize} object-contain`}
          onError={(e) => {
            // Hide image if it doesn't exist, show placeholder
            e.currentTarget.style.display = "none";
            const placeholder = e.currentTarget
              .nextElementSibling as HTMLElement;
            if (placeholder) {
              placeholder.style.display = "flex";
            }
          }}
        />
        {/* Placeholder - shown when logo image doesn't exist */}
        <div
          className={`${logoSize} bg-primary rounded-full items-center justify-center hidden`}
          style={{ display: "none" }}
        >
          <Heart
            className={`${
              isCompact ? "h-4 w-4" : "h-5 w-5"
            } text-primary-foreground`}
          />
        </div>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <h1
            className={`${textSize} font-semibold text-foreground leading-tight`}
          >
            The Robert A. Hendry Foundation
          </h1>
          {!isCompact && (
            <p className={`${subtitleSize} text-muted-foreground`}>
              Action-based anxiety nonprofit
            </p>
          )}
        </div>
      )}
    </Link>
  );
}
