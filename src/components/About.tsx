import { resumeData } from "@/data/resume";
import { Section } from "@/components/ui/Section";

export default function About() {
    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        I am a passionate <strong>{resumeData.title}</strong> with experience in building scalable backend systems.
                        My journey involves working on critical government projects and optimizing database performance.
                    </p>
                    <p>
                        {resumeData.summary} I focus on writing clean, maintainable code and testing rigorously to ensure stability.
                    </p>
                    <p>
                        When I&apos;m not coding, I enjoy exploring new technologies and contributing to open-source communities.
                    </p>
                </div>

                {/* Stats or Highlight Box */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800/50">
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Highlights</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                            <span className="text-slate-700 dark:text-slate-300">1+ Years of Backend Experience</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                            <span className="text-slate-700 dark:text-slate-300">Scalable Government Projects</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                            <span className="text-slate-700 dark:text-slate-300">Secure API Development</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
