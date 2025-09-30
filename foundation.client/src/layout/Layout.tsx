import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Heart, Phone, Mail, MapPin, Shield } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
    ];

    const isCurrentPage = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
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
                                <h1 className="text-lg font-semibold text-foreground">The Robert A. Hendry Foundation</h1>
                                <p className="text-xs text-muted-foreground">Anxiety awareness &amp; trustworthy information</p>
                            </div>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
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
                        </nav>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-3">
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                asChild
                            >
                                <Link to="/services">Find Support</Link>
                            </Button>
                            {/*<Button*/}
                            {/*    className="bg-donate hover:bg-donate/90 text-donate-foreground"*/}
                            {/*    size="sm"*/}
                            {/*    asChild*/}
                            {/*>*/}
                            {/*    <Link to="/donate">Donate</Link>*/}
                            {/*</Button>*/}
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-wrap gap-2" role="navigation" aria-label="Mobile navigation">
                            {navItems.map((item) => (
                                <Button
                                    key={item.path}
                                    variant={isCurrentPage(item.path) ? "default" : "ghost"}
                                    size="sm"
                                    className="text-xs"
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
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main id="main-content" className="flex-1" role="main">
                {children}
            </main>

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
                                    <h3 className="font-semibold">The Robert A. Hendry Foundation</h3>
                                    <p className="text-sm text-muted-foreground">Information only nonprofit (no clinical services)</p>
                                </div>
                            </Link>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We share clear, compassionate information about anxiety and connect people with reputable external resources.
                                This website does not provide medical advice, diagnosis, or treatment.
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
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        Crisis Line: <a href="tel:988" className="text-primary hover:underline">988</a>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        Office: <a href="tel:555-123-4567" className="text-primary hover:underline">(555) 123-4567</a>
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        <a href="mailto:info@mindwellfoundation.org" className="text-primary hover:underline">
                                            info@robertahendryfoundation.org
                                        </a>
                                    </span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                                    <span className="text-sm text-muted-foreground">
                                        We currently do not maintain a public office. Please contact us by email.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Security & Trust */}
                        <div>
                            <h4 className="font-semibold mb-4">Security &amp; Trust</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Shield className="h-4 w-4 text-success" />
                                    <span className="text-sm text-muted-foreground">HTTPS/SSL encryption</span>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    <p>Information only site (no patient records)</p>
                                    <p>We link to reputable external hotlines and providers</p>
                                    <p>See our Privacy Policy for details</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-8 pt-8 border-t border-border">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-sm text-muted-foreground">
                                &copy; {new Date().getFullYear()} The Robert A. Hendry Foundation. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </button>
                                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Terms of Service
                                </button>
                                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Accessibility
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analytics Script Placeholder */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              / Google Analytics 4 Integration
              // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 measurement ID
              // (function() {
              //   var script = document.createElement('script');
              //   script.async = true;
              //   script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
              //   document.head.appendChild(script);
              //   
              //   window.dataLayer = window.dataLayer || [];
              //   function gtag(){dataLayer.push(arguments);}
              //   gtag('js', new Date());
              //   gtag('config', 'GA_MEASUREMENT_ID');
              // })();
            `
                    }}
                />
            </footer>
        </div>
    );
}