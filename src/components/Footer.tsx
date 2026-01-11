import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-code font-bold text-xl">
                            <span className="gradient-text">IYA</span>
                        </Link>
                        <p className="text-foreground/50 text-sm mt-2">
                            Data Scientist & Applied Mathematician
                        </p>
                        <p className="text-foreground/40 text-xs mt-1">
                            Paris-Dauphine University • MSc 280
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2 text-sm text-foreground/60">
                            <Link href="/projects" className="hover:text-foreground transition-colors">
                                Projects
                            </Link>
                            <Link href="/theory" className="hover:text-foreground transition-colors">
                                Core Theory
                            </Link>
                            <Link href="/blog" className="hover:text-foreground transition-colors">
                                Blog
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/latifo01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 glass-card hover:bg-primary/10 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/abdelatif-ibrahim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 glass-card hover:bg-primary/10 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu?subject=Contact%20via%20Portfolio"
                                className="p-2 glass-card hover:bg-primary/10 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-border text-center text-sm text-foreground/40">
                    <p className="flex items-center justify-center gap-1">
                        © {new Date().getFullYear()} Ibrahim Youssouf ABDELATIF. Built with
                        <Heart className="w-4 h-4 text-red-500" />
                        using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
