import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, Folder, Github, ExternalLink, Code2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/portfolio/SectionHeading';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Church Web Application',
            description: 'A comprehensive web application designed to manage church events, member interactions, and community engagement. Features include event scheduling, member directory, and announcements system.',
            longDescription: 'Built a full-stack church management system that streamlines event organization, facilitates member communication, and provides an intuitive interface for community engagement.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
            category: 'fullstack',
            image: null,
            github: 'https://github.com/VadlapudiPranab',
            featured: true,
            live: null,
            highlights: [
                'Event management and scheduling',
                'Member interaction system',
                'Responsive design for all devices',
                'Backend API with Flask'
            ]
        },
        {
            id: 2,
            title: 'Smart Driver Drowsiness Detection',
            description: 'An edge-based driver drowsiness detection system utilizing facial analysis and mobile crowdsourcing for real-time, privacy-focused safety alerts.',
            longDescription: 'Developed an innovative safety system that uses facial recognition and edge computing to detect driver fatigue in real-time, sending privacy-focused alerts through mobile crowdsourcing.',
            tags: ['Python', 'Machine Learning', 'Computer Vision', 'Edge Computing'],
            category: 'ai',
            image: null,
            github: 'https://github.com/VadlapudiPranab',
            featured: true,
            live: null,
            highlights: [
                'Real-time facial analysis',
                'Edge-based processing',
                'Mobile crowdsourcing integration',
                'Privacy-focused design'
            ]
        }
    ];

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'fullstack', label: 'Full Stack' },
        { key: 'ai', label: 'AI/ML' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                            <Folder className="w-4 h-4 mr-2" />
                            My Work
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                            Featured Projects
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            A showcase of my work demonstrating problem-solving abilities, technical skills,
                            and passion for building meaningful applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-8 bg-white border-b border-slate-100 sticky top-16 md:top-20 z-30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-center gap-2">
                        <Filter className="w-5 h-5 text-slate-400 mr-2" />
                        {filters.map((filter) => (
                            <Button
                                key={filter.key}
                                variant={activeFilter === filter.key ? 'default' : 'ghost'}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`rounded-full ${activeFilter === filter.key
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {filter.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="space-y-12">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <div className="grid md:grid-cols-2">
                                    {/* Project Image/Visual */}
                                    <div className="relative h-64 md:h-auto bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                        <div className="relative w-32 h-32">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl transform rotate-6" />
                                            <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center">
                                                <Code2 className="w-12 h-12 text-indigo-600" />
                                            </div>
                                        </div>

                                        {project.featured && (
                                            <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
                                                Featured
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6 md:p-10">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed mb-6">
                                            {project.longDescription}
                                        </p>

                                        {/* Highlights */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features:</h4>
                                            <ul className="grid grid-cols-2 gap-2">
                                                {project.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="bg-slate-100 text-slate-600 hover:bg-slate-200"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-4">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                                                >
                                                    <Github className="w-5 h-5" />
                                                    View Code
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Projects Coming */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                            <Layers className="w-8 h-8 text-slate-400" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                            More Projects on the Way
                        </h2>
                        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
                            I'm constantly working on new projects and exploring different technologies.
                            Check out my GitHub for the latest updates!
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-slate-900 hover:bg-slate-800 rounded-full px-8"
                        >
                            <a href="https://github.com/VadlapudiPranab" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 mr-2" />
                                Follow on GitHub
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Interested in Working Together?
                        </h2>
                        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new projects and opportunities.
                            Let's create something amazing together!
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 h-12"
                        >
                            <Link to={createPageUrl('Contact')}>
                                Get In Touch
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
