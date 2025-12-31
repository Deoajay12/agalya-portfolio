import { resumeData } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <Section id="experience" title="Work Experience">
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12 py-4">
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {exp.role}
                            </h3>
                            <span className="text-sm font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full w-fit mt-2 sm:mt-0">
                                {exp.period}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-400">
                            <Briefcase size={16} />
                            <span className="font-medium">{exp.company}</span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
