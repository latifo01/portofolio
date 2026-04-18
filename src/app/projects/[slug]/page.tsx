import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const project = getProjectById(params.slug);

    if (!project) {
        return {
            title: "Project not found",
        };
    }

    return {
        title: project.title,
        description: project.summary,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = getProjectById(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <article className="px-6 pb-24 pt-32">
                <div className="section-shell max-w-5xl">
                    <Link
                        href="/projects"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/62 transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to all projects
                    </Link>

                    <header className="mb-10">
                        <p className="font-code text-xs uppercase tracking-[0.24em] text-primary-light mb-4">
                            {project.context}
                        </p>
                        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{project.title}</h1>
                        <p className="mt-4 text-xl text-secondary-light">{project.tagline}</p>
                        <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/68 md:text-lg">
                            {project.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-3 text-sm font-medium text-foreground/82 transition-colors hover:bg-white/10"
                                >
                                    <Github className="h-4 w-4" />
                                    View code
                                </a>
                            )}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Open demo
                                </a>
                            )}
                        </div>
                    </header>

                    {project.image && (
                        <section className="mb-10 overflow-hidden rounded-[28px] border border-border bg-background-secondary/70 p-3">
                            <img
                                src={project.image}
                                alt={`${project.title} visual`}
                                className="w-full rounded-[22px] object-cover"
                            />
                        </section>
                    )}

                    <section className="mb-10 grid gap-4 md:grid-cols-3">
                        {project.metrics.map((metric) => (
                            <div key={metric.label} className="glass-card p-6">
                                <p className="text-3xl font-semibold gradient-text">{metric.value}</p>
                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/42">{metric.label}</p>
                            </div>
                        ))}
                    </section>

                    <section className="mb-10 grid gap-4 lg:grid-cols-3">
                        <div className="glass-card p-6">
                            <p className="font-code text-xs uppercase tracking-[0.22em] text-primary-light mb-3">
                                Problem
                            </p>
                            <p className="text-sm leading-relaxed text-foreground/68">{project.problem}</p>
                        </div>
                        <div className="glass-card p-6">
                            <p className="font-code text-xs uppercase tracking-[0.22em] text-primary-light mb-3">
                                Approach
                            </p>
                            <p className="text-sm leading-relaxed text-foreground/68">{project.approach}</p>
                        </div>
                        <div className="glass-card p-6">
                            <p className="font-code text-xs uppercase tracking-[0.22em] text-primary-light mb-3">
                                Results
                            </p>
                            <p className="text-sm leading-relaxed text-foreground/68">{project.impact}</p>
                        </div>
                    </section>

                    <section className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="glass-card p-7">
                            <p className="font-code text-xs uppercase tracking-[0.22em] text-primary-light mb-4">
                                What is in the repository
                            </p>
                            <div className="space-y-3">
                                {project.highlights.map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="rounded-2xl border border-border bg-white/5 px-4 py-4 text-sm leading-relaxed text-foreground/72"
                                    >
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass-card p-7">
                                <p className="font-code text-xs uppercase tracking-[0.22em] text-primary-light mb-4">
                                    Role and scope
                                </p>
                                <p className="text-sm leading-relaxed text-foreground/72">{project.role}</p>

                                <p className="mt-6 font-code text-xs uppercase tracking-[0.22em] text-primary-light">
                                    Project context
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-foreground/72">{project.context}</p>

                                <div className="mt-6">
                                    <p className="mb-3 font-code text-xs uppercase tracking-[0.22em] text-primary-light">
                                        Main stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-border bg-white/5 px-3 py-2 text-xs text-foreground/78"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
