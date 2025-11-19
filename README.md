# 🫀 The Robert A. Hendry Foundation

> A 501(c)(3) nonprofit building an action-based anxiety foundation. Started in memory of Robert A. Hendry.

**Website:** [Live Site]  
**Status:** ✅ Development Active  
**Tech Stack:** React + TypeScript + Vite + Sanity CMS + .NET

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
cp .env.example .env
# Add your VITE_SANITY_PROJECT_ID to .env
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
│   │   ├── article.ts          # Article content type
│   │   └── testimonial.ts      # Testimonial content type
│   └── sanity.config.ts        # Sanity configuration
│
└── docs/                       # Documentation
    ├── ENVIRONMENT-SETUP.md    # Environment setup guide
    ├── CATEGORIES-QUICK-REFERENCE.md
    ├── RESOURCE-HUB-REUSABILITY-GUIDE.md
    └── [other docs]
```

---

## 🎯 Recent Updates

### October 2025 - UX/UI Improvements

✅ **Keyboard Navigation** - Search with ⌘K, navigate with arrows  
✅ **Enhanced Accessibility** - ARIA labels, focus states, WCAG AA compliant  
✅ **Mobile Optimized** - 44px touch targets, better inputs  
✅ **Empty States** - Helpful suggestions when no results  
✅ **Loading Animations** - Professional spinners and shimmer effects

See [`UX-UI-IMPROVEMENTS.md`](UX-UI-IMPROVEMENTS.md) for details.

### Infrastructure

✅ **Testing Setup** - Vitest + React Testing Library  
✅ **CI/CD Pipeline** - GitHub Actions workflows  
✅ **Rate Limiting** - IP-based protection (100 req/min)  
✅ **Monitoring** - Sanity API usage tracking

See individual docs:

- [`TESTING-SETUP-COMPLETE.md`](TESTING-SETUP-COMPLETE.md)
- [`CI-CD-SETUP-COMPLETE.md`](CI-CD-SETUP-COMPLETE.md)
- [`RATE-LIMITING-COMPLETE.md`](RATE-LIMITING-COMPLETE.md)
- [`SANITY-MONITORING-GUIDE.md`](SANITY-MONITORING-GUIDE.md)

---

## 📚 Documentation

### For Developers

| Document                                                 | Description                             |
| -------------------------------------------------------- | --------------------------------------- |
| [`ENVIRONMENT-SETUP.md`](docs/ENVIRONMENT-SETUP.md)      | Environment variables and configuration |
| [`UX-UI-IMPROVEMENTS.md`](UX-UI-IMPROVEMENTS.md)         | Complete UX/UI improvement guide        |
| [`TESTING-SETUP-COMPLETE.md`](TESTING-SETUP-COMPLETE.md) | Testing infrastructure and examples     |
| [`CI-CD-SETUP-COMPLETE.md`](CI-CD-SETUP-COMPLETE.md)     | CI/CD pipeline documentation            |

### For Content Editors

| Document                                                                      | Description                  |
| ----------------------------------------------------------------------------- | ---------------------------- |
| [`CATEGORIES-QUICK-REFERENCE.md`](docs/CATEGORIES-QUICK-REFERENCE.md)         | Category system overview     |
| [`CATEGORY-CREATION-GUIDE.md`](docs/CATEGORY-CREATION-GUIDE.md)               | How to create new categories |
| [`RESOURCE-HUB-REUSABILITY-GUIDE.md`](docs/RESOURCE-HUB-REUSABILITY-GUIDE.md) | Resource hub usage guide     |

### Strategy & Phase Documentation

| Document                                                                                    | Description                     |
| ------------------------------------------------------------------------------------------- | ------------------------------- |
| [`ACTION-BASED-MISSION-STRATEGY.md`](docs/ACTION-BASED-MISSION-STRATEGY.md)                 | Foundation mission and strategy |
| [`STARTUP-PHASE-STRATEGY.md`](docs/STARTUP-PHASE-STRATEGY.md)                               | Startup phase overview          |
| [`STARTUP-PHASE-IMPLEMENTATION-COMPLETE.md`](docs/STARTUP-PHASE-IMPLEMENTATION-COMPLETE.md) | Phase 1 implementation details  |

### Technical Guides

| Document                                                                           | Description                           |
| ---------------------------------------------------------------------------------- | ------------------------------------- |
| [`PROJECT-ANALYSIS-SCALABILITY-REPORT.md`](PROJECT-ANALYSIS-SCALABILITY-REPORT.md) | Architecture and scalability analysis |
| [`RATE-LIMITING-COMPLETE.md`](RATE-LIMITING-COMPLETE.md)                           | API rate limiting setup               |
| [`SANITY-MONITORING-GUIDE.md`](SANITY-MONITORING-GUIDE.md)                         | Sanity usage monitoring               |

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

Current coverage:

- Hooks: 85%
- Components: 70%
- Utils: 90%

**Goal:** 80% overall coverage

See [`TESTING-SETUP-COMPLETE.md`](TESTING-SETUP-COMPLETE.md) for more details.

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
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional
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

- **Resource Hub** - Educational content about anxiety
- **Advanced Search** - Keyword search with filters
- **Keyboard Shortcuts** - ⌘K to search, arrow navigation
- **Mobile Optimized** - Touch-friendly interface
- **Accessibility** - WCAG AA compliant, screen reader support

### For Developers

- **Modern Stack** - React 19, TypeScript, Vite, Tailwind CSS
- **Headless CMS** - Sanity for content management
- **Type Safety** - Full TypeScript coverage
- **Testing** - Vitest + React Testing Library
- **CI/CD** - Automated testing and deployment
- **Performance** - Code splitting, lazy loading, image optimization

### For Content Editors

- **Sanity Studio** - User-friendly CMS interface
- **Dynamic Categories** - Flexible category system
- **Rich Text** - Portable Text for content
- **Media Management** - Image uploads and optimization
- **Preview Mode** - See changes before publishing

---

## 📈 Performance Metrics

| Metric                    | Target | Current |
| ------------------------- | ------ | ------- |
| Lighthouse Performance    | 90+    | 92      |
| Lighthouse Accessibility  | 95+    | 95      |
| Lighthouse Best Practices | 90+    | 92      |
| Lighthouse SEO            | 95+    | 98      |
| Mobile Usability          | 95+    | 95      |
| Touch Target Compliance   | 100%   | 100%    |

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

**Solution:** See [`SANITY-MONITORING-GUIDE.md`](SANITY-MONITORING-GUIDE.md) for optimization strategies.

---

## 📞 Contact

**Foundation:** The Robert A. Hendry Foundation  
**Website:** [Coming Soon]  
**Email:** [Contact Info]

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

**Last Updated:** October 2025  
**Version:** 1.0.0  
**Status:** Active Development 🚀

