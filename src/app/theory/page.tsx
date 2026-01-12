
"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MathBlock from "@/components/MathBlock";

const theories = [
    {
        id: "bellman",
        title: "Bellman Optimality Equation",
        source: "Reinforcement Learning Project",
        description: "The Bellman equation describes the relationship between the value of a state and the values of successor states. It forms the foundation of dynamic programming solutions to MDPs.",
        formula: "V^*(s) = \\max_a \\left[ \\sum_{s'} P(s'|s,a) \\times (R(s'|s,a) + \\gamma V^*(s')) \\right]",
        explanation: [
            "$V^*(s)$ is the optimal value function for state $s$",
            "$P(s'|s,a)$ is the transition probability from $s$ to $s'$ given action $a$",
            "$R(s'|s,a)$ is the reward for the transition",
            "$\\gamma$ (gamma) is the discount factor for future rewards ($0 < \\gamma < 1$)",
        ],
        projectLink: "/projects/reinforcement-learning",
        githubLink: "https://github.com/latifo01/reinforcement-learning-mdp/blob/main/src/ProgDym.cpp",
    },
    {
        id: "importance-sampling",
        title: "Importance Sampling",
        source: "Monte Carlo Methods Project",
        description: "Importance sampling is a variance reduction technique that samples from a proposal distribution and reweights the samples. It's particularly useful for estimating rare event probabilities.",
        formula: "\\delta_{IS} = \\frac{1}{n} \\sum_{i=1}^n \\frac{f(X_i) \\cdot \\mathbb{1}_{\\{X_i \\geq q\\}}}{g(X_i)}",
        explanation: [
            "$f(x)$ is the target density function",
            "$g(x)$ is the proposal distribution (e.g., Cauchy centered at $q$)",
            "$\\mathbb{1}_{\\{X_i \\geq q\\}}$ is the indicator function",
            "Variance reduction is achieved when $g(x)$ is chosen to match the integrand shape",
        ],
        projectLink: "/projects/monte-carlo-methods",
        githubLink: "https://github.com/latifo01/monte-carlo-methods/blob/main/src/importance_sampling.py",
    },
    {
        id: "kmeans",
        title: "K-Means Clustering",
        source: "Customer Segmentation Project",
        description: "K-Means aims to partition n observations into k clusters by minimizing the within-cluster sum of squares (inertia). Each observation belongs to the cluster with the nearest centroid.",
        formula: "W = \\sum_{k=1}^K \\sum_{x_i \\in C_k} ||x_i - \\mu_k||^2",
        explanation: [
            "$W$ is the total within-cluster variance (inertia)",
            "$C_k$ is the set of points in cluster $k$",
            "$\\mu_k$ is the centroid of cluster $k$",
            "The algorithm iterates: assign points to nearest centroid, update centroids",
        ],
        projectLink: "/projects/customer-segmentation",
        githubLink: "https://github.com/latifo01/customer-segmentation/blob/main/app/app.R",
    },
    {
        id: "boxcox",
        title: "Box-Cox Transformation",
        source: "Bike Sharing GLM Project",
        description: "Box-Cox transformation is used to stabilize variance and make the data more normally distributed. It's a family of power transformations indexed by parameter λ.",
        formula: "y^{(\\lambda)} = \\begin{cases} \\dfrac{y^\\lambda - 1}{\\lambda} & \\text{if } \\lambda \\neq 0 \\\\ \\ln(y) & \\text{if } \\lambda = 0 \\end{cases}",
        explanation: [
            "$\\lambda = 1$: No transformation (linear)",
            "$\\lambda = 0$: Natural logarithm transformation",
            "$\\lambda = 0.5$: Square root transformation",
            "$\\lambda = -1$: Reciprocal transformation",
        ],
        projectLink: "/projects/bike-sharing-glm",
        githubLink: "https://github.com/latifo01/bike-sharing-prediction/blob/main/src/pipelines/training_pipeline.py",
    },
];

export default function TheoryPage() {
    // Helper to parse text with inline math delimiters ($...$)
    const renderWithMath = (text: string) => {
        const parts = text.split(/(\$[^\$]+\$)/g);
        return parts.map((part, index) => {
            if (part.startsWith("$") && part.endsWith("$")) {
                const formula = part.slice(1, -1);
                return <MathBlock key={index} formula={formula} block={false} />;
            }
            return <span key={index}>{part}</span>;
        });
    };

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
                        <h1 className="text-5xl font-bold mb-4">
                            Core <span className="gradient-text">Theory</span>
                        </h1>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            Mathematical foundations behind my projects. Each concept links directly to
                            the corresponding project implementation on GitHub.
                        </p>
                    </motion.div>

                    {/* Theory Cards */}
                    <div className="space-y-8">
                        {theories.map((theory, i) => (
                            <motion.article
                                key={theory.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">{theory.title}</h2>
                                        <p className="text-sm text-primary-light font-code">
                                            Source: {theory.source}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <a
                                            href={theory.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-foreground/50 hover:text-primary-light transition-colors px-3 py-1 glass-card"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                        <a
                                            href={theory.projectLink}
                                            className="text-sm text-foreground/50 hover:text-primary-light transition-colors px-3 py-1 glass-card"
                                        >
                                            Project →
                                        </a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-foreground/70 mb-6">
                                    {theory.description}
                                </p>

                                {/* Formula */}
                                <div className="bg-background/50 rounded-lg p-6 mb-6 text-center overflow-x-auto">
                                    <div className="text-xl text-primary-light">
                                        <MathBlock formula={theory.formula} />
                                    </div>
                                </div>

                                {/* Explanation */}
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-3">
                                        Where:
                                    </h3>
                                    <ul className="space-y-2">
                                        {theory.explanation.map((item, j) => (
                                            <li key={j} className="flex items-center flex-wrap gap-x-1 text-sm text-foreground/60">
                                                <span className="text-primary mr-1">•</span>
                                                {renderWithMath(item)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
