import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({
    title,
    description,
    image,
    tags = [],
    github,
    live,
    featured = false
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-2' : ''
                }`}
        >
            {/* Image */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">{title[0]}</span>
                        </div>
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Links */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-indigo-600 hover:bg-white transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-slate-50 text-slate-600 border-slate-100">
                            {tag}
                        </Badge>
                    ))}
                    {tags.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-50 text-slate-600 border-slate-100">+{tags.length - 3}</Badge>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
