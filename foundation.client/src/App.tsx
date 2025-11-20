import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Loading } from "./components/Loading";
import { trackPageView } from "./utils/analytics";

// Lazy load pages for code splitting
const HomePage = lazy(() =>
  import("./pages/Homepage").then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ResourcesPage = lazy(() =>
  import("./pages/ResourcesPage").then((m) => ({ default: m.ResourcesPage }))
);
const ResourceDetailPage = lazy(() =>
  import("./pages/ResourceDetailPage").then((m) => ({
    default: m.ResourceDetailPage,
  }))
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const StoriesPage = lazy(() =>
  import("./pages/StoriesPage").then((m) => ({ default: m.StoriesPage }))
);
const BreathingPage = lazy(() => import("./pages/BreathingPage"));
const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((m) => ({ default: m.PrivacyPage }))
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((m) => ({ default: m.TermsPage }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

// Component to track page views on route changes
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageViewTracker />
      <Layout>
        <Suspense fallback={<Loading fullScreen message="Loading page..." />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/breathing" element={<BreathingPage />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Fallback route - 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
