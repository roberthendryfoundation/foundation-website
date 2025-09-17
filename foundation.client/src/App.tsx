/*import React from 'react';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/Homepage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ArticlePage } from "./pages/ArticlePage";
import { ContactPage } from './pages/ContactPage';  
import  BreathingPage  from './pages/BreathingPage'; 





export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/resources/:slug" element={<ArticlePage />} /> {/* new */}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/resources/breathing" element={<BreathingPage />} /> {/* new */}

                    {/* Fallback route */}
                    <Route path="*" element={<HomePage />} />

                </Routes>
            </Layout>
        </Router>
    );
}