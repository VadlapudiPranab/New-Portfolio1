import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export default function CertificationCard({ title, issuer, year, link, icon: Icon = Award }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            className="group relative bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20">
                <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                {title}
            </h4>
            <p className="text-sm text-slate-500 mb-3">{issuer}</p>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {year}
                </span>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100/50 to-transparent rounded-tr-xl rounded-bl-3xl" />
        </motion.div>
    );
}
