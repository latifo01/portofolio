"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    metrics: Record<string, string>;
    github: string;
    image?: string;
    gif?: string;
    demoUrl?: string;
    featured?: boolean;
}

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
    const displayImage = project.gif || project.image;

    return (
        <Link href={`/projects/${project.id}`}>
            <article className={`glass-card overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${compact ? "" : "h-full"}`}>
                {/* Image/GIF Section */}
                {displayImage && !compact && (
                    <div className="relative h-48 overflow-hidden bg-background-secondary">
                        <Image
                            src={displayImage}
                            alt={`Screenshot of ${project.title} project`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                        {/* Demo Badge */}
                        {project.demoUrl && (
                            <div className="absolute top-3 right-3 px-2 py-1 bg-accent-gradient rounded-full text-xs font-semibold flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                Live Demo
                            </div>
                        )}
                    </div>
                )}

                <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-foreground/60 text-sm mb-4 ${compact ? "line-clamp-2" : "line-clamp-3"}`}>
                        {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-code bg-primary/10 text-primary-light rounded"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > (compact ? 3 : 4) && (
                            <span className="px-2 py-1 text-xs font-code bg-foreground/10 text-foreground/50 rounded">
                                +{project.technologies.length - (compact ? 3 : 4)}
                            </span>
                        )}
                    </div>

                    {/* Metrics */}
                    {!compact && (
                        <div className="flex gap-4 pt-4 border-t border-border">
                            {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                <div key={key} className="text-center flex-1">
                                    <div className="text-lg font-bold gradient-text">{value}</div>
                                    <div className="text-xs text-foreground/40 capitalize">{key}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Links Row */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-xs text-foreground/40 flex items-center gap-1">
                            <Github className="w-3 h-3" />
                            View Details
                        </span>
                        {project.demoUrl && compact && (
                            <span className="text-xs text-primary-light flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                Live Demo
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    );
}
