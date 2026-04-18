"use client";

import { motion } from "framer-motion";

const capabilityGroups = [
    {
        title: "Build",
        description: "Shipping projects from data prep to reproducible execution.",
        items: ["Python", "Pandas", "scikit-learn", "XGBoost", "Docker", "Git"],
    },
    {
        title: "Model",
        description: "Working comfortably across statistics, optimization, and simulation.",
        items: [
            "Time series",
            "Monte Carlo",
            "Reinforcement learning",
            "Signal processing",
            "Clustering",
            "Econometrics",
        ],
    },
    {
        title: "Deliver",
        description: "Making technical work usable by stakeholders and reviewers.",
        items: ["R Shiny", "Dashboards", "Experiment reports", "Visual storytelling", "C++", "SQL"],
    },
];

export default function Skills() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {capabilityGroups.map((group, index) => (
                <motion.article
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="glass-card p-6"
                >
                    <p className="font-code text-xs uppercase tracking-[0.25em] text-primary-light mb-3">
                        {group.title}
                    </p>
                    <h3 className="text-2xl font-semibold mb-3">{group.title} with intent</h3>
                    <p className="text-sm text-foreground/65 leading-relaxed mb-5">
                        {group.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-border bg-white/5 px-3 py-2 text-sm text-foreground/80"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.article>
            ))}
        </div>
    );
}
