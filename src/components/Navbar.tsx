"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Methods", href: "/theory" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

const resumeLinks = [
    { label: "CV FR", href: "/cv/CV_Ibrahim_FR.pdf" },
    { label: "CV EN", href: "/cv/CV_Ibrahim_EN.pdf" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : ""}`}
        >
            <div className="section-shell px-6 py-4">
                <div className="flex items-center justify-between gap-6">
                    <Link href="/" className="font-code text-lg font-semibold tracking-[0.18em] text-primary-light">
                        IYA
                    </Link>

                    <div className="hidden items-center gap-7 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-foreground/72 transition-colors duration-200 hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <div className="relative group">
                            <button className="flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground">
                                <Download className="h-4 w-4" />
                                Resume
                            </button>
                            <div className="invisible absolute right-0 top-full mt-2 w-32 rounded-2xl border border-border bg-background-secondary/95 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                {resumeLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        download
                                        className="block rounded-xl px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-white/5 hover:text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20Contact"
                            className="rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:scale-[1.02]"
                        >
                            Get in touch
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen((current) => !current)}
                        className="rounded-full border border-border bg-white/5 p-2 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 rounded-3xl border border-border bg-background-secondary/90 p-4 md:hidden"
                    >
                        <div className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-2xl px-3 py-2 text-sm font-medium text-foreground/72 transition-colors hover:bg-white/5 hover:text-foreground"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="grid grid-cols-2 gap-2 pt-2">
                                {resumeLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        download
                                        onClick={() => setIsOpen(false)}
                                        className="rounded-2xl border border-border bg-white/5 px-3 py-2 text-center text-sm text-foreground/75"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <a
                                href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20Contact"
                                className="rounded-2xl bg-accent-gradient px-4 py-3 text-center text-sm font-semibold text-slate-950"
                            >
                                Get in touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
