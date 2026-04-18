"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { featuredProjects, projects } from "@/data/projects";

const workPrinciples = [
    {
        title: "From notebook to repository",
        description:
            "I keep the parts that matter in practice: scripts, reports, saved artifacts, dashboards, or reproducible analysis notebooks.",
    },
    {
        title: "Methods tied to real outputs",
        description:
            "The portfolio mixes machine learning, time series, simulation, signal processing, and reinforcement learning, but each project stays tied to data, code, and measured results.",
    },
    {
        title: "No placeholder case studies",
        description:
            "Each selected project points back to an actual repository, report, notebook, figure set, or runnable demo rather than generic portfolio copy.",
    },
];

const headlineStats = [
    { label: "selected projects", value: `${projects.length}` },
    { label: "main languages", value: "4" },
    { label: "core domains", value: "3" },
];

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground />
            <Navbar />

            <section className="relative px-6 pt-32 pb-24 md:pt-40">
                <div className="section-shell relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl"
                    >
                        <div className="eyebrow mb-8">Paris-Dauphine | Applied Mathematics | ML and Quant</div>

                        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                            Machine learning and quantitative projects built past the notebook stage.
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                            I am Ibrahim Youssouf Abdelatif, an applied mathematics student at Paris-Dauphine. My work
                            focuses on machine learning, quantitative modeling, time series, signal processing, and
                            reinforcement learning, with an emphasis on reproducible code, clear methods, and results I
                            can explain end to end.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
                            >
                                Explore projects
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a
                                href="/cv/CV_Ibrahim_EN.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 font-medium text-foreground/82 transition-colors hover:bg-white/10"
                            >
                                <Download className="h-4 w-4" />
                                Resume
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
                            <a
                                href="https://github.com/latifo01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 transition-colors hover:bg-white/10 hover:text-foreground"
                            >
                                <Github className="h-4 w-4" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 transition-colors hover:bg-white/10 hover:text-foreground"
                            >
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </a>
                            <a
                                href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20Contact"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 transition-colors hover:bg-white/10 hover:text-foreground"
                            >
                                <Mail className="h-4 w-4" />
                                Email
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="mt-14 grid gap-4 md:grid-cols-3"
                    >
                        {headlineStats.map((stat) => (
                            <div key={stat.label} className="glass-card p-6">
                                <p className="text-4xl font-semibold gradient-text">{stat.value}</p>
                                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/42">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="px-6 py-6">
                <div className="section-shell grid gap-6 md:grid-cols-3">
                    {workPrinciples.map((point, index) => (
                        <motion.article
                            key={point.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12 }}
                            className="glass-card p-6"
                        >
                            <p className="font-code text-xs uppercase tracking-[0.24em] text-primary-light mb-3">
                                Why it matters
                            </p>
                            <h2 className="text-2xl font-semibold mb-3">{point.title}</h2>
                            <p className="text-sm leading-relaxed text-foreground/66">{point.description}</p>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="projects" className="px-6 py-24">
                <div className="section-shell">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                    >
                        <div className="max-w-2xl">
                            <div className="eyebrow mb-5">Selected work</div>
                            <h2 className="text-4xl font-semibold md:text-5xl">
                                Case studies backed by code, data, and actual outputs.
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/10 hover:text-foreground"
                        >
                            See the full project library
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="about" className="px-6 py-24">
                <div className="section-shell">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14 max-w-3xl"
                    >
                        <div className="eyebrow mb-5">Background</div>
                        <h2 className="text-4xl font-semibold md:text-5xl">A profile built on mathematics, not buzzwords.</h2>
                        <p className="mt-5 text-lg leading-relaxed text-foreground/68">
                            My academic path gave me a strong base in probability, statistics, optimization, and
                            scientific computing. That foundation helps me move comfortably between modeling, code, and
                            interpretation.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <h3 className="mb-6 text-2xl font-semibold">Academic path</h3>
                            <Timeline />
                        </div>
                        <div>
                            <h3 className="mb-6 text-2xl font-semibold">Capabilities that travel well</h3>
                            <Skills />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="px-6 pb-24">
                <div className="section-shell">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10"
                    >
                        <div className="max-w-3xl">
                            <div className="eyebrow mb-5">Contact</div>
                            <h2 className="text-4xl font-semibold md:text-5xl">If the work is relevant, I would love to discuss it.</h2>
                            <p className="mt-5 text-lg leading-relaxed text-foreground/68">
                                I am especially interested in opportunities where strong modeling, careful experimentation,
                                and clear delivery all matter at the same time.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20Contact"
                                className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
                            >
                                <Mail className="h-4 w-4" />
                                Send an email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 font-medium text-foreground/82 transition-colors hover:bg-white/10"
                            >
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
