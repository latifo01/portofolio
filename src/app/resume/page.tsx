import type { Metadata } from "next";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Resume",
    description: "Accessible resume for Ibrahim Youssouf Abdelatif, Data Scientist and Applied AI practitioner.",
};

const experience = [
    {
        period: "Apr — Sep 2026",
        role: "Agentic AI Data Scientist Intern",
        company: "BNP Paribas — Data Office Europe Mediterranean",
        details: [
            "Experimenting with agentic AI solutions and evaluating internal LLM infrastructure for reliability, performance and business fit.",
            "Framing use cases across business, IT, privacy and model-evaluation constraints from feasibility to deployment.",
            "Building agent workflows on the group’s internal LLM platform.",
        ],
    },
    {
        period: "Jun — Sep 2025",
        role: "Data Scientist Intern",
        company: "Deloitte Chad",
        details: [
            "Built ARIMA and Prophet forecasting workflows for 2026 budget projections, reporting a 12% MAPE reduction against the prior approach.",
            "Created Power BI reporting that reduced manual processing time by a reported 14%.",
            "Worked with finance and IT stakeholders to translate business needs into analytical specifications.",
        ],
    },
    {
        period: "Oct 2024 — May 2025",
        role: "Junior Researcher — Non-linear dimensionality reduction",
        company: "Paris-Dauphine University — PSL",
        details: [
            "Compared linear PCA and Kernel PCA on high-dimensional datasets.",
            "Implemented reproducible evaluation and latent-space visualisation workflows in Python.",
        ],
    },
];

const education = [
    ["2025 — 2026", "M2 Statistical & Financial Engineering — Data Science", "Paris-Dauphine University — PSL"],
    ["2024 — 2025", "M1 Applied Mathematics — Statistics", "Paris-Dauphine University — PSL"],
    ["2021 — 2024", "BSc Applied Mathematics", "University of Strasbourg"],
];

export default function ResumePage() {
    return (
        <main id="main-content" className="min-h-screen">
            <Navbar />
            <article className="px-3 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
                <div className="section-shell">
                    <header className="grid gap-8 border-y border-foreground py-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
                        <div>
                            <span className="section-label">Accessible resume</span>
                            <p className="mt-5 font-code text-[10px] uppercase tracking-[0.15em] text-foreground/48">HTML version · Updated July 2026</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.065em] sm:text-7xl">Ibrahim Youssouf <span className="display-serif text-primary">Abdelatif.</span></h1>
                            <p className="mt-5 text-xl font-semibold text-secondary">Junior Data Scientist · Applied AI</p>
                            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/64">M2 Data Science student at Paris-Dauphine and Agentic AI Data Scientist Intern at BNP Paribas. Mathematical foundations, stakeholder-facing data science and end-to-end AI system delivery.</p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a href="/cv/CV_Ibrahim_EN.pdf" download className="button-primary"><Download className="h-4 w-4" /> English PDF</a>
                                <a href="/cv/CV_Ibrahim_FR.pdf" download className="button-secondary"><Download className="h-4 w-4" /> CV français</a>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-foreground/60">
                                <a href="mailto:ibrahim-youssouf.abdelatif@dauphine.eu" className="inline-flex min-h-11 items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> Email</a>
                                <a href="https://github.com/latifo01" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-primary"><Github className="h-4 w-4" /> GitHub</a>
                                <a href="https://www.linkedin.com/in/abdelatif-ibrahim/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                            </div>
                        </div>
                    </header>

                    <section className="mt-16 grid gap-8 lg:grid-cols-[0.68fr_1.32fr]" aria-labelledby="experience-title">
                        <div><span className="section-label">Experience</span><h2 id="experience-title" className="mt-6 text-4xl font-bold tracking-[-0.05em]">Work with a decision context.</h2></div>
                        <div className="border-t border-foreground">
                            {experience.map((item) => (
                                <article key={`${item.period}-${item.role}`} className="grid gap-3 border-b border-foreground/20 py-6 sm:grid-cols-[130px_1fr]">
                                    <p className="font-code text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{item.period}</p>
                                    <div>
                                        <h3 className="text-xl font-bold">{item.role}</h3>
                                        <p className="mt-1 text-sm font-semibold text-secondary">{item.company}</p>
                                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/64">{item.details.map((detail) => <li key={detail} className="grid grid-cols-[12px_1fr] gap-2"><span aria-hidden="true">—</span><span>{detail}</span></li>)}</ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 grid gap-8 lg:grid-cols-[0.68fr_1.32fr]" aria-labelledby="education-title">
                        <div><span className="section-label">Education</span><h2 id="education-title" className="mt-6 text-4xl font-bold tracking-[-0.05em]">Applied mathematics to AI systems.</h2></div>
                        <div className="border-t border-foreground">{education.map(([period, degree, school]) => <article key={degree} className="grid gap-3 border-b border-foreground/20 py-6 sm:grid-cols-[130px_1fr]"><p className="font-code text-[10px] font-bold uppercase tracking-[0.14em] text-primary">{period}</p><div><h3 className="text-lg font-bold">{degree}</h3><p className="mt-1 text-sm text-foreground/60">{school}</p></div></article>)}</div>
                    </section>

                    <section className="mt-16 grid gap-5 lg:grid-cols-3" aria-label="Technical skills">
                        {[
                            ["Data Science", "Python, Pandas, NumPy, scikit-learn, XGBoost, R, SQL, time series and clustering."],
                            ["Applied AI", "RAG, LangGraph, FastAPI, Pydantic, model orchestration, structured evaluation and human review."],
                            ["Delivery", "Docker, Git, React, Next.js, R Shiny, Cloud Run, Vercel, Power BI and reproducible reporting."],
                        ].map(([title, text]) => <article key={title} className="paper-card p-6"><p className="font-code text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{title}</p><p className="mt-4 text-sm leading-relaxed text-foreground/64">{text}</p></article>)}
                    </section>

                    <section className="mt-16 border-y border-foreground py-8">
                        <p className="font-code text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/45">Languages</p>
                        <p className="mt-4 text-2xl font-bold tracking-[-0.03em]">French & Arabic — native · English — C1 fluent</p>
                    </section>
                </div>
            </article>
            <Footer />
        </main>
    );
}
