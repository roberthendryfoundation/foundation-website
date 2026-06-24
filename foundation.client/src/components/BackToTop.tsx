import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { SCROLL_TO_TOP_THRESHOLD } from "../constants";
import { cn } from "./ui/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isResourcesPage = location.pathname === "/resources";
  const [topicBarVisible, setTopicBarVisible] = useState(false);

  useEffect(() => {
    const handleTopicBar = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setTopicBarVisible(!!customEvent.detail);
    };
    window.addEventListener("resourcesTopicBar", handleTopicBar);
    return () => window.removeEventListener("resourcesTopicBar", handleTopicBar);
  }, []);

  useEffect(() => {
    setTopicBarVisible(false);
  }, [location.pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > SCROLL_TO_TOP_THRESHOLD);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed z-40 flex h-11 w-11 items-center justify-center rounded-full",
        "bg-primary/90 text-primary-foreground shadow-lg ring-1 ring-white/20 backdrop-blur",
        "transition duration-300 hover:bg-primary",
        "right-5 sm:right-6 md:h-12 md:w-12",
        isAboutPage
          ? "bottom-5 sm:bottom-6"
          : isResourcesPage && topicBarVisible
            ? "bottom-40 sm:bottom-6"
            : "bottom-24 sm:bottom-6",
        "animate-fade-up"
      )}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
