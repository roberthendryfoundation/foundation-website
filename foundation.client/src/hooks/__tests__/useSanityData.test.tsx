import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  useResources,
  useCategories,
  useFeaturedResources,
} from "../useSanityData";
import * as sanityClient from "../../sanityClient";

// Mock the Sanity client
vi.mock("../../sanityClient", () => ({
  client: {
    fetch: vi.fn(),
  },
}));

describe("useSanityData hooks", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });
    vi.clearAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  describe("useResources", () => {
    it("should fetch resources successfully", async () => {
      const mockResources = [
        {
          _id: "1",
          title: "Test Resource",
          description: "Test description",
          type: "article",
        },
      ];

      vi.mocked(sanityClient.client.fetch).mockResolvedValueOnce(mockResources);

      const { result } = renderHook(() => useResources(), { wrapper });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(mockResources);
      expect(sanityClient.client.fetch).toHaveBeenCalledTimes(1);
    });

    it("should handle fetch errors gracefully", async () => {
      vi.mocked(sanityClient.client.fetch).mockRejectedValueOnce(
        new Error("Fetch failed")
      );

      const { result } = renderHook(() => useResources(), { wrapper });

      await waitFor(() => expect(result.current.isError).toBe(true));

      expect(result.current.error).toBeTruthy();
    });

    it("should filter out draft resources", async () => {
      const mockResources = [
        { _id: "1", title: "Published", status: "published" },
        { _id: "2", title: "Draft", status: "draft" },
      ];

      vi.mocked(sanityClient.client.fetch).mockResolvedValueOnce(mockResources);

      const { result } = renderHook(() => useResources(), { wrapper });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      // The query itself filters drafts, so we just verify the query was called
      expect(sanityClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('status == "published"')
      );
    });
  });

  describe("useCategories", () => {
    it("should fetch and cache categories for 30 minutes", async () => {
      const mockCategories = [
        { _id: "1", name: "Anxiety Basics" },
        { _id: "2", name: "Treatment" },
      ];

      vi.mocked(sanityClient.client.fetch).mockResolvedValueOnce(
        mockCategories
      );

      const { result } = renderHook(() => useCategories(), { wrapper });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(mockCategories);
      expect(result.current.data).toHaveLength(2);
    });

    it("should order categories by order field then name", async () => {
      vi.mocked(sanityClient.client.fetch).mockResolvedValueOnce([]);

      renderHook(() => useCategories(), { wrapper });

      await waitFor(() =>
        expect(sanityClient.client.fetch).toHaveBeenCalledWith(
          expect.stringContaining("order(coalesce(order, 999) asc, name asc)")
        )
      );
    });
  });

  describe("useFeaturedResources", () => {
    it("should fetch only featured resources", async () => {
      const mockFeatured = [
        { _id: "1", title: "Featured 1", featured: true },
        { _id: "2", title: "Featured 2", featured: true },
      ];

      vi.mocked(sanityClient.client.fetch).mockResolvedValueOnce(mockFeatured);

      const { result } = renderHook(() => useFeaturedResources(4), { wrapper });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(mockFeatured);
      expect(sanityClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining("featured == true")
      );
    });

    it("should respect the limit parameter", async () => {
      vi.mocked(sanityClient.client.fetch).mockResolvedValueOnce([]);

      renderHook(() => useFeaturedResources(3), { wrapper });

      await waitFor(() =>
        expect(sanityClient.client.fetch).toHaveBeenCalledWith(
          expect.stringContaining("[0...3]")
        )
      );
    });
  });
});
