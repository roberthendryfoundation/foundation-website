import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log errors in development, or in production if Sentry is not available
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // Error tracking can be enabled via Sentry (see utils/sentry.ts)
    // Sentry.captureException(error, { extra: errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-destructive/10 rounded-full p-4 w-fit mx-auto mb-6">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>

            <h1 className="text-2xl font-semibold mb-4 text-foreground">
              Something went wrong
            </h1>

            <p className="text-muted-foreground mb-6">
              We're sorry, but something unexpected happened. Please try
              refreshing the page or return home.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-destructive mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs bg-muted p-4 rounded overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {"\n\n"}
                  {this.state.error.stack}
                </pre>
              </details>
            )}

            <div className="flex gap-4 justify-center">
              <Button onClick={this.handleReset} variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button onClick={() => (window.location.href = "/")}>
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>In crisis?</strong> Call or text{" "}
                <a
                  href="tel:988"
                  className="text-primary font-semibold hover:underline"
                >
                  988
                </a>{" "}
                (U.S.) for immediate support.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional component wrapper for easier use
export function ErrorBoundaryWrapper({ children, fallback }: Props) {
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
}
