import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Methods", href: "/theory" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
];

const resumeLinks = [
    { label: "CV FR", href: "/cv/CV_Ibrahim_FR.pdf" },
    { label: "CV EN", href: "/cv/CV_Ibrahim_EN.pdf" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border px-6 py-12">
            <div className="section-shell">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <Link href="/" className="font-code text-lg font-semibold tracking-[0.18em] text-primary-light">
                            IYA
                        </Link>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/62">
                            Applied mathematics student building data science projects with strong statistical grounding
                            and delivery-ready execution.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                            Explore
                        </h4>
                        <div className="flex flex-col gap-3 text-sm text-foreground/68">
                            {quickLinks.map((item) => (
                                <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex flex-wrap gap-3 pt-2">
                                {resumeLinks.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        download
                                        className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-2 text-xs transition-colors hover:text-foreground"
                                    >
                                        <Download className="h-3.5 w-3.5" />
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/latifo01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-2xl border border-border bg-white/5 p-3 transition-colors hover:bg-white/10"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-2xl border border-border bg-white/5 p-3 transition-colors hover:bg-white/10"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Portfolio%20Contact"
                                className="rounded-2xl border border-border bg-white/5 p-3 transition-colors hover:bg-white/10"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-border pt-6 text-sm text-foreground/42">
                    <p>Copyright {new Date().getFullYear()} Ibrahim Youssouf Abdelatif.</p>
                </div>
            </div>
        </footer>
    );
}
