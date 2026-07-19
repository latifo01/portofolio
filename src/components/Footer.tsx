import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
    { label: "Selected work", href: "/projects" },
    { label: "Applied AI", href: "/llm" },
    { label: "Methods", href: "/theory" },
    { label: "Accessible resume", href: "/resume" },
];

export default function Footer() {
    return (
        <footer className="border-t border-foreground bg-foreground px-4 py-12 text-white sm:px-6">
            <div className="section-shell">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.7fr]">
                    <div>
                        <p className="font-code text-xs uppercase tracking-[0.22em] text-white/55">Ibrahim Abdelatif / Paris</p>
                        <p className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                            Rigorous data science. Applied AI with visible boundaries.
                        </p>
                        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/62">
                            M2 Data Science at Paris-Dauphine. Building auditable experiments, useful interfaces and tested AI systems.
                        </p>
                    </div>

                    <div>
                        <p className="font-code text-xs uppercase tracking-[0.22em] text-white/45">Navigate</p>
                        <div className="mt-4 flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-sm text-white/72 hover:text-white">
                                    {link.label}
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-code text-xs uppercase tracking-[0.22em] text-white/45">Connect</p>
                        <div className="mt-4 flex gap-2">
                            <a href="https://github.com/latifo01" target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:bg-white hover:text-foreground" aria-label="GitHub profile">
                                <Github className="h-4 w-4" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdelatif-ibrahim/" target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:bg-white hover:text-foreground" aria-label="LinkedIn profile">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20contact" className="grid h-11 w-11 place-items-center rounded-full border border-white/25 hover:bg-white hover:text-foreground" aria-label="Send an email">
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 font-code text-[10px] uppercase tracking-[0.18em] text-white/42 sm:flex-row sm:justify-between">
                    <p>© {new Date().getFullYear()} Ibrahim Youssouf Abdelatif</p>
                    <p>Designed as an evidence dossier · Accessible by default</p>
                </div>
            </div>
        </footer>
    );
}
