import { useState } from "react";
import { Button } from "./ui/button";
import {
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  Link2,
  Check,
} from "lucide-react";
import { trackSocialShare } from "../utils/analytics";

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export function SocialShare({
  url,
  title,
  description,
  className = "",
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const fullUrl = url.startsWith("http")
    ? url
    : `https://robertahendryfoundation.org${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const handleShare = (platform: string) => {
    trackSocialShare(platform, "resource", url);

    if (platform === "copy") {
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(
        shareLinks[platform as keyof typeof shareLinks],
        "_blank",
        "width=600,height=400"
      );
    }

    setShowMenu(false);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowMenu(!showMenu)}
        className="gap-2"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>

      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMenu(false)}
          />

          {/* Share Menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border z-50 py-2">
            <button
              onClick={() => handleShare("twitter")}
              className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-3 transition-colors"
            >
              <Twitter className="h-4 w-4 text-[#1DA1F2]" />
              Twitter / X
            </button>

            <button
              onClick={() => handleShare("facebook")}
              className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-3 transition-colors"
            >
              <Facebook className="h-4 w-4 text-[#1877F2]" />
              Facebook
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-3 transition-colors"
            >
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              LinkedIn
            </button>

            <button
              onClick={() => handleShare("email")}
              className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-3 transition-colors"
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email
            </button>

            <div className="border-t border-border my-1" />

            <button
              onClick={() => handleShare("copy")}
              className="w-full px-4 py-2 text-left text-sm hover:bg-muted flex items-center gap-3 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Link2 className="h-4 w-4 text-muted-foreground" />
                  Copy Link
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
