"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    metrics: Record<string, string>;
    category: string;
    github: string;
    image?: string;
    gif?: string;
    demoUrl?: string;
}

const projects: Project[] = [
    {
        id: "credit-risk-modelling",
        title: "Credit Risk Modelling",
        description: "Challenge: Reduce loan default prediction errors. Solution: End-to-end ML pipeline with 4 classifiers and GridSearchCV. Result: 94.97% accuracy, 0.99 AUC, custom RiskScore_ML and RiskLevel categorization.",
        technologies: ["Python", "XGBoost", "Docker", "Scikit-learn", "Pandas"],
        metrics: { accuracy: "94.97%", f1: "94.89%", auc: "0.99" },
        category: "ML",
        image: "/projects/credit-risk-architecture.png",
        github: "https://github.com/latifo01/credit-risk-modelling",
    },
    {
        id: "customer-segmentation",
        title: "Customer Segmentation",
        description: "Challenge: Enable targeted marketing. Solution: Unsupervised clustering (K-Means, CAH, GMM) on 2,240 customers. Result: 4 distinct segments with interactive Shiny dashboard for real-time decision support.",
        technologies: ["R", "Shiny", "Tidyverse", "ggplot2", "FactoMineR"],
        metrics: { clusters: "4", silhouette: "0.35", customers: "2,240" },
        category: "Viz",
        github: "https://github.com/latifo01/customer-segmentation",
        demoUrl: "https://ibrahimabdelatif-segmentation-des-clients.share.connect.posit.cloud",
    },
    {
        id: "reinforcement-learning",
        title: "Reinforcement Learning MDP",
        description: "Challenge: Optimize robot decision-making under uncertainty. Solution: C++ implementation of MDP with Value Iteration. Result: 270% performance improvement, convergence in ~25 iterations.",
        technologies: ["C++11", "CMake", "MDP", "Dynamic Programming"],
        metrics: { improvement: "270%", states: "2", convergence: "~25 iter" },
        category: "ML",
        image: "/projects/value_iteration.png",
        gif: "/projects/robot_simulation.png",
        github: "https://github.com/latifo01/reinforcement-learning-mdp",
    },
    {
        id: "monte-carlo-methods",
        title: "Monte Carlo Methods",
        description: "Challenge: Estimate rare event probabilities. Solution: 5 advanced simulation techniques (Importance Sampling, Control Variate, etc.). Result: Significant variance reduction with 7 professional animations.",
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
        metrics: { methods: "5", animations: "7" },
        category: "Stats",
        image: "/projects/sampling_process.gif",
        gif: "/projects/stratified_animation.gif",
        github: "https://github.com/latifo01/monte-carlo-methods",
    },
    {
        id: "bike-sharing-glm",
        title: "Bike Sharing Demand Prediction",
        description: "Challenge: Forecast bike rental demand for fleet optimization. Solution: 6-model comparison with GridSearchCV and Box-Cox transformation. Result: R² > 0.85 with XGBoost.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Docker"],
        metrics: { models: "6", rmse: "~200", r2: "0.85+" },
        category: "ML",
        image: "/projects/bike-sharing-models.png",
        github: "https://github.com/latifo01/bike-sharing-prediction",
    },
];

const categories = [
    { id: "all", label: "All" },
    { id: "ML", label: "Machine Learning" },
    { id: "Stats", label: "Statistics" },
    { id: "Viz", label: "Visualization" },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold mb-4">
                            My <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            A collection of my work in Data Science, Machine Learning, and Applied Mathematics.
                            Each project demonstrates different skills and methodologies.
                        </p>
                    </motion.div>

                    {/* Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? "bg-primary text-white"
                                    : "glass-card text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
