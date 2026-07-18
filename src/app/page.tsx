import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { featuredProjects, projects } from "@/data/projects";

const proofStats = [
    { value: "2", label: "deployed AI products", note: "Interfaces and APIs live on the web" },
    { value: "81/81", label: "tests verified", note: "GenAI preprocessing workflow" },
    { value: "6", label: "curated case studies", note: "Every claim carries a boundary" },
];

const operatingPrinciples = [
    {
        number: "01",
        title: "Evidence before adjectives",
        description: "Metrics include their evaluation scope. Deployed means deployed; a prototype stays a prototype.",
    },
    {
        number: "02",
        title: "Deterministic where it matters",
        description: "LLMs recommend and structure. Rules, contracts and human review protect high-impact decisions.",
    },
    {
        number: "03",
        title: "A model needs an interface",
        description: "The work is not finished when a notebook ends. APIs, tests and usable screens make it inspectable.",
    },
];

export default function Home() {
    return (
        <main id="main-content" className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="px-3 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
                <div className="section-shell grid gap-10 xl:grid-cols-[1.16fr_0.84fr] xl:items-end">
                    <div className="reveal">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="eyebrow">Data Science × Applied AI</span>
                            <span className="inline-flex items-center gap-2 font-code text-[10px] font-semibold uppercase tracking-[0.13em] text-foreground/55">
                                <span className="status-dot" /> BNP Paribas Data Office · 2026
                            </span>
                        </div>

                        <h1 className="mt-7 max-w-5xl text-[clamp(3rem,8.2vw,7.4rem)] font-bold leading-[0.88] tracking-[-0.075em]">
                            Rigorous models.
                            <br />
                            <span className="display-serif text-primary">Visible evidence.</span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/68 sm:text-lg">
                            I am Ibrahim Abdelatif, an M2 Data Science student at Paris-Dauphine and Agentic AI Data Scientist Intern at BNP Paribas. I build statistical work that can be challenged and AI systems whose boundaries can be inspected.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/projects" className="button-secondary">
                                Inspect selected work <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link href="/resume" className="button-primary">
                                Resume & experience <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-foreground/62">
                            <a href="https://github.com/latifo01" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-primary"><Github className="h-4 w-4" /> GitHub</a>
                            <a href="https://www.linkedin.com/in/abdelatif-ibrahim/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                            <a href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20contact" className="inline-flex min-h-11 items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> Email</a>
                        </div>
                    </div>

                    <aside className="paper-card-strong reveal reveal-delay overflow-hidden" aria-label="Current evidence summary">
                        <div className="flex items-center justify-between border-b border-foreground px-5 py-4">
                            <p className="font-code text-[10px] font-bold uppercase tracking-[0.17em]">Evidence console / live</p>
                            <ShieldCheck className="h-4 w-4 text-[#2f9d67]" />
                        </div>
                        <div className="divide-y divide-foreground/15">
                            {proofStats.map((stat, index) => (
                                <div key={stat.label} className="grid grid-cols-[54px_1fr] gap-4 p-5">
                                    <span className="font-code text-[10px] font-bold text-foreground/38">0{index + 1}</span>
                                    <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-baseline">
                                        <p className="text-3xl font-bold tracking-[-0.05em]">{stat.value}</p>
                                        <div>
                                            <p className="text-sm font-bold">{stat.label}</p>
                                            <p className="mt-1 text-xs leading-relaxed text-foreground/52">{stat.note}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-foreground p-5 text-white">
                            <p className="font-code text-[9px] uppercase tracking-[0.17em] text-white/45">Positioning</p>
                            <p className="mt-2 text-sm font-semibold leading-relaxed">Data Scientist with an Applied AI engineering trajectory — not a collection of notebook screenshots.</p>
                        </div>
                    </aside>
                </div>
            </section>

            <div className="ticker" aria-hidden="true">
                <div className="ticker-track">
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex">
                            <span>Python · FastAPI · RAG · LangGraph</span>
                            <span>Statistical validation · Time series · Clustering</span>
                            <span>Human review · Pydantic contracts · Cloud deployment</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="px-3 py-20 sm:px-6 sm:py-28">
                <div className="section-shell">
                    <div className="grid gap-6 border-b border-foreground pb-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
                        <div>
                            <span className="section-label">Selected evidence</span>
                            <p className="mt-4 font-code text-xs uppercase tracking-[0.16em] text-foreground/48">{featuredProjects.length} flagship systems</p>
                        </div>
                        <div>
                            <h2 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
                                Case studies that show the <span className="display-serif text-secondary">decision trail.</span>
                            </h2>
                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/62">Each case exposes the problem, architecture, validation scope, result and limitation. A recruiter should not need to guess what was actually built.</p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Link href="/projects" className="button-quiet">Explore all {projects.length} case studies <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="border-y border-foreground bg-paper px-3 py-20 sm:px-6 sm:py-24">
                <div className="section-shell">
                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                        <div>
                            <span className="section-label">Operating principles</span>
                            <h2 className="mt-6 text-4xl font-bold leading-none tracking-[-0.05em]">How I decide whether a project is ready to show.</h2>
                        </div>
                        <div className="border-t border-foreground">
                            {operatingPrinciples.map((principle) => (
                                <article key={principle.number} className="grid gap-3 border-b border-foreground/25 py-6 sm:grid-cols-[56px_1fr_1fr]">
                                    <p className="font-code text-xs font-bold text-primary">{principle.number}</p>
                                    <h3 className="text-lg font-bold">{principle.title}</h3>
                                    <p className="text-sm leading-relaxed text-foreground/62">{principle.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="px-3 py-20 sm:px-6 sm:py-28">
                <div className="section-shell">
                    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
                        <div>
                            <span className="section-label">Experience & education</span>
                            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/62">Current Agentic AI internship at BNP Paribas, prior forecasting and reporting work at Deloitte, and a mathematical path through Strasbourg and Paris-Dauphine.</p>
                        </div>
                        <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Mathematics is the foundation. <span className="display-serif text-primary">Delivery is the test.</span></h2>
                    </div>
                    <div className="mt-12"><Timeline /></div>
                </div>
            </section>

            <section className="border-y border-foreground bg-background-secondary px-3 py-20 sm:px-6 sm:py-24">
                <div className="section-shell">
                    <div className="mb-10 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                        <span className="section-label w-fit">Capabilities with proof</span>
                        <h2 className="text-4xl font-bold leading-none tracking-[-0.05em] sm:text-5xl">A stack organised by <span className="display-serif text-secondary">what it enables.</span></h2>
                    </div>
                    <Skills />
                </div>
            </section>

            <section id="contact" className="px-3 py-20 sm:px-6 sm:py-28">
                <div className="section-shell paper-card-strong overflow-hidden">
                    <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="p-7 sm:p-10 lg:p-14">
                            <span className="section-label">Contact</span>
                            <h2 className="mt-7 max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Have a hard data problem? <span className="display-serif text-primary">Let’s make the evidence visible.</span></h2>
                            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/64">I am interested in Data Science and Applied AI work where model quality, software reliability and stakeholder clarity matter together.</p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20contact" className="button-primary"><Mail className="h-4 w-4" /> Send an email</a>
                                <a href="https://www.linkedin.com/in/abdelatif-ibrahim/" target="_blank" rel="noopener noreferrer" className="button-quiet"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                            </div>
                        </div>
                        <div className="data-grid grid min-h-64 place-items-center border-t border-foreground bg-acid p-8 lg:border-l lg:border-t-0">
                            <div className="max-w-xs rounded-full border border-foreground bg-paper p-4 text-center">
                                <CheckCircle2 className="mx-auto h-10 w-10 text-[#2f9d67]" />
                                <p className="mt-4 font-code text-[10px] font-bold uppercase tracking-[0.16em]">Signal available</p>
                                <p className="mt-2 text-sm leading-relaxed text-foreground/62">Paris · Europe · French / English / Arabic</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
