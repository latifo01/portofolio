"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    period: string;
    title: string;
    organization: string;
    focus: string;
}

const timelineData: TimelineItem[] = [
    {
        period: "2025 - Present",
        title: "MSc 280 Data Science and Quantitative Finance",
        organization: "Paris-Dauphine University",
        focus: "Machine learning, stochastic modeling, quantitative methods, and decision systems.",
    },
    {
        period: "2024 - 2025",
        title: "M1 Applied Mathematics",
        organization: "Paris-Dauphine University",
        focus: "Probability, statistics, optimization, and rigorous modeling foundations.",
    },
    {
        period: "2021 - 2024",
        title: "BSc Applied Mathematics",
        organization: "University of Strasbourg",
        focus: "Mathematics, algorithms, and scientific computing fundamentals.",
    },
];

export default function Timeline() {
    return (
        <div className="relative mx-auto max-w-3xl py-4">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

            {timelineData.map((item, index) => (
                <motion.div
                    key={item.period}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.14 }}
                    className={`relative mb-8 flex items-start justify-between md:mb-10 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                    <div className="absolute left-4 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background glow md:left-1/2" />

                    <div className="ml-10 md:ml-0 md:w-[44%]">
                        <article className="glass-card p-6">
                            <p className="font-code text-xs uppercase tracking-[0.24em] text-primary-light mb-3">
                                {item.period}
                            </p>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-secondary mt-1 mb-3">{item.organization}</p>
                            <p className="text-sm leading-relaxed text-foreground/68">{item.focus}</p>
                        </article>
                    </div>

                    <div className="hidden md:block md:w-[44%]" />
                </motion.div>
            ))}
        </div>
    );
}
