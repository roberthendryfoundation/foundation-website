# 🫀 The Robert A. Hendry Foundation

> A 501(c)(3) nonprofit building an action-based anxiety foundation. Started in memory of Robert A. Hendry.

**Website:** https://hendryanxietyfoundation.org (or https://anxietymatters.org)  
**Status:** ✅ Production Ready  
**Tech Stack:** React 19 + TypeScript + Vite + Sanity CMS + .NET 8

---

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Recent Updates](#recent-updates)
- [Documentation](#documentation)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ and npm
- **.NET** 8.0+
- **Sanity account** (for CMS)

### Installation

```bash
# Clone repository
git clone [repo-url]
cd foundation-1

# Install frontend dependencies
cd foundation.client
npm install

# Install Sanity Studio dependencies
cd ../nonprofit-resource-hub
npm install

# Configure environment
cd foundation.client
# Create .env file (see docs/ENVIRONMENT-SETUP.md for template)
# Add your VITE_SANITY_PROJECT_ID, VITE_FORMSPREE_ID, etc.
```

### Run Development Server

```bash
# Frontend (React)
cd foundation.client
npm run dev -- --host 127.0.0.1 --port 5174

# Sanity Studio
cd nonprofit-resource-hub
npm run dev

# Backend (.NET)
cd foundation.Server
dotnet run
```

**Access:**

- Frontend: `http://127.0.0.1:5174`
- Sanity Studio: `http://localhost:3333`
- API: `http://localhost:5000`

---

## 📁 Project Structure

```
foundation-1/
├── foundation.client/          # React frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Page components
│   │   ├── sections/           # Page sections (home, about, etc.)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   └── index.css           # Global styles (Tailwind)
│   ├── public/                 # Static assets
│   └── dist/                   # Build output
│
├── foundation.Server/          # .NET backend API
│   ├── Program.cs              # Main entry point
│   └── appsettings.json        # Configuration
│
├── nonprofit-resource-hub/     # Sanity CMS Studio
│   ├── schemaTypes/            # Content schemas
│   │   ├── resource.ts         # Resource content type
│   │   ├── category.ts         # Category content type
│   │   ├── story.ts            # Story content type
│   │   └── testimonial.ts      # Testimonial content type
│   ├── structure.ts            # Custom desk structure
│   ├── components/             # Sanity components
│   └── sanity.config.ts        # Sanity configuration
│
└── docs/                       # Documentation
    ├── ENVIRONMENT-SETUP.md    # Environment setup guide
    ├── CATEGORIES-QUICK-REFERENCE.md
    └── CATEGORY-CREATION-GUIDE.md
```

---

## 🎯 Recent Updates

### November 2024 - Production Ready

✅ **Production Optimizations** - Code splitting, build optimizations  
✅ **Security Hardening** - Dev-only fallbacks, secure environment handling  
✅ **Domain Configuration** - Updated to hendryanxietyfoundation.org  
✅ **Sanity Studio Enhancements** - Custom desk structure, document badges  
✅ **Image Support** - Ready for client assets (logos, photos, images)  
✅ **Clean Codebase** - Removed unused files, optimized structure

### Key Features

✅ **10 Pages** - Home, About, Resources, Stories, Contact, and more  
✅ **31 Sections** - Modular, reusable page sections  
✅ **Advanced Search** - Keyword search with filters and categories  
✅ **Sanity CMS** - Custom structure for content editors  
✅ **Formspree Integration** - Contact form handling  
✅ **SEO Optimized** - Meta tags, sitemap, robots.txt

---

## 📚 Documentation

### For Developers

| Document                                             | Description                     |
| ---------------------------------------------------- | ------------------------------- |
| [`ENVIRONMENT-SETUP.md`](docs/ENVIRONMENT-SETUP.md)  | Environment variables and setup |
| [`DOMAIN-CONFIGURATION.md`](DOMAIN-CONFIGURATION.md) | Domain setup and configuration  |

### For Content Editors

| Document                                                              | Description                  |
| --------------------------------------------------------------------- | ---------------------------- |
| [`CATEGORIES-QUICK-REFERENCE.md`](docs/CATEGORIES-QUICK-REFERENCE.md) | Category system overview     |
| [`CATEGORY-CREATION-GUIDE.md`](docs/CATEGORY-CREATION-GUIDE.md)       | How to create new categories |

### For Asset Management

See the code comments in components for image placement guidance. Key locations:

- Logo: `/public/logo.png` (or `.svg`, `.jpg`)
- Hero images: `/public/hero-image.jpg`, `/public/about-hero-image.jpg`
- Robert's photo: `/public/robert-photo.jpg`

---

## 🛠️ Development

### Frontend (React + TypeScript + Vite)

```bash
cd foundation.client

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint

# Testing
npm run test
npm run test:coverage
```

### Sanity Studio

```bash
cd nonprofit-resource-hub

# Development
npm run dev

# Deploy studio
npm run deploy
```

### Backend (.NET)

```bash
cd foundation.Server

# Development
dotnet run

# Build
dotnet build

# Production
dotnet run --configuration Release
```

---

## 🧪 Testing

### Unit Tests

```bash
cd foundation.client

# Run tests
npm test

# Run with UI
npm run test:ui

# Run with coverage
npm run test:coverage
```

### Test Coverage

Test infrastructure is set up with Vitest and React Testing Library. Example tests are included for components, hooks, and utilities.

---

## 🚀 Deployment

### Frontend

**Build:**

```bash
cd foundation.client
npm run build
# Output: dist/
```

**Deploy to Netlify:**

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables (see below)

### Backend

**Deploy to Azure:**

```bash
cd foundation.Server
dotnet publish -c Release
```

### Environment Variables

**Required for Frontend:**

```env
# Sanity CMS (Required)
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01

# Site Configuration (Required)
VITE_SITE_URL=https://hendryanxietyfoundation.org

# Contact Form (Required)
VITE_FORMSPREE_ID=your-formspree-id

# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Error Tracking (Optional)
# VITE_SENTRY_DSN=your-sentry-dsn
```

**Required for Backend:**

```env
ASPNETCORE_ENVIRONMENT=Production
AllowedOrigins=https://yourdomain.com
```

See [`ENVIRONMENT-SETUP.md`](docs/ENVIRONMENT-SETUP.md) for complete list.

---

## 🤝 Contributing

### Branch Strategy

- `main` - Production code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches

### Commit Convention

```
feat: Add keyboard navigation to search
fix: Resolve mobile touch target issues
docs: Update README with new features
test: Add tests for GlobalSearch component
refactor: Clean up CSS comments
```

### Pull Request Process

1. Create feature branch from `develop`
2. Make changes and add tests
3. Run linting: `npm run lint`
4. Run tests: `npm test`
5. Create PR to `develop`
6. Wait for CI/CD checks to pass
7. Request review

---

## 📊 Key Features

### For Users

- **Resource Hub** - Educational content about anxiety and support
- **Advanced Search** - Keyword search with filters (category, type, learning level)
- **Stories & Voices** - Community stories and testimonials
- **Mobile Optimized** - Fully responsive, touch-friendly interface
- **Accessibility** - WCAG AA compliant, keyboard navigation, screen reader support
- **Crisis Support** - Quick access to crisis resources (988, Crisis Text Line)

### For Developers

- **Modern Stack** - React 19, TypeScript 5, Vite 7, Tailwind CSS
- **Headless CMS** - Sanity with custom desk structure
- **Type Safety** - Full TypeScript coverage, strict mode
- **Testing** - Vitest + React Testing Library
- **Performance** - Code splitting, lazy loading, optimized builds
- **Production Ready** - Security headers, SEO optimization, error tracking

### For Content Editors

- **Custom Sanity Studio** - Organized desk structure with filtered views
- **Document Badges** - Visual status indicators (Published, Draft, Featured)
- **Field Groups** - Organized editing experience with tabs
- **Dynamic Categories** - Flexible category system with icons and colors
- **Rich Content** - Portable Text for stories and resources
- **Media Management** - Image uploads with automatic optimization

---

## 📈 Project Statistics

| Category          | Count                 |
| ----------------- | --------------------- |
| **Pages**         | 10                    |
| **Sections**      | 31                    |
| **Components**    | 16                    |
| **Hooks**         | 2                     |
| **Content Types** | 4                     |
| **Build Size**    | ~284KB (88KB gzipped) |
| **Build Time**    | ~1.7s                 |

---

## 🐛 Troubleshooting

### Dev Server Won't Start

**Issue:** `Error: listen EPERM: operation not permitted ::1:5173`

**Solution:**

```bash
# Use IPv4 instead of IPv6
npm run dev -- --host 127.0.0.1 --port 5174
```

### Build Fails with TypeScript Errors

**Issue:** Test files causing build errors

**Solution:** Test files are excluded in `tsconfig.json`:

```json
"exclude": ["src/**/__tests__", "src/test"]
```

### Sanity API Quota Exceeded

**Issue:** Hitting 10,000 request/month limit

**Solution:**

- Enable CDN caching (already configured)
- Use React Query caching (already configured)
- Monitor API usage in Sanity dashboard
- Consider upgrading Sanity plan if needed

---

## 📞 Contact

**Foundation:** The Robert A. Hendry Foundation  
**Website:** https://hendryanxietyfoundation.org  
**Email:** roberthendryfoundation@gmail.com

---

## 📝 License

This project is proprietary. All rights reserved.

---

## 🙏 Acknowledgments

- Built in memory of **Robert A. Hendry**
- Powered by [Sanity](https://www.sanity.io/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Last Updated:** November 2024  
**Version:** 1.0.0  
**Status:** ✅ Production Ready 🚀
