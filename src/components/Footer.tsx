import { resumeData } from "@/data/resume";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-slate-900 dark:text-white">{resumeData.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link
                        href={`mailto:${resumeData.contact.email}`}
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Mail size={20} />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link
                        href={`https://${resumeData.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href={`https://${resumeData.contact.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
