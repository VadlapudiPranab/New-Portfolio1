import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Timeline({ items }) {
    return (
        <div className="space-y-8">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-0"
                >
                    <div className="md:grid md:grid-cols-5 md:gap-8">
                        {/* Date - Left Side */}
                        <div className="hidden md:block md:col-span-1 text-right pt-1">
                            <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                {item.date}
                            </span>
                        </div>

                        {/* Line & Dot */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:left-auto md:right-0 md:relative md:w-full md:flex md:justify-center md:col-span-1 md:bg-transparent">
                            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-indigo-600 shadow-sm md:static md:translate-x-0" />
                            <div className="hidden md:block absolute top-3 left-1/2 w-px h-full bg-slate-200 -translate-x-1/2 -z-10" />
                        </div>

                        {/* Content - Right Side */}
                        <div className="md:col-span-3 pb-8 relative">
                            <div className="md:hidden mb-2">
                                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                    {item.date}
                                </span>
                            </div>

                            <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                                    <span className="font-medium text-slate-700">{item.organization}</span>
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        {item.location}
                                    </span>
                                </div>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    {item.description}
                                </p>
                                {item.highlights && (
                                    <ul className="space-y-2">
                                        {item.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
