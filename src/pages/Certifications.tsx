import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ExternalLink, Award, Shield, Database, Brain,
    BarChart3, ShoppingCart, Lock, Briefcase, Lightbulb,
    Search, Filter, CheckCircle, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function Certifications() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const certifications = [
        {
            id: 1,
            title: 'Google IT Support Specialization',
            issuer: 'Google',
            platform: 'Coursera',
            category: 'it',
            icon: Shield,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600',
            description: 'Comprehensive IT support training covering troubleshooting, networking, operating systems, system administration, and security fundamentals.',
            skills: ['IT Support', 'Networking', 'System Admin', 'Security'],
            link: 'https://www.coursera.org/account/accomplishments/specialization/76LTCZ3LF3PY',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png'
        },
        {
            id: 2,
            title: 'Google Cybersecurity Certificate',
            issuer: 'Google',
            platform: 'Coursera',
            category: 'security',
            icon: Lock,
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-50',
            iconColor: 'text-emerald-600',
            description: 'Professional cybersecurity certification covering threat detection, incident response, security operations, and risk management.',
            skills: ['Cybersecurity', 'Threat Detection', 'SIEM', 'Risk Management'],
            link: 'https://www.coursera.org/account/accomplishments/records/26QCY70BGI7R',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png'
        },
        {
            id: 3,
            title: 'AI Essentials',
            issuer: 'IBM',
            platform: 'Credly',
            category: 'ai',
            icon: Brain,
            color: 'from-purple-500 to-violet-500',
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600',
            description: 'Foundational artificial intelligence concepts including machine learning, neural networks, and AI applications in business.',
            skills: ['Artificial Intelligence', 'Machine Learning', 'AI Applications'],
            link: 'https://www.credly.com/badges/95b7382b-2021-40f9-b2fa-7e6385294751/linked_in_profile',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png'
        },
        {
            id: 4,
            title: 'Data Analyst Certificate',
            issuer: 'IBM',
            platform: 'Credly',
            category: 'data',
            icon: BarChart3,
            color: 'from-indigo-500 to-blue-500',
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
            description: 'Professional data analytics certification covering data visualization, statistical analysis, Python, SQL, and business intelligence.',
            skills: ['Data Analysis', 'Python', 'SQL', 'Visualization', 'Statistics'],
            link: 'https://www.credly.com/badges/409bf8e6-cf6e-4682-82dd-9ce3b73e3842/linked_in_profile',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png'
        },
        {
            id: 5,
            title: 'Advanced SQL',
            issuer: 'HackerRank',
            platform: 'HackerRank',
            category: 'data',
            icon: Database,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600',
            description: 'Advanced SQL proficiency certification demonstrating expertise in complex queries, joins, subqueries, and database optimization.',
            skills: ['SQL', 'Database', 'Query Optimization', 'Data Management'],
            link: 'https://www.hackerrank.com/certificates/iframe/4bcd26773c6e',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/120px-HackerRank_Icon-1000px.png'
        },
        {
            id: 6,
            title: 'Project Management Fundamentals',
            issuer: 'Coursera',
            platform: 'Coursera',
            category: 'management',
            icon: Briefcase,
            color: 'from-orange-500 to-amber-500',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600',
            description: 'Comprehensive project management training covering planning, execution, monitoring, and agile methodologies.',
            skills: ['Project Management', 'Planning', 'Execution', 'Agile'],
            link: 'https://www.coursera.org/account/accomplishments/specialization/EWGGD543G34V',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png'
        },
        {
            id: 7,
            title: 'Agile Project Management',
            issuer: 'LIFE Global',
            platform: 'LIFE Global',
            category: 'management',
            icon: Sparkles,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-cyan-50',
            iconColor: 'text-cyan-600',
            description: 'Agile methodology certification covering Scrum, Kanban, sprint planning, and iterative development practices.',
            skills: ['Agile', 'Scrum', 'Kanban', 'Sprint Planning'],
            link: 'https://www.life-global.org/certificate/e5b20826-ee5e-4df0-a6ac-c015860645cc',
            issuerLogo: null
        },
        {
            id: 8,
            title: 'Junior Cybersecurity Analyst',
            issuer: 'Cisco',
            platform: 'Coursera',
            category: 'security',
            icon: Shield,
            color: 'from-red-500 to-rose-500',
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600',
            description: 'Entry-level cybersecurity analyst certification covering security monitoring, threat analysis, and incident handling.',
            skills: ['Security Analysis', 'Threat Monitoring', 'Incident Response'],
            link: 'https://www.coursera.org/account/accomplishments/records/CUQ856DJ70J2',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png'
        },
        {
            id: 9,
            title: 'Foundations of E-commerce',
            issuer: 'Google',
            platform: 'Credly',
            category: 'business',
            icon: ShoppingCart,
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-pink-50',
            iconColor: 'text-pink-600',
            description: 'E-commerce fundamentals covering online business strategy, digital marketing, customer acquisition, and sales optimization.',
            skills: ['E-commerce', 'Digital Marketing', 'Sales Strategy'],
            link: 'https://www.credly.com/badges/6920f958-203f-4029-9d8d-d022817ec502/linked_in_profile',
            issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png'
        },
        {
            id: 10,
            title: 'Intellectual Property Rights',
            issuer: 'NPTEL',
            platform: 'NPTEL',
            category: 'business',
            icon: Lightbulb,
            color: 'from-amber-500 to-yellow-500',
            bgColor: 'bg-amber-50',
            iconColor: 'text-amber-600',
            description: 'Comprehensive course on intellectual property covering patents, copyrights, trademarks, and trade secrets protection.',
            skills: ['IPR', 'Patents', 'Copyrights', 'Legal Compliance'],
            link: 'https://drive.google.com/file/d/1UQmWwmqVqNZvSYCxHIvidgWeIEh0OHGG/view?usp=drivesdk',
            issuerLogo: null
        },
        {
            id: 11,
            title: 'Cyber Threat Intelligence (CTI)',
            issuer: 'Industry Certification',
            platform: 'Professional',
            category: 'security',
            icon: Lock,
            color: 'from-slate-600 to-slate-800',
            bgColor: 'bg-slate-50',
            iconColor: 'text-slate-600',
            description: 'Advanced cyber threat intelligence training covering threat hunting, intelligence gathering, and adversary profiling.',
            skills: ['Threat Intelligence', 'Threat Hunting', 'Security Analysis'],
            link: null,
            issuerLogo: null
        }
    ];

    const filters = [
        { key: 'all', label: 'All', count: certifications.length },
        { key: 'security', label: 'Security', count: certifications.filter(c => c.category === 'security').length },
        { key: 'data', label: 'Data & SQL', count: certifications.filter(c => c.category === 'data').length },
        { key: 'ai', label: 'AI/ML', count: certifications.filter(c => c.category === 'ai').length },
        { key: 'it', label: 'IT Support', count: certifications.filter(c => c.category === 'it').length },
        { key: 'management', label: 'Management', count: certifications.filter(c => c.category === 'management').length },
        { key: 'business', label: 'Business', count: certifications.filter(c => c.category === 'business').length }
    ];

    const filteredCerts = certifications.filter(cert => {
        const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesFilter = activeFilter === 'all' || cert.category === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            Professional Credentials
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                            Industry-recognized certifications demonstrating expertise across cybersecurity,
                            data analytics, AI, cloud technologies, and project management.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mb-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-600">{certifications.length}</div>
                                <div className="text-sm text-slate-500">Certifications</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">6+</div>
                                <div className="text-sm text-slate-500">Platforms</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-600">20+</div>
                                <div className="text-sm text-slate-500">Skills Validated</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Search & Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Search */}
                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <Input
                                placeholder="Search certifications, skills, or issuers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 h-14 rounded-2xl border-slate-200 bg-white shadow-sm text-base"
                            />
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {filters.map((filter) => (
                                <Button
                                    key={filter.key}
                                    variant={activeFilter === filter.key ? 'default' : 'outline'}
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`rounded-full ${activeFilter === filter.key
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white text-slate-600 hover:text-slate-900'
                                        }`}
                                >
                                    {filter.label}
                                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeFilter === filter.key ? 'bg-white/20' : 'bg-slate-100'
                                        }`}>
                                        {filter.count}
                                    </span>
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                            >
                                {/* Header with Gradient */}
                                <div className={`relative h-24 bg-gradient-to-r ${cert.color} p-5`}>
                                    <div className="flex items-start justify-between">
                                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <cert.icon className="w-6 h-6 text-white" />
                                        </div>
                                        {cert.issuerLogo && (
                                            <div className="w-10 h-10 rounded-lg bg-white p-1.5 shadow-lg">
                                                <img
                                                    src={cert.issuerLogo}
                                                    alt={cert.issuer}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Verified Badge */}
                                    {cert.link && (
                                        <div className="absolute bottom-3 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                                            <CheckCircle className="w-3 h-3" />
                                            Verified
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Title & Issuer */}
                                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-sm text-slate-500">{cert.issuer}</span>
                                        {cert.platform !== cert.issuer && (
                                            <>
                                                <span className="text-slate-300">•</span>
                                                <span className="text-sm text-slate-400">{cert.platform}</span>
                                            </>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                                        {cert.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {cert.skills.slice(0, 3).map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className={`${cert.bgColor} ${cert.iconColor} border-0 text-xs font-medium`}
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                        {cert.skills.length > 3 && (
                                            <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-0 text-xs">
                                                +{cert.skills.length - 3}
                                            </Badge>
                                        )}
                                    </div>

                                    {/* View Credential Button */}
                                    {cert.link ? (
                                        <Button
                                            asChild
                                            className={`w-full bg-gradient-to-r ${cert.color} hover:opacity-90 text-white rounded-xl h-10`}
                                        >
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Credential
                                            </a>
                                        </Button>
                                    ) : (
                                        <Button
                                            disabled
                                            className="w-full bg-slate-100 text-slate-400 rounded-xl h-10 cursor-not-allowed"
                                        >
                                            Verification Pending
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredCerts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">No certifications found</h3>
                            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Featured Platforms */}
            <section className="py-16 md:py-24 bg-white/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                            Certified By Industry Leaders
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Credentials from world-renowned platforms and organizations
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {[
                            { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png' },
                            { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png' },
                            { name: 'Coursera', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/120px-Coursera-Logo_600x600.svg.png' },
                            { name: 'HackerRank', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/120px-HackerRank_Icon-1000px.png' },
                            { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png' }
                        ].map((platform, index) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            >
                                <img
                                    src={platform.logo}
                                    alt={platform.name}
                                    className="h-8 md:h-10 object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'%3E%3C/path%3E%3C/svg%3E\")" }} />

                        <div className="relative z-10">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Always Learning, Always Growing
                            </h2>
                            <p className="text-white/80 max-w-lg mx-auto mb-8">
                                These certifications represent my commitment to continuous learning and staying
                                updated with the latest technologies and industry standards.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8"
                                >
                                    <a href="https://linkedin.com/in/vadlapudi-pranab" target="_blank" rel="noopener noreferrer">
                                        View LinkedIn Profile
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
                                >
                                    <a href="mailto:thepranab.it@gmail.com">
                                        Get In Touch
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
