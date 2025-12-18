import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Server,
    Brain,
    MessageSquare,
    Users,
    Lightbulb,
    Target,
    ArrowRight,
    Layers,
    Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/portfolio/SectionHeading';

export default function Skills() {
    const technicalSkills = [
        {
            category: 'Frontend Development',
            icon: Globe,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            skills: [
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'JavaScript', level: 80 },
                { name: 'Responsive Design', level: 85 }
            ]
        },
        {
            category: 'Backend Development',
            icon: Server,
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-50',
            skills: [
                { name: 'Python', level: 85 },
                { name: 'Flask', level: 75 },
                { name: 'REST APIs', level: 70 }
            ]
        },
        {
            category: 'Database',
            icon: Database,
            color: 'from-violet-500 to-purple-500',
            bgColor: 'bg-violet-50',
            skills: [
                { name: 'MySQL', level: 75 },
                { name: 'Database Design', level: 70 }
            ]
        },
        {
            category: 'AI & Cloud',
            icon: Brain,
            color: 'from-rose-500 to-pink-500',
            bgColor: 'bg-rose-50',
            skills: [
                { name: 'Azure Cognitive Services', level: 65 },
                { name: 'Machine Learning Basics', level: 60 },
                { name: 'Bot Framework', level: 55 }
            ]
        }
    ];

    const softSkills = [
        {
            icon: MessageSquare,
            name: 'Strong Communication',
            description: 'Clear and effective communication in technical and non-technical contexts.'
        },
        {
            icon: Target,
            name: 'Effective Presentation',
            description: 'Ability to present ideas and solutions in a compelling manner.'
        },
        {
            icon: Lightbulb,
            name: 'Problem-Solving',
            description: 'Analytical approach to breaking down complex problems into solutions.'
        },
        {
            icon: Users,
            name: 'Team Collaboration',
            description: 'Experience working effectively in team environments and group projects.'
        }
    ];

    const tools = [
        { name: 'VS Code', category: 'Editor' },
        { name: 'Git', category: 'Version Control' },
        { name: 'GitHub', category: 'Repository' },
        { name: 'Azure', category: 'Cloud' },
        { name: 'Postman', category: 'API Testing' },
        { name: 'Chrome DevTools', category: 'Debugging' }
    ];

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                            Skills & Expertise
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                            My Technical Toolkit
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            A comprehensive overview of my technical skills, tools, and soft skills
                            that I bring to every project. Continuously learning and expanding my expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Technical Skills */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Technical Skills"
                        title="Technologies I Work With"
                        description="From frontend to backend, here are the technologies I use to build applications"
                    />

                    <div className="grid md:grid-cols-2 gap-8">
                        {technicalSkills.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                                        <category.icon className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-slate-900">{category.category}</h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-slate-700 font-medium">{skill.name}</span>
                                                <span className="text-slate-500 text-sm">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                    className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Soft Skills */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Soft Skills"
                        title="Beyond Technical Abilities"
                        description="The interpersonal and professional skills that complement my technical expertise"
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100 text-center hover:shadow-lg transition-all"
                            >
                                <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                                    <skill.icon className="w-7 h-7 text-indigo-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">{skill.name}</h3>
                                <p className="text-slate-500 text-sm">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Technologies */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Tools"
                        title="Development Environment"
                        description="The tools and platforms I use in my daily workflow"
                    />

                    <div className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-xl px-5 py-3 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-default"
                            >
                                <span className="font-medium text-slate-800">{tool.name}</span>
                                <span className="text-slate-400 text-sm ml-2">• {tool.category}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Journey */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
                                Currently Learning
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                                Always Growing, Always Learning
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                Technology never stops evolving, and neither do I. Here's what I'm
                                currently focused on expanding my knowledge in:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Azure AI Services & Cognitive APIs',
                                    'Machine Learning Fundamentals',
                                    'Advanced Python & Data Structures',
                                    'Cloud Architecture Basics'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square max-w-sm mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl transform rotate-3" />
                                <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <Workflow className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Continuous Growth</h3>
                                        <p className="text-slate-500">Embracing new challenges every day</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Layers className="w-12 h-12 mx-auto text-indigo-400 mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Want to See My Skills in Action?
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Check out my projects to see how I apply these skills to build real-world applications.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-8 h-12"
                        >
                            <Link to={createPageUrl('Projects')}>
                                View Projects
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
