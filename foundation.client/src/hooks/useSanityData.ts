import { useQuery } from "@tanstack/react-query";
import { client } from "../sanityClient";

// Types - Extended with new fields
interface Resource {
  _id: string;
  _createdAt: string;
  title: string;
  description?: string;
  type?: string;
  url?: string;
  fileUrl?: string;
  category?: { _id: string; name: string; icon?: string; color?: string };
  categories?: { _id: string; name: string; icon?: string; color?: string }[];
  tags?: string[];
  featured?: boolean;
  order?: number;
  duration?: string;
  difficulty?: string;
  audience?: string[];
  language?: string;
  accessType?: string;
  contentWarning?: boolean;
  status?: string;
  // Education-focused fields
  learningLevel?: string;
  topicAreas?: string[];
  targetAudience?: string[];
  contentDepth?: string;
  shareable?: boolean;
  slug?: { current: string };
  body?: unknown[];
  // For latest resources display
  publishedAt?: string;
  isExternal?: boolean;
  image?: { url: string; alt?: string };
}

interface Category {
  _id: string;
  name: string;
  icon?: string;
  color?: string;
  slug?: { current: string };
  order?: number;
  featured?: boolean;
}

interface Article {
  _id: string;
  title: string;
  excerpt: string;
  body?: unknown[];
  author: string;
  date: string;
  readTime: number;
  slug: string;
  category?: { _id: string; name: string; icon?: string };
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  photo: string;
  role: string;
  quote: string;
  fullStory?: unknown[];
  category: string;
  featured: boolean;
  showOnHomepage: boolean;
  order?: number;
  dateAdded: string;
  status: string;
}

// Hook: Fetch all resources (now filters out drafts)
export function useResources() {
  return useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const query = `*[_type == "resource" && (status == "published" || !defined(status))] | order(_createdAt desc){
        _id,
        _createdAt,
        title,
        description,
        type,
        "fileUrl": file.asset->url,
        url,
        category->{_id, name, icon, color},
        tags,
        featured,
        order,
        duration,
        difficulty,
        audience,
        language,
        accessType,
        contentWarning,
        status
      }`;
      return client.fetch<Resource[]>(query);
    },
  });
}

// Hook: Fetch resources with pagination
export function useResourcesPaginated(page: number = 0, pageSize: number = 20) {
  return useQuery({
    queryKey: ["resources", "paginated", page, pageSize],
    queryFn: async () => {
      const start = page * pageSize;
      const end = start + pageSize;
      const query = `*[_type == "resource" && (status == "published" || !defined(status))] | order(_createdAt desc)[${start}...${end}]{
        _id,
        _createdAt,
        title,
        description,
        type,
        "fileUrl": file.asset->url,
        url,
        category->{_id, name, icon, color},
        tags,
        featured,
        order,
        duration,
        difficulty,
        audience,
        language,
        accessType,
        contentWarning,
        status
      }`;
      return client.fetch<Resource[]>(query);
    },
  });
}

// Hook: Fetch all categories
export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const query = `*[_type == "category"] | order(coalesce(order, 999) asc, name asc){ 
        _id, 
        name, 
        icon, 
        color, 
        slug, 
        order, 
        featured 
      }`;
      return client.fetch<Category[]>(query);
    },
    staleTime: 30 * 60 * 1000, // Categories change rarely, cache for 30 minutes
  });
}

// Hook: Fetch articles (blog posts)
export function useArticles(limit?: number) {
  return useQuery({
    queryKey: ["articles", limit],
    queryFn: async () => {
      const limitClause = limit ? `[0...${limit}]` : "";
      const query = `*[_type == "article"] | order(date desc)${limitClause}{
        _id,
        title,
        excerpt,
        author,
        date,
        readTime,
        "slug": slug.current,
        category->{_id, name, icon},
        tags
      }`;
      return client.fetch<Article[]>(query);
    },
  });
}

// Hook: Fetch single article by slug
export function useArticle(slug: string | undefined) {
  return useQuery({
    queryKey: ["article", slug],
    queryFn: async () => {
      if (!slug) return null;
      const query = `*[_type == "article" && slug.current == $slug][0]{
        title,
        excerpt,
        body,
        author,
        date,
        readTime,
        tags,
        category->{name},
        seoTitle,
        seoDescription
      }`;
      return client.fetch<Article | null>(query, { slug });
    },
    enabled: !!slug, // Only run query if slug exists
  });
}

