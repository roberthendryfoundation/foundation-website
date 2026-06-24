import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { NAVBAR_LOGO_SRC, SEAL_LOGO_SRC } from "../constants/logos";
import { cn } from "./ui/utils";

interface LogoProps {
  variant?: "header" | "footer" | "compact";
  mark?: "navbar" | "seal";
  showText?: boolean;
  /** Use on dark backgrounds (e.g. navy footer) */
  inverse?: boolean;
  className?: string;
}

export function Logo({
  variant = "header",
  mark = "navbar",
  showText,
  inverse = false,
  className = "",
}: LogoProps) {
  const isCompact = variant === "compact";
  const isFooter = variant === "footer";
  const isNavbarMark = mark === "navbar";

  const isSealFooter = isFooter && !isNavbarMark;

  const logoSrc = isNavbarMark ? NAVBAR_LOGO_SRC : SEAL_LOGO_SRC;
  const shouldShowText =
    showText ?? (isNavbarMark ? false : !isCompact);

  const imageClassName = isNavbarMark
    ? isCompact
      ? "h-8 w-auto max-w-[200px]"
      : isFooter
        ? "h-8 w-auto max-w-[220px]"
        : "h-auto w-[240px] max-w-[82vw] sm:w-[255px] md:h-14 md:w-auto md:max-w-none lg:h-16 object-contain"
    : isCompact
      ? "h-8 w-8"
      : isFooter
        ? "h-24 w-24"
        : "h-10 w-10";

  const textSize = isCompact ? "text-base" : isFooter ? "text-base" : "text-lg";
  const subtitleSize = isCompact ? "text-[10px]" : "text-xs";
  const footerSubtitle =
    "Information only nonprofit (no clinical services)";
  const headerSubtitle = "Action-based anxiety nonprofit";

  const titleClass = inverse
    ? "text-footer-foreground"
    : "text-foreground";
  const subtitleClass = inverse
    ? "text-footer-muted"
    : "text-muted-foreground";

  return (
    <Link
      to="/"
      className={cn(
        "flex shrink-0 min-w-0",
        isSealFooter && shouldShowText
          ? "flex-col items-center gap-3 text-center"
          : "items-center",
        shouldShowText && !isSealFooter && "space-x-3",
        className
      )}
      aria-label="The Robert A. Hendry Foundation - Home"
    >
      <div className="flex-shrink-0 relative">
        <img
          src={logoSrc}
          alt="The Robert A. Hendry Foundation Logo"
          className={`${imageClassName} object-contain`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const placeholder = e.currentTarget
              .nextElementSibling as HTMLElement;
            if (placeholder) {
              placeholder.style.display = "flex";
            }
          }}
        />
        <div
          className={`${
            isNavbarMark ? imageClassName : "h-10 w-10"
          } bg-primary rounded-full items-center justify-center hidden`}
          style={{ display: "none" }}
        >
          <Heart
            className={`${
              isCompact ? "h-4 w-4" : "h-5 w-5"
            } text-primary-foreground`}
          />
        </div>
      </div>

      {shouldShowText && (
        <div className="flex flex-col">
          {isFooter ? (
            <h3 className={`${textSize} font-semibold ${titleClass} leading-tight`}>
              The Robert A. Hendry Foundation
            </h3>
          ) : (
            <span
              className={`${textSize} font-semibold ${titleClass} leading-tight`}
            >
              The Robert A. Hendry Foundation
            </span>
          )}
          {!isCompact && (
            <p className={`${subtitleSize} ${subtitleClass}`}>
              {isFooter ? footerSubtitle : headerSubtitle}
            </p>
          )}
        </div>
      )}
    </Link>
  );
}
