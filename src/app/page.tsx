"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
// Ajoutez ceci juste après vos imports
interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    metrics: Record<string, string>; // Ceci accepte n'importe quel duo clé:valeur
    featured: boolean;
    image: string;
    github: string;
}

const projects: Project[] = [ // On précise que c'est une liste de "Project"
    {
        id: "credit-risk-modelling",
        title: "Credit Risk Modelling",
        description: "End-to-end ML pipeline for loan approval classification with XGBoost. Achieves 94.97% accuracy with RiskScore_ML calculation.",
        technologies: ["Python", "XGBoost", "Docker", "Scikit-learn"],
        metrics: { accuracy: "94.97%", f1: "94.89%", auc: "0.99" },
        featured: true,
        image: "/projects/credit-risk.png",
        github: "https://github.com/latifo01/latifo01",
    },
    {
        id: "customer-segmentation",
        title: "Customer Segmentation",
        description: "Unsupervised clustering analysis on 2,240 customers. Comparing K-Means, CAH, and GMM with interactive Shiny dashboard.",
        technologies: ["R", "Shiny", "Tidyverse", "ggplot2"],
        metrics: { clusters: "4", silhouette: "0.35", customers: "2,240" },
        featured: true,
        image: "/projects/segmentation.png",
        github: "https://github.com/latifo01/latifo01",
    },
    {
        id: "reinforcement-learning",
        title: "Reinforcement Learning MDP",
        description: "C++ implementation of Markov Decision Processes with Value Iteration algorithm. Robot garbage collector example.",
        technologies: ["C++11", "CMake", "MDP", "Dynamic Programming"],
        metrics: { improvement: "270%", states: "2", convergence: "~25 iter" },
        featured: true,
        image: "/projects/rl.png",
        github: "https://github.com/latifo01/latifo01",
    },
    {
        id: "monte-carlo-methods",
        title: "Monte Carlo Methods",
        description: "Advanced Monte Carlo simulation techniques for quantile estimation: Importance Sampling, Stratification, Control Variate.",
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
        metrics: { methods: "5", animations: "7 GIFs" },
        featured: false,
        image: "/projects/monte-carlo.png",
        github: "https://github.com/latifo01/latifo01",
    },
    {
        id: "bike-sharing-glm",
        title: "Bike Sharing Demand Prediction",
        description: "End-to-end ML platform comparing 6 models with GridSearchCV hyperparameter tuning for bike rental demand forecasting.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM"],
        metrics: { models: "6", rmse: "~200", r2: "0.85+" },
        featured: false,
        image: "/projects/bike-sharing.png",
        github: "https://github.com/latifo01/latifo01",
    },
];

const stats = [
    { label: "Projects", value: "5" },
    { label: "Languages", value: "3" },
    { label: "Lines of Code", value: "10k+" },
];

export default function Home() {
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <main className="min-h-screen">
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
                        className="text-xl md:text-2xl text-foreground/70 mb-8 font-light"
                    >
                        Data Scientist & Applied Mathematician
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
                                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
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
                            href="https://github.com/latifo01/latifo01"
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
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu"
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

            {/* Featured Projects */}
            <section id="projects" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            A selection of my best work in Machine Learning, Data Science, and Applied Mathematics.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>

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

            {/* All Projects Preview */}
            <section className="py-24 px-6 bg-background-secondary/30">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-12 text-center"
                    >
                        More <span className="gradient-text">Work</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.filter(p => !p.featured).map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <ProjectCard project={project} compact />
                            </motion.div>
                        ))}
                    </div>
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
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu"
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
