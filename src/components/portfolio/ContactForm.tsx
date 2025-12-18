import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Submit to Web3Forms
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: 'ad10ed32-5a73-4581-bad8-c972aac0220d',
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                from_name: 'Portfolio Contact Form',
            }),
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setIsSubmitted(true);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setTimeout(() => setIsSubmitted(false), 3000);
                }
                setIsSubmitting(false);
            })
            .catch(error => {
                console.error('Form submission error:', error);
                setIsSubmitting(false);
            });
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                    <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
            </div>

            <div className="space-y-2 mb-5">
                <Label htmlFor="subject" className="text-slate-700">Subject</Label>
                <Input
                    id="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-slate-700">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-12 rounded-xl font-medium transition-all ${isSubmitted
                        ? 'bg-emerald-500 hover:bg-emerald-500'
                        : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : isSubmitted ? (
                    <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                    </>
                )}
            </Button>
        </motion.form>
    );
}
