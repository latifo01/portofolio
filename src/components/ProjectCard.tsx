import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink, Github, TriangleAlert } from "lucide-react";
import type { Project } from "@/data/projects";

function ProjectSignal({ project }: { project: Project }) {
    if (project.image) {
        return (
            <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[0.12] transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0"
            />
        );
    }

    if (project.visual === "agent") {
        return (
            <svg viewBox="0 0 640 320" className="h-full w-full" role="img" aria-label="Agent workflow diagram">
                <rect width="640" height="320" fill="#15171b" />
                <path d="M72 160H568" stroke="#fbfaf6" strokeOpacity=".25" />
                {[100, 245, 390, 535].map((x, index) => (
                    <g key={x}>
                        <circle cx={x} cy="160" r="42" fill={index === 2 ? "#d9ff55" : "#fbfaf6"} />
                        <text x={x} y="166" textAnchor="middle" fontFamily="monospace" fontSize="13" fontWeight="700" fill="#15171b">
                            {String(index + 1).padStart(2, "0")}
                        </text>
                    </g>
                ))}
                <path d="M140 160h58m85 0h58m87 0h58" stroke="#ff4d2f" strokeWidth="4" strokeDasharray="7 7" />
                <text x="42" y="278" fill="#fbfaf6" fillOpacity=".5" fontFamily="monospace" fontSize="11" letterSpacing="2">PROFILE → RECOMMEND → VALIDATE → APPROVE</text>
            </svg>
        );
    }

    return (
        <div className="data-grid h-full w-full bg-background-secondary p-8">
            <svg viewBox="0 0 640 260" className="h-full w-full" role="img" aria-label="Project evidence signal">
                <path d="M10 210 C90 230 112 80 190 126 S300 218 360 104 S500 54 630 68" fill="none" stroke="#2457ff" strokeWidth="5" />
                <path d="M10 225 C96 184 136 206 202 158 S318 72 390 142 S518 212 630 114" fill="none" stroke="#ff4d2f" strokeWidth="3" />
                {[72, 190, 360, 520].map((x, index) => <circle key={x} cx={x} cy={[193, 126, 104, 70][index]} r="7" fill="#15171b" />)}
            </svg>
        </div>
    );
}

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
    const hasCode = project.links.some((link) => link.kind === "code");
    const hasDemo = project.links.some((link) => link.kind === "demo");

    return (
        <Link href={`/projects/${project.id}`} className="group block h-full" aria-label={`Read the ${project.title} case study`}>
            <article className="paper-card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-[0_18px_50px_rgba(21,23,27,0.12)]">
                {!compact && (
                    <div className="relative h-52 overflow-hidden border-b border-foreground/20 bg-background-secondary">
                        <ProjectSignal project={project} />
                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                            <span className="rounded-full border border-foreground bg-paper px-3 py-1 font-code text-[9px] font-bold uppercase tracking-[0.13em]">
                                {project.ordinal} / {project.status}
                            </span>
                        </div>
                    </div>
                )}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-5">
                        <div>
                            <p className="font-code text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{project.context}</p>
                            <h3 className="mt-3 text-2xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-3xl">{project.shortTitle}</h3>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                    <p className="mt-4 text-sm font-semibold leading-relaxed text-secondary">{project.tagline}</p>
                    <p className={`mt-3 text-sm leading-relaxed text-foreground/64 ${compact ? "line-clamp-3" : "line-clamp-4"}`}>{project.summary}</p>

                    {!compact && (
                        <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 border-y border-foreground/15 py-4">
                            <p className="text-3xl font-bold tracking-[-0.05em]">{project.evidence[0].value}</p>
                            <div>
                                <p className="font-code text-[9px] font-bold uppercase tracking-[0.15em]">{project.evidence[0].label}</p>
                                <p className="mt-1 text-xs leading-relaxed text-foreground/52">{project.evidence[0].note}</p>
                            </div>
                        </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, compact ? 3 : 5).map((tech) => (
                            <span key={tech} className="rounded-full border border-foreground/20 px-2.5 py-1 font-code text-[9px] uppercase tracking-[0.1em]">{tech}</span>
                        ))}
                    </div>

                    {!compact && (
                        <div className="mt-5 flex items-start gap-2 rounded-xl bg-background-secondary p-3 text-xs leading-relaxed text-foreground/62">
                            <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span className="line-clamp-2">{project.limitation}</span>
                        </div>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-foreground/15 pt-5 text-xs font-semibold">
                        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#2f9d67]" /> Evidence case study</span>
                        <span className="flex items-center gap-2 text-foreground/45">
                            {hasCode && <Github className="h-3.5 w-3.5" aria-label="Code available" />}
                            {hasDemo && <ExternalLink className="h-3.5 w-3.5" aria-label="Demo available" />}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}
