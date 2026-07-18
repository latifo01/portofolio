"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, Menu, X } from "lucide-react";

const navItems = [
    { label: "Work", href: "/projects" },
    { label: "AI systems", href: "/llm" },
    { label: "Methods", href: "/theory" },
    { label: "About", href: "/#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            aria-label="Primary navigation"
            className={`fixed inset-x-0 top-0 z-50 border-b border-foreground/15 transition-colors ${
                scrolled ? "bg-background/95 backdrop-blur-xl" : "bg-background/80 backdrop-blur-md"
            }`}
        >
            <div className="section-shell flex h-[72px] items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-3" aria-label="Ibrahim Abdelatif — home">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-foreground bg-foreground font-code text-xs font-bold text-white">
                        IA
                    </span>
                    <span className="hidden leading-none sm:block">
                        <span className="block text-sm font-bold tracking-tight">IBRAHIM ABDELATIF</span>
                        <span className="mt-1 block font-code text-[9px] uppercase tracking-[0.18em] text-foreground/55">
                            Evidence portfolio / 2026
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-6 lg:flex">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm font-semibold hover:text-primary">
                            {item.label}
                        </Link>
                    ))}
                    <span className="h-6 w-px bg-foreground/20" />
                    <Link href="/resume" className="button-quiet px-4 py-2">
                        <ArrowDownToLine className="h-4 w-4" />
                        Resume
                    </Link>
                    <a
                        href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20contact"
                        className="button-primary px-4 py-2"
                    >
                        Start a conversation
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    className="grid min-h-11 min-w-11 place-items-center rounded-full border border-foreground bg-paper lg:hidden"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? "Close navigation" : "Open navigation"}
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {isOpen && (
                <div id="mobile-navigation" className="section-shell border-t border-foreground/15 py-4 lg:hidden">
                    <div className="paper-card-strong flex flex-col gap-1 p-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-background-secondary"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/resume" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-background-secondary">
                            Resume & downloads
                        </Link>
                        <a
                            href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20contact"
                            className="button-primary mt-2"
                        >
                            Start a conversation
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
