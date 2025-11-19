import { describe, it, expect, vi, beforeEach } from "vitest";
import { trackSearch } from "../analytics";

describe("analytics utilities", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock gtag
    (window as any).gtag = vi.fn();
  });

  describe("trackSearch", () => {
    it("should track search events when gtag is available", () => {
      const searchQuery = "anxiety symptoms";
      trackSearch(searchQuery);

      expect((window as any).gtag).toHaveBeenCalledWith("event", "search", {
        search_term: searchQuery,
      });
    });

    it("should not throw when gtag is undefined", () => {
      delete (window as any).gtag;

      expect(() => trackSearch("test")).not.toThrow();
    });

    it("should handle empty search queries", () => {
      trackSearch("");

      expect((window as any).gtag).toHaveBeenCalledWith("event", "search", {
        search_term: "",
      });
    });
  });
});

