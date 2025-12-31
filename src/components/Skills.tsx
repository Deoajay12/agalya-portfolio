import { resumeData } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code2, Database, Cloud, TestTube } from "lucide-react";

export default function Skills() {
    const icons = {
        backend: Code2,
        database: Database,
        devops: Cloud,
        testing: TestTube,
    };

    const categories = [
        { id: "backend", label: "Backend Development", icon: icons.backend },
        { id: "database", label: "Databases", icon: icons.database },
        { id: "devops", label: "Cloud & DevOps", icon: icons.devops },
        { id: "testing", label: "Testing Tools", icon: icons.testing },
    ];

    return (
        <Section id="skills" title="Technical Skills" className="bg-slate-50/50 dark:bg-slate-900/50">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    const skills = resumeData.skills[cat.id as keyof typeof resumeData.skills];

                    return (
                        <Card key={cat.id} className="h-full hover:border-blue-300 dark:hover:border-blue-700">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600 dark:text-blue-400">
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                                    {cat.label}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}
