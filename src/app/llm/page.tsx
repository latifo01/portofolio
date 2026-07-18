import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, TriangleAlert } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Applied AI systems",
    description: "Applied AI systems built with RAG, agents, deterministic safeguards, tests and human review.",
};

const aiProjects = projects.filter((project) => project.categories.includes("applied-ai"));

const boundaries = [
    { title: "Structured output", detail: "Pydantic contracts reject malformed or out-of-range model responses." },
    { title: "Deterministic controls", detail: "Statistical and safety rules remain testable outside the model path." },
    { title: "Human authority", detail: "Approval and final decisions stay with the user in high-impact workflows." },
    { title: "Evaluation scope", detail: "Rule tests, retrieval quality and end-to-end model behavior are reported separately." },
];

export default function AppliedAIPage() {
    return (
        <main id="main-content" className="min-h-screen">
            <Navbar />
            <section className="px-3 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
                <div className="section-shell">
                    <header className="grid gap-8 border-b border-foreground pb-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
                        <div>
                            <span className="section-label">Applied AI systems</span>
                            <p className="mt-5 font-code text-[10px] uppercase tracking-[0.15em] text-foreground/48">No “coming soon” claims · working repositories only</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.065em] sm:text-7xl">The LLM is one component. <span className="display-serif text-primary">The system is the work.</span></h1>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/64 sm:text-lg">These projects focus on orchestration, validation, retrieval, interfaces and failure boundaries — the layers between a promising model call and a usable product.</p>
                        </div>
                    </header>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {aiProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
                    </div>

                    <section className="mt-20 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                        <div>
                            <span className="section-label">Engineering boundary</span>
                            <h2 className="mt-6 text-4xl font-bold leading-none tracking-[-0.05em]">What sits around the model.</h2>
                            <p className="mt-5 text-sm leading-relaxed text-foreground/62">A reliable AI system needs more than an orchestration diagram. These are the controls currently demonstrated in the public work.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {boundaries.map((boundary, index) => (
                                <article key={boundary.title} className="paper-card p-6">
                                    <div className="flex items-center justify-between">
                                        <span className="font-code text-[10px] font-bold text-primary">0{index + 1}</span>
                                        <CheckCircle2 className="h-4 w-4 text-[#2f9d67]" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-bold">{boundary.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-foreground/62">{boundary.detail}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mt-20 border border-foreground bg-foreground text-white">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-7 sm:p-10">
                                <p className="inline-flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-[0.16em] text-[#a9efc8]"><ShieldCheck className="h-4 w-4" /> Demonstrated now</p>
                                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/72">
                                    <li>FastAPI services and React/Streamlit interfaces</li>
                                    <li>LangGraph orchestration and retrieval pipelines</li>
                                    <li>Schema validation, repair loops and deterministic tests</li>
                                    <li>Vercel and Cloud Run deployment</li>
                                </ul>
                            </div>
                            <div className="border-t border-white/20 bg-white/5 p-7 sm:p-10 lg:border-l lg:border-t-0">
                                <p className="inline-flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff9b86]"><TriangleAlert className="h-4 w-4" /> Still being strengthened</p>
                                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/72">
                                    <li>End-to-end multilingual and retrieval evaluation</li>
                                    <li>Authentication, rate limiting and data-retention controls</li>
                                    <li>Production observability for quality, latency and cost</li>
                                    <li>Provider-independent test isolation</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="mt-10 flex justify-end"><Link href="/projects" className="button-secondary">Browse the full evidence library <ArrowRight className="h-4 w-4" /></Link></div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
