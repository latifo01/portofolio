"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, MessageSquare, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plannedProjects = [
    {
        title: "RAG Pipeline",
        description: "Retrieval-Augmented Generation system for document Q&A",
        icon: Brain,
        status: "Planned",
    },
    {
        title: "Fine-tuning LLMs",
        description: "Domain-specific model adaptation for specialized tasks",
        icon: Zap,
        status: "Planned",
    },
    {
        title: "Prompt Engineering",
        description: "Advanced prompting techniques and chain-of-thought reasoning",
        icon: MessageSquare,
        status: "Planned",
    },
];

export default function LLMPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-code text-primary-light">Coming Soon</span>
                        </div>

                        <h1 className="text-5xl font-bold mb-4">
                            LLM & <span className="gradient-text">GenAI</span>
                        </h1>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            Upcoming projects exploring Large Language Models, Retrieval-Augmented Generation,
                            and Generative AI applications.
                        </p>
                    </motion.div>

                    {/* Planned Projects */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {plannedProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                                    <project.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
                                <span className="inline-block px-3 py-1 text-xs font-code bg-secondary/10 text-secondary-light rounded-full">
                                    {project.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Teaser */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-8 text-center"
                    >
                        <h2 className="text-2xl font-bold mb-4">Stay Tuned</h2>
                        <p className="text-foreground/60 mb-6 max-w-lg mx-auto">
                            I&apos;m currently exploring the intersection of LLMs and traditional ML.
                            New projects in RAG, fine-tuning, and prompt engineering are in development.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gradient rounded-full font-semibold glow-hover transition-all duration-300 hover:scale-105"
                        >
                            Follow Updates on LinkedIn
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
