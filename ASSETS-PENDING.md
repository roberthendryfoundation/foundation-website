# 📸 Pending Assets from Client

**Status:** ⏳ Waiting for client assets

## Assets Needed

### 1. **Logo Files** 🎨

- **Location:** `/foundation.client/public/logo.png` (or `.svg`, `.jpg`)
- **Current:** Placeholder heart icon shown when logo missing
- **Files needed:**
  - `logo.png` or `logo.svg` (recommended: SVG for scalability)
  - Optional: `logo-dark.png` for dark mode variants

**Where it's used:**

- Header navigation
- Footer
- Mobile menu

**Specifications:**

- Recommended size: 200x200px minimum
- Format: PNG (with transparency) or SVG
- Should work on both light and dark backgrounds

---

### 2. **Hero Image** 🖼️

- **Location:** `/foundation.client/public/hero-image.jpg`
- **Current:** Fallback to core values display
- **Where it's used:** Homepage hero section

**Specifications:**

- Recommended size: 1920x1080px (16:9 aspect ratio)
- Format: JPG or WebP
- File size: Under 500KB (optimize before adding)

---

### 3. **About Page Hero Background** 🎨

- **Location:** `/foundation.client/public/about-hero-image.jpg`
- **Current:** Solid background color
- **Where it's used:** About page hero section (subtle background)

**Specifications:**

- Recommended size: 1920x600px
- Format: JPG
- Should be subtle (low opacity overlay applied)

---

### 4. **Robert's Photo** 👤

- **Location:** `/foundation.client/public/robert-photo.jpg`
- **Current:** Placeholder div
- **Where it's used:** About page - Robert's Story section

**Specifications:**

- Recommended size: 400x400px (square)
- Format: JPG or PNG
- Should be a professional headshot

---

### 5. **Team Member Photos** 👥

- **Location:** `/foundation.client/public/team-{name}.jpg`
- **Current:** Generic user icons
- **Where it's used:** About page - Team section

**Files needed:**

- `team-andrew.jpg` (for Andrew Hendry)
- `team-anthony.jpg` (for Anthony Reeder)
- Add more as team grows: `team-{firstname}.jpg`

**Specifications:**

- Recommended size: 300x300px (square)
- Format: JPG or PNG
- Professional headshots

---

### 6. **Story Images** 📖

- **Location:** Uploaded via Sanity CMS
- **Current:** Stories can be added without images
- **Where it's used:** Stories page, story detail pages

**How to add:**

- Use Sanity Studio to upload images when creating stories
- Images are stored in Sanity CDN (no local files needed)

**Specifications:**

- Recommended size: 1200x630px (for featured images)
- Format: JPG or WebP
- Will be automatically optimized by Sanity

---

## Quick Setup Guide

### When Assets Arrive:

1. **Logo:**

   ```bash
   # Place logo in public folder
   cp /path/to/logo.png foundation.client/public/logo.png
   # Or use SVG
   cp /path/to/logo.svg foundation.client/public/logo.svg
   ```

2. **Images:**

   ```bash
   # Place all images in public folder
   cp /path/to/hero-image.jpg foundation.client/public/
   cp /path/to/about-hero-image.jpg foundation.client/public/
   cp /path/to/robert-photo.jpg foundation.client/public/
   cp /path/to/team-*.jpg foundation.client/public/
   ```

3. **Verify:**
   - Run `npm run dev` and check each page
   - Images should appear automatically (no code changes needed)
   - If images don't show, check file names match exactly

---

## Current Fallbacks

The site is designed to work gracefully without images:

- ✅ **Logo:** Shows heart icon placeholder
- ✅ **Hero:** Shows core values instead of image
- ✅ **Team photos:** Shows generic user icons
- ✅ **Stories:** Can be added without images

**The site is fully functional without these assets!**

---

## Image Optimization Tips

Before adding images, optimize them:

1. **Use tools like:**

   - [TinyPNG](https://tinypng.com/) for PNG/JPG
   - [Squoosh](https://squoosh.app/) for WebP
   - [ImageOptim](https://imageoptim.com/) (Mac)

2. **Target file sizes:**

   - Logos: < 50KB
   - Hero images: < 300KB
   - Team photos: < 100KB
   - Story images: < 200KB

3. **Formats:**
   - Use WebP when possible (better compression)
   - PNG for logos (transparency)
   - JPG for photos

---

## Sanity CMS Images

For story images and resource thumbnails:

- Upload directly in Sanity Studio
- No need to add to `/public` folder
- Sanity handles optimization and CDN delivery

---

**Last Updated:** $(date)
**Status:** ⏳ Waiting for client assets
