import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
    const stats = [
        { label: 'Projects Built', value: '5+' },
        { label: 'Technologies', value: '8+' },
        { label: 'Certifications', value: '3' },
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center">
                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                    <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                    <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6"
                            >
                                <Sparkles className="w-4 h-4" />
                                Open to Work
                            </motion.div>

                            {/* Name & Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                                Hi, I'm <span className="gradient-text">Pranab</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-600 font-medium mb-6">
                                Full-Stack Developer & AI Enthusiast
                            </p>

                            {/* Bio */}
                            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                                I'm a passionate IT student from Hyderabad, crafting web experiences
                                with clean code and creative solutions. Currently exploring AI & Cloud
                                technologies while building real-world applications.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 mb-10">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6 h-12 shadow-lg shadow-indigo-500/25"
                                >
                                    <Link to={createPageUrl('Projects')}>
                                        View My Work
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-6 h-12 border-2 hover:bg-slate-50"
                                >
                                    <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69268ed3f77f233e4dbed9d0/a525d25e8_VADLAPUDI-PRANAB-FlowCV-Resume-20250614.pdf" target="_blank" rel="noopener noreferrer">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Resume
                                    </a>
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-slate-400">Connect with me:</span>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://github.com/VadlapudiPranab"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/vadlapudi-pranab"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="mailto:thepranab.it@gmail.com"
                                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-500 hover:text-white transition-all"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hero Image/Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-1 md:order-2 flex justify-center"
                        >
                            <div className="relative">
                                {/* Main Avatar Container */}
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                    {/* Decorative Ring */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" style={{ animation: 'spin 20s linear infinite' }} />
                                    <div className="absolute inset-2 rounded-full bg-slate-50" />

                                    {/* Avatar */}
                                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden">
                                        <div className="text-8xl sm:text-9xl font-bold gradient-text">P</div>
                                    </div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{ y: [-10, 10, -10] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center"
                                    >
                                        <Code2 className="w-8 h-8 text-indigo-600" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [10, -10, 10] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center"
                                    >
                                        <Zap className="w-7 h-7 text-amber-500" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-500 text-sm sm:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Intro Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                            About Me
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                            Building Digital Experiences with Purpose
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed mb-8">
                            I'm a B.Tech student in Information Technology at SICET, Hyderabad,
                            with a strong foundation in full-stack web development. I love solving
                            real-world problems through code and have experience working with
                            modern technologies like Python, Flask, JavaScript, and Azure AI services.
                        </p>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-full px-6"
                        >
                            <Link to={createPageUrl('About')}>
                                Learn More About Me
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
