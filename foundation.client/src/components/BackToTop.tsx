import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { SCROLL_TO_TOP_THRESHOLD } from "../constants";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > SCROLL_TO_TOP_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
