import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import TechnicalJourney from '@/pages/TechnicalJourney';
import Certifications from '@/pages/Certifications';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import Skills from '@/pages/Skills';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Navigate to="/" replace />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/technicaljourney" element={<TechnicalJourney />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/error" element={<UserNotRegisteredError />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
