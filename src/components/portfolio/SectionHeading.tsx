import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, description, align = 'center' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}
        >
            {badge && (
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-slate-500 text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
