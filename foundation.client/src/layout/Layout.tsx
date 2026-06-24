import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Menu,
  X,
  TrendingUp,
  Users,
  Handshake,
  Zap,
} from "lucide-react";
import { GlobalSearch } from "../components/GlobalSearch";
import { BackToTop } from "../components/BackToTop";
import { Logo } from "../components/Logo";
import { cn } from "../components/ui/utils";
import { LEGAL_DISCLAIMER } from "../constants";
import { SEAL_LOGO_SRC } from "../constants/logos";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Stories", path: "/stories" },
    { name: "Contact", path: "/contact" },
  ];

  const isCurrentPage = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  const isAboutPage = location.pathname === "/about";
  const isResourcesPage = location.pathname === "/resources";
  const [topicBarVisible, setTopicBarVisible] = useState(false);

  useEffect(() => {
    const handleTopicBar = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setTopicBarVisible(!!customEvent.detail);
    };
    window.addEventListener("resourcesTopicBar", handleTopicBar);
    return () => window.removeEventListener("resourcesTopicBar", handleTopicBar);
  }, []);

  useEffect(() => {
    setTopicBarVisible(false);
  }, [location.pathname]);

  const desktopNavLinkClass = (path: string) =>
    cn(
      "relative px-3 py-2 text-sm font-medium text-primary transition-colors duration-200",
      "hover:text-secondary",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
      "after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px] after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-200",
      isCurrentPage(path)
        ? "font-semibold after:w-7 after:bg-primary after:opacity-100"
        : "after:w-0 after:bg-secondary after:opacity-0 hover:after:w-5 hover:after:opacity-70"
    );

  const mobileNavLinkClass = (path: string) =>
    cn(
      "block w-full px-3 py-3 text-base font-medium text-primary rounded-md transition-colors duration-200",
      "hover:bg-accent hover:text-secondary",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      isCurrentPage(path) &&
        "font-semibold bg-accent/80 border-l-2 border-secondary"
    );

  const footerLinkClass =
    "footer-link text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm";

  const FooterLegalBar = ({ centered = false }: { centered?: boolean }) => (
    <div
      className={cn(
        "relative z-10 mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm",
        centered
          ? "text-center md:flex-row md:items-center md:justify-between md:text-left"
          : "md:flex-row md:items-center md:justify-between"
      )}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} The Robert A. Hendry Foundation. All
        rights reserved.
      </p>
      <nav
        aria-label="Footer legal links"
        className={cn(
          "flex flex-wrap gap-x-5 gap-y-2",
          centered && "justify-center md:justify-end"
        )}
      >
        <Link to="/privacy" className={footerLinkClass}>
          Privacy Policy
        </Link>
        <Link to="/terms" className={footerLinkClass}>
          Terms of Service
        </Link>
        <a href="#main-content" className={footerLinkClass}>
          Accessibility
        </a>
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 text-foreground shadow-[0_1px_12px_rgba(13,27,42,0.04)] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center md:justify-between md:min-h-[4.75rem] lg:min-h-20">
            <div className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
              <Logo variant="header" mark="navbar" className="md:mr-2" />
            </div>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={desktopNavLinkClass(item.path)}
                  aria-current={isCurrentPage(item.path) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pl-2">
                <GlobalSearch />
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="secondary" size="sm" asChild>
                <Link to="/resources">Browse Resources</Link>
              </Button>
            </div>

            <div className="relative z-10 ml-auto flex items-center md:hidden">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-white/70 text-primary shadow-sm transition-colors hover:bg-section-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg z-50 animate-in slide-in-from-top-5 duration-200">
              <nav
                className="flex flex-col p-4 space-y-2"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={mobileNavLinkClass(item.path)}
                    aria-current={
                      isCurrentPage(item.path) ? "page" : undefined
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  variant="secondary"
                  className="w-full mt-4"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/resources">Browse Resources</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>

      {!isAboutPage && (
        <div
          className={cn(
            "fixed right-5 z-40 md:hidden",
            isResourcesPage && topicBarVisible ? "bottom-24" : "bottom-5"
          )}
        >
          <a href="tel:988" aria-label="Call 988 Crisis Hotline">
            <Button
              size="lg"
              variant="secondary"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-white shadow-xl hover:bg-slate-600"
            >
              <Phone className="h-5 w-5" />
            </Button>
          </a>
        </div>
      )}

      <footer
        className="site-footer relative overflow-hidden bg-primary border-t border-white/10"
        role="contentinfo"
      >
        <img
          src={SEAL_LOGO_SRC}
          alt=""
          aria-hidden="true"
          className="footer-watermark pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 md:h-[480px] md:w-[480px]"
        />

        {/* Mobile condensed footer */}
        <div className="footer-content relative z-10 mx-auto max-w-6xl px-5 py-16 text-center md:hidden md:px-6 md:py-20">
          <Logo variant="footer" mark="seal" inverse className="mx-auto" />
          <p className="footer-heading mt-5 text-sm font-semibold">
            The Robert A. Hendry Foundation
          </p>
          <p className="mt-2 text-xs leading-6">
            Information-only nonprofit. No clinical services.
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-6">
            We&apos;re a 501(c)(3) nonprofit building action-based anxiety
            resources.
          </p>
          <nav
            aria-label="Footer navigation"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          >
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={footerLinkClass}>
                {item.name}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-xs leading-relaxed">
            {LEGAL_DISCLAIMER}
          </p>
          <FooterLegalBar centered />
        </div>

        <div className="footer-content relative z-10 mx-auto hidden max-w-6xl px-5 py-16 sm:px-6 md:block md:py-20 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo variant="footer" mark="seal" inverse />
              <p className="text-sm leading-relaxed">
                We're a 501(c)(3) nonprofit building an action-based foundation
                that identifies, collaborates on, and completes projects to help
                people with anxiety. We share educational resources and build
                infrastructure to support our mission.
              </p>
            </div>

            <div>
              <h4 className="footer-heading mb-4 font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={footerLinkClass}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-heading mb-4 font-semibold">Connect</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                  <span className="text-sm">
                    Have a project idea or want to collaborate? Visit our{" "}
                    <Link
                      to="/contact"
                      className="footer-link font-medium underline-offset-4 hover:underline"
                    >
                      contact page
                    </Link>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                  <span className="text-sm">
                    <strong>Crisis Support:</strong>
                    <br />
                    Call or text{" "}
                    <a
                      href="tel:988"
                      className="footer-link font-semibold underline-offset-4 hover:underline"
                    >
                      988
                    </a>{" "}
                    (U.S. Suicide & Crisis Lifeline)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-80" />
                  <span className="text-sm">
                    We&apos;re a startup organization currently operating
                    virtually as we build our infrastructure.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="footer-heading mb-4 font-semibold">
                Our Commitment
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 opacity-80" />
                  <span className="text-sm">Transparency</span>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Resilience - We get things done
                  </p>
                  <p className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Inclusivity - For everyone
                  </p>
                  <p className="flex items-center gap-1">
                    <Handshake className="h-3 w-3" />
                    Collaboration - Working together
                  </p>
                  <p className="flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    Action-Focused - Making change
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8">
            <p className="max-w-3xl text-xs leading-relaxed">
              {LEGAL_DISCLAIMER}
            </p>
            <FooterLegalBar />
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
