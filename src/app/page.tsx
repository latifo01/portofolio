
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { projects, FILTER_CATEGORIES } from "@/data/projects";

const stats = [
    { label: "Projects", value: "5" },
    { label: "Languages", value: "4" },
    { label: "Lines of Code", value: "15k+" },
];


export default function Home() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = projects.filter((project) =>
        activeCategory === "all" ? true : project.categories.includes(activeCategory)
    );

    return (
        <main className="min-h-screen relative">
            <AnimatedBackground />
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center z-10"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-code text-primary-light text-sm mb-4 tracking-wider"
                    >
                        PARIS-DAUPHINE UNIVERSITY • MSC 280
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Ibrahim Youssouf{" "}
                        <span className="gradient-text">ABDELATIF</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-foreground/70 mb-4 font-light"
                    >
                        Data Scientist – Spécialisation <span className="text-primary-light font-medium">ML & GenAI</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm text-primary-light/80 mb-8 font-code"
                    >
                        Finance • Tech • Conseil & Stratégie
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-8 justify-center mb-12"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold gradient-text font-mono">{stat.value}</div>
                                <div className="text-sm text-foreground/50">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4 justify-center"
                    >
                        <a
                            href="https://github.com/latifo01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass-card glow-hover transition-all duration-300 hover:scale-110"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass-card glow-hover transition-all duration-300 hover:scale-110"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Contact%20via%20Portfolio"
                            className="p-3 glass-card glow-hover transition-all duration-300 hover:scale-110"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ChevronDown className="w-8 h-8 text-foreground/30" />
                    </motion.div>
                </motion.div>
            </section>

            {/* About Me Section - Refactored */}
            <section id="about" className="py-24 px-6 bg-background-secondary/30">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed text-lg">
                            I am a Master&apos;s student in <strong>Applied Mathematics</strong> at <strong>Paris-Dauphine University</strong>,
                            passionate about transforming complex data into actionable insights through advanced statistical methods and Machine Learning.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Timeline Column */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Academic Journey
                            </h3>
                            <Timeline />
                        </div>

                        {/* Skills Column */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                                Technical Arsenal
                            </h3>
                            <Skills />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects with Filters */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {FILTER_CATEGORIES.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                        ? "bg-primary text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                        : "glass-card hover:bg-white/10 text-foreground/70"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 glass-card glow-hover transition-all duration-300 hover:scale-105"
                        >
                            View All Projects
                            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Let&apos;s <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
                            I&apos;m always open to discussing new opportunities in Data Science,
                            Machine Learning, and Applied Mathematics research.
                        </p>
                        <a
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Contact%20via%20Portfolio"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gradient rounded-full font-semibold glow-hover transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
