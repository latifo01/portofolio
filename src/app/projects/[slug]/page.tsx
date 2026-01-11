"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectsData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    metrics: Record<string, string>;
    keyFeatures: string[];
    mathSection?: { title: string; content: string; githubLink?: string };
    github: string;
    demoUrl?: string;
    gif?: string;
    image?: string;
}> = {
    "credit-risk-modelling": {
        title: "Credit Risk Modelling",
        subtitle: "End-to-End Loan Approval Classification & Risk Analysis",
        description: "Challenge: Reduce loan default prediction errors for a financial institution. This project provides a robust, production-ready machine learning pipeline for Loan Application Classification. It refactors an experimental Jupyter Notebook into a modular, scalable architecture. The system predicts loan approval and provides a standardized RiskScore_ML and RiskLevel for each applicant.",
        technologies: ["Python 3.9+", "XGBoost", "Scikit-learn", "Pandas", "Docker", "PyYAML"],
        metrics: { "Accuracy": "94.97%", "F1-Score": "94.89%", "ROC-AUC": "0.99" },
        keyFeatures: [
            "Modular Pipeline: Separate logic for feature engineering, model training, and batch inference",
            "4-Model Comparison: Logistic Regression, SGD, Random Forest, XGBoost with GridSearchCV",
            "Classification Approach: XGBClassifier optimized with best experimental hyperparameters",
            "RiskScore_ML: Probability-based score (0-100) for each applicant",
            "RiskLevel: Quintile-based categorization (A-E) for credit decision support",
            "Docker containerization for production deployment"
        ],
        image: "/projects/credit-risk-architecture.png",
        github: "https://github.com/latifo01/credit-risk-modelling",
    },
    "customer-segmentation": {
        title: "Customer Segmentation",
        subtitle: "Analyse Comportementale des Dépenses avec Clustering Non-Supervisé",
        description: "Challenge: Enable targeted marketing campaigns through customer profiling. Segmentation non-supervisée réalisée sur un jeu de données de 2,240 clients pour identifier des profils types basés sur leurs comportements d'achat. L'objectif est de permettre à une équipe marketing de cibler plus finement ses campagnes grâce à un tableau de bord interactif.",
        technologies: ["R", "Shiny", "Tidyverse", "ggplot2", "FactoMineR", "NbClust", "cluster"],
        metrics: { "Clients": "2,240", "Variables": "35", "Clusters": "4", "Silhouette": "0.35" },
        keyFeatures: [
            "Traitement des valeurs manquantes et suppression des outliers",
            "Feature engineering: âge, dépenses totales, ancienneté, réceptivité aux campagnes",
            "Comparaison de 3 algorithmes: K-Means, CAH (Ward), GMM",
            "Dashboard Shiny interactif avec visualisations dynamiques et exploration en temps réel",
            "Profils radar par segment client pour aide à la décision marketing"
        ],
        mathSection: {
            title: "Algorithme K-Means",
            content: "Minimisation de l'inertie intra-classe: W = Σₖ Σᵢ∈Cₖ ||xᵢ - μₖ||²",
            githubLink: "https://github.com/latifo01/customer-segmentation"
        },
        github: "https://github.com/latifo01/customer-segmentation",
        demoUrl: "https://ibrahimabdelatif-segmentation-des-clients.share.connect.posit.cloud",
    },
    "reinforcement-learning": {
        title: "Reinforcement Learning: MDP & Dynamic Programming",
        subtitle: "C++ Implementation of Markov Decision Processes with Value Iteration",
        description: "Challenge: Optimize autonomous robot decision-making under uncertainty. This project implements a complete Reinforcement Learning framework for solving Markov Decision Processes (MDPs) using Dynamic Programming. It includes a practical example of a robot garbage collector that learns optimal behavior through value iteration, achieving 270% performance improvement.",
        technologies: ["C++11", "CMake", "Template Programming", "Dynamic Programming"],
        metrics: { "States": "2", "Actions": "3", "Improvement": "270%", "Convergence": "~25 iter" },
        keyFeatures: [
            "Template-based MDP Classes: Generic implementation supporting any state/action types",
            "Perfect MDP: Full knowledge of transition probabilities and rewards",
            "Value Iteration Algorithm: Find optimal policy through iterative value updates",
            "Robot Example: Complete garbage collector robot with battery management",
            "Comprehensive unit tests for all components"
        ],
        mathSection: {
            title: "Bellman Optimality Equation",
            content: "V*(s) = maxₐ [ Σₛ' P(s'|s,a) × (R(s'|s,a) + γ × V*(s')) ]",
            githubLink: "https://github.com/latifo01/reinforcement-learning-mdp/blob/main/src/ProgDym.cpp"
        },
        image: "/projects/value_iteration.png",
        gif: "/projects/robot_simulation.png",
        github: "https://github.com/latifo01/reinforcement-learning-mdp",
    },
    "monte-carlo-methods": {
        title: "Monte Carlo Methods",
        subtitle: "Advanced Simulation Techniques for Quantile Estimation",
        description: "Challenge: Estimate rare event probabilities where standard numerical integration fails. A Python implementation of advanced Monte Carlo simulation techniques for probability and quantile estimation. Implements several variance reduction methods with 7 professional GIF animations demonstrating each technique.",
        technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
        metrics: { "Methods": "5", "Animations": "7 GIFs" },
        keyFeatures: [
            "Inverse CDF Method: Classic probability integral transform",
            "Accept-Reject Algorithm: General-purpose sampling with visual demonstration",
            "Stratified Sampling: Improved efficiency via space partitioning",
            "Importance Sampling: Variance reduction for rare events using Cauchy proposal",
            "Control Variate: Score function-based variance reduction"
        ],
        mathSection: {
            title: "Importance Sampling Estimator",
            content: "δ_IS = (1/n) × Σᵢ [ f(Xᵢ) × 𝟙{Xᵢ ≥ q} / g(Xᵢ) ]  where Xᵢ ~ g",
            githubLink: "https://github.com/latifo01/monte-carlo-methods/blob/main/src/importance_sampling.py"
        },
        gif: "/projects/sampling_process.gif",
        github: "https://github.com/latifo01/monte-carlo-methods",
    },
    "bike-sharing-glm": {
        title: "Bike Sharing Demand Prediction",
        subtitle: "End-to-End ML Platform with GridSearchCV Hyperparameter Tuning",
        description: "Challenge: Forecast bike rental demand for urban fleet optimization. An end-to-end Machine Learning platform designed to predict the demand for bike rentals in an urban sharing system. It follows a rigorous data science workflow, comparing multiple high-performance models with GridSearchCV hyperparameter tuning to achieve R² > 0.85.",
        technologies: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "Docker", "Pandas"],
        metrics: { "Models": "6", "RMSE": "~200", "R²": "0.85+" },
        keyFeatures: [
            "6 models compared: Linear, Ridge, Lasso, Random Forest, XGBoost, LightGBM",
            "Box-Cox transformation for target normalization",
            "Feature engineering with interactions and polynomial features",
            "GridSearchCV with 5-fold cross-validation",
            "Docker containerization for deployment"
        ],
        mathSection: {
            title: "GLM with Box-Cox Transform",
            content: "y^(λ) = (y^λ - 1) / λ when λ ≠ 0, or ln(y) when λ = 0",
            githubLink: "https://github.com/latifo01/bike-sharing-prediction"
        },
        image: "/projects/bike-sharing-models.png",
        github: "https://github.com/latifo01/bike-sharing-prediction",
    },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsData[params.slug];

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-xl text-foreground/60 mb-6">
                            {project.subtitle}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm font-code bg-primary/10 text-primary-light rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 glass-card hover:bg-primary/10 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                View on GitHub
                            </a>
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gradient rounded-lg font-semibold hover:scale-105 transition-transform"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </motion.header>

                    {/* Project GIF/Image */}
                    {(project.gif || project.image) && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="mb-12"
                        >
                            <div className="glass-card p-4 overflow-hidden rounded-xl">
                                <img
                                    src={project.gif || project.image}
                                    alt={`${project.title} visualization`}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </motion.section>
                    )}

                    {/* Metrics */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-6 mb-12"
                    >
                        <h2 className="text-lg font-semibold mb-4">Performance Metrics</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <div className="text-2xl font-bold gradient-text">{value}</div>
                                    <div className="text-sm text-foreground/50">{key}</div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Description */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {project.description}
                        </p>
                    </motion.section>

                    {/* Key Features */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                        <ul className="space-y-3">
                            {project.keyFeatures.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-primary mt-1">▹</span>
                                    <span className="text-foreground/70">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    {/* Math Section */}
                    {project.mathSection && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="glass-card p-6 mb-12"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold">{project.mathSection.title}</h2>
                                {project.mathSection.githubLink && (
                                    <a
                                        href={project.mathSection.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary-light hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        <Github className="w-4 h-4" />
                                        View Implementation
                                    </a>
                                )}
                            </div>
                            <div className="font-code text-lg text-primary-light bg-background/50 p-4 rounded-lg text-center">
                                {project.mathSection.content}
                            </div>
                        </motion.section>
                    )}
                </div>
            </article>

            <Footer />
        </main>
    );
}
