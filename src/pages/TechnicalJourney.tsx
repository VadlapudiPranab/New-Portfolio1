import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Database, Brain, GitBranch,
    Layers, Cpu, BarChart3, FileCode, Globe,
    Award, Rocket, Target, Zap,
    ChevronRight,
    Users, Bell, Shield, LineChart,
    Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function TechnicalJourney() {

    // Technical Skills Data
    const skillCategories = [
        {
            title: 'MERN Stack',
            gradient: 'from-green-500 to-emerald-600',
            bgGradient: 'from-green-50 to-emerald-50',
            skills: [
                { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-700 border-green-200' },
                { name: 'Express.js', icon: '⚡', color: 'bg-gray-100 text-gray-700 border-gray-200' },
                { name: 'React.js', icon: '⚛️', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
                { name: 'Node.js', icon: '💚', color: 'bg-lime-100 text-lime-700 border-lime-200' }
            ]
        },
        {
            title: 'SQL Databases',
            gradient: 'from-blue-500 to-indigo-600',
            bgGradient: 'from-blue-50 to-indigo-50',
            skills: [
                { name: 'MySQL', icon: '🐬', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { name: 'SQL Server', icon: '🗄️', color: 'bg-red-100 text-red-700 border-red-200' }
            ]
        },
        {
            title: 'Programming Languages',
            gradient: 'from-purple-500 to-violet-600',
            bgGradient: 'from-purple-50 to-violet-50',
            skills: [
                { name: 'JavaScript', icon: '🟨', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
                { name: 'Python', icon: '🐍', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { name: 'C', icon: '©️', color: 'bg-slate-100 text-slate-700 border-slate-200' }
            ]
        },
        {
            title: 'AI / ML / DL Skills',
            gradient: 'from-rose-500 to-pink-600',
            bgGradient: 'from-rose-50 to-pink-50',
            skills: [
                { name: 'Machine Learning', icon: '🤖', color: 'bg-rose-100 text-rose-700 border-rose-200' },
                { name: 'Deep Learning', icon: '🧠', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { name: 'TensorFlow', icon: '🔶', color: 'bg-orange-100 text-orange-700 border-orange-200' },
                { name: 'NumPy', icon: '🔢', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { name: 'Pandas', icon: '🐼', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
                { name: 'Matplotlib', icon: '📊', color: 'bg-teal-100 text-teal-700 border-teal-200' }
            ]
        },
        {
            title: 'Other Technologies',
            gradient: 'from-cyan-500 to-teal-600',
            bgGradient: 'from-cyan-50 to-teal-50',
            skills: [
                { name: 'Git & GitHub', icon: '🔀', color: 'bg-gray-100 text-gray-700 border-gray-200' },
                { name: 'REST APIs', icon: '🔌', color: 'bg-green-100 text-green-700 border-green-200' },
                { name: 'Postman', icon: '📮', color: 'bg-orange-100 text-orange-700 border-orange-200' },
                { name: 'Cloud Basics', icon: '☁️', color: 'bg-sky-100 text-sky-700 border-sky-200' }
            ]
        }
    ];

    // Projects Data
    const projects = [
        {
            title: 'Mutex Campus',
            subtitle: 'Digital Ecosystem Platform',
            icon: Globe,
            gradient: 'from-indigo-500 via-purple-500 to-pink-500',
            description: 'A complete campus digital ecosystem simulating real-world operations of university management — authentication, student/faculty roles, announcements, attendance, event management, chat system, admin panel, and secure SQL/MongoDB data processing.',
            technologies: ['MERN', 'SQL', 'JWT Auth', 'Cloud Storage'],
            role: 'Full-Stack Developer',
            highlights: [
                { icon: Bell, text: 'Real-time notifications' },
                { icon: Users, text: 'Role-based access' },
                { icon: Shield, text: 'Secure dashboard' },
                { icon: LineChart, text: 'Analytics and reporting' }
            ]
        },
        {
            title: 'ML/DL Cancer Detection System',
            subtitle: 'AI-Powered Medical Diagnosis',
            icon: Brain,
            gradient: 'from-rose-500 via-red-500 to-orange-500',
            description: 'An AI-powered cancer detection model using ML/DL classifiers, CNN-based deep learning, and medical image processing to predict tumor types with high accuracy.',
            technologies: ['Python', 'CNN', 'TensorFlow', 'OpenCV', 'Data Preprocessing'],
            role: 'ML Engineer',
            highlights: [
                { icon: BarChart3, text: 'Accuracy visualization' },
                { icon: Target, text: 'Model evaluation' },
                { icon: FileCode, text: 'Automated report generation' }
            ]
        }
    ];

    // Certifications Data
    const certifications = [
        { title: 'AI & Machine Learning', status: 'upload', color: 'from-purple-500 to-indigo-500' },
        { title: 'Deep Learning Specialization', status: 'upload', color: 'from-rose-500 to-pink-500' },
        { title: 'MERN Stack Course', status: 'upload', color: 'from-green-500 to-emerald-500' },
        { title: 'Python Programming', status: 'upload', color: 'from-blue-500 to-cyan-500' },
        { title: 'SQL & Databases', status: 'upload', color: 'from-orange-500 to-amber-500' },
        { title: 'Web Development Course', status: 'upload', color: 'from-teal-500 to-green-500' }
    ];

    // Achievements Data
    const achievements = [
        { icon: Rocket, text: 'Completed multiple industry-level projects', color: 'text-indigo-600 bg-indigo-50' },
        { icon: Layers, text: 'Built full-stack applications with modern architecture', color: 'text-purple-600 bg-purple-50' },
        { icon: Brain, text: 'Hands-on experience in AI model development', color: 'text-rose-600 bg-rose-50' },
        { icon: Database, text: 'Strong understanding of databases and backend APIs', color: 'text-blue-600 bg-blue-50' },
        { icon: Award, text: 'Certified in ML, DL, MERN, SQL, and Python', color: 'text-amber-600 bg-amber-50' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-indigo-700 text-sm font-medium mb-6">
                            <Cpu className="w-4 h-4" />
                            Digital Ecosystem
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                My Technical Journey
                            </span>
                            <br />
                            <span className="text-slate-800">& Achievements</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Exploring the intersection of full-stack development, artificial intelligence,
                            and modern web technologies to build impactful solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Block 1: Technical Skills */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Block 1</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Technical Skills
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            A comprehensive toolkit of technologies I work with
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-6 border border-white/50 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all`}
                            >
                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-medium mb-4`}>
                                    <Code2 className="w-4 h-4" />
                                    {category.title}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl ${skill.color} border font-medium text-sm transition-transform hover:scale-105`}
                                        >
                                            <span className="text-lg">{skill.icon}</span>
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 2: Major Projects */}
            <section className="py-16 md:py-24 bg-white/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">Block 2</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Major Projects
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Industry-level applications showcasing full-stack and AI expertise
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100"
                            >
                                {/* Project Header */}
                                <div className={`bg-gradient-to-r ${project.gradient} p-6 md:p-8`}>
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <project.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                            <p className="text-white/80 font-medium">{project.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 md:p-8">
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-slate-700 mb-3">Technologies Used:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="mb-6">
                                        <span className="text-sm text-slate-500">Role: </span>
                                        <span className="text-sm font-semibold text-indigo-600">{project.role}</span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {project.highlights.map((highlight, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                    <highlight.icon className="w-4 h-4 text-indigo-600" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{highlight.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Block 3: Certifications */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-100">Block 3</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Certifications
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            11+ industry-recognized credentials from top platforms
                        </p>
                    </motion.div>

                    {/* Featured Certifications Preview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { title: 'Google IT Support', color: 'from-blue-500 to-cyan-500', icon: Shield },
                            { title: 'Google Cybersecurity', color: 'from-emerald-500 to-teal-500', icon: Lock },
                            { title: 'IBM AI Essentials', color: 'from-purple-500 to-violet-500', icon: Brain },
                            { title: 'IBM Data Analyst', color: 'from-indigo-500 to-blue-500', icon: BarChart3 }
                        ].map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-5 rounded-2xl bg-gradient-to-br ${cert.color} text-center`}
                            >
                                <div className="w-12 h-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-3">
                                    <cert.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white text-sm font-medium">{cert.title}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full px-8"
                        >
                            <Link to={createPageUrl('Certifications')}>
                                View All 11 Certifications
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Block 4: Achievements & Highlights */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Block 4</Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Achievements & Highlights
                        </h2>
                        <p className="text-slate-300 max-w-xl mx-auto">
                            Key milestones and accomplishments in my journey
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <achievement.icon className="w-7 h-7" />
                                </div>
                                <p className="text-white font-medium leading-relaxed">
                                    {achievement.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { value: '5+', label: 'Major Projects' },
                            { value: '10+', label: 'Technologies' },
                            { value: '6+', label: 'Certifications' },
                            { value: '7.75', label: 'CGPA' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Ready to Collaborate?
                        </h2>
                        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
                            Let's build something amazing together. I'm always open to new opportunities and challenges.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full px-8"
                            >
                                <a href="mailto:thepranab.it@gmail.com">
                                    Get In Touch
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full px-8"
                            >
                                <a href="https://github.com/VadlapudiPranab" target="_blank" rel="noopener noreferrer">
                                    <GitBranch className="w-5 h-5 mr-2" />
                                    View GitHub
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
