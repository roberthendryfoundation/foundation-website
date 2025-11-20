import { describe, it, expect, vi, beforeEach } from "vitest";
import { trackSearch } from "../analytics";

describe("analytics utilities", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock gtag
    (window as Window & { gtag?: ReturnType<typeof vi.fn> }).gtag = vi.fn();
  });

  describe("trackSearch", () => {
    it("should track search events when gtag is available", () => {
      const searchQuery = "anxiety symptoms";
      trackSearch(searchQuery);

      const mockGtag = (window as Window & { gtag?: ReturnType<typeof vi.fn> })
        .gtag;
      expect(mockGtag).toHaveBeenCalledWith("event", "search", {
        search_term: searchQuery,
      });
    });

    it("should not throw when gtag is undefined", () => {
      delete (window as Window & { gtag?: ReturnType<typeof vi.fn> }).gtag;

      expect(() => trackSearch("test")).not.toThrow();
    });

    it("should handle empty search queries", () => {
      trackSearch("");

      const mockGtag = (window as Window & { gtag?: ReturnType<typeof vi.fn> })
        .gtag;
      expect(mockGtag).toHaveBeenCalledWith("event", "search", {
        search_term: "",
      });
    });
  });
});
