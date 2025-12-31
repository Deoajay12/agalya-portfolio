"use client";

import { resumeData } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setSubmitted(true);
    }

    return (
        <Section id="contact" title="Get In Touch" className="pb-32">
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <Card className="flex flex-col items-center justify-center p-8 hover:border-blue-500 border-dashed">
                            <Mail className="w-8 h-8 text-blue-600 mb-4" />
                            <p className="font-semibold text-slate-900 dark:text-white">Email Me</p>
                            <Link href={`mailto:${resumeData.contact.email}`} className="text-sm text-slate-500 hover:text-blue-600 mt-2">
                                {resumeData.contact.email}
                            </Link>
                        </Card>

                        <Card className="flex flex-col items-center justify-center p-8 hover:border-blue-500 border-dashed">
                            <Linkedin className="w-8 h-8 text-blue-600 mb-4" />
                            <p className="font-semibold text-slate-900 dark:text-white">LinkedIn</p>
                            <Link href={`https://${resumeData.contact.linkedin}`} target="_blank" className="text-sm text-slate-500 hover:text-blue-600 mt-2">
                                Connect
                            </Link>
                        </Card>
                    </div>

                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 pl-2">
                        <Phone size={20} />
                        <span>{resumeData.contact.phone}</span>
                    </div>
                </div>

                <Card className="bg-slate-50 dark:bg-slate-900/50">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                placeholder="Hello, I'd like to discuss..."
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || submitted}
                            className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitted ? (
                                "Message Sent!"
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </Card>
            </div>
        </Section>
    );
}
