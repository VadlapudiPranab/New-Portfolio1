import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', page: 'Home' },
        { name: 'About', page: 'About' },
        { name: 'Journey', page: 'TechnicalJourney' },
        { name: 'Certifications', page: 'Certifications' },
        { name: 'Projects', page: 'Projects' },
        { name: 'Contact', page: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to={createPageUrl('Home')} className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="font-semibold text-slate-900 hidden sm:block">Pranab</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={createPageUrl(link.page)}
                                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-50"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Links & CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://github.com/VadlapudiPranab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/vadlapudi-pranab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <Button
                            asChild
                            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5"
                        >
                            <Link to={createPageUrl('Contact')}>
                                <Mail className="w-4 h-4 mr-2" />
                                Hire Me
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-600"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={createPageUrl(link.page)}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 px-4 pt-4 border-t border-slate-100 mt-4">
                                <a href="https://github.com/VadlapudiPranab" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5 text-slate-500" />
                                </a>
                                <a href="https://linkedin.com/in/vadlapudi-pranab" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-5 h-5 text-slate-500" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
