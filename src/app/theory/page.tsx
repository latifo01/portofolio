"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const theories = [
    {
        id: "bellman",
        title: "Bellman Optimality Equation",
        source: "Reinforcement Learning Project",
        description: "The Bellman equation describes the relationship between the value of a state and the values of successor states. It forms the foundation of dynamic programming solutions to MDPs.",
        formula: "V*(s) = maxₐ [ Σₛ' P(s'|s,a) × (R(s'|s,a) + γ × V*(s')) ]",
        explanation: [
            "V*(s) is the optimal value function for state s",
            "P(s'|s,a) is the transition probability from s to s' given action a",
            "R(s'|s,a) is the reward for the transition",
            "γ (gamma) is the discount factor for future rewards (0 < γ < 1)",
        ],
        projectLink: "/projects/reinforcement-learning",
    },
    {
        id: "importance-sampling",
        title: "Importance Sampling",
        source: "Monte Carlo Methods Project",
        description: "Importance sampling is a variance reduction technique that samples from a proposal distribution and reweights the samples. It's particularly useful for estimating rare event probabilities.",
        formula: "δ_IS = (1/n) × Σᵢ [ f(Xᵢ) × 𝟙{Xᵢ ≥ q} / g(Xᵢ) ]",
        explanation: [
            "f(x) is the target density function",
            "g(x) is the proposal distribution (e.g., Cauchy centered at q)",
            "𝟙{Xᵢ ≥ q} is the indicator function",
            "Variance reduction is achieved when g(x) is chosen to match the integrand shape",
        ],
        projectLink: "/projects/monte-carlo-methods",
    },
    {
        id: "kmeans",
        title: "K-Means Clustering",
        source: "Customer Segmentation Project",
        description: "K-Means aims to partition n observations into k clusters by minimizing the within-cluster sum of squares (inertia). Each observation belongs to the cluster with the nearest centroid.",
        formula: "W = Σₖ Σᵢ∈Cₖ ||xᵢ - μₖ||²",
        explanation: [
            "W is the total within-cluster variance (inertia)",
            "Cₖ is the set of points in cluster k",
            "μₖ is the centroid of cluster k",
            "The algorithm iterates: assign points to nearest centroid, update centroids",
        ],
        projectLink: "/projects/customer-segmentation",
    },
    {
        id: "boxcox",
        title: "Box-Cox Transformation",
        source: "Bike Sharing GLM Project",
        description: "Box-Cox transformation is used to stabilize variance and make the data more normally distributed. It's a family of power transformations indexed by parameter λ.",
        formula: "y^(λ) = (y^λ - 1) / λ when λ ≠ 0, or ln(y) when λ = 0",
        explanation: [
            "λ = 1: No transformation (linear)",
            "λ = 0: Natural logarithm transformation",
            "λ = 0.5: Square root transformation",
            "λ = -1: Reciprocal transformation",
        ],
        projectLink: "/projects/bike-sharing-glm",
    },
];

export default function TheoryPage() {
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
                            Mathematical foundations behind my projects. Each concept is directly verifiable
                            in the corresponding project implementation.
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
                                    <a
                                        href={theory.projectLink}
                                        className="text-sm text-foreground/50 hover:text-primary-light transition-colors"
                                    >
                                        View Project →
                                    </a>
                                </div>

                                {/* Description */}
                                <p className="text-foreground/70 mb-6">
                                    {theory.description}
                                </p>

                                {/* Formula */}
                                <div className="bg-background/50 rounded-lg p-6 mb-6 text-center">
                                    <div className="font-code text-xl text-primary-light">
                                        {theory.formula}
                                    </div>
                                </div>

                                {/* Explanation */}
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-3">
                                        Where:
                                    </h3>
                                    <ul className="space-y-2">
                                        {theory.explanation.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-foreground/60">
                                                <span className="text-primary mt-0.5">•</span>
                                                {item}
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
