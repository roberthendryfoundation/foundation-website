/**
 * Sentry Error Tracking Configuration
 *
 * This file initializes Sentry for error tracking in production.
 * Sentry is only loaded if VITE_SENTRY_DSN is configured.
 *
 * Note: @sentry/react is an optional dependency. Install with:
 * npm install @sentry/react
 */

export async function initSentry() {
  // Only initialize Sentry in production with a valid DSN
  const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
  const environment = import.meta.env.MODE;

  if (!sentryDsn || environment === "development") {
    // Sentry not initialized in development or without DSN
    if (import.meta.env.DEV) {
      console.log("Sentry not initialized (no DSN or development environment)");
    }
    return;
  }

  try {
    // Dynamic import to avoid bundling Sentry if not needed
    // @ts-expect-error - @sentry/react is optional, install only if needed
    const Sentry = await import("@sentry/react");

    Sentry.init({
      dsn: sentryDsn,
      environment: environment,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],

      // Performance Monitoring
      tracesSampleRate: environment === "production" ? 0.1 : 1.0,

      // Session Replay
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,

      // Filter out specific errors
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      beforeSend(event: any, hint: any): any {
        // Don't send errors in development
        if (environment === "development") {
          return null;
        }

        // Filter out common benign errors
        const error = hint.originalException;
        if (error && typeof error === "object" && "message" in error) {
          const message = String(error.message).toLowerCase();

          // Ignore network errors (users going offline, etc.)
          if (
            message.includes("network error") ||
            message.includes("failed to fetch") ||
            message.includes("networkerror")
          ) {
            return null;
          }

          // Ignore ResizeObserver errors (common browser quirk)
          if (message.includes("resizeobserver")) {
            return null;
          }
        }

        return event;
      },
    });

    // Only log in development
    if (import.meta.env.DEV) {
      console.log("Sentry initialized successfully");
    }
  } catch (error) {
    // Only log errors in development
    if (import.meta.env.DEV) {
      console.error("Failed to initialize Sentry:", error);
    }
  }
}
