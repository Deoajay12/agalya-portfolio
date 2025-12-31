import { resumeData } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Education() {
    return (
        <Section id="education" title="Education">
            <div className="grid md:grid-cols-3 gap-6">
                {resumeData.education.map((edu, index) => (
                    <Card key={index} className="relative">
                        <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-800">
                            <GraduationCap size={48} />
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                            {edu.degree}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-400 font-medium mb-1 relative z-10">
                            {edu.school}
                        </p>

                        <div className="flex justify-between items-center mt-6 relative z-10 text-sm">
                            <span className="text-slate-500">{edu.year}</span>
                            <span className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{edu.score}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
