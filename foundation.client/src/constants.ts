/**
 * Application-wide constants
 * Centralized values for consistency and easy maintenance
 */

// ===== CACHE & DATA FETCHING =====
export const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
export const CACHE_DURATION_SHORT = 2 * 60 * 1000; // 2 minutes
export const CACHE_DURATION_LONG = 10 * 60 * 1000; // 10 minutes

// ===== PAGINATION =====
export const DEFAULT_PAGE_SIZE = 12; // Resources per page
export const RESOURCES_PER_PAGE_OPTIONS = [12, 24, 48, 96];

// ===== SEARCH & FILTERING =====
export const SEARCH_DEBOUNCE_MS = 300; // Milliseconds to wait before searching
export const MIN_SEARCH_LENGTH = 2; // Minimum characters to trigger search

// ===== ANIMATIONS =====
export const ANIMATION_DURATION = 300; // Standard animation duration in ms
export const ANIMATION_DURATION_FAST = 150;
export const ANIMATION_DURATION_SLOW = 500;

// ===== SCROLL =====
export const SCROLL_TO_TOP_THRESHOLD = 500; // Pixels scrolled before showing "back to top" button
export const SMOOTH_SCROLL_DURATION = 800; // Milliseconds for smooth scroll

// ===== BREAKPOINTS (must match Tailwind config) =====
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// ===== LIMITS =====
export const MAX_TESTIMONIALS_HOMEPAGE = 3;
export const MAX_FEATURED_RESOURCES = 4;
export const MAX_LATEST_RESOURCES = 6;
export const MAX_RELATED_RESOURCES = 3;
export const MAX_UPLOAD_SIZE_MB = 10;

// ===== TEXT LIMITS =====
export const MAX_TESTIMONIAL_LENGTH = 500;
export const MAX_TITLE_LENGTH = 200;
export const MAX_DESCRIPTION_LENGTH = 1000;

// ===== TIMEOUTS =====
export const TOAST_DURATION = 5000; // Toast notification display time
export const MODAL_ANIMATION_DURATION = 200;
export const TOOLTIP_DELAY = 500; // Delay before showing tooltip

// ===== CONTACT FORM =====
export const RATE_LIMIT_SUBMISSIONS = 3; // Max submissions
export const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // Per hour (in milliseconds)

// ===== ANALYTICS =====
export const TRACK_SCROLL_DEPTH = [25, 50, 75, 100]; // Percentage thresholds

// ===== URLS & LINKS =====
export const CRISIS_HOTLINE = "988";
export const LEGAL_DISCLAIMER =
  "This website is for information only and is not a substitute for professional care. If you are in crisis, call or text 988 (U.S.). We do not provide medical advice, diagnosis, or treatment.";
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/yourhandle", // Update with actual links
  facebook: "https://facebook.com/yourpage",
  linkedin: "https://linkedin.com/company/yourcompany",
  instagram: "https://instagram.com/yourhandle",
} as const;

// ===== EXTERNAL SERVICES =====
export const SANITY_API_VERSION = "2024-01-01";
export const DEFAULT_DATASET = "production";

// ===== RESOURCE TYPES =====
export const RESOURCE_TYPES = {
  ARTICLE: "article",
  VIDEO: "video",
  AUDIO: "audio",
  PDF: "pdf",
  LINK: "link",
  TOOL: "tool",
  COURSE: "course",
  INFOGRAPHIC: "infographic",
} as const;

// ===== LEARNING LEVELS =====
export const LEARNING_LEVELS = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
} as const;

// ===== CONTENT DEPTH =====
export const CONTENT_DEPTH = {
  QUICK: "quick",
  ARTICLE: "article",
  DEEP: "deep",
  RESEARCH: "research",
} as const;

// ===== STATUS =====
export const STATUS = {
  PUBLISHED: "published",
  DRAFT: "draft",
  ARCHIVED: "archived",
} as const;

// ===== Z-INDEX LAYERS =====
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  NOTIFICATION: 1080,
} as const;

// ===== ERROR MESSAGES =====
export const ERROR_MESSAGES = {
  GENERIC: "Something went wrong. Please try again later.",
  NETWORK: "Unable to connect. Please check your internet connection.",
  NOT_FOUND: "The requested resource was not found.",
  FORM_VALIDATION: "Please check your input and try again.",
  RATE_LIMIT: "Too many attempts. Please try again later.",
} as const;

// ===== SUCCESS MESSAGES =====
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: "Thank you! Your message has been sent successfully.",
  COPIED: "Copied to clipboard!",
  SAVED: "Saved successfully!",
} as const;

// Type exports for TypeScript
export type ResourceType = (typeof RESOURCE_TYPES)[keyof typeof RESOURCE_TYPES];
export type LearningLevel =
  (typeof LEARNING_LEVELS)[keyof typeof LEARNING_LEVELS];
export type ContentDepth = (typeof CONTENT_DEPTH)[keyof typeof CONTENT_DEPTH];
export type Status = (typeof STATUS)[keyof typeof STATUS];
