import { resumeData } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    return (
        <Section id="projects" title="Featured Projects" className="bg-slate-50/50 dark:bg-slate-900/50">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeData.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full group">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                                {project.subtitle}
                            </p>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                            {project.description}
                        </p>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Optional Links Placeholder - if data had links it would go here */}
                            <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <Link href="#" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                    <Github size={16} />
                                    <span>Code</span>
                                </Link>
                                <Link href="#" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                                    <ExternalLink size={16} />
                                    <span>Demo</span>
                                </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
