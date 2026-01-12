
"use client";

import { motion } from "framer-motion";

interface Skill {
    name: string;
    level: number; // 1-5 or percentage
    category: "ml" | "math" | "tools";
}

const skills: Skill[] = [
    // Machine Learning & AI
    { name: "XGBoost / LightGBM", level: 90, category: "ml" },
    { name: "Scikit-Learn", level: 95, category: "ml" },
    { name: "Deep Learning (Keras/PyTorch)", level: 85, category: "ml" },
    { name: "NLP (Transformers)", level: 80, category: "ml" },

    // Mathematics & Statistics
    { name: "Monte Carlo Simulation", level: 90, category: "math" },
    { name: "Stochastic Calculus", level: 85, category: "math" },
    { name: "Time Series Analysis", level: 85, category: "math" },
    { name: "Bayesian Statistics", level: 80, category: "math" },

    // Programming & Tools
    { name: "Python", level: 95, category: "tools" },
    { name: "R / Shiny", level: 90, category: "tools" },
    { name: "C++", level: 75, category: "tools" },
    { name: "SQL", level: 85, category: "tools" },
    { name: "Git", level: 80, category: "tools" },
];

const categories = {
    ml: "Machine Learning & AI",
    math: "Mathematics & Statistics",
    tools: "Programming & Tools",
};

export default function Skills() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((category, idx) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="glass-card p-6"
                >
                    <h3 className="text-xl font-bold mb-6 gradient-text text-center">
                        {categories[category]}
                    </h3>
                    <div className="space-y-4">
                        {skills
                            .filter((s) => s.category === category)
                            .map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-code text-foreground/80">
                                            {skill.name}
                                        </span>
                                        <span className="text-xs text-foreground/40 font-code">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-1.5 bg-background-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-accent-gradient"
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
