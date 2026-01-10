"use client";

import { motion } from "framer-motion";
import { PenLine, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const upcomingTopics = [
    "Understanding Monte Carlo Variance Reduction Techniques",
    "Markov Decision Processes Explained Simply",
    "From Notebooks to Production: ML Pipeline Best Practices",
    "Customer Segmentation: When to Use K-Means vs GMM",
    "The Math Behind XGBoost Gradient Boosting",
];

export default function BlogPage() {
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
                            <PenLine className="w-4 h-4 text-primary" />
                            <span className="text-sm font-code text-primary-light">Coming Soon</span>
                        </div>

                        <h1 className="text-5xl font-bold mb-4">
                            <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            Technical articles on Data Science, Machine Learning, and Applied Mathematics.
                            Sharing insights from my projects and research.
                        </p>
                    </motion.div>

                    {/* Upcoming Topics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-8 mb-12"
                    >
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            Upcoming Topics
                        </h2>
                        <ul className="space-y-4">
                            {upcomingTopics.map((topic, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-3 text-foreground/70"
                                >
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    {topic}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Subscribe CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-foreground/60 mb-6">
                            Follow me on LinkedIn to be notified when new articles are published.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gradient rounded-full font-semibold glow-hover transition-all duration-300 hover:scale-105"
                        >
                            Follow on LinkedIn
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
