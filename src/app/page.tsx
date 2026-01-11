"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    metrics: Record<string, string>;
    featured: boolean;
    image: string;
    gif?: string;
    github: string;
    demoUrl?: string;
}

const projects: Project[] = [
    {
        id: "credit-risk-modelling",
        title: "Credit Risk Modelling",
        description: "Challenge: Reduce loan default prediction errors for a financial institution. Solution: Built an end-to-end ML pipeline comparing 4 classifiers with GridSearchCV optimization. Result: Achieved 94.97% accuracy and 0.99 AUC with XGBoost, plus custom RiskScore_ML (0-100) and RiskLevel (A-E) categorization for business decision support.",
        technologies: ["Python", "XGBoost", "Docker", "Scikit-learn"],
        metrics: { accuracy: "94.97%", f1: "94.89%", auc: "0.99" },
        featured: true,
        image: "/projects/credit-risk-architecture.png",
        github: "https://github.com/latifo01/credit-risk-modelling",
    },
    {
        id: "customer-segmentation",
        title: "Customer Segmentation",
        description: "Challenge: Enable targeted marketing campaigns through customer profiling. Solution: Performed unsupervised clustering on 2,240 customers comparing K-Means, CAH, and GMM. Result: Identified 4 distinct customer segments with interactive Shiny dashboard for real-time exploration and decision support.",
        technologies: ["R", "Shiny", "Tidyverse", "ggplot2"],
        metrics: { clusters: "4", silhouette: "0.35", customers: "2,240" },
        featured: true,
        image: "/projects/segmentation.png",
        github: "https://github.com/latifo01/customer-segmentation",
        demoUrl: "https://ibrahimabdelatif-segmentation-des-clients.share.connect.posit.cloud",
    },
    {
        id: "reinforcement-learning",
        title: "Reinforcement Learning MDP",
        description: "Challenge: Optimize autonomous robot decision-making under uncertainty. Solution: Implemented Markov Decision Processes with Value Iteration in C++. Result: Achieved 270% performance improvement with convergence in ~25 iterations for robot garbage collector optimization.",
        technologies: ["C++11", "CMake", "MDP", "Dynamic Programming"],
        metrics: { improvement: "270%", states: "2", convergence: "~25 iter" },
        featured: true,
        image: "/projects/value_iteration.png",
        gif: "/projects/robot_simulation.png",
        github: "https://github.com/latifo01/reinforcement-learning-mdp",
    },
    {
        id: "monte-carlo-methods",
        title: "Monte Carlo Methods",
        description: "Challenge: Estimate rare event probabilities where standard integration fails. Solution: Implemented 5 advanced simulation techniques including Importance Sampling and Control Variate. Result: Significant variance reduction with 7 professional animations demonstrating each method.",
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
        metrics: { methods: "5", animations: "7 GIFs" },
        featured: false,
        image: "/projects/sampling_process.gif",
        gif: "/projects/importance_sampling.gif",
        github: "https://github.com/latifo01/monte-carlo-methods",
    },
    {
        id: "bike-sharing-glm",
        title: "Bike Sharing Demand Prediction",
        description: "Challenge: Forecast bike rental demand for urban fleet optimization. Solution: Built ML platform comparing 6 models with GridSearchCV and Box-Cox transformation. Result: Achieved R² > 0.85 with XGBoost, enabling better resource allocation.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM"],
        metrics: { models: "6", rmse: "~200", r2: "0.85+" },
        featured: false,
        image: "/projects/bike-sharing-models.png",
        github: "https://github.com/latifo01/bike-sharing-prediction",
    },
];

const stats = [
    { label: "Projects", value: "5" },
    { label: "Languages", value: "4" },
    { label: "Lines of Code", value: "15k+" },
];

export default function Home() {
    const featuredProjects = projects.filter((p) => p.featured);

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
                        Data Scientist – Spécialisation ML & GenAI
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

            {/* About Me Section */}
            <section id="about" className="py-24 px-6 bg-background-secondary/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            About <span className="gradient-text">Me</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8"
                    >
                        <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                            I am a Master&apos;s student in <strong>Applied Mathematics (MSc 280)</strong> at
                            <strong> Paris-Dauphine University</strong>, specializing in <strong>Machine Learning</strong>,
                            <strong> Statistical Modeling</strong>, and <strong>Quantitative Finance</strong>.
                        </p>
                        <p className="text-foreground/70 leading-relaxed mb-6">
                            My academic journey combines rigorous mathematical foundations with practical
                            applications in Data Science. I am passionate about transforming complex data
                            into actionable insights through advanced statistical methods and ML algorithms.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mt-8">
                            <div className="text-center p-4 bg-background/50 rounded-lg">
                                <div className="text-2xl font-bold gradient-text mb-2">ML</div>
                                <div className="text-sm text-foreground/60">XGBoost, Random Forest, Clustering</div>
                            </div>
                            <div className="text-center p-4 bg-background/50 rounded-lg">
                                <div className="text-2xl font-bold gradient-text mb-2">Statistics</div>
                                <div className="text-sm text-foreground/60">Monte Carlo, GLM, Bayesian</div>
                            </div>
                            <div className="text-center p-4 bg-background/50 rounded-lg">
                                <div className="text-2xl font-bold gradient-text mb-2">Programming</div>
                                <div className="text-sm text-foreground/60">Python, R, C++, SQL</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
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
