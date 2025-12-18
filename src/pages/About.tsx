import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    Award,
    Code2,
    Briefcase,
    MapPin,
    Calendar,
    ArrowRight,
    Download,
    Target,
    Lightbulb,
    Users,
    Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/portfolio/SectionHeading';
import Timeline from '@/components/portfolio/Timeline';
import CertificationCard from '@/components/portfolio/CertificationCard';

export default function About() {
    const educationTimeline = [
        {
            title: 'B.Tech in Information Technology',
            organization: 'Sri Indu College of Engineering and Technology (SICET)',
            location: 'Hyderabad, India',
            date: 'Oct 2022 - Present',
            description: 'Pursuing Information Technology with a 7.75 CGPA. Gaining hands-on experience in full-stack development, building responsive web applications, and exploring AI technologies.',
            highlights: [
                'Full-stack web development projects',
                'Active participation in technical events',
                'Focus on practical, real-world applications'
            ]
        },
        {
            title: 'Intermediate Education',
            organization: 'Resonance Junior College',
            location: 'Hyderabad, India',
            date: 'Jun 2020 - May 2022',
            description: 'Built a strong foundation in Mathematics, Physics, and Chemistry with IIT-JEE level preparation. Scored 813 marks developing strong analytical and problem-solving skills.',
            highlights: [
                'IIT-JEE level preparation',
                'Strong analytical skill development'
            ]
        },
        {
            title: 'Secondary Education',
            organization: 'Krishnaveni Talent School',
            location: 'Sathupally, India',
            date: 'Jun 2019 - May 2020',
            description: 'Completed 10th grade with exceptional academic performance in Science, Mathematics, and English, securing a perfect 10/10 GPA.',
            highlights: [
                'Perfect 10/10 GPA',
                'Excellence in Science & Mathematics'
            ]
        }
    ];

    const certifications = [
        {
            title: 'Python for Beginners Course In-Depth',
            issuer: 'Udemy',
            year: '2024'
        },
        {
            title: 'Google IT Support',
            issuer: 'Google',
            year: '2024'
        },
        {
            title: 'Programming Fundamentals Using Python-1,2',
            issuer: 'Infosys Springboard',
            year: '2023'
        }
    ];

    const achievements = [
        {
            icon: Award,
            title: 'Inspire Event 2023',
            description: 'Attended the prestigious Inspire Event, gaining exposure to industry trends and networking opportunities.'
        },
        {
            icon: Users,
            title: 'Cybersecurity Events Organizer',
            description: 'Organized cybersecurity awareness events for students, promoting digital safety and security best practices.'
        }
    ];

    const values = [
        {
            icon: Target,
            title: 'Problem Solver',
            description: 'I approach every challenge with analytical thinking and creative solutions.'
        },
        {
            icon: Lightbulb,
            title: 'Continuous Learner',
            description: 'Always exploring new technologies and expanding my skill set.'
        },
        {
            icon: Users,
            title: 'Team Player',
            description: 'Strong collaborator who thrives in team environments.'
        },
        {
            icon: Rocket,
            title: 'Results Driven',
            description: 'Focused on delivering impactful, real-world solutions.'
        }
    ];

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 transform rotate-3" />
                                <div className="absolute inset-0 rounded-3xl bg-slate-100 flex items-center justify-center">
                                    <div className="text-9xl font-bold gradient-text">P</div>
                                </div>

                                {/* Experience Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                                            <Briefcase className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-slate-900">AI</p>
                                            <p className="text-sm text-slate-500">Azure Intern</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                                About Me
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Crafting Digital Solutions with Passion
                            </h1>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                Hey there! I'm <strong className="text-slate-700">Vadlapudi Pranab</strong>,
                                a full-stack developer and IT student based in Hyderabad, India. I'm passionate
                                about building web applications that solve real problems and create meaningful experiences.
                            </p>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Currently pursuing my B.Tech at SICET while exploring AI technologies through
                                my internship at Edunet Foundation with Microsoft Azure. I believe in writing
                                clean, efficient code and continuously pushing myself to learn new things.
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <MapPin className="w-5 h-5 text-indigo-500" />
                                    Hyderabad, India
                                </div>
                                <div className="flex items-center gap-2 text-slate-600">
                                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                                    B.Tech IT Student
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    asChild
                                    className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6"
                                >
                                    <Link to={createPageUrl('Contact')}>
                                        Get In Touch
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69268ed3f77f233e4dbed9d0/a525d25e8_VADLAPUDI-PRANAB-FlowCV-Resume-20250614.pdf" target="_blank" rel="noopener noreferrer">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="What Drives Me"
                        title="Core Values & Strengths"
                        description="The principles that guide my work and collaboration"
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-500 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Experience"
                        title="Professional Journey"
                        description="My internship and hands-on experience"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-indigo-100"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                                <Code2 className="w-7 h-7 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                                    AI/ML Intern
                                </h3>
                                <p className="text-indigo-600 font-medium">Edunet Foundation × Microsoft Azure</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                May 2025 - Present
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                Hyderabad, India
                            </span>
                        </div>

                        <p className="text-slate-600 mb-6">
                            Learning AI fundamentals and real-world applications using Azure services including
                            Cognitive Services, Machine Learning, and Bot Framework.
                        </p>

                        <ul className="space-y-3">
                            {[
                                'Face detection and recognition systems',
                                'Sentiment analysis applications',
                                'Text translation and processing',
                                'Azure Bot Framework implementation'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-600">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Education"
                        title="Academic Background"
                        description="My educational journey and achievements"
                    />
                    <Timeline items={educationTimeline} />
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Certifications"
                        title="Professional Credentials"
                        description="Certifications that validate my skills and knowledge"
                    />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <CertificationCard key={index} {...cert} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="Achievements"
                        title="Notable Accomplishments"
                        description="Events and initiatives I've been part of"
                    />
                    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                                    <achievement.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">{achievement.title}</h3>
                                <p className="text-slate-500 text-sm">{achievement.description}</p>
                            </motion.div>
                        ))}
                    </div>
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
                            Ready to Work Together?
                        </h2>
                        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 h-12"
                        >
                            <Link to={createPageUrl('Contact')}>
                                Let's Connect
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
