# 🔧 ENVIRONMENT SETUP GUIDE

## Required Environment Variables

Create a `.env` file in `/foundation.client/` with these variables:

```env
# ===== SANITY CMS =====
VITE_SANITY_PROJECT_ID=your-project-id-here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# ===== ANALYTICS =====
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# ===== SITE CONFIGURATION =====
VITE_SITE_URL=https://robertahendryfoundation.org

# ===== CONTACT FORM =====
VITE_FORMSPREE_ID=your-formspree-id-here

# ===== ERROR TRACKING (Optional) =====
# VITE_SENTRY_DSN=your-sentry-dsn-here
```

## How to Get Values

### Sanity CMS

1. Go to https://sanity.io/manage
2. Select your project
3. Copy `Project ID`
4. Dataset is usually `production`

### Google Analytics

1. Go to https://analytics.google.com/
2. Admin → Data Streams
3. Copy Measurement ID (starts with G-)

### Formspree

1. Go to https://formspree.io/
2. Create new form
3. Copy form ID

### Site URL

Your production domain (e.g., https://robertahendryfoundation.org)

## Quick Setup

```bash
cd foundation.client
cp .env.example .env  # If .env.example exists
# OR create .env manually and paste values above
nano .env  # Edit and add your values
```

## Important Notes

- ✅ `.env` is in `.gitignore` (never commit it!)
- ✅ All `VITE_*` variables are exposed to client
- ✅ Restart dev server after changing variables
- ❌ Never put secret API keys in `VITE_*` variables
