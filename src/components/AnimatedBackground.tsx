"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

interface DataSymbol {
    id: number;
    symbol: string;
    x: number;
    y: number;
    duration: number;
    delay: number;
}

const DATA_SYMBOLS = ["Σ", "μ", "σ", "∫", "∂", "∇", "λ", "π", "θ", "α", "β", "γ"];

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [dataSymbols, setDataSymbols] = useState<DataSymbol[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate particles
        const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);

        // Generate data symbols
        const newSymbols: DataSymbol[] = Array.from({ length: 12 }, (_, i) => ({
            id: i,
            symbol: DATA_SYMBOLS[i % DATA_SYMBOLS.length],
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 25 + 20,
            delay: Math.random() * 8,
        }));
        setDataSymbols(newSymbols);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {/* Gradient Orbs */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
                    top: "10%",
                    left: "-10%",
                    filter: "blur(60px)",
                }}
                animate={{
                    x: [0, 100, 50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
                    top: "50%",
                    right: "-5%",
                    filter: "blur(60px)",
                }}
                animate={{
                    x: [0, -80, -40, 0],
                    y: [0, -60, 30, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, rgba(102,126,234,0.4) 0%, transparent 70%)",
                    bottom: "10%",
                    left: "30%",
                    filter: "blur(60px)",
                }}
                animate={{
                    x: [0, 60, -30, 0],
                    y: [0, -40, 20, 0],
                    scale: [1, 1.2, 0.95, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Neural Network Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full neural-particle"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: "radial-gradient(circle, rgba(165,180,252,0.9) 0%, rgba(99,102,241,0.4) 100%)",
                        boxShadow: "0 0 10px rgba(99,102,241,0.5), 0 0 20px rgba(99,102,241,0.3)",
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                        opacity: [0.4, 0.8, 0.5, 0.4],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0)" />
                        <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                    </linearGradient>
                </defs>
                {particles.slice(0, 10).map((p1, i) =>
                    particles.slice(i + 1, i + 4).map((p2, j) => (
                        <motion.line
                            key={`${p1.id}-${p2.id}`}
                            x1={`${p1.x}%`}
                            y1={`${p1.y}%`}
                            x2={`${p2.x}%`}
                            y2={`${p2.y}%`}
                            stroke="url(#lineGradient)"
                            strokeWidth="0.5"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 8 + j * 2,
                                delay: i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))
                )}
            </svg>

            {/* Floating Data Science Symbols */}
            {dataSymbols.map((symbol) => (
                <motion.div
                    key={symbol.id}
                    className="absolute font-code text-primary/20 select-none"
                    style={{
                        left: `${symbol.x}%`,
                        top: `${symbol.y}%`,
                        fontSize: "1.5rem",
                        textShadow: "0 0 10px rgba(99,102,241,0.3)",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: symbol.duration,
                        delay: symbol.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {symbol.symbol}
                </motion.div>
            ))}

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            />
        </div>
    );
}
