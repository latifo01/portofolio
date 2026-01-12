
"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    year: string;
    title: string;
    organization: string;
    description: string;
    type: "education" | "experience";
}

const timelineData: TimelineItem[] = [
    {
        year: "2025 - Present",
        title: "MSc 280 - Data Science & Quantitative Finance",
        organization: "Paris-Dauphine University",
        description: "Specialization in Machine Learning, Deep Learning, and Stochastic Calculus.",
        type: "education",
    },
    {
        year: "2024 - 2025",
        title: "M1 Applied Mathematics",
        organization: "Paris-Dauphine University",
        description: "Advanced Statistics, Optimization, and Probability Theory.",
        type: "education",
    },
    {
        year: "2021 - 2024",
        title: "BSc in Applied Mathematics",
        organization: "University of Strasbourg - Faculty of Mathematics & Computer Science",
        description: "Foundations of Mathematics and Computer Science.",
        type: "education",
    },
];

export default function Timeline() {
    return (
        <div className="relative max-w-3xl mx-auto py-12">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

            {timelineData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center justify-between mb-8 md:mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                >
                    {/* Dot on the line */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary glow z-10" />

                    {/* Content */}
                    <div className="ml-10 md:ml-0 md:w-[45%]">
                        <div className="glass-card p-6 relative">
                            <span className="inline-block px-3 py-1 mb-2 text-xs font-code text-primary-light bg-primary/10 rounded-full">
                                {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                            <div className="text-secondary font-medium mb-2">{item.organization}</div>
                            <p className="text-sm text-foreground/70">{item.description}</p>

                            {/* Connector Line for Desktop */}
                            <div
                                className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-px bg-primary/30 ${index % 2 === 0 ? "-right-4" : "-left-4"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="hidden md:block md:w-[45%]" />
                </motion.div>
            ))}
        </div>
    );
}
