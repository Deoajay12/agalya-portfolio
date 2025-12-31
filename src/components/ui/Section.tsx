import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 scroll-mt-16", className)}
        >
            <div className="container-custom">
                {(title || subtitle) && (
                    <div className="mb-12 md:mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                        <div className="h-1 w-20 bg-blue-600 rounded-full mt-6" />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
