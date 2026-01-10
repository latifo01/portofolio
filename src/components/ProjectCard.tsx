"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    metrics?: Record<string, string>;
    featured?: boolean;
    image?: string;
    github?: string;
}

interface ProjectCardProps {
    project: Project;
    compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.id}`}>
            <div
                className={`glass-card p-6 h-full transition-all duration-300 hover:scale-[1.02] cursor-pointer group ${compact ? "flex gap-6" : ""
                    }`}
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className={`relative z-10 ${compact ? "flex-1" : ""}`}>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">
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
                                className="px-2 py-1 text-xs font-code bg-primary/10 text-primary-light rounded-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Metrics (for featured cards) */}
                    {!compact && project.metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <div className="text-lg font-bold gradient-text">{value}</div>
                                    <div className="text-xs text-foreground/50 capitalize">{key}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                        <span className="flex items-center gap-1 group-hover:text-primary-light transition-colors">
                            View Details
                            <ExternalLink className="w-3 h-3" />
                        </span>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1 hover:text-foreground transition-colors"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
