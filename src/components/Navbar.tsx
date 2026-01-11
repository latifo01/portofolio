"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Theory", href: "/theory" },
    { label: "LLM & AI", href: "/llm" },
    { label: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-code font-bold text-xl">
                        <span className="gradient-text">IYA</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* CV Download Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors duration-200 text-sm font-medium">
                                <Download className="w-4 h-4" />
                                CV
                            </button>
                            <div className="absolute top-full right-0 mt-2 py-2 w-32 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <a
                                    href="/cv/CV_Ibrahim_FR.pdf"
                                    download
                                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors"
                                >
                                    🇫🇷 Français
                                </a>
                                <a
                                    href="/cv/CV_Ibrahim_EN.pdf"
                                    download
                                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-colors"
                                >
                                    🇬🇧 English
                                </a>
                            </div>
                        </div>

                        <a
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu"
                            className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary-light text-sm font-medium hover:bg-primary/20 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground/70 hover:text-foreground transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile CV Downloads */}
                            <div className="flex gap-2">
                                <a
                                    href="/cv/CV_Ibrahim_FR.pdf"
                                    download
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 glass-card text-foreground/70 hover:text-foreground text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    🇫🇷 CV
                                </a>
                                <a
                                    href="/cv/CV_Ibrahim_EN.pdf"
                                    download
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 glass-card text-foreground/70 hover:text-foreground text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    🇬🇧 CV
                                </a>
                            </div>

                            <a
                                href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu"
                                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary-light text-center"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
