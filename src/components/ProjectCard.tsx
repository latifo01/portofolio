"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
    project,
    compact = false,
}: {
    project: Project;
    compact?: boolean;
}) {
    return (
        <Link href={`/projects/${project.id}`} className="block h-full">
            <article className={`glass-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl ${compact ? "" : ""}`}>
                {project.image && !compact && (
                    <div className="relative h-52 overflow-hidden bg-background-secondary">
                        <Image
                            src={project.image}
                            alt={`${project.title} cover`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                        {project.demoUrl && (
                            <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary-light">
                                <ExternalLink className="h-3.5 w-3.5" />
                                Live demo
                            </div>
                        )}
                    </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                    <p className="font-code text-[11px] uppercase tracking-[0.25em] text-primary-light mb-3">
                        {project.context}
                    </p>

                    <div className="mb-3 flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-primary-light">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/35 transition-colors group-hover:text-primary-light" />
                    </div>

                    <p className="mb-3 text-sm font-medium text-secondary-light">{project.tagline}</p>
                    <p className={`text-sm leading-relaxed text-foreground/64 ${compact ? "line-clamp-3" : "line-clamp-4"}`}>
                        {project.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-foreground/78"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {!compact && (
                        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                            {project.metrics.slice(0, 3).map((metric) => (
                                <div key={metric.label}>
                                    <p className="text-lg font-semibold gradient-text">{metric.value}</p>
                                    <p className="text-xs uppercase tracking-[0.14em] text-foreground/40">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-auto flex items-center gap-4 border-t border-border pt-5 text-xs uppercase tracking-[0.18em] text-foreground/42">
                        <span>Case study</span>
                        {project.github && (
                            <span className="inline-flex items-center gap-1">
                                <Github className="h-3.5 w-3.5" />
                                Code
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    );
}
