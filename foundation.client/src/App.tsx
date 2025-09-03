/*import React from 'react';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/Homepage';
import { AboutPage } from './pages/AboutPage';




export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                  

                </Routes>
            </Layout>
        </Router>
    );
}