// Hook: Fetch resources by category
export function useResourcesByCategory(categoryName: string | undefined) {
  return useQuery({
    queryKey: ["resources", "category", categoryName],
    queryFn: async () => {
      if (!categoryName) return [];
      const query = `*[_type == "resource" && (status == "published" || !defined(status)) && category->name match "${categoryName}"] | order(_createdAt desc){
        _id,
        _createdAt,
        title,
        description,
        type,
        "fileUrl": file.asset->url,
        url,
        category->{_id, name, icon, color},
        tags,
        featured,
        order,
        duration,
        difficulty,
        audience,
        language,
        accessType,
        contentWarning,
        status
      }`;
      return client.fetch<Resource[]>(query);
    },
    enabled: !!categoryName,
  });
}

// Fetch featured resources for homepage widget
export function useFeaturedResources(limit: number = 4) {
  return useQuery({
    queryKey: ["featuredResources", limit],
    queryFn: async () => {
      const query = `*[_type == "resource" && featured == true && (status == "published" || !defined(status))] | order(order asc, _createdAt desc) [0...${limit}] {
        _id,
        _createdAt,
        title,
        description,
        slug,
        type,
        category->{_id, name, icon, color},
        learningLevel,
        contentDepth,
        topicAreas,
        shareable,
        featured
      }`;
      return client.fetch<Resource[]>(query);
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Fetch a single resource by slug for detail page
export function useResourceBySlug(slug: string) {
  return useQuery({
    queryKey: ["resource", slug],
    queryFn: async () => {
      const query = `*[_type == "resource" && slug.current == $slug && (status == "published" || !defined(status))][0] {
        _id,
        _createdAt,
        title,
        description,
        slug,
        type,
        "fileUrl": file.asset->url,
        url,
        category->{_id, name, icon, color},
        tags,
        learningLevel,
        topicAreas,
        targetAudience,
        contentDepth,
        shareable,
        featured,
        body
      }`;
      return client.fetch<Resource>(query, { slug });
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    enabled: !!slug,
  });
}

/**
 * Hook to fetch related resources based on topic areas and learning level
 */
export function useRelatedResources(
  resourceId: string,
  topicAreas?: string[],
  learningLevel?: string,
  limit = 3
) {
  return useQuery({
    queryKey: [
      "relatedResources",
      resourceId,
      topicAreas,
      learningLevel,
      limit,
    ],
    queryFn: async () => {
      // Find resources with similar topics or same learning level
      const topicMatch =
        topicAreas && topicAreas.length > 0
          ? `count(topicAreas[@ in $topicAreas]) > 0`
          : "true";

      const levelMatch = learningLevel
        ? `|| learningLevel == $learningLevel`
        : "";

      const query = `*[
        _type == "resource" 
        && _id != $resourceId 
        && (status == "published" || !defined(status))
        && (${topicMatch} ${levelMatch})
      ] | order(_createdAt desc) [0...${limit}] {
        _id,
        _createdAt,
        title,
        description,
        type,
        slug,
        url,
        learningLevel,
        topicAreas,
        contentDepth
      }`;

      return client.fetch<Resource[]>(query, {
        resourceId,
        topicAreas: topicAreas || [],
        learningLevel,
      });
    },
    enabled: !!resourceId,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Hook: Fetch latest resources (for homepage/other pages)
export function useLatestResources(
  limit = 3,
  categoryIds?: string[],
  resourceType?: string,
  categorySlugs?: string[]
) {
  return useQuery({
    queryKey: [
      "latestResources",
      limit,
      categoryIds,
      resourceType,
      categorySlugs,
    ],
    queryFn: async () => {
      // Build dynamic filters
      let filters = `_type == "resource" && (status == "published" || !defined(status))`;

      // Add category filter by ID if provided
      if (categoryIds && categoryIds.length > 0) {
        filters += ` && category._ref in $categoryIds`;
      }

      // Add category filter by slug if provided
      if (categorySlugs && categorySlugs.length > 0) {
        filters += ` && category->slug.current in $categorySlugs`;
      }

      // Add resource type filter if provided
      if (resourceType) {
        filters += ` && type == $resourceType`;
      }

      const query = `*[${filters}] | order(coalesce(publishedAt, _createdAt) desc) [0...${limit}] {
        _id,
        _createdAt,
        title,
        description,
        type,
        slug,
        url,
        "isExternal": defined(url) && url != "",
        publishedAt,
        learningLevel,
        topicAreas,
        contentDepth,
        categories[]->{_id, name, icon, color},
        "image": {
          "url": image.asset->url + "?w=400&h=300&fit=crop&auto=format",
          "alt": image.alt
        }
      }`;

      return client.fetch<Resource[]>(query, {
        categoryIds: categoryIds || [],
        categorySlugs: categorySlugs || [],
        resourceType,
      });
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}

// Hook: Fetch resource counts by learning level
export function useLearningLevelCounts() {
  return useQuery({
    queryKey: ["learningLevelCounts"],
    queryFn: async () => {
      const query = `{
        "beginner": count(*[_type == "resource" && learningLevel == "beginner" && (status == "published" || !defined(status))]),
        "intermediate": count(*[_type == "resource" && learningLevel == "intermediate" && (status == "published" || !defined(status))]),
        "advanced": count(*[_type == "resource" && learningLevel == "advanced" && (status == "published" || !defined(status))])
      }`;
      return client.fetch<{
        beginner: number;
        intermediate: number;
        advanced: number;
      }>(query);
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}

// Hook: Fetch testimonials
export function useTestimonials(options?: {
  featured?: boolean;
  showOnHomepage?: boolean;
  category?: string;
  limit?: number;
}) {
  return useQuery({
    queryKey: ["testimonials", options],
    queryFn: async () => {
      const conditions = ['_type == "testimonial"', 'status == "published"'];

      if (options?.featured) {
        conditions.push("featured == true");
      }

      if (options?.showOnHomepage) {
        conditions.push("showOnHomepage == true");
      }

      if (options?.category && options.category !== "all") {
        conditions.push(`category == "${options.category}"`);
      }

      const limitClause = options?.limit ? `[0...${options.limit}]` : "";

      const query = `*[${conditions.join(
        " && "
      )}] | order(coalesce(order, 999) asc, dateAdded desc) ${limitClause} {
        _id,
        name,
        "photo": photo.asset->url,
        role,
        quote,
        fullStory,
        category,
        featured,
        showOnHomepage,
        order,
        dateAdded,
        status
      }`;

      return client.fetch<Testimonial[]>(query);
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}

// Story interface
export interface Story {
  _id: string;
  title: string;
  summary?: string;
  slug?: { current: string };
  wordCount?: number;
  featured?: boolean;
  publishedAt?: string;
  _createdAt?: string;
  themes?: string[];
  image?: {
    url: string;
    alt?: string;
  };
}

// Hook: Fetch stories
export function useStories(options?: { limit?: number; featured?: boolean }) {
  return useQuery({
    queryKey: ["stories", options],
    queryFn: async () => {
      const conditions = ['_type == "story"', 'status == "published"'];

      if (options?.featured) {
        conditions.push("featured == true");
      }

      const limitClause = options?.limit ? `[0...${options.limit}]` : "";

      const query = `*[${conditions.join(
        " && "
      )}] | order(coalesce(publishedAt, _createdAt) desc) ${limitClause} {
        _id,
        title,
        summary,
        slug,
        wordCount,
        themes,
        featured,
        publishedAt,
        _createdAt,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        }
      }`;

      return client.fetch<Story[]>(query);
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}

// Hook: Fetch single story by slug
export function useStoryBySlug(slug: string) {
  return useQuery({
    queryKey: ["story", slug],
    queryFn: async () => {
      if (!slug) return null;
      const query = `*[_type == "story" && slug.current == $slug && status == "published"][0] {
        _id,
        title,
        summary,
        slug,
        wordCount,
        themes,
        featured,
        publishedAt,
        _createdAt,
        body,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        }
      }`;
      return client.fetch<Story & { body?: unknown[] }>(query, { slug });
    },
    staleTime: 30 * 60 * 1000, // 30 minutes
    enabled: !!slug,
  });
}

// Export types for use in components
export type { Resource, Category, Article };
