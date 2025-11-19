import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { SEO } from "../components/SEO";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Page Not Found - The Robert A. Hendry Foundation"
        description="The page you're looking for couldn't be found. Return to our homepage or browse our resources."
        canonical="/404"
      />
      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-[120px] lg:text-[180px] font-bold text-primary/10 leading-none">
              404
            </h1>
            <div className="relative -mt-16 lg:-mt-24">
              <div className="inline-flex items-center justify-center w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-primary/10 border-4 border-background">
                <Search className="h-10 w-10 lg:h-14 lg:w-14 text-primary" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We couldn't find the page you're looking for. It may have been
              moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate(-1)}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
            <Button size="lg" onClick={() => navigate("/")} className="gap-2">
              <Home className="h-4 w-4" />
              Go to Homepage
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate("/about")}
                className="text-sm text-primary hover:underline"
              >
                About Us
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => navigate("/resources")}
                className="text-sm text-primary hover:underline"
              >
                Resources
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => navigate("/stories")}
                className="text-sm text-primary hover:underline"
              >
                Stories
              </button>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={() => navigate("/contact")}
                className="text-sm text-primary hover:underline"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Crisis Support Banner */}
          <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">In Crisis?</strong> Call or
              text 988 (U.S. Suicide & Crisis Lifeline).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
