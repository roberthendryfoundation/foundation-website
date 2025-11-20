import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart, Phone, Mail, MapPin, Shield, Menu, X } from "lucide-react";
import { GlobalSearch } from "../components/GlobalSearch";
import { BackToTop } from "../components/BackToTop";

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

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white shadow-soft border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary rounded-full p-2">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  The Robert A. Hendry Foundation
                </h1>
                <p className="text-xs text-muted-foreground">
                  Action-based anxiety nonprofit
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={isCurrentPage(item.path) ? "default" : "ghost"}
                  className="text-sm"
                  asChild
                >
                  <Link
                    to={item.path}
                    aria-current={isCurrentPage(item.path) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}

              {/* Search Icon in Navigation */}
              <div className="pl-2">
                <GlobalSearch />
              </div>
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link to="/resources">Browse Resources</Link>
              </Button>
              {/*<Button*/}
              {/*    className="bg-donate hover:bg-donate/90 text-donate-foreground"*/}
              {/*    size="sm"*/}
              {/*    asChild*/}
              {/*>*/}
              {/*    <Link to="/donate">Donate</Link>*/}
              {/*</Button>*/}
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Search */}
              <GlobalSearch isMobile={true} />

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Slide-out */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50 animate-in slide-in-from-top-5 duration-200">
              <nav
                className="flex flex-col p-4 space-y-2"
                role="navigation"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    variant={isCurrentPage(item.path) ? "default" : "ghost"}
                    className="w-full justify-start text-left"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link
                      to={item.path}
                      aria-current={
                        isCurrentPage(item.path) ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}
                <Button
                  className="w-full mt-4 bg-primary"
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

      {/* Main content */}
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>

      {/* Floating Crisis Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a href="tel:988" aria-label="Call 988 Crisis Hotline">
          <Button
            size="lg"
            className="bg-destructive hover:bg-destructive/90 shadow-2xl rounded-full h-16 w-16 flex items-center justify-center animate-pulse hover:animate-none"
          >
            <Phone className="h-8 w-8" />
          </Button>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-primary rounded-full p-2">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">
                    The Robert A. Hendry Foundation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Information only nonprofit (no clinical services)
                  </p>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We're a 501(c)(3) nonprofit building an action-based foundation
                that identifies, collaborates on, and completes projects to help
                people with anxiety. We share educational resources and build
                infrastructure to support our mission.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {/*<li>*/}
                {/*    <Link*/}
                {/*        to="/donate"*/}
                {/*        className="text-sm text-donate hover:underline"*/}
                {/*    >*/}
                {/*        Donate*/}
                {/*    </Link>*/}
                {/*</li>*/}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Have a project idea or want to collaborate? Visit our{" "}
                    <Link
                      to="/contact"
                      className="text-primary hover:underline"
                    >
                      contact page
                    </Link>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <strong>Crisis Support:</strong>
                    <br />
                    Call or text{" "}
                    <a
                      href="tel:988"
                      className="text-primary hover:underline font-semibold"
                    >
                      988
                    </a>{" "}
                    (U.S. Suicide & Crisis Lifeline)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    We're a startup organization currently operating virtually
                    as we build our infrastructure.
                  </span>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div>
              <h4 className="font-semibold mb-4">Our Commitment</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-success" />
                  <span className="text-sm text-muted-foreground">
                    Transparency
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1">✊ Resilience - We get things done</p>
                  <p className="mb-1">🤝 Inclusivity - For everyone</p>
                  <p className="mb-1">🔗 Collaboration - Working together</p>
                  <p>⚡ Action-Focused - Making change</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} The Robert A. Hendry
                Foundation. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
                <a
                  href="#main-content"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
