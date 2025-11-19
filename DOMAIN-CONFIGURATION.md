# 🌐 Domain Configuration

## Primary Domain

**hendryanxietyfoundation.org**

## Alternative Domain

**anxietymatters.org**

## Current Configuration

The site is currently configured to use **hendryanxietyfoundation.org** as the primary domain.

### Where URLs Are Used

1. **SEO Component** (`src/components/SEO.tsx`)

   - Default canonical URLs
   - Open Graph URLs
   - Twitter Card URLs
   - Uses `VITE_SITE_URL` environment variable (falls back to hendryanxietyfoundation.org)

2. **Social Sharing** (`src/components/SocialShare.tsx`)

   - Share URLs for social media
   - Uses `VITE_SITE_URL` environment variable

3. **Sitemap** (`public/sitemap.xml`)

   - All page URLs use hendryanxietyfoundation.org
   - Update if using different domain

4. **Robots.txt** (`public/robots.txt`)

   - Sitemap reference uses hendryanxietyfoundation.org

5. **Email Addresses**
   - `roberthendryfoundation@gmail.com` (used in Privacy and Terms pages)

## How to Switch Domains

### Option 1: Use Environment Variable (Recommended)

Set `VITE_SITE_URL` in your `.env` file:

```env
# For hendryanxietyfoundation.org
VITE_SITE_URL=https://hendryanxietyfoundation.org

# OR for anxietymatters.org
VITE_SITE_URL=https://anxietymatters.org
```

This will automatically update:

- SEO canonical URLs
- Social sharing URLs
- Open Graph tags

### Option 2: Update Static Files

If you need to use a different domain, update:

1. **`public/sitemap.xml`** - Replace all instances of `hendryanxietyfoundation.org`
2. **`public/robots.txt`** - Update sitemap URL
3. **Email addresses** - Update in `PrivacyPage.tsx` and `TermsPage.tsx`

## Domain Decision

**You need to decide which domain to use:**

- `hendryanxietyfoundation.org` (currently configured)
- `anxietymatters.org` (alternative)

Once decided:

1. Set `VITE_SITE_URL` in production environment
2. Update `sitemap.xml` and `robots.txt` if needed
3. Update email addresses if using different domain
4. Configure DNS and SSL certificate

## Email Configuration

Current email: `roberthendryfoundation@gmail.com`

This email is used throughout the site for contact information.

**Files where email is used:**

- `foundation.client/src/pages/PrivacyPage.tsx`
- `foundation.client/src/pages/TermsPage.tsx`
- `README.md`

## DNS & SSL Setup

### For hendryanxietyfoundation.org:

1. Point DNS A record to your hosting provider
2. Configure SSL certificate
3. Set `VITE_SITE_URL=https://hendryanxietyfoundation.org` in production

### For anxietymatters.org:

1. Point DNS A record to your hosting provider
2. Configure SSL certificate
3. Set `VITE_SITE_URL=https://anxietymatters.org` in production
4. Update static files (sitemap.xml, robots.txt, email addresses)

## Testing

After deployment, verify:

- ✅ Canonical URLs are correct
- ✅ Social sharing works
- ✅ Sitemap is accessible
- ✅ Email links work
- ✅ SSL certificate is valid

---

**Last Updated:** $(date)
**Primary Domain:** hendryanxietyfoundation.org
**Alternative:** anxietymatters.org
