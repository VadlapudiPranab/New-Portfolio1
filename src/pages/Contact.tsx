import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Send,
    MessageCircle,
    Clock,
    CheckCircle
} from 'lucide-react';
import SectionHeading from '@/components/portfolio/SectionHeading';
import ContactForm from '@/components/portfolio/ContactForm';

export default function Contact() {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'thepranab.it@gmail.com',
            link: 'mailto:thepranab.it@gmail.com',
            color: 'bg-red-50 text-red-600'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 9542736323',
            link: 'tel:+919542736323',
            color: 'bg-green-50 text-green-600'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Hyderabad, India',
            link: null,
            color: 'bg-blue-50 text-blue-600'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            handle: '@VadlapudiPranab',
            link: 'https://github.com/VadlapudiPranab',
            color: 'bg-slate-900 text-white'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            handle: 'vadlapudi-pranab',
            link: 'https://linkedin.com/in/vadlapudi-pranab',
            color: 'bg-blue-600 text-white'
        }
    ];

    return (
        <div className="bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Get In Touch
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Have a project in mind? Looking to collaborate? Or just want to say hello?
                            I'd love to hear from you. Drop me a message and I'll get back to you soon!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                Contact Information
                            </h2>
                            <p className="text-slate-500 mb-8">
                                Feel free to reach out through any of the following channels.
                                I typically respond within 24-48 hours.
                            </p>

                            {/* Contact Cards */}
                            <div className="space-y-4 mb-10">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center`}>
                                            <info.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="font-medium text-slate-900">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-4">Connect on Social</h3>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all group"
                                        >
                                            <div className={`w-10 h-10 rounded-lg ${social.color} flex items-center justify-center`}>
                                                <social.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
                                                    {social.label}
                                                </p>
                                                <p className="text-xs text-slate-500">{social.handle}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="mt-10 p-6 bg-indigo-50 rounded-2xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">Quick Response</h4>
                                        <p className="text-sm text-slate-600">
                                            I aim to respond to all messages within 24-48 hours.
                                            For urgent matters, feel free to call directly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                Send a Message
                            </h2>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ-like Section */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <SectionHeading
                        badge="What to Expect"
                        title="How I Can Help"
                        description="Here's what you can reach out to me for"
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Project Collaboration',
                                description: 'Looking to build a web application? I\'m open to collaborating on interesting projects.'
                            },
                            {
                                title: 'Freelance Work',
                                description: 'Need a developer for your project? Let\'s discuss how I can help bring your ideas to life.'
                            },
                            {
                                title: 'Internship Opportunities',
                                description: 'Currently exploring internship opportunities in full-stack development and AI.'
                            },
                            {
                                title: 'Just Say Hi',
                                description: 'Want to connect or share ideas? I\'m always happy to chat with fellow developers and tech enthusiasts.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 p-6 bg-slate-50 rounded-2xl"
                            >
                                <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map-like Visual Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <MapPin className="w-12 h-12 mx-auto text-indigo-400 mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Based in Hyderabad, India
                        </h2>
                        <p className="text-slate-300 text-lg mb-2">
                            Available for remote work and local opportunities
                        </p>
                        <p className="text-slate-400">
                            Open to relocation for the right opportunity
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
