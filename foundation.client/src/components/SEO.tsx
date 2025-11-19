import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function SEO({
  title = "The Robert A. Hendry Foundation - Action-Based Anxiety Nonprofit",
  description = "A 501(c)(3) nonprofit that identifies, collaborates on, and completes projects to help people with anxiety. Evidence-based education and real change through action.",
  keywords = "anxiety nonprofit, anxiety foundation, anxiety projects, mental health nonprofit, action-based foundation, anxiety education, anxiety awareness, Robert Hendry, collaborative projects",
  ogImage = "/og-image.png",
  ogType = "website",
  canonical,
}: SEOProps) {
  const siteUrl =
    import.meta.env.VITE_SITE_URL || "https://hendryanxietyfoundation.org";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="The Robert A. Hendry Foundation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="The Robert A. Hendry Foundation" />

      {/* Mental Health Specific */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </Helmet>
  );
}
