"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { FILTER_CATEGORIES, projects, type ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

    const filteredProjects = useMemo(
        () => activeCategory === "all" ? projects : projects.filter((project) => project.categories.includes(activeCategory)),
        [activeCategory],
    );

    return (
        <main id="main-content" className="min-h-screen">
            <Navbar />

            <section className="px-3 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
                <div className="section-shell">
                    <header className="grid gap-8 border-b border-foreground pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                        <div>
                            <span className="section-label">Evidence library</span>
                            <div className="mt-5 inline-flex items-center gap-2 font-code text-[10px] uppercase tracking-[0.15em] text-foreground/50">
                                <Search className="h-3.5 w-3.5" /> {projects.length} audited case studies
                            </div>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Less volume. <span className="display-serif text-primary">More proof.</span></h1>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/64 sm:text-lg">The library is intentionally small. Each entry distinguishes what was built, how it was evaluated, what the result means and what is not yet proven.</p>
                        </div>
                    </header>

                    <div className="sticky top-[72px] z-30 -mx-3 border-b border-foreground/20 bg-background/95 px-3 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
                        <div className="section-shell flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
                            <span className="mr-2 inline-flex items-center gap-2 font-code text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/48"><Filter className="h-3.5 w-3.5" /> Filter</span>
                            {FILTER_CATEGORIES.map((category) => (
                                <button
                                    type="button"
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    aria-pressed={activeCategory === category.id}
                                    className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeCategory === category.id ? "border-foreground bg-foreground text-white" : "border-foreground/20 bg-paper hover:border-foreground"}`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="mt-8 font-code text-[10px] uppercase tracking-[0.15em] text-foreground/48" aria-live="polite">Showing {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}</p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
