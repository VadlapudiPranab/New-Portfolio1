import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Main Footer */}
                <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className="font-semibold text-lg">Vadlapudi Pranab</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Full-Stack Developer passionate about creating web applications that make a difference.
                            Currently exploring AI and cloud technologies.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/VadlapudiPranab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/vadlapudi-pranab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:thepranab.it@gmail.com"
                                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'TechnicalJourney', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={createPageUrl(link)}
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail className="w-4 h-4" />
                                thepranab.it@gmail.com
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Phone className="w-4 h-4" />
                                +91 9542736323
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4" />
                                Hyderabad, India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} Vadlapudi Pranab. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Hyderabad
                    </p>
                </div>
            </div>
        </footer>
    );
}
