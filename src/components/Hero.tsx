import { resumeData } from "@/data/resume";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Section } from "@/components/ui/Section";

export default function Hero() {
    return (
        <Section className="py-24 md:py-40 flex flex-col justify-center min-h-[80vh]">
            <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4">
                    Hello, I&apos;m
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
                    {resumeData.name}
                </h1>
                <h2 className="text-3xl md:text-5xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
                    {resumeData.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
                    {resumeData.summary}
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/20"
                    >
                        View Projects
                        <ArrowRight size={20} />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </Section>
    );
}
