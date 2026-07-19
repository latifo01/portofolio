import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, FileText, Github, TriangleAlert } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectById(slug);
    return project ? { title: project.title, description: project.summary } : { title: "Project not found" };
}

const linkIcons = { code: Github, demo: ExternalLink, report: FileText };

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectById(slug);
    if (!project) notFound();

    return (
        <main id="main-content" className="min-h-screen">
            <Navbar />

            <article className="px-3 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
                <div className="section-shell">
                    <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground/62 hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back to evidence library</Link>

                    <header className="mt-8 grid gap-8 border-y border-foreground py-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                        <div>
                            <p className="font-code text-[10px] font-bold uppercase tracking-[0.18em] text-primary">{project.ordinal} / {project.context}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="rounded-full bg-foreground px-3 py-1.5 font-code text-[9px] uppercase tracking-[0.14em] text-white">{project.status}</span>
                                {project.categories.map((category) => <span key={category} className="rounded-full border border-foreground/20 bg-paper px-3 py-1.5 font-code text-[9px] uppercase tracking-[0.14em]">{category.replace("-", " ")}</span>)}
                            </div>
                        </div>
                        <div>
                            <h1 className="max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.065em] sm:text-7xl">{project.title}</h1>
                            <p className="mt-6 max-w-3xl text-lg font-semibold leading-relaxed text-secondary">{project.tagline}</p>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/64">{project.description}</p>
                            {project.links.length > 0 && (
                                <div className="mt-7 flex flex-wrap gap-3">
                                    {project.links.map((link, index) => {
                                        const Icon = linkIcons[link.kind];
                                        return <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={index === 0 ? "button-secondary" : "button-quiet"}><Icon className="h-4 w-4" /> {link.label}<ArrowUpRight className="h-3.5 w-3.5" /></a>;
                                    })}
                                </div>
                            )}
                        </div>
                    </header>

                    {project.image && (
                        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-[1.5rem] border border-foreground bg-background-secondary">
                            <Image src={project.image} alt={`${project.shortTitle} project visual`} fill priority sizes="(max-width: 1280px) 100vw, 1240px" className="object-cover" />
                        </div>
                    )}

                    <section aria-labelledby="evidence-heading" className="mt-8">
                        <div className="flex items-center justify-between border-b border-foreground pb-4">
                            <h2 id="evidence-heading" className="font-code text-xs font-bold uppercase tracking-[0.17em]">Evidence register</h2>
                            <CheckCircle2 className="h-4 w-4 text-[#2f9d67]" />
                        </div>
                        <div className="grid border-b border-foreground md:grid-cols-3">
                            {project.evidence.map((item, index) => (
                                <div key={item.label} className={`p-6 ${index > 0 ? "border-t border-foreground/20 md:border-l md:border-t-0" : ""}`}>
                                    <p className="text-4xl font-bold tracking-[-0.055em]">{item.value}</p>
                                    <p className="mt-3 font-code text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{item.label}</p>
                                    <p className="mt-2 text-xs leading-relaxed text-foreground/56">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-12 grid gap-5 lg:grid-cols-3" aria-label="Problem, approach and outcome">
                        {[
                            ["01 / Problem", project.problem],
                            ["02 / Approach", project.approach],
                            ["03 / Outcome", project.outcome],
                        ].map(([title, content]) => (
                            <article key={title} className="paper-card p-6">
                                <p className="font-code text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{title}</p>
                                <p className="mt-5 text-sm leading-relaxed text-foreground/68">{content}</p>
                            </article>
                        ))}
                    </section>

                    <section className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                        <div>
                            <p className="section-label">System trace</p>
                            <h2 className="mt-6 text-4xl font-bold leading-none tracking-[-0.05em]">How the evidence is produced.</h2>
                            <p className="mt-5 text-sm leading-relaxed text-foreground/62">{project.role}</p>
                        </div>
                        <ol className="border-t border-foreground">
                            {project.architecture.map((step, index) => (
                                <li key={step} className="grid grid-cols-[48px_1fr] border-b border-foreground/20 py-5">
                                    <span className="font-code text-[10px] font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                                    <span className="text-sm font-semibold leading-relaxed">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="mt-12 grid gap-5 lg:grid-cols-2">
                        <article className="border border-[#2f9d67] bg-[#e8f5ee] p-6 sm:p-8">
                            <p className="inline-flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-[0.16em] text-[#176941]"><CheckCircle2 className="h-4 w-4" /> Validation scope</p>
                            <p className="mt-4 text-sm leading-relaxed text-foreground/72">{project.validation}</p>
                        </article>
                        <article className="border border-primary bg-[#fff0ec] p-6 sm:p-8">
                            <p className="inline-flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-[0.16em] text-primary-dark"><TriangleAlert className="h-4 w-4" /> Known limitation</p>
                            <p className="mt-4 text-sm leading-relaxed text-foreground/72">{project.limitation}</p>
                        </article>
                    </section>

                    <section className="mt-12 grid gap-8 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-[-0.045em]">What is inspectable</h2>
                            <ul className="mt-5 divide-y divide-foreground/20 border-y border-foreground">
                                {project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 py-4 text-sm leading-relaxed text-foreground/66"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2f9d67]" />{highlight}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-[-0.045em]">Next proof to add</h2>
                            <ol className="mt-5 divide-y divide-foreground/20 border-y border-foreground">
                                {project.nextSteps.map((step, index) => <li key={step} className="grid grid-cols-[36px_1fr] py-4 text-sm leading-relaxed text-foreground/66"><span className="font-code text-[10px] font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
                            </ol>
                        </div>
                    </section>

                    <section className="mt-12 border-t border-foreground pt-8">
                        <p className="font-code text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/45">Main stack</p>
                        <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-foreground bg-paper px-3 py-2 font-code text-[10px] uppercase tracking-[0.12em]">{tech}</span>)}</div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
