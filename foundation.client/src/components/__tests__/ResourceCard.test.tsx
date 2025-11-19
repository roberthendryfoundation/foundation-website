import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "../../test/testUtils";
import { ResourceCard } from "../ResourceCard";

describe("ResourceCard", () => {
  const mockResource = {
    _id: "1",
    _createdAt: "2024-01-01",
    title: "Understanding Anxiety",
    description: "A comprehensive guide to understanding anxiety disorders",
    type: "article",
    slug: { current: "understanding-anxiety" },
    learningLevel: "beginner",
    contentDepth: "article",
    topicAreas: ["what_is_anxiety", "types_of_anxiety"],
  };

  it("should render resource title and description", () => {
    renderWithProviders(<ResourceCard resource={mockResource} />);

    expect(screen.getByText("Understanding Anxiety")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A comprehensive guide to understanding anxiety disorders"
      )
    ).toBeInTheDocument();
  });

  it("should render as a link when slug is provided", () => {
    renderWithProviders(<ResourceCard resource={mockResource} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/resources/understanding-anxiety");
  });

  it("should not render as a link when slug is missing", () => {
    const resourceWithoutSlug = { ...mockResource, slug: undefined };
    renderWithProviders(<ResourceCard resource={resourceWithoutSlug} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Understanding Anxiety")).toBeInTheDocument();
  });

  it("should display content depth time estimation", () => {
    renderWithProviders(<ResourceCard resource={mockResource} />);

    expect(screen.getByText("15 min")).toBeInTheDocument();
  });

  it("should display topic count", () => {
    renderWithProviders(<ResourceCard resource={mockResource} />);

    expect(screen.getByText("• 2 topics")).toBeInTheDocument();
  });

  it("should show correct action text for different resource types", () => {
    const videoResource = { ...mockResource, type: "video" };
    const { rerender } = renderWithProviders(
      <ResourceCard resource={videoResource} />
    );

    expect(screen.getByText("Watch video")).toBeInTheDocument();

    const pdfResource = { ...mockResource, type: "pdf" };
    rerender(<ResourceCard resource={pdfResource} />);

    expect(screen.getByText("View PDF")).toBeInTheDocument();
  });

  it("should handle missing description gracefully", () => {
    const resourceWithoutDesc = { ...mockResource, description: undefined };
    renderWithProviders(<ResourceCard resource={resourceWithoutDesc} />);

    expect(screen.getByText("Understanding Anxiety")).toBeInTheDocument();
    expect(screen.queryByText(/comprehensive guide/)).not.toBeInTheDocument();
  });

  it("should apply animation delay based on index", () => {
    const { container } = renderWithProviders(
      <ResourceCard resource={mockResource} index={2} />
    );

    const link = container.querySelector("a");
    expect(link).toHaveStyle({ animationDelay: "100ms" });
  });
});
