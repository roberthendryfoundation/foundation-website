import { createClient } from "@sanity/client";

// Sanity project ID from environment variable
// In production, this must be set. Development fallback for convenience.
const projectId =
  import.meta.env.VITE_SANITY_PROJECT_ID ||
  (import.meta.env.DEV ? "srzuracj" : undefined);

if (!projectId) {
  throw new Error(
    "VITE_SANITY_PROJECT_ID is required. Please add it to your .env file."
  );
}

export const client = createClient({
  projectId: projectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01",
  useCdn: true, // Use CDN for faster, cached responses (public content)
  perspective: "published", // Only fetch published documents
  // token: import.meta.env.VITE_SANITY_TOKEN, // Uncomment for preview/draft access
});
