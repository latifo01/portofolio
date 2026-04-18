"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { FILTER_CATEGORIES, projects } from "@/data/projects";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<"all" | "ml" | "quant" | "signal" | "rl">("all");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "all") {
            return projects;
        }

        return projects.filter((project) => project.categories.includes(activeCategory));
    }, [activeCategory]);

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="px-6 pb-24 pt-32">
                <div className="section-shell">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                    >
                        <div className="max-w-3xl">
                            <div className="eyebrow mb-5">Project library</div>
                            <h1 className="text-5xl font-semibold md:text-6xl">A broader view of the work.</h1>
                            <p className="mt-5 text-lg leading-relaxed text-foreground/68">
                                The homepage keeps the main case studies first. This page keeps the larger set visible,
                                including finance, audio, reinforcement learning, signal processing, and simulation
                                work, with each entry tied to real material in the project folder or repository.
                            </p>
                        </div>

                        <div className="glass-card px-6 py-5 text-sm text-foreground/64">
                            <p className="font-code uppercase tracking-[0.2em] text-primary-light">Projects included</p>
                            <p className="mt-2 text-3xl font-semibold gradient-text">{projects.length}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="mb-10 flex flex-wrap gap-3"
                    >
                        {FILTER_CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${activeCategory === category.id
                                    ? "bg-accent-gradient text-slate-950"
                                    : "border border-border bg-white/5 text-foreground/72 hover:bg-white/10 hover:text-foreground"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ delay: index * 0.04 }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
