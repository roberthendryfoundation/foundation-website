// Google Analytics 4 Helper Functions

/**
 * Initialize Google Analytics 4
 * Call this once when the app loads
 */
export const initGoogleAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Only initialize if measurement ID is provided
  if (!measurementId || typeof window === "undefined") {
    if (import.meta.env.DEV) {
      console.log("Google Analytics not initialized (no measurement ID)");
    }
    return;
  }

  // Prevent double initialization
  if (window.gtag) {
    return;
  }

  // Create dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize GA4
  gtag("js", new Date());
  gtag("config", measurementId, {
    page_path: window.location.pathname,
  });

  if (import.meta.env.DEV) {
    console.log("Google Analytics initialized:", measurementId);
  }
};

/**
 * Track a page view
 */
export const trackPageView = (url: string) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (typeof window !== "undefined" && window.gtag && measurementId) {
    window.gtag("config", measurementId, {
      page_path: url,
    });
  }
};

/**
 * Track a custom event
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

/**
 * Track resource view
 */
export const trackResourceView = (resourceId: string, category?: string) => {
  trackEvent("resource_view", {
    resource_id: resourceId,
    category: category || "unknown",
  });
};

/**
 * Track search
 */
export const trackSearch = (searchTerm: string) => {
  trackEvent("search", {
    search_term: searchTerm,
  });
};

/**
 * Track category click
 */
export const trackCategoryClick = (categoryName: string) => {
  trackEvent("category_click", {
    category_name: categoryName,
  });
};

/**
 * Track crisis button click
 */
export const trackCrisisClick = (source: string) => {
  trackEvent("crisis_click", {
    source: source, // 'floating_button', 'footer', 'quick_access'
  });
};

/**
 * Track external link click
 */
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent("external_link_click", {
    url: url,
    link_text: linkText,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    form_name: formName,
  });
};

/**
 * Track button click
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location,
  });
};

/**
 * Track navigation
 */
export const trackNavigation = (destination: string, source: string) => {
  trackEvent("navigation", {
    destination: destination,
    source: source,
  });
};

/**
 * Track resource download/access
 */
export const trackResourceAccess = (
  resourceId: string,
  resourceType: string,
  action: string
) => {
  trackEvent("resource_access", {
    resource_id: resourceId,
    resource_type: resourceType,
    action: action, // 'view', 'download', 'share'
  });
};

/**
 * Track filter usage
 */
export const trackFilterChange = (filterType: string, filterValue: string) => {
  trackEvent("filter_change", {
    filter_type: filterType,
    filter_value: filterValue,
  });
};

/**
 * Track social share
 */
export const trackSocialShare = (
  platform: string,
  contentType: string,
  contentId: string
) => {
  trackEvent("social_share", {
    platform: platform,
    content_type: contentType,
    content_id: contentId,
  });
};

/**
 * Track time on page
 */
export const trackTimeOnPage = (pageUrl: string, timeInSeconds: number) => {
  trackEvent("time_on_page", {
    page_url: pageUrl,
    time_seconds: timeInSeconds,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (pageUrl: string, depthPercentage: number) => {
  trackEvent("scroll_depth", {
    page_url: pageUrl,
    depth_percentage: depthPercentage,
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
